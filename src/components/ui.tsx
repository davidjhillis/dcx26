import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Container — the one place we centralize content width.
 *
 * intent picks the max-width by content type, not by section type:
 *   - prose    680px  long-form reading column (blog body)
 *   - narrow   760px  hero copy, centered CTA blocks
 *   - default 1200px  most marketing sections, nav, footer
 *   - wide    1320px  feature grids, comparison tables, galleries
 *   - bleed   1480px  hero backdrop only (never body content)
 *
 * Padding is consistent across intents so vertical lines align as you
 * scroll between sections of different widths.
 */
type Intent = "prose" | "narrow" | "default" | "wide" | "bleed";

const WIDTH_CLASS: Record<Intent, string> = {
  prose: "max-w-[680px]",
  narrow: "max-w-[760px]",
  default: "max-w-[1200px]",
  wide: "max-w-[1320px]",
  bleed: "max-w-[1480px]",
};

/**
 * HumanImage — consistent treatment for buyer-persona photography.
 * Rounded, subtle border + top highlight, optional caption.
 */
export function HumanImage({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Container({
  intent = "default",
  className = "",
  children,
}: {
  intent?: Intent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full px-6 lg:px-10 ${WIDTH_CLASS[intent]} ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  intent = "default",
  children,
  className = "",
  ...rest
}: ComponentProps<"section"> & { intent?: Intent }) {
  return (
    <section className={`border-b border-line ${className}`} {...rest}>
      <Container intent={intent} className="py-20 md:py-28">
        {children}
      </Container>
    </section>
  );
}

/**
 * PageHero — consistent hero block for inner pages. Dark with violet glow.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden hero-glow border-b border-line">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Container intent="default" className="relative pt-24 pb-20 md:pt-32">
        {/* Hero copy column sits inside the default container at a narrower width for readability. */}
        <div className="max-w-[720px]">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:rgba(0,199,183,0.10)] px-3 py-1 text-[12px] text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          <h1 className="headline mt-6 text-[44px] md:text-[64px]">{title}</h1>
          {lede && (
            <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-ink-2">
              {lede}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryCta && <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * FinalCTA — reusable conversion section for inner pages.
 */
export function FinalCTA({
  title,
  lede,
  primary = { label: "Request a demo", href: "/demo" },
  secondary,
}: {
  title: ReactNode;
  lede?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 hero-glow opacity-80" />
      <Container intent="narrow" className="relative py-24 text-center md:py-28">
        <H2>{title}</H2>
        {lede && <Lede>{lede}</Lede>}
        <div className="mt-9 flex justify-center gap-3">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * FAQList — AEO-optimized FAQ with auto JSON-LD injection.
 */
export function FAQList({
  title = "Answers, before the call.",
  items,
}: {
  title?: string;
  items: { q: string; a: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="border-t border-line">
      <Container intent="default" className="py-20 md:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <H2 className="mt-3">{title}</H2>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {items.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-medium text-ink">
                    <span>{f.q}</span>
                    <span className="text-ink-3 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * StackRail — the single common parent for a series of StackSection tiles.
 * All children must be StackSection (or otherwise sticky-aware) for the
 * card-stack effect to work. Do not put overflow / transform on this
 * element or its ancestors — they break position:sticky.
 */
export function StackRail({ children }: { children: ReactNode }) {
  return <div className="stack-rail">{children}</div>;
}

/**
 * StackSection — a single tile in the scroll-stack. Renders sticky so
 * later siblings slide over it. The trailing spacer is what gives the
 * user ~one viewport of scroll before the next tile arrives.
 */
export function StackSection({
  intent = "wide",
  children,
}: {
  intent?: Intent;
  children: ReactNode;
}) {
  return (
    <>
      <div className="stack-tile">
        <Container intent={intent}>
          <div className="stack-card">{children}</div>
        </Container>
      </div>
      <div className="stack-spacer" aria-hidden />
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function H2({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`headline text-[34px] md:text-[44px] leading-[1.05] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2">
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[13px] font-medium transition-all";
  const styles = {
    primary: "bg-ink text-bg hover:opacity-90",
    secondary:
      "border border-line-3 text-ink hover:bg-bg-elev hover:border-line-3",
    ghost: "text-ink-2 hover:text-ink",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`elev-card rounded-xl p-7 transition-colors hover:border-line-2 ${className}`}
    >
      {children}
    </div>
  );
}

export function Ordinal({ n }: { n: string }) {
  return (
    <span className="font-mono text-[11px] tracking-widest text-accent-2">
      {n}
    </span>
  );
}
