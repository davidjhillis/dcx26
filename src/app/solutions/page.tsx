import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { solutions } from "./_data";

export const metadata: Metadata = {
  title: "Solutions — Use Cases for the DiscoverCX Platform",
  description:
    "Technical documentation, AI training, Salesforce Knowledge, policies & SOPs, eLearning, and customer portals — all powered by one structured content platform.",
};

export default function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One platform.
            <br />
            <span className="text-ink-3">Six teams that ship content as a product.</span>
          </>
        }
        lede="Same repository. Same delivery API. Six different teams, six different surfaces — all from one source of truth."
      />

      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group elev-card flex flex-col rounded-2xl p-7 transition-colors hover:border-line-3"
              >
                <p className="eyebrow">{s.audience.split(",")[0]}</p>
                <h2 className="mt-3 font-display text-[22px] font-semibold tracking-tight group-hover:text-accent-blue-2">
                  {s.name}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{s.lede}</p>
                <ul className="mt-5 space-y-1.5 text-[12px] text-ink-3">
                  {s.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-blue-2">→</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[12px] text-ink-3 group-hover:text-ink-2">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Not sure which fits?"
        lede="Talk to a solution architect — we'll map your stack and outcomes to the right configuration in 20 minutes."
        primary={{ label: "Talk to sales", href: "/contact" }}
        secondary={{ label: "Request a demo", href: "/demo" }}
      />
    </>
  );
}
