import type { MetadataRoute } from "next";
import { solutions } from "./solutions/_data";
import { competitors } from "./compare/_data";
import { getPosts } from "./blog/_data";
import { webinars } from "./webinars/_data";
import { ebooks } from "./resources/ebooks/_data";
import { getVideos } from "./resources/videos/_data";

const BASE = "https://discovercx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const stat = (path: string, priority = 0.7) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    stat("/", 1.0),
    stat("/platform", 0.9),
    stat("/platform/ccms", 0.95),
    stat("/platform/cdp", 0.95),
    stat("/platform/ai", 0.95),
    stat("/pricing", 0.9),
    stat("/about", 0.7),
    stat("/contact", 0.6),
    stat("/demo", 0.8),
    stat("/solutions", 0.8),
    ...solutions.map((s) => stat(`/solutions/${s.slug}`, 0.8)),
    stat("/compare", 0.85),
    ...competitors.map((c) => stat(`/compare/${c.slug}`, 0.85)),
    stat("/insights", 0.9),
    stat("/resources", 0.8),
    stat("/resources/ccms-rfp-template", 0.9),
    stat("/resources/what-is-a-ccms", 0.85),
    stat("/resources/what-is-a-cdp", 0.85),
    stat("/resources/literature", 0.85),
    stat("/resources/ebooks", 0.9),
    ...ebooks.map((e) => stat(`/resources/ebooks/${e.slug}`, 0.85)),
    stat("/webinars", 0.85),
    ...webinars.map((w) => stat(`/webinars/${w.slug}`, 0.75)),
    stat("/resources/videos", 0.9),
    ...getVideos().map((v) => stat(`/resources/videos/${v.slug}`, 0.7)),
    stat("/blog", 0.8),
    ...getPosts().map((p) => stat(`/blog/${p.slug}`, 0.7)),
  ];
}
