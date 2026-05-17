import Link from "next/link";
import Image from "next/image";
import { ButtonLink, Card, Eyebrow, H2, Lede, Ordinal, Section, StackRail, StackSection } from "@/components/ui";
import { CodePanel, ditaHtml, jsonHtml } from "@/components/code-panel";

const customerLogos = [
  { name: "Cisco", src: "/logos/Cisco-logo-white2x.png", w: 80, h: 28 },
  { name: "Coupa", src: "/logos/Coupa-logo-white.svg", w: 90, h: 22 },
  { name: "Dolby", src: "/logos/Dolby-logo-white2x.png", w: 90, h: 28 },
  { name: "GE", src: "/logos/ge-logo-white.png", w: 50, h: 50 },
  { name: "UKG", src: "/logos/UKG-logo-white2x.png", w: 70, h: 32 },
  { name: "NCCI", src: "/logos/ncci.png", w: 90, h: 32 },
];

const faqs = [
  {
    q: "What is a content delivery platform (CDP)?",
    a: "A content delivery platform unifies content creation, structured storage, and multichannel delivery in a single system. Unlike a traditional CCMS — which stops at content management — a CDP also handles delivery to portals, docs sites, in-product help, AI assistants, and partner channels through APIs. DiscoverCX is built as a CDP from the ground up.",
  },
  {
    q: "How is DiscoverCX different from MadCap Flare, Paligo, or Heretto?",
    a: "Traditional CCMS tools like Flare, Paligo, and Heretto focus on authoring and publishing static outputs (PDF, HTML5, WebHelp). DiscoverCX adds a real-time headless delivery layer, a customer-facing portal, role-based personalization, and AI-ready knowledge graph output. You get the structured authoring of a CCMS plus the delivery infrastructure of a modern DXP.",
  },
  {
    q: "Does DiscoverCX support DITA?",
    a: "Yes. DiscoverCX is fully DITA-compliant and works with standard DITA editors (Oxygen XML, Fonto, Simply XML). It also supports Markdown, HTML, and structured JSON — so teams can mix authoring formats inside one repository.",
  },
  {
    q: "Can DiscoverCX deliver content to AI assistants and RAG systems?",
    a: "Yes. The delivery API outputs clean, semantically tagged JSON with topic-level metadata, making DiscoverCX ideal for grounding LLMs and powering retrieval-augmented generation (RAG). Customers use it to power AI search, in-product copilots, and Salesforce Einstein knowledge.",
  },
  {
    q: "Is DiscoverCX SOC 2 compliant?",
    a: "Yes. DiscoverCX is SOC 2 Type II certified with 24×7 critical-care support, role-based access control, full audit logging, and SAML/SSO. It is trusted by Fortune 500 brands in regulated industries including financial services, healthcare, and manufacturing.",
  },
  {
    q: "How long does implementation take?",
    a: "Typical implementations run 6–12 weeks for a production launch, depending on content volume, integrations (Salesforce, ServiceNow, Atlassian), and migration scope. A guided onboarding team handles schema, taxonomy, and migration from your legacy CCMS or help authoring tool.",
  },
];

const comparison: [string, boolean, boolean, boolean, boolean][] = [
  ["Headless delivery API", true, false, false, false],
  ["Customer-facing portal included", true, false, false, false],
  ["Native DITA support", true, true, true, false],
  ["Markdown + DITA in one repo", true, false, false, true],
  ["AI / RAG-ready JSON output", true, false, false, false],
  ["Real-time publishing (no rebuild)", true, false, false, false],
  ["Salesforce Knowledge sync", true, false, false, false],
  ["SOC 2 Type II", true, true, false, false],
  ["Git-based versioning", true, false, false, true],
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DiscoverCX",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Content Delivery Platform, Component Content Management System",
  operatingSystem: "Web",
  description:
    "DiscoverCX is the headless content delivery platform built on the world's leading CCMS. Author once in DITA or Markdown, deliver to portals, docs sites, Salesforce, and AI assistants from a single source of truth.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "Ingeniux",
    url: "https://www.ingeniux.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "84",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1480px] px-8 lg:px-12 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/30 bg-[color:var(--accent-blue-dim)] px-3 py-1 text-[12px] text-accent-blue-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
              The Content Delivery Platform · Built on the leading headless CCMS
            </div>
            <h1 className="headline mt-6 text-[44px] md:text-[68px]">
              Ship documentation.
              <br />
              <span className="text-ink-3">Deliver customer experience.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-2">
              DiscoverCX unifies structured authoring{" "}
              <span className="kbd">DITA</span>{" "}
              <span className="kbd">Markdown</span>, a headless CCMS, and a
              real-time delivery API{" "}
              <span className="kbd">REST</span>{" "}
              <span className="kbd">JSON</span> — so one source of truth serves
              docs sites, portals, Salesforce, in-product help, and AI assistants.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/demo">Request a demo</ButtonLink>
              <ButtonLink href="/platform" variant="secondary">
                See the platform
              </ButtonLink>
            </div>
            <p className="mt-6 text-[12px] text-ink-4">
              Trusted by Fortune 500 teams · SOC 2 Type II · 24×7 critical-care support
            </p>
          </div>

          <div className="mx-auto mt-24 max-w-5xl">
            <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
              Powering structured content for
            </p>
            <div className="mt-6 grid grid-cols-3 items-center gap-x-12 gap-y-8 md:grid-cols-6">
              {customerLogos.map((l) => (
                <div key={l.name} className="flex h-8 items-center justify-center opacity-60 transition-opacity hover:opacity-100">
                  <Image
                    src={l.src}
                    alt={l.name}
                    width={l.w}
                    height={l.h}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOURCE → DELIVERY (code split) */}
      <section className="relative overflow-hidden border-b border-line bg-bg">
        <div className="orb-blue -top-40 -left-40" />
        <div className="orb-blue -bottom-40 -right-40 opacity-60" />
        <div className="relative mx-auto max-w-[1480px] px-8 lg:px-12 py-24 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Source → Delivery</Eyebrow>
            <H2 className="mt-3">
              Author once in <span className="kbd">DITA</span>. Deliver
              everywhere as <span className="kbd">JSON</span>.
            </H2>
            <Lede>
              No baked PDFs. No nightly rebuilds. Topics flow from your
              repository to every channel in real time through one typed,
              versioned API.
            </Lede>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <CodePanel
              title="topics/install-router.dita"
              html={ditaHtml}
            />
            <CodePanel
              meta={{ method: "GET", path: "/v1/topics/install-router", status: "200 OK · 38 ms" }}
              html={jsonHtml}
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-ink-3">
            <span className="repo-meta">REST · GraphQL · Webhooks</span>
            <span className="repo-meta">OAS 3.1 · TypeScript SDK</span>
            <span className="repo-meta">SOC 2 Type II · SAML / OIDC</span>
            <span className="repo-meta">99.95% uptime SLA</span>
          </div>
        </div>
      </section>

      {/* SCROLL-STACK BEGINS — all StackSections must be siblings inside one StackRail */}
      <StackRail>
      {/* PLATFORM PILLARS */}
      <StackSection>
        <Eyebrow>The platform</Eyebrow>
        <H2 className="mt-3 max-w-3xl">
          One platform for structured content — from source to every surface.
        </H2>
        <Lede>
          DiscoverCX combines four capabilities most teams stitch together from five
          different vendors. The result: one source of truth, one delivery layer, and
          one team that owns the whole pipeline.
        </Lede>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              path: "platform/author",
              title: "Author",
              desc:
                "DITA, Markdown, HTML — in your editor of choice. Oxygen, Fonto, Simply XML, or our browser editor. Reuse, conditional content, branching, and review built in.",
              meta: ["Oxygen", "Fonto", "Simply XML", "Web"],
            },
            {
              n: "02",
              path: "platform/manage",
              title: "Manage",
              desc:
                "Git-based repository with full version history, role-based access, multilingual workflows, translation memory integrations, and SOC 2 compliance.",
              meta: ["Git", "i18n", "RBAC", "SOC 2"],
            },
            {
              n: "03",
              path: "platform/deliver",
              title: "Deliver",
              desc:
                "Headless API serves clean JSON to portals, docs sites, mobile apps, Salesforce, and AI assistants. Real-time publishing — no rebuilds, no static fallbacks.",
              meta: ["REST", "GraphQL", "Webhooks", "SDK"],
            },
            {
              n: "04",
              path: "platform/discover",
              title: "Discover",
              desc:
                "Out-of-the-box customer portal with enterprise search, personalization, case management, community, and analytics. Launch a portal in weeks, not quarters.",
              meta: ["Search", "Portal", "Cases", "Analytics"],
            },
          ].map((p) => (
            <Card key={p.n}>
              <div className="flex items-center justify-between">
                <span className="repo-meta text-accent-blue-2">{p.path}</span>
                <Ordinal n={p.n} />
              </div>
              <h3 className="mt-4 font-display text-[20px] font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.meta.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[10px] tracking-wide rounded-md border border-line bg-bg-elev/60 px-1.5 py-0.5 text-ink-3"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </StackSection>

      {/* WHY CDP — COMPARISON TABLE */}
      <StackSection>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Why a content delivery platform</Eyebrow>
            <H2 className="mt-3">A CCMS isn&apos;t enough anymore.</H2>
            <Lede>
              Your content has to land in five places: a public docs site, a logged-in
              portal, your product UI, your CRM, and an AI assistant. A CCMS can author
              it. A CDP delivers it.
            </Lede>
            <div className="mt-8">
              <ButtonLink href="/resources/what-is-a-cdp" variant="secondary">
                Read: CCMS vs. CDP →
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line">
              <table className="w-full text-[13px]">
                <thead className="bg-bg-elev text-left text-ink-3">
                  <tr>
                    <th className="px-4 py-3 font-medium">Capability</th>
                    <th className="px-4 py-3 font-medium text-accent-blue-2">DiscoverCX</th>
                    <th className="px-4 py-3 font-medium">MadCap</th>
                    <th className="px-4 py-3 font-medium">Paligo</th>
                    <th className="px-4 py-3 font-medium">Heretto</th>
                  </tr>
                </thead>
                <tbody className="text-ink-2">
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-t border-line">
                      <td className="px-4 py-3">{row[0]}</td>
                      {row.slice(1).map((v, j) => (
                        <td key={j} className="px-4 py-3">
                          {v ? (
                            <span className="text-accent">●</span>
                          ) : (
                            <span className="text-ink-4">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-ink-4">
              Comparison reflects publicly available product documentation as of 2026. See
              full <Link href="/compare" className="underline hover:text-ink-2">vendor comparisons →</Link>
            </p>
          </div>
        </div>
      </StackSection>

      {/* SOLUTIONS */}
      <StackSection>
        <Eyebrow>Built for</Eyebrow>
        <H2 className="mt-3 max-w-3xl">Teams that ship content as a product.</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Technical Documentation",
              d: "Replace MadCap, Flare, or Confluence with a DITA-native CCMS and a modern docs portal. Cut publishing time 60%.",
              href: "/solutions/technical-docs",
            },
            {
              t: "Policies & SOPs",
              d: "Versioned, audited, role-aware policy content for regulated industries. Tied directly to compliance workflows.",
              href: "/solutions/policies",
            },
            {
              t: "eLearning / LCMS",
              d: "SCORM-ready learning content authored as DITA topics. Reuse a single procedure across docs, training, and onboarding.",
              href: "/solutions/elearning",
            },
            {
              t: "Salesforce Knowledge",
              d: "Sync structured topics into Salesforce Knowledge and Experience Cloud. Same source, agent + customer surfaces.",
              href: "/solutions/salesforce",
            },
            {
              t: "AI Training & RAG",
              d: "Structured, tagged JSON output purpose-built for grounding LLMs. Power in-product copilots without scraping PDFs.",
              href: "/solutions/ai",
            },
            {
              t: "Customer Portals",
              d: "Launch a branded support portal in weeks — search, personalization, cases, community, and content in one place.",
              href: "/solutions/portals",
            },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group elev-card rounded-xl p-7 transition-colors hover:border-line-2"
            >
              <h3 className="font-display text-[18px] font-semibold tracking-tight group-hover:text-accent-blue-2">
                {s.t}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{s.d}</p>
              <p className="mt-5 text-[12px] text-ink-3 group-hover:text-ink-2">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </StackSection>

      {/* AUTHORITY / PROOF */}
      <StackSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Authority</Eyebrow>
            <H2 className="mt-3">Built by Microsoft alumni. Shipping structured content since 1999.</H2>
            <Lede>
              DiscoverCX is built by Ingeniux. Our founders came from the Microsoft
              team that built the first web publishing system for MSNBC. Two decades
              later, we&apos;ve delivered structured content systems for the world&apos;s
              leading brands.
            </Lede>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-3">
              <Link href="/about" className="text-accent-blue-2 underline">
                Read our story →
              </Link>
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["2M+", "CMS downloads"],
                ["1,500+", "Live customer sites"],
                ["20+ yrs", "In content management"],
                ["1999", "Founded in Seattle"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="headline text-[28px] md:text-[34px] text-accent-blue-2">{n}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-line bg-bg-2 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-blue-2">
                The shift we keep seeing
              </p>
              <p className="mt-3 font-display text-[18px] leading-[1.45] text-ink">
                Your customers generate 65% to 80% of your revenue — year after year.
                DiscoverCX is the content platform that powers the experiences they rely on.
              </p>
            </div>
          </div>
        </div>
      </StackSection>

      {/* RESOURCES / LEAD GEN */}
      <StackSection>
        <Eyebrow>Resources</Eyebrow>
        <H2 className="mt-3 max-w-3xl">Pick the next step that fits where you are.</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              tag: "Buyer's guide",
              t: "The CCMS RFP Template",
              d: "78 vendor-evaluation questions used by Fortune 500 procurement teams. Editable .docx.",
              cta: "Download free →",
              href: "/resources/ccms-rfp-template",
            },
            {
              tag: "Comparison",
              t: "DiscoverCX vs. MadCap Flare",
              d: "Side-by-side: authoring model, delivery, portal, AI readiness, and total cost.",
              cta: "Read comparison →",
              href: "/compare/madcap-flare",
            },
            {
              tag: "Live demo",
              t: "30-minute platform walkthrough",
              d: "See authoring, the portal, and the delivery API end-to-end with a solution engineer.",
              cta: "Book a demo →",
              href: "/demo",
            },
          ].map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group elev-card flex flex-col rounded-xl p-7 transition-colors hover:border-line-2"
            >
              <span className="eyebrow">{r.tag}</span>
              <h3 className="mt-4 font-display text-[20px] font-semibold leading-tight">
                {r.t}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-2">
                {r.d}
              </p>
              <p className="mt-6 text-[13px] text-accent-blue-2">{r.cta}</p>
            </Link>
          ))}
        </div>
      </StackSection>

      {/* FAQ */}
      <StackSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <H2 className="mt-3">Answers, before the call.</H2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
              The questions buying committees actually ask. If yours isn&apos;t here,{" "}
              <Link href="/contact" className="text-accent-blue-2 underline">
                ask us directly
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-medium text-ink">
                    <span>{f.q}</span>
                    <span className="text-ink-3 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </StackSection>
      </StackRail>
      {/* SCROLL-STACK ENDS */}

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 hero-glow opacity-80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <H2>See DiscoverCX in 30 minutes.</H2>
          <Lede>
            A solution engineer will walk you through authoring, delivery, and the
            customer portal — using your content, your formats, and your channels.
          </Lede>
          <div className="mt-9 flex justify-center gap-3">
            <ButtonLink href="/demo">Request a demo</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              See pricing
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
