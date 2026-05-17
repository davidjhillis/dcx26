import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { ebookCategories, ebooks } from "./_data";

export const metadata: Metadata = {
  title: "Whitepapers & eBooks — DiscoverCX",
  description:
    "Expert guides, datasheets, RFP templates, and strategy playbooks for documentation, customer portals, structured content, and AI. Free PDF downloads.",
};

const featured = ebooks.filter((e) => e.featured).slice(0, 3);
const rest = ebooks.filter((e) => !featured.includes(e));

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ebooks.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Book",
      name: e.title,
      description: e.summary,
      url: `https://discovercx.com/resources/ebooks/${e.slug}`,
      image: `https://discovercx.com${e.cover}`,
      publisher: { "@type": "Organization", name: "DiscoverCX" },
    },
  })),
};

export default function EbooksIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Whitepapers & eBooks"
        title={
          <>
            Expert guides, templates,
            <br />
            <span className="text-ink-3">and premium research.</span>
          </>
        }
        lede="The same playbooks our Fortune 500 customers use to evaluate, migrate, and ship structured content at scale. Free. PDF. No phone calls."
      />

      {/* FEATURED */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Featured</p>
              <h2 className="headline mt-2 text-[28px] md:text-[36px]">
                Start with the ones we&apos;re asked for most.
              </h2>
            </div>
            <Link
              href="#all"
              className="hidden text-[13px] text-accent-2 underline hover:text-accent md:inline-block"
            >
              See all {ebooks.length} →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((e) => (
              <FeaturedCard key={e.slug} ebook={e} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER + GRID */}
      <section id="all" className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The library</p>
              <h2 className="headline mt-2 text-[28px] md:text-[36px]">
                {ebooks.length} guides. Pick yours.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[12px]">
              <span className="font-mono uppercase tracking-widest text-ink-4">
                Categories
              </span>
              {ebookCategories.map((c) => (
                <a
                  key={c}
                  href={`#cat-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-full border border-line bg-bg-card px-3 py-1 text-ink-2 transition-colors hover:border-line-2 hover:text-ink"
                >
                  {c}
                </a>
              ))}
            </div>
          </div>

          {ebookCategories.map((cat) => {
            const items = ebooks.filter((e) => e.category === cat);
            return (
              <div
                key={cat}
                id={`cat-${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="mt-14 first:mt-12"
              >
                <div className="flex items-baseline justify-between border-b border-line pb-3">
                  <h3 className="font-mono text-[12px] uppercase tracking-widest text-accent-2">
                    {cat}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                    {items.length} doc{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((e) => (
                    <CompactCard key={e.slug} ebook={e} />
                  ))}
                </div>
              </div>
            );
          })}

          {rest.length === 0 && null}
        </div>
      </section>

      <FinalCTA
        title="Want a custom brief for your buying committee?"
        lede="Our solutions team can prepare tailored architecture or security responses — usually within 48 hours."
        primary={{ label: "Request a custom brief", href: "/contact?reason=brief" }}
        secondary={{ label: "Request a demo", href: "/demo" }}
      />
    </>
  );
}

function FeaturedCard({ ebook }: { ebook: (typeof ebooks)[number] }) {
  return (
    <Link
      href={`/resources/ebooks/${ebook.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-card transition-colors hover:border-line-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-elev">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,199,183,0.18),transparent_65%)]" />
        <Image
          src={ebook.cover}
          alt={`${ebook.title} cover`}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-md border border-line bg-bg/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-2 backdrop-blur">
          {ebook.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
          {ebook.tagline}
        </span>
        <h3 className="mt-2 font-display text-[20px] font-semibold leading-tight group-hover:text-accent-2">
          {ebook.title}
        </h3>
        {ebook.subtitle && (
          <p className="mt-2 text-[13.5px] text-ink-3">{ebook.subtitle}</p>
        )}
        <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-ink-2">
          {ebook.summary}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-3">
            {ebook.pages} pages · {ebook.readTime}
          </span>
          <span className="text-[13px] font-medium text-accent-2 group-hover:text-accent">
            Get the PDF →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CompactCard({ ebook }: { ebook: (typeof ebooks)[number] }) {
  return (
    <Link
      href={`/resources/ebooks/${ebook.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-elev">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,199,183,0.12),transparent_70%)]" />
        <Image
          src={ebook.cover}
          alt={`${ebook.title} cover`}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
          {ebook.tagline}
        </span>
        <h3 className="mt-1.5 font-display text-[15.5px] font-semibold leading-snug group-hover:text-accent-2">
          {ebook.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[12.5px] leading-relaxed text-ink-3">
          {ebook.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
            {ebook.pages}p · {ebook.readTime}
          </span>
          <span className="text-[12px] text-accent-2 group-hover:text-accent">
            Download →
          </span>
        </div>
      </div>
    </Link>
  );
}
