// Shared form-handler stub. Logs the submission server-side and
// 303-redirects the browser to /thank-you with the form context.
// Swap the body of `forward()` to wire to your CRM / email / Slack.

import { NextRequest, NextResponse } from "next/server";

export async function forward(req: NextRequest, kind: string) {
  const form = await req.formData();
  const payload: Record<string, string> = { _kind: kind };
  for (const [k, v] of form.entries()) {
    payload[k] = typeof v === "string" ? v : v.name;
  }

  // TODO: wire to HubSpot / Salesforce / Resend / Slack here.
  console.log(`[form:${kind}]`, JSON.stringify(payload));

  const url = new URL("/thank-you", req.url);
  url.searchParams.set("kind", kind);
  if (payload.resource) url.searchParams.set("resource", payload.resource);
  return NextResponse.redirect(url, 303);
}
