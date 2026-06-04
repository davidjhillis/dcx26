"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MarkdownToggle() {
  const path = usePathname() || "/";
  const mdPath = path === "/" ? "/index.md" : `${path}.md`;

  return (
    <Link
      href={mdPath}
      title="View as Markdown (for LLMs)"
      aria-label="View this page as Markdown — for LLMs and AI agents"
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
