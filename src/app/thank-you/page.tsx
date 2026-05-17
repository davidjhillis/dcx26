import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thanks — We've Got Your Message",
  description: "Confirmation that we've received your request.",
  robots: { index: false, follow: false },
};

const copyByKind: Record<
  string,
  { eyebrow: string; title: string; lede: string; next: { label: string; href: string }[] }
> = {
  demo: {
    eyebrow: "Got it",
    title: "Demo request received.",
    lede: "A solution engineer will reach out within one business day to schedule a 30-minute walkthrough on your stack.",
    next: [
      { label: "Read the platform overview", href: "/platform" },
      { label: "Download the RFP template", href: "/resources/ccms-rfp-template" },
      { label: "Compare us to your shortlist", href: "/compare" },
    ],
  },
  contact: {
    eyebrow: "Thanks",
    title: "Message received.",
    lede: "We'll respond within one business day. For urgent existing-customer support, page support@discovercx.com.",
    next: [
      { label: "Read recent comparisons", href: "/compare" },
      { label: "See pricing", href: "/pricing" },
    ],
  },
  "resource-download": {
    eyebrow: "Sent",
    title: "Check your inbox.",
    lede: "The download link is on its way. If it doesn't land in 5 minutes, check your spam folder or contact sales@discovercx.com.",
    next: [
      { label: "What is a CCMS?", href: "/resources/what-is-a-ccms" },
      { label: "What is a CDP?", href: "/resources/what-is-a-cdp" },
      { label: "Browse all resources", href: "/resources" },
    ],
  },
  default: {
    eyebrow: "Thanks",
    title: "We've got it.",
    lede: "We'll be in touch shortly.",
    next: [
      { label: "Read the platform overview", href: "/platform" },
      { label: "Browse resources", href: "/resources" },
    ],
  },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string; resource?: string }>;
}) {
  const { kind = "default" } = await searchParams;
  const copy = copyByKind[kind] ?? copyByKind.default;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={
          <>
            {copy.title}
          </>
        }
        lede={copy.lede}
      />

      <section className="bg-bg border-b border-line">
        <div className="mx-auto max-w-3xl px-8 py-16 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
            While you wait
          </p>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {copy.next.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="flex items-center justify-between py-4 text-[15px] font-medium text-ink hover:text-accent-2"
                >
                  <span>{n.label}</span>
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA
        title="Anything else?"
        lede="Reach a human directly — sales@discovercx.com or hit the chat in the bottom right."
        primary={{ label: "Talk to sales", href: "/contact" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </>
  );
}
