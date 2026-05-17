"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const templates = [
  {
    id: "home",
    src: "/info/sites/cdp-demo-home.png",
    label: "Portal home",
    desc: "Branded landing with featured topics, releases, and personalized paths.",
  },
  {
    id: "doc",
    src: "/info/sites/cdp-demo-doc.png",
    label: "Doc topic",
    desc: "Topic page with TOC, breadcrumbs, version pill, and inline feedback.",
  },
  {
    id: "search",
    src: "/info/sites/cdp-demo-search.png",
    label: "Faceted search",
    desc: "Federated search across products, versions, and content types.",
  },
];

export function CdpTemplates() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % templates.length), 5000);
    return () => clearInterval(t);
  }, []);

  const active = templates[idx];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <ul className="space-y-2">
          {templates.map((t, i) => {
            const isActive = i === idx;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`group block w-full rounded-xl border px-5 py-4 text-left transition-colors ${
                    isActive
                      ? "border-[color:var(--accent)]/60 bg-bg-card"
                      : "border-line bg-bg-card/40 hover:border-line-2"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest ${
                        isActive ? "text-accent-2" : "text-ink-3"
                      }`}
                    >
                      0{i + 1} · {t.label}
                    </span>
                    {isActive && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-[13px] leading-relaxed ${
                      isActive ? "text-ink" : "text-ink-3"
                    }`}
                  >
                    {t.desc}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="relative overflow-hidden rounded-xl border border-line bg-bg-card">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.15),transparent_70%)] blur-2xl" />
          <div className="relative aspect-[16/10] w-full">
            {templates.map((t, i) => (
              <Image
                key={t.id}
                src={t.src}
                alt={`${t.label} — DiscoverCX CDP template`}
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                priority={i === 0}
                className={`object-cover object-top transition-opacity duration-700 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-ink-4">
          Live template · {active.label}
        </p>
      </div>
    </div>
  );
}
