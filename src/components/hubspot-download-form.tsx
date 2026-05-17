"use client";

import { useState } from "react";

type Props = {
  slug: string;
  ctaLabel: string;
  variant?: "card" | "inline";
};

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; pdfUrl: string; title: string }
  | { state: "error"; message: string };

export function HubSpotDownloadForm({ slug, ctaLabel, variant = "card" }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "submitting" });

    const form = new FormData(e.currentTarget);
    const payload = {
      slug,
      firstname: String(form.get("firstname") ?? "").trim(),
      lastname: String(form.get("lastname") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      pageUri:
        typeof window !== "undefined" ? window.location.href : undefined,
      pageName:
        typeof document !== "undefined" ? document.title : undefined,
    };

    try {
      const res = await fetch("/api/hubspot/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data?.error || "Something went wrong. Try again.",
        });
        return;
      }
      setStatus({ state: "success", pdfUrl: data.pdfUrl, title: data.title });
      // Auto-open PDF in new tab
      if (typeof window !== "undefined") {
        window.open(data.pdfUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Check your connection and try again.",
      });
    }
  }

  const wrap =
    variant === "card"
      ? "rounded-2xl border border-line bg-bg-card p-6 elev-card"
      : "";

  if (status.state === "success") {
    return (
      <div className={wrap}>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Sent
        </div>
        <h3 className="mt-3 font-display text-[18px] font-semibold leading-tight">
          Your download is ready.
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">
          A new tab opened with the PDF. We also emailed it to you so it&apos;s
          saved for later.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={status.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-[13px] font-medium text-bg hover:opacity-90"
          >
            Open PDF
            <span aria-hidden>↗</span>
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-bg-elev px-3.5 py-2 text-[13px] font-medium text-ink hover:border-line-2"
          >
            Talk to a solution architect
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={wrap} noValidate>
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Free download · PDF
      </div>
      <h3 className="mt-3 font-display text-[18px] font-semibold leading-tight">
        Get the PDF.
      </h3>
      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-3">
        We&apos;ll email you the link. No phone calls — promise.
      </p>

      <div className="mt-5 grid gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Field name="firstname" label="First name" required autoComplete="given-name" />
          <Field name="lastname" label="Last name" autoComplete="family-name" />
        </div>
        <Field name="email" type="email" label="Work email" required autoComplete="email" />
        <Field name="company" label="Company" required autoComplete="organization" />
      </div>

      {status.state === "error" && (
        <p className="mt-3 text-[12px] text-[color:#ff8a8a]">{status.message}</p>
      )}

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-ink px-3.5 py-2.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status.state === "submitting" ? "Sending…" : ctaLabel}
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-ink-4">
        By downloading, you agree to receive related DiscoverCX updates. You can
        unsubscribe any time. See our{" "}
        <a
          href="https://www.ingeniux.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink-3"
        >
          privacy policy
        </a>
        .
      </p>
    </form>
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
        className="w-full rounded-md border border-line bg-bg px-3 py-2 text-[13.5px] text-ink placeholder:text-ink-4 outline-none transition-colors focus:border-[color:var(--accent)]"
      />
    </label>
  );
}
