import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA, PageHero } from "@/components/ui";
import { getVideo, getVideos } from "../_data";

type Params = { slug: string };

export function generateStaticParams() {
  return getVideos().map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVideo(slug);
  if (!v) return {};
  return {
    title: `${v.displayTitle} — DiscoverCX`,
    description: v.description || v.displayTitle,
    openGraph: {
      title: v.displayTitle,
      description: v.description || v.displayTitle,
      images: v.thumbnail ? [{ url: v.thumbnail }] : undefined,
      videos: [{ url: v.embedUrl }],
    },
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const v = getVideo(slug);
  if (!v) notFound();

  const all = getVideos();
  const related = all
    .filter((x) => x.slug !== v.slug && x.category === v.category)
    .slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.displayTitle,
    description: v.description || v.displayTitle,
    thumbnailUrl: v.thumbnail,
    uploadDate: v.uploadDate,
    duration: v.duration ? `PT${Math.round(v.duration / 60)}M` : undefined,
    embedUrl: v.embedUrl,
    contentUrl: v.url,
    url: `https://discovercx.com/resources/videos/${v.slug}`,
    publisher: {
      "@type": "Organization",
      name: "DiscoverCX",
      logo: "https://discovercx.com/brand/dcx-white.svg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={`${v.category}${v.durationLabel ? ` · ${v.durationLabel}` : ""}`}
        title={v.displayTitle}
        lede={
          v.uploadDate
            ? `Published ${new Date(v.uploadDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}.`
            : undefined
        }
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16">
          {/* Player */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                src={`${v.embedUrl}?title=0&byline=0&portrait=0&color=00c7b7&dnt=1`}
                title={v.displayTitle}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Meta + share */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {v.series && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {v.series}
                </span>
              )}
              <h2 className="mt-2 font-display text-[22px] font-semibold leading-tight md:text-[26px]">
                {v.displayTitle}
              </h2>
              {v.description ? (
                <p className="mt-5 whitespace-pre-line text-[14.5px] leading-relaxed text-ink-2">
                  {v.description}
                </p>
              ) : (
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-3">
                  On-demand session from the Ingeniux / DiscoverCX video library.
                  Watch the full conversation above.
                </p>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-line bg-bg-card p-6 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                  Details
                </p>
                <dl className="mt-3 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Series</dt>
                    <dd className="text-ink">{v.series || v.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Runtime</dt>
                    <dd className="text-ink">{v.durationLabel || "—"}</dd>
                  </div>
                  {v.uploadDate && (
                    <div className="flex justify-between">
                      <dt className="text-ink-3">Published</dt>
                      <dd className="text-ink">
                        {new Date(v.uploadDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Source</dt>
                    <dd>
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-2 underline hover:text-accent"
                      >
                        Vimeo ↗
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-5 rounded-2xl border border-line bg-bg-card p-6 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                  Next step
                </p>
                <h3 className="mt-3 font-display text-[16px] font-semibold leading-tight">
                  Talk to a solution architect.
                </h3>
                <p className="mt-2 text-[12.5px] text-ink-3">
                  30 minutes, your content, your roadmap.
                </p>
                <Link
                  href="/demo"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-ink px-3.5 py-2 text-[13px] font-medium text-bg hover:opacity-90"
                >
                  Request a demo
                </Link>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20 border-t border-line pt-12">
              <div className="flex items-end justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-3">
                  More from {v.category}
                </h3>
                <Link
                  href="/resources/videos"
                  className="text-[12px] text-accent-2 hover:text-accent"
                >
                  Browse all →
                </Link>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/resources/videos/${r.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elev">
                      {r.thumbnail && (
                        <Image
                          src={r.thumbnail}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 280px, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      )}
                      {r.durationLabel && (
                        <span className="absolute bottom-2 right-2 rounded-md bg-black/65 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                          {r.durationLabel}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-[13.5px] font-semibold leading-snug group-hover:text-accent-2">
                        {r.displayTitle}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalCTA
        title="See it run on your content."
        lede="Bring a snippet, a workflow, or a real authoring challenge — we'll show you how DCX handles it in 30 minutes."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Browse all videos", href: "/resources/videos" }}
      />
    </>
  );
}
