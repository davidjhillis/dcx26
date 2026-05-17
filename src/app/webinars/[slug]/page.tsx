import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA, PageHero } from "@/components/ui";
import { getWebinar, webinars } from "../_data";

type Params = { slug: string };

export function generateStaticParams() {
  return webinars.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) return {};
  return {
    title: `${w.title} — ${w.speaker} — DiscoverCX`,
    description: w.summary,
  };
}

export default async function WebinarDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) notFound();

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: w.title,
    description: w.summary,
    duration: `PT${parseInt(w.duration)}M`,
    url: `https://discovercx.com/webinars/${w.slug}`,
    creator: { "@type": "Person", name: w.speaker, jobTitle: w.speakerTitle },
  };

  const others = webinars.filter((x) => x.slug !== w.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={`${w.series} · ${w.topic} · ${w.duration}`}
        title={w.title}
        lede={`With ${w.speaker} — ${w.speakerTitle}.`}
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1100px] px-6 py-16 lg:px-10 lg:py-24">
          {/* Player placeholder */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_70%)]" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative aspect-[16/9] w-full">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-bg/60 backdrop-blur">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-[1px] fill-accent-2" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[13px] text-ink-3">
                  Request access to watch — sent to your inbox.
                </p>
                <Link
                  href={`/contact?reason=webinar&w=${w.slug}`}
                  className="rounded-md bg-ink px-4 py-2 text-[13px] font-medium text-bg hover:opacity-90"
                >
                  Get the recording
                </Link>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <p className="eyebrow">About this session</p>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-2">
                  {w.summary}
                </p>
              </div>
              <div>
                <p className="eyebrow">What you&apos;ll take away</p>
                <ul className="mt-4 space-y-3">
                  {w.takeaways.map((t) => (
                    <li
                      key={t}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-ink"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {w.related && w.related.length > 0 && (
                <div>
                  <p className="eyebrow">Related</p>
                  <ul className="mt-4 space-y-2">
                    {w.related.map((r) => (
                      <li key={r}>
                        <Link
                          href={r}
                          className="text-[14px] text-accent-2 underline hover:text-accent"
                        >
                          {r} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-line bg-bg-card p-6 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                  Speaker
                </p>
                <h3 className="mt-3 font-display text-[18px] font-semibold">
                  {w.speaker}
                </h3>
                <p className="mt-1 text-[12px] text-ink-3">{w.speakerTitle}</p>
              </div>
              <div className="mt-5 rounded-2xl border border-line bg-bg-card p-6 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                  Session
                </p>
                <dl className="mt-3 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Format</dt>
                    <dd className="text-ink">{w.series}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Topic</dt>
                    <dd className="text-ink">{w.topic}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-3">Runtime</dt>
                    <dd className="text-ink">{w.duration}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>

          {/* Other sessions */}
          <div className="mt-20 border-t border-line pt-12">
            <p className="eyebrow">Other sessions</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/webinars/${o.slug}`}
                  className="group elev-card rounded-xl p-5 transition-colors hover:border-line-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    {o.topic}
                  </span>
                  <h4 className="mt-2 font-display text-[15px] font-semibold leading-tight group-hover:text-accent-2">
                    {o.title}
                  </h4>
                  <p className="mt-2 text-[12px] text-ink-3">
                    {o.speaker} · {o.duration}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Talk to the team that built this."
        lede="A 30-minute working session with a solution architect — your content, your stack, your roadmap."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Browse all sessions", href: "/webinars" }}
      />
    </>
  );
}
