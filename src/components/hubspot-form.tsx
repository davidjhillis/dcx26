"use client";

import { useEffect, useId, useRef } from "react";
import { HUBSPOT_PORTAL_ID, HUBSPOT_REGION, type FormId } from "@/lib/hubspot-forms";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

const EMBED_SRC = "https://js.hsforms.net/forms/embed/v2.js";

let scriptPromise: Promise<void> | null = null;
function loadEmbedScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("hs embed failed to load")));
      return;
    }
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.charset = "utf-8";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("hs embed failed to load"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

type Props = {
  formId: FormId | string;
  /** Where HubSpot should send the user after submit. If provided,
   *  overrides the form's HubSpot-side redirect via onFormSubmitted. */
  redirectTo?: string;
};

export function HubSpotForm({ formId, redirectTo }: Props) {
  const targetId = useId().replace(/:/g, "");
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    loadEmbedScript()
      .then(() => {
        if (!window.hbspt) return;
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId,
          region: HUBSPOT_REGION,
          target: `#hs-form-${targetId}`,
          onFormSubmitted: redirectTo
            ? () => {
                window.location.assign(redirectTo);
              }
            : undefined,
        });
      })
      .catch((err) => {
        console.error("[HubSpotForm]", err);
      });
  }, [formId, redirectTo, targetId]);

  return <div className="hs-form-beacon" id={`hs-form-${targetId}`} />;
}
