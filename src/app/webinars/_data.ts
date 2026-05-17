export type Webinar = {
  slug: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  duration: string;
  topic: string;
  series: "On-demand webinar" | "Conference talk" | "Customer panel";
  summary: string;
  takeaways: string[];
  related?: string[];
};

export const webinars: Webinar[] = [
  {
    slug: "val-swisher-content-standardization",
    title: "Five Dimensions of Content Standardization",
    speaker: "Val Swisher",
    speakerTitle: "Founder & CEO, Content Rules",
    duration: "47 min",
    topic: "Structured authoring",
    series: "On-demand webinar",
    summary:
      "How global content teams achieve consistency across products, regions, and channels. Val walks through terminology, voice, structure, layout, and re-use — and the playbook for getting buy-in.",
    takeaways: [
      "The five dimensions every standardization program needs",
      "How to score where your team is today",
      "Why terminology beats style guides for global content",
      "Migration sequencing from unstructured to DITA",
    ],
  },
  {
    slug: "jose-palomares-multilingual",
    title: "Multilingual content at scale",
    speaker: "José Palomares",
    speakerTitle: "Localization Strategist",
    duration: "52 min",
    topic: "Localization",
    series: "On-demand webinar",
    summary:
      "Practical patterns for shipping documentation in 20+ languages without the translation backlog. José covers TMS integration, locale fan-out, and the org structure that actually works.",
    takeaways: [
      "Locale fan-out from a single source of truth",
      "Where to plug in TMS (Smartling, Lilt, XTM)",
      "Translation memory: what to own, what to outsource",
      "When AI translation is — and isn't — production-ready",
    ],
  },
  {
    slug: "nathan-eggen-headless-docs",
    title: "Headless docs at enterprise scale",
    speaker: "Nathan Eggen",
    speakerTitle: "VP Products & Technology, Ingeniux",
    duration: "38 min",
    topic: "Architecture",
    series: "On-demand webinar",
    summary:
      "What changes when documentation moves behind an API. Nathan walks through the reference architecture, the contract between authoring and delivery, and how to migrate without freezing production.",
    takeaways: [
      "Reference architecture: CCMS → API → channel",
      "Why JSON beats baked HTML for AI grounding",
      "Migration sequencing: portal first or API first",
      "Operating model for a headless docs team",
    ],
  },
  {
    slug: "rfp-walkthrough",
    title: "Walking the CCMS RFP template, question by question",
    speaker: "DiscoverCX solutions team",
    speakerTitle: "Solution architects",
    duration: "44 min",
    topic: "Buyer enablement",
    series: "On-demand webinar",
    summary:
      "We open the 78-question RFP template live and explain what each question is actually evaluating, which answers should raise flags, and how to score responses without bias.",
    takeaways: [
      "What every RFP question is really asking",
      "Red-flag responses to watch for",
      "Scoring weights for technical vs commercial criteria",
      "How to compress a 12-week evaluation into 6",
    ],
    related: ["/resources/ccms-rfp-template"],
  },
  {
    slug: "ai-grounding-for-content-teams",
    title: "AI grounding for content teams: what to build, what to buy",
    speaker: "DiscoverCX AI team",
    speakerTitle: "Product & engineering",
    duration: "41 min",
    topic: "AI / RAG",
    series: "On-demand webinar",
    summary:
      "A working session on getting structured content into a vector store, choosing chunking strategies, and when BYOK matters. Includes the BYOK + SOC 2 reference architecture.",
    takeaways: [
      "Chunking strategies for DITA topics",
      "Vector DB selection — and when BYOK is non-negotiable",
      "Evaluating retrieval quality (precision, latency, drift)",
      "Operating cost: where the line items actually land",
    ],
    related: ["/platform/ai"],
  },
  {
    slug: "migration-playbook",
    title: "Migration playbook: MadCap, Paligo, Heretto → DiscoverCX",
    speaker: "DiscoverCX migration engineering",
    speakerTitle: "Migration leads",
    duration: "55 min",
    topic: "Migration",
    series: "On-demand webinar",
    summary:
      "The actual migration runbook. What we automate, what we don't, what fidelity loss looks like, and how to plan a phased cutover that doesn't freeze production.",
    takeaways: [
      "Project, conref, taxonomy, and workflow migration",
      "What's automated vs hand-finished",
      "Phased cutover plans by content type and team",
      "Acceptance criteria and roll-back checkpoints",
    ],
  },
];

export const getWebinar = (slug: string) => webinars.find((w) => w.slug === slug);
