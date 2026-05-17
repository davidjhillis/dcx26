import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "CCMS RFP Template — 78 Vendor Questions (Free .docx)",
  description:
    "The CCMS RFP template Fortune 500 procurement teams use to evaluate component content management systems. 78 questions across 12 categories. Free, editable Word doc.",
};

const sections = [
  { n: "01", h: "Authoring", q: "DITA / Markdown support, editors, reuse, conditional content, AI co-authoring" },
  { n: "02", h: "Repository", q: "Versioning, branching, concurrency, audit, retention" },
  { n: "03", h: "Workflow", q: "States, approvals, scheduled publishing, escalation" },
  { n: "04", h: "Translation", q: "TMS round-trip, locale fan-out, translation memory, ICU" },
  { n: "05", h: "Delivery", q: "Headless API, real-time publishing, channels, SDK" },
  { n: "06", h: "Portal", q: "Search, personalization, case management, community" },
  { n: "07", h: "Integrations", q: "Salesforce, ServiceNow, Atlassian, Slack, Git" },
  { n: "08", h: "AI", q: "RAG output, Einstein, traceability, copilot grounding" },
  { n: "09", h: "Security", q: "SOC 2, SAML/OIDC/SCIM, encryption, audit logs" },
  { n: "10", h: "Compliance", q: "HIPAA, GDPR, FedRAMP, data residency" },
  { n: "11", h: "Performance", q: "SLA, uptime, latency, scalability" },
  { n: "12", h: "Commercial", q: "Pricing model, multi-year, services, support tiers" },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "CCMS RFP Template",
  description:
    "78-question CCMS RFP template across 12 evaluation categories. Editable Microsoft Word document.",
  publisher: { "@type": "Organization", name: "DiscoverCX" },
  fileFormat: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  inLanguage: "en-US",
};

export default function RfpTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Buyer's guide · Free download"
        title={
          <>
            The CCMS RFP template.
            <br />
            <span className="text-ink-3">78 questions. 12 categories.</span>
          </>
        }
        lede="The same RFP template Fortune 500 procurement teams use to evaluate component content management systems. Editable .docx, vendor-neutral, free."
      />

      <section className="bg-bg">
        <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">What's inside</p>
            <h2 className="headline mt-3 text-[32px] md:text-[40px] max-w-2xl">
              The 12 evaluation categories every CCMS RFP should cover.
            </h2>
            <ol className="mt-10 grid gap-3 md:grid-cols-2">
              {sections.map((s) => (
                <li
                  key={s.n}
                  className="rounded-lg border border-line bg-bg-card p-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-accent-2">{s.n}</span>
                    <h3 className="text-[14px] font-semibold text-ink">{s.h}</h3>
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-ink-3">{s.q}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-xl border border-line bg-bg-2 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                Why we publish this for free
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                Most CCMS RFPs leak vendor bias — checkboxes engineered to favor a
                specific product. Ours is intentionally vendor-neutral. If
                DiscoverCX is wrong for your needs, the RFP should help you find
                that out faster. We'd rather lose a deal early than win one we
                shouldn't have.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form
              action="/api/resource-download"
              method="POST"
              className="sticky top-24 rounded-2xl border border-line bg-bg-card p-7 elev-card"
            >
              <input type="hidden" name="resource" value="ccms-rfp-template" />
              <p className="eyebrow">Get the template</p>
              <h2 className="mt-3 font-display text-[22px] font-semibold">
                Free download — editable .docx
              </h2>
              <p className="mt-2 text-[13px] text-ink-3">
                One field. We'll email you the file and check in once a quarter
                with new buyer-side content. Unsubscribe anytime.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-[12px] font-medium text-ink-2">
                    Work email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-ink-2">
                    Company
                  </label>
                  <input
                    name="company"
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-ink px-4 py-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Email me the template
              </button>
              <p className="mt-4 text-[10px] text-ink-4">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-ink-2">privacy policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
