"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hasMarkdown } from "@/lib/md-paths";

// In-page chip in the site header. Routes to the styled reader view
// (/r/<path>) which contains the full "Copy / Open in ChatGPT / Open in
// Claude / View raw .md" dropdown.
export function MarkdownToggle() {
  const path = usePathname() || "/";
  // Don't link to itself when already on a reader page or an .md route.
  if (path.startsWith("/r/")) return null;
  // Don't render if the current route has no markdown twin yet —
  // avoids dead links into /r/ → 404.
  if (!hasMarkdown(path)) return null;
  const readerPath = path === "/" ? "/r/index" : `/r${path}`;

  return (
    <Link
      href={readerPath}
      title="View this page as Markdown — designed for LLMs and AI agents"
      aria-label="Open the LLM-friendly view of this page"
      className="flex h-8 items-center rounded-md border border-line-2 bg-bg-elev px-3 text-ink-2 transition-colors hover:border-line-3 hover:border-[color:var(--accent)]/40 hover:text-accent-2"
    >
      <span className="font-mono text-[11px] uppercase tracking-wider">
        <span className="text-ink-4">&lt;/</span>
        LLM
        <span className="text-ink-4">&gt;</span>
      </span>
    </Link>
  );
}
