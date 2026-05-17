// Build-time CSV → typed Post[] for the blog.
// CSV lives at <repo>/content/blog/posts.csv. Parsed once when this
// module is first imported (i.e. once per build, never at runtime).

import { parse } from "csv-parse/sync";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  image?: string;
  thumb?: string;
  author?: string;
  category?: string;
  readingTime?: string;
  publishedAt: string; // ISO
  featured: boolean;
  draft: boolean;
};

function parseDate(s: string): string {
  // CSV gives "Mon Nov 10 2025 16:58:34 GMT+0000 (Coordinated Universal Time)"
  const d = new Date(s);
  return isNaN(d.getTime()) ? "" : d.toISOString();
}

let cached: Post[] | null = null;

export function getPosts(): Post[] {
  if (cached) return cached;
  const csv = readFileSync(
    resolve(process.cwd(), "content/blog/posts.csv"),
    "utf8"
  );
  const rows: Record<string, string>[] = parse(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  });

  cached = rows
    .map((r) => ({
      slug: (r["Slug"] || "").trim(),
      title: (r["Name"] || "").trim(),
      summary: (r["Post Summary"] || "").trim(),
      body: r["Post Body"] || "",
      image: (r["Main Image"] || "").trim() || undefined,
      thumb: (r["Thumbnail image"] || "").trim() || undefined,
      author: (r["Author"] || "").trim() || undefined,
      category: (r["Category"] || "").trim() || undefined,
      readingTime: (r["Reading Time"] || "").trim() || undefined,
      publishedAt: parseDate(r["Published On"] || r["Updated On"] || ""),
      featured: (r["Featured?"] || "").toLowerCase() === "true",
      draft: (r["Draft"] || "").toLowerCase() === "true",
    }))
    .filter((p) => p.slug && p.title && !p.draft)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

  return cached;
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}
