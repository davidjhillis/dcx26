"use client";

import { useEffect, useRef, useState } from "react";

const SITE = "https://discovercx.com";

export function MarkdownActions({
  rawMdUrl,
  marketingUrl,
}: {
  rawMdUrl: string; // "/platform/ccms.md"
  marketingUrl: string; // "/platform/ccms"
}) {
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copying" | "copied" | "error">(
    "idle"
  );
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  async function copyAsMarkdown() {
    try {
      setCopyState("copying");
      const res = await fetch(rawMdUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("error");
      setTimeout(() => setCopyState("idle"), 2200);
    }
  }

  const absoluteMd = `${SITE}${rawMdUrl}`;
  const prompt = `Read this page from DiscoverCX and tell me about it: ${absoluteMd}`;
  const chatGPTHref = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
  const claudeHref = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-8 items-center gap-1.5 rounded-md border border-line-2 bg-bg-elev px-3 text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-wider">LLM&nbsp;View</span>
        <svg viewBox="0 0 12 12" className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-[260px] overflow-hidden rounded-lg border border-line-2 bg-bg-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
        >
          <button
            type="button"
            onClick={copyAsMarkdown}
            className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-bg-elev"
          >
            <ActionIcon name="copy" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">
                {copyState === "copying"
                  ? "Copying…"
                  : copyState === "copied"
                  ? "Copied to clipboard"
                  : copyState === "error"
                  ? "Couldn't copy"
                  : "Copy as Markdown"}
              </div>
              <div className="mt-0.5 text-[11.5px] text-ink-3">
                Paste into any chat or editor
              </div>
            </div>
          </button>

          <a
            href={chatGPTHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-bg-elev"
            onClick={() => setOpen(false)}
          >
            <ActionIcon name="chatgpt" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">Open in ChatGPT</div>
              <div className="mt-0.5 text-[11.5px] text-ink-3">
                New chat pointed at this page
              </div>
            </div>
          </a>

          <a
            href={claudeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-bg-elev"
            onClick={() => setOpen(false)}
          >
            <ActionIcon name="claude" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">Open in Claude</div>
              <div className="mt-0.5 text-[11.5px] text-ink-3">
                New chat pointed at this page
              </div>
            </div>
          </a>

          <a
            href={rawMdUrl}
            target="_blank"
            rel="noopener"
            className="flex items-start gap-3 border-t border-line px-4 py-3 transition-colors hover:bg-bg-elev"
            onClick={() => setOpen(false)}
          >
            <ActionIcon name="raw" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">View raw .md</div>
              <div className="mt-0.5 text-[11.5px] text-ink-3 truncate">{rawMdUrl}</div>
            </div>
          </a>

          <a
            href={marketingUrl}
            className="flex items-start gap-3 border-t border-line bg-bg-2 px-4 py-3 transition-colors hover:bg-bg-elev"
            onClick={() => setOpen(false)}
          >
            <ActionIcon name="back" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">
                Back to designed page
              </div>
              <div className="mt-0.5 text-[11.5px] text-ink-3 truncate">{marketingUrl}</div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

function ActionIcon({
  name,
}: {
  name: "copy" | "raw" | "chatgpt" | "claude" | "back";
}) {
  const common =
    "mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current text-accent-2 [stroke-width:1.7]";
  switch (name) {
    case "copy":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
      );
    case "raw":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6M8 13h6M8 17h4" />
        </svg>
      );
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M4 4l8 16 8-16M8 14h8" />
        </svg>
      );
    case "back":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      );
  }
}
