import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Section({
  children,
  className = "",
  ...rest
}: ComponentProps<"section">) {
  return (
    <section className={`border-b border-line ${className}`} {...rest}>
      <div className="mx-auto max-w-[1320px] px-8 py-20 md:py-28">{children}</div>
    </section>
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
    <span className="font-mono text-[11px] tracking-widest text-accent">
      {n}
    </span>
  );
}
