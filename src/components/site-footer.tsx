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
      { label: "vs. Fluid Topics", href: "/compare" },
      { label: "vs. Zoomin", href: "/compare" },
      { label: "vs. MadCap Flare", href: "/compare/madcap-flare" },
      { label: "vs. Paligo", href: "/compare/paligo" },
      { label: "vs. Adobe XDM", href: "/compare/adobe-xdm" },
      { label: "vs. IXIASOFT", href: "/compare/ixiasoft" },
      { label: "vs. Zendesk Guide", href: "/compare/zendesk" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Webinars & talks", href: "/webinars" },
      { label: "CCMS RFP Template", href: "/resources/ccms-rfp-template" },
      { label: "What is a CCMS?", href: "/resources/what-is-a-ccms" },
      { label: "What is a CDP?", href: "/resources/what-is-a-cdp" },
      { label: "Customer stories", href: "/customers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing & packages", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Trust & Security", href: "/trust" },
      { label: "Partners", href: "/partners" },
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
                src="/brand/dcx-by-ingeniux.svg"
                alt="DiscoverCX by Ingeniux"
                width={180}
                height={32}
                className="h-8 w-auto"
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
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[12px] text-ink-4 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} DiscoverCX, an Ingeniux company. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink-2">Privacy</Link>
            <Link href="/terms" className="hover:text-ink-2">Terms</Link>
            <Link href="/trust" className="hover:text-ink-2">SOC 2</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
