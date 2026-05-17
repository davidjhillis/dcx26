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
  proof?: { quote: string; who: string; org: string };
  faqs: { q: string; a: string }[];
  replaces?: string[];
};

export const solutions: Solution[] = [
  {
    slug: "technical-docs",
    name: "Technical Documentation",
    eyebrow: "Solution · Technical Documentation",
    hero: "Replace your help authoring tool with a real platform.",
    lede:
      "MadCap, Flare, Confluence, and Sharepoint were never built to power AI assistants, customer portals, and Salesforce — at the same time, from one source. DiscoverCX is.",
    metaTitle: "Technical Documentation Software — DITA CCMS + Delivery",
    metaDesc:
      "Replace MadCap, Flare, or Confluence with a DITA-native headless CCMS, a customer portal, and a real-time delivery API. Cut publishing time 60%.",
    audience: "Documentation directors, info architects, technical writers",
    outcomes: [
      "Cut publishing time 60% — no nightly rebuilds",
      "Single source for docs, portal, Salesforce, AI assistant",
      "True multi-author concurrency with audit trail",
      "AI co-authoring without losing structured control",
    ],
    features: [
      {
        h: "DITA-native authoring",
        p: "Oxygen, Fonto, Simply XML — or the browser editor. Reuse, conditional content, branching, review.",
      },
      {
        h: "Real-time publishing",
        p: "Publish a topic → live in the API in seconds. No batch jobs, no overnight rebuilds, no static cache busts.",
      },
      {
        h: "Customer portal included",
        p: "Branded docs portal with enterprise search, personalization, and analytics. Launch in weeks.",
      },
      {
        h: "Multi-format output",
        p: "PDF, HTML5, WebHelp, EPUB — and JSON for any modern surface. One source, every output.",
      },
      {
        h: "Translation built in",
        p: "XLIFF 2.1 round-trip with Smartling, Lilt, XTM. Locale fan-out. Translation memory native.",
      },
      {
        h: "AI co-authoring",
        p: "Generate first-draft topics from PRDs, transcripts, or KBs. Every suggestion stays editable in your editor.",
      },
    ],
    proof: {
      quote:
        "We moved from MadCap Flare to DiscoverCX. Our docs team ships in days, not sprints — and we finally have one source that feeds both our portal and Salesforce Knowledge.",
      who: "Director of Documentation",
      org: "Fortune 500 networking & security",
    },
    replaces: ["MadCap Flare", "Paligo", "Heretto", "Confluence", "Adobe XDM"],
    faqs: [
      {
        q: "Does DiscoverCX support DITA?",
        a: "Yes — fully DITA 1.3 compliant. Use any editor (Oxygen, Fonto, Simply XML, or our browser editor). You can also mix DITA, Markdown, and HTML in the same repository.",
      },
      {
        q: "Can we migrate from MadCap Flare?",
        a: "Yes. A dedicated migration engineer converts your Flare XHTML projects, conditional tags, snippets, and variables into DITA or Markdown with no fidelity loss. Typical migrations run 4–8 weeks.",
      },
      {
        q: "How fast can we launch a docs portal?",
        a: "The hosted docs site launches the same day as your trial. A branded customer portal with custom domain and SSO typically launches in 4–6 weeks.",
      },
      {
        q: "Do you support PDF output?",
        a: "Yes. PDF, HTML5, WebHelp, and EPUB all generate from the same DITA source through the publishing pipeline.",
      },
    ],
  },
  {
    slug: "ai",
    name: "AI Training & RAG",
    eyebrow: "Solution · AI Training & RAG",
    hero: "Structured content, purpose-built for grounding LLMs.",
    lede:
      "Scraping PDFs is a tax on every AI rollout. DiscoverCX delivers clean, semantically-tagged JSON with topic-level metadata — the ideal substrate for retrieval-augmented generation and in-product copilots.",
    metaTitle: "AI Content Management — Structured Content for RAG & LLMs",
    metaDesc:
      "Power AI assistants, in-product copilots, and Salesforce Einstein with clean, semantically tagged JSON from DiscoverCX. Built for RAG.",
    audience: "AI engineers, knowledge officers, CX & product leaders",
    outcomes: [
      "Replace PDF scraping with typed, semantic JSON",
      "Topic-level metadata for precise retrieval",
      "Locale fan-out for multilingual AI",
      "Trace every AI answer back to a source topic",
    ],
    features: [
      { h: "Semantic JSON output", p: "Topic boundaries, headings, code blocks, references — all explicit. No HTML soup." },
      { h: "Topic-level metadata", p: "Product, version, audience, locale, source-of-truth status — filterable in retrieval." },
      { h: "Knowledge graph export", p: "Relationships between topics, products, and concepts — usable for graph-RAG." },
      { h: "Real-time delivery", p: "Publish a correction → the AI's grounding updates within seconds." },
      { h: "Trust & traceability", p: "Every JSON response includes the source topic ID and version, so AI answers are citable." },
      { h: "Salesforce Einstein", p: "Same JSON powers Einstein Knowledge, in-product help, and your docs site." },
    ],
    faqs: [
      {
        q: "How is this different from just scraping our PDFs into a vector DB?",
        a: "Scraping PDFs gives you HTML soup with no topic boundaries, no metadata, and no traceability. Retrieval is fuzzy and answers can't cite a source. DiscoverCX gives you typed JSON with explicit topic IDs, so retrieval is precise and every answer is provably grounded.",
      },
      {
        q: "Do you integrate with Salesforce Einstein?",
        a: "Yes. Topics sync into Salesforce Knowledge, which Einstein indexes natively. Customers also pipe the raw DiscoverCX API directly into their own RAG stack alongside Einstein.",
      },
      {
        q: "What about multilingual AI?",
        a: "Each topic exists in N locales. The API returns the requested locale, falling back to the source if a translation is missing. Locale is a first-class filter, not an afterthought.",
      },
      {
        q: "How does versioning work for AI?",
        a: "Every topic has an immutable version ID. AI grounding can pin to a version (for compliance / regulated answers) or always fetch the latest. Audit logs show which version powered each answer.",
      },
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce Knowledge",
    eyebrow: "Solution · Salesforce",
    hero: "Sync structured content into Salesforce Knowledge and Experience Cloud.",
    lede:
      "Your docs team writes once in DITA. Salesforce agents see the same content in their console. Customers see it in Experience Cloud. Einstein grounds AI answers on it. One source, every Salesforce surface.",
    metaTitle: "Salesforce Knowledge Sync — DITA CCMS for Salesforce",
    metaDesc:
      "DiscoverCX syncs structured DITA content into Salesforce Knowledge and Experience Cloud. Same source for agents, customers, and Einstein.",
    audience: "Salesforce admins, customer success ops, support enablement",
    outcomes: [
      "End the copy-paste tax between docs and Salesforce",
      "One source for agents, customers, and Einstein",
      "Auto-translate via Salesforce-aware locale fan-out",
      "Push updates from docs → Salesforce in real time",
    ],
    features: [
      { h: "Native Knowledge sync", p: "Topics map to Knowledge Articles with data category routing and channel visibility." },
      { h: "Experience Cloud ready", p: "Same content powers Experience Cloud sites with role-based personalization." },
      { h: "Einstein grounding", p: "Knowledge populated by DiscoverCX is fully indexable by Einstein and Service AI." },
      { h: "Locale fan-out", p: "Translated topics push to the correct Salesforce locale automatically." },
      { h: "Approval-gated publishing", p: "DiscoverCX workflow approvals trigger Salesforce publishing — no manual hand-off." },
      { h: "Audit & rollback", p: "Every sync is logged. Roll back to any prior topic version from inside DiscoverCX." },
    ],
    faqs: [
      {
        q: "How does the Salesforce sync work?",
        a: "DiscoverCX uses the Salesforce REST and Bulk APIs. Topics are mapped to Knowledge Articles via a configurable template. Sync runs on approval, on schedule, or via webhook — your choice.",
      },
      {
        q: "Can we keep editing Knowledge inside Salesforce?",
        a: "DiscoverCX is one-way (DiscoverCX → Salesforce) by design. Authoring should live in one place. If you need bidirectional, we support a 'flag for re-author' workflow that pushes Salesforce edits back to DiscoverCX for canonicalization.",
      },
      {
        q: "Does this work with Service Cloud and Sales Cloud?",
        a: "Yes. Anywhere Knowledge is surfaced — Service Console, Lightning Components, Experience Cloud, Einstein Bots — DiscoverCX-sourced content shows up.",
      },
      {
        q: "What about Salesforce categories and channels?",
        a: "DiscoverCX taxonomy maps to Salesforce data categories. Channel visibility (Internal, Customer, Partner, Public) is set per topic and respected on sync.",
      },
    ],
  },
  {
    slug: "policies",
    name: "Policies & SOPs",
    eyebrow: "Solution · Policies & SOPs",
    hero: "Compliance-grade content for regulated industries.",
    lede:
      "Versioned, audited, role-aware policy and SOP content tied to your compliance workflow. SOC 2, HIPAA-ready, and built so auditors can trace every change.",
    metaTitle: "Policy & SOP Authoring Software — Compliance-Grade CCMS",
    metaDesc:
      "Author, approve, version, and audit policies and SOPs in a SOC 2 Type II CCMS. Role-based access, full audit trail, regulated-industry ready.",
    audience: "Compliance, risk, GRC, quality, and policy teams",
    outcomes: [
      "Audit trail on every change — who, what, when, why",
      "Role-aware visibility — internal, partner, public",
      "Scheduled review cycles with auto-reminders",
      "One-click rollback to any prior policy version",
    ],
    features: [
      { h: "Approval workflow", p: "Custom states, multi-step approvals, scheduled publishing. BPMN-style under the hood." },
      { h: "Full audit log", p: "Every edit, comment, approval, and publish attributed and exportable to your GRC system." },
      { h: "Scheduled review", p: "Topics carry a 'next review' date. The system auto-creates review tasks and notifies owners." },
      { h: "Role-based access", p: "Project-scoped, branch-scoped, topic-scoped. SAML, OIDC, SCIM." },
      { h: "Versioning", p: "Immutable version IDs. Roll back to any prior version with one click." },
      { h: "Regulatory output", p: "PDF with embedded approval signatures, change summary, and effective-date metadata." },
    ],
    faqs: [
      {
        q: "Are you SOC 2 compliant?",
        a: "Yes — SOC 2 Type II. Reports available on request from security@discovercx.com under NDA.",
      },
      {
        q: "Can auditors get read-only access?",
        a: "Yes. SCIM provisioning supports auditor-role users with read + audit-log access only. No editing, no publishing rights.",
      },
      {
        q: "Do you support HIPAA?",
        a: "DiscoverCX is HIPAA-ready with a BAA available for Enterprise customers in healthcare.",
      },
      {
        q: "How do scheduled policy reviews work?",
        a: "Every topic carries an optional 'next review' date. When it hits, the policy owner gets notified, the topic enters a 'review-due' state, and approvers must re-approve before the policy publishes again.",
      },
    ],
  },
  {
    slug: "elearning",
    name: "eLearning / LCMS",
    eyebrow: "Solution · eLearning",
    hero: "One source for documentation, training, and onboarding.",
    lede:
      "Stop maintaining the same procedure in your help system, your LMS, and your onboarding deck. DiscoverCX authors learning content as DITA topics, then publishes SCORM, xAPI, and standalone courseware.",
    metaTitle: "eLearning LCMS — DITA-Based Learning Content Management",
    metaDesc:
      "Author learning content as DITA topics, publish SCORM/xAPI, and reuse the same source across docs, training, and onboarding. One platform.",
    audience: "L&D, instructional design, training ops, onboarding teams",
    outcomes: [
      "End duplicate maintenance across docs, LMS, and decks",
      "SCORM 1.2 + 2004 + xAPI export from the same source",
      "Reuse procedures across products and courses",
      "Track learner engagement at the topic level",
    ],
    features: [
      { h: "DITA learning specialization", p: "Topics, tasks, concepts, and learning-objects in one schema." },
      { h: "SCORM + xAPI export", p: "Publish to any compliant LMS. Course packages auto-rebuild on source updates." },
      { h: "Reuse across surfaces", p: "A single procedure powers the docs page, the training module, and the onboarding email." },
      { h: "Assessments", p: "Multiple choice, drag-drop, branching scenarios. All authored in DITA." },
      { h: "Translation native", p: "Train the world in their language — locale fan-out built in." },
      { h: "Analytics", p: "Topic-level completion, time-on-page, and quiz performance feed back to authors." },
    ],
    faqs: [
      {
        q: "What LMS do you work with?",
        a: "Any SCORM 1.2 / 2004 or xAPI compliant LMS. Tested heavily with Cornerstone, Docebo, Workday Learning, Litmos, and Moodle.",
      },
      {
        q: "Can we reuse one procedure across docs and training?",
        a: "Yes — that's the core value. Author the procedure once as a DITA task topic. Reference it from a help topic and from a learning module. Update the source, both downstream surfaces update.",
      },
      {
        q: "Do you support assessments?",
        a: "Yes. Multiple choice, multi-select, drag-drop, fill-in-the-blank, and branching scenarios. Authored in DITA learning specialization. Results report via xAPI.",
      },
      {
        q: "What about video?",
        a: "Videos are referenced as assets. We don't host video, but the player works with Vimeo, Wistia, YouTube, or any HLS stream. Captions and transcripts live as DITA topics for search and AI grounding.",
      },
    ],
  },
  {
    slug: "portals",
    name: "Customer Portals",
    eyebrow: "Solution · Customer Portals",
    hero: "Launch a branded customer portal in weeks, not quarters.",
    lede:
      "Search, personalization, case management, community, and your knowledge base — in one branded experience. Built on the same content repository your docs team already uses.",
    metaTitle: "Customer Portal Software — Self-Service + Knowledge + Cases",
    metaDesc:
      "Launch a branded customer portal with enterprise search, personalization, case management, and community. Built on the DiscoverCX CCMS.",
    audience: "Customer success, support ops, digital CX, web teams",
    outcomes: [
      "Launch in weeks, not quarters",
      "Cut support tickets via better self-service",
      "One destination for docs + cases + community",
      "Role-based content for free / paid / partner / employee",
    ],
    features: [
      { h: "Enterprise search", p: "Federated across docs, forums, knowledge, and uploaded files. Typo-tolerant, faceted." },
      { h: "Personalization", p: "By role, plan, product, locale, industry — content adapts without forcing the user to filter." },
      { h: "Case management", p: "Salesforce, ServiceNow, Atlassian, or Zendesk — case widgets embed natively." },
      { h: "Community", p: "Forums, Q&A, expert badges — optional and integrated with single sign-on." },
      { h: "Analytics", p: "Topic engagement, deflection rate, search gap reports feed back to the docs team." },
      { h: "Brand control", p: "Full theming, custom domain, design tokens, white-label." },
    ],
    faqs: [
      {
        q: "How long does portal launch take?",
        a: "Typical launch is 4–8 weeks: 1 week design + theming, 2–3 weeks content migration and integrations, 1–2 weeks UAT + soft launch.",
      },
      {
        q: "Can it integrate with our case system?",
        a: "Yes — native integrations with Salesforce Service Cloud, ServiceNow, Atlassian Jira Service Management, and Zendesk Support. Custom integrations via REST/webhook for any other system.",
      },
      {
        q: "Does it support SSO?",
        a: "Yes — SAML 2.0, OIDC, and SCIM for user provisioning. Tested with Okta, Auth0, Ping, Azure AD, and Salesforce Identity.",
      },
      {
        q: "Can we use our own design system?",
        a: "Yes. Portals are fully themable via design tokens. Bring your brand fonts, colors, and components — or use our default theme.",
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
