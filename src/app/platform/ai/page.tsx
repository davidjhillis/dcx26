import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";
import { mdAlternateFor } from "@/lib/md-alternate";
import {
  aiMeta,
  aiAssist as assist,
  aiDataOps as dataOps,
  aiFaqs as faqs,
} from "@/lib/page-content/ai";

export const metadata: Metadata = {
  title: aiMeta.title,
  description: aiMeta.description,
  alternates: mdAlternateFor("/platform/ai"),
};

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
