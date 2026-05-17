import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { webinars } from "./_data";

export const metadata: Metadata = {
  title: "Webinars & talks — DiscoverCX",
  description:
    "On-demand webinars and conference talks on structured authoring, localization, AI grounding, migration, and CCMS buyer enablement.",
};

const topics = Array.from(new Set(webinars.map((w) => w.topic)));

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: webinars.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoObject",
      name: w.title,
      description: w.summary,
      duration: `PT${parseInt(w.duration)}M`,
      url: `https://discovercx.com/webinars/${w.slug}`,
    },
  })),
};

export default function WebinarsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Webinars & talks"
        title={
          <>
            On-demand sessions
            <br />
            <span className="text-ink-3">from the people building this.</span>
          </>
        }
        lede="Structured authoring, localization, headless architecture, AI grounding, migration playbooks. Real working sessions — no fluff, no gated nonsense."
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-center gap-2 text-[12px]">
            <span className="font-mono uppercase tracking-widest text-ink-4">
              Topics
            </span>
            {topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-bg-card px-3 py-1 text-ink-2"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {webinars.map((w) => (
              <Link
                key={w.slug}
                href={`/webinars/${w.slug}`}
                className="group elev-card flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-line-2"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elev">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_65%)]" />
                  <div className="absolute inset-0 grid-bg opacity-25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-bg/60 backdrop-blur transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 translate-x-[1px] fill-accent-2"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                    {w.duration}
                  </div>
                  <div className="absolute top-3 left-3 rounded-md border border-line bg-bg/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-2 backdrop-blur">
                    {w.series}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    {w.topic}
                  </span>
                  <h3 className="mt-2 font-display text-[19px] font-semibold leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-2">
                    {w.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <div>
                      <div className="text-[13px] font-medium text-ink">
                        {w.speaker}
                      </div>
                      <div className="text-[11px] text-ink-3">{w.speakerTitle}</div>
                    </div>
                    <span className="text-[12px] text-accent-2 transition-colors group-hover:text-accent">
                      Watch →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Want to go deeper?"
        lede="Book a working session with a solution architect — bring your content, your stack, your constraints. We'll bring the runbook."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Download the RFP template", href: "/resources/ccms-rfp-template" }}
      />
    </>
  );
}
