// Build-time read of content/videos/vimeo.json + categorization + slug derivation.

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export type VideoCategory =
  | "Content Matters Podcast"
  | "Content Matters Webinar"
  | "Product Demo"
  | "Product Release"
  | "Product Overview";

export type Video = {
  id: number;
  slug: string;
  title: string;
  displayTitle: string;
  description: string;
  url: string;
  embedUrl: string;
  thumbnail: string;
  duration: number;
  durationLabel: string;
  uploadDate: string; // ISO
  category: VideoCategory;
  series?: string;
  guest?: string;
  featured: boolean;
};

type Raw = {
  id: number;
  title: string;
  description: string;
  url: string;
  uploadDate: string;
  thumbnail: string;
  duration: number;
};

function slugify(s: string, id: number): string {
  const base = s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return `${base}-${id}`;
}

function formatDuration(sec: number): string {
  if (!sec) return "";
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h) return `${h}h ${m}m`;
  if (m >= 10) return `${m} min`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function categorize(title: string): {
  category: VideoCategory;
  displayTitle: string;
  series?: string;
  guest?: string;
} {
  const t = title.trim();

  // Content Matters Podcast
  const pod = /^Content Matters Podcast:\s*(.+)$/i.exec(t);
  if (pod) {
    // Try to extract a guest from common patterns like "X with Guest Name"
    // or "Guest Name on Topic"
    const inner = pod[1].trim();
    return {
      category: "Content Matters Podcast",
      displayTitle: inner,
      series: "Content Matters Podcast",
    };
  }

  // Content Matters Webinar
  const web = /^Content Matters (Webinar):\s*(.+)$/i.exec(t);
  if (web) {
    return {
      category: "Content Matters Webinar",
      displayTitle: web[2].trim(),
      series: "Content Matters Webinar",
    };
  }

  // Content Matters: (newer episodes — webinar/livestream format)
  const cm = /^Content Matters:\s*(.+)$/i.exec(t);
  if (cm) {
    return {
      category: "Content Matters Webinar",
      displayTitle: cm[1].trim(),
      series: "Content Matters",
    };
  }

  // Release / features
  if (/release|feature/i.test(t)) {
    return {
      category: "Product Release",
      displayTitle: t.replace(/^Ingeniux\s+CMS\s+/, ""),
    };
  }

  // Ingeniux_Overview_*
  if (/^Ingeniux_Overview/i.test(t)) {
    const variant = t.replace(/^Ingeniux_Overview_?/i, "").replace(/\.mp4$/i, "");
    return {
      category: "Product Overview",
      displayTitle: variant
        ? variant.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
        : "Ingeniux Overview",
    };
  }

  // CMS Video Tour
  if (/video tour|cms tour/i.test(t)) {
    return { category: "Product Demo", displayTitle: t };
  }

  return { category: "Product Demo", displayTitle: t };
}

let cached: Video[] | null = null;

export function getVideos(): Video[] {
  if (cached) return cached;
  const raw: Raw[] = JSON.parse(
    readFileSync(
      resolve(process.cwd(), "content/videos/vimeo.json"),
      "utf8"
    )
  );

  cached = raw
    .map((r) => {
      const cat = categorize(r.title);
      // Prefer a locally-extracted 30s-in frame over Vimeo's cover art.
      const localFrame = `public/videos/${r.id}.jpg`;
      const thumbnail = existsSync(resolve(process.cwd(), localFrame))
        ? `/videos/${r.id}.jpg`
        : r.thumbnail;
      return {
        id: r.id,
        slug: slugify(cat.displayTitle, r.id),
        title: r.title,
        displayTitle: cat.displayTitle,
        description: r.description,
        url: r.url,
        embedUrl: `https://player.vimeo.com/video/${r.id}`,
        thumbnail,
        duration: r.duration,
        durationLabel: formatDuration(r.duration),
        uploadDate: r.uploadDate
          ? new Date(r.uploadDate.replace(" ", "T") + "Z").toISOString()
          : "",
        category: cat.category,
        series: cat.series,
        guest: cat.guest,
        featured: false,
      };
    })
    .sort((a, b) => (b.uploadDate || "").localeCompare(a.uploadDate || ""));

  // Mark a few notable items as featured
  const featuredSlugs = new Set([
    cached[0]?.slug,
    cached.find((v) => v.category === "Product Release")?.slug,
    cached.find((v) => v.title.includes("Welcome to Ingeniux CMS"))?.slug,
  ]);
  cached = cached.map((v) =>
    featuredSlugs.has(v.slug) ? { ...v, featured: true } : v
  );

  return cached;
}

export function getVideo(slug: string): Video | undefined {
  return getVideos().find((v) => v.slug === slug);
}

export const videoCategoryOrder: VideoCategory[] = [
  "Content Matters Webinar",
  "Content Matters Podcast",
  "Product Release",
  "Product Demo",
  "Product Overview",
];
