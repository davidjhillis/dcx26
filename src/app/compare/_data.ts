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
      format: "XHTML + MadCap extensions",
      repo: "Files on disk + Git",
      ai: "MadCap Wordsmith (assistive)",
      sso: "Via MadCap Central",
      pricing: "Per-seat perpetual + maintenance",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a replacement for MadCap Flare?",
        a: "It depends on what you ship. If your output is help systems and PDFs only, Flare is purpose-built and excellent at that. DiscoverCX is the better fit when the same content also has to feed a customer portal, Salesforce Knowledge, in-product help, or AI assistants from the same source.",
      },
      {
        q: "Can we migrate our existing MadCap Flare content?",
        a: "Yes. A migration engineer converts XHTML projects, conditional tags, snippets, and variables into DITA or Markdown. Timeline is scoped per project — we share a written plan after a content audit.",
      },
      {
        q: "What about MadCap Central?",
        a: "Central adds cloud collaboration, review workflow, and SSO around Flare. It's a strong upgrade for a Flare-centric team. If you need a delivery API or a customer-facing portal in addition to authoring, those still sit outside Central's scope.",
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
      "DiscoverCX vs. Paligo: cloud DocBook-based authoring vs. a full headless CCMS + customer portal + delivery API. Side-by-side comparison.",
    tagline: "Cloud DocBook vs. full CDP",
    blurb:
      "Paligo is a clean cloud CCMS with a friendly browser editor, built on DocBook — well-suited to small and mid-sized docs teams shipping to a hosted documentation site. DiscoverCX is a broader content delivery platform: DITA-native authoring alongside Markdown and HTML, a headless API, a customer portal, and Salesforce sync.",
    use_when:
      "You're a docs team publishing to a hosted docs site and DocBook fits your content model.",
    move_when:
      "You need native DITA, a headless API for non-docs surfaces, a customer-facing portal, or to mix DITA + Markdown + HTML in one repository.",
    matrix: baseMatrix({
      authoring: "Browser (Paligo editor)",
      format: "DocBook XML (DITA import)",
      repo: "Hosted by Paligo",
      concurrency: true,
      portal: "Hosted docs site",
      api: "Read API",
      ai: "Paligo AI (assistive)",
      translation: true,
      pricing: "Per-seat subscription",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Paligo?",
        a: "Paligo is a DocBook-native cloud CCMS with a strong browser authoring UX. DiscoverCX is DITA-native and supports Markdown and HTML in the same repository, and ships additional delivery surfaces — a real-time headless API, a customer-facing portal, and Salesforce Knowledge sync — as part of the platform.",
      },
      {
        q: "Does Paligo support DITA?",
        a: "Paligo's native content model is DocBook. They offer DITA import, so existing DITA projects can be brought in, but ongoing authoring sits inside their DocBook-derived structure. If your team standardizes on DITA 1.3 with conrefs, keyrefs, and specializations as a long-term authoring model, that's a closer fit for DiscoverCX.",
      },
      {
        q: "Is DiscoverCX DITA-pure?",
        a: "DiscoverCX is DITA 1.3 compliant and additionally supports Markdown and HTML in the same repository for teams that want a mixed model.",
      },
      {
        q: "Can we get a customer portal with Paligo?",
        a: "Paligo offers a hosted documentation site. DiscoverCX's portal adds case management, community, role-based personalization, and Salesforce integration — closer to a full customer portal than a docs site. The right pick depends on whether you need just docs delivery or the broader surface.",
      },
      {
        q: "How does pricing compare?",
        a: "Both are enterprise SaaS priced per author. Paligo's tiers fit small to mid-sized docs teams shipping to a hosted site. DiscoverCX is an enterprise platform with the customer portal and headless delivery included in the All-in-One package. Request a quote for a written proposal.",
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
      "Heretto (formerly easyDITA) is a strong cloud DITA CCMS with a separately-licensed portal (Deploy). DiscoverCX is competitive on core authoring and differs on three axes: native Markdown support alongside DITA, the customer portal as part of the platform, and AI-ready JSON output as a standard delivery format.",
    use_when:
      "You're a DITA-pure shop and Heretto's authoring + Deploy combination fits your needs.",
    move_when:
      "You're mixing DITA + Markdown, need Salesforce sync, or want the customer portal included rather than licensed as an add-on.",
    matrix: baseMatrix({
      authoring: "Browser + Oxygen Web Author",
      format: "DITA",
      repo: "Hosted by Heretto",
      concurrency: true,
      portal: "Heretto Deploy (add-on)",
      api: true,
      ai: "Heretto AI Assist (assistive)",
      sso: true,
      soc2: true,
      pricing: "Per-seat subscription",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Heretto?",
        a: "On core CCMS authoring and workflow, the products are competitive — both are mature cloud DITA platforms. The main differences: DiscoverCX supports DITA + Markdown + HTML in one repository (Heretto is DITA-only), the customer portal ships as part of the platform rather than as Heretto Deploy, and AI-ready semantic JSON is a first-class output.",
      },
      {
        q: "Does Heretto support Markdown?",
        a: "Heretto is DITA-focused. If your team standardizes on DITA, that's a clean fit. If you also need to manage Markdown content from engineering or product teams in the same repository, DiscoverCX handles both natively.",
      },
      {
        q: "What about the Heretto portal (Deploy)?",
        a: "Heretto Deploy is a separately licensed portal product. DiscoverCX bundles the customer portal in the Enterprise tier — search, personalization, cases, community, and analytics on the same repository.",
      },
      {
        q: "Can we migrate from Heretto?",
        a: "Yes. DITA content moves 1:1 — topic maps, conrefs, keyrefs, and conditional content all translate. A migration engineer scopes the timeline based on content volume and customization depth, with a written plan after a discovery session.",
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
      "Adobe XML Documentation Manager (XDM) is the enterprise DITA CCMS bundled with Adobe Experience Manager. It's a deep, capable system — and the right answer if you already run AEM and want to keep one vendor. DiscoverCX is a content-first, SaaS-native alternative for teams that don't already own the AEM platform.",
    use_when:
      "You already run Adobe Experience Manager as your enterprise CMS and want to consolidate vendors and contracts.",
    move_when:
      "You don't already own AEM, or you want a content-first platform that doesn't require the broader AEM commitment.",
    matrix: baseMatrix({
      authoring: "Oxygen + Adobe FrameMaker",
      format: "DITA",
      repo: "AEM JCR (Java)",
      concurrency: true,
      portal: "Custom-built on AEM",
      api: "AEM-bound",
      ai: "Adobe Sensei / GenAI",
      sso: true,
      soc2: true,
      pricing: "Enterprise license + AEM + services",
    }),
    faqs: [
      {
        q: "How is DiscoverCX different from Adobe XDM?",
        a: "XDM is a module of AEM — adopting it generally means standardizing on the broader Adobe Experience stack. DiscoverCX is a standalone content delivery platform that doesn't require an underlying CMS. For teams that already run AEM, the consolidation case for XDM is real. For teams that don't, DiscoverCX avoids bringing AEM in just to manage technical content.",
      },
      {
        q: "What about AEM integration?",
        a: "If you do run AEM for marketing content, DiscoverCX integrates as a content source via its API — your AEM pages can pull DITA-sourced help, support, and product content from DiscoverCX without standardizing technical content on AEM's repository.",
      },
      {
        q: "How long does XDM take to deploy?",
        a: "XDM deployments scope around AEM tuning, JCR repository setup, and custom portal builds, so timelines reflect the full AEM project. DiscoverCX deployments are typically shorter because the portal, API, and integrations are productized — but the right comparison is your specific scope. We'll model it with you.",
      },
      {
        q: "Can we migrate from Adobe FrameMaker / XDM?",
        a: "Yes. FrameMaker DITA exports import directly. A migration engineer scopes XDM-to-DiscoverCX transitions including AEM JCR content, taxonomy, and workflow rules.",
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
      format: "HTML",
      repo: "Zendesk database",
      concurrency: true,
      portal: "Zendesk Help Center",
      api: "Help Center API",
      ai: "Zendesk AI / Answer Bot",
      sso: true,
      soc2: true,
      pricing: "Per-agent (Suite Professional+)",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a replacement for Zendesk Guide?",
        a: "For most Zendesk customers, no — Guide is the right home for ticket-attached help articles. DiscoverCX is most commonly deployed alongside Zendesk: it manages structured technical and product content, and syncs the relevant pieces into Zendesk Guide as articles. One source, two surfaces.",
      },
      {
        q: "Can DiscoverCX push to Zendesk Guide?",
        a: "Yes — the Zendesk Help Center API integration syncs published topics into Guide articles with section/category routing. Customers also pipe DiscoverCX content into Zendesk AI / Answer Bot for grounding.",
      },
      {
        q: "When does Guide alone stop being enough?",
        a: "When (1) the same content needs to appear in product docs, training, or partner portals, not just support, (2) you need DITA-style topic reuse across products, (3) AI initiatives need structured grounding, or (4) regulated industries require version-pinned, audited content.",
      },
      {
        q: "How does pricing fit together?",
        a: "DiscoverCX prices per author (the people who write content), not per agent (the people who respond to tickets). When the writing team is small relative to the support team, DiscoverCX is typically additive rather than a replacement — and avoids forcing tier upgrades on the Zendesk side just to unlock richer KB features.",
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
      api: "REST API",
      ai: "IXIASOFT AI (assistive)",
      sso: true,
      soc2: "—",
      pricing: "License + maintenance (on-prem or hosted)",
    }),
    faqs: [
      {
        q: "Is DiscoverCX a viable replacement for IXIASOFT?",
        a: "For many use cases, yes. DiscoverCX is competitive with IXIASOFT on DITA depth and workflow flexibility, and adds a productized delivery layer — headless API, customer portal, AI-ready output — out of the box. Customers in heavily regulated aerospace or defense with strict on-prem mandates may still favor IXIASOFT's deployment model.",
      },
      {
        q: "Can we run DiscoverCX on-prem?",
        a: "DiscoverCX is SaaS-first. For regulated customers we offer single-tenant deployments in your preferred AWS / Azure region with full data residency. True air-gapped on-prem is available for Enterprise customers under custom contract.",
      },
      {
        q: "What about TEXTML migration?",
        a: "A migration engineer handles TEXTML-to-DiscoverCX transitions. DITA topics, maps, conrefs, and metadata move 1:1. Custom IXIASOFT workflow logic is ported into DiscoverCX's workflow engine. Timeline is scoped per project — it scales with content volume and customization depth.",
      },
      {
        q: "How does pricing compare?",
        a: "IXIASOFT has historically sold on a license-plus-maintenance model, with infrastructure overhead for on-prem deployments. DiscoverCX is enterprise SaaS — no on-prem infrastructure to run, upgrades included, support and operations bundled. Request a quote and we'll model your specific TCO comparison.",
      },
    ],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
