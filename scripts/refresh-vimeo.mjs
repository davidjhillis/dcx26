#!/usr/bin/env node
// Refresh content/videos/vimeo.json from the public Vimeo v2 API.
// No auth required for this endpoint.
// Run: node scripts/refresh-vimeo.mjs

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const USERNAME = "ingeniuxcorporation";
const OUT = resolve(process.cwd(), "content/videos/vimeo.json");

async function fetchPage(page) {
  const res = await fetch(
    `https://vimeo.com/api/v2/${USERNAME}/videos.json?page=${page}`
  );
  if (!res.ok) throw new Error(`page ${page}: ${res.status}`);
  return res.json();
}

const all = [];
const seen = new Set();
for (let p = 1; p <= 10; p++) {
  const items = await fetchPage(p);
  if (!items?.length) break;
  for (const v of items) {
    if (seen.has(v.id)) continue;
    seen.add(v.id);
    all.push({
      id: v.id,
      title: v.title,
      description: v.description || "",
      url: v.url,
      uploadDate: v.upload_date || "",
      thumbnail: v.thumbnail_large || "",
      duration: v.duration || 0,
      width: v.width,
      height: v.height,
    });
  }
  if (items.length < 20) break;
}

writeFileSync(OUT, JSON.stringify(all, null, 2));
console.log(`✓ wrote ${all.length} videos → ${OUT}`);
