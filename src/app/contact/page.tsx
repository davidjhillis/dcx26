import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { DcxForm, type DcxField } from "@/components/dcx-form";
import { FORMS } from "@/lib/hubspot-forms";

const contactFields: DcxField[] = [
  { kind: "text", name: "firstname", label: "First name", required: true, half: true, autoComplete: "given-name" },
  { kind: "text", name: "lastname", label: "Last name", required: true, half: true, autoComplete: "family-name" },
  { kind: "email", name: "email", label: "Work email", required: true, autoComplete: "email" },
  { kind: "text", name: "company", label: "Company", autoComplete: "organization" },
  {
    kind: "select",
    name: "reason_for_contact",
    label: "What can we help with?",
    options: [
      { value: "pricing", label: "Pricing & quotes" },
      { value: "demo", label: "Schedule a demo" },
      { value: "security", label: "Security / SOC 2 review" },
      { value: "migration", label: "Migration from another CCMS" },
      { value: "partnership", label: "Partnership / integrations" },
      { value: "support", label: "Existing customer support" },
      { value: "press", label: "Press / analyst" },
      { value: "other", label: "Other" },
    ],
  },
  { kind: "textarea", name: "message", label: "Message", required: true, rows: 5 },
];

export const metadata: Metadata = {
  title: "Contact Sales",
  description:
    "Talk to a DiscoverCX solution architect about pricing, security review, migration, or partnership.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact sales"
        title={
          <>
            Talk to a real human.
            <br />
            <span className="text-ink-3">No bots, no waitlists.</span>
          </>
        }
        lede="A solution architect responds within one business day. For pricing, security review, migration planning, or partnership conversations."
      />

      <section className="bg-bg">
        <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-3 text-[15px] text-ink">
                <a href="mailto:info@ingeniux.com" className="text-accent-2 hover:underline">
                  info@ingeniux.com
                </a>
              </p>
              <p className="mt-1 text-[13px] text-ink-3">
                For sales, demos, quotes, security, and support.
              </p>
            </div>

            <div>
              <p className="eyebrow">Phone</p>
              <p className="mt-3 text-[15px] text-ink">
                <a href="tel:+18774458228" className="text-accent-2 hover:underline">
                  877-445-8228
                </a>
              </p>
              <p className="mt-1 text-[13px] text-ink-3">
                Monday – Friday, 9 AM – 5 PM Pacific
              </p>
            </div>

            <div>
              <p className="eyebrow">Office</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                Ingeniux Corporation<br />
                1218 3rd Ave #1100<br />
                Seattle, WA 98101
              </p>
              <p className="mt-3 text-[13px] text-ink-3">
                Headquartered in Seattle, Washington.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-bg-card p-8 elev-card">
              <DcxForm
                formId={FORMS.CONTACT}
                fields={contactFields}
                submitLabel="Send message"
                redirectTo="/thank-you?kind=contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
