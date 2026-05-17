// Unifies blog + ebooks + webinars into one feed for the Insights hub.
// Builds at compile time. Filtering happens on the client.

import { getPosts } from "@/app/blog/_data";
import { ebooks } from "@/app/resources/ebooks/_data";
import { webinars } from "@/app/webinars/_data";

export type InsightType = "Blog" | "eBook" | "Webinar" | "Video";

export type InsightItem = {
  id: string;
  type: InsightType;
  title: string;
  summary: string;
  topic: string;
  href: string;
  image?: string;
  meta: string;
  date?: string;
  featured: boolean;
};

function normalizeTopic(s?: string): string {
  if (!s) return "General";
  const t = s.trim();
  // Collapse common variants
  const map: Record<string, string> = {
    "AI / RAG": "AI",
    "AI / Knowledge": "AI",
    "Knowledge Management": "Knowledge",
    "Content Operations": "Content Ops",
    "Salesforce Knowledge": "Salesforce",
  };
  return map[t] || t;
}

export function getInsights(): InsightItem[] {
  const blog: InsightItem[] = getPosts()
    .filter((p) => !p.draft)
    .map((p) => ({
      id: `blog-${p.slug}`,
      type: "Blog" as const,
      title: p.title,
      summary: p.summary,
      topic: normalizeTopic(p.category),
      href: `/blog/${p.slug}`,
      image: p.thumb || p.image,
      meta: p.readingTime || "Article",
      date: p.publishedAt,
      featured: !!p.featured,
    }));

  const ebookItems: InsightItem[] = ebooks.map((e) => ({
    id: `ebook-${e.slug}`,
    type: "eBook" as const,
    title: e.title,
    summary: e.summary,
    topic: normalizeTopic(e.category),
    href: `/resources/ebooks/${e.slug}`,
    image: e.cover,
    meta: `${e.pages}p · ${e.readTime}`,
    featured: !!e.featured,
  }));

  const webinarItems: InsightItem[] = webinars.map((w) => ({
    id: `webinar-${w.slug}`,
    type: "Webinar" as const,
    title: w.title,
    summary: w.summary,
    topic: normalizeTopic(w.topic),
    href: `/webinars/${w.slug}`,
    meta: w.duration,
    featured: false,
  }));

  const all = [...blog, ...ebookItems, ...webinarItems];

  // Sort: featured first, then most recent (blog has dates; others don't, so
  // they land after the dated batch — which is fine for a hub view).
  return all.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return (b.date || "").localeCompare(a.date || "");
  });
}

export function getInsightFacets(items: InsightItem[]) {
  const types = Array.from(new Set(items.map((i) => i.type))) as InsightType[];
  const topics = Array.from(new Set(items.map((i) => i.topic))).sort();
  return { types, topics };
}
