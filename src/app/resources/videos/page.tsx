import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { getVideos, videoCategoryOrder } from "./_data";

export const metadata: Metadata = {
  title: "Videos — Content Matters Podcast, Webinars & Product Demos — DiscoverCX",
  description:
    "The Content Matters podcast and webinar series, plus product demos and release walkthroughs. 50+ on-demand sessions from the DiscoverCX team and the broader content community.",
};

export default function VideosIndexPage() {
  const videos = getVideos();
  const featured = videos.filter((v) => v.featured).slice(0, 1)[0];
  const grouped = videoCategoryOrder
    .map((cat) => ({
      cat,
      items: videos.filter((v) => v.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.displayTitle,
        description: v.description || v.displayTitle,
        thumbnailUrl: v.thumbnail,
        uploadDate: v.uploadDate,
        duration: v.duration ? `PT${Math.round(v.duration / 60)}M` : undefined,
        embedUrl: v.embedUrl,
        url: `https://discovercx.com/resources/videos/${v.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Videos"
        title={
          <>
            The Content Matters series,
            <br />
            <span className="text-ink-3">product demos, and release talks.</span>
          </>
        }
        lede={`${videos.length} on-demand sessions. The podcast, the webinars, and the working demos — every one streamable on Vimeo, free, no gate.`}
      />

      {/* FEATURED */}
      {featured && (
        <section className="border-b border-line bg-bg">
          <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
            <Link
              href={`/resources/videos/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="relative col-span-12 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-bg-elev lg:col-span-8">
                {featured.thumbnail && (
                  <Image
                    src={featured.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 880px, 100vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-[color:var(--accent)]/40 bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-2 backdrop-blur">
                  Featured · {featured.category}
                </div>
                <div className="absolute right-4 top-4 rounded-md bg-black/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-widest text-ink backdrop-blur">
                  {featured.durationLabel}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-bg/40 backdrop-blur transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-[1px] fill-accent-2" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {featured.series || featured.category}
                </span>
                <h2 className="mt-2 font-display text-[24px] font-semibold leading-tight md:text-[30px] group-hover:text-accent-2">
                  {featured.displayTitle}
                </h2>
                {featured.uploadDate && (
                  <p className="mt-2 text-[12px] text-ink-4">
                    {new Date(featured.uploadDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <p className="mt-5 text-[14px] text-accent-2 group-hover:text-accent">
                  Watch the session →
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* SECTIONS BY CATEGORY */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The library</p>
              <h2 className="headline mt-2 text-[28px] md:text-[36px]">
                {videos.length} sessions. Pick a series.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[12px]">
              <span className="font-mono uppercase tracking-widest text-ink-4">
                Jump to
              </span>
              {grouped.map((g) => (
                <a
                  key={g.cat}
                  href={`#cat-${g.cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-full border border-line bg-bg-card px-3 py-1 text-ink-2 hover:border-line-2 hover:text-ink"
                >
                  {g.cat} <span className="text-ink-4">{g.items.length}</span>
                </a>
              ))}
            </div>
          </div>

          {grouped.map((g) => (
            <div
              key={g.cat}
              id={`cat-${g.cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="mt-14"
            >
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h3 className="font-mono text-[12px] uppercase tracking-widest text-accent-2">
                  {g.cat}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                  {g.items.length} session{g.items.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {g.items.map((v) => (
                  <VideoCard key={v.id} v={v} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Want a working session for your team?"
        lede="A 30-minute walkthrough with a solution architect — your content, your stack, your roadmap."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Browse all eBooks", href: "/resources/ebooks" }}
      />
    </>
  );
}

function VideoCard({ v }: { v: ReturnType<typeof getVideos>[number] }) {
  return (
    <Link
      href={`/resources/videos/${v.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elev">
        {v.thumbnail ? (
          <Image
            src={v.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_65%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-bg/40 backdrop-blur">
            <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-accent-2" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {v.durationLabel && (
          <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/65 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
            {v.durationLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
          {v.series || v.category}
        </span>
        <h4 className="mt-1.5 font-display text-[14.5px] font-semibold leading-snug text-ink group-hover:text-accent-2">
          {v.displayTitle}
        </h4>
        {v.uploadDate && (
          <p className="mt-auto pt-3 text-[11px] text-ink-4">
            {new Date(v.uploadDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </Link>
  );
}
