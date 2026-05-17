import type { Metadata } from "next";
import Link from "next/link";
import { FAQList, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "What Is a CCMS? — Component Content Management Explained",
  description:
    "A 12-minute primer on Component Content Management Systems (CCMS). What they are, when you need one, how they differ from a CMS or DAM, and what to evaluate.",
};

const faqs = [
  {
    q: "What is a CCMS in plain English?",
    a: "A Component Content Management System (CCMS) stores content as small, reusable components — typically topics or paragraphs — instead of as whole pages or documents. The same component can appear in a PDF, a help site, a customer portal, a training module, and an AI assistant — without being duplicated. CCMS systems also handle versioning, translation workflows, and approvals at the component level.",
  },
  {
    q: "How is a CCMS different from a CMS like WordPress?",
    a: "WordPress and other traditional content management systems store content as pages — title, body, hero image, all coupled to a single URL. A CCMS stores content as components that have no URL of their own; they're assembled into outputs (a PDF, an HTML page, a JSON response) at publish or delivery time. CMS = page-oriented. CCMS = component-oriented.",
  },
  {
    q: "Do I need a CCMS?",
    a: "You need a CCMS when (1) the same content appears in multiple places, (2) the cost of keeping those places in sync is real, (3) you ship content in more than one format (e.g. PDF + web + Salesforce), or (4) you publish in multiple languages. If you're writing one help center in one language with no reuse, a CMS or static-site generator is probably enough.",
  },
  {
    q: "What is DITA and do I need it?",
    a: "DITA (Darwin Information Typing Architecture) is the dominant XML-based standard for structured content in technical communication. It defines topic types (task, concept, reference, troubleshooting) and a referencing/reuse model. You don't strictly need DITA to run a CCMS — DiscoverCX also supports Markdown and HTML — but DITA is the most battle-tested standard for technical, regulated, and multilingual content.",
  },
  {
    q: "What's the difference between a CCMS and a CDP (content delivery platform)?",
    a: "A CCMS stores and manages structured content. A CDP additionally delivers that content as a real-time API to any surface — portals, docs sites, Salesforce, in-product help, AI assistants. Many CCMS tools stop at file output (PDF, HTML). A modern CDP keeps everything live, typed, and queryable. DiscoverCX is both.",
  },
  {
    q: "What should I look for when buying a CCMS?",
    a: "Twelve categories: authoring, repository, workflow, translation, delivery, portal, integrations, AI, security, compliance, performance, commercial. Our free CCMS RFP template covers 78 specific questions across all twelve — vendor-neutral.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "What Is a CCMS? — Component Content Management Explained",
  description:
    "A primer on Component Content Management Systems (CCMS): what they are, when you need one, and what to evaluate.",
  author: { "@type": "Organization", name: "DiscoverCX" },
  publisher: { "@type": "Organization", name: "Ingeniux" },
  datePublished: "2026-02-01",
  dateModified: "2026-05-16",
};

export default function WhatIsCcmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Guide · 12 minute read"
        title={
          <>
            What is a CCMS?
            <br />
            <span className="text-ink-3">A vendor-neutral primer.</span>
          </>
        }
        lede="A Component Content Management System (CCMS) stores content as small, reusable components instead of whole pages — so the same source can power a PDF, a portal, Salesforce Knowledge, and an AI assistant at the same time."
      />

      <article className="bg-bg">
        <div className="mx-auto max-w-3xl px-8 py-20 text-[16px] leading-relaxed text-ink-2 lg:py-28">
          <h2 className="headline mt-2 text-[28px] text-ink">The 30-second answer</h2>
          <p className="mt-4">
            A CCMS is a content repository where the unit of management is a{" "}
            <em>component</em> — a topic, a paragraph, a step, a warning — rather than
            a whole document. Components are versioned, reviewed, translated, and
            assembled at publish time into multiple outputs: PDFs, web pages, API
            responses, learning modules, AI grounding data.
          </p>
          <p className="mt-4">
            Compared to a traditional CMS (WordPress, Drupal, Contentful), a CCMS is
            page-agnostic: components have no URL of their own. They live in the
            repository and are assembled into outputs by a publishing pipeline.
          </p>

          <h2 className="headline mt-12 text-[28px] text-ink">When you need one</h2>
          <p className="mt-4">You need a CCMS when at least two of these are true:</p>
          <ul className="mt-4 space-y-2 pl-6 list-disc marker:text-accent-2">
            <li>The same content appears in multiple places (docs site + portal + Salesforce + product UI)</li>
            <li>You ship in multiple formats (PDF + HTML + EPUB + JSON for AI)</li>
            <li>You publish in multiple languages</li>
            <li>You have multiple authors and need workflow / audit / approval</li>
            <li>You're in a regulated industry where versioned, signed content matters</li>
            <li>You're trying to feed an AI assistant with grounded, trustworthy content</li>
          </ul>
          <p className="mt-4">
            If none of those apply — you ship one help center in one language with no
            reuse — a static site generator or a WYSIWYG knowledge base is enough.
          </p>

          <h2 className="headline mt-12 text-[28px] text-ink">CCMS vs. CMS vs. DAM</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Tool</th>
                  <th className="px-4 py-3 font-medium">Unit of management</th>
                  <th className="px-4 py-3 font-medium">Best for</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {[
                  ["CMS", "Page / post", "Marketing sites, blogs, e-commerce content"],
                  ["CCMS", "Component (topic, paragraph)", "Tech docs, policies, learning, multilingual"],
                  ["DAM", "Asset (image, video, doc)", "Brand & marketing asset libraries"],
                  ["DXP", "Experience (page + personalization + workflows)", "Customer-facing web experiences"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-line">
                    <td className="px-4 py-3 font-mono text-ink">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="headline mt-12 text-[28px] text-ink">What about DITA?</h2>
          <p className="mt-4">
            DITA (Darwin Information Typing Architecture) is the dominant standard for
            structured technical content. It defines topic types (task, concept,
            reference, troubleshooting), a referencing model for reuse (conrefs,
            keyrefs), and conditional content (profiling). Most enterprise CCMS tools
            are DITA-native.
          </p>
          <p className="mt-4">
            You don't strictly need DITA to run a CCMS. DiscoverCX supports Markdown
            and HTML in the same repository. But DITA is the most battle-tested
            standard for technical, regulated, and multilingual content — if you have
            those needs, the cost of learning DITA pays back fast.
          </p>

          <h2 className="headline mt-12 text-[28px] text-ink">The 12 evaluation categories</h2>
          <p className="mt-4">
            When you put a CCMS through an RFP, cover all twelve of these categories.
            Skipping any of them is how teams end up with a CCMS that satisfies authoring
            but fails delivery, or vice versa:
          </p>
          <ol className="mt-4 space-y-1 pl-6 list-decimal marker:text-accent-2">
            <li>Authoring — editors, DITA/Markdown support, AI co-authoring, reuse</li>
            <li>Repository — versioning, branching, concurrency, audit</li>
            <li>Workflow — states, approvals, scheduled publishing</li>
            <li>Translation — TMS round-trip, locale fan-out, TM</li>
            <li>Delivery — headless API, real-time, channels, SDK</li>
            <li>Portal — search, personalization, cases, community</li>
            <li>Integrations — Salesforce, ServiceNow, Atlassian, Git</li>
            <li>AI — RAG output, Einstein, traceability</li>
            <li>Security — SOC 2, SAML/OIDC/SCIM, encryption</li>
            <li>Compliance — HIPAA, GDPR, FedRAMP, data residency</li>
            <li>Performance — SLA, latency, scalability</li>
            <li>Commercial — pricing, multi-year, services, support</li>
          </ol>
          <p className="mt-4">
            We publish the full 78-question{" "}
            <Link href="/resources/ccms-rfp-template" className="text-accent-2 underline">
              CCMS RFP template
            </Link>{" "}
            free, vendor-neutral, as an editable .docx.
          </p>
        </div>
      </article>

      <FAQList items={faqs} title="CCMS — frequently asked" />

      <FinalCTA
        title="Run a real CCMS proof of concept."
        lede="30 days on your actual content. We import your DITA, Flare project, or legacy CCMS export. You decide whether it earns the budget."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Download RFP template", href: "/resources/ccms-rfp-template" }}
      />
    </>
  );
}
