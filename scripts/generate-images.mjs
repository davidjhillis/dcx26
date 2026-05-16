#!/usr/bin/env node
// Generate brand imagery with Gemini 2.5/3.1 Flash Image (Nano Banana).
// Usage:
//   npm run gen-images              -> generate all prompts not yet on disk
//   npm run gen-images -- --force   -> regenerate everything
//   npm run gen-images -- hero-art  -> generate a single named prompt

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "public/generated");

// Load .env.local
const envPath = resolve(ROOT, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
}

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Brand notes injected into every prompt for visual consistency
const BRAND_DIRECTIVE = `
Visual style: Linear/GitHub-inspired dark theme product imagery.
Background: pure dark charcoal (#08090A) or near-black with subtle
directional light source from top-center. Accent palette: cool teal
(#00C7B7), bright blue (#2F81F7), and soft purple (#A855F7).
Typography hints: clean modern sans (Inter / Space Grotesk).
Avoid: stock photo people, illustrated mascots, busy gradients,
rainbow palettes, generic AI-glow tropes.
Aesthetic: high-contrast, architectural, refined, slightly futuristic.
Composition: generous negative space, single clear focal point.
`.trim();

const prompts = {
  "hero-art": {
    prompt: `Abstract product hero artwork for a B2B headless content
delivery platform. Composition: a luminous central glass-like prism
or geometric shard that splits a single beam of teal light into
multiple colored output beams (blue, teal, soft purple) — visually
suggesting "one source, every channel." Dark background with subtle
grid lines. Cinematic top-down light. Square 1:1 framing acceptable.`,
    aspect: "16:9",
  },
  "platform-architecture": {
    prompt: `Architectural diagram-as-art for a four-layer content
platform. Render as floating frosted-glass panels stacked vertically
labeled Author, Manage, Deliver, Discover — with luminous data flows
connecting them. Wireframe style with teal and blue accent lines.
Dark background, premium technical aesthetic, no actual text labels
(we will overlay text in the page).`,
    aspect: "16:9",
  },
  "delivery-network": {
    prompt: `Abstract visualization of a single content topic radiating
outward through a network to multiple distinct surfaces (docs site,
mobile app, support portal, AI assistant, CRM). Use glowing teal node
at center with thin blue connection lines fanning out to glassy
geometric endpoints. Dark background, depth, soft glow. No text.`,
    aspect: "16:9",
  },
  "og-default": {
    prompt: `Social share card for DiscoverCX — a headless content
delivery platform. Center a luminous teal/blue prism abstract on dark
background. Strong negative space — composition designed for a
headline to be overlaid on the left half. 1.91:1 aspect ratio.`,
    aspect: "16:9",
  },
};

async function generate(name, spec) {
  const body = {
    contents: [
      { parts: [{ text: `${spec.prompt}\n\n${BRAND_DIRECTIVE}` }] },
    ],
    generationConfig: {
      responseModalities: ["IMAGE"],
      ...(spec.aspect ? { imageConfig: { aspectRatio: spec.aspect } } : {}),
    },
  };

  const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`${name}: HTTP ${res.status} ${await res.text()}`);
  }

  const json = await res.json();
  const part = json.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData?.data
  );
  if (!part) {
    throw new Error(`${name}: no image in response — ${JSON.stringify(json).slice(0, 400)}`);
  }

  const buf = Buffer.from(part.inlineData.data, "base64");
  const ext = part.inlineData.mimeType?.includes("png") ? "png" : "jpg";
  const path = resolve(OUT, `${name}.${ext}`);
  writeFileSync(path, buf);
  console.log(`  → wrote ${path} (${(buf.length / 1024).toFixed(0)} KB)`);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const named = args.filter((a) => !a.startsWith("--"));

const targets = named.length
  ? Object.fromEntries(named.map((n) => [n, prompts[n]]).filter(([, v]) => v))
  : prompts;

if (named.length && Object.keys(targets).length === 0) {
  console.error(`No matching prompts. Available: ${Object.keys(prompts).join(", ")}`);
  process.exit(1);
}

console.log(`Generating ${Object.keys(targets).length} image(s) with ${MODEL}...`);

for (const [name, spec] of Object.entries(targets)) {
  const existing = ["png", "jpg"].find((e) => existsSync(resolve(OUT, `${name}.${e}`)));
  if (existing && !force) {
    console.log(`  ⏭  ${name} already exists (--force to regenerate)`);
    continue;
  }
  process.stdout.write(`  · ${name}...\n`);
  try {
    await generate(name, spec);
  } catch (e) {
    console.error(`  ✗ ${name}: ${e.message}`);
  }
}

console.log("Done.");
