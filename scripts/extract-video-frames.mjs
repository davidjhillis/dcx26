#!/usr/bin/env node
// For each Vimeo video in content/videos/vimeo.json, navigate a headless
// Chromium to the player URL with #t=<skip>s, wait for playback, then
// screenshot the player canvas and save as public/videos/<id>.jpg.
//
// Run: node scripts/extract-video-frames.mjs
// Requires: playwright (devDependency)

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "playwright";

const PROJECT = process.cwd();
const VIDEOS = JSON.parse(
  readFileSync(resolve(PROJECT, "content/videos/vimeo.json"), "utf8")
);
const OUT_DIR = resolve(PROJECT, "public/videos");
mkdirSync(OUT_DIR, { recursive: true });

function skipSeconds(duration) {
  if (duration > 120) return 30;
  return Math.max(5, Math.floor(duration * 0.15));
}

async function captureVideo(browser, v) {
  const skip = skipSeconds(v.duration);
  const outPath = resolve(OUT_DIR, `${v.id}.jpg`);

  // Skip if already captured and non-trivial size
  if (existsSync(outPath) && statSync(outPath).size > 8 * 1024) {
    return { ok: true, skipped: true, path: outPath };
  }

  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    extraHTTPHeaders: { Referer: "https://discovercx.com/" },
  });
  const page = await ctx.newPage();

  const url = `https://player.vimeo.com/video/${v.id}?autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&background=1#t=${skip}s`;

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    // First wait for the <video> tag to exist + be ready to render frames.
    // NOTE: waitForFunction signature is (fn, arg, options) — pass undefined
    // for arg or playwright treats the options object as the arg.
    await page.waitForFunction(
      () => {
        const vid = document.querySelector("video");
        return Boolean(vid) && vid.readyState >= 2 && vid.videoWidth > 0;
      },
      undefined,
      { timeout: 60000, polling: 500 }
    );
    // Force play (autoplay policy may block) and seek to the skip target.
    await page.evaluate((skip) => {
      const vid = document.querySelector("video");
      if (!vid) return;
      try {
        vid.muted = true;
        vid.currentTime = skip;
        const p = vid.play();
        if (p && p.catch) p.catch(() => {});
      } catch {}
    }, skip);
    // Wait a beat for the seek + paint
    await page.waitForTimeout(2500);

    const videoEl = await page.$("video");
    if (!videoEl) throw new Error("no <video> element");

    const buf = await videoEl.screenshot({ type: "jpeg", quality: 85 });
    writeFileSync(outPath, buf);
    return { ok: true, path: outPath, bytes: buf.length };
  } catch (err) {
    return { ok: false, error: err.message };
  } finally {
    await ctx.close();
  }
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: [
      "--autoplay-policy=no-user-gesture-required",
      "--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies",
    ],
  });

  let done = 0;
  let fail = 0;
  for (const v of VIDEOS) {
    process.stdout.write(`→ ${v.id} (${v.duration}s) ${v.title.slice(0, 50)} ... `);
    const r = await captureVideo(browser, v);
    if (r.ok) {
      done++;
      console.log(r.skipped ? "✓ cached" : `✓ ${(r.bytes / 1024).toFixed(0)}KB`);
    } else {
      fail++;
      console.log(`✗ ${r.error}`);
    }
  }

  await browser.close();
  console.log(`\nDone: ${done} ok, ${fail} failed`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
