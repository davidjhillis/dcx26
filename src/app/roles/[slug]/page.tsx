import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, Container, FinalCTA } from "@/components/ui";
import { RoleIcon } from "@/components/role-icons";
import { getRole, roles } from "../_data";

type Params = { slug: string };

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getRole(slug);
  if (!r) return {};
  return {
    title: `${r.name} — Discover CX for ${r.tagline}`,
    description: r.summary.replace(/&quot;/g, '"').replace(/<[^>]+>/g, ""),
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const others = roles.filter((r) => r.slug !== role.slug).slice(0, 3);

  return (
    <>
      {/* INTEGRATED HERO — copy + contextual photo */}
      <section className="relative overflow-hidden hero-glow border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                Designed for · {role.tagline}
              </p>
              <h1 className="headline mt-5 text-[40px] leading-[1.05] md:text-[56px]">
                {role.name}
              </h1>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-2">
                {role.lede}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/demo">Request a demo</ButtonLink>
                <ButtonLink href="/platform" variant="secondary">
                  See the platform
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <figure className="relative">
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_70%)] blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.heroImage.src}
                    alt={role.heroImage.alt}
                    loading="eager"
                    className="block aspect-[16/10] w-full object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / OUTCOME — 3 alternating blocks */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-28">
          <p className="eyebrow">What changes</p>
          <h2 className="headline mt-3 text-[32px] md:text-[42px] max-w-3xl">
            From the pain you know
            <br />
            <span className="text-ink-3">to the outcome you wanted.</span>
          </h2>

          <div className="mt-14 space-y-14">
            {role.problems.map((b, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={b.pain}
                  className={`grid items-start gap-10 lg:grid-cols-12 ${
                    reverse ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`}
                  >
                    <div className="rounded-2xl border border-line bg-bg-card p-7 elev-card">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-4">
                        Pain
                      </p>
                      <h3 className="mt-2 font-display text-[20px] font-semibold leading-snug text-ink-2">
                        {b.pain}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-7 ${reverse ? "lg:[direction:ltr]" : ""}`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                      Outcome
                    </p>
                    <h3 className="mt-2 font-display text-[26px] font-semibold leading-tight md:text-[30px]">
                      {b.outcome}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-ink-2">
                      {b.body}
                    </p>
                    {b.proof && (
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-4">
                        {b.proof}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="wide" className="py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">For your role</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                Capabilities that show up in the work.
              </h2>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--accent)]/30 bg-bg-card text-accent-2 md:flex">
              <RoleIcon name={role.iconKey} className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {role.capabilities.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-line bg-bg-card p-7 elev-card"
              >
                <h3 className="font-display text-[16px] font-semibold leading-tight">
                  {c.h}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">
                  {c.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHERE IT LIVES IN THE PLATFORM */}
      <section className="border-b border-line bg-bg">
        <Container intent="default" className="py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Where it lives</p>
              <h2 className="headline mt-3 text-[32px] md:text-[42px]">
                One platform.
                <br />
                <span className="text-ink-3">Three products.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Discover CX is one platform — but you can start with the
                product that fits the work in front of you. The pieces that
                matter for {role.name.toLowerCase()}:
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3">
                {role.relatedProducts.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group flex items-center justify-between rounded-xl border border-line bg-bg-card px-5 py-4 transition-colors hover:border-line-2"
                  >
                    <span className="font-display text-[16px] font-semibold text-ink group-hover:text-accent-2">
                      {p.label}
                    </span>
                    <span className="text-[13px] text-accent-2 group-hover:text-accent">
                      Read about it →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OTHER ROLES */}
      <section className="border-b border-line bg-bg-2">
        <Container intent="default" className="py-16 md:py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Other roles</p>
              <h2 className="headline mt-2 text-[24px] md:text-[28px]">
                The same platform, framed for the rest of your team.
              </h2>
            </div>
            <Link
              href="/roles"
              className="hidden text-[13px] text-accent-2 underline hover:text-accent md:inline-block"
            >
              See all roles →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/roles/${o.slug}`}
                className="group flex flex-col rounded-xl border border-line bg-bg-card p-6 elev-card transition-colors hover:border-line-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--accent)]/30 bg-bg-elev text-accent-2">
                  <RoleIcon name={o.iconKey} className="h-5 w-5" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent-2">
                  {o.tagline}
                </p>
                <h3 className="mt-1.5 font-display text-[16px] font-semibold leading-tight group-hover:text-accent-2">
                  {o.name}
                </h3>
                <p
                  className="mt-3 text-[12.5px] leading-relaxed text-ink-3"
                  dangerouslySetInnerHTML={{ __html: o.summary }}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title={`See Discover CX for ${role.name.toLowerCase()}, on your content.`}
        lede="A solution architect walks the platform with your real work in mind — your team, your stack, your roadmap."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Get a quote", href: "/contact?reason=pricing" }}
      />
    </>
  );
}
