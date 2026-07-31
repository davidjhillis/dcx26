"use client";

import { useEffect, useRef, useState } from "react";
import type { FormId } from "@/lib/hubspot-forms";

// Beacon-styled form that POSTs to /api/hubspot/submit, which proxies to
// HubSpot's submissions endpoint. Anti-spam: hidden honeypot, time-on-page,
// free-email blocklist (server-side), per-IP rate limit (server-side).

export type DcxField =
  | {
      kind: "text" | "email" | "tel";
      name: string;
      label: string;
      required?: boolean;
      autoComplete?: string;
      half?: boolean; // share row with the next half-field on md+
      placeholder?: string;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      rows?: number;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      required?: boolean;
      options: { value: string; label: string }[];
      half?: boolean;
    };

type Props = {
  formId: FormId | string;
  fields: DcxField[];
  submitLabel: string;
  submittingLabel?: string;
  /** Text to show in place of the form on success. */
  successTitle?: string;
  successBody?: string;
  /** If set, navigate here on success instead of showing the inline message. */
  redirectTo?: string;
  /** Called on successful submit (for in-place unlocks). Suppresses redirect. */
  onSubmitted?: () => void;
  /** Optional fine-print rendered under the submit button. */
  footnote?: React.ReactNode;
  /** Short label for analytics (e.g. "demo", "ebook", "contact", "rfp"). */
  formName?: string;
};

export function DcxForm({
  formId,
  fields,
  submitLabel,
  submittingLabel = "Sending…",
  successTitle = "Thanks — we've got it.",
  successBody = "A real human will follow up shortly.",
  redirectTo,
  onSubmitted,
  footnote,
  formName,
}: Props) {
  const startedAtRef = useRef<number>(0);
  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "error"; message: string }
    | { state: "success" }
  >({ state: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;
    setStatus({ state: "submitting" });

    const fd = new FormData(e.currentTarget);
    const values: Record<string, string> = {};
    for (const f of fields) {
      values[f.name] = String(fd.get(f.name) || "").trim();
    }

    const body = {
      formId,
      fields: values,
      hp: String(fd.get("hp_company_url") || ""),
      startedAt: startedAtRef.current,
      pageUri: typeof window !== "undefined" ? window.location.href : undefined,
      pageName: typeof document !== "undefined" ? document.title : undefined,
      // HubSpot visitor tracking cookie — enables session/source attribution
      // in the HubSpot contact record. Absent if analytics consent was denied.
      hutk: getCookie("hubspotutk"),
    };

    try {
      const res = await fetch("/api/hubspot/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data?.error || "Something went wrong. Try again.",
        });
        return;
      }
      setStatus({ state: "success" });
      // Push conversion event to GTM dataLayer BEFORE any redirect so
      // ad-platform tags (GA4 generate_lead, Google Ads, LinkedIn, Meta)
      // fire even when the user navigates away from /thank-you.
      pushConversionEvent({ formId: String(formId), formName, email: values.email });
      if (onSubmitted) onSubmitted();
      else if (redirectTo) window.location.assign(redirectTo);
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Try again.",
      });
    }
  }

  if (status.state === "success" && !redirectTo && !onSubmitted) {
    return (
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
          Submitted
        </p>
        <h3 className="mt-3 font-display text-[20px] font-semibold text-ink">
          {successTitle}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      {/* Honeypot — bots fill any input named like 'url' or 'website'. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company URL (leave blank)
          <input
            name="hp_company_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((f) => {
          const span = "half" in f && f.half ? "" : "md:col-span-2";
          return (
            <div key={f.name} className={span}>
              <label
                htmlFor={f.name}
                className="mb-1.5 block text-[12px] font-medium text-ink-2"
              >
                {f.label}
                {f.required && <span className="ml-1 text-accent-2">*</span>}
              </label>
              {f.kind === "textarea" ? (
                <textarea
                  id={f.name}
                  name={f.name}
                  required={f.required}
                  rows={f.rows ?? 4}
                  placeholder={f.placeholder}
                  className={inputClass}
                />
              ) : f.kind === "select" ? (
                <select
                  id={f.name}
                  name={f.name}
                  required={f.required}
                  className={inputClass + " appearance-none"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {f.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={f.name}
                  name={f.name}
                  type={f.kind}
                  required={f.required}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  className={inputClass}
                />
              )}
            </div>
          );
        })}
      </div>

      {status.state === "error" && (
        <p className="text-[13px] text-[color:#ff8a8a]">{status.message}</p>
      )}

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="mt-1 w-full rounded-md bg-ink px-4 py-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status.state === "submitting" ? submittingLabel : submitLabel}
      </button>

      {footnote && (
        <div className="text-[11px] leading-relaxed text-ink-4">{footnote}</div>
      )}
    </form>
  );
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function pushConversionEvent(args: {
  formId: string;
  formName?: string;
  email?: string;
}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "form_submit",
    form_id: args.formId,
    form_name: args.formName || "unknown",
    // Hint for GA4 recommended event mapping.
    event_category: "lead",
    // Email present so GTM tags can hash for enhanced conversions if desired.
    // Do NOT send raw PII to ad platforms without hashing in the GTM tag.
    user_email: args.email,
  });
}

const inputClass =
  "w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 outline-none transition-colors focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]";
