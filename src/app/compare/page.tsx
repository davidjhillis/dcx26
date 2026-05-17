import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { competitors } from "./_data";

export const metadata: Metadata = {
  title: "Compare DiscoverCX — vs. MadCap, Paligo, Heretto & More",
  description:
    "Side-by-side comparisons of DiscoverCX vs. the leading CCMS and help authoring tools. See where headless delivery, customer portals, and AI-ready output change the buy decision.",
};

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
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
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
