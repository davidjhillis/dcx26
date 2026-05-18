import { NextResponse } from "next/server";
import { ebooks, HUBSPOT_PORTAL_ID } from "@/app/resources/ebooks/_data";

// POST /api/hubspot/unlock
// body: { slug, firstname, lastname, email, company, progressPct?, pageUri?, pageName? }
//
// Submits to the matching ebook's HubSpot form using the public submissions
// endpoint (no auth). On success returns { ok, pdfUrl, title }.

type Body = {
  slug?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  company?: string;
  progressPct?: number;
  pageUri?: string;
  pageName?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { slug, firstname, lastname, email, company, pageUri, pageName } = body;

  if (!slug || !firstname || !email || !company) {
    return NextResponse.json(
      { error: "Missing required fields: slug, firstname, email, company" },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const ebook = ebooks.find((e) => e.slug === slug);
  if (!ebook) {
    return NextResponse.json({ error: "Unknown ebook" }, { status: 404 });
  }

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${ebook.hubspot.formId}`;

  const fields = [
    { objectTypeId: "0-1", name: "firstname", value: firstname },
    { objectTypeId: "0-1", name: "email", value: email },
    { objectTypeId: "0-1", name: "company", value: company },
  ];
  if (lastname) fields.push({ objectTypeId: "0-1", name: "lastname", value: lastname });

  const payload = {
    fields,
    context: {
      pageUri: pageUri || `https://discovercx.com/resources/ebooks/${slug}`,
      pageName: pageName || ebook.title,
    },
  };

  try {
    const hsRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!hsRes.ok) {
      const text = await hsRes.text();
      return NextResponse.json(
        { error: "HubSpot submission failed", status: hsRes.status, detail: text },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      pdfUrl: ebook.hubspot.pdfUrl,
      title: ebook.title,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Network error contacting HubSpot", detail: String(err) },
      { status: 502 }
    );
  }
}
