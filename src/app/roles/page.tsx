import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/ui";
import { RoleIcon } from "@/components/role-icons";
import { roles } from "./_data";

export const metadata: Metadata = {
  title: "Designed for — Discover CX by Role",
  description:
    "DiscoverCX is built for the people who write, ship, support, and lead with product knowledge. Documentation teams, CIOs, field service, customer support, product engineering, and senior leadership — pages tailored to your work.",
};

export default function RolesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Designed for"
        title={
          <>
            Built for the people
            <br />
            <span className="text-ink-3">who run on product knowledge.</span>
          </>
        }
        lede="DiscoverCX is one platform — but it shows up differently for a writer, a CIO, a service tech, and a CFO. Pick the page that fits your work."
      />

      <section className="border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <Link
                key={r.slug}
                href={`/roles/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-bg-card p-7 transition-colors hover:border-line-2 elev-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--accent)]/30 bg-bg-elev text-accent-2">
                  <RoleIcon name={r.iconKey} className="h-6 w-6" />
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {r.tagline}
                </p>
                <h2 className="mt-2 font-display text-[20px] font-semibold leading-tight group-hover:text-accent-2">
                  {r.name}
                </h2>
                <p
                  className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-2"
                  dangerouslySetInnerHTML={{ __html: r.summary }}
                />
                <p className="mt-5 text-[13px] text-accent-2 group-hover:text-accent">
                  See the page →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="See it on your work in 30 minutes."
        lede="A solution architect walks the platform for your team — your content, your stack, your roadmap."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "See the platform", href: "/platform" }}
      />
    </>
  );
}
