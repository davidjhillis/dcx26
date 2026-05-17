import type { Metadata } from "next";
import Link from "next/link";
import { FAQList, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "What Is a Content Delivery Platform (CDP)?",
  description:
    "A CDP unifies content authoring, structured storage, and multichannel delivery — picking up where a CCMS stops. Here's what changed, and why it matters for AI, portals, and Salesforce.",
};

const faqs = [
  {
    q: "What is a content delivery platform (CDP)?",
    a: "A content delivery platform unifies structured authoring, a content repository, and real-time multichannel delivery in one system. Where a traditional CCMS stops at file output (PDF, HTML), a CDP keeps content live, typed, and queryable through a delivery API — so a single source can power docs sites, portals, in-product help, Salesforce Knowledge, and AI assistants concurrently.",
  },
  {
    q: "Isn't this just a 'headless CCMS'?",
    a: "Headless CCMS is a piece of it — the delivery API. A CDP includes that plus the customer-facing portal layer (search, personalization, cases, community), the AI-readiness layer (semantic JSON, knowledge graph), and the integration layer (Salesforce, ServiceNow, Atlassian). Headless CCMS gives you the pipes. A CDP gives you the destinations.",
  },
  {
    q: "Why do I need real-time delivery?",
    a: "Two reasons. (1) Compliance and correction speed — when a policy or product spec changes, your portal, Salesforce, and AI assistant should reflect it within seconds, not after a nightly rebuild. (2) AI grounding — when your AI assistant cites a topic, the version it cites needs to be the version actually live. Stale caches are a trust problem.",
  },
  {
    q: "How is this different from a DXP (digital experience platform)?",
    a: "DXPs (Adobe AEM, Sitecore, Optimizely) are page-and-experience oriented — built for marketing journeys. CDPs are content-and-component oriented — built for technical and customer content that has to feed many surfaces. DXPs assume a CMS underneath. CDPs replace the CMS for structured content use cases.",
  },
  {
    q: "Where does this leave my existing CCMS?",
    a: "If your CCMS only outputs PDF and HTML, you'll bolt on a delivery layer (custom or third-party) and eventually replace the CCMS when bolt-ons get unmanageable. If your CCMS already speaks API + supports modern integrations + has a portal — you're already on a CDP. We built DiscoverCX as a CDP from day one, so there's nothing to bolt on.",
  },
  {
    q: "Does a CDP make sense for a small team?",
    a: "Yes — if your content lands in more than one place. A 3-person docs team feeding a docs site, Salesforce Knowledge, and an AI assistant benefits from a CDP more than a 30-person team feeding only PDFs. The economic case scales with channels, not headcount.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "What Is a Content Delivery Platform (CDP)?",
  description:
    "How content delivery platforms extend traditional CCMS with real-time API delivery, customer portals, and AI grounding.",
  author: { "@type": "Organization", name: "DiscoverCX" },
  publisher: { "@type": "Organization", name: "Ingeniux" },
  datePublished: "2026-03-10",
  dateModified: "2026-05-16",
};

export default function WhatIsCdpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Guide · 10 minute read"
        title={
          <>
            What is a CDP?
            <br />
            <span className="text-ink-3">And why CCMS isn&apos;t enough anymore.</span>
          </>
        }
        lede="A content delivery platform picks up where a traditional CCMS stops — adding a real-time API, a customer-facing portal, and AI-ready output so one source of truth can serve every modern channel."
      />

      <article className="bg-bg">
        <div className="mx-auto max-w-3xl px-8 py-20 text-[16px] leading-relaxed text-ink-2 lg:py-28">
          <h2 className="headline mt-2 text-[28px] text-ink">CCMS → CDP, the short version</h2>
          <p className="mt-4">
            A CCMS stops at file output. A CDP keeps your content live, typed, and queryable.
          </p>
          <div className="my-8 rounded-xl border border-line bg-bg-2 p-5 font-mono text-[13px] text-ink-2">
            <p>CCMS = authoring + storage + workflow + <span className="text-ink-4">file outputs</span></p>
            <p className="mt-2">CDP = authoring + storage + workflow + <span className="text-accent-2">real-time API + portal + AI-ready output</span></p>
          </div>

          <h2 className="headline mt-12 text-[28px] text-ink">The four channels that broke CCMS</h2>
          <p className="mt-4">
            Traditional CCMS were designed when "content delivery" meant PDFs and a help
            center. Then four new channels showed up — and none of them fit:
          </p>
          <ol className="mt-4 space-y-3 pl-6 list-decimal marker:text-accent-2">
            <li>
              <strong className="text-ink">Customer portals.</strong> Self-service experiences
              that need search, personalization, cases, and community — all backed by structured
              content but rendered as a real product, not a doc site.
            </li>
            <li>
              <strong className="text-ink">In-product help.</strong> Help drawers and copilots
              embedded directly in your software, requiring API access to the content (not
              iframes to a docs site).
            </li>
            <li>
              <strong className="text-ink">Salesforce Knowledge / Einstein.</strong> Same
              content surfaced in agent consoles, customer Experience Cloud, and Einstein-powered
              chat — all needing structured input, not PDFs.
            </li>
            <li>
              <strong className="text-ink">AI assistants and RAG.</strong> Grounding LLMs in
              authoritative content, where stale or untyped data produces hallucinations.
            </li>
          </ol>
          <p className="mt-4">
            Each new channel demanded structured, real-time, queryable access. CCMS tools that
            output only files force you to bolt on a delivery layer per channel — a tax that
            compounds with every new surface.
          </p>

          <h2 className="headline mt-12 text-[28px] text-ink">The CDP architecture</h2>
          <p className="mt-4">A CDP is four layers in one platform:</p>
          <ul className="mt-4 space-y-3 pl-6 list-disc marker:text-accent-2">
            <li><strong className="text-ink">Author</strong> — DITA, Markdown, HTML in the editor of choice.</li>
            <li><strong className="text-ink">Manage</strong> — Git-backed repository, versioning, workflow, audit, translation.</li>
            <li><strong className="text-ink">Deliver</strong> — Real-time REST + GraphQL API, typed schemas, semantic JSON, SDK.</li>
            <li><strong className="text-ink">Discover</strong> — Customer portal with search, personalization, cases, community.</li>
          </ul>
          <p className="mt-4">
            See the four-layer architecture in detail on{" "}
            <Link href="/platform" className="text-accent-2 underline">the platform page</Link>.
          </p>

          <h2 className="headline mt-12 text-[28px] text-ink">When to upgrade</h2>
          <p className="mt-4">
            You need a CDP (and a regular CCMS isn't enough) when any of these are true:
          </p>
          <ul className="mt-4 space-y-2 pl-6 list-disc marker:text-accent-2">
            <li>Your content has to feed three or more channels (docs, portal, Salesforce, AI, in-product)</li>
            <li>A buying committee asks "can you power our AI assistant?"</li>
            <li>Customer success is copy-pasting docs into Salesforce</li>
            <li>You're rebuilding a custom portal because no CCMS-vendor portal fits</li>
            <li>Stale-cache rebuild windows are causing compliance or correctness problems</li>
          </ul>
        </div>
      </article>

      <FAQList items={faqs} title="CDP — frequently asked" />

      <FinalCTA
        title="See the CDP architecture live."
        lede="Walk through Author → Manage → Deliver → Discover with a solution engineer in 30 minutes."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Read about the platform", href: "/platform" }}
      />
    </>
  );
}
