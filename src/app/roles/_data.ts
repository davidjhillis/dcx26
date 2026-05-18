// Role-based pages. Each role speaks to a specific buyer/user audience and
// translates DCX capabilities into their daily-work outcomes.

export type Role = {
  slug: string;
  name: string;
  tagline: string;
  iconKey: IconKey;
  /** Contextual hero photo for the role page */
  heroImage: { src: string; alt: string };
  /** One-line, used on the /roles index and "Designed for" hubs */
  summary: string;
  /** Hero lede paragraph */
  lede: string;
  /** 3 problem/outcome blocks — the meat of the page */
  problems: Array<{
    pain: string; // the pain headline
    outcome: string; // the outcome headline
    body: string; // 2-3 sentence narrative
    proof?: string; // optional kbd-style proof line
  }>;
  /** 4-6 capability cards */
  capabilities: Array<{ h: string; p: string }>;
  /** Quote (or "what teams tell us" line) — kept honest, not fabricated */
  quote?: { text: string; attribution: string };
  /** Related product pages */
  relatedProducts: Array<{ label: string; href: string }>;
};

export type IconKey =
  | "writer"
  | "exec"
  | "field"
  | "support"
  | "engineering"
  | "leadership";

export const roles: Role[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "documentation-teams",
    name: "Documentation Teams",
    tagline: "For technical writers",
    iconKey: "writer",
    heroImage: {
      src: "/humans/writer-pair-review.jpg",
      alt: "Two technical writers at adjacent monitors, reviewing structured content together in a warm office",
    },
    summary:
      "Write once, ship everywhere — and reuse it the way you always meant to.",
    lede: "Writers don't need another editor. They need a repository that actually works, an SME review flow that doesn't live in email, and a delivery layer they don't have to argue with. Discover CX gives documentation teams structured authoring on top of a typed component store — and lets the work compound.",
    problems: [
      {
        pain: "Three writers, one install procedure.",
        outcome: "Single-sourcing that actually single-sources.",
        body: "Conrefs, keyrefs, conditional processing, profiling, and branching — all native, all in one repository. When the part number changes, you change it once and seven topics update. Translation memory catches up automatically.",
        proof: "DITA 1.3 · conrefs · keyrefs · conditional · profiling",
      },
      {
        pain: "SME review lives in email.",
        outcome: "Review where the topic lives, with the right context.",
        body: "Custom workflow states, inline comments, tracked revisions, multi-step approval, scheduled publishing. SMEs sign off on the topic itself — not on a Word doc someone exported on Tuesday.",
        proof: "Workflows · approvals · revisions · audit trail",
      },
      {
        pain: "Publishing is a nightly batch you don't trust.",
        outcome: "Topics ship in seconds, everywhere at once.",
        body: "DITA-OT outputs HTML5, PDF, Markdown, EPUB. The Delivery API serves the same content as typed JSON to portals, in-product help, partners, and AI assistants. No drift between staged and published.",
        proof: "HTML5 · PDF · JSON · real-time",
      },
    ],
    capabilities: [
      {
        h: "Editor of choice",
        p: "Oxygen, Fonto, Simply XML, the Discover CX editor, or your IDE with Git. Pick what fits the writer — repository stays single.",
      },
      {
        h: "AI co-authoring (opt-in)",
        p: "Draft, summarize, restructure, validate. Every suggestion stays version-controlled and SME-reviewable. Off by default.",
      },
      {
        h: "Translation management",
        p: "XLIFF 2.1 round-trip with Smartling, Lilt, XTM. Locale fan-out from a single source. TM native.",
      },
      {
        h: "Branching for releases",
        p: "Major releases get their own branch. Minor fixes merge back. The repository enforces structure — your writers don't have to.",
      },
      {
        h: "Reuse analytics",
        p: "See what's reused, where, and how often. Find candidates for further reuse. Spot stale conrefs before they bite.",
      },
      {
        h: "Migration included",
        p: "MadCap, Paligo, Heretto, IXIASOFT, Confluence — a migration engineer owns the move end-to-end.",
      },
    ],
    relatedProducts: [
      { label: "Discover CCMS", href: "/platform/ccms" },
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Discover AI", href: "/platform/ai" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "cio-and-heads-of-knowledge",
    name: "CIOs & Heads of Knowledge",
    tagline: "For technology leaders",
    iconKey: "exec",
    heroImage: {
      src: "/humans/cio-strategy.jpg",
      alt: "A technology executive in a sunlit office mid-conversation, whiteboard with architecture diagram visible",
    },
    summary:
      "Make your product knowledge AI-ready before someone else does.",
    lede: "AI assistants are about to read every word your team writes. The question isn't whether — it's whether the content is structured, current, and grounded in a system you control. Discover CX gives you a product knowledge platform that's enterprise-grade, AI-native, and built on content you already own.",
    problems: [
      {
        pain: "Your AI is reading the wrong PDF.",
        outcome: "Ground the model on typed, versioned, governed content.",
        body: "Discover AI Data Operations pipes structured content into a vector database you bring (or one we host) — with SOC 2 controls, audit, and the same taxonomy as the source. No more retrieval that pulls from a 2019 SharePoint copy.",
        proof: "BYOK vector DB · SOC 2 Type II · audit-grade",
      },
      {
        pain: "Your knowledge stack has eight tools.",
        outcome: "One platform from authoring to delivery to AI.",
        body: "Discover CCMS for authoring. Discover CDP for delivery. Discover AI for grounding. One vendor, one identity, one audit log. Replace the stack incrementally — most teams start with one product and consolidate over 12-24 months.",
        proof: "CCMS + CDP + AI · one identity · one audit",
      },
      {
        pain: "Procurement wants a five-year story.",
        outcome: "Enterprise-ready, on Day One and Day 1,825.",
        body: "SOC 2 Type II. 24×7 critical-care support. Unlimited tech support. Data residency. RBAC, SAML, OIDC, SCIM, MFA. Migration engineering included. The kind of vendor your CISO and your CFO can both sign off on.",
        proof: "SOC 2 · 99.95% SLA · enterprise contracts",
      },
    ],
    capabilities: [
      {
        h: "AI grounding, your way",
        p: "Bring your own vector DB and embeddings, or use ours. Retrieval is content-aware, locale-aware, and version-aware.",
      },
      {
        h: "Identity that ladders to your IdP",
        p: "SAML, OIDC, SCIM, MFA. Group-, plan-, and product-based access. No proprietary user store.",
      },
      {
        h: "Audit + observability",
        p: "Every change attributed and exportable. Retrieval logged. Pipeline metrics first-class.",
      },
      {
        h: "Data residency",
        p: "US, EU, or regional hosting options. Your data, your jurisdiction.",
      },
      {
        h: "Procurement-friendly",
        p: "Enterprise SLA, security questionnaire pre-answered, custom DPA, real solution architects on the call.",
      },
      {
        h: "Build-vs-buy off the table",
        p: "What you'd build in 18 months — content modeling, delivery, search, AI grounding — ships in weeks.",
      },
    ],
    relatedProducts: [
      { label: "Discover AI", href: "/platform/ai" },
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Discover CCMS", href: "/platform/ccms" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "field-service",
    name: "Field Service",
    tagline: "For service operations",
    iconKey: "field",
    heroImage: {
      src: "/humans/field-service-tech.jpg",
      alt: "A field service technician in an equipment room holding a rugged tablet mid-troubleshoot",
    },
    summary:
      "First-time-fix the hard ones — with answers technicians can find on the truck.",
    lede: "Your techs spend 40 minutes troubleshooting and 20 minutes finding the right manual. Discover CX flips it: contextual, version-aware product knowledge in their hand, on the asset they're standing in front of — even when the building doesn't have WiFi.",
    problems: [
      {
        pain: "The right manual is in a folder somebody deleted.",
        outcome: "Equipment-aware content, surfaced by serial number or scan.",
        body: "Structured topics tagged by product, model, version, and locale. Scan an asset or look it up by serial — get the topics that actually apply, not 14 PDFs and a Google Doc.",
        proof: "Faceted by product · model · version · locale",
      },
      {
        pain: "No WiFi in the basement of a substation.",
        outcome: "Offline mode that works.",
        body: "Pre-download relevant product sets to laptop or mobile. Search, read, mark up, and sync feedback when the device is back online. The portal doesn't break when the connection does.",
        proof: "Offline read · offline search · sync on reconnect",
      },
      {
        pain: "Technicians know the doc is wrong.",
        outcome: "Field feedback closes the loop.",
        body: "Bookmark, rate, comment, propose changes — from the same surface they're reading on. Feedback lands in the documentation team's workflow with the topic, device, and version attached.",
        proof: "Inline feedback · suggested edits · usage analytics",
      },
    ],
    capabilities: [
      {
        h: "Mobile-first portal",
        p: "Designed for one-handed reading on a phone or tablet. Big tap targets, readable type, fast on a 4G link.",
      },
      {
        h: "Offline-ready",
        p: "Download a product or job package. Read, search, and annotate offline. Sync on reconnect.",
      },
      {
        h: "Asset-aware",
        p: "Scan or look up an asset; get the content that applies. Version- and configuration-aware.",
      },
      {
        h: "Feedback loop",
        p: "Field corrections route back to the documentation team with full context.",
      },
      {
        h: "Partner enablement",
        p: "Same content surfaced through your partner portal. Identity, branding, and access controlled.",
      },
      {
        h: "Compliance trail",
        p: "Every doc viewed and acknowledged tracked when you need it — for safety procedures, regulated installs, audit.",
      },
    ],
    relatedProducts: [
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Discover CCMS", href: "/platform/ccms" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "customer-support",
    name: "Customer Support",
    tagline: "For service & support teams",
    iconKey: "support",
    heroImage: {
      src: "/humans/support-call.jpg",
      alt: "A customer success specialist in a warm home office on a headset, mid-conversation",
    },
    summary:
      "Cut handle time. Cut escalation. Cut the &quot;let me check on that&quot;.",
    lede: "Your agents are pasting Confluence URLs into Slack channels. Your tier-2 is rewriting answers your docs team already wrote. Discover CX gives support teams a single, trusted knowledge surface — wired into Salesforce, ServiceNow, and the case itself.",
    problems: [
      {
        pain: "Tier-1 doesn't trust the knowledge base.",
        outcome: "One trusted source, everywhere agents work.",
        body: "Product knowledge from Discover CDP flows directly into Salesforce Service Cloud, ServiceNow, and Zendesk. Same content the customer sees in the portal — surfaced inside the case, with the right version and product context already attached.",
        proof: "Salesforce · ServiceNow · Zendesk · native widgets",
      },
      {
        pain: "Agents type the same answer three hundred times a week.",
        outcome: "Drop-in answer snippets, owned by the docs team.",
        body: "Approved knowledge blocks that agents can search, paste, and send — with version and source provenance preserved. Edits route back to the documentation team, not into a thousand canned responses.",
        proof: "Snippets · provenance · feedback loop",
      },
      {
        pain: "Customers find your doc, then file a case anyway.",
        outcome: "Self-service that actually deflects.",
        body: "Federated search, personalized content, role-aware answers, embedded case forms with full topic context. When customers do file, the case lands with the topic, version, device, and identity attached — so tier-1 picks it up with context, not a vague subject line.",
        proof: "Deflection · contextual case capture · CRM sync",
      },
    ],
    capabilities: [
      {
        h: "Salesforce-native",
        p: "Native widgets in Service Cloud + Experience Cloud. Bi-directional case sync. Knowledge served from Discover CDP, surfaced where agents and customers work.",
      },
      {
        h: "ServiceNow + Zendesk",
        p: "JSM, Confluence, Zendesk Guide — wired into your existing service stack. Same content, every surface.",
      },
      {
        h: "Federated search",
        p: "Across documentation, knowledge, files, community. Typo-tolerant, locale-aware, semantic-ranked.",
      },
      {
        h: "Personalization",
        p: "Role-, plan-, product-, locale-based content adapts to the customer or agent — no forcing them to filter.",
      },
      {
        h: "Community + cases",
        p: "Forums, Q&A, expert badges where the long tail lives. Cases filed inline with full topic and identity context.",
      },
      {
        h: "Analytics + deflection",
        p: "See what topics deflect cases, which queries fail, which content needs work. The portal feeds back to the docs team.",
      },
    ],
    relatedProducts: [
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Customer Portals", href: "/solutions/portals" },
      { label: "Salesforce Knowledge", href: "/solutions/salesforce" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "product-engineering",
    name: "Product Engineering",
    tagline: "For product & engineering",
    iconKey: "engineering",
    heroImage: {
      src: "/humans/product-engineer.jpg",
      alt: "A product engineer in a hoodie at a multi-monitor setup, code on one screen and rendered preview on the other",
    },
    summary:
      "Ship docs with the product. Let engineering contribute without retraining.",
    lede: "Product engineering owns the roadmap, the API, and the half of the docs that should never have left engineering. Discover CX lets your engineering team author in Markdown from their IDE, push PRs against a real component repository, and ship documentation that shows up the moment the feature does.",
    problems: [
      {
        pain: "Docs lag the release by two sprints.",
        outcome: "Docs ship in the same PR as the code.",
        body: "Engineering authors in Markdown from their IDE with the Git remote. Lint and preview locally. Push a PR. The CCMS reviews it like any other contribution and the topic ships in seconds — not next quarter.",
        proof: "Git remote · Markdown native · doc-as-code",
      },
      {
        pain: "Engineers won't write in XML.",
        outcome: "Markdown for engineering, DITA for documentation — same repo.",
        body: "Both first-class. Cross-format references. A DITA topic can reuse a Markdown snippet. Engineering writes README-style content where it belongs; documentation writes DITA where it pays. Neither team has to switch tools.",
        proof: "DITA + Markdown + HTML · cross-format refs",
      },
      {
        pain: "In-product help is a maintained-by-nobody string table.",
        outcome: "Same content, served as JSON, embedded in the product UI.",
        body: "The Delivery API serves typed JSON to your product's help drawer. Edit a topic in the CCMS — the in-product help updates. No string-table fork, no second source of truth.",
        proof: "Delivery API · JSON · real-time",
      },
    ],
    capabilities: [
      {
        h: "IDE + Git workflow",
        p: "VS Code, IntelliJ, Cursor — anything that speaks Git. Lint, validate, preview, PR. We open the review task automatically.",
      },
      {
        h: "Markdown first-class",
        p: "Not as an export target — as a real authoring format. Same repository, same governance, same publishing.",
      },
      {
        h: "Delivery API",
        p: "REST + GraphQL + webhooks. OAS 3.1 schemas. TypeScript SDK. Powers in-product help, AI assistants, and partner integrations.",
      },
      {
        h: "Spec-driven docs",
        p: "Pull OpenAPI / AsyncAPI specs, render typed reference docs alongside narrative content.",
      },
      {
        h: "AI for engineers",
        p: "Generate first-draft topics from PRDs, commit messages, or release notes. Every suggestion stays editable and version-controlled.",
      },
      {
        h: "Webhooks + events",
        p: "Outbound webhook on every event your team cares about. Wire docs into your CI, deploy, and observability stack.",
      },
    ],
    relatedProducts: [
      { label: "Discover CCMS", href: "/platform/ccms" },
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Discover AI", href: "/platform/ai" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "senior-leadership",
    name: "Senior Leadership",
    tagline: "For executives & operators",
    iconKey: "leadership",
    heroImage: {
      src: "/humans/exec-strategic-thinking.jpg",
      alt: "An executive at a corner-office window at golden hour, coffee in hand, mid-decision",
    },
    summary:
      "Treat content as the strategic asset it already is.",
    lede: "Your product knowledge is the cheapest, longest-lived asset on your balance sheet. It runs the help center, the support team, the partner network, and now the AI. Discover CX is the platform that lets you run it like an asset — not a cost center buried inside one team.",
    problems: [
      {
        pain: "Content cost is invisible until it isn't.",
        outcome: "Operating leverage you can actually report on.",
        body: "Single-sourcing cuts authoring cost. Real-time publishing cuts time-to-market. Localization at scale cuts translation spend. AI grounding cuts \"build a custom RAG\" engineering. The numbers compound; we can model your specific ROI on the demo.",
        proof: "Authoring · localization · time-to-market",
      },
      {
        pain: "AI hype is a board-level conversation.",
        outcome: "An AI strategy that's grounded in your own content.",
        body: "Most AI initiatives stall when leadership asks where the knowledge comes from. Discover CX is the answer: structured, governed, current product knowledge that AI assistants can ground on — with SOC 2 controls and audit trails that legal will actually approve.",
        proof: "BYOK vector DB · SOC 2 · audit-grade retrieval",
      },
      {
        pain: "Risk lives in your help center.",
        outcome: "Audit, compliance, residency — boring on purpose.",
        body: "SOC 2 Type II. RBAC down to the topic. Data residency in the region you need. 24×7 critical-care support. Migration engineering included. The kind of platform your CISO, GC, and CFO have already pre-approved by Day One.",
        proof: "SOC 2 · 99.95% SLA · enterprise contracts",
      },
    ],
    capabilities: [
      {
        h: "Modeled ROI",
        p: "We bring the spreadsheet. Authoring, localization, deflection, time-to-market — your inputs, our model, a number your CFO can sign off on.",
      },
      {
        h: "Enterprise contracting",
        p: "Custom DPA, custom MSA, security questionnaire pre-answered. Procurement-friendly from the first call.",
      },
      {
        h: "Migration engineering included",
        p: "Real engineers run the move. No fidelity loss. 4–12 weeks for most catalogs.",
      },
      {
        h: "One platform, three products",
        p: "CCMS, CDP, AI under one vendor. Start with what you need, consolidate over time.",
      },
      {
        h: "Solution architects on the call",
        p: "Real engineers, not BDRs with scripts. The same people stay with you post-sale.",
      },
      {
        h: "Reference customers",
        p: "UKG, Dolby, Cisco Webex, and Fortune 500 brands in financial services, healthcare, and manufacturing.",
      },
    ],
    relatedProducts: [
      { label: "Discover platform", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
  },
];

export const getRole = (slug: string): Role | undefined =>
  roles.find((r) => r.slug === slug);
