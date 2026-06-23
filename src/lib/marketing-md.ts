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
import { ebooks } from "@/app/resources/ebooks/_data";
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

  "/resources/what-is-a-ccms": () =>
    header(
      "What is a CCMS? — Component Content Management explained",
      "A vendor-neutral primer on Component Content Management Systems: what they are, when you need one, how they differ from a CMS or DAM, and what to evaluate.",
      "/resources/what-is-a-ccms"
    ) +
    [
      "## The 30-second answer",
      "",
      "A Component Content Management System (CCMS) is a content repository where the unit of management is a *component* — a topic, a paragraph, a step, a warning — rather than a whole document. Components are versioned, reviewed, translated, and assembled at publish time into multiple outputs: PDFs, web pages, API responses, learning modules, AI grounding data.",
      "",
      "Compared to a traditional CMS (WordPress, Drupal, Contentful), a CCMS is page-agnostic. Components have no URL of their own. They live in the repository and are assembled into outputs by a publishing pipeline.",
      "",
      "## When you need one",
      "",
      "You need a CCMS when at least two of these are true:",
      "",
      "- The same content appears in multiple places (docs site + portal + Salesforce + product UI)",
      "- You ship in multiple formats (PDF + HTML + EPUB + JSON for AI)",
      "- You publish in multiple languages",
      "- You have multiple authors and need workflow / audit / approval",
      "- You're in a regulated industry where versioned, signed content matters",
      "- You're feeding an AI assistant with grounded, trustworthy content",
      "",
      "If none of those apply — one help center, one language, no reuse — a static site generator or a WYSIWYG knowledge base is enough.",
      "",
      "## CCMS vs CMS vs DAM vs DXP",
      "",
      "| Tool | Unit of management | Best for |",
      "|---|---|---|",
      "| CMS | Page / post | Marketing sites, blogs, e-commerce |",
      "| CCMS | Component (topic, paragraph) | Tech docs, policies, learning, multilingual |",
      "| DAM | Asset (image, video, doc) | Brand and marketing asset libraries |",
      "| DXP | Experience (page + personalization + workflows) | Customer-facing web experiences |",
      "",
      "## What about DITA?",
      "",
      "DITA (Darwin Information Typing Architecture) is the dominant standard for structured technical content. It defines topic types (task, concept, reference, troubleshooting), a referencing model for reuse (conrefs, keyrefs), and conditional content (profiling). Most enterprise CCMS tools are DITA-native.",
      "",
      "You don't strictly need DITA to run a CCMS. DiscoverCX supports Markdown and HTML in the same repository. But DITA is the most battle-tested standard for technical, regulated, and multilingual content — if you have those needs, the cost of learning DITA pays back fast.",
      "",
      "## The 12 evaluation categories",
      "",
      "When you put a CCMS through an RFP, cover all twelve. Skipping any of them is how teams end up with a CCMS that satisfies authoring but fails delivery — or vice versa:",
      "",
      "1. Authoring — editors, DITA / Markdown support, AI co-authoring, reuse",
      "2. Repository — versioning, branching, concurrency, audit",
      "3. Workflow — states, approvals, scheduled publishing",
      "4. Translation — TMS round-trip, locale fan-out, translation memory",
      "5. Delivery — headless API, real-time, channels, SDK",
      "6. Portal — search, personalization, cases, community",
      "7. Integrations — Salesforce, ServiceNow, Atlassian, Git",
      "8. AI — RAG output, Einstein, traceability",
      "9. Security — SOC 2, SAML / OIDC / SCIM, encryption",
      "10. Compliance — HIPAA, GDPR, FedRAMP, data residency",
      "11. Performance — SLA, latency, scalability",
      "12. Commercial — pricing, multi-year, services, support",
      "",
      "The full 78-question [CCMS RFP template](/resources/ccms-rfp-template.md) is free, vendor-neutral, and editable as a .docx.",
      "",
      "## FAQ",
      "",
      "### What is a CCMS in plain English?",
      "A Component Content Management System (CCMS) stores content as small, reusable components — typically topics or paragraphs — instead of as whole pages or documents. The same component can appear in a PDF, a help site, a customer portal, a training module, and an AI assistant — without being duplicated. CCMS systems also handle versioning, translation workflows, and approvals at the component level.",
      "",
      "### How is a CCMS different from a CMS like WordPress?",
      "CMS = page-oriented. CCMS = component-oriented. WordPress stores content as pages (title, body, hero image, all coupled to one URL). A CCMS stores components that have no URL of their own; they're assembled into outputs (PDF, HTML page, JSON response) at publish or delivery time.",
      "",
      "### Do I need a CCMS?",
      "You need a CCMS when (1) the same content appears in multiple places, (2) the cost of keeping those places in sync is real, (3) you ship in more than one format (PDF + web + Salesforce), or (4) you publish in multiple languages.",
      "",
      "### What's the difference between a CCMS and a CDP?",
      "A CCMS stores and manages structured content. A CDP additionally delivers that content as a real-time API to any surface — portals, docs sites, Salesforce, in-product help, AI assistants. Many CCMS tools stop at file output (PDF, HTML). A modern CDP keeps everything live, typed, and queryable. DiscoverCX is both. See [What is a CDP?](/resources/what-is-a-cdp.md)",
      "",
    ].join("\n") +
    footer("/resources/what-is-a-ccms"),

  "/resources/what-is-a-cdp": () =>
    header(
      "What is a Content Delivery Platform (CDP)?",
      "A CDP unifies content authoring, structured storage, and multichannel delivery — picking up where a CCMS stops. Real-time API, portal, and AI-ready output from one source.",
      "/resources/what-is-a-cdp"
    ) +
    [
      "## CCMS → CDP, the short version",
      "",
      "A CCMS stops at file output. A CDP keeps your content live, typed, and queryable.",
      "",
      "```",
      "CCMS = authoring + storage + workflow + file outputs",
      "CDP  = authoring + storage + workflow + real-time API + portal + AI-ready output",
      "```",
      "",
      "## The four channels that broke CCMS",
      "",
      "Traditional CCMS were designed when 'content delivery' meant PDFs and a help center. Four newer channels don't fit that model:",
      "",
      "1. **Customer portals** — self-service experiences with search, personalization, cases, and community, backed by structured content but rendered as a real product, not a docs site.",
      "2. **In-product help** — drawers and copilots embedded in software, requiring API access to the content (not iframes to a docs site).",
      "3. **Salesforce Knowledge / Einstein** — same content surfaced in agent consoles, Experience Cloud, and Einstein chat, all needing structured input, not PDFs.",
      "4. **AI assistants and RAG** — grounding LLMs in authoritative content, where stale or untyped data produces hallucinations.",
      "",
      "Each new channel demands structured, real-time, queryable access. CCMS tools that output only files force you to bolt on a delivery layer per channel — a tax that compounds with every new surface.",
      "",
      "## The CDP architecture (four layers)",
      "",
      "- **Author** — DITA, Markdown, HTML in the editor of choice",
      "- **Manage** — Git-backed repository, versioning, workflow, audit, translation",
      "- **Deliver** — Real-time REST + GraphQL API, typed schemas, semantic JSON, SDK",
      "- **Discover** — Customer portal with search, personalization, cases, community",
      "",
      "See the four-layer architecture in detail at [/platform](/platform.md).",
      "",
      "## When to upgrade",
      "",
      "You need a CDP (a regular CCMS isn't enough) when any of these are true:",
      "",
      "- Your content has to feed three or more channels (docs, portal, Salesforce, AI, in-product)",
      "- A buying committee asks 'can you power our AI assistant?'",
      "- Customer success is copy-pasting docs into Salesforce",
      "- You're rebuilding a custom portal because no CCMS-vendor portal fits",
      "- Stale-cache rebuild windows are causing compliance or correctness problems",
      "",
      "## FAQ",
      "",
      "### What is a content delivery platform?",
      "A platform that unifies structured authoring, a content repository, and real-time multichannel delivery in one system. Where a traditional CCMS stops at file output (PDF, HTML), a CDP keeps content live, typed, and queryable through a delivery API.",
      "",
      "### Isn't this just a 'headless CCMS'?",
      "Headless CCMS is a piece of it — the delivery API. A CDP also includes the customer-facing portal (search, personalization, cases, community), the AI-readiness layer (semantic JSON, knowledge graph), and the integration layer (Salesforce, ServiceNow, Atlassian). Headless CCMS gives you the pipes. A CDP gives you the destinations.",
      "",
      "### Why do I need real-time delivery?",
      "Two reasons. (1) Compliance and correction speed — when a policy or product spec changes, portal / Salesforce / AI should reflect it within seconds, not after a nightly rebuild. (2) AI grounding — when an AI assistant cites a topic, the version it cites needs to be the version actually live. Stale caches are a trust problem.",
      "",
      "### How is this different from a DXP?",
      "DXPs (Adobe AEM, Sitecore, Optimizely) are page-and-experience oriented — built for marketing journeys. CDPs are content-and-component oriented — built for technical and customer content that has to feed many surfaces.",
      "",
      "### Does a CDP make sense for a small team?",
      "Yes — if your content lands in more than one place. A 3-person docs team feeding a docs site, Salesforce Knowledge, and an AI assistant benefits from a CDP more than a 30-person team feeding only PDFs. The economic case scales with channels, not headcount.",
      "",
    ].join("\n") +
    footer("/resources/what-is-a-cdp"),

  "/resources/ccms-rfp-template": () =>
    header(
      "CCMS RFP template — 78 vendor questions across 12 categories",
      "The free, vendor-neutral CCMS RFP template Fortune 500 procurement teams use to evaluate component content management systems. Editable Microsoft Word document.",
      "/resources/ccms-rfp-template"
    ) +
    [
      "## What it is",
      "",
      "A vendor-neutral CCMS RFP template — 78 specific questions across 12 evaluation categories, written so any honest vendor (including or excluding DiscoverCX) can answer them.",
      "",
      "- **Format:** Editable Microsoft Word (.docx)",
      "- **Cost:** Free, no vendor bias",
      "- **Length:** ~20 pages, 78 questions",
      "",
      "## Why it's vendor-neutral",
      "",
      "Most CCMS RFPs leak vendor bias — checkboxes engineered to favor a specific product. This one is intentionally vendor-neutral. If DiscoverCX is wrong for your needs, the RFP should help you find that out faster. We'd rather lose a deal early than win one we shouldn't have.",
      "",
      "## The 12 evaluation categories",
      "",
      "1. **Authoring** — DITA / Markdown support, editors, reuse, conditional content, AI co-authoring",
      "2. **Repository** — versioning, branching, concurrency, audit, retention",
      "3. **Workflow** — states, approvals, scheduled publishing, escalation",
      "4. **Translation** — TMS round-trip, locale fan-out, translation memory, ICU",
      "5. **Delivery** — headless API, real-time publishing, channels, SDK",
      "6. **Portal** — search, personalization, case management, community",
      "7. **Integrations** — Salesforce, ServiceNow, Atlassian, Slack, Git",
      "8. **AI** — RAG output, Einstein, traceability, copilot grounding",
      "9. **Security** — SOC 2, SAML / OIDC / SCIM, encryption, audit logs",
      "10. **Compliance** — HIPAA, GDPR, FedRAMP, data residency",
      "11. **Performance** — SLA, uptime, latency, scalability",
      "12. **Commercial** — pricing model, multi-year, services, support tiers",
      "",
      "## How to get it",
      "",
      "Drop your work email at https://discovercx.com/resources/ccms-rfp-template — we email the .docx and check in once a quarter with new buyer-side content. Unsubscribe anytime.",
      "",
      "## See also",
      "",
      "- [What is a CCMS?](/resources/what-is-a-ccms.md) — vendor-neutral primer",
      "- [What is a CDP?](/resources/what-is-a-cdp.md) — when CCMS isn't enough",
      "- [DiscoverCX vs alternatives](/compare.md) — side-by-side comparisons",
      "",
    ].join("\n") +
    footer("/resources/ccms-rfp-template"),
};

function fromEbook(slug: string): string | null {
  const e = ebooks.find((x) => x.slug === slug);
  if (!e) return null;
  return (
    header(
      `${e.title} — eBook (gated)`,
      e.summary,
      `/resources/ebooks/${e.slug}`
    ) +
    [
      `**Category:** ${e.category}`,
      `**Length:** ${e.pages} pages · ${e.readTime} read`,
      `**Subtitle:** ${e.subtitle ?? e.tagline}`,
      "",
      "## Summary",
      "",
      e.summary,
      "",
      "## Key insights",
      "",
      ...e.keyInsights.map((k) => `- ${k}`),
      "",
      "## Ideal readers",
      "",
      ...e.idealReaders.map((r) => `- ${r}`),
      "",
      "## What's inside",
      "",
      ...e.whatsInside.map((w, i) => `${i + 1}. ${w}`),
      "",
      "## How to get the full PDF",
      "",
      `The browser reader is free up to a sample threshold; the full PDF is gated behind a short form (work email + company). Submit on the eBook page to receive the file by email plus unlock the rest of the pages in browser: https://discovercx.com/resources/ebooks/${e.slug}`,
      "",
    ].join("\n") +
    footer(`/resources/ebooks/${e.slug}`)
  );
}

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

  const ebookMatch = p.match(/^\/resources\/ebooks\/(.+)$/);
  if (ebookMatch) return fromEbook(ebookMatch[1]);

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
    ...ebooks.map((e) => `/resources/ebooks/${e.slug}`),
  ];
  return Array.from(new Set(paths));
}
