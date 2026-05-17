import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — DiscoverCX, an Ingeniux Company",
  description:
    "DiscoverCX is built by Ingeniux — a 20-year veteran of structured content and digital experience platforms. Trusted by Fortune 500 networking, manufacturing, and regulated industries.",
};

const stats = [
  ["20+", "Years in DXP"],
  ["500+", "Enterprise deployments"],
  ["65%", "Faster time-to-publish"],
  ["99.95%", "Uptime SLA"],
];

const values = [
  {
    h: "Structured by default",
    p: "Unstructured content is a tax on every future channel. We build everything assuming your content will need to land somewhere we haven't met yet — and that the cheapest way to get it there is to keep it structured.",
  },
  {
    h: "Headless from day one",
    p: "Every feature ships with an API first, a UI second. The platform you see is built on the same API your apps will consume. No hidden surface area.",
  },
  {
    h: "Auditable, always",
    p: "Regulated customers depend on us. Every change is attributed, every version preserved, every approval logged. SOC 2 Type II isn't a sticker — it's how we run.",
  },
  {
    h: "Vendor-neutral on standards",
    p: "DITA, Markdown, HTML, XLIFF, SCORM, OAS, SAML, OIDC. We pick standards over proprietary lock-in every time, even when lock-in would help our retention numbers.",
  },
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
    foundingDate: "2002",
    url: "https://www.ingeniux.com",
    address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
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
            Two decades shipping
            <br />
            <span className="text-ink-3">structured content.</span>
          </>
        }
        lede="DiscoverCX is built by Ingeniux — a 20-year veteran of structured content and digital experience platforms. We've delivered content systems for the world's most demanding regulated and technical industries."
      />

      {/* STATS */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
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
        <div className="mx-auto grid max-w-[1480px] gap-16 px-8 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <p className="eyebrow">Our story</p>
            <h2 className="headline mt-3 text-[32px] md:text-[42px]">
              We built DXPs before they had a name.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-[15px] leading-relaxed text-ink-2">
            <p>
              Ingeniux launched in 2002 — when web content management still meant
              FTPing HTML to a server. We shipped one of the first structured XML
              CMS platforms, and we've been refining the discipline of structured
              content for two decades.
            </p>
            <p>
              By the late 2010s, our enterprise customers — Cisco, Coupa, Dolby, GE,
              UKG, NCCI, and others — kept asking for the same thing: a way to take
              the structured content from their CCMS and serve it everywhere, in
              real time, without rebuilding the world. Their AI initiatives,
              Salesforce rollouts, and customer portals all needed clean, typed,
              live content.
            </p>
            <p>
              DiscoverCX is the answer we built. It's the headless CCMS our
              customers asked for — paired with a customer portal, a real-time
              delivery API, and AI-ready output. One platform, four layers, one
              source of truth.
            </p>
            <p>
              We're a small, focused team headquartered in Seattle, with engineers
              across North America. We sell directly — no resellers, no MSP
              middlemen — and our solution architects show up to the demos.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bg border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12 lg:py-28">
          <p className="eyebrow">What we believe</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            Four positions we'll defend in any demo.
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

      {/* CUSTOMER LOGOS */}
      <section className="bg-bg-2 border-b border-line">
        <div className="mx-auto max-w-[1480px] px-8 py-20 lg:px-12">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
            Trusted by content teams at
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
        title="Want to see what we built?"
        lede="A 30-minute walkthrough with a solution architect. No deck."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
