import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, FAQList, FinalCTA, PageHero } from "@/components/ui";
import { getSolution, solutions } from "../_data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: s.metaTitle,
    description: s.metaDesc,
    author: { "@type": "Organization", name: "DiscoverCX" },
    publisher: { "@type": "Organization", name: "Ingeniux" },
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
        eyebrow={s.eyebrow}
        title={s.hero}
        lede={s.lede}
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      {/* OUTCOMES */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Outcomes</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                What changes when you switch.
              </h2>
              <p className="mt-4 text-[14px] text-ink-3">
                Built for: <span className="text-ink-2">{s.audience}</span>
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-5">
                {s.outcomes.map((o, i) => (
                  <li
                    key={o}
                    className="flex items-baseline gap-5 border-b border-line pb-5"
                  >
                    <span className="font-mono text-[12px] text-accent-blue-2">
                      0{i + 1}
                    </span>
                    <span className="text-[16px] text-ink">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <p className="eyebrow">Capabilities</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Everything you need, on day one.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f) => (
              <div
                key={f.h}
                className="rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <h3 className="font-display text-[16px] font-semibold">{f.h}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      {s.proof && (
        <section className="bg-bg border-b border-line">
          <div className="mx-auto max-w-4xl px-8 py-20 text-center lg:px-12 lg:py-28">
            <p className="font-display text-[24px] md:text-[28px] leading-[1.4] text-ink">
              &ldquo;{s.proof.quote}&rdquo;
            </p>
            <div className="mt-6 text-[13px] text-ink-3">
              <div className="text-ink">{s.proof.who}</div>
              <div>{s.proof.org}</div>
            </div>
          </div>
        </section>
      )}

      {/* REPLACES */}
      {s.replaces && s.replaces.length > 0 && (
        <section className="bg-bg-2 border-b border-line">
          <div className="mx-auto max-w-[1480px] px-8 py-16 lg:px-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                Replaces
              </p>
              {s.replaces.map((r) => (
                <span
                  key={r}
                  className="rounded-md border border-line bg-bg-elev px-3 py-1 text-[12px] text-ink-2"
                >
                  {r}
                </span>
              ))}
              <ButtonLink href="/compare" variant="ghost" className="ml-auto">
                Side-by-side comparisons →
              </ButtonLink>
            </div>
          </div>
        </section>
      )}

      <FAQList items={s.faqs} title={`${s.name} — FAQ`} />

      <FinalCTA
        title={`See ${s.name} live.`}
        lede="A solution engineer walks through your real workflow in 30 minutes."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "All solutions", href: "/solutions" }}
      />

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-[1480px] px-8 py-12 lg:px-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
            Other solutions
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {solutions
              .filter((o) => o.slug !== s.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/solutions/${o.slug}`}
                  className="rounded-md border border-line bg-bg-elev px-3 py-1.5 text-[12px] text-ink-2 hover:border-line-3 hover:text-ink"
                >
                  {o.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
