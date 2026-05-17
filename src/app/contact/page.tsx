import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Sales",
  description:
    "Talk to a DiscoverCX solution architect about pricing, security review, migration, or partnership.",
};

const reasons = [
  { v: "pricing", label: "Pricing & quotes" },
  { v: "demo", label: "Schedule a demo" },
  { v: "security", label: "Security / SOC 2 review" },
  { v: "migration", label: "Migration from another CCMS" },
  { v: "partnership", label: "Partnership / integrations" },
  { v: "support", label: "Existing customer support" },
  { v: "press", label: "Press / analyst" },
  { v: "other", label: "Other" },
];

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
            <form
              action="/api/contact"
              method="POST"
              className="rounded-2xl border border-line bg-bg-card p-8 elev-card"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-medium text-ink-2">Name *</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-ink-2">Work email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-medium text-ink-2">Company</label>
                  <input
                    name="company"
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-medium text-ink-2">What can we help with?</label>
                  <select
                    name="reason"
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    {reasons.map((r) => (
                      <option key={r.v} value={r.v}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-medium text-ink-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-md border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-md bg-ink px-4 py-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
