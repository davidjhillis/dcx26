import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover AI — AI Assist + AI Data Operations for Structured Content",
  description:
    "Two AI plays. Discover AI Assist: code explainer, summarization, chatbot, chat with data — embedded in your portal and authoring. Discover AI Data Operations: SOC 2 vector DB, BYOK, ground any LLM on your structured content.",
};

const assist = [
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

const dataOps = [
  { h: "BYOK vector database", p: "Bring your own key. Bring your own vector DB (Pinecone, Weaviate, Qdrant, pgvector) — or use ours, hosted in your region." },
  { h: "Aggregate", p: "Pull from Discover CCMS, Confluence, SharePoint, Zendesk, Salesforce Knowledge, and arbitrary web sources. One pipeline, every source." },
  { h: "Manage", p: "Topic-level chunking. Semantic boundaries that respect DITA structure. Per-topic metadata for filtering and provenance." },
  { h: "Deploy", p: "Push to your LLM stack — RAG endpoint, your existing agent, Salesforce Einstein, in-product copilot, your own RAG framework." },
  { h: "Continuous sync", p: "Source content changes flow through automatically. No nightly batch. No stale retrievals." },
  { h: "Traceability", p: "Every retrieved chunk includes source topic ID + version. AI answers are citable, auditable, version-pinnable." },
  { h: "SOC 2 Type II", p: "Same compliance posture as the rest of the platform. SAML / OIDC / SCIM. Region-locked data residency available." },
  { h: "Cost control", p: "Token budgets, embedding caching, model routing by query class. We don't charge per token — we charge for the platform." },
];

const faqs = [
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover AI",
  description:
    "Two AI products from DiscoverCX: AI Assist (embedded chatbot, summarization, code explainer, chat with data) and AI Data Operations (SOC 2 vector database, BYOK, content aggregation and continuous deployment for any LLM).",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "AI for Content / RAG Infrastructure",
};

export default function AiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Product · Discover AI"
        title={
          <>
            Two AI plays. One source of truth.
          </>
        }
        lede="Discover AI Assist embeds AI in your portal and authoring — chatbot, summarization, code explainer, chat with data. Discover AI Data Operations is the SOC 2 vector-DB infrastructure that grounds any LLM on your structured content. Run them together, or split the bill."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* HERO IMAGE */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="pt-12 pb-4 lg:pt-16">
          <HumanImage
            src="/humans/late-night-shipping.jpg"
            alt="A content engineer shipping AI-ready structured content"
            priority
          />
        </Container>
      </section>

      {/* PLAY ONE — AI ASSIST */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                01 · End-user AI
              </p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Discover AI Assist.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Ready-to-deploy AI experiences embedded in your portal, authoring
                tools, and product. Branded, grounded in your structured content,
                and aware of the user's context.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-5 md:grid-cols-2">
              {assist.map((a) => (
                <div
                  key={a.h}
                  className="rounded-xl border border-line bg-bg-card p-6 elev-card"
                >
                  <h3 className="font-display text-[16px] font-semibold">{a.h}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{a.p}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PLAY TWO — AI DATA OPERATIONS */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="wide" className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                02 · Infrastructure
              </p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Discover AI Data Operations.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                A SOC 2 Type II vector database and content pipeline that
                aggregates, manages, and continuously deploys structured
                content for any LLM. Bring your own key. Bring your own model.
                Bring your own framework.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-3">
                The productized version of the RAG infrastructure every
                enterprise ends up building from scratch.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-5 md:grid-cols-2">
              {dataOps.map((d) => (
                <div
                  key={d.h}
                  className="rounded-xl border border-line bg-bg-card p-6 elev-card"
                >
                  <h3 className="font-display text-[16px] font-semibold">{d.h}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PIPELINE DIAGRAM (code-style) */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">How it flows</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Source → structured chunks → your vector DB → any LLM.
          </h2>
          <div className="mt-10 code-panel">
            <div className="code-head">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="ml-2">discover-ai/data-ops.pipeline</span>
              <span className="ml-auto text-accent-2">~/your-region</span>
            </div>
            <pre className="code-body">
{`# 1. Aggregate sources
ccms      → Discover CCMS (DITA, Markdown, HTML)
confluence → Atlassian (spaces, pages)
sharepoint → Microsoft 365 (sites, pages)
zendesk   → Help Center (articles)
salesforce → Knowledge (articles)
web       → curated URLs (sitemap-driven)

# 2. Structured chunking
chunk_by      = "topic_boundary"      # respects DITA structure
metadata      = ["product", "version", "locale", "audience", "topic_id"]
embed_model   = "openai/text-embedding-3-large"  # or BYO

# 3. Store
vector_db     = "pgvector"             # or pinecone | weaviate | qdrant | DCX-hosted
region        = "us-west-2"
encryption    = "BYOK (KMS)"
audit         = "SOC 2 Type II"

# 4. Serve any LLM
retrieve(query, filters={role: "customer", locale: "en-US"})
  → [{topic_id, version, snippet, source_url}, ...]
  → ground(prompt, retrieved)
  → call(model="anthropic/claude-sonnet")   # or your model
  → cite(answer, sources)`}</pre>
          </div>
        </Container>
      </section>

      <FAQList items={faqs} title="Discover AI — frequently asked" />

      <FinalCTA
        title="Stop rebuilding RAG infrastructure."
        lede="A 30-day proof of concept on your actual content, your model of choice, and the RAG patterns your enterprise needs. SOC 2 from day one."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      <section className="border-t border-line bg-bg-2">
        <Container intent="default" className="py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
            Related
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/platform/ccms"
              className="rounded-md border border-line bg-bg-elev px-3 py-1.5 text-[12px] text-ink-2 hover:border-line-3 hover:text-ink"
            >
              Discover CCMS — the source of truth
            </Link>
            <Link
              href="/platform/cdp"
              className="rounded-md border border-line bg-bg-elev px-3 py-1.5 text-[12px] text-ink-2 hover:border-line-3 hover:text-ink"
            >
              Discover CDP — the delivery layer
            </Link>
            <Link
              href="/solutions/ai"
              className="rounded-md border border-line bg-bg-elev px-3 py-1.5 text-[12px] text-ink-2 hover:border-line-3 hover:text-ink"
            >
              AI use cases by team
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
