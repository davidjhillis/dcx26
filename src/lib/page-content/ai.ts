// Single source of truth for /platform/ai content.

export const aiMeta = {
  title: "Discover AI — AI Assist + AI Data Operations for Structured Content",
  description:
    "Two AI plays. Discover AI Assist: code explainer, summarization, chatbot, chat with data — embedded in your portal and authoring. Discover AI Data Operations: SOC 2 vector DB, BYOK, ground any LLM on your structured content.",
} as const;

export const aiHero = {
  eyebrow: "Product · Discover AI",
  headline: "AI you can audit.",
  lede:
    "Two AI products in one platform. AI Assist for the end-user surfaces — chat, summarization, code explainer, grounded answers. AI Data Operations for the infrastructure — SOC 2 vector DB, BYOK, continuous sync, per-topic traceability.",
};

export const aiAssist = [
  {
    h: "Code Explainer",
    p: "Hover any code block in your docs or portal; the assistant explains what it does, line by line, in context. Pull from your own snippets, your own product, your own customer's stack.",
  },
  {
    h: "Summarization",
    p: "Multi-page knowledge collapses into the answer the user actually needed. Topic-aware so summaries cite source topics, not invent them.",
  },
  {
    h: "Chatbot",
    p: "A branded chatbot grounded in your structured content. Embed in your portal, your product, or your support flow. Every answer cites the topic it came from.",
  },
  {
    h: "Chat with Data",
    p: "Ask questions across your full content corpus — multi-product, multi-version, multi-locale. The assistant filters by user context (role, plan, locale) before retrieving.",
  },
];

export const aiDataOps = [
  { h: "BYOK vector database", p: "Bring your own key. Bring your own vector DB (Pinecone, Weaviate, Qdrant, pgvector) — or use ours, hosted in your region." },
  { h: "Aggregate", p: "Pull from Discover CCMS, Confluence, SharePoint, Zendesk, Salesforce Knowledge, and arbitrary web sources. One pipeline, every source." },
  { h: "Manage", p: "Topic-level chunking. Semantic boundaries that respect DITA structure. Per-topic metadata for filtering and provenance." },
  { h: "Deploy", p: "Push to your LLM stack — RAG endpoint, your existing agent, Salesforce Einstein, in-product copilot, your own RAG framework." },
  { h: "Continuous sync", p: "Source content changes flow through automatically. No nightly batch. No stale retrievals." },
  { h: "Traceability", p: "Every retrieved chunk includes source topic ID + version. AI answers are citable, auditable, version-pinnable." },
  { h: "SOC 2 Type II", p: "Same compliance posture as the rest of the platform. SAML / OIDC / SCIM. Region-locked data residency available." },
  { h: "Cost control", p: "Token budgets, embedding caching, model routing by query class. We don't charge per token — we charge for the platform." },
];

export const aiFaqs = [
  {
    q: "What's the difference between AI Assist and AI Data Operations?",
    a: "AI Assist is the end-user-facing AI inside your DCX portal and authoring tools: chatbot, summarization, code explainer, chat with data. AI Data Operations is the infrastructure underneath — a SOC 2 vector DB and content pipeline that grounds any LLM (yours, ours, OpenAI's, Anthropic's, Salesforce Einstein) on your structured content. You can buy them separately or together.",
  },
  {
    q: "Do you require us to use your LLM?",
    a: "No. BYOK (bring your own key) is supported across every major provider — OpenAI, Anthropic, Google, AWS Bedrock, Azure OpenAI, Mistral, plus self-hosted open models via vLLM or Ollama. AI Data Operations gives you the grounded retrieval; you choose the model.",
  },
  {
    q: "Why use a SOC 2 vector DB instead of building our own?",
    a: "Most enterprises building their own RAG stack end up rebuilding the same three things: a content pipeline that respects structured-content boundaries, a vector store with the right metadata model, and an evaluation harness. We've shipped the first two at SOC 2 Type II and the third is on the roadmap. Faster to production, lower TCO, no compliance gap.",
  },
  {
    q: "How does this compare to building RAG with LangChain / LlamaIndex?",
    a: "Those are great frameworks for prototyping. They become a maintenance burden when you need topic-level provenance, multi-source aggregation, locale-aware retrieval, role-based filtering, continuous sync, SOC 2 attestation, and an SLA. Discover AI Data Operations is the productized version — same patterns, with the operational stuff handled.",
  },
  {
    q: "Can the AI cite specific topics?",
    a: "Yes. Every retrieval returns the source topic ID, version, and locale. Citations in chat output link back to the rendered topic in your portal. Audit logs show which versions powered which answers — essential for regulated industries.",
  },
  {
    q: "What about hallucinations?",
    a: "Hallucination risk comes from poorly grounded retrieval and weak source content. We address both: structured-content boundaries give precise retrieval (no HTML-soup chunking), and per-answer citations let users (and auditors) verify against source. We can't eliminate hallucination, but we make it visible and reduce the surface area.",
  },
  {
    q: "Does this work with Salesforce Einstein?",
    a: "Yes. Content syncs into Salesforce Knowledge (native), and Einstein indexes it. Customers also pipe AI Data Operations directly into their own Einstein-adjacent agents for cases where Salesforce's index isn't sufficient.",
  },
  {
    q: "Data residency?",
    a: "Region-locked deployments available for Enterprise customers in US, EU, UK, Canada, Australia. Air-gapped / single-tenant available under custom contract.",
  },
];
