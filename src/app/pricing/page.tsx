import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, FAQList, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing — Simple, Per-Seat + Usage",
  description:
    "DiscoverCX pricing: transparent per-seat author licenses, usage-based delivery, and an Enterprise tier with portal, SSO, SOC 2, and 24×7 support.",
};

const tiers = [
  {
    name: "Team",
    tag: "For docs teams getting started with structured content",
    price: "$1,400",
    unit: "/ month",
    blurb: "Up to 5 authors. Headless API + hosted docs site. Public content only.",
    cta: { label: "Start free trial", href: "/demo?plan=team" },
    features: [
      "5 author seats included",
      "DITA + Markdown authoring",
      "Headless delivery API",
      "Hosted docs site (subdomain)",
      "Up to 50K API calls / mo",
      "1 language",
      "Community support",
    ],
  },
  {
    name: "Business",
    tag: "Most popular — for content teams shipping at scale",
    price: "$4,800",
    unit: "/ month",
    featured: true,
    blurb:
      "Up to 25 authors. Custom domain, multilingual, Salesforce sync, role-based access.",
    cta: { label: "Talk to sales", href: "/demo?plan=business" },
    features: [
      "25 author seats included",
      "Everything in Team, plus:",
      "Custom domain + SSL",
      "Multilingual workflows + TMS",
      "Salesforce Knowledge sync",
      "Role-based access control",
      "500K API calls / mo",
      "Email + chat support",
    ],
  },
  {
    name: "Enterprise",
    tag: "For regulated industries and Fortune 500 deployments",
    price: "Custom",
    unit: "",
    blurb:
      "Unlimited authors, customer portal, SOC 2, SSO/SAML, 24×7 critical-care, dedicated CSM.",
    cta: { label: "Get a quote", href: "/contact?plan=enterprise" },
    features: [
      "Unlimited author seats",
      "Everything in Business, plus:",
      "Customer-facing portal",
      "SOC 2 Type II + SAML / OIDC / SCIM",
      "Custom data residency",
      "Unlimited API calls",
      "24×7 critical-care support",
      "Dedicated solution architect",
      "Onboarding + migration services",
    ],
  },
];

const matrix: { feature: string; team: string | boolean; biz: string | boolean; ent: string | boolean }[] = [
  { feature: "Author seats", team: "5", biz: "25", ent: "Unlimited" },
  { feature: "DITA + Markdown authoring", team: true, biz: true, ent: true },
  { feature: "Headless delivery API", team: true, biz: true, ent: true },
  { feature: "Hosted docs site", team: true, biz: true, ent: true },
  { feature: "Custom domain", team: false, biz: true, ent: true },
  { feature: "Multilingual / TMS round-trip", team: false, biz: true, ent: true },
  { feature: "Salesforce Knowledge sync", team: false, biz: true, ent: true },
  { feature: "Customer-facing portal", team: false, biz: false, ent: true },
  { feature: "SOC 2 Type II", team: false, biz: false, ent: true },
  { feature: "SAML / OIDC / SCIM SSO", team: false, biz: false, ent: true },
  { feature: "API calls / month", team: "50K", biz: "500K", ent: "Unlimited" },
  { feature: "Support", team: "Community", biz: "Email + chat", ent: "24×7 critical-care" },
];

const faqs = [
  {
    q: "How do you count author seats?",
    a: "An author seat is anyone who creates, edits, or approves content in the repository. Reviewers with view-only access don't count. Salesforce agents reading published content don't count. Need help sizing? Talk to sales.",
  },
  {
    q: "What counts as an API call?",
    a: "Each topic/asset GET counts as one call. PUTs and PATCHes are free. Webhooks are free. Page-level requests to your hosted docs site or portal are not metered — only the underlying API calls your apps make. Most customers comfortably stay under their plan tier.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — the Team tier offers a 14-day free trial with no credit card required. For Business and Enterprise we run a guided 30-day proof of concept with your real content.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise is a custom annual contract priced on author seats, API volume, and the support tier you need. Most Enterprise deals land between $80K–$300K ARR depending on scope. We provide line-item proposals — no opaque packaging.",
  },
  {
    q: "Can we migrate from MadCap, Paligo, or Heretto?",
    a: "Yes. Migration is included with Business and Enterprise. We provide tooling and a dedicated migration engineer to move your existing DITA, Flare, or proprietary content into DiscoverCX with no fidelity loss. Typical migrations run 4–8 weeks.",
  },
  {
    q: "Do you offer multi-year discounts?",
    a: "Yes. 2-year contracts include 10% off, 3-year include 18%. Enterprise customers can negotiate custom terms including ramp pricing for phased rollouts.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "DiscoverCX",
  description: "Headless CCMS + content delivery platform with three pricing tiers.",
  offers: [
    { "@type": "Offer", name: "Team", price: "1400", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", price: "1400", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Business", price: "4800", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", price: "4800", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Enterprise", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", price: "0", description: "Custom pricing" } },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple pricing.
            <br />
            <span className="text-ink-3">Per-seat + usage. No surprises.</span>
          </>
        }
        lede="Author seats are predictable. Delivery is metered. Enterprise adds the customer portal, SOC 2, and 24×7 support. No hidden modules, no per-page taxes, no annual price hikes."
      />

      <section className="border-b border-line bg-bg">
        <div className="mx-auto max-w-[1480px] px-8 lg:px-12 py-16 md:py-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 ${
                  t.featured
                    ? "border-[color:var(--accent-blue)]/40 bg-gradient-to-b from-[color:var(--accent-blue-dim)] to-bg-card"
                    : "border-line bg-bg-card"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-2.5 left-8 rounded-full bg-accent-blue px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-[22px] font-semibold">{t.name}</h3>
                <p className="mt-1 text-[12px] text-ink-3">{t.tag}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="headline text-[40px]">{t.price}</span>
                  <span className="text-[14px] text-ink-3">{t.unit}</span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{t.blurb}</p>
                <ButtonLink
                  href={t.cta.href}
                  variant={t.featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {t.cta.label}
                </ButtonLink>
                <ul className="mt-7 space-y-2.5 border-t border-line pt-6 text-[13px] text-ink-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-blue-2">→</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-bg-2">
        <div className="mx-auto max-w-[1480px] px-8 lg:px-12 py-20">
          <p className="eyebrow">Compare plans</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">Every feature, by tier.</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">Team</th>
                  <th className="px-4 py-3 font-medium text-accent-blue-2">Business</th>
                  <th className="px-4 py-3 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {matrix.map((row, i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="px-4 py-3 text-ink">{row.feature}</td>
                    {[row.team, row.biz, row.ent].map((v, j) => (
                      <td key={j} className="px-4 py-3">
                        {typeof v === "boolean" ? (
                          v ? <span className="text-accent">●</span> : <span className="text-ink-4">—</span>
                        ) : (
                          <span className="font-mono text-[12px] text-ink">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12px] text-ink-4">
            Need help sizing? <Link href="/contact" className="text-accent-blue-2 underline">Talk to sales →</Link>
          </p>
        </div>
      </section>

      <FAQList items={faqs} />
      <FinalCTA
        title="Try it on your content."
        lede="A 30-day proof of concept on your real DITA, Markdown, or legacy CCMS export. Zero migration risk."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
