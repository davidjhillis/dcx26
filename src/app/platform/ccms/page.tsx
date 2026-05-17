import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, FAQList, FinalCTA, HumanImage, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover CCMS — Headless CCMS with Git-Backed Repository",
  description:
    "Discover CCMS — structured content authoring on top of a Git-backed component repository. Use both, or use the repository alone with your existing editors. DITA, Markdown, doc-as-code.",
};

const useCases = [
  {
    h: "Full authoring + repository",
    p: "Tech writers and SMEs author in Discover CCMS — Oxygen, Fonto, Simply XML, or the browser editor — with workflow, review, and translation built in.",
  },
  {
    h: "Repository-only / doc-as-code",
    p: "Engineering teams keep authoring in their existing editor and Git workflow. Discover CCMS sits behind it as the structured component store, taxonomy, and publishing pipeline.",
  },
  {
    h: "Hybrid",
    p: "Most enterprise customers run both — writers in the CCMS, engineering in Git — committing to the same component repository with full traceability.",
  },
];

const capabilities = [
  { h: "DITA + Markdown + HTML", p: "First-class authoring in the format your team prefers — mixed in one repository, with single-sourcing across them." },
  { h: "Git-backed repository", p: "Check-in, branch, merge, deploy. Every component is versioned. Pull requests and code review work natively for content." },
  { h: "Doc-as-code workflows", p: "Author in VS Code, IntelliJ, or any text editor with the DCX Git remote. Lint, validate, and preview locally." },
  { h: "Workflow + review", p: "Custom states, multi-step approvals, scheduled publishing. Inline comments. Audit on every change." },
  { h: "Translation management", p: "Locale fan-out, XLIFF 2.1 round-trip with Smartling / Lilt / XTM. Translation memory native." },
  { h: "AI writing assistant", p: "Generate first-draft topics, summarize for short-form, validate structure. SME-safe, version-controlled." },
  { h: "Editor of choice", p: "Oxygen XML (Web + Desktop), Fonto, Ingeniux Simply XML for Microsoft Word, or the built-in browser editor." },
  { h: "Multi-format publishing", p: "DITA-OT pipeline outputs HTML5, PDF, Markdown, EPUB, and feeds the Delivery API simultaneously." },
];

const vsHeretto = [
  { feature: "Authoring formats", us: "DITA, Markdown, HTML in one repo", them: "DITA only" },
  { feature: "Git-backed repository", us: "Yes — full doc-as-code workflow", them: "Hosted, no Git checkout" },
  { feature: "VS Code / IDE authoring", us: "Native via Git remote", them: "Browser + Oxygen Web only" },
  { feature: "Customer-facing portal", us: "Discover Portal (in platform)", them: "Heretto Deploy (separate license)" },
  { feature: "AI authoring assistant", us: "Built in", them: "Limited" },
  { feature: "AI-ready content delivery", us: "Headless API + AI Data Operations", them: "Not core" },
  { feature: "Editor integrations", us: "Oxygen, Fonto, Simply XML, browser, IDE", them: "Oxygen, browser" },
  { feature: "SOC 2 Type II", us: "Yes", them: "Yes" },
];

const faqs = [
  {
    q: "Can we use Discover CCMS just as a repository — without your authoring UI?",
    a: "Yes. Many of our customers run Discover CCMS in repository-only mode: their writers author in Oxygen, VS Code, or a Git client and commit directly. Discover CCMS handles versioning, taxonomy, workflow, translation, and publishing — but the authoring surface is whatever your team already uses.",
  },
  {
    q: "How does the Git integration work?",
    a: "Discover CCMS exposes each project as a Git remote. Authors clone, branch, edit in their editor of choice, run local validation, and push pull requests for review. The repository is the source of truth for both the CCMS UI and the Git surface — there's no synchronization gap.",
  },
  {
    q: "Is this DITA-only?",
    a: "No. Discover CCMS handles DITA, Markdown, and HTML natively in the same repository, with single-sourcing references across them. Heretto and IXIASOFT are DITA-only — DCX lets product engineering write in Markdown while documentation writes in DITA, with both flowing through the same publishing pipeline.",
  },
  {
    q: "Do we have to commit to a specific XML editor?",
    a: "No. Oxygen (Web and Desktop), Fonto, and Ingeniux Simply XML (Microsoft Word-based for SMEs) are all natively integrated. The built-in browser editor handles light authoring. And for doc-as-code teams, any IDE that speaks Git works.",
  },
  {
    q: "How is this different from Heretto?",
    a: "Heretto is a strong cloud DITA-only CCMS with the Deploy portal as a separate add-on. Discover CCMS handles DITA + Markdown + HTML in one repo, ships with a real Git surface for doc-as-code teams, and the Discover Portal is included in the platform — not a separate license.",
  },
  {
    q: "Can we migrate from MadCap Flare, Paligo, Heretto, or IXIASOFT?",
    a: "Yes. Migration is included with Business and Enterprise engagements. A dedicated migration engineer handles conversion of your projects, conditional tags, conrefs, taxonomy, and workflow rules — with no fidelity loss. Typical migrations run 4–12 weeks depending on volume and complexity.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Discover CCMS",
  description:
    "Headless component content management system with Git-backed repository, structured authoring, and a multi-format publishing pipeline.",
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

      <PageHero
        eyebrow="Product · Discover CCMS"
        title={
          <>
            The CCMS for teams that also live in Git.
          </>
        }
        lede="Discover CCMS handles structured authoring, workflow, translation, and publishing — on top of a real Git-backed repository. Use the full authoring surface, or run repository-only behind your existing editors. Both work."
        primaryCta={{ label: "Request a demo", href: "/demo" }}
        secondaryCta={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />

      {/* HERO IMAGE */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="pt-12 pb-4 lg:pt-16">
          <HumanImage
            src="/humans/dita-pairing.jpg"
            alt="Two writers comparing structured source and rendered output at adjacent monitors"
            priority
          />
        </Container>
      </section>

      {/* HOW PEOPLE USE IT */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">Three ways customers use it</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Authoring, repository, or both. Your call.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            Some teams want a full structured-authoring environment for their
            writers. Some teams want a typed component repository behind a Git
            workflow they already have. Most teams want both — same source of
            truth, different surfaces.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {useCases.map((u, i) => (
              <div
                key={u.h}
                className="rounded-2xl border border-line bg-bg-card p-7 elev-card"
              >
                <span className="font-mono text-[11px] tracking-widest text-accent-2">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[18px] font-semibold">{u.h}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{u.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DOC-AS-CODE CALLOUT */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Doc-as-code, first-class</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Git is the surface, not a sync.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Engineering teams shouldn&apos;t need a separate authoring tool to
                contribute to docs. Discover CCMS exposes every project as a Git
                remote — clone, branch, edit in VS Code, lint and preview
                locally, push a PR for review.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                The CCMS UI and the Git surface read from the same repository —
                no two-way sync, no drift, no merge surprises.
              </p>
              <div className="mt-8">
                <ButtonLink href="/demo" variant="secondary">
                  See the Git workflow →
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="code-panel">
                <div className="code-head">
                  <span className="code-dot" />
                  <span className="code-dot" />
                  <span className="code-dot" />
                  <span className="ml-2">~/docs · main</span>
                  <span className="ml-auto text-accent-2">git push origin</span>
                </div>
                <pre className="code-body">
{`$ git clone git@dcx.example.com/edge-router.git
$ cd edge-router
$ code topics/install/rack-mount.dita

# author. lint. preview locally.
$ dcx lint topics/install
✓ 124 topics validated against DITA 1.3
✓ 3 conrefs resolved
✓ 0 broken refs

# commit & push
$ git checkout -b feature/9200-update
$ git add topics/install
$ git commit -m "9200 install: clarify uplink steps"
$ git push origin feature/9200-update

# CCMS opens a review task automatically.
→ https://dcx.example.com/review/PR-482`}</pre>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-line bg-bg">
        <Container intent="wide" className="py-20 md:py-28">
          <p className="eyebrow">Capabilities</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Built for enterprise content teams.
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

      {/* VS HERETTO */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">Comparing CCMS options</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px]">
            Discover CCMS vs. Heretto.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            The clearest like-for-like comparison in DITA CCMS. Heretto is solid for
            DITA-pure shops. Discover CCMS wins when you need mixed formats, Git, or
            an integrated portal.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-[13px]">
              <thead className="bg-bg-elev text-left text-ink-3">
                <tr>
                  <th className="px-4 py-3 font-medium">Capability</th>
                  <th className="px-4 py-3 font-medium text-accent-2">Discover CCMS</th>
                  <th className="px-4 py-3 font-medium">Heretto</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                {vsHeretto.map((row, i) => (
                  <tr key={i} className="border-t border-line align-top">
                    <td className="px-4 py-3 text-ink">{row.feature}</td>
                    <td className="px-4 py-3">{row.us}</td>
                    <td className="px-4 py-3">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] text-ink-4">
            Reflects publicly available product documentation as of May 2026.{" "}
            <Link href="/compare/heretto" className="text-accent-2 underline">
              See full comparison →
            </Link>
          </p>
        </Container>
      </section>

      <FAQList items={faqs} title="Discover CCMS — frequently asked" />

      <FinalCTA
        title="Run it on your real content."
        lede="A 30-day proof of concept on your DITA, Markdown, or legacy CCMS export — with both the authoring surface and the Git workflow live."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to migration", href: "/contact" }}
      />
    </>
  );
}
