import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { getInsightFacets, getInsights } from "./_data";
import { InsightsGrid } from "./insights-grid";

export const metadata: Metadata = {
  title: "Insights — Blog, eBooks, Videos & Webinars — DiscoverCX",
  description:
    "The source for better docs, CX, and content innovation. Blog posts, premium eBooks, video talks, and on-demand webinars from the DiscoverCX team and the broader content community.",
};

export default function InsightsHubPage() {
  const items = getInsights();
  const { topics } = getInsightFacets(items);

  // Pick a hero (first featured) + 2 secondary featured for the marquee row
  const featured = items.filter((i) => i.featured);
  const hero = featured[0];
  const secondary = featured.slice(1, 3);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            The source for better docs,
            <br />
            <span className="text-ink-3">CX, and content innovation.</span>
          </>
        }
        lede={`${items.length} pieces and counting. Strategy plays, RFP templates, working sessions, and the field reports that don't make it into a brochure.`}
      />

      {/* FEATURED MARQUEE */}
      {hero && (
        <section className="border-b border-line bg-bg">
          <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Hero card */}
              <Link
                href={hero.href}
                className="group relative col-span-12 flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-card transition-colors hover:border-line-2 lg:col-span-7"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-elev lg:aspect-[16/9]">
                  {hero.image ? (
                    <Image
                      src={hero.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 760px, 100vw"
                      priority
                      className={`transition-transform duration-700 group-hover:scale-[1.02] ${
                        hero.type === "eBook" ? "object-contain p-10" : "object-cover"
                      }`}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_65%)]" />
                      <div className="absolute inset-0 grid-bg opacity-25" />
                    </>
                  )}
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-[color:var(--accent)]/40 bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-2 backdrop-blur">
                    Featured · {hero.type}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    {hero.topic} · {hero.meta}
                  </span>
                  <h2 className="font-display text-[26px] font-semibold leading-tight md:text-[32px] group-hover:text-accent-2">
                    {hero.title}
                  </h2>
                  <p className="text-[14.5px] leading-relaxed text-ink-2">
                    {hero.summary}
                  </p>
                  <p className="mt-2 text-[13px] text-accent-2 group-hover:text-accent">
                    {hero.type === "eBook"
                      ? "Get the PDF →"
                      : hero.type === "Blog"
                        ? "Read the post →"
                        : "Watch the session →"}
                  </p>
                </div>
              </Link>

              {/* Secondary */}
              <div className="col-span-12 grid gap-6 lg:col-span-5">
                {secondary.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className="group flex overflow-hidden rounded-2xl border border-line bg-bg-card transition-colors hover:border-line-2"
                  >
                    <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-bg-elev">
                      {s.image ? (
                        <Image
                          src={s.image}
                          alt=""
                          fill
                          sizes="200px"
                          className={`transition-transform duration-500 group-hover:scale-[1.05] ${
                            s.type === "eBook" ? "object-contain p-4" : "object-cover"
                          }`}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_65%)]" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                        {s.type} · {s.topic}
                      </span>
                      <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug group-hover:text-accent-2">
                        {s.title}
                      </h3>
                      <p className="mt-auto pt-3 text-[11.5px] text-ink-4">
                        {s.meta}
                      </p>
                    </div>
                  </Link>
                ))}
                {/* Stats tile */}
                <div className="rounded-2xl border border-line bg-bg-2 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                    What&apos;s in here
                  </p>
                  <ul className="mt-4 space-y-2 text-[13px]">
                    {[
                      ["Blog posts", items.filter((i) => i.type === "Blog").length],
                      ["eBooks", items.filter((i) => i.type === "eBook").length],
                      ["Webinars & talks", items.filter((i) => i.type === "Webinar").length],
                      ["Topics", topics.length],
                    ].map(([k, v]) => (
                      <li key={String(k)} className="flex justify-between">
                        <span className="text-ink-3">{k}</span>
                        <span className="font-mono text-accent-2">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MAIN GRID + FILTERS */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-8">
            <p className="eyebrow">Browse everything</p>
            <h2 className="headline mt-2 text-[26px] md:text-[32px]">
              Filter by type, topic, or search.
            </h2>
          </div>
          <InsightsGrid items={items} topics={topics} />
        </div>
      </section>

      <FinalCTA
        title="Want a custom brief for your team?"
        lede="A 30-minute session with a solution architect — your stack, your roadmap, and the playbook that fits."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Browse all eBooks", href: "/resources/ebooks" }}
      />
    </>
  );
}
