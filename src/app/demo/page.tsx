import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See DiscoverCX in 30 minutes. A solution engineer walks through authoring, the delivery API, and the customer portal using your content and channels.",
  robots: { index: true, follow: true },
};

const fields = [
  { name: "first_name", label: "First name", type: "text", required: true, half: true },
  { name: "last_name", label: "Last name", type: "text", required: true, half: true },
  { name: "work_email", label: "Work email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: true, half: true },
  { name: "title", label: "Job title", type: "text", required: false, half: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a demo"
        title={
          <>
            See the platform.
            <br />
            <span className="text-ink-3">On your content. In 30 minutes.</span>
          </>
        }
        lede="A solution engineer walks you through authoring, the delivery API, and the customer portal — using formats and channels that match your stack. No slideware."
      />

      <section className="bg-bg">
        <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <p className="eyebrow">What to expect</p>
            <h2 className="headline mt-3 text-[28px]">A real walkthrough — not a deck.</h2>
            <ul className="mt-8 space-y-5 text-[14px] leading-relaxed text-ink-2">
              {[
                ["Goals & stack", "5 min — your current CCMS or help authoring tool, channels you publish to, integrations you need."],
                ["Live platform tour", "20 min — authoring, repository, delivery API, and the customer portal. We screen-share inside the product."],
                ["Your questions", "5 min — pricing, migration, timeline, security, AI roadmap — anything."],
              ].map(([h, p]) => (
                <li key={h} className="border-l border-line pl-5">
                  <h3 className="text-[14px] font-semibold text-ink">{h}</h3>
                  <p className="mt-1 text-[13px] text-ink-3">{p}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-line bg-bg-2 p-5 text-[12px] text-ink-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-blue-2">
                Trusted by
              </p>
              <p className="mt-2 text-ink-2">
                Fortune 500 networking, manufacturing, fintech, and healthcare teams.
                SOC 2 Type II. 24×7 critical-care support. 99.95% uptime SLA.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              action="/api/demo"
              method="POST"
              className="rounded-2xl border border-line bg-bg-card p-8 elev-card"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name} className={f.half ? "" : "md:col-span-2"}>
                    <label
                      htmlFor={f.name}
                      className="block text-[12px] font-medium text-ink-2"
                    >
                      {f.label}{f.required && <span className="ml-1 text-accent-blue-2">*</span>}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label
                    htmlFor="use_case"
                    className="block text-[12px] font-medium text-ink-2"
                  >
                    What are you trying to solve?{" "}
                    <span className="ml-1 text-accent-blue-2">*</span>
                  </label>
                  <textarea
                    id="use_case"
                    name="use_case"
                    rows={4}
                    required
                    placeholder="E.g. We're migrating off MadCap Flare and need a headless API to feed Salesforce Knowledge and our docs site."
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="current_tool"
                    className="block text-[12px] font-medium text-ink-2"
                  >
                    Current authoring / CCMS tool
                  </label>
                  <select
                    id="current_tool"
                    name="current_tool"
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  >
                    <option value="">Select…</option>
                    <option>MadCap Flare</option>
                    <option>Paligo</option>
                    <option>Heretto / Easy DITA</option>
                    <option>Adobe XML Documentation</option>
                    <option>IXIASOFT</option>
                    <option>RWS Tridion Docs</option>
                    <option>Confluence</option>
                    <option>Zendesk Guide</option>
                    <option>Custom / in-house</option>
                    <option>None yet</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-md bg-ink px-4 py-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Request demo
              </button>
              <p className="mt-4 text-center text-[11px] text-ink-4">
                We'll respond within 1 business day. By submitting, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-ink-2">privacy policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
