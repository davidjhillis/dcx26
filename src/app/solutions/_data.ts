export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  hero: string;
  lede: string;
  metaTitle: string;
  metaDesc: string;
  audience: string;
  outcomes: string[];
  features: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  replaces?: string[];
};

// Copy ported from the legacy DCX site (staging-dcx-2112.webflow/solutions/*).
// Positioning, claims, and feature lists reflect what the company actually
// publishes about itself. No fabricated stats or outcomes.

export const solutions: Solution[] = [
  {
    slug: "technical-docs",
    name: "Technical Documentation",
    eyebrow: "Solution · Technical Documentation",
    hero: "Transform technical documentation.",
    lede:
      "Efficient, collaborative, and scalable documentation solutions. DiscoverCX is the only experience platform built for technical documentation.",
    metaTitle: "Technical Documentation Software — DITA CCMS + Delivery",
    metaDesc:
      "DiscoverCX is the only experience platform built for technical documentation — cloud-based CCMS, structured XML authoring with single-source reuse, AI productivity, and an automated DITA publishing pipeline.",
    audience: "Documentation directors, info architects, technical writers",
    outcomes: [
      "Single-sourcing and content reuse across products and channels",
      "Generative AI productivity for writers and SMEs",
      "Cloud-based CCMS — no on-prem infrastructure to maintain",
      "Automated DITA publishing pipeline to web, print, and mobile",
    ],
    features: [
      {
        h: "Cloud-based CCMS",
        p: "Discover CCMS is delivered as enterprise SaaS — secure, scalable, and built for distributed documentation teams.",
      },
      {
        h: "Structured XML authoring",
        p: "Author in DITA with full single-sourcing and content reuse. Integrations with Fonto and Oxygen for power users.",
      },
      {
        h: "Generative AI productivity",
        p: "AI writing assistant helps authors generate, improve, and standardize content within an enterprise-safe environment.",
      },
      {
        h: "Automated publishing pipeline",
        p: "Publish DITA to Discover CX Dynamic Site Server (DSS), static HTML, Markdown, and PDF. Built on the DITA Open Toolkit.",
      },
      {
        h: "DITA Map Manager",
        p: "Organize, version, and orchestrate large DITA topic maps with a purpose-built management UI.",
      },
      {
        h: "Editor of choice",
        p: "Native support for Fonto, Oxygen Web and Desktop, and Ingeniux Simply XML — a Microsoft Word-based DITA editor for SMEs.",
      },
    ],
    replaces: ["MadCap Flare", "Paligo", "Heretto", "Adobe XDM", "IXIASOFT"],
    faqs: [
      {
        q: "Does DiscoverCX support DITA?",
        a: "Yes. DiscoverCX is fully DITA-compliant with native support for the DITA Open Toolkit, single-sourcing, content reuse, and DITA Map Manager for orchestration. Power users author in Fonto or Oxygen; SMEs can use Ingeniux Simply XML inside Microsoft Word.",
      },
      {
        q: "What content formats can we author and publish?",
        a: "DITA, Word, Flare, HTML, and Markdown for authoring. Publishing targets include the Discover CX Dynamic Site Server, static HTML, Markdown, and PDF — through a single automated pipeline.",
      },
      {
        q: "Can we migrate from MadCap Flare?",
        a: "Yes. Migration from MadCap Flare into DITA or Markdown is part of our implementation services. A dedicated engineer handles conversion of XHTML projects, conditional tags, snippets, and variables.",
      },
      {
        q: "What's the Product Answers Guide?",
        a: "Our buyer's guide for technical documentation teams evaluating modern CCMS platforms. Available on request.",
      },
    ],
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    eyebrow: "Solution · Artificial Intelligence",
    hero: "Harness the power of AI with DiscoverCX.",
    lede:
      "DiscoverCX revolutionizes content management for Artificial Intelligence, allowing organizations to deploy training content for Large Language Models (LLMs) — packaged, delivered, and continuously updated.",
    metaTitle: "AI Content Management — Structured Content for LLM Training",
    metaDesc:
      "Deploy structured training content for LLMs and AI assistants. DiscoverCX packages content for AI, continuously delivers it, and supports deployment to data lakes, vector databases, and cloud destinations.",
    audience: "AI engineers, knowledge officers, CX and product leaders",
    outcomes: [
      "Enhanced AI training with structured, controlled source content",
      "Improved control over what your LLMs and assistants learn",
      "Scalable delivery to data lakes, vector databases, and cloud destinations",
      "Continuous updates — corrections in your CCMS flow through to AI in real time",
    ],
    features: [
      {
        h: "Content packaging for LLMs",
        p: "Take structured DITA, technical content, and knowledge base articles and package them into training-ready formats for AI systems.",
      },
      {
        h: "Continuous delivery",
        p: "Updates to your source content flow through to the AI's grounding data automatically — no manual republish cycles.",
      },
      {
        h: "Deployment flexibility",
        p: "Deploy to data lakes, vector databases, and cloud locations — your stack, your destinations.",
      },
      {
        h: "Enhanced training quality",
        p: "Structured, attributed source content produces more reliable AI answers than scraped PDFs or HTML.",
      },
      {
        h: "Improved control",
        p: "Decide what content your LLMs see, what versions are pinned, and what gets corrected — at the topic level.",
      },
      {
        h: "Scalable architecture",
        p: "The Headless API and publishing pipeline are built for enterprise-scale content volumes and frequent updates.",
      },
    ],
    faqs: [
      {
        q: "Why does AI need a content management system?",
        a: '"By 2025, 100% of generative AI virtual customer assistant and virtual agent assistant projects that lack integration to modern knowledge management systems will fail to meet their customer experience and operational cost-reduction goals." Modern AI depends on modern content infrastructure.',
      },
      {
        q: "How is this different from scraping our docs into a vector database?",
        a: "Scraping produces HTML soup with no topic boundaries, no metadata, and no traceability. DiscoverCX delivers structured, attributed source content with clean topic boundaries and metadata — purpose-built for AI grounding and retrieval-augmented generation.",
      },
      {
        q: "Can DiscoverCX deliver to a vector database?",
        a: "Yes. The Headless API supports deployment to data lakes, vector databases, and cloud destinations of your choice. The platform packages content for ingestion and updates it continuously as your source changes.",
      },
      {
        q: "Does this work with Salesforce Einstein?",
        a: "Yes. Knowledge articles synced from DiscoverCX into Salesforce Knowledge are indexable by Einstein and Service AI. The same source content can ground Einstein, in-product copilots, and your own RAG stack.",
      },
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce Experiences",
    eyebrow: "Solution · Salesforce",
    hero: "Power Salesforce sites and experiences.",
    lede:
      "Deliver intelligent content directly into Salesforce Experiences and Knowledge. Seamlessly connect to any record or object in your customer portal.",
    metaTitle: "Salesforce Solutions — Knowledge Sync + Sidecar Portal",
    metaDesc:
      "DiscoverCX integrates with Salesforce Service Cloud and Experience Cloud — bi-directional Knowledge sync, KCS-driven feedback loops, and the Sidecar branded documentation hub.",
    audience: "Salesforce admins, customer success ops, support enablement",
    outcomes: [
      "Connect service and ticketing in your customer portal",
      "Bi-directional Knowledge sync between DiscoverCX and Salesforce",
      "KCS feedback loop — auto-generate knowledge articles from support cases",
      "Ticket deflection through contextual self-service product answers",
    ],
    features: [
      {
        h: "Sidecar deployment",
        p: "A branded documentation hub that connects with your Salesforce service portal — your content, your brand, native experience.",
      },
      {
        h: "Service & ticketing",
        p: "Salesforce Service ticketing and case management integrated into your DiscoverCX customer portal.",
      },
      {
        h: "Bi-directional Knowledge sync",
        p: "Knowledge articles flow both ways between DiscoverCX and Salesforce Knowledge — one source of truth, two surfaces.",
      },
      {
        h: "KCS-driven content",
        p: "Knowledge Centered Service feedback loop — generate knowledge articles directly from support cases as patterns emerge.",
      },
      {
        h: "Ticket deflection",
        p: "Surface contextual self-service product answers in the support flow to reduce ticket volume.",
      },
      {
        h: "Experience Cloud delivery",
        p: "Deploy structured content into Salesforce Experience Cloud sites with full personalization and locale support.",
      },
    ],
    faqs: [
      {
        q: "How does the Salesforce integration work?",
        a: "DiscoverCX includes a native Salesforce connector with bi-directional Knowledge sync, KCS-driven article generation, and integration with Service Cloud ticketing. The Sidecar deployment option provides a branded documentation hub embedded in your Salesforce service portal.",
      },
      {
        q: "What is the Sidecar deployment?",
        a: "Sidecar is a DiscoverCX deployment option — a branded documentation hub that lives alongside your Salesforce service portal. Your customers get the rich content experience of DiscoverCX while staying inside your Salesforce-driven brand.",
      },
      {
        q: "What's KCS and how do you support it?",
        a: "Knowledge Centered Service — a methodology where knowledge content is created and maintained as a by-product of solving customer issues. DiscoverCX supports the KCS feedback loop by automating knowledge article generation from support cases and syncing back into Salesforce Knowledge.",
      },
      {
        q: "Can DiscoverCX deflect tickets?",
        a: "Yes. The portal surfaces contextual product answers in the support flow, so customers can resolve issues themselves before opening a case. Ticket deflection is a core capability of Discover Portal.",
      },
    ],
  },
  {
    slug: "policies",
    name: "Policies & Procedures",
    eyebrow: "Solution · Policies & Procedures",
    hero: "Policies and procedures solutions.",
    lede:
      "A comprehensive solution for managing your policies and procedures — ensuring consistency, accuracy, and ease of use across your organization.",
    metaTitle: "Policy & SOP Software — Structured Authoring + Review + Publish",
    metaDesc:
      "Author, manage, review, and publish policies and SOPs in a structured CCMS. Enhanced reuse, simplified authoring, full collaboration, and outputs to web and print.",
    audience: "Compliance, risk, GRC, quality, and policy teams",
    outcomes: [
      "Consistency and accuracy across every policy and procedure",
      "Enhanced reuse and standardization — author once, surface everywhere",
      "Simplified authoring with AI and structured editors",
      "Boost collaboration and SME review",
    ],
    features: [
      {
        h: "Simplified authoring",
        p: "Generate structured content with AI assistance and editor integrations — Fonto, Oxygen, and Ingeniux Simply XML for Word.",
      },
      {
        h: "Enhanced reuse",
        p: "Single-sourcing and content reuse across policies, procedures, training, and customer-facing surfaces.",
      },
      {
        h: "Boost collaboration",
        p: "Built-in SME review workflows with comments, approvals, and audit trails — managed centrally in the CCMS.",
      },
      {
        h: "Publish to web and print",
        p: "Generate PDF and HTML5 outputs from the same source — print-ready compliance documents and web-ready policy portals.",
      },
      {
        h: "Centralized management",
        p: "All policies and procedures live in one repository with versioning, branching, and full history.",
      },
      {
        h: "Cost reduction",
        p: "Reuse eliminates duplicate authoring and maintenance — reducing the cost of keeping policy content current and consistent.",
      },
    ],
    faqs: [
      {
        q: "Is DiscoverCX SOC 2 compliant?",
        a: "Yes. The Discover CX portal is SOC 2 certified — secure storage, continuous monitoring, and privacy compliance. SOC 2 reports are available on request under NDA.",
      },
      {
        q: "Can we generate policy PDFs?",
        a: "Yes. The publishing pipeline outputs PDF and HTML5 from the same DITA source — print-ready compliance documents alongside web-ready policy portals.",
      },
      {
        q: "How do approvals and reviews work?",
        a: "DiscoverCX includes SME review workflows with comments, approvals, and audit trails. Policy owners can configure multi-step approval gates and scheduled review cycles.",
      },
      {
        q: "Can SMEs author in Word?",
        a: "Yes. Ingeniux Simply XML is a Microsoft Word-based DITA editor that lets SMEs contribute structured policy content without learning XML directly.",
      },
    ],
  },
  {
    slug: "elearning",
    name: "eLearning",
    eyebrow: "Solution · eLearning",
    hero: "Empower your learning journey.",
    lede:
      "Robust tools and support to enhance your eLearning initiatives — ensuring seamless integration with your LMS and optimized outcomes across courses, modules, and assessments.",
    metaTitle: "eLearning LCMS — DITA + SCORM + LMS Integration",
    metaDesc:
      "Centralized content repository for courses, modules, assessments, quizzes, and multimedia. SCORM-compatible, with native integration to your LMS and HR systems.",
    audience: "L&D, instructional design, training ops, onboarding teams",
    outcomes: [
      "One centralized repository for all learning content",
      "SCORM and XML compatibility for any compliant LMS",
      "Customized learning portals branded for your organization",
      "Integration with LMS, HR, and CRM systems",
    ],
    features: [
      {
        h: "Centralized repository",
        p: "Courses, modules, assessments, quizzes, simulations, and multimedia — all in one structured content store.",
      },
      {
        h: "SCORM and XML",
        p: "Compatible with SCORM-conformant LMS platforms, with native XML support for advanced learning content structures.",
      },
      {
        h: "LMS integration",
        p: "Native integration with leading LMS platforms — push course packages and updates automatically.",
      },
      {
        h: "HR system integration",
        p: "Connect to your HR system so onboarding and training content stays in sync with org structure and roles.",
      },
      {
        h: "Customized portals",
        p: "Spin up branded learning portals for different audiences — employees, partners, customers — from one content source.",
      },
      {
        h: "AI-assisted content creation",
        p: "Use the AI writing assistant to draft learning modules, quiz questions, and assessments faster.",
      },
    ],
    faqs: [
      {
        q: "Which LMS platforms do you integrate with?",
        a: "Any SCORM-conformant LMS. We have customer deployments alongside the major enterprise LMS platforms; specific integration guides are available on request.",
      },
      {
        q: "Can we reuse content across docs and training?",
        a: "Yes. Single-sourcing is the core value — author a procedure once in DITA and reuse it in documentation, training modules, and onboarding materials. Update the source, all surfaces update.",
      },
      {
        q: "Do you support assessments and quizzes?",
        a: "Yes. The centralized repository supports courses, modules, assessments, quizzes, simulations, and multimedia.",
      },
      {
        q: "Can we connect to our HR system?",
        a: "Yes. Native integration with HR systems keeps onboarding and training content aligned with your org structure and role definitions.",
      },
    ],
  },
  {
    slug: "portals",
    name: "Customer Portals",
    eyebrow: "Solution · Customer Portals",
    hero: "Transform enterprise knowledge into intelligent content delivery.",
    lede:
      "Deliver your docs and customer experience in a modern portal platform built for content. Connect ticketing, service, and knowledge in one platform.",
    metaTitle: "Customer Portal Software — Self-Service + Knowledge + Cases",
    metaDesc:
      "Discover Portal: enterprise portal-as-a-service with no-code flexibility, integrated service and CRM, 360 customer view, ticketing, knowledge, enterprise search, and community.",
    audience: "Customer success, support ops, digital CX, web teams",
    outcomes: [
      "Modern portal platform built for content, not a generic CMS",
      "Connect ticketing, service, and knowledge in one platform",
      "No-code template design — branded portals without engineering rebuilds",
      "Enterprise-grade trust: SOC 2 certified with 24×7 critical-care support",
    ],
    features: [
      {
        h: "Enterprise portal-as-a-service",
        p: "A managed, branded portal platform purpose-built for delivering technical and customer content at scale.",
      },
      {
        h: "No-code flexibility",
        p: "Drag-and-drop template design — your team configures and brands the portal without engineering rebuilds.",
      },
      {
        h: "Integrate service and CRM",
        p: "Bi-directional CRM sync and integrations with Salesforce, Atlassian, ServiceNow, and other leading ticketing solutions.",
      },
      {
        h: "360 customer view",
        p: "Unify content, cases, knowledge, and customer data in one branded portal experience.",
      },
      {
        h: "Enterprise search",
        p: "Faceted, guided search across documentation, knowledge, forums, and uploaded files.",
      },
      {
        h: "Community",
        p: "Forums, blogs, and commenting — optional community capability integrated with SSO.",
      },
    ],
    faqs: [
      {
        q: "Is the portal SOC 2 certified?",
        a: 'Yes. The Discover CX portal is SOC 2 compliant — "secure storage, continuous monitoring, and privacy compliance" — and customers receive 24×7 critical-care support.',
      },
      {
        q: "Which ticketing systems integrate with the portal?",
        a: "Integrated ticketing and case management with Salesforce, Atlassian, ServiceNow, and other leading service desks.",
      },
      {
        q: "Can we brand the portal without engineering?",
        a: "Yes. No-code template design lets your team configure templates and brand the portal without engineering rebuilds.",
      },
      {
        q: "Is there an RFP guide I can use to evaluate portals?",
        a: 'Yes — request the "Find Your Next Customer Portal" RFP Guide from sales.',
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
