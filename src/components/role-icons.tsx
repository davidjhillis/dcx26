// Simple inline SVG icons for the 6 roles. Crisp at any size, brand-aligned.

import type { IconKey } from "@/app/roles/_data";

const base = "h-5 w-5 fill-none stroke-current";

export function RoleIcon({ name, className }: { name: IconKey; className?: string }) {
  const cn = `${base} ${className ?? ""}`;
  switch (name) {
    case "writer":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <path d="M4 5h12a4 4 0 014 4v11H8a4 4 0 01-4-4V5z" />
          <path d="M4 16a4 4 0 014-4h12" />
          <path d="M9 9h6M9 12h4" />
        </svg>
      );
    case "exec":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
          <path d="M9 5l3-2 3 2" />
        </svg>
      );
    case "field":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <path d="M14.7 6.3a4 4 0 00-5.7 5.7l-5 5a2 2 0 102.8 2.8l5-5a4 4 0 005.7-5.7l-2.8 2.8-2-2 2-2z" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <path d="M4 14a8 8 0 0116 0v3a2 2 0 01-2 2h-1v-6h3" />
          <path d="M4 14v3a2 2 0 002 2h1v-6H4" />
        </svg>
      );
    case "engineering":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M19 12a7 7 0 00-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 00-2-1.2L14 3h-4l-.6 2.5a7 7 0 00-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9c.6.5 1.3.9 2 1.2L10 21h4l.6-2.6a7 7 0 002-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" />
        </svg>
      );
    case "leadership":
      return (
        <svg viewBox="0 0 24 24" className={cn} strokeWidth="1.5" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
          <path d="M14 20v-1a3 3 0 013-3h2a3 3 0 013 3v1" />
        </svg>
      );
  }
}
