"use client";

import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";

const STORAGE_KEY = "dcx-theme";

function resolveSystem(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(mode: Mode) {
  const resolved = mode === "system" ? resolveSystem() : mode;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? "system";
    setMode(stored);
    setMounted(true);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const current = (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? "system";
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function cycle() {
    const next: Mode =
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    setMode(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  const label =
    mode === "system" ? "System theme" : mode === "light" ? "Light theme" : "Dark theme";

  return (
    <button
      type="button"
      onClick={cycle}
      title={label}
      aria-label={`${label} (click to change)`}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-line-2 bg-bg-elev text-ink-2 transition-colors hover:border-line-3 hover:text-ink"
    >
      {/* Render a stable placeholder until mounted to avoid hydration mismatch */}
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : mode === "light" ? (
        <SunIcon />
      ) : mode === "dark" ? (
        <MoonIcon />
      ) : (
        <SystemIcon />
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
