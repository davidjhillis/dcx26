// Single source of truth for /pricing content.

export const pricingMeta = {
  title: "Pricing & Packages — Build Your Success Stack",
  description:
    "DiscoverCX is an enterprise content delivery platform. Build your stack from three modular products — Discover CCMS, Discover Portal, and Headless API — across four configurable packages. Get a quote.",
} as const;

export const pricingHero = {
  eyebrow: "Pricing & Packages",
  headline: "Build your success stack with DiscoverCX.",
  lede:
    "DiscoverCX gives you the modular building blocks for outstanding customer experience — Discover CCMS, Discover Portal, and a Headless API. Go all-in-one or compose your stack. Enterprise pricing, scoped to your needs.",
};

export const pricingProducts = [
  {
    name: "Discover CCMS",
    pitch:
      "Power content operations. Empower SMEs and authors. Improve quality, reduce errors, and increase productivity.",
    features: [
      "Structured content authoring",
      "AI writing assistant",
      "DITA, HTML, DocBook, Markdown",
      "Workflows and reviews",
      "Version control",
      "Multichannel publishing",
      "Localization automation",
      "Content Publishing Pipeline",
    ],
  },
  {
    name: "Discover Portal",
    pitch:
      "Self-service portal platform. Personalize experiences with granular permissions. Create a unified source of truth.",
    addOn: true,
    features: [
      "SSO and user management",
      "No-code template design",
      "Integrated ticketing and cases",
      "Ticket deflection",
      "Knowledge base",
      "Glossary and help widget",
      "Granular permissions and security",
      "Bi-directional CRM sync",
    ],
  },
  {
    name: "Headless API",
    pitch:
      "Aggregate, transform, and deliver any content format through a powerful Content-as-a-Service API.",
    addOn: true,
    features: [
      "JSON API",
      "Enterprise publishing workflows",
      "Dynamic content delivery",
      "Content transformation",
      "High-availability cloud service",
      "Integration with third-party apps",
      "Support any platform or device",
      "Content localization delivery",
    ],
  },
];

export const pricingPackages = [
  {
    name: "All-in-One",
    composition: "CCMS + Portal",
    blurb:
      "Combines CCMS and Portal — a seamless content management and customer engagement experience.",
    bestFor:
      "Teams replacing a help authoring tool plus a separate portal with one platform.",
    includes: ["Discover CCMS", "Discover Portal", "Standard integrations", "24×7 critical-care support"],
    featured: true,
  },
  {
    name: "Enterprise Portal Package",
    composition: "Portal + Aggregation",
    blurb:
      "Our enterprise portal and customer experience platform. Bring your own content with aggregation services and connectors to leading CCMS apps.",
    bestFor:
      "Teams that already own a CCMS or want to consolidate multiple content sources into one customer portal.",
    includes: ["Discover Portal", "Content aggregation services", "Connectors to leading CCMS apps", "24×7 critical-care support"],
  },
  {
    name: "CCMS + Headless Delivery",
    composition: "CCMS + Headless API",
    blurb:
      "Streamline management and distribute your content seamlessly across all channels and platforms.",
    bestFor:
      "Teams building their own front ends, in-product help, or AI integrations from a structured source of truth.",
    includes: ["Discover CCMS", "Headless API", "Standard integrations", "24×7 critical-care support"],
  },
  {
    name: "Headless CMS",
    composition: "Headless API",
    blurb:
      "A delivery-first package: structured content modeled in DiscoverCX and exposed through the Headless API for in-product help, docs sites, and AI grounding.",
    bestFor:
      "Teams that need structured content delivery without a customer-facing portal layer.",
    includes: ["Headless API", "Content modeling", "Multichannel delivery", "24×7 critical-care support"],
  },
];

export const pricingServices = [
  "Dedicated Project Manager",
  "Business analysis and definition",
  "Design, development, and testing",
  "Content migration and launch",
  "Support and SaaS deployment",
  "24×7 critical care",
  "Full web operations",
];

export const pricingFaqs = [
  {
    q: "How is DiscoverCX priced?",
    a: "DiscoverCX is an enterprise SaaS platform with annual contracts sized to your authoring team, your delivery volume, and the package you select. We don't publish per-seat list prices because customer configurations vary widely — a small docs team running CCMS + Headless looks very different from an enterprise running the All-in-One package with global rollout services. Talk to us and we'll provide a line-item proposal.",
  },
  {
    q: "Can I start with one product and add others later?",
    a: "Yes. The three products — Discover CCMS, Discover Portal, and Headless API — are designed to be added incrementally. Customers commonly start with CCMS + Headless and add Portal in a later phase, or start with Portal + content aggregation and add CCMS once they consolidate authoring.",
  },
  {
    q: "What's included in implementation services?",
    a: "Every engagement includes a dedicated project manager, business analysis, design and development, testing, content migration, and launch support. Ongoing operations include 24×7 critical-care support and SaaS deployment management.",
  },
  {
    q: "Can we migrate from MadCap, Paligo, Heretto, or another CCMS?",
    a: "Yes. Migration is part of the implementation services on Business and Enterprise engagements. We provide tooling and a dedicated migration engineer to move existing DITA, Flare projects, or proprietary CCMS content into Discover CX without fidelity loss.",
  },
  {
    q: "Is DiscoverCX SOC 2 compliant?",
    a: "Yes. DiscoverCX is SOC 2 Type II certified, with secure storage, continuous monitoring, and privacy compliance across the platform. SOC 2 reports are available on request under NDA.",
  },
  {
    q: "How do I get a quote?",
    a: "Request a demo or contact sales — a solution architect will scope your project (users, content volume, integrations, package mix) and respond with a written proposal, typically within a few business days.",
  },
];
