import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList, FinalCTA, PageHero } from "@/components/ui";
import { competitors, getCompetitor } from "../_data";

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return { title: c.metaTitle, description: c.metaDesc };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: c.metaTitle,
    description: c.metaDesc,
    author: { "@type": "Organization", name: "DiscoverCX" },
    publisher: { "@type": "Organization", name: "Ingeniux" },
    datePublished: "2026-01-15",
    dateModified: "2026-05-16",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={`Compare · vs. ${c.name}`}
        title={
          <>
            DiscoverCX vs.
            <br />
            <span className="text-ink-3">{c.name}</span>
          </>
        }
        lede={c.blurb}
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{
          label: "Download RFP template",
          href: "/resources/ccms-rfp-template",
        }}
      />

      {/* TL;DR */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">TL;DR</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            {c.tagline}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-bg-card p-7">
              <h3 className="font-display text-[18px] font-semibold">
                Stay on {c.name} when
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                {c.use_when}
              </p>
            </div>
            <div className="rounded-xl border border-[color:var(--accent)]/30 bg-gradient-to-b from-[color:rgba(0,199,183,0.10)] to-bg-card p-7">
              <h3 className="font-display text-[18px] font-semibold text-accent-2">
                Move to DiscoverCX when
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                {c.move_when}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATRIX */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">Side-by-side</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">
            Every meaningful difference.
          </h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Capability</th>
                  <th className="px-4 py-3 font-medium">{c.name}</th>
                  <th className="px-4 py-3 font-medium text-accent-2">DiscoverCX</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {c.matrix.map((row, i) => (
                  <tr key={i} className="border-t border-line align-top">
                    <td className="px-4 py-3 text-ink">{row.feature}</td>
                    {[row.them, row.dcx].map((v, j) => (
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
            Comparison reflects publicly available product documentation as of May 2026.
            Spot an error?{" "}
            <Link href="/contact" className="text-accent-2 underline">Tell us.</Link>
          </p>
        </div>
      </section>

      <FAQList items={c.faqs} title={`${c.name} — frequently asked`} />

      <FinalCTA
        title="Run them side by side."
        lede={`A 30-day proof of concept on your actual ${c.name} content. We import, you compare authoring, delivery, and total cost on real workloads.`}
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to migration", href: "/contact" }}
      />

      <section className="border-t border-line bg-bg">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
            Other comparisons
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {competitors
              .filter((o) => o.slug !== c.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/compare/${o.slug}`}
                  className="rounded-md border border-line bg-bg-elev px-3 py-1.5 text-[12px] text-ink-2 hover:border-line-3 hover:text-ink"
                >
                  vs. {o.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
