import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — DiscoverCX, an Ingeniux Company",
  description:
    "DiscoverCX is built by Ingeniux — founded 1999 in Seattle by Microsoft alumni who built the first web publishing system for MSNBC. Two decades shipping structured content for the world's leading brands.",
};

const stats = [
  ["2M+", "Total CMS package downloads"],
  ["1,500+", "Live customer sites"],
  ["20+ yrs", "Content management success"],
  ["1999", "Founded in Seattle"],
];

const leadership = [
  {
    name: "Jim Edmunds",
    title: "President & CEO",
    bio: "Jim founded Ingeniux in 1999 following leadership positions with Microsoft, Electronic Arts, and Asymetrix.",
  },
  {
    name: "David Hillis",
    title: "Chief Marketing Officer",
    bio: "David oversees marketing. He was EVP Operations at Chrome, and previously held positions at Asymetrix and Aldus Corporation.",
  },
  {
    name: "Nathan Eggen",
    title: "VP Products & Technology",
    bio: "Nathan leads software and product development. He previously worked for Fluor Government Group.",
  },
];

const values = [
  { h: "Professional. Ethical. Helpful.", p: "How we work, every day, with every customer." },
  { h: "Helping people reach their potential", p: "The platform exists so content teams can do the work they were hired to do." },
  { h: "Building solutions that matter", p: "Two decades in DXP — we build tools customers depend on, not products we churn." },
  { h: "Technology that powers imagination", p: "Structured content is a foundation, not a finish line." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DiscoverCX",
  alternateName: "Discover CX",
  url: "https://discovercx.com",
  logo: "https://discovercx.com/brand/dcx-white.svg",
  parentOrganization: {
    "@type": "Organization",
    name: "Ingeniux Corporation",
    foundingDate: "1999",
    url: "https://www.ingeniux.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1218 3rd Ave #1100",
      addressLocality: "Seattle",
      addressRegion: "WA",
      postalCode: "98101",
      addressCountry: "US",
    },
    telephone: "+1-877-445-8228",
    email: "info@ingeniux.com",
    employee: leadership.map((l) => ({
      "@type": "Person",
      name: l.name,
      jobTitle: l.title,
    })),
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="About"
        title={
          <>
            We make content the cornerstone
            <br />
            <span className="text-ink-3">of your customer experience.</span>
          </>
        }
        lede="Your customers generate 65% to 80% of your revenue — year after year. DiscoverCX is the content platform that powers the experiences they rely on."
      />

      {/* STATS */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="headline text-[44px] md:text-[56px] text-accent-blue-2">{n}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink-3">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-4">
            <p className="eyebrow">Our story</p>
            <h2 className="headline mt-3 text-[32px] md:text-[42px]">
              Twenty years in the making.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-[15px] leading-relaxed text-ink-2">
            <p>
              Houston, we have a content problem.
            </p>
            <p>
              Our journey began in 1999 when Microsoft built the first web
              publishing system for MSNBC. Our founders jumped from Microsoft to
              create Ingeniux CMS — and have spent two decades refining the
              discipline of structured content for the world's most demanding
              digital experiences.
            </p>
            <p>
              By the late 2010s, enterprise customers — networking, manufacturing,
              regulated industries, and the Fortune 500 — kept asking for the
              same thing: a way to take the structured content from their CCMS and
              serve it everywhere, in real time. Their AI initiatives, Salesforce
              rollouts, and customer portals all needed clean, typed, live content.
            </p>
            <p>
              DiscoverCX is the answer we built. A headless CCMS paired with a
              customer-facing portal and a real-time delivery API — composable,
              modular, and built for enterprise scale.
            </p>
            <p>
              We're headquartered in Seattle and we sell directly. Our solution
              architects show up to the demos.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">What we believe</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Four things we'll defend in any conversation.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.h}
                className="rounded-2xl border border-line bg-bg-card p-8 elev-card"
              >
                <h3 className="font-display text-[20px] font-semibold">{v.h}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">Leadership</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Built by Microsoft alumni. Run by people who&apos;ve shipped this stuff
            for two decades.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {leadership.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl border border-line bg-bg-card p-7 elev-card"
              >
                <h3 className="font-display text-[18px] font-semibold">{l.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-accent-blue-2">
                  {l.title}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-ink-2">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER LOGOS */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
            Trusted by the world&apos;s leading brands
          </p>
          <div className="mt-8 grid grid-cols-3 items-center gap-x-12 gap-y-8 md:grid-cols-6">
            {[
              { name: "Cisco", src: "/logos/Cisco-logo-white2x.png" },
              { name: "Coupa", src: "/logos/Coupa-logo-white.svg" },
              { name: "Dolby", src: "/logos/Dolby-logo-white2x.png" },
              { name: "GE", src: "/logos/ge-logo-white.png" },
              { name: "UKG", src: "/logos/UKG-logo-white2x.png" },
              { name: "NCCI", src: "/logos/ncci.png" },
            ].map((l) => (
              <div
                key={l.name}
                className="flex h-8 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src={l.src}
                  alt={l.name}
                  width={100}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="See what we built."
        lede="A 30-minute walkthrough with a solution architect. No deck."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />
    </>
  );
}
