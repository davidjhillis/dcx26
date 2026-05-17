export type Asset = {
  slug: string;
  title: string;
  kind: "Datasheet" | "Technical brief" | "Buyer's guide" | "Reference architecture" | "Security overview";
  product: "Platform" | "CCMS" | "CDP" | "AI" | "Trust";
  pages: number;
  desc: string;
  bullets: string[];
};

export const assets: Asset[] = [
  {
    slug: "discovercx-platform-overview",
    title: "DiscoverCX Platform Overview",
    kind: "Datasheet",
    product: "Platform",
    pages: 4,
    desc: "The one-pager for your buying committee. Architecture, capabilities, integrations, and where DCX fits in a content stack.",
    bullets: [
      "Reference architecture diagram",
      "Capability matrix across CCMS, CDP, AI",
      "Integrations: Salesforce, ServiceNow, Atlassian, TMS",
      "Sizing and deployment options",
    ],
  },
  {
    slug: "discover-ccms-datasheet",
    title: "Discover CCMS Datasheet",
    kind: "Datasheet",
    product: "CCMS",
    pages: 3,
    desc: "Structured authoring on a Git-backed repository. DITA, Markdown, and HTML in one repo. Editor of choice. Multi-format publishing.",
    bullets: [
      "Authoring formats and editor integrations",
      "Repository, workflow, translation, and access",
      "Publishing pipeline and DITA-OT output",
      "Migration paths from MadCap, Paligo, Heretto, IXIASOFT",
    ],
  },
  {
    slug: "discover-cdp-datasheet",
    title: "Discover CDP Datasheet",
    kind: "Datasheet",
    product: "CDP",
    pages: 3,
    desc: "Documentation portal and customer experience portal on one platform. Federated search, personalization, case management, community.",
    bullets: [
      "Doc portal and CX portal feature sets",
      "Federated, faceted, typo-tolerant search",
      "Salesforce / ServiceNow / Atlassian / Zendesk widgets",
      "Theming, design tokens, and brand control",
    ],
  },
  {
    slug: "discover-ai-datasheet",
    title: "Discover AI Datasheet",
    kind: "Datasheet",
    product: "AI",
    pages: 3,
    desc: "AI Assist for authoring plus AI Data Operations for grounding. BYOK vector database, SOC 2-aligned, content-aware retrieval.",
    bullets: [
      "AI Assist: code explainer, summarization, chatbot, chat-with-data",
      "AI Data Operations: aggregate, manage, deploy",
      "BYOK vector database options",
      "Reference architecture for content-grounded RAG",
    ],
  },
  {
    slug: "platform-reference-architecture",
    title: "Reference Architecture: CCMS → API → Channel",
    kind: "Reference architecture",
    product: "Platform",
    pages: 12,
    desc: "The technical brief for solution architects. End-to-end pipeline, data contracts, scaling characteristics, and failure modes.",
    bullets: [
      "Layered architecture and data contracts",
      "Real-time publishing and webhook fan-out",
      "Caching, CDN, and edge delivery patterns",
      "Observability, SLOs, and incident response",
    ],
  },
  {
    slug: "trust-security-overview",
    title: "Trust & Security Overview",
    kind: "Security overview",
    product: "Trust",
    pages: 8,
    desc: "SOC 2 Type II controls, identity, encryption, data residency, and the shared responsibility model. For your CISO and procurement teams.",
    bullets: [
      "SOC 2 Type II controls map",
      "SAML, OIDC, SCIM, MFA, RBAC",
      "Encryption in transit and at rest, key management",
      "Data residency, backups, and DR objectives",
    ],
  },
  {
    slug: "ccms-rfp-template",
    title: "The CCMS RFP Template",
    kind: "Buyer's guide",
    product: "Platform",
    pages: 22,
    desc: "78 vendor-evaluation questions used by Fortune 500 procurement teams. Editable .docx with scoring weights.",
    bullets: [
      "Authoring, repository, delivery, portal, AI sections",
      "Editable .docx with weighted scoring",
      "Red-flag answers to watch for",
      "Use with any vendor — not just DCX",
    ],
  },
  {
    slug: "migration-playbook",
    title: "Migration Playbook",
    kind: "Technical brief",
    product: "Platform",
    pages: 14,
    desc: "What to expect migrating from MadCap, Paligo, Heretto, IXIASOFT, or Confluence. Phasing, fidelity, automation, and cutover.",
    bullets: [
      "What's automated vs hand-finished",
      "Conref, conditional, taxonomy, and workflow migration",
      "Phased cutover and parallel-run patterns",
      "Acceptance criteria and rollback checkpoints",
    ],
  },
];

export const getAsset = (slug: string) => assets.find((a) => a.slug === slug);
