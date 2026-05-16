import Link from "next/link";

const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-accent" aria-hidden />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            DiscoverCX
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
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
