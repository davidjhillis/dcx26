// Build-time CSV → typed Post[] for the blog.
// CSV lives at <repo>/content/blog/posts.csv. Parsed once when this
// module is first imported (i.e. once per build, never at runtime).

import { parse } from "csv-parse/sync";
import { existsSync, readFileSync } from "node:fs";
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

// Prefer a locally-generated image at /public/blog/<slug>.{jpg,png}
// over whatever the legacy CSV pointed at. Lets `npm run gen-blog-images`
// drop in new consistent imagery without touching the data layer.
function resolveImage(slug: string, csvImage?: string): string | undefined {
  for (const ext of ["jpg", "png", "webp"]) {
    if (existsSync(resolve(process.cwd(), "public/blog", `${slug}.${ext}`))) {
      return `/blog/${slug}.${ext}`;
    }
  }
  return csvImage || undefined;
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
    .map((r) => {
      const slug = (r["Slug"] || "").trim();
      const csvImage = (r["Main Image"] || "").trim() || undefined;
      const csvThumb = (r["Thumbnail image"] || "").trim() || undefined;
      const generated = resolveImage(slug);
      return {
      slug,
      title: (r["Name"] || "").trim(),
      summary: (r["Post Summary"] || "").trim(),
      body: r["Post Body"] || "",
      image: generated || csvImage,
      thumb: generated || csvThumb,
      author: (r["Author"] || "").trim() || undefined,
      category: (r["Category"] || "").trim() || undefined,
      readingTime: (r["Reading Time"] || "").trim() || undefined,
      publishedAt: parseDate(r["Published On"] || r["Updated On"] || ""),
      featured: (r["Featured?"] || "").toLowerCase() === "true",
      draft: (r["Draft"] || "").toLowerCase() === "true",
      };
    })
    .filter((p) => p.slug && p.title && !p.draft)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

  return cached;
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}
