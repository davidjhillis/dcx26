import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "About", href: "/about" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between px-8 lg:px-12">
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
