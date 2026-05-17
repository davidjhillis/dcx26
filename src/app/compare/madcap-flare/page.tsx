import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, FAQList, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "DiscoverCX vs. MadCap Flare — 2026 Comparison",
  description:
    "Side-by-side comparison: MadCap Flare's desktop help authoring vs. DiscoverCX's headless CCMS + content delivery platform. Authoring model, delivery, AI readiness, total cost.",
};

const matrix: { feature: string; flare: string | boolean; dcx: string | boolean }[] = [
  { feature: "Authoring model", flare: "Desktop app (Windows)", dcx: "Browser + Oxygen / Fonto / Simply XML" },
  { feature: "Content format", flare: "Proprietary XHTML", dcx: "DITA, Markdown, HTML" },
  { feature: "Repository", flare: "Files on disk + Git", dcx: "Git-backed CCMS, server-side workflows" },
  { feature: "Multi-author concurrency", flare: false, dcx: true },
  { feature: "Real-time review / approvals", flare: false, dcx: true },
  { feature: "Headless delivery API", flare: false, dcx: true },
  { feature: "Real-time publishing (no rebuild)", flare: false, dcx: true },
  { feature: "Customer-facing portal", flare: false, dcx: true },
  { feature: "Salesforce Knowledge sync", flare: false, dcx: true },
  { feature: "AI / RAG-ready JSON output", flare: false, dcx: true },
  { feature: "PDF / WebHelp output", flare: true, dcx: true },
  { feature: "Translation / TMS round-trip", flare: "Add-on", dcx: "Built-in (XLIFF 2.1)" },
  { feature: "SOC 2 Type II", flare: false, dcx: true },
  { feature: "SAML / OIDC / SCIM SSO", flare: false, dcx: true },
  { feature: "Audit trail", flare: false, dcx: true },
  { feature: "Pricing model", flare: "Per-seat perpetual + maintenance", dcx: "Per-seat + usage SaaS" },
];

const faqs = [
  {
    q: "Is DiscoverCX a true replacement for MadCap Flare?",
    a: "For docs teams that need more than help systems and PDFs — yes. DiscoverCX covers everything Flare does (structured authoring, conditional content, multi-format output) and adds the layers Flare doesn't have: a real-time headless API, a customer-facing portal, Salesforce Knowledge sync, and AI-ready output. Teams that only ship a help center and PDFs may not need the upgrade.",
  },
  {
    q: "Can we migrate our existing MadCap Flare content?",
    a: "Yes. DiscoverCX includes a Flare migration tool that converts your XHTML projects, conditional tags, snippets, and variables into DITA or Markdown — with no fidelity loss. A dedicated migration engineer guides the process. Typical Flare migrations run 4–8 weeks depending on volume and conditionalization complexity.",
  },
  {
    q: "What about MadCap Central, the cloud version?",
    a: "MadCap Central adds cloud project storage, light Git, and a review portal — but the authoring is still Flare desktop, and there's still no headless delivery API or customer-facing portal. Central is a workflow add-on to Flare. DiscoverCX is a platform, not an add-on.",
  },
  {
    q: "Does DiscoverCX produce PDFs and WebHelp?",
    a: "Yes. The publishing pipeline outputs PDF, HTML5, EPUB, and standalone WebHelp from the same DITA source — and pipes the same content through the API to portals, Salesforce, and AI assistants. One source, every format.",
  },
  {
    q: "How does pricing compare to MadCap?",
    a: "MadCap is per-seat perpetual licenses plus annual maintenance. Per author with all add-ons (Flare + Central + Translator + Analyzer), total cost lands around $4–6K/year per seat. DiscoverCX Business starts at $4,800/month for 25 seats (~$2,300/year per seat) and includes everything plus the headless API and Salesforce sync.",
  },
  {
    q: "Why not just stay on Flare?",
    a: "Stay on Flare if your output requirements are help systems and PDFs and you don't need to feed other channels. Move to DiscoverCX when buying committees start asking 'Can you power our AI assistant?', 'Can you push to Salesforce?', or 'When can we have a customer portal?' — those are platform questions, and Flare wasn't built to answer them.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "DiscoverCX vs. MadCap Flare — 2026 Comparison",
  description:
    "Side-by-side comparison of MadCap Flare (desktop help authoring) and DiscoverCX (headless CCMS + delivery platform).",
  author: { "@type": "Organization", name: "DiscoverCX" },
  publisher: { "@type": "Organization", name: "Ingeniux" },
  datePublished: "2026-01-15",
  dateModified: "2026-05-16",
};

export default function MadCapFlarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Compare · vs. MadCap Flare"
        title={
          <>
            DiscoverCX vs.
            <br />
            <span className="text-ink-3">MadCap Flare</span>
          </>
        }
        lede="The honest comparison. Flare is best-in-class for shipping help systems and PDFs. DiscoverCX is built for teams whose content also has to feed portals, Salesforce, AI assistants, and product UIs."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Download RFP template", href: "/resources/ccms-rfp-template" }}
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <p className="eyebrow">TL;DR</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            One sentence: Flare ships help systems. DiscoverCX ships customer experience.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-bg-card p-7">
              <h3 className="font-display text-[18px] font-semibold">Stay on Flare when</h3>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink-2">
                <li>→ Your only outputs are PDF and WebHelp.</li>
                <li>→ Your authoring team is small (1–5) and senior.</li>
                <li>→ You don't need a customer-facing portal.</li>
                <li>→ AI / Salesforce / API delivery aren't on the roadmap.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--accent-blue)]/30 bg-gradient-to-b from-[color:var(--accent-blue-dim)] to-bg-card p-7">
              <h3 className="font-display text-[18px] font-semibold text-accent-blue-2">
                Move to DiscoverCX when
              </h3>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink-2">
                <li>→ Procurement asks "can you power our AI assistant?"</li>
                <li>→ Support needs the same content in Salesforce Knowledge.</li>
                <li>→ Customers want a single portal for docs + community + cases.</li>
                <li>→ You need real concurrency, audit, and SOC 2.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <p className="eyebrow">Side-by-side</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">Every meaningful difference.</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Capability</th>
                  <th className="px-4 py-3 font-medium">MadCap Flare</th>
                  <th className="px-4 py-3 font-medium text-accent-blue-2">DiscoverCX</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {matrix.map((row, i) => (
                  <tr key={i} className="border-t border-line align-top">
                    <td className="px-4 py-3 text-ink">{row.feature}</td>
                    {[row.flare, row.dcx].map((v, j) => (
                      <td key={j} className="px-4 py-3">
                        {typeof v === "boolean" ? (
                          v ? <span className="text-accent">●</span> : <span className="text-ink-4">—</span>
                        ) : (
                          <span className="text-ink">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] text-ink-4">
            Comparison reflects publicly available product documentation for MadCap Flare 2026 r2
            and DiscoverCX as of May 2026. Spot an error?{" "}
            <Link href="/contact" className="text-accent-blue-2 underline">Tell us.</Link>
          </p>
        </div>
      </section>

      <FAQList items={faqs} />

      <FinalCTA
        title="Run them side by side."
        lede="A 30-day proof of concept on your actual MadCap project. We import your content, you compare authoring, delivery, and total cost on real workloads."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to migration", href: "/contact" }}
      />
    </>
  );
}
