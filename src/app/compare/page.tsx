import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Compare DiscoverCX — vs. MadCap, Paligo, Heretto & More",
  description:
    "Side-by-side comparisons of DiscoverCX vs. the leading CCMS and help authoring tools. See where headless delivery, customer portals, and AI-ready output change the buy decision.",
};

const competitors = [
  {
    slug: "madcap-flare",
    name: "MadCap Flare",
    blurb:
      "Desktop help authoring tool with strong PDF and WebHelp output. No headless API, no customer portal.",
    use_when: "You're shipping help systems and PDFs only.",
    move_when:
      "You need to feed Salesforce, an AI assistant, or a portal from the same source.",
  },
  {
    slug: "paligo",
    name: "Paligo",
    blurb:
      "Cloud DITA-light CCMS with good multilingual workflows. Limited delivery API and no customer portal.",
    use_when: "You're a small docs team publishing to a hosted docs site.",
    move_when:
      "You need real headless delivery, customer-facing portal, or Fortune 500-grade SSO/SOC 2.",
  },
  {
    slug: "heretto",
    name: "Heretto (Easy DITA)",
    blurb:
      "Cloud DITA CCMS with portal add-on. Strong for DITA-only shops but light on AI and integrations.",
    use_when: "You're DITA-pure and only need a docs portal.",
    move_when:
      "You're mixing DITA + Markdown, need Salesforce sync, or want AI-ready output.",
  },
  {
    slug: "adobe-xdm",
    name: "Adobe XML Documentation (XDM)",
    blurb:
      "Enterprise DITA CCMS bundled with the Adobe Experience Manager stack. Heavy, expensive, AEM-first.",
    use_when: "You already run AEM as your CMS.",
    move_when:
      "You want a content-first platform without the AEM tax, or you need API-first delivery.",
  },
  {
    slug: "zendesk",
    name: "Zendesk Guide",
    blurb:
      "Knowledge base inside Zendesk's support suite. Authoring is WYSIWYG, no structured reuse, no DITA.",
    use_when: "You only ship public help articles tied to support tickets.",
    move_when:
      "You need structured content reuse, product documentation, or to feed channels beyond Zendesk.",
  },
  {
    slug: "ixiasoft",
    name: "IXIASOFT (CCMS)",
    blurb:
      "Long-standing on-prem DITA CCMS. Strong DITA validation, weak modern delivery and AI story.",
    use_when: "You're regulated and need self-hosted DITA with deep workflow customization.",
    move_when:
      "You want SaaS economics, real-time API delivery, and a portal you don't have to build.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: competitors.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://discovercx.com/compare/${c.slug}`,
    name: `DiscoverCX vs. ${c.name}`,
  })),
};

export default function CompareIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Compare"
        title={
          <>
            DiscoverCX vs.
            <br />
            <span className="text-ink-3">the rest of the CCMS market.</span>
          </>
        }
        lede="Honest, technical comparisons against the tools content teams actually evaluate. No straw men, no marketing-speak — just where each tool wins and where it costs you the deal."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {competitors.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group elev-card flex flex-col rounded-2xl p-8 transition-colors hover:border-line-3"
              >
                <p className="eyebrow">vs.</p>
                <h2 className="mt-3 font-display text-[26px] font-semibold tracking-tight group-hover:text-accent-blue-2">
                  {c.name}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{c.blurb}</p>
                <div className="mt-6 space-y-3 border-t border-line pt-5 text-[13px]">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      Stay with {c.name} when
                    </p>
                    <p className="mt-1 text-ink-2">{c.use_when}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-blue-2">
                      Move to DiscoverCX when
                    </p>
                    <p className="mt-1 text-ink-2">{c.move_when}</p>
                  </div>
                </div>
                <p className="mt-6 text-[12px] text-ink-3 group-hover:text-ink-2">
                  Read full comparison →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Still evaluating?"
        lede="Get the RFP template Fortune 500 procurement teams use to compare CCMS vendors — 78 questions, editable .docx."
        primary={{ label: "Download RFP template", href: "/resources/ccms-rfp-template" }}
        secondary={{ label: "Request a demo", href: "/demo" }}
      />
    </>
  );
}
