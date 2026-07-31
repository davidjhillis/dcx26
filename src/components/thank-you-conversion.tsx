"use client";

import { useEffect } from "react";

// Fires a redundant conversion event on /thank-you so ad-platform tags
// configured against a pageview trigger (Google Ads, LinkedIn Insight,
// Meta Pixel) still record the conversion even if the initial in-form
// dataLayer.push was missed. Safe to fire twice — GTM tags typically
// dedupe on transaction_id, or you can add a session flag in GTM.

export function ThankYouConversion({
  kind,
  resource,
}: {
  kind: string;
  resource?: string;
}) {
  useEffect(() => {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "form_submit_confirmed",
      form_kind: kind,
      form_resource: resource,
      event_category: "lead",
    });
  }, [kind, resource]);

  return null;
}
