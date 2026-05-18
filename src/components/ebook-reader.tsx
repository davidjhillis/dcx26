"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  pdfUrl: string;
  pages: string[]; // ["page-001.jpg", ...]
  totalPages: number;
  /** Below this page (1-indexed), pages render free. At/after, they're gated. */
  gateAtPage: number;
};

type GateState =
  | { kind: "open" } // not yet hit threshold
  | { kind: "gated" } // hit threshold, form not submitted
  | { kind: "unlocked"; pdfUrl: string }; // form submitted

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "error"; message: string };

export function EbookReader({
  slug,
  title,
  pdfUrl,
  pages,
  totalPages,
  gateAtPage,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageReached, setMaxPageReached] = useState(1);
  const [gate, setGate] = useState<GateState>({ kind: "open" });
  const [formStatus, setFormStatus] = useState<FormStatus>({ state: "idle" });

  // The hard gate page: after the user lands on this page, they must submit.
  // Pages >= gateAtPage are blurred until unlocked.
  const isUnlocked = gate.kind === "unlocked";

  // IntersectionObserver to track which page is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topMost = currentPage;
        let bestRatio = 0;
        for (const ent of entries) {
          if (ent.isIntersecting && ent.intersectionRatio > bestRatio) {
            const idx = Number((ent.target as HTMLElement).dataset.page);
            if (idx) {
              topMost = idx;
              bestRatio = ent.intersectionRatio;
            }
          }
        }
        if (bestRatio > 0) {
          setCurrentPage(topMost);
          setMaxPageReached((m) => Math.max(m, topMost));
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -40% 0px",
      }
    );
    for (const el of pageRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [currentPage]);

  // Flip into gated state when maxPageReached crosses threshold
  useEffect(() => {
    if (gate.kind === "open" && maxPageReached >= gateAtPage) {
      setGate({ kind: "gated" });
    }
  }, [maxPageReached, gateAtPage, gate.kind]);

  const progressPct = Math.min(100, Math.round((currentPage / totalPages) * 100));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus({ state: "submitting" });
    const fd = new FormData(e.currentTarget);
    const body = {
      slug,
      firstname: String(fd.get("firstname") || "").trim(),
      lastname: String(fd.get("lastname") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      progressPct,
      pageUri: typeof window !== "undefined" ? window.location.href : undefined,
      pageName: typeof document !== "undefined" ? document.title : undefined,
    };
    try {
      const res = await fetch("/api/hubspot/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormStatus({ state: "error", message: data?.error || "Try again." });
        return;
      }
      setGate({ kind: "unlocked", pdfUrl: data.pdfUrl });
      setFormStatus({ state: "idle" });
    } catch {
      setFormStatus({ state: "error", message: "Network error. Try again." });
    }
  }

  function jumpTo(pageIdx: number) {
    const el = pageRefs.current[pageIdx - 1];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Visible pages: always render all metadata, but blur images for gated pages
  return (
    <div className="relative">
      {/* Top progress + page indicator */}
      <ReaderToolbar
        title={title}
        currentPage={currentPage}
        totalPages={totalPages}
        progressPct={progressPct}
        isUnlocked={isUnlocked}
        pdfUrl={isUnlocked ? gate.pdfUrl : null}
        onJump={jumpTo}
      />

      <div ref={containerRef} className="relative">
        {pages.map((file, i) => {
          const pageNum = i + 1;
          const locked = !isUnlocked && pageNum >= gateAtPage;
          return (
            <div
              key={file}
              ref={(el) => {
                pageRefs.current[i] = el;
              }}
              data-page={pageNum}
              className="relative mx-auto my-6 max-w-[1080px] overflow-hidden rounded-lg border border-line bg-bg-card shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
            >
              <Image
                src={`/ebooks/${slug}/${file}`}
                alt={`Page ${pageNum} of ${totalPages}`}
                width={1100}
                height={1425}
                className={`block h-auto w-full select-none ${
                  locked ? "blur-[14px] brightness-50" : ""
                } transition-[filter] duration-300`}
                priority={i < 3}
                draggable={false}
              />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                {pageNum} / {totalPages}
              </span>
              {locked && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-bg/60 backdrop-blur">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V7a4 4 0 018 0v4" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sticky gate bar */}
      {gate.kind === "gated" && (
        <GateBar
          slug={slug}
          progressPct={progressPct}
          formStatus={formStatus}
          onSubmit={onSubmit}
          onDismiss={() => {
            // The bar can collapse to a slim chip; clicking re-expands
            setGate({ kind: "open" });
            setTimeout(() => setGate({ kind: "gated" }), 100);
          }}
        />
      )}

      {gate.kind === "unlocked" && (
        <UnlockedBar pdfUrl={gate.pdfUrl} title={title} />
      )}
    </div>
  );
}

function ReaderToolbar({
  title,
  currentPage,
  totalPages,
  progressPct,
  isUnlocked,
  pdfUrl,
  onJump,
}: {
  title: string;
  currentPage: number;
  totalPages: number;
  progressPct: number;
  isUnlocked: boolean;
  pdfUrl: string | null;
  onJump: (n: number) => void;
}) {
  return (
    <div className="sticky top-14 z-30 -mx-6 border-y border-line bg-bg/85 px-6 py-3 backdrop-blur-xl lg:-mx-10 lg:px-10">
      <div className="flex items-center gap-4">
        <div className="hidden min-w-0 truncate text-[12.5px] text-ink-2 md:block md:max-w-[300px]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
            Reading
          </span>{" "}
          <span className="text-ink">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onJump(Math.max(1, currentPage - 1))}
            className="rounded-md border border-line bg-bg-card px-2 py-1 text-[12px] text-ink-2 hover:border-line-2 hover:text-ink"
            aria-label="Previous page"
          >
            ←
          </button>
          <span className="font-mono text-[11px] text-ink-3">
            <span className="text-ink">{currentPage}</span> / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => onJump(Math.min(totalPages, currentPage + 1))}
            className="rounded-md border border-line bg-bg-card px-2 py-1 text-[12px] text-ink-2 hover:border-line-2 hover:text-ink"
            aria-label="Next page"
          >
            →
          </button>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {isUnlocked && pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md bg-ink px-3 py-1.5 text-[12px] font-medium text-bg hover:opacity-90 md:inline-block"
            >
              Download PDF ↓
            </a>
          )}
        </div>
      </div>
      <div className="mt-2.5 h-[3px] w-full overflow-hidden rounded-full bg-bg-elev">
        <div
          className="h-full bg-[color:var(--accent)] transition-[width] duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </div>
  );
}

function GateBar({
  slug,
  progressPct,
  formStatus,
  onSubmit,
}: {
  slug: string;
  progressPct: number;
  formStatus: FormStatus;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onDismiss: () => void;
}) {
  const [expanded, setExpanded] = useState(true);

  if (!expanded) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <span className="text-[12.5px] text-ink-2">
            <span className="font-mono uppercase tracking-widest text-accent-2">
              {progressPct}% read
            </span>{" "}
            · keep reading or save it for later
          </span>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-md bg-ink px-3 py-1.5 text-[12px] font-medium text-bg hover:opacity-90"
          >
            Save this for later
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--accent)]/40 bg-bg/95 px-4 py-5 backdrop-blur-xl shadow-[0_-12px_40px_-10px_rgba(0,0,0,0.6)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {progressPct}% through · save the rest
            </div>
            <h3 className="mt-2 font-display text-[18px] font-semibold leading-tight">
              Want the full eBook on your laptop?
            </h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-3">
              We&apos;ll send the PDF to your inbox. Take it to your team — and
              unlock the rest of the pages on this page right now.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Collapse"
            className="rounded-md border border-line bg-bg-card px-2 py-1 text-[12px] text-ink-3 hover:text-ink"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_1.4fr_1.2fr_auto]"
        >
          <input
            name="firstname"
            placeholder="First name"
            required
            autoComplete="given-name"
            className="rounded-md border border-line bg-bg px-3 py-2 text-[13px] text-ink placeholder:text-ink-4 outline-none focus:border-[color:var(--accent)]"
          />
          <input
            name="lastname"
            placeholder="Last name"
            autoComplete="family-name"
            className="rounded-md border border-line bg-bg px-3 py-2 text-[13px] text-ink placeholder:text-ink-4 outline-none focus:border-[color:var(--accent)]"
          />
          <input
            name="email"
            type="email"
            placeholder="Work email"
            required
            autoComplete="email"
            className="rounded-md border border-line bg-bg px-3 py-2 text-[13px] text-ink placeholder:text-ink-4 outline-none focus:border-[color:var(--accent)]"
          />
          <input
            name="company"
            placeholder="Company"
            required
            autoComplete="organization"
            className="rounded-md border border-line bg-bg px-3 py-2 text-[13px] text-ink placeholder:text-ink-4 outline-none focus:border-[color:var(--accent)]"
          />
          <button
            type="submit"
            disabled={formStatus.state === "submitting"}
            className="rounded-md bg-ink px-4 py-2 text-[13px] font-semibold text-bg hover:opacity-90 disabled:opacity-50"
          >
            {formStatus.state === "submitting" ? "Sending…" : "Unlock"}
          </button>
        </form>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-ink-4">
          <span>
            By submitting, you agree to receive related DiscoverCX updates.
            Unsubscribe any time.{" "}
            <Link
              href="https://www.ingeniux.com/privacy-policy"
              className="underline hover:text-ink-3"
            >
              Privacy
            </Link>
            .
          </span>
          {formStatus.state === "error" && (
            <span className="text-[color:#ff8a8a]">{formStatus.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function UnlockedBar({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--accent)]/40 bg-bg/95 px-4 py-4 backdrop-blur-xl shadow-[0_-12px_40px_-10px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Unlocked
        </div>
        <p className="text-[13px] text-ink">
          You&apos;re in. Full PDF in your inbox + the rest of the pages are now
          visible.
        </p>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-ink px-3.5 py-2 text-[13px] font-semibold text-bg hover:opacity-90"
          >
            Download PDF
          </a>
          <Link
            href={`/demo?ref=${encodeURIComponent(title)}`}
            className="rounded-md border border-[color:var(--accent)]/40 bg-bg-card px-3.5 py-2 text-[13px] font-semibold text-accent-2 hover:border-[color:var(--accent)]/70 hover:text-accent"
          >
            Talk to an SE
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Close"
            className="rounded-md border border-line bg-bg-card px-2 py-1 text-[12px] text-ink-3 hover:text-ink"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
