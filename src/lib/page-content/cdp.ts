// Single source of truth for /platform/cdp content.

export const cdpMeta = {
  title: "Discover CDP — The Product Knowledge Hub for technical teams",
  description:
    "Unify scattered product content into a documentation hub your team can steer. Visual editing, ready-to-go templates, content from any source, AI-ready search, multilingual at enterprise scale, native Salesforce.",
} as const;

export const cdpHero = {
  eyebrow: "Product · Discover CDP",
  headline: "Your documentation is a product. Treat it like one.",
  lede:
    "Discover CDP is the Product Knowledge Hub for technical content teams. Unify every source. Design without dev tickets. Ship the same content to your portal, to Salesforce, to your product UI, and to AI — from one platform built for documentation, not adapted to it.",
};

export const cdpCoreCapabilities = [
  {
    h: "Product knowledge hub",
    sub: "Not a CMS with a doc theme",
    p: "A purpose-built delivery platform for technical content — structured topics, versioned products, locale fan-out, audience-aware. Designed for documentation, not adapted to it.",
  },
  {
    h: "Visual editing",
    sub: "Dream it. Build it. Ship it.",
    p: "Drag-and-drop layout, inline editing on the live page, design tokens for brand fidelity. Your team ships changes. Engineering stops fielding portal tickets.",
  },
  {
    h: "Templates → fully custom",
    sub: "Start fast. Scale to bespoke.",
    p: "Production-ready templates for home, topic, search, hub, release notes. Theme in a week. Extend into a fully custom portal as you grow. No re-platforming.",
  },
  {
    h: "Unify every source",
    sub: "One delivery layer",
    p: "Discover CCMS, Confluence, SharePoint, Heretto, Paligo, MadCap, files, video, any REST API — converged into one searchable, governed product knowledge layer.",
  },
  {
    h: "AI-ready search",
    sub: "Built-in or bring your own",
    p: "Insight Search is federated, semantic-ranked, and analytics-instrumented. Or hand clean typed JSON to Coveo, Elastic, or Algolia — both first-class.",
  },
  {
    h: "Headless + Salesforce-native",
    sub: "The portal isn't the only destination",
    p: "Embed in Salesforce Experience Cloud. Surface in Service Cloud. Ground an AI assistant. Same content, served as typed JSON through the Delivery API.",
  },
];

export const cdpIntegrations: [string, string][] = [
  ["Salesforce Service Cloud", "Native widgets. Bi-directional case sync."],
  ["Salesforce Experience Cloud", "Embed DCX inside, or pull content as a package."],
  ["ServiceNow", "Case widgets, knowledge sync, identity passthrough."],
  ["Atlassian & Zendesk", "JSM, Confluence, Zendesk Guide — wired into your service stack."],
  ["Identity & SSO", "SAML, OIDC, SCIM, MFA. Group-, plan-, product-based access."],
  ["Webhooks + API", "Outbound on every event. REST + GraphQL inbound."],
];

export const cdpFaqs = [
  {
    q: "How is this different from Fluid Topics?",
    a: "Fluid Topics is a strong product knowledge platform focused on aggregation and AI delivery. Discover CDP overlaps on that surface but extends into the full experience: visual editing, ready-to-go templates, design tokens, customer experience features, and a delivery layer natively wired to Discover CCMS for authoring and SME review. If your priority is unifying sources for AI, Fluid Topics is solid. If you also need a shippable, brand-owned product knowledge hub your documentation team can steer, look at DCX.",
  },
  {
    q: "How is this different from Zoomin?",
    a: "Zoomin focuses on doc portal delivery with strong Salesforce integration. Discover CDP overlaps and extends into visual editing, native authoring on top of Discover CCMS, AI grounding via Discover AI, and a broader set of templates and personalization controls. Evaluate DCX when you need more than a portal layer on top of your existing CCMS.",
  },
  {
    q: "Can we keep our existing CCMS?",
    a: "Yes. Connectors for Heretto, Paligo, MadCap, IXIASOFT, Confluence, SharePoint, and custom sources are part of the Enterprise package. You bring your authoring source and DCX becomes the unified product knowledge layer. Many customers eventually consolidate onto Discover CCMS, but it's not required.",
  },
  {
    q: "What's the scale ceiling?",
    a: "Production hubs on Discover CDP routinely run with millions of Indexed Content Units across multiple locales, products, and versions. The platform is sized for Fortune 500 product catalogs — UKG, Dolby, and Cisco Webex run on this infrastructure.",
  },
  {
    q: "Can we use our own search?",
    a: "Yes. Insight Search is included and is what most teams ship with. If you've standardized on Coveo, Elastic, Algolia, or Lucidworks, DCX exposes clean typed JSON for it to index. Both patterns are first-class — you can switch later without re-platforming.",
  },
  {
    q: "Is it secure enough for regulated industries?",
    a: "SOC 2 Type II. 24×7 critical-care support. Unlimited tech support. RBAC, SAML / OIDC / SCIM, MFA. Encryption in transit and at rest with key management. Data residency options. We support Fortune 500 financial services, healthcare, and manufacturing on this stack.",
  },
  {
    q: "How long does a hub launch take?",
    a: "Template-based launches go live in 4–8 weeks: ~1 week theming, 2–3 weeks content migration and integrations, 1–2 weeks UAT and soft launch. Fully custom builds with bespoke layouts take longer. Both paths use the same delivery infrastructure — you can start templated and customize over time.",
  },
];
