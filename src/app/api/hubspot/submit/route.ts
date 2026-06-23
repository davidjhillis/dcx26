import { NextResponse } from "next/server";
import { HUBSPOT_PORTAL_ID } from "@/lib/hubspot-forms";

// Proxies a form submission to HubSpot's v3 submissions endpoint.
// Anti-spam: honeypot, time-to-submit, free-email blocklist, basic
// in-memory per-IP rate limit. reCAPTCHA is OFF on the target forms
// because the server-to-HubSpot path can't pass a recaptcha token.

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "msn.com",
  "ymail.com",
  "proton.me",
  "protonmail.com",
  "mail.com",
  "gmx.com",
  "yandex.com",
  "zoho.com",
]);

const MIN_FILL_TIME_MS = 2000; // bots submit instantly

// Per-IP rate limit — process-memory, sufficient for Vercel's per-region
// edge instances. Drops keys older than 10 min on each call.
const rateBucket = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_HITS = 3;
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const hits = (rateBucket.get(ip) || []).filter((t) => t > cutoff);
  hits.push(now);
  rateBucket.set(ip, hits);
  // GC old keys
  if (rateBucket.size > 1000) {
    const expiry = now - 10 * 60_000;
    for (const [k, v] of rateBucket) {
      if (!v.some((t) => t > expiry)) rateBucket.delete(k);
    }
  }
  return hits.length > RATE_MAX_HITS;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

type Body = {
  formId?: string;
  /** Field name → value. Names must match HubSpot contact properties. */
  fields?: Record<string, string | undefined>;
  /** Honeypot field — bots fill this, humans never see it. */
  hp?: string;
  /** Client time-of-page-render (ms epoch). We require >= MIN_FILL_TIME_MS. */
  startedAt?: number;
  pageUri?: string;
  pageName?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { formId, fields = {}, hp, startedAt, pageUri, pageName } = body;

  // 1. Honeypot
  if (hp && hp.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 }); // silent accept
  }

  // 2. Time-to-submit
  if (startedAt && Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true }, { status: 200 }); // silent accept
  }

  // 3. Required fields
  if (!formId) {
    return NextResponse.json({ error: "Missing formId" }, { status: 400 });
  }
  const email = (fields.email || "").trim();
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  // 4. Free-email block
  const domain = email.split("@")[1]?.toLowerCase() || "";
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return NextResponse.json(
      { error: "Please use your work email address." },
      { status: 400 }
    );
  }

  // 5. Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  // 6. Forward to HubSpot
  const hsFields = Object.entries(fields)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([name, value]) => ({
      objectTypeId: "0-1",
      name,
      value: String(value),
    }));

  const payload = {
    fields: hsFields,
    context: {
      pageUri: pageUri || undefined,
      pageName: pageName || undefined,
    },
  };

  try {
    const hsRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!hsRes.ok) {
      const text = await hsRes.text();
      return NextResponse.json(
        { error: "HubSpot rejected the submission", detail: text.slice(0, 300) },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Network error contacting HubSpot", detail: String(err) },
      { status: 502 }
    );
  }
}
