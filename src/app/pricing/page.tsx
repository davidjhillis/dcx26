import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, FAQList, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing & Packages — Build Your Success Stack",
  description:
    "DiscoverCX is an enterprise content delivery platform. Build your stack from three modular products — Discover CCMS, Discover Portal, and Headless API — across four configurable packages. Get a quote.",
};

// --- Three platform products (modular building blocks) ---
const products = [
  {
    name: "Discover CCMS",
    pitch:
      "Power content operations. Empower SMEs and authors. Improve quality, reduce errors, and increase productivity.",
    features: [
      "Structured content authoring",
      "AI writing assistant",
      "DITA, HTML, DocBook, Markdown",
      "Workflows and reviews",
      "Version control",
      "Multichannel publishing",
      "Localization automation",
      "Content Publishing Pipeline",
    ],
  },
  {
    name: "Discover Portal",
    pitch:
      "Self-service portal platform. Personalize experiences with granular permissions. Create a unified source of truth.",
    addOn: true,
    features: [
      "SSO and user management",
      "No-code template design",
      "Integrated ticketing and cases",
      "Ticket deflection",
      "Knowledge base",
      "Glossary and help widget",
      "Granular permissions and security",
      "Bi-directional CRM sync",
    ],
  },
  {
    name: "Headless API",
    pitch:
      "Aggregate, transform, and deliver any content format through a powerful Content-as-a-Service API.",
    addOn: true,
    features: [
      "JSON API",
      "Enterprise publishing workflows",
      "Dynamic content delivery",
      "Content transformation",
      "High-availability cloud service",
      "Integration with third-party apps",
      "Support any platform or device",
      "Content localization delivery",
    ],
  },
];

// --- Four packages (the real DCX packaging) ---
const packages = [
  {
    name: "All-in-One",
    composition: "CCMS + Portal",
    blurb:
      "Combines CCMS and Portal — a seamless content management and customer engagement experience.",
    bestFor:
      "Teams replacing a help authoring tool plus a separate portal with one platform.",
    includes: ["Discover CCMS", "Discover Portal", "Standard integrations", "24×7 critical-care support"],
    featured: true,
  },
  {
    name: "Enterprise Portal Package",
    composition: "Portal + Aggregation",
    blurb:
      "Our enterprise portal and customer experience platform. Bring your own content with aggregation services and connectors to leading CCMS apps.",
    bestFor:
      "Teams that already own a CCMS or want to consolidate multiple content sources into one customer portal.",
    includes: ["Discover Portal", "Content aggregation services", "Connectors to leading CCMS apps", "24×7 critical-care support"],
  },
  {
    name: "CCMS + Headless Delivery",
    composition: "CCMS + Headless API",
    blurb:
      "Streamline management and distribute your content seamlessly across all channels and platforms.",
    bestFor:
      "Teams building their own front ends, in-product help, or AI integrations from a structured source of truth.",
    includes: ["Discover CCMS", "Headless API", "Standard integrations", "24×7 critical-care support"],
  },
  {
    name: "Headless CMS",
    composition: "Headless API",
    blurb:
      "Experience the future of content management with our Headless CMS package. Empower seamless content delivery across all channels and devices.",
    bestFor:
      "Teams that need structured content delivery without a customer-facing portal layer.",
    includes: ["Headless API", "Content modeling", "Multichannel delivery", "24×7 critical-care support"],
  },
];

// --- Services ---
const services = [
  "Dedicated Project Manager",
  "Business analysis and definition",
  "Design, development, and testing",
  "Content migration and launch",
  "Support and SaaS deployment",
  "24×7 critical care",
  "Full web operations",
];

const faqs = [
  {
    q: "How is DiscoverCX priced?",
    a: "DiscoverCX is an enterprise SaaS platform with annual contracts sized to your authoring team, your delivery volume, and the package you select. We don't publish per-seat list prices because customer configurations vary widely — a small docs team running CCMS + Headless looks very different from an enterprise running the All-in-One package with global rollout services. Talk to us and we'll provide a line-item proposal.",
  },
  {
    q: "Can I start with one product and add others later?",
    a: "Yes. The three products — Discover CCMS, Discover Portal, and Headless API — are designed to be added incrementally. Customers commonly start with CCMS + Headless and add Portal in a later phase, or start with Portal + content aggregation and add CCMS once they consolidate authoring.",
  },
  {
    q: "What's included in implementation services?",
    a: "Every engagement includes a dedicated project manager, business analysis, design and development, testing, content migration, and launch support. Ongoing operations include 24×7 critical-care support and SaaS deployment management.",
  },
  {
    q: "Can we migrate from MadCap, Paligo, Heretto, or another CCMS?",
    a: "Yes. Migration is part of the implementation services on Business and Enterprise engagements. We provide tooling and a dedicated migration engineer to move existing DITA, Flare projects, or proprietary CCMS content into Discover CX without fidelity loss.",
  },
  {
    q: "Is DiscoverCX SOC 2 compliant?",
    a: "Yes. The Discover CX portal is SOC 2 certified, with secure storage, continuous monitoring, and privacy compliance. SOC 2 reports are available on request under NDA.",
  },
  {
    q: "How do I get a quote?",
    a: "Request a demo or contact sales — a solution architect will scope your project (users, content volume, integrations, package mix) and respond with a written proposal, typically within a few business days.",
  },
];

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
                      <span className="mt-1 text-accent-blue-2">→</span>
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
                    ? "border-[color:var(--accent-blue)]/40 bg-gradient-to-b from-[color:var(--accent-blue-dim)] to-bg-card"
                    : "border-line bg-bg-card"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-2.5 left-8 rounded-full bg-accent-blue px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white">
                    Most common
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-blue-2">
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
                      <span className="mt-1 text-accent-blue-2">→</span>
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
