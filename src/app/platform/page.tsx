import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink, Eyebrow, H2, Lede } from "@/components/ui";
import { CodePanel, ditaHtml, jsonHtml } from "@/components/code-panel";
import { TopicVisual } from "@/components/topic-visual";

type ChapterVariant = "author" | "manage" | "deliver" | "discover";

export const metadata: Metadata = {
  title: "Platform — Headless CCMS + Content Delivery for Technical Content",
  description:
    "DiscoverCX is a four-layer content delivery platform: structured authoring, a Git-backed CCMS repository, a real-time headless API, and a customer-facing portal — all under one roof.",
};

const chapters = [
  { id: "author", n: "01", title: "Author", subtitle: "Structured authoring" },
  { id: "manage", n: "02", title: "Manage", subtitle: "CCMS repository" },
  { id: "deliver", n: "03", title: "Deliver", subtitle: "Headless delivery" },
  { id: "discover", n: "04", title: "Discover", subtitle: "Customer portal" },
];

const platformSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "DiscoverCX Content Delivery Platform",
  description:
    "Four-layer content delivery platform combining structured DITA/Markdown authoring, Git-backed CCMS repository, real-time headless API, and customer-facing portal.",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "Content Delivery Platform",
};

function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-xl border border-line bg-bg-elev shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Chapter({
  id,
  n,
  title,
  subtitle,
  variant,
  children,
}: {
  id: string;
  n: string;
  title: string;
  subtitle: string;
  variant: ChapterVariant;
  children: React.ReactNode;
}) {
  return (
    <>
      <div id={id} className="stack-tile scroll-mt-16">
        <div className="stack-card">
          {/* Header: ordinal + text on the left, the Topic visual on the right */}
          <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-6">
                <span className="font-display text-[56px] md:text-[80px] font-semibold leading-none text-[color:var(--accent)]/40 tabular-nums">
                  {n}
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                    {subtitle}
                  </span>
                  <h2 className="headline mt-2 text-[40px] md:text-[56px]">
                    {title}
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <TopicVisual variant={variant} />
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="stack-spacer" aria-hidden />
    </>
  );
}

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(platformSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-glow border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10 pt-24 pb-20 md:pt-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:rgba(0,199,183,0.10)] px-3 py-1 text-[12px] text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              The platform
            </div>
            <h1 className="headline mt-6 text-[44px] md:text-[64px]">
              Four layers.
              <br />
              <span className="text-ink-3">One source of truth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-2">
              DiscoverCX is built as a single pipeline — from{" "}
              <span className="kbd">DITA</span> in your editor to{" "}
              <span className="kbd">JSON</span> in your AI assistant. No
              third-party CCMS to glue in. No headless layer to bolt on. No
              portal to integrate after the fact.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/demo">Request a demo</ButtonLink>
              <ButtonLink href="#author" variant="secondary">
                Start with authoring →
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-SCROLL BODY WITH STICKY CHAPTER NAV */}
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* sticky chapter nav */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24 py-24">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-widest text-ink-4">
                On this page
              </p>
              <ul className="space-y-3">
                {chapters.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`#${c.id}`}
                      className="group flex items-baseline gap-3 text-[13px] text-ink-3 transition-colors hover:text-ink"
                    >
                      <span className="font-mono text-[10px] text-ink-4 group-hover:text-accent-2">
                        {c.n}
                      </span>
                      <span className="flex-1">
                        <span className="block text-ink-2 group-hover:text-ink">
                          {c.title}
                        </span>
                        <span className="block text-[11px] text-ink-4">
                          {c.subtitle}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-lg border border-line bg-bg-2 p-4">
                <p className="text-[12px] leading-relaxed text-ink-3">
                  Prefer a live walkthrough? A solution engineer can demo the
                  whole platform end-to-end in 30 minutes.
                </p>
                <Link
                  href="/demo"
                  className="mt-3 inline-block text-[12px] text-accent-2 hover:text-accent"
                >
                  Book a demo →
                </Link>
              </div>
            </nav>
          </aside>

          {/* content — stack-rail holds all chapter tiles as siblings */}
          <div className="lg:col-span-9 stack-rail">
            {/* 01 — AUTHOR */}
            <Chapter
              id="author"
              n="01"
              title="Author"
              subtitle="Structured authoring"
              variant="author"
            >
              <Lede>
                Tech writers, SMEs, and product teams work side by side in the
                editors they already use. DiscoverCX speaks <span className="kbd">DITA</span>,{" "}
                <span className="kbd">Markdown</span>, and{" "}
                <span className="kbd">HTML</span> natively — no proprietary file
                format, no lock-in.
              </Lede>

              <div className="mt-10">
                <Screenshot
                  src="/info/ccms-client.webp"
                  alt="DiscoverCX CCMS authoring client — topic tree, structured editor, and live preview"
                  caption="The DiscoverCX authoring client"
                />
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2">
                {[
                  {
                    h: "Editor of choice",
                    p: "Oxygen XML, Fonto, Simply XML, MadCap migration, or the built-in browser editor. Round-trip with no fidelity loss.",
                  },
                  {
                    h: "Topic-based reuse",
                    p: "Author once, reuse everywhere. Conditional content, profiling, key references, and content references all work natively.",
                  },
                  {
                    h: "Branching & review",
                    p: "Git-style branches for major versions. Inline review, change requests, and approval workflows built in.",
                  },
                  {
                    h: "AI co-authoring",
                    p: "Generate first-draft topics from PRDs, transcripts, or knowledge bases. Every suggestion stays editable in your editor.",
                  },
                ].map((f) => (
                  <div
                    key={f.h}
                    className="rounded-lg border border-line bg-bg-2 p-5"
                  >
                    <h3 className="text-[14px] font-semibold text-ink">
                      {f.h}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
                      {f.p}
                    </p>
                  </div>
                ))}
              </div>
            </Chapter>

            {/* 02 — MANAGE */}
            <Chapter
              id="manage"
              n="02"
              title="Manage"
              subtitle="CCMS repository"
              variant="manage"
            >
              <Lede>
                A <span className="kbd">Git</span>-backed repository with the
                guardrails enterprise content teams need: full version history,
                role-based access, multilingual workflows, translation memory
                integrations, and SOC 2 Type II controls.
              </Lede>

              <div className="mt-10 overflow-hidden rounded-xl border border-line">
                <table className="w-full text-[13px]">
                  <thead className="bg-bg-elev text-left text-ink-3">
                    <tr>
                      <th className="px-4 py-3 font-medium">Layer</th>
                      <th className="px-4 py-3 font-medium">What you get</th>
                      <th className="px-4 py-3 font-medium">Standards</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-2">
                    {[
                      [
                        "Repository",
                        "Versioned topic store, full history, branches, tags",
                        "Git, DITA 1.3, JSON Schema",
                      ],
                      [
                        "Workflow",
                        "Custom states, approvals, scheduled publishing",
                        "BPMN-style, webhook-driven",
                      ],
                      [
                        "Translation",
                        "Locale fan-out, TMS round-trip (Smartling, Lilt, XTM)",
                        "XLIFF 2.1, ICU",
                      ],
                      [
                        "Access",
                        "Role-based, project-scoped, branch-scoped",
                        "SAML, OIDC, SCIM",
                      ],
                      [
                        "Audit",
                        "Every change attributed, exportable",
                        "SOC 2 Type II, GDPR, HIPAA-ready",
                      ],
                    ].map(([a, b, c]) => (
                      <tr key={a} className="border-t border-line">
                        <td className="px-4 py-3 text-ink">{a}</td>
                        <td className="px-4 py-3">{b}</td>
                        <td className="px-4 py-3 font-mono text-[11px] text-ink-3">
                          {c}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12">
                <Screenshot
                  src="/product/publishing-pipeline.png"
                  alt="DiscoverCX publishing pipeline showing topics moving from review to multi-channel delivery"
                  caption="The publishing pipeline — review → branch → publish → fan out"
                />
              </div>
            </Chapter>

            {/* 03 — DELIVER */}
            <Chapter
              id="deliver"
              n="03"
              title="Deliver"
              subtitle="Headless delivery"
              variant="deliver"
            >
              <Lede>
                One typed API. Every channel. Topics flow from the repository
                to docs sites, mobile apps, Salesforce, in-product help,
                partner systems, and AI assistants — in real time, with no
                rebuilds.
              </Lede>

              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                <CodePanel
                  title="topics/install-router.dita"
                  html={ditaHtml}
                />
                <CodePanel
                  meta={{
                    method: "GET",
                    path: "/v1/topics/install-router",
                    status: "200 OK · 38 ms",
                  }}
                  html={jsonHtml}
                />
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {[
                  {
                    h: "REST + GraphQL + Webhooks",
                    p: "Pick the access pattern that fits the channel. Typed schemas. OAS 3.1. TypeScript SDK shipped.",
                  },
                  {
                    h: "Real-time, no rebuilds",
                    p: "Publish a topic → it's live in the API within seconds. No static rebuilds, no CDN purges, no nightly batch.",
                  },
                  {
                    h: "AI / RAG-ready",
                    p: "Topic-level metadata, clean semantic boundaries, locale fan-out — purpose-built for grounding LLMs.",
                  },
                ].map((f) => (
                  <div
                    key={f.h}
                    className="rounded-lg border border-line bg-bg-2 p-5"
                  >
                    <h3 className="text-[14px] font-semibold text-ink">
                      {f.h}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
                      {f.p}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Screenshot
                  src="/product/api.png"
                  alt="DiscoverCX delivery API serving structured topics to multiple channels"
                  caption="One API. Every surface — docs, portal, Salesforce, in-product, AI."
                />
              </div>
            </Chapter>

            {/* 04 — DISCOVER */}
            <Chapter
              id="discover"
              n="04"
              title="Discover"
              subtitle="Customer portal"
              variant="discover"
            >
              <Lede>
                A ready-to-launch customer portal sits on top of the same
                repository — enterprise search, role-based personalization,
                cases, community, and analytics. Brand it, configure it, and
                ship in weeks instead of quarters.
              </Lede>

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Enterprise search", "Federated, faceted, typo-tolerant"],
                  ["Personalization", "Role, plan, product, locale"],
                  ["Cases & community", "Salesforce, ServiceNow, Atlassian"],
                  ["Analytics", "Topic engagement, deflection, gaps"],
                ].map(([h, p]) => (
                  <div
                    key={h}
                    className="rounded-lg border border-line bg-bg-2 p-5"
                  >
                    <h3 className="text-[13px] font-semibold text-ink">{h}</h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-ink-3">
                      {p}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Screenshot
                  src="/info/sites/cdp-demo-home.png"
                  alt="DiscoverCX customer portal home page — branded landing with featured topics, releases, and personalized paths"
                  caption="The DCX doc portal — home"
                />
              </div>
            </Chapter>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="absolute inset-0 hero-glow opacity-80" />
        <div className="relative mx-auto max-w-4xl px-8 py-28 text-center">
          <Eyebrow>Ship</Eyebrow>
          <H2 className="mt-3">See the whole platform in 30 minutes.</H2>
          <Lede>
            A solution engineer will walk you through authoring, the
            repository, the delivery API, and the portal — using your content,
            your formats, and your channels.
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
