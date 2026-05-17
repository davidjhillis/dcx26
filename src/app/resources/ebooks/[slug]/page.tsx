import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA, PageHero } from "@/components/ui";
import { HubSpotDownloadForm } from "@/components/hubspot-download-form";
import { ebooks, getEbook } from "../_data";

type Params = { slug: string };

export function generateStaticParams() {
  return ebooks.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEbook(slug);
  if (!e) return {};
  return {
    title: `${e.title} — DiscoverCX`,
    description: e.summary,
    openGraph: {
      title: e.title,
      description: e.summary,
      images: [{ url: e.cover }],
    },
  };
}

export default async function EbookDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const e = getEbook(slug);
  if (!e) notFound();

  const others = ebooks.filter((x) => x.slug !== e.slug).slice(0, 3);

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: e.title,
    description: e.summary,
    image: `https://discovercx.com${e.cover}`,
    numberOfPages: e.pages,
    bookFormat: "https://schema.org/EBook",
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: "DiscoverCX" },
    url: `https://discovercx.com/resources/ebooks/${e.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={`${e.category} · ${e.pages} pages · ${e.readTime}`}
        title={e.title}
        lede={e.subtitle ?? e.summary}
      />

      {/* HERO — cover + form */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Cover */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-card">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_70%)] blur-2xl" />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={e.cover}
                    alt={`${e.title} cover`}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    priority
                    className="object-contain p-10"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px]">
                <span className="rounded-md border border-line bg-bg-card px-2.5 py-1 font-mono uppercase tracking-widest text-ink-3">
                  {e.tagline}
                </span>
                <span className="rounded-md border border-line bg-bg-card px-2.5 py-1 font-mono uppercase tracking-widest text-ink-3">
                  PDF · {e.pages} pages
                </span>
                <span className="rounded-md border border-line bg-bg-card px-2.5 py-1 font-mono uppercase tracking-widest text-ink-3">
                  {e.readTime} read
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              <HubSpotDownloadForm slug={e.slug} ctaLabel={e.ctaLabel} />
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">About this guide</p>
              <h2 className="headline mt-3 text-[26px] md:text-[32px]">
                What you&apos;ll learn.
              </h2>
              <p className="mt-5 text-[14.5px] leading-relaxed text-ink-2">
                {e.summary}
              </p>
            </div>

            <div className="lg:col-span-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-line bg-bg-card p-7 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  Key insights
                </p>
                <ul className="mt-5 space-y-3">
                  {e.keyInsights.map((k) => (
                    <li
                      key={k}
                      className="flex gap-3 text-[14px] leading-relaxed text-ink"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-bg-card p-7 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  Ideal readers
                </p>
                <ul className="mt-5 space-y-3">
                  {e.idealReaders.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-[14px] leading-relaxed text-ink"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What's inside list */}
          <div className="mt-16 rounded-2xl border border-line bg-bg-2 p-8 elev-card">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
              What&apos;s inside
            </p>
            <h3 className="mt-3 font-display text-[20px] font-semibold">
              The table of contents, in plain English.
            </h3>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {e.whatsInside.map((w, i) => (
                <div
                  key={w}
                  className="flex gap-4 rounded-xl border border-line bg-bg-card px-4 py-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] leading-snug text-ink">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Keep going</p>
              <h2 className="headline mt-2 text-[24px] md:text-[28px]">
                Other guides our buyers download next.
              </h2>
            </div>
            <Link
              href="/resources/ebooks"
              className="hidden text-[13px] text-accent-2 underline hover:text-accent md:inline-block"
            >
              Browse all →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/resources/ebooks/${o.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-elev">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,199,183,0.12),transparent_70%)]" />
                  <Image
                    src={o.cover}
                    alt={`${o.title} cover`}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    {o.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug group-hover:text-accent-2">
                    {o.title}
                  </h3>
                  <p className="mt-auto pt-4 text-[12px] text-ink-3">
                    {o.pages}p · {o.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to talk to a human?"
        lede="A 30-minute working session with a solution architect — your content, your stack, your roadmap."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Browse all guides", href: "/resources/ebooks" }}
      />
    </>
  );
}
