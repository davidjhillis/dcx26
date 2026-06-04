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
      title="View this page as Markdown — designed for LLMs and AI agents"
      aria-label="Open the LLM view of this page"
      className="flex h-8 items-center rounded-md border border-line-2 bg-bg-elev px-3 text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
    >
      <span className="font-mono text-[10.5px] uppercase tracking-wider">
        LLM&nbsp;View
      </span>
    </Link>
  );
}
