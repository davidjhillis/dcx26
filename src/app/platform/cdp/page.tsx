import type { Metadata } from "next";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";
import { CdpTemplates } from "@/components/cdp-templates";
import { ChannelsDiagram, UnifyDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Discover CDP — The Product Knowledge Hub for technical teams",
  description:
    "Unify scattered product content into a documentation hub your team can steer. Visual editing, ready-to-go templates, content from any source, AI-ready search, multilingual at enterprise scale, native Salesforce.",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover CDP",
  description:
    "Product Knowledge Hub for technical documentation and content delivery. Visual editing, ready-to-go templates, content aggregation, AI-ready search, multilingual delivery, native Salesforce and enterprise integrations.",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "Content Delivery Platform",
};

const coreCapabilities = [
  {
    h: "Product knowledge hub",
    sub: "Not a CMS with a doc theme",
    p: "A purpose-built delivery platform for technical content — structured topics, versioned products, locale fan-out, audience-aware. Designed for documentation, not adapted to it.",
  },
  {
    h: "Visual editing",
    sub: "Dream it. Build it. Ship it.",
    p: "Drag-and-drop layout, inline editing on the live page, design tokens for brand fidelity. Your team ships changes. Engineering stops fielding portal tickets.",
  },
  {
    h: "Templates → fully custom",
    sub: "Start fast. Scale to bespoke.",
    p: "Production-ready templates for home, topic, search, hub, release notes. Theme in a week. Extend into a fully custom portal as you grow. No re-platforming.",
  },
  {
    h: "Unify every source",
    sub: "One delivery layer",
    p: "Discover CCMS, Confluence, SharePoint, Heretto, Paligo, MadCap, files, video, any REST API — converged into one searchable, governed product knowledge layer.",
  },
  {
    h: "AI-ready search",
    sub: "Built-in or bring your own",
    p: "Insight Search is federated, semantic-ranked, and analytics-instrumented. Or hand clean typed JSON to Coveo, Elastic, or Algolia — both first-class.",
  },
  {
    h: "Headless + Salesforce-native",
    sub: "The portal isn't the only destination",
    p: "Embed in Salesforce Experience Cloud. Surface in Service Cloud. Ground an AI assistant. Same content, served as typed JSON through the Delivery API.",
  },
];

const integrations = [
  ["Salesforce Service Cloud", "Native widgets. Bi-directional case sync."],
  ["Salesforce Experience Cloud", "Embed DCX inside, or pull content as a package."],
  ["ServiceNow", "Case widgets, knowledge sync, identity passthrough."],
  ["Atlassian & Zendesk", "JSM, Confluence, Zendesk Guide — wired into your service stack."],
  ["Identity & SSO", "SAML, OIDC, SCIM, MFA. Group-, plan-, product-based access."],
  ["Webhooks + API", "Outbound on every event. REST + GraphQL inbound."],
];

export default function CdpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <PageHero
        eyebrow="Product · Discover CDP"
        title={
          <>
            Your documentation is a product.
            <br />
            <span className="text-ink-3">Treat it like one.</span>
          </>
        }
        lede="Discover CDP is the Product Knowledge Hub for technical content teams. Unify every source. Design without dev tickets. Ship the same content to your portal, to Salesforce, to your product UI, and to AI — from one platform built for documentation, not adapted to it."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* TRUST BAND */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-12 lg:py-16">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-3">
            Product knowledge hubs shipped on DiscoverCX
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { src: "/info/sites/site-ukg.png", brand: "UKG Community", caption: "Workforce management product knowledge" },
              { src: "/info/sites/site-dolby.png", brand: "Dolby Professional", caption: "Multi-product technical hub" },
              { src: "/info/sites/site-webexhelp.png", brand: "Cisco Webex Help", caption: "Multi-product documentation center" },
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
                    alt={`${p.brand} product knowledge hub built on DiscoverCX`}
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

      {/* BIG-PICTURE STORY */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">From fragmented to unified</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Your product knowledge isn&apos;t scarce.
                <br />
                <span className="text-ink-3">It&apos;s scattered.</span>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.75] text-ink-2">
                It lives in your CCMS. And Confluence. And a SharePoint
                permissions nest. And the file share. And the release-notes
                Google Doc. And a partner&apos;s portal under a different
                brand. Your customers are stitching it together with browser
                tabs and screenshots — and so is your AI.
              </p>
              <p className="mt-4 text-[16px] leading-[1.75] text-ink-2">
                Discover CDP unifies product knowledge into one delivery
                platform. Built for documentation, not retrofitted from a
                general-purpose CMS.
              </p>
            </div>
            <div className="lg:col-span-7">
              <UnifyDiagram />
            </div>
          </div>
        </Container>
      </section>

      {/* CORE CAPABILITIES — 6 tiles */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="wide" className="py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Core capabilities</p>
            <h2 className="headline mt-3 text-[32px] md:text-[42px]">
              Everything a documentation hub needs.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-2">
              Six things documentation teams used to buy from six vendors.
              One platform now.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-line bg-bg-card p-7 elev-card"
              >
                <h3 className="font-display text-[18px] font-semibold leading-tight">
                  {c.h}
                </h3>
                <p className="mt-2 font-mono text-[10.5px] uppercase tracking-widest text-accent-2">
                  {c.sub}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-ink-2">
                  {c.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DEEP DIVE — Visual editing + templates */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Designed by your team</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Dream it, build it,
                <br />
                <span className="text-ink-3">ship it Tuesday.</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">
                Visual editing. Drag-and-drop layout. Inline edits on the live
                page. Design tokens that lock brand fidelity in. The
                documentation team owns the destination — no IT ticket, no
                CMS specialist, no quarterly redesign cycle.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-2">
                Start with a production-ready template for home, topic,
                search, hub, or release notes. Theme it in a week. Extend it
                into a fully custom portal as your team grows — same delivery
                infrastructure underneath.
              </p>
            </div>
            <div className="lg:col-span-7">
              <CdpTemplates />
              <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
                Home, topic, faceted search — themeable on day one
              </p>
            </div>
          </div>

          {/* Working session imagery */}
          <div className="mt-16">
            <HumanImage
              src="/humans/portal-design-session.jpg"
              alt="A team in a converted-loft office reviewing a portal design on a laptop together"
              caption="Documentation teams ship the design — not waiting on engineering"
            />
          </div>
        </Container>
      </section>

      {/* DEEP DIVE — Unify any source */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">One source. Every channel.</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Your product content lives in ten places.
                <br />
                <span className="text-ink-3">Your customers shouldn&apos;t care.</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">
                Replacing every source isn&apos;t realistic — and isn&apos;t
                necessary. Discover CDP connects to the sources you already
                run, normalizes them into a typed delivery model, and ships
                one searchable knowledge hub on top.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-2">
                Structured topics, knowledge articles, files, video, and
                custom APIs — unified into one brand, one search, one
                experience.
              </p>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-line border-y border-line">
                {[
                  ["Discover CCMS", "Native, real-time, same platform."],
                  ["DITA, Markdown, HTML", "Mixed in one portal, single-sourced."],
                  ["Confluence", "Live sync of spaces, pages, attachments."],
                  ["SharePoint", "Permissions-aware, locale-aware ingestion."],
                  ["Heretto · Paligo · MadCap · IXIASOFT", "Connectors live in the platform."],
                  ["PDFs & assets", "Indexed, searchable, governed."],
                  ["Videos & podcasts", "Transcript-indexed, deep-linkable."],
                  ["REST / GraphQL", "Any API as a content source."],
                ].map(([k, v]) => (
                  <div
                    key={String(k)}
                    className="grid grid-cols-[1fr_1.4fr] items-baseline gap-6 py-4"
                  >
                    <dt className="font-display text-[15px] font-semibold text-ink">
                      {k}
                    </dt>
                    <dd className="text-[13.5px] leading-relaxed text-ink-2">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* DEEP DIVE — Authoring + Delivery integrated */}
      <section className="border-b border-line bg-bg">
        <Container intent="prose" className="py-20 md:py-24">
          <p className="eyebrow">Authoring + delivery, one platform</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">
            Writers ship to the hub.
            <br />
            <span className="text-ink-3">Not to a queue.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.75] text-ink-2">
            Most product knowledge platforms sit downstream of your CCMS —
            content gets exported, indexed, eventually shows up. Discover CDP
            is wired into the same platform as Discover CCMS. Authoring, SME
            review, workflow, taxonomy, and the live hub share one source of
            truth. A topic ships in seconds. Nothing drifts. Nothing
            re-indexes overnight.
          </p>
        </Container>
      </section>

      {/* DEEP DIVE — Search */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Search that actually finds</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Keyword precise.
                <br />
                <span className="text-ink-3">Semantic smart.</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">
                Insight Search is federated across every source you connect.
                Typo-tolerant. Locale-aware. Faceted. Semantic-ranked.
                Analytics built in. The team that owns the hub owns the
                relevance — synonyms, boosts, query rules, all in one console.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-2">
                Standardized on Coveo, Elastic, Algolia, Lucidworks, or an
                in-house relevance engine? We hand it clean typed JSON and
                stay out of the way. Both patterns are first-class — and you
                can switch without re-platforming.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  h: "Insight Search Application",
                  pill: "Included",
                  p: "Built-in federated search across all aggregated sources. Synonyms, boosting, query rules, analytics. The team that owns the hub owns the relevance.",
                },
                {
                  h: "Bring your own",
                  pill: "BYO",
                  p: "Coveo, Elastic, Algolia, Lucidworks — or your in-house engine. We expose the content. You own the ranking.",
                },
              ].map((s) => (
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
          </div>
        </Container>
      </section>

      {/* DEEP DIVE — Multilingual + scale */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">All the world&apos;s a stage</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Scale you don&apos;t have to think about.
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">
                Production hubs on Discover CDP routinely run with millions
                of Indexed Content Units across dozens of locales, products,
                and versions — without sharding the platform.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-2">
                Translation memory, XLIFF 2.1 round-trip, and TMS integrations
                (Smartling, Lilt, XTM) live in the same platform. Locale
                fan-out from a single source. The hub you ship in English is
                the hub you ship in 32 languages.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 gap-3">
              {[
                ["Millions", "Indexed Content Units"],
                ["32+", "Languages"],
                ["99.95%", "Uptime SLA"],
                ["< 50ms", "API p50"],
                ["Real-time", "Locale fan-out"],
                ["Native", "TMS round-trip"],
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

      {/* INTEGRATIONS */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Deliver anywhere your customer is</p>
            <h2 className="headline mt-3 text-[32px] md:text-[42px]">
              Salesforce-native.
              <br />
              <span className="text-ink-3">Headless when you need it.</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">
              The product knowledge hub is the destination most teams ship
              first. But the same typed content can render inside Salesforce
              Experience Cloud, ServiceNow, your in-product help drawer, or
              ground an AI assistant. Same source, every surface — both
              first-class.
            </p>
          </div>

          {/* Diagram */}
          <div className="mt-12">
            <ChannelsDiagram />
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map(([k, v]) => (
              <div
                key={String(k)}
                className="rounded-xl border border-line bg-bg-card p-5 elev-card"
              >
                <h3 className="font-display text-[15.5px] font-semibold">{k}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ENTERPRISE-READY */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Enterprise-ready</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Boring.
                <br />
                <span className="text-ink-3">On purpose.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Your product knowledge hub is the system of record your
                customers, partners, and AI assistants depend on. It needs to
                be up, fast, and audited — and that&apos;s the part we&apos;d
                rather you never have to think about.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {[
                ["SOC 2 Type II", "Independently audited"],
                ["24×7 critical-care", "Real engineers, real hours"],
                ["Unlimited tech support", "No per-ticket nickel-and-dime"],
                ["RBAC + SAML / OIDC / SCIM", "Ladders to your IdP"],
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

      <FAQList
        title="What buyers ask us"
        items={[
          {
            q: "How is this different from Fluid Topics?",
            a: "Fluid Topics is a strong product knowledge platform focused on aggregation and AI delivery. Discover CDP overlaps on that surface but extends into the full experience: visual editing, ready-to-go templates, design tokens, customer experience features, and a delivery layer natively wired to Discover CCMS for authoring and SME review. If your priority is unifying sources for AI, Fluid Topics is solid. If you also need a shippable, brand-owned product knowledge hub your documentation team can steer, look at DCX.",
          },
          {
            q: "How is this different from Zoomin?",
            a: "Zoomin focuses on doc portal delivery with strong Salesforce integration. Discover CDP overlaps and extends into visual editing, native authoring on top of Discover CCMS, AI grounding via Discover AI, and a broader set of templates and personalization controls. Evaluate DCX when you need more than a portal layer on top of your existing CCMS.",
          },
          {
            q: "Can we keep our existing CCMS?",
            a: "Yes. Connectors for Heretto, Paligo, MadCap, IXIASOFT, Confluence, SharePoint, and custom sources are part of the Enterprise package. You bring your authoring source and DCX becomes the unified product knowledge layer. Many customers eventually consolidate onto Discover CCMS, but it's not required.",
          },
          {
            q: "What's the scale ceiling?",
            a: "Production hubs on Discover CDP routinely run with millions of Indexed Content Units across multiple locales, products, and versions. The platform is sized for Fortune 500 product catalogs — UKG, Dolby, and Cisco Webex run on this infrastructure.",
          },
          {
            q: "Can we use our own search?",
            a: "Yes. Insight Search is included and is what most teams ship with. If you've standardized on Coveo, Elastic, Algolia, or Lucidworks, DCX exposes clean typed JSON for it to index. Both patterns are first-class — you can switch later without re-platforming.",
          },
          {
            q: "Is it secure enough for regulated industries?",
            a: "SOC 2 Type II. 24×7 critical-care support. Unlimited tech support. RBAC, SAML / OIDC / SCIM, MFA. Encryption in transit and at rest with key management. Data residency options. We support Fortune 500 financial services, healthcare, and manufacturing on this stack.",
          },
          {
            q: "How long does a hub launch take?",
            a: "Template-based launches go live in 4–8 weeks: ~1 week theming, 2–3 weeks content migration and integrations, 1–2 weeks UAT and soft launch. Fully custom builds with bespoke layouts take longer. Both paths use the same delivery infrastructure — you can start templated and customize over time.",
          },
        ]}
      />

      <FinalCTA
        title="See it on your content. In 30 minutes."
        lede="A solution architect walks the hub, the visual editor, the aggregation layer, and the delivery API — using your content, your brand, your channels."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />
    </>
  );
}
