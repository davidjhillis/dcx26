// Single source of truth for /platform/ccms content.
// Consumed by both the React page (src/app/platform/ccms/page.tsx) and the
// markdown twin generator (src/lib/marketing-md.ts). Keep facts here; let
// the page own visual layout only.

export const ccmsMeta = {
  title: "Discover CCMS — Structured content. Built for enterprise teams.",
  description:
    "A component CCMS designed around the repository, not the editor. DITA, Markdown, and HTML in one source. Author in Oxygen, Fonto, Simply XML, the browser, or your IDE. Reuse, review, translate, publish.",
} as const;

export const ccmsHero = {
  eyebrow: "Product · Discover CCMS",
  headline: "Structured content,",
  headlineAccent: "written where your team already works.",
  lede:
    "A component content management platform built around the repository — not the editor. Author in DITA, Markdown, or HTML, using Oxygen, Fonto, Simply XML, the browser, or your IDE. One source. Every channel.",
};

export const repoFeatures = [
  {
    h: "Component repository",
    p: "Every topic, image, snippet, and map is a versioned component. Not a file. Not a wiki page. A typed object you can govern.",
  },
  {
    h: "Branching & merging",
    p: "Major releases get their own branch. Minor fixes merge back. The repo enforces structure — your writers don't have to.",
  },
  {
    h: "Audit & access",
    p: "RBAC down to the project, branch, and component. SAML, OIDC, SCIM. Every change attributed and exportable.",
  },
  {
    h: "Taxonomy you own",
    p: "Product, audience, version, locale — typed metadata, not folder names. Filters, conditions, and publishing all key off it.",
  },
];

export const authoringSurfaces = [
  {
    label: "Oxygen XML",
    audience: "Pro writers",
    p: "Web and Desktop. Full DITA fidelity, schema validation, structured editing. The XML editor of choice.",
    pill: "Native",
  },
  {
    label: "Discover CX editor",
    audience: "Built for your team",
    p: "Our browser-based authoring client. Built on Fonto, extended with AI assist, native comments and revisions, Oxygen round-trip, and usage analytics. No install, no IT ticket — see the deep dive below.",
    pill: "Built-in",
  },
  {
    label: "Simply XML",
    audience: "SMEs in Word",
    p: "Your SMEs already use Microsoft Word. Simply XML lets them draft structured topics there without retraining.",
    pill: "Native",
  },
  {
    label: "Fonto",
    audience: "External Fonto licenses",
    p: "If your team already runs standalone Fonto, we integrate natively. Most teams use the built-in Discover CX editor instead — same engine, more capability.",
    pill: "Native",
  },
  {
    label: "IDE + Git",
    audience: "Doc-as-code teams",
    p: "VS Code, IntelliJ, Cursor — anything that speaks Git. Lint and preview locally. Push a PR. We open a review task.",
    pill: "For engineers",
  },
];

export const contentTypes = [
  {
    h: "DITA",
    p: "Native, end-to-end. DITA 1.3, DITA-OT 4.x. Concept, task, reference, glossary, and your specializations. Conrefs, keyrefs, conditional processing — all of it.",
    tag: "Structured",
  },
  {
    h: "Markdown",
    p: "Lighter and faster than DITA — perfect for engineering docs, READMEs, release notes, and in-product help. Same repository, same publishing pipeline.",
    tag: "Lighter & faster",
  },
  {
    h: "HTML",
    p: "For legacy imports, marketing-adjacent content, and bespoke knowledge articles. Schema-validated, not free-text.",
    tag: "Bridge",
  },
  {
    h: "Mixed in one repo",
    p: "Cross-format conrefs. A DITA topic can reuse a Markdown snippet. Engineering and writing converge instead of forking.",
    tag: "DCX-only",
  },
];

export const operations = [
  {
    h: "Reuse & single-sourcing",
    p: "Conrefs, keyrefs, conditional processing, profiling, branching. Write once, ship to every channel and product line.",
  },
  {
    h: "Workflow & review",
    p: "Custom states, multi-step approvals, scheduled publishing. Inline review and SME sign-off built in.",
  },
  {
    h: "Translation",
    p: "Locale fan-out from a single source. XLIFF 2.1 round-trip with Smartling, Lilt, XTM. Translation memory native.",
  },
  {
    h: "AI co-authoring",
    p: "Generate first-draft topics, summarize for short-form, validate structure. SME-safe, version-controlled. Optional, not enforced.",
  },
  {
    h: "Multi-format publishing",
    p: "DITA-OT pipeline outputs HTML5, PDF, Markdown, EPUB — and feeds the Delivery API simultaneously. No nightly rebuild.",
  },
  {
    h: "Migration",
    p: "Inbound from MadCap, Paligo, Heretto, IXIASOFT, Confluence. A migration engineer owns it end-to-end. No fidelity loss.",
  },
];

export const ccmsFaqs = [
  {
    q: "Is Discover CCMS DITA-only?",
    a: "No. DITA, Markdown, and HTML are all first-class authoring formats — in the same repository, with cross-format conrefs. Heretto and IXIASOFT are DITA-only. DCX lets engineering write in Markdown while documentation writes in DITA, with both flowing through the same publishing pipeline.",
  },
  {
    q: "Can we keep our existing editor?",
    a: "Yes. Oxygen (Web + Desktop), Fonto, and Ingeniux Simply XML for Microsoft Word are natively integrated. Doc-as-code teams use any IDE that speaks Git. The repository is the system of record — the editor is whatever your team already knows.",
  },
  {
    q: "How does the Git option work?",
    a: "Each project is exposed as a Git remote. Authors clone, branch, edit locally, lint and preview, then push a PR. The CCMS UI and the Git surface read from the same repository — there's no two-way sync, no drift, no merge surprises. Git is one authoring surface, not the whole product.",
  },
  {
    q: "How does this compare to Paligo?",
    a: "Paligo is a strong cloud-only structured editor. DCX gives you the same structured authoring plus a true component repository, mixed format support (not DITA-only), and an integrated Delivery API and customer portal. Paligo's strength is the editor; DCX's strength is what sits behind it.",
  },
  {
    q: "How does this compare to Heretto?",
    a: "Heretto is a strong cloud DITA-only CCMS with the Deploy portal as a separate add-on. DCX handles DITA + Markdown + HTML in one repo, ships with a real Git surface as an optional authoring path, and the Discover portal is included in the platform — not a separate license.",
  },
  {
    q: "Can we migrate from MadCap Flare, Paligo, Heretto, or IXIASOFT?",
    a: "Yes. Migration is included with Business and Enterprise engagements. A dedicated migration engineer handles conversion of projects, conditional tags, conrefs, taxonomy, and workflow rules with no fidelity loss. Typical migrations run 4–12 weeks depending on volume and complexity.",
  },
];
