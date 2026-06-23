// Marketing-page markdown registry.
// Keyed by URL path. Each entry returns clean structured markdown
// for LLM ingestion. Mirrors what's rendered in the React page but
// stripped of design chrome.
//
// For pages whose content is already in a data file (compare, blog,
// roles, solutions), prefer rendering from that source so the markdown
// stays in sync.

import { roles } from "@/app/roles/_data";
import { solutions } from "@/app/solutions/_data";
import { competitors } from "@/app/compare/_data";
import { getPost, getPosts } from "@/app/blog/_data";
import {
  ccmsMeta,
  ccmsHero,
  repoFeatures,
  authoringSurfaces,
  contentTypes,
  operations,
  ccmsFaqs,
} from "./page-content/ccms";
import {
  cdpMeta,
  cdpHero,
  cdpCoreCapabilities,
  cdpIntegrations,
  cdpFaqs,
} from "./page-content/cdp";
import {
  aiMeta,
  aiHero,
  aiAssist,
  aiDataOps,
  aiFaqs,
} from "./page-content/ai";
import {
  pricingMeta,
  pricingHero,
  pricingProducts,
  pricingPackages,
  pricingServices,
  pricingFaqs,
} from "./page-content/pricing";
import {
  aboutMeta,
  aboutHero,
  aboutStats,
  aboutLeadership,
  aboutValues,
} from "./page-content/about";

const SITE = "https://discovercx.com";
const TAGLINE =
  "DiscoverCX is the headless content delivery platform built on the world's leading CCMS — author in DITA, Markdown, or HTML, deliver to portals, docs sites, Salesforce, and AI assistants from one source of truth.";

function header(title: string, description: string, path: string): string {
  return [
    `# ${title}`,
    "",
    `> ${description}`,
    "",
    `**Canonical URL:** ${SITE}${path}`,
    `**Last updated:** 2026-06-04`,
    "",
    "---",
    "",
  ].join("\n");
}

function footer(path: string): string {
  return [
    "",
    "---",
    "",
    "## About DiscoverCX",
    "",
    TAGLINE,
    "",
    "**Talk to sales:** https://discovercx.com/contact",
    "**Request a demo:** https://discovercx.com/demo",
    "**Pricing:** https://discovercx.com/pricing",
    "",
    `*This is the LLM-friendly markdown version of ${SITE}${path}. The human-readable page is at the canonical URL above. For a full site index, see ${SITE}/llms.txt.*`,
  ].join("\n");
}

const STATIC_PAGES: Record<string, () => string> = {
  "/": () =>
    header(
      "DiscoverCX — Content Delivery Platform for technical & customer content",
      TAGLINE,
      "/"
    ) +
    [
      "## What DiscoverCX does",
      "",
      "DiscoverCX unifies three jobs that most teams stitch together:",
      "",
      "1. **Structured authoring** — DITA, Markdown, and HTML in one component repository, written in Oxygen, the browser, Fonto, Simply XML, or any Git-aware IDE.",
      "2. **Headless CCMS** — typed content components, branching, taxonomy, workflow, translation, and audit. Built for enterprise scale.",
      "3. **Real-time delivery API** — REST + JSON. One source of truth serves docs sites, customer portals, Salesforce Knowledge, in-product help, and AI assistants without a nightly rebuild.",
      "",
      "## Who it's for",
      "",
      "- Documentation teams shipping technical content at scale",
      "- Customer support and field service teams who need a single answer surface",
      "- Product engineering teams who want doc-as-code without losing structure",
      "- AI/knowledge teams who need RAG-ready, governed source material",
      "",
      "## Why it's different",
      "",
      "- **One platform, three products.** CCMS, Content Delivery Platform (CDP), and AI — independent or together.",
      "- **Mixed-format repo.** Heretto and IXIASOFT are DITA-only. Paligo is DocBook. DCX is the only platform that handles DITA + Markdown + HTML in the same repository with cross-format reuse.",
      "- **Git is an authoring surface, not the product.** Engineering writes in IDEs; writers stay in their editor; both flow through one repository.",
      "- **The Discover portal is included.** Heretto's portal is a separate license. DCX ships customer-facing delivery as part of the platform.",
      "",
      "## Key pages",
      "",
      "- [Platform overview](/platform.md)",
      "- [CCMS](/platform/ccms.md)",
      "- [Content Delivery Platform](/platform/cdp.md)",
      "- [AI](/platform/ai.md)",
      "- [Pricing](/pricing.md)",
      "- [About](/about.md)",
      "- [Compare DCX vs alternatives](/compare.md)",
      "",
    ].join("\n") +
    footer("/"),

  "/platform": () =>
    header(
      "Platform — Headless CCMS + Content Delivery for technical content",
      "One platform, three products: Discover CCMS, Discover CDP, and Discover AI. Use them together or independently. Source-to-surface in real time.",
      "/platform"
    ) +
    [
      "## The three products",
      "",
      "### Discover CCMS",
      "Component content management for DITA, Markdown, and HTML. Branching, taxonomy, workflow, translation, audit. Author in Oxygen, browser, Fonto, Simply XML, or IDE+Git. [Read more](/platform/ccms.md)",
      "",
      "### Discover CDP — Content Delivery Platform",
      "Headless delivery API + ready-made customer portal. Serve docs sites, in-product help, Salesforce Knowledge, and AI assistants from one repository — in real time, with no nightly rebuild. [Read more](/platform/cdp.md)",
      "",
      "### Discover AI",
      "RAG-ready JSON, AI assist for authoring, and grounded answers from your governed corpus. AI you can audit. [Read more](/platform/ai.md)",
      "",
      "## Architecture in one line",
      "",
      "Author once in any supported format → store as typed components in the CCMS → publish through the CDP's REST/JSON API → consume from any surface (web, app, portal, Salesforce, AI).",
      "",
      "## Migration is included",
      "",
      "We migrate from MadCap Flare, Paligo, Heretto, IXIASOFT, and Confluence with a dedicated migration engineer. Conditional tags, conrefs, taxonomy, and workflow rules are preserved. Typical timeline: 4–12 weeks.",
      "",
    ].join("\n") +
    footer("/platform"),

  "/platform/ccms": () =>
    header(ccmsMeta.title.replace(/ — .+$/, ""), ccmsMeta.description, "/platform/ccms") +
    [
      `${ccmsHero.headline} ${ccmsHero.headlineAccent}`,
      "",
      ccmsHero.lede,
      "",
      "## Repository — the system of record",
      "",
      ...repoFeatures.map((f) => `- **${f.h}** — ${f.p}`),
      "",
      "## Authoring surfaces — pick your team's tools",
      "",
      ...authoringSurfaces.flatMap((s) => [
        `### ${s.label} (${s.pill})`,
        `*${s.audience}*`,
        "",
        s.p,
        "",
      ]),
      "## Content formats",
      "",
      ...contentTypes.flatMap((c) => [`### ${c.h} (${c.tag})`, "", c.p, ""]),
      "## Operations",
      "",
      ...operations.flatMap((o) => [`### ${o.h}`, "", o.p, ""]),
      "## FAQ",
      "",
      ...ccmsFaqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer("/platform/ccms"),

  "/platform/cdp": () =>
    header(cdpMeta.title.replace(/ — .+$/, ""), cdpMeta.description, "/platform/cdp") +
    [
      cdpHero.headline,
      "",
      cdpHero.lede,
      "",
      "## Core capabilities",
      "",
      ...cdpCoreCapabilities.flatMap((c) => [
        `### ${c.h} — *${c.sub}*`,
        "",
        c.p,
        "",
      ]),
      "## Integrations",
      "",
      ...cdpIntegrations.map(([h, p]) => `- **${h}** — ${p}`),
      "",
      "## FAQ",
      "",
      ...cdpFaqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer("/platform/cdp"),

  "/platform/ai": () =>
    header(aiMeta.title.replace(/ — .+$/, ""), aiMeta.description, "/platform/ai") +
    [
      aiHero.headline,
      "",
      aiHero.lede,
      "",
      "## AI Assist — end-user surfaces",
      "",
      ...aiAssist.flatMap((a) => [`### ${a.h}`, "", a.p, ""]),
      "## AI Data Operations — infrastructure",
      "",
      ...aiDataOps.map((d) => `- **${d.h}** — ${d.p}`),
      "",
      "## FAQ",
      "",
      ...aiFaqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer("/platform/ai"),

  "/pricing": () =>
    header(pricingMeta.title.replace(/ — .+$/, ""), pricingMeta.description, "/pricing") +
    [
      pricingHero.headline,
      "",
      pricingHero.lede,
      "",
      "## Modular products",
      "",
      ...pricingProducts.flatMap((p) => [
        `### ${p.name}${p.addOn ? " *(add-on)*" : ""}`,
        "",
        p.pitch,
        "",
        ...p.features.map((f) => `- ${f}`),
        "",
      ]),
      "## Packages",
      "",
      ...pricingPackages.flatMap((pkg) => [
        `### ${pkg.name}${pkg.featured ? " (most popular)" : ""}`,
        `*${pkg.composition}*`,
        "",
        pkg.blurb,
        "",
        `**Best for:** ${pkg.bestFor}`,
        "",
        "Includes:",
        ...pkg.includes.map((i) => `- ${i}`),
        "",
      ]),
      "## Services included",
      "",
      ...pricingServices.map((s) => `- ${s}`),
      "",
      "## FAQ",
      "",
      ...pricingFaqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer("/pricing"),

  "/about": () =>
    header(aboutMeta.title.replace(/ — .+$/, ""), aboutMeta.description, "/about") +
    [
      aboutHero.headline,
      "",
      aboutHero.lede,
      "",
      "## By the numbers",
      "",
      ...aboutStats.map(([n, label]) => `- **${n}** — ${label}`),
      "",
      "## Leadership",
      "",
      ...aboutLeadership.flatMap((l) => [
        `### ${l.name} — ${l.title}`,
        "",
        l.bio,
        "",
      ]),
      "## What we believe",
      "",
      ...aboutValues.flatMap((v) => [`### ${v.h}`, "", v.p, ""]),
      "## Compliance",
      "",
      "SOC 2 Type II. SAML, OIDC, SCIM. GDPR-compliant. Enterprise-grade access control down to project, branch, and component.",
      "",
    ].join("\n") +
    footer("/about"),
};

function fmtCell(v: string | boolean): string {
  if (v === true) return "✓";
  if (v === false) return "—";
  return String(v);
}

function fromCompare(slug: string): string | null {
  const entry = competitors.find((c) => c.slug === slug);
  if (!entry) return null;
  return (
    header(
      `DiscoverCX vs ${entry.name} — 2026 comparison`,
      entry.metaDesc,
      `/compare/${entry.slug}`
    ) +
    [
      `## ${entry.tagline}`,
      "",
      entry.blurb,
      "",
      `**Use ${entry.name} when:** ${entry.use_when}`,
      "",
      `**Move to DiscoverCX when:** ${entry.move_when}`,
      "",
      "## Feature matrix",
      "",
      `| Capability | ${entry.name} | DiscoverCX |`,
      `|---|---|---|`,
      ...entry.matrix.map(
        (row) => `| ${row.feature} | ${fmtCell(row.them)} | ${fmtCell(row.dcx)} |`
      ),
      "",
      "## FAQ",
      "",
      ...entry.faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer(`/compare/${entry.slug}`)
  );
}

function fromRole(slug: string): string | null {
  const r = roles.find((x) => x.slug === slug);
  if (!r) return null;
  return (
    header(
      `${r.name} — Discover CX for ${r.tagline}`,
      r.summary.replace(/<[^>]+>/g, ""),
      `/roles/${r.slug}`
    ) +
    [
      r.lede,
      "",
      "## From pain to outcome",
      "",
      ...r.problems.flatMap((b) => [
        `### ${b.outcome}`,
        "",
        `*Pain:* ${b.pain}`,
        "",
        b.body,
        b.proof ? `\n*${b.proof}*` : "",
        "",
      ]),
      "## Capabilities",
      "",
      ...r.capabilities.flatMap((c) => [`### ${c.h}`, "", c.p, ""]),
    ].join("\n") +
    footer(`/roles/${r.slug}`)
  );
}

function fromSolution(slug: string): string | null {
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return null;
  return (
    header(`${s.name} — DiscoverCX solution`, s.metaDesc, `/solutions/${s.slug}`) +
    [
      `*Audience: ${s.audience}*`,
      "",
      s.lede,
      "",
      "## Outcomes",
      "",
      ...s.outcomes.map((o) => `- ${o}`),
      "",
      "## Features",
      "",
      ...s.features.flatMap((f) => [`### ${f.h}`, "", f.p, ""]),
      "## FAQ",
      "",
      ...s.faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ].join("\n") +
    footer(`/solutions/${s.slug}`)
  );
}

function fromBlog(slug: string): string | null {
  const p = getPost(slug);
  if (!p) return null;
  // Strip HTML tags from the body to produce plain markdown-ish text.
  const body = (p.body || "")
    .replace(/<\/?(p|h[1-6]|li|ul|ol|blockquote)[^>]*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return (
    header(p.title, p.summary || p.title, `/blog/${p.slug}`) +
    [
      p.author ? `*By ${p.author}${p.publishedAt ? ` — ${p.publishedAt}` : ""}*` : "",
      "",
      body,
      "",
    ].join("\n") +
    footer(`/blog/${p.slug}`)
  );
}

export function getMarkdownForPath(path: string): string | null {
  // Normalize: strip trailing slash (except root)
  const p = path === "/" ? "/" : path.replace(/\/$/, "");

  if (STATIC_PAGES[p]) return STATIC_PAGES[p]();

  // Section catch-alls
  const compareMatch = p.match(/^\/compare\/(.+)$/);
  if (compareMatch) return fromCompare(compareMatch[1]);

  const roleMatch = p.match(/^\/roles\/(.+)$/);
  if (roleMatch) return fromRole(roleMatch[1]);

  const solutionMatch = p.match(/^\/solutions\/(.+)$/);
  if (solutionMatch) return fromSolution(solutionMatch[1]);

  const blogMatch = p.match(/^\/blog\/(.+)$/);
  if (blogMatch) return fromBlog(blogMatch[1]);

  if (p === "/compare") {
    return (
      header(
        "Compare DiscoverCX vs alternatives",
        "Side-by-side comparisons of DiscoverCX with Heretto, Paligo, MadCap, IXIASOFT, Fluid Topics, and Zoomin.",
        "/compare"
      ) +
      [
        "## All comparisons",
        "",
        ...competitors.map(
          (e) => `- [DiscoverCX vs ${e.name}](/compare/${e.slug}.md) — ${e.tagline}`
        ),
        "",
      ].join("\n") +
      footer("/compare")
    );
  }

  if (p === "/blog") {
    const posts = getPosts().slice(0, 30);
    return (
      header(
        "DiscoverCX blog — field notes from the structured-content frontier",
        "Headless CCMS, content delivery platforms, DITA, AEO, AI grounding — and how Fortune 500 docs teams ship.",
        "/blog"
      ) +
      [
        "## Recent posts",
        "",
        ...posts.map(
          (p) =>
            `- [${p.title}](/blog/${p.slug}.md)${p.publishedAt ? ` — ${p.publishedAt}` : ""}`
        ),
        "",
      ].join("\n") +
      footer("/blog")
    );
  }

  return null;
}

export function listAllPaths(): string[] {
  const paths = [
    ...Object.keys(STATIC_PAGES),
    "/compare",
    "/blog",
    ...competitors.map((c) => `/compare/${c.slug}`),
    ...roles.map((r) => `/roles/${r.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
  ];
  return Array.from(new Set(paths));
}
