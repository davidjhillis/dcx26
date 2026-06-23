import type { Metadata } from "next";
import { HumanImage, PageHero } from "@/components/ui";
import { DcxForm, type DcxField } from "@/components/dcx-form";
import { FORMS } from "@/lib/hubspot-forms";

export const metadata: Metadata = {
  alternates: { canonical: "/demo" },
  title: "Request a Demo",
  description:
    "See DiscoverCX in 45 minutes. A solution engineer walks through authoring, the delivery API, and the customer portal using your content and channels.",
  robots: { index: true, follow: true },
};

const demoFields: DcxField[] = [
  { kind: "text", name: "firstname", label: "First name", required: true, half: true, autoComplete: "given-name" },
  { kind: "text", name: "lastname", label: "Last name", required: true, half: true, autoComplete: "family-name" },
  { kind: "email", name: "email", label: "Work email", required: true, autoComplete: "email" },
  { kind: "text", name: "company", label: "Company", required: true, half: true, autoComplete: "organization" },
  { kind: "text", name: "jobtitle", label: "Job title", half: true, autoComplete: "organization-title" },
  { kind: "textarea", name: "message", label: "What are you working on? (optional)", rows: 4, placeholder: "Current stack, what's prompting the conversation, anything we should know going in." },
  { kind: "tel", name: "phone", label: "Phone (optional)", autoComplete: "tel" },
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
            <span className="text-ink-3">A working session, not a pitch.</span>
          </>
        }
        lede="A solution engineer walks you through authoring, the delivery API, and the customer portal — scoped to what your team is trying to do."
      />

      <section className="bg-bg">
        <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <HumanImage
              src="/humans/solutions-engineer-demo.jpg"
              alt="A solutions engineer walking customers through the platform"
              className="mb-10"
            />
            <p className="eyebrow">What to expect</p>
            <h2 className="headline mt-3 text-[28px]">A working walkthrough.</h2>
            <ul className="mt-8 space-y-5 text-[14px] leading-relaxed text-ink-2">
              {[
                ["Your goals & stack", "We start by understanding the CCMS or help-authoring tool you use today, the channels you publish to, and the integrations you need."],
                ["Platform tour", "Authoring, the repository, the delivery API, and the customer portal — screen-shared inside the product, with stops to dig into whatever's most relevant."],
                ["Your questions", "Pricing, migration, timeline, security, AI plans — ask anything. We'll follow up in writing on anything we can't answer live."],
              ].map(([h, p]) => (
                <li key={h} className="border-l border-line pl-5">
                  <h3 className="text-[14px] font-semibold text-ink">{h}</h3>
                  <p className="mt-1 text-[13px] text-ink-3">{p}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-line bg-bg-2 p-5 text-[12px] text-ink-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                Trusted by
              </p>
              <p className="mt-2 text-ink-2">
                Enterprise teams in networking, manufacturing, financial services,
                and healthcare. SOC 2 Type II.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-bg-card p-8 elev-card">
              <DcxForm
                formId={FORMS.DEMO}
                fields={demoFields}
                submitLabel="Request demo"
                redirectTo="/thank-you?kind=demo"
                footnote={
                  <p className="text-center">
                    We&apos;ll respond within 1 business day. By submitting, you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-ink-2">privacy policy</a>.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
