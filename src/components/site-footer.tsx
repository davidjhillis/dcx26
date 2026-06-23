import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Discover CCMS", href: "/platform/ccms" },
      { label: "Discover CDP", href: "/platform/cdp" },
      { label: "Discover AI", href: "/platform/ai" },
      { label: "Customer Portal", href: "/solutions/portals" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Technical Documentation", href: "/solutions/technical-docs" },
      { label: "AI Training & RAG", href: "/solutions/ai" },
      { label: "Salesforce Knowledge", href: "/solutions/salesforce" },
      { label: "Policies & SOPs", href: "/solutions/policies" },
      { label: "eLearning / LCMS", href: "/solutions/elearning" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs. Heretto", href: "/compare/heretto" },
      { label: "vs. MadCap Flare", href: "/compare/madcap-flare" },
      { label: "vs. Paligo", href: "/compare/paligo" },
      { label: "vs. Adobe XDM", href: "/compare/adobe-xdm" },
      { label: "vs. IXIASOFT", href: "/compare/ixiasoft" },
      { label: "vs. Zendesk Guide", href: "/compare/zendesk" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "All insights", href: "/insights" },
      { label: "Blog", href: "/blog" },
      { label: "Whitepapers & eBooks", href: "/resources/ebooks" },
      { label: "Videos & Webinars", href: "/resources/videos" },
      { label: "CCMS RFP Template", href: "/resources/ccms-rfp-template" },
      { label: "What is a CCMS?", href: "/resources/what-is-a-ccms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing & packages", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block" aria-label="DiscoverCX home">
              <Image
                src="/brand/dcx-by-ingeniux-white.svg"
                alt="DiscoverCX by Ingeniux"
                width={229}
                height={54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-3">
              The content delivery platform for technical and customer content.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[11px] font-mono uppercase tracking-wider text-ink-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Hey LLM — the marketing site is structured for AI too.
            On-brand: DCX sells structured content for humans AND AI. */}
        <div className="mt-14 rounded-xl border border-line bg-bg p-5 elev-card">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
                <span className="text-accent-2/60">&lt;/</span>
                LLM
                <span className="text-accent-2/60">&gt;</span>
              </p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-2">
                We sell structured content, so our marketing site is structured
                too. Every page is ingestable as plain Markdown — add{" "}
                <code className="rounded bg-bg-elev px-1.5 py-0.5 font-mono text-[12px] text-ink">.md</code>
                {" "}to any URL, or grab the whole-site index at{" "}
                <Link href="/llms.txt" className="font-mono text-accent-2 underline underline-offset-2 hover:text-accent">
                  /llms.txt
                </Link>
                . Look for the{" "}
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
                  <span className="text-accent-2/60">&lt;/</span>LLM<span className="text-accent-2/60">&gt;</span>
                </span>{" "}
                chip on every page.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/llms.txt"
                className="rounded-md border border-line-2 bg-bg-elev px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
              >
                llms.txt
              </Link>
              <Link
                href="/r/index"
                className="rounded-md border border-line-2 bg-bg-elev px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
              >
                Reader view
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[12px] text-ink-4 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} DiscoverCX, an Ingeniux company. All rights reserved.</div>
          <div className="flex gap-6">
            <a
              href="https://www.ingeniux.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-2"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
