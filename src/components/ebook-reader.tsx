"use client";

import { Fragment, useEffect, useRef, useState } from "react";
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
          const showInlineGate =
            !isUnlocked && pageNum === gateAtPage;
          return (
            <Fragment key={file}>
              {showInlineGate && (
                <InlineGate
                  remainingPages={totalPages - gateAtPage + 1}
                  totalPages={totalPages}
                  formStatus={formStatus}
                  onSubmit={onSubmit}
                />
              )}
              <div
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
            </Fragment>
          );
        })}
      </div>

      {/* Mini sticky progress chip when gated (so they know form is waiting) */}
      {gate.kind === "gated" && (
        <button
          type="button"
          onClick={() => {
            const el = pageRefs.current[gateAtPage - 1];
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-[color:var(--accent)]/40 bg-bg/95 px-3.5 py-2 text-[12px] font-medium text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-[color:var(--accent)]/70 md:inline-flex"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-accent-2" strokeWidth="1.5" aria-hidden>
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
          </svg>
          Unlock the rest →
        </button>
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

function InlineGate({
  remainingPages,
  totalPages,
  formStatus,
  onSubmit,
}: {
  remainingPages: number;
  totalPages: number;
  formStatus: FormStatus;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="relative mx-auto my-8 max-w-[1080px] scroll-mt-24" id="unlock">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.22),transparent_70%)] blur-3xl" />
      <div className="overflow-hidden rounded-2xl border-2 border-[color:var(--accent)]/50 bg-gradient-to-b from-[color:rgba(0,199,183,0.08)] to-bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="grid gap-8 p-8 lg:grid-cols-12 lg:gap-10 lg:p-12">
          {/* Left: pitch */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-bg/40">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-accent-2" strokeWidth="2" aria-hidden>
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
              </span>
              Unlock the rest · {remainingPages} of {totalPages} pages
            </div>
            <h3 className="mt-4 font-display text-[26px] font-semibold leading-tight md:text-[32px]">
              Liking it so far?
              <br />
              <span className="text-ink-3">Tell us where to send the rest.</span>
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">
              Drop your work email and we&apos;ll unlock the remaining pages
              right here, plus send the full PDF to your inbox so you can
              share it with your team.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Read the rest in this browser, instantly",
                "Full PDF emailed for offline + sharing",
                "No phone calls. No spam. Unsubscribe any time.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-[13.5px] leading-snug text-ink">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-accent-2" strokeWidth="2" aria-hidden>
                    <path d="M4 10l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <form onSubmit={onSubmit} className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Field name="firstname" label="First name" required autoComplete="given-name" />
                <Field name="lastname" label="Last name" autoComplete="family-name" />
              </div>
              <Field name="email" type="email" label="Work email" required autoComplete="email" />
              <Field name="company" label="Company" required autoComplete="organization" />

              {formStatus.state === "error" && (
                <p className="text-[12.5px] text-[color:#ff8a8a]">
                  {formStatus.message}
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus.state === "submitting"}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {formStatus.state === "submitting"
                  ? "Sending…"
                  : `Unlock ${remainingPages} pages + email me the PDF`}
              </button>

              <p className="text-[11px] leading-relaxed text-ink-4">
                By submitting, you agree to receive related DiscoverCX updates.
                Unsubscribe any time.{" "}
                <Link
                  href="https://www.ingeniux.com/privacy-policy"
                  className="underline hover:text-ink-3"
                >
                  Privacy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-ink-3">
        {label}
        {required && <span className="ml-1 text-accent-2">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-line bg-bg px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 outline-none transition-colors focus:border-[color:var(--accent)]"
      />
    </label>
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
