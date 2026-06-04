"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// In-page chip in the site header. Routes to the styled reader view
// (/r/<path>) which contains the full "Copy / Open in ChatGPT / Open in
// Claude / View raw .md" dropdown.
export function MarkdownToggle() {
  const path = usePathname() || "/";
  // Don't link to itself when already on a reader page or an .md route.
  if (path.startsWith("/r/")) return null;
  const readerPath = path === "/" ? "/r/index" : `/r${path}`;

  return (
    <Link
      href={readerPath}
      title="View as Markdown — designed for humans and AI"
      aria-label="Read this page as Markdown"
      className="group flex h-8 items-center gap-1.5 rounded-md border border-line-2 bg-bg-elev px-2.5 text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 8l3 4 3-4M8 12V4M14 16l3-4 3 4M17 12v8" />
      </svg>
      <span className="font-mono text-[10.5px] uppercase tracking-wider">
        .md
      </span>
    </Link>
  );
}
