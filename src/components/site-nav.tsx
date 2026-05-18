import Link from "next/link";
import Image from "next/image";

type RichLink = {
  label: string;
  href: string;
  desc?: string;
  icon?: "blog" | "book" | "video" | "glossary";
};
type Column = {
  title: string;
  links: RichLink[];
};
type MenuItem =
  | { label: string; href: string }
  | {
      label: string;
      menu: {
        columns: Column[];
        cta?: { label: string; href: string };
        variant?: "rich";
      };
    };

function MenuIcon({ name }: { name: NonNullable<RichLink["icon"]> }) {
  const common = "h-5 w-5 fill-none stroke-[color:var(--accent)] stroke-[1.5]";
  switch (name) {
    case "blog":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18M7 13h6M7 16h4" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z" />
          <path d="M9 7h7M9 11h7" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect x="3" y="5" width="14" height="14" rx="2" />
          <path d="M17 9l4-2v10l-4-2z" />
          <path d="M9 9l4 3-4 3z" className="fill-[color:var(--accent)] stroke-none" />
        </svg>
      );
    case "glossary":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4V4z" />
          <path d="M8 9h8M8 13h6" />
        </svg>
      );
  }
}

const nav: MenuItem[] = [
  {
    label: "Platform",
    menu: {
      // Simplified product list (per Dave): just Platform / CCMS / CDP / AI.
      columns: [
        {
          title: "Products",
          links: [
            { label: "Platform", href: "/platform" },
            { label: "CCMS", href: "/platform/ccms" },
            { label: "Content Delivery Platform", href: "/platform/cdp" },
            { label: "AI", href: "/platform/ai" },
          ],
        },
      ],
      cta: { label: "Explore the platform", href: "/platform" },
    },
  },
  {
    label: "Solutions",
    menu: {
      columns: [
        {
          title: "By use case",
          links: [
            { label: "Technical Documentation", href: "/solutions/technical-docs" },
            { label: "AI Training & RAG", href: "/solutions/ai" },
            { label: "Salesforce Knowledge", href: "/solutions/salesforce" },
            { label: "Policies & SOPs", href: "/solutions/policies" },
            { label: "eLearning / LCMS", href: "/solutions/elearning" },
            { label: "Customer Portals", href: "/solutions/portals" },
          ],
        },
        {
          title: "By team",
          links: [
            { label: "Documentation", href: "/solutions/technical-docs" },
            { label: "Customer Success", href: "/solutions/portals" },
            { label: "Compliance & Risk", href: "/solutions/policies" },
            { label: "Learning & Development", href: "/solutions/elearning" },
            { label: "AI / Knowledge", href: "/solutions/ai" },
          ],
        },
        {
          title: "Quick path",
          links: [
            { label: "Request a demo", href: "/demo" },
            { label: "Talk to sales", href: "/contact" },
            { label: "See pricing", href: "/pricing" },
            { label: "Download RFP template", href: "/resources/ccms-rfp-template" },
          ],
        },
      ],
      cta: { label: "All solutions", href: "/solutions" },
    },
  },
  {
    label: "Insights",
    menu: {
      columns: [
        {
          title: "Insights",
          links: [
            { label: "Blog", href: "/blog" },
            { label: "Whitepapers and eBooks", href: "/resources/ebooks" },
            { label: "Videos and Webinars", href: "/resources/videos" },
          ],
        },
      ],
      cta: { label: "View all insights", href: "/insights" },
    },
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

function MenuPanel({
  menu,
}: {
  menu: { columns: Column[]; cta?: { label: string; href: string }; variant?: "rich" };
}) {
  const colCount = menu.columns.length;
  const isRich = menu.variant === "rich";
  const widthClass = isRich
    ? "w-[400px]"
    : colCount === 1
      ? "w-[320px]"
      : colCount === 2
        ? "w-[560px]"
        : "w-[780px]";
  const gridClass = colCount === 1 ? "grid-cols-1" : colCount === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div
      className="
        invisible absolute left-0 top-full z-50 pt-3 opacity-0
        transition-all duration-150
        group-hover:visible group-hover:opacity-100
        group-focus-within:visible group-focus-within:opacity-100
      "
    >
      <div
        className={`
          ${widthClass} overflow-hidden rounded-xl border border-black/5
          bg-cream text-cream-ink
          shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]
        `}
      >
        {isRich ? (
          <ul className="px-3 py-3">
            {menu.columns[0].links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group/item flex gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-black/[0.04]"
                >
                  {l.icon && (
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                      <MenuIcon name={l.icon} />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold leading-tight text-cream-ink group-hover/item:text-[color:var(--accent)]">
                      {l.label}
                    </span>
                    {l.desc && (
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-cream-ink-2/75">
                        {l.desc}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className={`grid ${gridClass} gap-x-6 px-7 py-7`}>
            {menu.columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-widest text-cream-ink-2/55">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block text-[14px] font-semibold leading-tight text-cream-ink hover:text-[color:var(--accent)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {menu.cta && (
          <Link
            href={menu.cta.href}
            className="flex items-center justify-between border-t border-black/10 bg-black/[0.04] px-7 py-3.5 text-[13px] font-semibold text-cream-ink hover:bg-black/[0.07] hover:text-[color:var(--accent)]"
          >
            <span>{menu.cta.label}</span>
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="DiscoverCX home">
          <Image
            src="/brand/dcx-white.svg"
            alt="DiscoverCX"
            width={140}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            "menu" in item ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:text-ink group-hover:text-ink"
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    aria-hidden
                    className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <MenuPanel menu={item.menu} />
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden text-[13px] text-ink-2 transition-colors hover:text-ink md:inline-block"
          >
            Talk to sales
          </Link>
          <Link
            href="/demo"
            className="rounded-md bg-ink px-3 py-1.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-90"
          >
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}
