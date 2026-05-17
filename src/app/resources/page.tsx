import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources — Guides, Templates & Comparisons for CCMS Buyers",
  description:
    "The CCMS RFP template, buyer's guides, vendor comparisons, and primer guides on headless CCMS, content delivery platforms, DITA, and AEO.",
};

const featured = [
  {
    tag: "Buyer's guide",
    title: "The CCMS RFP Template",
    desc: "78 vendor-evaluation questions used by Fortune 500 procurement teams. Editable .docx.",
    cta: "Download free →",
    href: "/resources/ccms-rfp-template",
    featured: true,
  },
  {
    tag: "Guide",
    title: "What is a CCMS?",
    desc: "The 12-minute primer on component content management — when you need one, when you don't, what to evaluate.",
    cta: "Read guide →",
    href: "/resources/what-is-a-ccms",
  },
  {
    tag: "Guide",
    title: "What is a Content Delivery Platform?",
    desc: "Why CCMS isn't enough anymore — and what the modern CDP layer adds for AI, portals, and Salesforce.",
    cta: "Read guide →",
    href: "/resources/what-is-a-cdp",
  },
];

const categories = [
  {
    title: "Buyer's guides",
    items: [
      { t: "CCMS RFP Template", href: "/resources/ccms-rfp-template" },
      { t: "Customer Portal Buyer's Guide", href: "/resources/portal-buyers-guide" },
      { t: "Migration Planning Checklist", href: "/resources/migration-checklist" },
    ],
  },
  {
    title: "Primer guides",
    items: [
      { t: "What is a CCMS?", href: "/resources/what-is-a-ccms" },
      { t: "What is a CDP?", href: "/resources/what-is-a-cdp" },
      { t: "Headless CCMS, explained", href: "/resources/headless-ccms" },
      { t: "DITA for technical writers", href: "/resources/dita" },
      { t: "AEO: ranking content in AI answers", href: "/resources/aeo" },
    ],
  },
  {
    title: "Vendor comparisons",
    items: [
      { t: "DiscoverCX vs. MadCap Flare", href: "/compare/madcap-flare" },
      { t: "DiscoverCX vs. Paligo", href: "/compare/paligo" },
      { t: "DiscoverCX vs. Heretto", href: "/compare/heretto" },
      { t: "All comparisons", href: "/compare" },
    ],
  },
  {
    title: "Webinars & talks",
    items: [
      { t: "Five Dimensions of Content Standardization — Val Swisher", href: "/webinars/val-swisher" },
      { t: "Multilingual content at scale — José Palomares", href: "/webinars/jose-palomares" },
      { t: "Headless docs — Nathan Eggen", href: "/webinars/nathan-eggen" },
      { t: "All webinars", href: "/webinars" },
    ],
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Buy smart.
            <br />
            <span className="text-ink-3">Migrate without regret.</span>
          </>
        }
        lede="The same RFP template, comparisons, and migration playbooks our Fortune 500 customers use. Free. No gates on anything that's actually useful."
      />

      {/* FEATURED */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={`group flex flex-col rounded-2xl p-8 transition-colors ${
                  r.featured
                    ? "border border-[color:var(--accent)]/40 bg-gradient-to-b from-[color:rgba(0,199,183,0.10)] to-bg-card hover:border-[color:var(--accent)]/60"
                    : "elev-card hover:border-line-3"
                }`}
              >
                <span className="eyebrow">{r.tag}</span>
                <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight">{r.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-2">{r.desc}</p>
                <p className="mt-6 text-[13px] text-accent-2">{r.cta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
                  {c.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {c.items.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className="block text-[14px] font-medium text-ink hover:text-accent-2"
                      >
                        {i.t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
