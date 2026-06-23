"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
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

let instanceCounter = 0;

type Props = {
  formId: FormId | string;
  /** Where HubSpot should send the user after submit. */
  redirectTo?: string;
  /** Run after a successful submit instead of navigating away. */
  onSubmitted?: () => void;
};

export function HubSpotForm({ formId, redirectTo, onSubmitted }: Props) {
  // Stable, CSS-safe id generated once per mount.
  const [domId] = useState(() => `hs-form-${++instanceCounter}`);
  const [scriptReady, setScriptReady] = useState(false);

  // If the script already loaded from a previous page, flip ready right away.
  useEffect(() => {
    if (typeof window !== "undefined" && window.hbspt?.forms?.create) {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptReady) return;
    if (!window.hbspt?.forms?.create) return;
    const target = document.getElementById(domId);
    if (!target) return;
    // Avoid double-create when React effects re-run (Strict Mode, prop changes).
    if (target.dataset.hsCreated === "1") return;
    target.dataset.hsCreated = "1";

    window.hbspt.forms.create({
      portalId: HUBSPOT_PORTAL_ID,
      formId,
      region: HUBSPOT_REGION,
      target: `#${domId}`,
      onFormSubmitted: () => {
        if (onSubmitted) onSubmitted();
        if (redirectTo) window.location.assign(redirectTo);
      },
    });
  }, [scriptReady, formId, redirectTo, onSubmitted, domId]);

  return (
    <>
      <Script
        id="hubspot-forms-embed"
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />
      <div id={domId} className="hs-form-beacon" />
    </>
  );
}
