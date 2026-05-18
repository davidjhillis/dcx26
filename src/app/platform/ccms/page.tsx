import type { Metadata } from "next";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage } from "@/components/ui";
import { CcmsPipelineDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Discover CCMS — Structured content. Built for enterprise teams.",
  description:
    "A component CCMS designed around the repository, not the editor. DITA, Markdown, and HTML in one source. Author in Oxygen, Fonto, Simply XML, the browser, or your IDE. Reuse, review, translate, publish.",
};

// ────────────────────────────────────────────────────────────────────────────
// Repository — the system of record
// ────────────────────────────────────────────────────────────────────────────
const repoFeatures = [
  {
    h: "Component repository",
    p: "Every topic, image, snippet, and map is a versioned component. Not a file. Not a wiki page. A typed object you can govern.",
  },
  {
    h: "Branching & merging",
    p: "Major releases get their own branch. Minor fixes merge back. The repo enforces structure — your writers don't have to.",
  },
  {
    h: "Audit & access",
    p: "RBAC down to the project, branch, and component. SAML, OIDC, SCIM. Every change attributed and exportable.",
  },
  {
    h: "Taxonomy you own",
    p: "Product, audience, version, locale — typed metadata, not folder names. Filters, conditions, and publishing all key off it.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Authoring surfaces — pick your team's tools
// ────────────────────────────────────────────────────────────────────────────
const authoringSurfaces = [
  {
    label: "Oxygen XML",
    audience: "Pro writers",
    p: "Web and Desktop. Full DITA fidelity, schema validation, structured editing. The XML editor of choice.",
    pill: "Native",
  },
  {
    label: "Discover CX editor",
    audience: "Built for your team",
    p: "Our browser-based authoring client. Built on Fonto, extended with AI assist, native comments and revisions, Oxygen round-trip, and usage analytics. No install, no IT ticket — see the deep dive below.",
    pill: "Built-in",
  },
  {
    label: "Simply XML",
    audience: "SMEs in Word",
    p: "Your SMEs already use Microsoft Word. Simply XML lets them draft structured topics there without retraining.",
    pill: "Native",
  },
  {
    label: "Fonto",
    audience: "External Fonto licenses",
    p: "If your team already runs standalone Fonto, we integrate natively. Most teams use the built-in Discover CX editor instead — same engine, more capability.",
    pill: "Native",
  },
  {
    label: "IDE + Git",
    audience: "Doc-as-code teams",
    p: "VS Code, IntelliJ, Cursor — anything that speaks Git. Lint and preview locally. Push a PR. We open a review task.",
    pill: "For engineers",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Content types
// ────────────────────────────────────────────────────────────────────────────
const contentTypes = [
  {
    h: "DITA",
    p: "First-class. DITA 1.3, DITA-OT 4.x. Concept, task, reference, glossary, and your specializations. Conrefs, keyrefs, conditional processing — all of it.",
    tag: "Structured",
  },
  {
    h: "Markdown",
    p: "First-class. Lighter and faster than DITA — perfect for engineering docs, READMEs, release notes, and in-product help. Same repository, same publishing pipeline.",
    tag: "Lighter & faster",
  },
  {
    h: "HTML",
    p: "First-class. For legacy imports, marketing-adjacent content, and bespoke knowledge articles. Schema-validated, not free-text.",
    tag: "Bridge",
  },
  {
    h: "Mixed in one repo",
    p: "Cross-format conrefs. A DITA topic can reuse a Markdown snippet. Engineering and writing converge instead of forking.",
    tag: "DCX-only",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Capabilities (operations)
// ────────────────────────────────────────────────────────────────────────────
const operations = [
  {
    h: "Reuse & single-sourcing",
    p: "Conrefs, keyrefs, conditional processing, profiling, branching. Write once, ship to every channel and product line.",
  },
  {
    h: "Workflow & review",
    p: "Custom states, multi-step approvals, scheduled publishing. Inline review and SME sign-off built in.",
  },
  {
    h: "Translation",
    p: "Locale fan-out from a single source. XLIFF 2.1 round-trip with Smartling, Lilt, XTM. Translation memory native.",
  },
  {
    h: "AI co-authoring",
    p: "Generate first-draft topics, summarize for short-form, validate structure. SME-safe, version-controlled. Optional, not enforced.",
  },
  {
    h: "Multi-format publishing",
    p: "DITA-OT pipeline outputs HTML5, PDF, Markdown, EPUB — and feeds the Delivery API simultaneously. No nightly rebuild.",
  },
  {
    h: "Migration",
    p: "Inbound from MadCap, Paligo, Heretto, IXIASOFT, Confluence. A migration engineer owns it end-to-end. No fidelity loss.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is Discover CCMS DITA-only?",
    a: "No. DITA, Markdown, and HTML are all first-class authoring formats — in the same repository, with cross-format conrefs. Heretto and IXIASOFT are DITA-only. DCX lets engineering write in Markdown while documentation writes in DITA, with both flowing through the same publishing pipeline.",
  },
  {
    q: "Can we keep our existing editor?",
    a: "Yes. Oxygen (Web + Desktop), Fonto, and Ingeniux Simply XML for Microsoft Word are natively integrated. Doc-as-code teams use any IDE that speaks Git. The repository is the system of record — the editor is whatever your team already knows.",
  },
  {
    q: "How does the Git option work?",
    a: "Each project is exposed as a Git remote. Authors clone, branch, edit locally, lint and preview, then push a PR. The CCMS UI and the Git surface read from the same repository — there's no two-way sync, no drift, no merge surprises. Git is one authoring surface, not the whole product.",
  },
  {
    q: "How does this compare to Paligo?",
    a: "Paligo is a strong cloud-only structured editor. DCX gives you the same structured authoring plus a true component repository, mixed format support (not DITA-only), and an integrated Delivery API and customer portal. Paligo's strength is the editor; DCX's strength is what sits behind it.",
  },
  {
    q: "How does this compare to Heretto?",
    a: "Heretto is a strong cloud DITA-only CCMS with the Deploy portal as a separate add-on. DCX handles DITA + Markdown + HTML in one repo, ships with a real Git surface as an optional authoring path, and the Discover portal is included in the platform — not a separate license.",
  },
  {
    q: "Can we migrate from MadCap Flare, Paligo, Heretto, or IXIASOFT?",
    a: "Yes. Migration is included with Business and Enterprise engagements. A dedicated migration engineer handles conversion of projects, conditional tags, conrefs, taxonomy, and workflow rules with no fidelity loss. Typical migrations run 4–12 weeks depending on volume and complexity.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover CCMS",
  description:
    "Component content management system with a typed repository, multi-format authoring (DITA, Markdown, HTML), reuse, review, translation, and multi-channel publishing.",
  brand: { "@type": "Brand", name: "DiscoverCX" },
  manufacturer: { "@type": "Organization", name: "Ingeniux" },
  category: "Component Content Management System",
};

export default function CcmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* INTEGRATED HERO — copy + product image together */}
      <section className="relative overflow-hidden hero-glow border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                Product · Discover CCMS
              </p>
              <h1 className="headline mt-5 text-[40px] leading-[1.05] md:text-[56px]">
                Structured content,
                <br />
                <span className="text-ink-3">
                  written where your team already works.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-2">
                A component content platform built around the repository — not
                the editor. Author in <span className="kbd">DITA</span>,{" "}
                <span className="kbd">Markdown</span>, or{" "}
                <span className="kbd">HTML</span>, in Oxygen, Fonto, Simply
                XML, the browser, or your IDE. One source. Every channel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/demo">Request a demo</ButtonLink>
                <ButtonLink href="/contact?reason=pricing" variant="secondary">
                  Get a quote
                </ButtonLink>
              </div>
              <p className="mt-6 text-[12px] text-ink-4">
                DITA 1.3 · Markdown · HTML · SOC 2 Type II · 24×7 critical-care support
              </p>
            </div>

            <div className="lg:col-span-7">
              <figure className="relative">
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_70%)] blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/humans/dita-pairing.jpg"
                    alt="Two writers at adjacent monitors — one editing structured content, the other reviewing the rendered output"
                    loading="eager"
                    className="block aspect-[16/10] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-4">
                  Authoring side-by-side — structured source, live output
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* THE PITCH — 3 hooks, one breath */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">What we built</p>
              <h2 className="headline mt-3 text-[28px] md:text-[36px]">
                Repository first.
                <br />
                <span className="text-ink-3">Editor your call.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  k: "01",
                  h: "A real repository",
                  p: "Typed components, taxonomy, branching, audit. The system of record — not a file pile.",
                },
                {
                  k: "02",
                  h: "Your team's editors",
                  p: "Oxygen, Fonto, Simply XML, browser, or IDE + Git. Five surfaces, one source.",
                },
                {
                  k: "03",
                  h: "DITA + Markdown + HTML",
                  p: "Mix freely. Cross-format conrefs. Engineering and writing converge.",
                },
              ].map((b) => (
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

      {/* THE REPOSITORY */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">01 · The repository</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                The repository is the product.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Most CCMSs are an editor with a database bolted on. DCX is the
                other way around. The repository is typed, versioned, and
                governed — and the editor is whatever your team already uses to
                reach into it.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                That single decision is what makes reuse, branching, audit, and
                migration actually work — instead of just appearing in the
                feature matrix.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {repoFeatures.map((f) => (
                <div
                  key={f.h}
                  className="rounded-xl border border-line bg-bg-card p-6 elev-card"
                >
                  <h3 className="font-display text-[15.5px] font-semibold">
                    {f.h}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
                    {f.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* AUTHORING SURFACES */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">02 · Authoring surfaces</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            You can pry Oxygen out of their cold dead hands.
            <br />
            <span className="text-ink-3">Good. Don&apos;t make them switch.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Every team we&apos;ve ever rolled out to has a different favorite
            editor. We stopped fighting it. Five surfaces, one repository — your
            people keep what works, the source of truth stays single.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {authoringSurfaces.map((s) => (
              <div
                key={s.label}
                className="flex flex-col rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[17px] font-semibold">
                    {s.label}
                  </h3>
                  <span className="rounded-md border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-3">
                    {s.pill}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[10.5px] uppercase tracking-widest text-accent-2">
                  {s.audience}
                </p>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-2">
                  {s.p}
                </p>
              </div>
            ))}
          </div>

          {/* Small note about Git as one of the surfaces */}
          <div className="mt-10 rounded-xl border border-line bg-bg-2 p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
              About Git
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
              Git is an authoring surface, not the whole product. If your
              engineering team works in their IDE, we expose every project as a
              Git remote so they can clone, branch, lint, and push PRs — and the
              CCMS reviews their changes like any other contribution. If your
              writers don&apos;t live in Git, they never touch it.
            </p>
          </div>

        </Container>
      </section>

      {/* 02b — DISCOVER CX EDITOR deep dive */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-20 md:py-28">
          {/* Copy intro */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">02a · The Discover CX editor</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Authoring,
                <br />
                <span className="text-ink-3">without the angle brackets.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-[15px] leading-relaxed text-ink-2">
              <p>
                Our built-in browser editor — engineered on top of Fonto, the
                industry-leading XML editor — and extended with everything an
                enterprise team actually needs: AI assistance, native review,
                Oxygen round-trip, and usage analytics. No install, no plugin
                tax, no &quot;light edits only&quot; asterisk.
              </p>
              <p>
                Writers get a WYSIWYG surface that respects DITA structure.
                SMEs get a clean text-first experience that hides the schema.
                Both are working in the same repository, on the same topics,
                at the same time.
              </p>
            </div>
          </div>

          {/* Full-width product image */}
          <figure className="relative mt-14">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_70%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/info/ccms-client.webp"
                alt="The Discover CX editor — topic tree, structured authoring, AI assist, and live preview in one browser surface"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-4">
              The Discover CX editor — structured authoring in the browser
            </figcaption>
          </figure>

          {/* Feature grid — full width below the image */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Built on Fonto", "Industry-leading XML editor engine"],
              ["AI assist", "Draft, summarize, validate — opt-in, SME-safe"],
              ["Native comments + revisions", "Inline review, tracked changes, sign-off"],
              ["Oxygen interop", "Round-trip with no fidelity loss"],
              ["Usage analytics", "Who edited what, how often, where reused"],
              ["No install", "Browser-based for every contributor"],
            ].map(([k, v]) => (
              <div
                key={String(k)}
                className="rounded-xl border border-line bg-bg-card p-5 elev-card"
              >
                <div className="font-display text-[15px] font-semibold text-ink">
                  {k}
                </div>
                <div className="mt-1.5 text-[13px] leading-snug text-ink-3">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTENT TYPES */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">03 · Content types</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            DITA when you need structure.
            <br />
            <span className="text-ink-3">Markdown when you need speed.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Both are first-class. DITA brings the validation, reuse, and
            governance enterprise content demands. Markdown is lighter and
            faster — ideal for engineering docs, release notes, READMEs, and
            in-product help. Same repository. Same publishing pipeline.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((c) => (
              <div
                key={c.h}
                className="flex flex-col rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {c.tag}
                </span>
                <h3 className="mt-2 font-display text-[17px] font-semibold">
                  {c.h}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
                  {c.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OPERATIONS — review, translate, publish, migrate */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">04 · Operations</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Reuse, review, translate, ship.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            The boring stuff that actually decides whether your CCMS earns its
            keep. We didn&apos;t skip it.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {operations.map((c) => (
              <div
                key={c.h}
                className="rounded-xl border border-line bg-bg-card p-6 elev-card"
              >
                <h3 className="font-display text-[15.5px] font-semibold">
                  {c.h}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
                  {c.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PUBLISHING PIPELINE callout */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-24">
          <div className="mb-16">
            <CcmsPipelineDiagram />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">05 · Publishing</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                One source. Every surface.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                The DITA-OT pipeline outputs HTML5, PDF, Markdown, EPUB — and at
                the same time, the Delivery API serves clean, typed JSON to
                portals, in-product help, partner sites, and AI assistants.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                No nightly rebuild. No “published” versus “staged” drift. A
                topic ships in seconds, everywhere.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/platform/cdp" variant="secondary">
                  See the Delivery layer →
                </ButtonLink>
                <ButtonLink href="/demo" variant="secondary">
                  Run it on your content
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["HTML5", "Docs sites & portals"],
                  ["PDF", "Print & distribution"],
                  ["Markdown", "Engineering, AI"],
                  ["EPUB", "Reader apps"],
                  ["JSON / API", "Apps & assistants"],
                  ["XLIFF 2.1", "TMS round-trip"],
                ].map(([fmt, use]) => (
                  <div
                    key={fmt}
                    className="rounded-xl border border-line bg-bg-card p-4 elev-card"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                      Output
                    </div>
                    <div className="mt-1 font-display text-[16px] font-semibold">
                      {fmt}
                    </div>
                    <div className="mt-1 text-[12px] text-ink-3">{use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MIGRATION — buyer concern */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">06 · Migration</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                You don&apos;t leave your content behind.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                A migration engineer owns it end-to-end. Projects, conrefs,
                conditional tags, taxonomy, workflow rules — converted with no
                fidelity loss. Included with Business and Enterprise.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Typical migrations run 4–12 weeks. Most teams ship a parallel
                pilot in three.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact?reason=migration" variant="secondary">
                  Talk to migration →
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              {[
                "MadCap Flare",
                "Paligo",
                "Heretto",
                "IXIASOFT",
                "Confluence",
                "DocBook",
                "Author-it",
                "Custom XML",
              ].map((src) => (
                <div
                  key={src}
                  className="flex items-center gap-3 rounded-lg border border-line bg-bg-card px-4 py-3"
                >
                  <span aria-hidden className="text-accent-2">→</span>
                  <span className="text-[13.5px] font-medium text-ink">{src}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Migration in motion */}
          <div className="mt-16">
            <HumanImage
              src="/humans/mentoring-moment.jpg"
              alt="A senior writer mentoring a colleague at adjacent monitors during a migration"
              caption="A migration engineer on the call — not a runbook handed off"
            />
          </div>
        </Container>
      </section>

      <FAQList items={faqs} title="Discover CCMS — what buyers ask" />

      <FinalCTA
        title="Bring your content. Watch it click."
        lede="A 30-day proof of concept on your real DITA, Markdown, or legacy CCMS export — with your editors, your workflow, and a migration engineer on the call."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to migration", href: "/contact?reason=migration" }}
      />
    </>
  );
}
