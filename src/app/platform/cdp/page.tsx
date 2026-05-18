import type { Metadata } from "next";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";
import { CdpTemplates } from "@/components/cdp-templates";

export const metadata: Metadata = {
  title: "Discover CDP — A Digital Experience Platform for content",
  description:
    "Discover CDP is a Digital Experience Platform built for technical content and customer self-service. Visual editing, ready-to-go templates, aggregate any content type, Insight Search (or bring your own), multilingual delivery at scale.",
};

// ────────────────────────────────────────────────────────────────────────────
// The 3-hook pitch
// ────────────────────────────────────────────────────────────────────────────
const pitch = [
  {
    k: "01",
    h: "A real DXP, not a doc portal",
    p: "Branded customer experiences with content, search, cases, community, and personalization — not a documentation aggregator with a logo on top.",
  },
  {
    k: "02",
    h: "Design without a dev ticket",
    p: "Visual editing, drag-and-drop layout, design tokens. Your marketing team ships changes. Your dev team stops fielding portal requests.",
  },
  {
    k: "03",
    h: "Templates → total control",
    p: "Start in days with our ready-to-go template library. Scale to a fully custom portal as your team grows. No re-platforming required.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Aggregation sources — every content type, every source
// ────────────────────────────────────────────────────────────────────────────
const sources = [
  { h: "Discover CCMS", p: "Native. Real-time. Same platform.", tag: "Native" },
  { h: "DITA / Markdown / HTML", p: "Mixed in one portal, single-sourced.", tag: "Format" },
  { h: "Confluence", p: "Live sync with spaces, pages, attachments.", tag: "Aggregator" },
  { h: "SharePoint", p: "Permissions-aware, locale-aware ingestion.", tag: "Aggregator" },
  { h: "Heretto / Paligo / MadCap / IXIASOFT", p: "Connectors live in the platform.", tag: "Other CCMS" },
  { h: "PDFs & assets", p: "Indexed, searchable, governed in one library.", tag: "Files" },
  { h: "Videos & podcasts", p: "Transcript-indexed, deep-linkable.", tag: "Media" },
  { h: "REST / GraphQL", p: "Bring any API as a content source.", tag: "Custom" },
];

// ────────────────────────────────────────────────────────────────────────────
// Authoring + delivery — integrated platform
// ────────────────────────────────────────────────────────────────────────────
const integrated = [
  {
    h: "Authoring + delivery, one platform",
    p: "Writers in Discover CCMS, content live in the portal in seconds. No publishing batch, no rebuild gap, no separate CMS.",
  },
  {
    h: "SME review, in context",
    p: "Subject-matter experts review and approve content where it actually appears — on the portal page, in the topic, with the right surrounding context.",
  },
  {
    h: "Workflows + versioning",
    p: "Custom states, scheduled publishing, branch-per-release, full audit. The portal respects the same governance as the source.",
  },
  {
    h: "Taxonomy that travels",
    p: "Product, version, audience, locale — typed metadata flows from authoring into faceted search, personalization, and analytics.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Search options
// ────────────────────────────────────────────────────────────────────────────
const searchOptions = [
  {
    h: "Insight Search Application",
    p: "Built in. Federated across every source. Typo-tolerant, locale-aware, faceted, semantic-ranked. Analytics included.",
    pill: "Included",
  },
  {
    h: "Bring your own",
    p: "Coveo, Elastic, Algolia, Lucidworks, or your in-house relevance engine. We hand it clean, typed JSON and stay out of the way.",
    pill: "BYO Search",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Integrations — Salesforce + enterprise
// ────────────────────────────────────────────────────────────────────────────
const integrations = [
  {
    h: "Salesforce Service Cloud",
    p: "Native widgets. Bi-directional case sync. Knowledge served from the portal, surfaced in agent and customer flows.",
  },
  {
    h: "Salesforce Experience Cloud",
    p: "Embed the portal inside Experience Cloud. Or pull DCX content into Experience Cloud as a managed package.",
  },
  {
    h: "ServiceNow",
    p: "Case widgets, knowledge sync, identity passthrough. Self-service that ladders into a ticket without context loss.",
  },
  {
    h: "Atlassian & Zendesk",
    p: "JSM, Confluence, Zendesk Guide. Content in the portal, ticket flow in your service stack.",
  },
  {
    h: "Identity & SSO",
    p: "SAML, OIDC, SCIM, MFA. Group-, plan-, and product-based access from your IdP.",
  },
  {
    h: "Webhooks + API",
    p: "Outbound webhooks on every event. REST and GraphQL inbound. Wire to anything else.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How is this different from Fluid Topics?",
    a: "Fluid Topics is a strong documentation aggregator — great if your content is scattered and you can't replace the sources. Discover CDP is a full Digital Experience Platform: it does the aggregation, but also ships visual editing, ready-to-go templates, customer experience features (cases, community, personalization), and a delivery layer that's natively wired to Discover CCMS for authoring and SME review. It's the difference between unifying docs and shipping a customer-grade product.",
  },
  {
    q: "How is this different from Zoomin?",
    a: "Zoomin focuses on doc portal delivery with strong Salesforce integration. Discover CDP overlaps on that surface and extends into the full customer experience: visual editing, cases, community, personalization, native authoring on top of Discover CCMS, and AI grounding via Discover AI. Evaluate DCX when you need more than a doc portal in one platform.",
  },
  {
    q: "Can we keep our existing CCMS?",
    a: "Yes. Aggregation connectors for Heretto, Paligo, MadCap, IXIASOFT, Confluence, SharePoint, and custom sources are part of the Enterprise package. You bring your authoring source and DCX becomes the unified delivery and experience layer. Most enterprise customers eventually consolidate onto Discover CCMS, but it's not a requirement.",
  },
  {
    q: "What's the scale ceiling?",
    a: "Production portals on Discover CDP routinely run with millions of ICUs (Indexed Content Units) across multiple locales, products, and versions. The platform is sized for Fortune 500 catalogs — UKG, Dolby, and Cisco Webex run on this infrastructure.",
  },
  {
    q: "Can we use our own search?",
    a: "Yes. The built-in Insight Search Application is federated, semantic-ranked, and analytics-instrumented out of the box. But if you've standardized on Coveo, Elastic, Algolia, or another engine, DCX exposes clean typed JSON for it to index. Both patterns are first-class.",
  },
  {
    q: "Is it secure enough for regulated industries?",
    a: "SOC 2 Type II. 24×7 critical-care support. Unlimited tech support. RBAC, SAML / OIDC / SCIM, MFA. Encryption in transit and at rest with key management. Data residency options. We support Fortune 500 financial services, healthcare, and manufacturing on this stack.",
  },
  {
    q: "How long does a portal launch take?",
    a: "Template-based launches go live in 4–8 weeks: ~1 week theming, 2–3 weeks content migration and integrations, 1–2 weeks UAT and soft launch. Fully custom builds with bespoke layouts and complex IA take longer. Either path uses the same delivery infrastructure — you can start templated and customize over time.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover CDP",
  description:
    "Digital Experience Platform for technical content and customer self-service. Visual editing, ready-to-go templates, content aggregation, Insight Search, multilingual delivery, Salesforce and enterprise integrations.",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "Digital Experience Platform",
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
            Your docs portal isn&apos;t a destination.
            <br />
            <span className="text-ink-3">It&apos;s a customer experience.</span>
          </>
        }
        lede="Discover CDP is a Digital Experience Platform built for technical content. Visual editing, ready-to-go templates, aggregation from any source, federated search, multilingual delivery, native Salesforce — designed for your team to ship without an IT ticket."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* TRUST BAR — real customer portals */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-12 lg:py-16">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-3">
            Portals shipped on DiscoverCX
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { src: "/info/sites/site-ukg.png", brand: "UKG Community", caption: "Workforce management self-service" },
              { src: "/info/sites/site-dolby.png", brand: "Dolby Professional", caption: "Multi-product technical hub" },
              { src: "/info/sites/site-webexhelp.png", brand: "Cisco Webex Help", caption: "Multi-product help center" },
            ].map((p) => (
              <figure
                key={p.brand}
                className="overflow-hidden rounded-xl border border-line bg-bg-elev"
              >
                <div className="relative">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={`${p.brand} portal built on DiscoverCX`}
                    className="aspect-[16/10] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-3">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink">
                    {p.brand}
                  </div>
                  <div className="mt-1 text-[12px] text-ink-3">{p.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* THE PITCH — 3 hooks */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">What we built</p>
              <h2 className="headline mt-3 text-[28px] md:text-[36px]">
                More than a portal.
                <br />
                <span className="text-ink-3">A platform you steer.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-5 md:grid-cols-3">
              {pitch.map((b) => (
                <div
                  key={b.k}
                  className="rounded-xl border border-line bg-bg-card p-5 elev-card"
                >
                  <span className="font-mono text-[11px] tracking-widest text-accent-2">
                    {b.k}
                  </span>
                  <h3 className="mt-3 font-display text-[16px] font-semibold leading-tight">
                    {b.h}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
                    {b.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 01 — DXP */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">01 · Digital Experience Platform</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Built like a portal.
                <br />
                <span className="text-ink-3">Behaves like a product.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                A doc portal indexes content. A Digital Experience Platform
                ships an experience: branded layouts, personalized paths,
                authenticated self-service, cases, community, conversions.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Discover CDP is the second one. We&apos;re used to losing the
                comparison when buyers just need a doc index. We&apos;re used to
                winning it when buyers need a customer experience.
              </p>
            </div>
            <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
              {[
                "Branded customer experiences",
                "Self-service + cases",
                "Community & forums",
                "Role / plan / locale personalization",
                "Subscriptions & gated content",
                "Authentication + identity",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 rounded-lg border border-line bg-bg-card px-4 py-3 elev-card"
                >
                  <span aria-hidden className="text-accent-2">●</span>
                  <span className="text-[13.5px] text-ink">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Visual editing + Templates */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">02 · Design without a dev ticket</p>
            <h2 className="headline mt-3 text-[32px] md:text-[42px]">
              Visual editing. Live templates.
              <br />
              <span className="text-ink-3">Your team, not your backlog.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
              Drag-and-drop layout. Inline editing on the live page. Design
              tokens for brand fidelity. Marketing makes the change, the
              change ships — engineering never touches it.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-bg-card p-7 elev-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  Templates → custom
                </p>
                <h3 className="mt-3 font-display text-[20px] font-semibold leading-tight">
                  Start fast.
                  <br />
                  <span className="text-ink-3">Scale to fully custom.</span>
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                  Pick a production-ready template (home, topic, search, hub,
                  release notes). Theme it in a week. Or extend it into a
                  bespoke portal as your team grows — same delivery
                  infrastructure underneath, no re-platforming.
                </p>
                <ul className="mt-5 space-y-2.5 text-[13px] text-ink-2">
                  {[
                    "Home, topic, search, hub, release notes, login templates",
                    "Design tokens, theme switcher, brand kit",
                    "Component library with safe extension points",
                    "Full HTML / CSS / JS access when you need it",
                  ].map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <CdpTemplates />
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — Aggregate any content */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">03 · Aggregate any content type</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Every content type.
            <br />
            <span className="text-ink-3">Every source. One delivery layer.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Structured docs, knowledge, files, video, marketing content — all
            unified into one searchable, governed delivery layer. Bring your
            existing CCMS. Bring your file shares. Bring your APIs.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sources.map((s) => (
              <div
                key={s.h}
                className="flex flex-col rounded-xl border border-line bg-bg-card p-5 elev-card"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {s.tag}
                </span>
                <h3 className="mt-2 font-display text-[15px] font-semibold leading-tight">
                  {s.h}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-2">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — Integrated platform: authoring + delivery */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">04 · Authoring + delivery in one platform</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Writers ship to the portal.
            <br />
            <span className="text-ink-3">Not to a queue.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Most CDPs are downstream from your CCMS. Discover CDP is wired into
            it. The authoring surface, the SME review flow, and the live portal
            are the same platform — same taxonomy, same workflow, same audit
            trail, same content. Real-time, every time.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {integrated.map((i) => (
              <div
                key={i.h}
                className="rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <h3 className="font-display text-[16px] font-semibold">{i.h}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">
                  {i.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — Search your way */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">05 · Search</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Search your way.
            <br />
            <span className="text-ink-3">Built-in, or bring your own.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Our Insight Search Application is federated, semantic, and
            analytics-instrumented out of the box. Standardized on Coveo,
            Elastic, or Algolia? Hand them clean typed JSON and we&apos;ll get
            out of the way.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {searchOptions.map((s) => (
              <div
                key={s.h}
                className="rounded-2xl border border-line bg-bg-card p-7 elev-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[18px] font-semibold">
                    {s.h}
                  </h3>
                  <span className="rounded-md border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                    {s.pill}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 06 — Multilingual + scale */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">06 · Multilingual + scale</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                All the world&apos;s a stage.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Locale-aware delivery from a single source. Production portals
                routinely run with millions of Indexed Content Units across
                dozens of locales, products, and versions — without sharding
                the platform.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Translation memory, XLIFF 2.1 round-trip, and TMS integrations
                (Smartling, Lilt, XTM) live in the same platform — so the
                portal you ship in English is the portal you ship in 32
                languages.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 gap-3">
              {[
                ["Millions", "Indexed Content Units"],
                ["32+", "Languages supported"],
                ["99.95%", "Uptime SLA"],
                ["< 50ms", "API response p50"],
                ["Native", "TMS round-trip"],
                ["Real-time", "Locale fan-out"],
              ].map(([k, v]) => (
                <div
                  key={String(v)}
                  className="rounded-xl border border-line bg-bg-card p-4 elev-card"
                >
                  <div className="headline text-[22px] text-accent-2">{k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 07 — Headless + integrations */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">07 · Headless + enterprise integrations</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Salesforce-native.
            <br />
            <span className="text-ink-3">Headless when you need it.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Use the portal as your destination, or treat DCX as a delivery API
            and embed content inside Salesforce Experience Cloud, ServiceNow,
            your product UI, or an AI assistant. Both patterns are first-class.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <div
                key={i.h}
                className="rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <h3 className="font-display text-[16px] font-semibold">{i.h}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">
                  {i.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 08 — Security */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">08 · Enterprise-grade</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Boring. On purpose.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Your portal is the customer experience. It needs to be up,
                fast, and audited. That&apos;s the part we&apos;d rather you
                never think about.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {[
                ["SOC 2 Type II", "Independently audited"],
                ["24×7 critical-care support", "Real engineers, real hours"],
                ["Unlimited tech support", "No per-ticket nickel-and-dime"],
                ["RBAC + SAML / OIDC / SCIM", "Identity that ladders to your IdP"],
                ["MFA + encryption", "In transit, at rest, key management"],
                ["Data residency", "US, EU, or regional"],
              ].map(([k, v]) => (
                <div
                  key={String(k)}
                  className="rounded-xl border border-line bg-bg-card p-5 elev-card"
                >
                  <div className="font-display text-[15px] font-semibold">{k}</div>
                  <div className="mt-1.5 text-[12.5px] text-ink-3">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FAQList items={faqs} title="Discover CDP — what buyers ask" />

      <FinalCTA
        title="See it on your content. In 30 minutes."
        lede="A solution architect walks the portal, the visual editor, the aggregation layer, and the delivery API — using your content, your brand, your channels."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />
    </>
  );
}
