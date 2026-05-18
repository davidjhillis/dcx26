// Inline diagrams for product pages — pure SVG/HTML so labels are crisp and
// always brand-accurate. No AI-generated text. All teal accents key off the
// CSS variable --accent.

import { ReactNode } from "react";

// ─── shared shell ──────────────────────────────────────────────────────────
function Frame({
  children,
  caption,
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-[radial-gradient(ellipse_at_top,rgba(0,199,183,0.10),transparent_60%),linear-gradient(180deg,#0E1A18_0%,var(--bg)_85%)] p-6 lg:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {children}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-bg-card px-3 py-2 text-center text-[12px] font-medium text-ink shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  );
}

// ─── 1. UNIFY — scattered sources converging into one hub ──────────────────
const unifySources = [
  "DITA",
  "Markdown",
  "HTML",
  "Confluence",
  "SharePoint",
  "PDFs",
  "Video",
  "Heretto",
];

export function UnifyDiagram() {
  return (
    <Frame caption="Eight sources. One Product Knowledge Hub.">
      <div className="grid items-center gap-6 lg:grid-cols-12">
        {/* Sources column */}
        <div className="lg:col-span-5">
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-ink-4">
            Scattered sources
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {unifySources.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        {/* Connector arrows */}
        <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
          <svg viewBox="0 0 120 240" className="h-40 w-full" aria-hidden>
            <defs>
              <linearGradient id="cdp-flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160, 200].map((y) => (
              <path
                key={y}
                d={`M 0 ${y} Q 60 ${y} 120 120`}
                stroke="url(#cdp-flow)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
            <circle cx="120" cy="120" r="3" fill="var(--accent)" />
          </svg>
        </div>

        {/* Hub */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.30),transparent_70%)] blur-2xl" />
            <div className="rounded-2xl border border-[color:var(--accent)]/45 bg-bg-card px-8 py-10 text-center elev-card">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                Discover CDP
              </p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight">
                Product
                <br />
                Knowledge Hub
              </h3>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-4">
                Unified · Searchable · Multilingual
              </p>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ─── 2. CHANNELS — hub fanning out to destinations ─────────────────────────
const channels = [
  "Product Knowledge Hub",
  "Salesforce Experience Cloud",
  "Service Cloud",
  "ServiceNow",
  "AI Assistants",
  "In-Product Help",
  "Partner Portals",
  "Mobile & Apps",
];

export function ChannelsDiagram() {
  return (
    <Frame caption="One source. Every surface.">
      <div className="grid items-center gap-6 lg:grid-cols-12">
        {/* Hub */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.30),transparent_70%)] blur-2xl" />
            <div className="rounded-2xl border border-[color:var(--accent)]/45 bg-bg-card px-8 py-10 text-center elev-card">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                Discover CDP
              </p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight">
                Delivery API
              </h3>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-4">
                Typed JSON · Real-time
              </p>
            </div>
          </div>
        </div>

        {/* Connector arrows */}
        <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
          <svg viewBox="0 0 120 240" className="h-40 w-full" aria-hidden>
            <defs>
              <linearGradient id="cdp-fan" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160, 200].map((y) => (
              <path
                key={y}
                d={`M 0 120 Q 60 ${y} 120 ${y}`}
                stroke="url(#cdp-fan)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
            <circle cx="0" cy="120" r="3" fill="var(--accent)" />
          </svg>
        </div>

        {/* Destinations */}
        <div className="lg:col-span-5">
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-ink-4">
            Destinations
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {channels.map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ─── 3. CCMS PIPELINE — authoring → repository → delivery ──────────────────
export function CcmsPipelineDiagram() {
  return (
    <Frame caption="Author once. Deliver everywhere.">
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.5fr_auto_2fr]">
        {/* Authoring */}
        <div>
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-accent-2">
            Authoring
          </p>
          <div className="grid gap-2.5">
            {["DITA", "Markdown", "HTML"].map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        {/* arrow */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 60 12" className="h-3 w-10" aria-hidden>
            <path d="M 0 6 L 50 6" stroke="var(--accent)" strokeWidth="1.5" />
            <circle cx="55" cy="6" r="2.5" fill="var(--accent)" />
          </svg>
        </div>

        {/* Repository */}
        <div className="flex items-center justify-center">
          <div className="relative w-full">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.25),transparent_70%)] blur-2xl" />
            <div className="rounded-2xl border border-[color:var(--accent)]/45 bg-bg-card px-6 py-8 text-center elev-card">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                Discover CCMS
              </p>
              <h3 className="mt-2 font-display text-[18px] font-semibold leading-tight">
                Component
                <br />
                Repository
              </h3>
              <p className="mt-3 font-mono text-[9.5px] uppercase tracking-widest text-ink-4">
                Versioned · Typed · Governed
              </p>
            </div>
          </div>
        </div>

        {/* arrow */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 60 12" className="h-3 w-10" aria-hidden>
            <path d="M 5 6 L 55 6" stroke="var(--accent)" strokeWidth="1.5" />
            <circle cx="5" cy="6" r="2.5" fill="var(--accent)" />
          </svg>
        </div>

        {/* Delivery */}
        <div>
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-accent-2">
            Delivery
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {["HTML5", "PDF", "Markdown", "EPUB", "JSON / API", "XLIFF"].map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}
