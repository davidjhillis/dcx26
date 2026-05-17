// HubSpot portal: 5658995
// All ebook PDFs live in /DCX eBooks/ in HubSpot Files.
// Each ebook is gated by a HubSpot form (formGuid) that captures the lead,
// then the user is given the signed PDF URL.

export const HUBSPOT_PORTAL_ID = "5658995";

export type Ebook = {
  slug: string;
  category:
    | "Strategy"
    | "DITA & authoring"
    | "Solutions"
    | "Buyer's guide"
    | "Use case";
  tagline: string;
  title: string;
  subtitle?: string;
  summary: string;
  keyInsights: string[];
  idealReaders: string[];
  whatsInside: string[];
  pages: number;
  readTime: string;
  cover: string;
  ctaLabel: string;
  hubspot: {
    /** HubSpot Form GUID for gating */
    formId: string;
    /** HubSpot Files API file id */
    fileId: string;
    /** Direct hosted PDF URL (works without auth, but only delivered post-submit) */
    pdfUrl: string;
  };
  featured?: boolean;
};

export const ebooks: Ebook[] = [
  {
    slug: "technical-content-delivery-blueprint",
    category: "Strategy",
    tagline: "Modern content delivery",
    title: "The Technical Content Delivery Blueprint",
    subtitle: "Author once. Deliver everywhere. Without the rebuild.",
    summary:
      "Actionable insights into modern content delivery strategies. Learn how to ensure your technical documentation reaches the right audience in the right format while maintaining consistency and scalability across portals, products, partners, and AI assistants.",
    keyInsights: [
      "Explore dynamic delivery systems and how leading companies modernize content accessibility",
      "Why a headless delivery layer changes the operating model for documentation teams",
      "The five surfaces every documentation program now has to ship to — and how to staff for it",
      "Migration paths from baked outputs to real-time API delivery",
    ],
    idealReaders: [
      "Documentation directors planning a 12–24 month roadmap",
      "Content operations leaders rationalizing a sprawling tool stack",
      "Solution architects evaluating headless CCMS + CDP architectures",
    ],
    whatsInside: [
      "The reference architecture for headless content delivery",
      "A scoring rubric for evaluating delivery platforms",
      "Three real migration sequences (with timelines)",
      "Sample data contracts your engineering team can review",
    ],
    pages: 24,
    readTime: "18 min",
    cover: "/ebooks/technical-content-delivery.png",
    ctaLabel: "Download the eBook",
    hubspot: {
      formId: "09a8c9c9-525e-43cf-91f5-9db9978107ee",
      fileId: "183286674564",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/technical-content-delivery-blueprint.pdf",
    },
    featured: true,
  },
  {
    slug: "dita-cheatsheet",
    category: "DITA & authoring",
    tagline: "DITA made simple",
    title: "The DiscoverCX DITA Cheatsheet",
    subtitle: "Every DITA element you actually use, on one page.",
    summary:
      "A quick reference guide that simplifies the key concepts of DITA, making structured content easy to understand and implement. Breaks down essential elements like topic types, reuse strategies, and content maps so you get started with confidence.",
    keyInsights: [
      "Understand DITA basics, from topic types to content reuse, for greater efficiency",
      "When to use a concept vs task vs reference topic (with examples)",
      "Conrefs, keyrefs, and conditional processing — the parts that actually save time",
      "Practical patterns for content maps that scale",
    ],
    idealReaders: [
      "Technical writers new to structured authoring",
      "Content managers evaluating a move from unstructured to DITA",
      "Teams formalizing a style guide and reuse strategy",
    ],
    whatsInside: [
      "One-page DITA element quick-reference",
      "Topic-type decision flowchart",
      "Reuse and conditional-processing recipes",
      "A starter content map you can adapt",
    ],
    pages: 8,
    readTime: "6 min",
    cover: "/ebooks/dita-cheatsheet.png",
    ctaLabel: "Download the cheat sheet",
    hubspot: {
      formId: "56fa8166-4c20-4f31-9af8-ab24957be899",
      fileId: "180535488857",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/DiscoverCX%20DITA%20Cheat%20Sheet.pdf",
    },
    featured: true,
  },
  {
    slug: "solution-guide-technical-publishing",
    category: "Solutions",
    tagline: "Your publishing solution",
    title: "Solution Guide to Technical Publishing",
    subtitle: "Streamline workflows. Reduce bottlenecks. Ship consistently.",
    summary:
      "Overcome the key challenges in technical publishing by adopting efficient strategies and tools. Streamline workflows, reduce bottlenecks, and deliver high-quality content consistently across multiple formats and channels.",
    keyInsights: [
      "Explore dynamic delivery systems and how leading companies modernize content accessibility",
      "Where bottlenecks actually live in a modern documentation pipeline",
      "Process patterns that cut publishing time without cutting quality",
      "How structured content compounds returns across teams and tools",
    ],
    idealReaders: [
      "Documentation teams shipping at scale",
      "Content leaders managing multi-platform publishing",
      "Operations leads consolidating overlapping tools",
    ],
    whatsInside: [
      "A 5-stage publishing operating model",
      "Pipeline diagrams from real DCX customers",
      "An audit template for finding bottlenecks",
      "Org-design patterns for high-throughput teams",
    ],
    pages: 32,
    readTime: "22 min",
    cover: "/ebooks/solution-guide-technical-publishing.png",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "18fe024a-fe3e-43db-9c58-d77ff305ee9d",
      fileId: "176803558004",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/DCX%20Solution%20Guide%20Technical%20Content%20Publishing.pdf",
    },
  },
  {
    slug: "ultimate-guide-tech-doc-software",
    category: "Buyer's guide",
    tagline: "Comprehensive publishing guide",
    title: "The Ultimate Guide to Choosing Technical Documentation Software",
    subtitle: "The vendor evaluation playbook used by Fortune 500 buyers.",
    summary:
      "Struggling to find the right technical documentation software for your business? This comprehensive guide walks through everything you need to know — from why documentation matters, to evaluating top software options, to the key features that separate enterprise-grade systems from the rest.",
    keyInsights: [
      "Explore end-to-end strategies for publishing technical documentation at scale",
      "The seven capability categories every shortlist should cover",
      "Cost lines that always get missed in TCO modeling",
      "What 'enterprise-ready' actually means for documentation software",
    ],
    idealReaders: [
      "Documentation leaders building a shortlist",
      "Procurement teams running a structured evaluation",
      "Solution architects writing the technical scorecard",
    ],
    whatsInside: [
      "A complete vendor evaluation framework",
      "Capability checklist (78 items)",
      "TCO worksheet with hidden cost categories",
      "Sample RFP question bank",
    ],
    pages: 36,
    readTime: "26 min",
    cover: "/ebooks/ultimate-guide-tech-doc-software.png",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "c92bed48-6047-4022-b5f2-1d624eba6db6",
      fileId: "177337429923",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/Discover%20CX%20Ultimiate%20Guide%20to%20Choosing%20Technical%20Documentation%20Software.pdf",
    },
    featured: true,
  },
  {
    slug: "customer-portal-buyers-guide",
    category: "Buyer's guide",
    tagline: "Customer experience portals",
    title: "The Customer Portal Buyer's Guide",
    subtitle: "Choose a portal that scales with your customer experience.",
    summary:
      "How to evaluate, scope, and select a customer portal that does more than serve PDFs. Covers documentation, self-service, case management, community, and personalization — and the architecture trade-offs you'll make along the way.",
    keyInsights: [
      "Documentation portal vs customer experience portal — and when you need both",
      "Capability checklist across content, search, case, community, and identity",
      "Integration patterns with Salesforce, ServiceNow, Atlassian, Zendesk",
      "How to phase a portal launch in 4–8 weeks",
    ],
    idealReaders: [
      "Customer success and CX leaders",
      "Documentation directors expanding into self-service",
      "IT and identity teams scoping SSO and access",
    ],
    whatsInside: [
      "Portal capability matrix",
      "Reference architecture diagrams",
      "Phased launch plan with milestones",
      "Identity, SSO, and access checklist",
    ],
    pages: 28,
    readTime: "20 min",
    cover: "/ebooks/customer-portal-buyers-guide.png",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "c3cc7565-6ea0-42b9-8178-b5915d86f8ed",
      fileId: "119239210088",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/DiscoverCX-customer-portal-buyers-guide.pdf",
    },
  },
  {
    slug: "customer-portal-rfp",
    category: "Buyer's guide",
    tagline: "Procurement-ready",
    title: "The Customer Support Portal RFP Guide",
    subtitle: "Vendor-evaluation questions Fortune 500 procurement teams use.",
    summary:
      "An editable RFP template for support and customer portals. Vetted by enterprise buying committees, scoped to evaluate everything from authoring and search to identity and integrations — without the vendor-favorable softballs.",
    keyInsights: [
      "What every RFP question is actually evaluating",
      "Red-flag responses to watch for",
      "How to score on technical, commercial, and operational dimensions",
      "Vendor demo scorecard you can hand to the committee",
    ],
    idealReaders: [
      "Procurement and vendor-management teams",
      "CX, support, and documentation leaders running an RFP",
      "Solution architects assembling the technical scorecard",
    ],
    whatsInside: [
      "78 vendor-evaluation questions",
      "Weighted scoring template",
      "Red-flag answer reference",
      "Demo scorecard and follow-up question bank",
    ],
    pages: 22,
    readTime: "15 min",
    cover: "/ebooks/customer-portal-rfp.png",
    ctaLabel: "Download the RFP guide",
    hubspot: {
      formId: "3d50c215-ec22-457b-9472-a432c63e0245",
      fileId: "119852707433",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/Resource%20Downloads/DiscoverCX/RFP-guide-customer-support-portal-discovercx.pdf",
    },
  },
  {
    slug: "what-is-a-ccms",
    category: "Strategy",
    tagline: "Primer",
    title: "What is a CCMS, and Why You Need One",
    subtitle: "The 20-minute primer on component content management.",
    summary:
      "A clear, fast primer on what a Component Content Management System actually is — when you need one, when you don't, and what separates an enterprise-grade CCMS from a glorified Markdown editor.",
    keyInsights: [
      "The five jobs only a CCMS can do well",
      "When a wiki or static-site generator is enough",
      "How structured content compounds reuse and translation savings",
      "The CCMS evaluation framework in one diagram",
    ],
    idealReaders: [
      "Documentation leaders making the case to executives",
      "Teams transitioning from unstructured to structured authoring",
      "Buying committees scoping a CCMS shortlist",
    ],
    whatsInside: [
      "The CCMS capability map",
      "Decision tree: CCMS vs CMS vs SSG vs wiki",
      "Reuse ROI worksheet",
      "Reference org chart for a structured-content team",
    ],
    pages: 24,
    readTime: "18 min",
    cover: "/ebooks/what-is-a-ccms.png",
    ctaLabel: "Download the eBook",
    hubspot: {
      formId: "4e68611f-20e8-4e8a-9e0b-5fafd46e3814",
      fileId: "172316155048",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/Discover%20CX%20what%20is%20a%20ccms%20and%20why%20you%20need%20one.pdf",
    },
  },
  {
    slug: "five-reasons-omnichannel-ccms",
    category: "Strategy",
    tagline: "Omnichannel content",
    title: "5 Reasons You Need an Omnichannel CCMS",
    subtitle: "Your content has to land in five places. Plan for it.",
    summary:
      "Why single-channel authoring is a dead end, and how an omnichannel CCMS pays for itself in the first 12 months. Includes five specific scenarios where teams hit the wall — and how a unified content layer changes the math.",
    keyInsights: [
      "Why output-format thinking is the wrong starting point",
      "The five surfaces every modern documentation program serves",
      "Where translation costs hide in a fragmented authoring stack",
      "How AI assistants make omnichannel non-optional",
    ],
    idealReaders: [
      "Documentation leaders managing multi-product portfolios",
      "Content ops teams scoping a tooling consolidation",
      "CTOs evaluating content infrastructure for AI initiatives",
    ],
    whatsInside: [
      "Five real omnichannel scenarios",
      "Cost-of-fragmentation worksheet",
      "Reference architecture for omnichannel publishing",
      "12-month payoff model",
    ],
    pages: 20,
    readTime: "15 min",
    cover: "/ebooks/five-reasons-omnichannel-ccms.png",
    ctaLabel: "Download the eBook",
    hubspot: {
      formId: "83dc4cb9-357c-472e-90a1-d5198b95b6dc",
      fileId: "172316359284",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/5%20reasons%20you%20need%20an%20omnichannel%20CCMS.pdf",
    },
  },
  {
    slug: "topic-authoring-associations",
    category: "Use case",
    tagline: "Topic-based authoring",
    title: "Topic-Based Authoring for Associations",
    subtitle: "How member associations build durable knowledge at scale.",
    summary:
      "Member associations sit on decades of standards, certifications, and training content. This guide explains how topic-based authoring makes that content reusable, multi-channel, and member-personalized — without rewriting the corpus.",
    keyInsights: [
      "Why associations are the perfect topic-based authoring use case",
      "Member-personalized content paths and how to model them",
      "How standards bodies use conrefs to manage cross-document updates",
      "The role of a CCMS in association certification workflows",
    ],
    idealReaders: [
      "Association content and education leaders",
      "Standards bodies managing technical publications",
      "Member-services teams expanding self-service",
    ],
    whatsInside: [
      "Reference content model for associations",
      "Member-personalization patterns",
      "Standards-to-certification reuse playbook",
      "Migration plan from monolithic documents",
    ],
    pages: 16,
    readTime: "12 min",
    cover: "/ebooks/topic-authoring-associations.png",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "fd16e182-9f3a-4ff7-80bd-24c42cd2343b",
      fileId: "172316155047",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/discover%20cx%20topic%20authoring%20for%20associations.pdf",
    },
  },
  {
    slug: "discovercx-product-answers",
    category: "Use case",
    tagline: "Product answers",
    title: "DiscoverCX for Product Answers",
    subtitle: "Turn your documentation into the answer layer your product needs.",
    summary:
      "Modern products embed answers, not articles. This guide explains how DCX powers in-product help, chatbots, and AI assistants from the same content corpus your documentation team already owns — without forking content or copying it into a knowledge base.",
    keyInsights: [
      "Why the answer surface, not the doc page, is the new unit of consumption",
      "How structured content powers both human and AI consumers",
      "The shared-source pattern for docs, in-product help, and AI",
      "Telemetry loops that make the corpus self-improving",
    ],
    idealReaders: [
      "Product managers shipping in-product help and AI features",
      "Documentation directors expanding into product surfaces",
      "AI/ML teams grounding LLMs in proprietary content",
    ],
    whatsInside: [
      "Reference architecture for in-product answers",
      "Content modeling for answer-grade topics",
      "Telemetry and feedback loop patterns",
      "Three case studies from DCX customers",
    ],
    pages: 28,
    readTime: "21 min",
    cover: "/ebooks/discovercx-product-answers.png",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "f27e56c1-45f8-4efc-ae03-ddfad90db525",
      fileId: "172316155052",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/DiscoverCX-product-answers.pdf",
    },
    featured: true,
  },
  {
    slug: "salesforce-experience-cloud",
    category: "Use case",
    tagline: "Salesforce Experience Cloud",
    title: "DiscoverCX for Salesforce Experience Cloud",
    subtitle: "Power Salesforce Knowledge and Experience Cloud from one source.",
    summary:
      "Salesforce Knowledge is rarely the right place to author. DCX gives you a structured authoring layer outside Salesforce that publishes into Knowledge, Experience Cloud, and Service Cloud — without duplication, without sync issues, and without a custom ETL.",
    keyInsights: [
      "Why Knowledge as a system of record breaks down at scale",
      "The DCX → Salesforce integration pattern",
      "Personalization across agent, customer, and partner experiences",
      "Migration from Salesforce-native Knowledge to structured authoring",
    ],
    idealReaders: [
      "Salesforce architects building Experience or Service Cloud",
      "Customer success and support operations leaders",
      "Knowledge teams owning Salesforce Knowledge today",
    ],
    whatsInside: [
      "DCX ↔ Salesforce integration architecture",
      "Knowledge migration plan",
      "Agent + customer surface design patterns",
      "Sample Apex/SDK integration points",
    ],
    pages: 22,
    readTime: "16 min",
    cover: "/ebooks/salesforce-experience-cloud.webp",
    ctaLabel: "Download the guide",
    hubspot: {
      formId: "fdf3b7ce-be69-42ea-a20e-89517e5febac",
      fileId: "172314037342",
      pdfUrl:
        "https://5658995.fs1.hubspotusercontent-na1.net/hubfs/5658995/DCX%20eBooks/Discover-CX-K3.pdf",
    },
  },
];

export const getEbook = (slug: string) => ebooks.find((e) => e.slug === slug);

export const ebookCategories = Array.from(new Set(ebooks.map((e) => e.category)));
