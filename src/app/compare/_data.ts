export type Competitor = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  blurb: string;
  use_when: string;
  move_when: string;
  matrix: { feature: string; them: string | boolean; dcx: string | boolean }[];
  faqs: { q: string; a: string }[];
};

const baseMatrix = (
  them: Partial<Record<string, string | boolean>>
): Competitor["matrix"] => [
  { feature: "Authoring model", them: them.authoring ?? "—", dcx: "Browser + Oxygen / Fonto / Simply XML" },
  { feature: "Content format", them: them.format ?? "—", dcx: "DITA, Markdown, HTML" },
  { feature: "Repository", them: them.repo ?? "—", dcx: "Git-backed CCMS, server-side workflows" },
  { feature: "Multi-author concurrency", them: them.concurrency ?? false, dcx: true },
  { feature: "Headless delivery API", them: them.api ?? false, dcx: true },
  { feature: "Real-time publishing", them: them.realtime ?? false, dcx: true },
  { feature: "Customer-facing portal", them: them.portal ?? false, dcx: true },
  { feature: "Salesforce Knowledge sync", them: them.salesforce ?? false, dcx: true },
  { feature: "AI / RAG-ready JSON", them: them.ai ?? false, dcx: true },
  { feature: "PDF / HTML5 / WebHelp", them: them.pdf ?? true, dcx: true },
  { feature: "Translation / TMS round-trip", them: them.translation ?? "Add-on", dcx: "Built-in (XLIFF 2.1)" },
  { feature: "SOC 2 Type II", them: them.soc2 ?? false, dcx: true },
  { feature: "SAML / OIDC / SCIM", them: them.sso ?? false, dcx: true },
  { feature: "Pricing model", them: them.pricing ?? "—", dcx: "Enterprise — request a quote" },
];

export const competitors: Competitor[] = [
  {
    slug: "madcap-flare",
    name: "MadCap Flare",
    metaTitle: "DiscoverCX vs. MadCap Flare — 2026 Comparison",
    metaDesc:
      "Side-by-side: MadCap Flare's desktop help authoring vs. DiscoverCX's headless CCMS + delivery platform. Authoring, delivery, AI readiness, and cost.",
    tagline: "Desktop help authoring vs. headless delivery platform",
    blurb:
      "MadCap Flare is best-in-class for shipping help systems and PDFs. DiscoverCX is built for teams whose content also has to feed portals, Salesforce, AI assistants, and product UIs.",
    use_when: "You only ship help systems and PDFs and have a small senior writing team.",
    move_when:
      "You need real headless delivery, a customer portal, Salesforce sync, or AI-ready output.",
    matrix: baseMatrix({
      authoring: "Desktop app (Windows)",
      format: "Proprietary XHTML",
      repo: "Files on disk + Git",
      pricing: "Per-seat perpetual + maintenance",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a true replacement for MadCap Flare?",
        a: "For docs teams that need more than help systems and PDFs — yes. DiscoverCX covers everything Flare does (structured authoring, conditional content, multi-format output) and adds a real-time headless API, a customer-facing portal, Salesforce sync, and AI-ready output.",
      },
      {
        q: "Can we migrate our existing MadCap Flare content?",
        a: "Yes. A dedicated migration engineer converts your XHTML projects, conditional tags, snippets, and variables into DITA or Markdown with no fidelity loss. Typical Flare migrations run 4–8 weeks.",
      },
      {
        q: "What about MadCap Central?",
        a: "Central is a workflow add-on (cloud storage, light Git, review portal) — but Flare is still desktop, and there's still no headless API or customer portal. Central is an add-on, not a platform.",
      },
      {
        q: "How does pricing compare?",
        a: "MadCap is per-seat perpetual licensing plus annual maintenance and add-ons (Central, Translator, Analyzer). DiscoverCX is enterprise SaaS — scoped to your authoring team, content volume, and package mix. We don't publish list prices because configurations vary. Request a quote and we'll provide a written proposal.",
      },
    ],
  },
  {
    slug: "paligo",
    name: "Paligo",
    metaTitle: "DiscoverCX vs. Paligo — 2026 Comparison",
    metaDesc:
      "DiscoverCX vs. Paligo: cloud DITA-light authoring vs. a full headless CCMS + customer portal + delivery API. Side-by-side comparison.",
    tagline: "Cloud DITA-light vs. full CDP",
    blurb:
      "Paligo is a clean cloud DITA-light CCMS — strong for small docs teams shipping to a hosted site. DiscoverCX adds a real delivery API, a customer portal, Salesforce sync, and Fortune 500-grade security.",
    use_when:
      "You're a small docs team publishing to a hosted docs site in 1–3 languages.",
    move_when:
      "You need a real headless API, a customer-facing portal, or Fortune 500-grade SSO / SOC 2 / audit.",
    matrix: baseMatrix({
      authoring: "Browser (Paligo editor)",
      format: "DITA-light XML",
      repo: "Hosted by Paligo (no Git)",
      concurrency: true,
      portal: false,
      api: "Read-only",
      ai: false,
      translation: true,
      pricing: "Per-seat subscription",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Paligo?",
        a: "Paligo's strength is a friendly DITA-light authoring UX. DiscoverCX adds the delivery and discovery layers — a real-time headless API, a customer-facing portal, Salesforce Knowledge sync, and AI-ready output. Paligo authoring + Paligo hosted site is a complete loop for small teams. Once you need to feed multiple channels, that loop breaks.",
      },
      {
        q: "Is DiscoverCX DITA-pure?",
        a: "DiscoverCX is DITA 1.3 compliant. You can also mix Markdown and HTML in the same repository, which Paligo doesn't support.",
      },
      {
        q: "Can we get a customer portal with Paligo?",
        a: "Paligo offers a hosted docs site, not a true customer portal. There's no built-in case management, community, role-based personalization, or Salesforce integration. DiscoverCX includes all of those.",
      },
      {
        q: "How does pricing compare?",
        a: "Both are enterprise SaaS priced per author, but they target different segments. Paligo's standard tier fits small docs teams shipping to a hosted site. DiscoverCX is an enterprise platform with the customer portal and headless delivery included in the All-in-One package. Request a quote for a written proposal.",
      },
    ],
  },
  {
    slug: "heretto",
    name: "Heretto",
    metaTitle: "DiscoverCX vs. Heretto (Easy DITA) — 2026 Comparison",
    metaDesc:
      "DiscoverCX vs. Heretto / Easy DITA: cloud DITA CCMS + portal vs. a full headless content delivery platform with native AI output.",
    tagline: "Cloud DITA CCMS vs. content delivery platform",
    blurb:
      "Heretto (formerly easyDITA) is a strong cloud DITA CCMS with a portal add-on. DiscoverCX matches it on authoring and adds Markdown support, native AI-ready output, deeper Salesforce integration, and a portal built in (not bolted on).",
    use_when:
      "You're a DITA-pure shop that only needs a documentation portal.",
    move_when:
      "You're mixing DITA + Markdown, need Salesforce sync, or want AI / RAG-ready JSON out of the box.",
    matrix: baseMatrix({
      authoring: "Browser + Oxygen Web Author",
      format: "DITA only",
      repo: "Hosted by Heretto",
      concurrency: true,
      portal: "Add-on (Deploy)",
      api: true,
      ai: false,
      sso: true,
      soc2: true,
      pricing: "Per-seat subscription",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Heretto?",
        a: "On core CCMS authoring + workflow, the products are competitive. DiscoverCX wins on three vectors: (1) mixed-format support — DITA + Markdown + HTML in one repo; (2) AI / RAG-ready semantic JSON out of the box; (3) the customer portal is part of the platform, not a separately licensed module (Heretto Deploy).",
      },
      {
        q: "Does Heretto support Markdown?",
        a: "No — Heretto is DITA-only. If your team includes engineering or product groups who prefer Markdown, you'll need a separate system to manage their content. DiscoverCX handles both in one repository.",
      },
      {
        q: "What about the Heretto portal (Deploy)?",
        a: "Heretto Deploy is a portal add-on that ships separately. DiscoverCX includes a customer portal in the Enterprise tier — search, personalization, cases, community, and analytics — built on the same repository, no integration tax.",
      },
      {
        q: "Can we migrate from Heretto?",
        a: "Yes. DITA migrates 1:1. We provide tooling to move your topic maps, conrefs, keyrefs, and conditional content with no fidelity loss. Typical Heretto migrations run 3–6 weeks.",
      },
    ],
  },
  {
    slug: "adobe-xdm",
    name: "Adobe XML Documentation",
    metaTitle: "DiscoverCX vs. Adobe XML Documentation (XDM) — 2026 Comparison",
    metaDesc:
      "DiscoverCX vs. Adobe XML Documentation Manager: a content-first platform without the AEM tax, with real headless delivery and faster time-to-launch.",
    tagline: "Adobe AEM-bundled vs. content-first platform",
    blurb:
      "Adobe XML Documentation Manager (XDM) is the enterprise DITA CCMS bundled with Adobe Experience Manager. It's deep but heavy — expensive to license, slow to deploy, AEM-dependent. DiscoverCX is content-first, SaaS-native, and ships in weeks.",
    use_when:
      "You already run Adobe Experience Manager as your enterprise CMS and want to consolidate vendors.",
    move_when:
      "You don't already own AEM, or you want a content-first platform without the AEM platform tax.",
    matrix: baseMatrix({
      authoring: "Oxygen + Adobe FrameMaker",
      format: "DITA",
      repo: "AEM JCR (Java)",
      concurrency: true,
      portal: "Custom-built on AEM",
      api: "AEM-bound",
      ai: false,
      sso: true,
      soc2: true,
      pricing: "Enterprise license + AEM + services",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Adobe XDM?",
        a: "XDM is a module of AEM — to use it you commit to the entire Adobe Experience stack. DiscoverCX is a standalone CDP that doesn't require an underlying CMS. For teams that don't already own AEM, the total cost of ownership is dramatically lower (often 60–80%).",
      },
      {
        q: "What about AEM integration?",
        a: "If you do run AEM for marketing content, DiscoverCX integrates as a content source via its API — your AEM pages can pull DITA-sourced help, support, and product content from DiscoverCX. You get specialization without the lock-in.",
      },
      {
        q: "How long does XDM take to deploy?",
        a: "XDM deployments commonly run 6–12 months due to AEM tuning, JCR repository setup, and custom portal builds. DiscoverCX deployments run 6–12 weeks because the portal, API, and integrations are productized.",
      },
      {
        q: "Can we migrate from Adobe FrameMaker / XDM?",
        a: "Yes. FrameMaker DITA exports import directly. We provide a migration engineer for XDM-to-DiscoverCX transitions including AEM JCR content, taxonomy, and workflow rules.",
      },
    ],
  },
  {
    slug: "zendesk",
    name: "Zendesk Guide",
    metaTitle: "DiscoverCX vs. Zendesk Guide — 2026 Comparison",
    metaDesc:
      "DiscoverCX vs. Zendesk Guide: structured CCMS vs. WYSIWYG knowledge base inside the Zendesk support suite. When to outgrow Guide.",
    tagline: "Support knowledge base vs. structured CCMS",
    blurb:
      "Zendesk Guide is the right answer when your only content lives inside Zendesk tickets and help articles. DiscoverCX is the right answer when you need structured reuse, product documentation, AI grounding, or to feed channels beyond Zendesk.",
    use_when:
      "You only ship public help articles tied to support tickets, and they live inside Zendesk.",
    move_when:
      "You need structured content reuse, product or technical docs, AI training data, or to feed channels other than Zendesk.",
    matrix: baseMatrix({
      authoring: "WYSIWYG in browser",
      format: "HTML (no structure)",
      repo: "Zendesk database",
      concurrency: true,
      portal: "Zendesk Help Center",
      api: "Read-only Help Center API",
      ai: false,
      sso: true,
      soc2: true,
      pricing: "Per-agent (Suite Professional+)",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a replacement for Zendesk Guide?",
        a: "For most Zendesk customers, no — keep Guide for ticket-attached help articles. DiscoverCX sits alongside Zendesk: it manages your structured technical and product content, and pushes the relevant pieces into Zendesk Guide as articles. One source, two surfaces.",
      },
      {
        q: "Can DiscoverCX push to Zendesk Guide?",
        a: "Yes — the Zendesk Help Center API integration syncs published topics into Guide articles with section/category routing. Customers also pipe DiscoverCX content into Zendesk Answer Bot for AI grounding.",
      },
      {
        q: "When does Guide alone stop being enough?",
        a: "When (1) the same content needs to appear in your product docs, training, and partner portal, not just support, (2) you need real DITA-style topic reuse, (3) AI initiatives need structured grounding, or (4) regulated industries require version-pinned, audited content.",
      },
      {
        q: "How does pricing fit together?",
        a: "DiscoverCX prices per author (the people who write content), not per agent (the people who respond to tickets). For a 200-agent / 10-writer team, DiscoverCX is additive at modest cost and replaces the need to upgrade Zendesk Suite tiers for richer KB features.",
      },
    ],
  },
  {
    slug: "ixiasoft",
    name: "IXIASOFT CCMS",
    metaTitle: "DiscoverCX vs. IXIASOFT CCMS — 2026 Comparison",
    metaDesc:
      "DiscoverCX vs. IXIASOFT CCMS: SaaS-native cloud platform vs. long-standing on-prem DITA CCMS. Modern delivery, lower TCO, faster time-to-value.",
    tagline: "On-prem enterprise DITA vs. cloud CDP",
    blurb:
      "IXIASOFT is a venerable on-prem DITA CCMS — strong DITA validation, deep workflow customization, common in regulated and aerospace customers. DiscoverCX brings SaaS economics, real-time API delivery, and a portal you don't have to build.",
    use_when:
      "You're regulated and have entrenched on-prem requirements with deep custom workflow logic.",
    move_when:
      "You want SaaS economics, real-time delivery, AI-ready output, and a portal that ships, not one you build.",
    matrix: baseMatrix({
      authoring: "Oxygen XML Author (desktop)",
      format: "DITA",
      repo: "TEXTML Server (proprietary)",
      concurrency: true,
      portal: "Custom-built",
      api: "Read-only XML",
      ai: false,
      sso: true,
      soc2: false,
      pricing: "Enterprise license + maintenance",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a viable replacement for IXIASOFT?",
        a: "For most use cases, yes. DiscoverCX matches IXIASOFT on DITA depth and workflow flexibility, and adds the modern delivery layer (headless API, portal, AI output) that IXIASOFT was never architected for. Customers in heavily regulated aerospace or defense with on-prem mandates may stay with IXIASOFT longer.",
      },
      {
        q: "Can we run DiscoverCX on-prem?",
        a: "DiscoverCX is SaaS-first. For regulated customers we offer single-tenant deployments in your preferred AWS / Azure region with full data residency. True air-gapped on-prem is available for Enterprise customers under custom contract.",
      },
      {
        q: "What about TEXTML migration?",
        a: "We provide a TEXTML-to-Git migration engineer. DITA topics, maps, conrefs, and metadata move 1:1. Custom IXIASOFT workflow logic is ported into DiscoverCX's workflow engine. Typical IXIASOFT migrations run 8–14 weeks depending on customization depth.",
      },
      {
        q: "How does pricing compare?",
        a: "IXIASOFT historically sold on a perpetual-license-plus-maintenance model with significant infrastructure overhead for on-prem deployments. DiscoverCX is enterprise SaaS — no on-prem infrastructure to run, all upgrades included, support and operations bundled. Request a quote and we'll model your specific TCO comparison.",
      },
    ],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
