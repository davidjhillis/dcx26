import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { assets, type Asset } from "./_data";

export const metadata: Metadata = {
  title: "Literature & datasheets — DiscoverCX",
  description:
    "Datasheets, reference architectures, security overviews, and buyer's guides for DiscoverCX — CCMS, CDP, and AI. PDFs ready for your buying committee.",
};

const groupOrder: Asset["product"][] = ["Platform", "CCMS", "CDP", "AI", "Trust"];

const grouped = groupOrder
  .map((p) => ({ product: p, items: assets.filter((a) => a.product === p) }))
  .filter((g) => g.items.length > 0);

const groupLabel: Record<Asset["product"], string> = {
  Platform: "Platform",
  CCMS: "Discover CCMS",
  CDP: "Discover CDP",
  AI: "Discover AI",
  Trust: "Trust & security",
};

const kindIcon = (kind: Asset["kind"]) => {
  // simple inline SVG glyphs by kind
  switch (kind) {
    case "Datasheet":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "Reference architecture":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="4" width="6" height="6" rx="1" />
          <rect x="15" y="4" width="6" height="6" rx="1" />
          <rect x="9" y="14" width="6" height="6" rx="1" />
          <path d="M6 10v2h12v-2M12 14v-2" />
        </svg>
      );
    case "Security overview":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        </svg>
      );
    case "Buyer's guide":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
          <path d="M4 4h10a4 4 0 014 4v12H8a4 4 0 01-4-4V4z" />
          <path d="M4 16a4 4 0 014-4h10" />
        </svg>
      );
    case "Technical brief":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
          <path d="M6 3h9l5 5v13H6z" />
          <path d="M15 3v5h5" />
        </svg>
      );
  }
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: assets.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: a.title,
      description: a.desc,
      url: `https://discovercx.com/resources/literature#${a.slug}`,
    },
  })),
};

export default function LiteraturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Literature & datasheets"
        title={
          <>
            One-pagers for the
            <br />
            <span className="text-ink-3">buying committee.</span>
          </>
        }
        lede="Datasheets, reference architectures, security overviews, and buyer's guides. Send a PDF in two clicks — no demo required."
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
          {grouped.map((g, gi) => (
            <div
              key={g.product}
              className={gi > 0 ? "mt-20 border-t border-line pt-16" : ""}
            >
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    {g.product === "Trust" ? "Trust" : "Product"}
                  </p>
                  <h2 className="headline mt-2 text-[26px] md:text-[32px]">
                    {groupLabel[g.product]}
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                  {g.items.length} doc{g.items.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {g.items.map((a) => (
                  <article
                    key={a.slug}
                    id={a.slug}
                    className="elev-card rounded-2xl p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg-elev">
                          {kindIcon(a.kind)}
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-3">
                            {a.kind}
                          </p>
                          <h3 className="mt-1 font-display text-[17px] font-semibold leading-tight">
                            {a.title}
                          </h3>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-md border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                        {a.pages}p · PDF
                      </span>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-ink-2">
                      {a.desc}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-[13px] leading-snug text-ink-2"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <Link
                        href={`/contact?reason=literature&doc=${a.slug}`}
                        className="text-[13px] font-medium text-accent-2 hover:text-accent"
                      >
                        Get the PDF →
                      </Link>
                      <Link
                        href={`/contact?reason=brief&doc=${a.slug}`}
                        className="text-[12px] text-ink-3 hover:text-ink"
                      >
                        Talk to an SE
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Need a custom brief?"
        lede="If you have a specific architecture review or security questionnaire, our team can prepare a tailored response — usually within 48 hours."
        primary={{ label: "Request a custom brief", href: "/contact?reason=brief" }}
        secondary={{ label: "Request a demo", href: "/demo" }}
      />
    </>
  );
}
