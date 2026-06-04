import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, FAQList, FinalCTA, PageHero } from "@/components/ui";
import { mdAlternateFor } from "@/lib/md-alternate";
import {
  pricingMeta,
  pricingProducts as products,
  pricingPackages as packages,
  pricingServices as services,
  pricingFaqs as faqs,
} from "@/lib/page-content/pricing";

export const metadata: Metadata = {
  title: pricingMeta.title,
  description: pricingMeta.description,
  alternates: mdAlternateFor("/pricing"),
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Packages"
        title={
          <>
            Build your success stack
            <br />
            <span className="text-ink-3">with DiscoverCX.</span>
          </>
        }
        lede="DiscoverCX gives you the modular building blocks for outstanding customer experience — Discover CCMS, Discover Portal, and a Headless API. Go all-in-one or compose your stack. Enterprise pricing, scoped to your needs."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* THREE PLATFORM PRODUCTS */}
      <section className="border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow">The platform — three products</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Compose your platform from three building blocks.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Each product stands alone or combines with the others. Most customers
            start with one and add capability over time. Packages below pre-bundle
            the most common combinations.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-line bg-bg-card p-8 elev-card"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
                  {p.addOn && (
                    <span className="rounded-md border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                      Add-on
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{p.pitch}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[13px] text-ink-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-2">→</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact?reason=pricing"
                  variant="secondary"
                  className="mt-7 w-full"
                >
                  Get a quote
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PACKAGES */}
      <section className="border-b border-line bg-bg-2">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow">Discover packages</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Go all-in-one or opt for best-of-breed. The choice is yours.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-8 ${
                  pkg.featured
                    ? "border-[color:var(--accent)]/40 bg-gradient-to-b from-[color:rgba(0,199,183,0.10)] to-bg-card"
                    : "border-line bg-bg-card"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-2.5 left-8 rounded-full bg-accent px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white">
                    Most common
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                  {pkg.composition}
                </p>
                <h3 className="mt-3 font-display text-[24px] font-semibold">{pkg.name}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{pkg.blurb}</p>
                <p className="mt-5 text-[13px] text-ink-3">
                  <span className="text-ink-2 font-medium">Best for:</span> {pkg.bestFor}
                </p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[13px] text-ink-2">
                  {pkg.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-2">→</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex gap-3">
                  <ButtonLink href="/contact?reason=pricing" className="flex-1">
                    Get a quote
                  </ButtonLink>
                  <ButtonLink href="/demo" variant="secondary" className="flex-1">
                    Request demo
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Services</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Build a help site customers love.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Every engagement is led by a dedicated project manager and a
                senior solution architect — from analysis and design through
                migration, launch, and ongoing operations.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact?reason=pricing">
                  Get a price quote
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 md:grid-cols-2">
                {services.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-bg-card p-4 text-[14px] text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQList items={faqs} />

      <FinalCTA
        title="Talk to a solution architect."
        lede="Tell us about your content, your channels, and your team — we'll scope the right package and respond with a written proposal."
        primary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
        secondary={{ label: "Request a demo", href: "/demo" }}
      />
    </>
  );
}
