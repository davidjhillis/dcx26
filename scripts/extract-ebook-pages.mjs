#!/usr/bin/env node
// Download every ebook PDF and extract each page as a PNG into
// public/ebooks/<slug>/page-NN.png, plus a manifest.json with total pages.
// Run: node scripts/extract-ebook-pages.mjs
//
// Requires: pdftoppm in PATH (brew install poppler).

import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { tmpdir } from "node:os";

import { ebooks } from "../src/app/resources/ebooks/_data.ts";

const PUBLIC = resolve(process.cwd(), "public/ebooks");
const TMP = resolve(tmpdir(), "dcx-ebook-extract");
mkdirSync(TMP, { recursive: true });

function shell(cmd, args) {
  return execFileSync(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
}

async function downloadPdf(url, outPath) {
  if (existsSync(outPath) && statSync(outPath).size > 1000) return outPath;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outPath, buf);
  return outPath;
}

function extractPages(pdfPath, outDir) {
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  // 110 DPI gives nice, sharp pages at ~1100px wide; ~80-150KB per page jpg
  shell("pdftoppm", [
    "-jpeg",
    "-jpegopt",
    "quality=82",
    "-r",
    "110",
    pdfPath,
    resolve(outDir, "page"),
  ]);
  const files = readdirSync(outDir)
    .filter((f) => f.startsWith("page-") && f.endsWith(".jpg"))
    .sort();
  // Rename pdftoppm's "page-1.jpg" / "page-01.jpg" / "page-001.jpg" into a
  // consistent "page-001.jpg" pattern.
  const renamed = files.map((f, i) => {
    const target = `page-${String(i + 1).padStart(3, "0")}.jpg`;
    if (f !== target) {
      shell("mv", [resolve(outDir, f), resolve(outDir, target)]);
    }
    return target;
  });
  return renamed;
}

async function main() {
  for (const e of ebooks) {
    const slug = e.slug;
    const outDir = resolve(PUBLIC, slug);
    const tmpPdf = resolve(TMP, `${slug}.pdf`);
    process.stdout.write(`→ ${slug}: `);
    try {
      await downloadPdf(e.hubspot.pdfUrl, tmpPdf);
      const files = extractPages(tmpPdf, outDir);
      writeFileSync(
        resolve(outDir, "manifest.json"),
        JSON.stringify(
          {
            slug,
            title: e.title,
            totalPages: files.length,
            pages: files,
            sourcePdf: e.hubspot.pdfUrl,
            generatedAt: new Date().toISOString(),
          },
          null,
          2
        )
      );
      console.log(`✓ ${files.length} pages`);
    } catch (err) {
      console.log(`✗ ${err.message}`);
    }
  }
}

main();
