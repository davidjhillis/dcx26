import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover CDP — Content Delivery Platform for Doc & Customer Portals",
  description:
    "Discover CDP unifies headless delivery with branded doc and customer portals. Federated search, personalization, case management, community. Compete-class to Fluid Topics and Zoomin Software.",
};

const portals = [
  {
    h: "Documentation portal",
    p: "Branded, structured, multi-product. Federated search across all your DITA, Markdown, and HTML content. Locale-aware. Versioned. Customer-grade.",
    bullets: [
      "Multi-product, multi-version content hub",
      "Federated, faceted, typo-tolerant search",
      "Topic-level analytics and gap reporting",
      "Custom domain, brand control, design tokens",
    ],
  },
  {
    h: "Customer experience portal",
    p: "Self-service experiences with ticketing, knowledge base, community, and personalized content. Integrated with your CRM, service desk, and SSO.",
    bullets: [
      "Salesforce / ServiceNow / Atlassian / Zendesk case integration",
      "Role-, plan-, product-, locale-based personalization",
      "Forums, Q&A, badges (optional community)",
      "Bi-directional CRM sync, SSO via SAML / OIDC / SCIM",
    ],
  },
];

const capabilities = [
  { h: "Headless delivery API", p: "REST + GraphQL + webhooks. OAS 3.1 schemas. TypeScript SDK. Powers portals, in-product help, AI, mobile." },
  { h: "Real-time publishing", p: "Publish a topic → live in the API in seconds. No rebuilds, no static caches to purge, no nightly batch." },
  { h: "Federated search", p: "Across documentation, knowledge, forums, uploaded files. Faceted, guided, typo-tolerant, locale-aware." },
  { h: "Personalization", p: "Content adapts by role, plan, product, locale, industry — without forcing the user to filter." },
  { h: "Case management", p: "Native widgets for Salesforce Service Cloud, ServiceNow, Atlassian, and Zendesk. Bi-directional sync." },
  { h: "Community", p: "Forums, Q&A, expert badges. Integrated with SSO. Moderation and reputation built in." },
  { h: "Analytics + AI insights", p: "Topic engagement, deflection rate, search gap reports feed back to the docs team — and to AI Data Operations." },
  { h: "Brand control", p: "Full theming via design tokens. Custom domain, white-label. Your portal, your brand, native experience." },
];

const vsFluid = [
  { feature: "Doc portal capability", us: "Native + branded", fluid: "Yes (core)", zoomin: "Yes (core)" },
  { feature: "Customer experience portal", us: "Yes — same platform", fluid: "Limited", zoomin: "Limited" },
  { feature: "Underlying CCMS", us: "Discover CCMS (native)", fluid: "Bring your own", zoomin: "Bring your own" },
  { feature: "Case mgmt (Salesforce / SNow / Atlassian)", us: "Native widgets, bi-directional", fluid: "Add-on / custom", zoomin: "Add-on / custom" },
  { feature: "Community / forums", us: "Native", fluid: "No", zoomin: "No" },
  { feature: "Headless delivery API", us: "REST + GraphQL + webhooks", fluid: "REST", zoomin: "REST" },
  { feature: "Locale fan-out", us: "Built-in, source of truth", fluid: "Yes", zoomin: "Yes" },
  { feature: "AI Data Operations", us: "BYOK vector DB included", fluid: "Roadmap", zoomin: "Partner integrations" },
  { feature: "SOC 2 Type II", us: "Yes", fluid: "Yes", zoomin: "Yes" },
];

const faqs = [
  {
    q: "What's the difference between a doc portal and a customer experience portal?",
    a: "A doc portal serves structured documentation: a multi-product, multi-version, multi-locale browsing surface optimized for finding and reading technical content. A customer experience portal is a fuller self-service experience: doc + community + cases + personalized knowledge + identity. Discover CDP can launch either, or both — most enterprise customers deploy both with shared content.",
  },
  {
    q: "How does this compare to Fluid Topics?",
    a: "Fluid Topics specializes in unifying multi-source documentation into a single doc portal — strong if you have many existing CCMS / Confluence / SharePoint sources you can't replace. Discover CDP wins when you want documentation, case management, community, and personalized customer experiences in one platform, with the option to source content from Discover CCMS natively rather than bolt content sources together.",
  },
  {
    q: "How does this compare to Zoomin Software?",
    a: "Zoomin is a strong doc portal aggregator with good Salesforce integration. Discover CDP overlaps on the doc-portal side and adds the full customer experience portal (cases, community, personalization), native Discover CCMS authoring, and the AI Data Operations layer (vector DB, BYOK). Customers shopping Zoomin should evaluate DCX when they need more than documentation in one portal.",
  },
  {
    q: "Can we use Discover CDP with our existing CCMS?",
    a: "Yes. Content aggregation and connectors to leading CCMS apps are part of the Enterprise Portal package. You bring your authoring source (Heretto, Paligo, MadCap, IXIASOFT, Confluence) and Discover CDP becomes the unified delivery and experience layer.",
  },
  {
    q: "What about AI grounding from the portal?",
    a: "Discover CDP works directly with Discover AI Data Operations — content delivered through the portal can simultaneously feed a BYOK vector database for AI grounding. Same source, two consumers: humans through the portal, models through the API.",
  },
  {
    q: "How long does a portal launch take?",
    a: "Typical launch is 4–8 weeks: ~1 week design and theming, 2–3 weeks content migration and integrations, 1–2 weeks UAT and soft launch. Full Enterprise deployments with custom workflows and complex IA take longer.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover CDP",
  description:
    "Content Delivery Platform combining a headless delivery API with branded documentation and customer experience portals.",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "Content Delivery Platform",
};

export default function CdpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Product · Discover CDP"
        title={
          <>
            The Content Delivery Platform that ships both portals.
          </>
        }
        lede="Discover CDP unifies a real-time headless delivery API with branded documentation and customer experience portals — federated search, personalization, case management, community. Same platform, two destinations."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* HERO IMAGE */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="pt-12 pb-4 lg:pt-16">
          <HumanImage
            src="/humans/standup-whiteboard.jpg"
            alt="A team mapping a customer portal's information architecture"
            priority
          />
        </Container>
      </section>

      {/* TWO PORTALS */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">Two portals, one platform</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Pick the destination. Or ship both.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Some teams launch a documentation portal first. Some launch a full
            customer experience portal. The platform supports either independently,
            or runs both on top of a shared content repository.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {portals.map((p) => (
              <div
                key={p.h}
                className="rounded-2xl border border-line bg-bg-card p-8 elev-card"
              >
                <h3 className="font-display text-[22px] font-semibold">{p.h}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{p.p}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[13px] text-ink-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-2">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="wide" className="py-20 md:py-28">
          <p className="eyebrow">Capabilities</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Delivery infrastructure + experience layer.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.h}
                className="rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <h3 className="font-display text-[16px] font-semibold">{c.h}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{c.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VS FLUID TOPICS + ZOOMIN */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">Comparing CDP options</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">
            Discover CDP vs. Fluid Topics vs. Zoomin.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Both Fluid Topics and Zoomin are strong doc-portal aggregators.
            Discover CDP overlaps on the documentation side and extends into
            customer experience, community, and AI grounding.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Capability</th>
                  <th className="px-4 py-3 font-medium text-accent-2">Discover CDP</th>
                  <th className="px-4 py-3 font-medium">Fluid Topics</th>
                  <th className="px-4 py-3 font-medium">Zoomin</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {vsFluid.map((row, i) => (
                  <tr key={i} className="border-t border-line align-top">
                    <td className="px-4 py-3 text-ink">{row.feature}</td>
                    <td className="px-4 py-3">{row.us}</td>
                    <td className="px-4 py-3">{row.fluid}</td>
                    <td className="px-4 py-3">{row.zoomin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] text-ink-4">
            Reflects publicly available product documentation as of May 2026.
            Spot an error?{" "}
            <Link href="/contact" className="text-accent-2 underline">Tell us.</Link>
          </p>
        </Container>
      </section>

      <FAQList items={faqs} title="Discover CDP — frequently asked" />

      <FinalCTA
        title="See both portals in 30 minutes."
        lede="A solution engineer walks the documentation portal, the customer experience portal, and the delivery API — using your content and your channels."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />
    </>
  );
}
