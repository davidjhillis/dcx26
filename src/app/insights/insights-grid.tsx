"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { InsightItem, InsightType } from "./_data";

const typeOrder: InsightType[] = ["Blog", "eBook", "Webinar", "Video"];

const typeIcon: Record<InsightType, React.ReactNode> = {
  Blog: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 13h6M7 16h4" />
    </svg>
  ),
  eBook: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden>
      <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z" />
      <path d="M9 7h7M9 11h7" />
    </svg>
  ),
  Webinar: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <path d="M17 9l4-2v10l-4-2z" />
    </svg>
  ),
  Video: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <path d="M17 9l4-2v10l-4-2z" />
    </svg>
  ),
};

export function InsightsGrid({
  items,
  topics,
}: {
  items: InsightItem[];
  topics: string[];
}) {
  const [typeFilter, setTypeFilter] = useState<InsightType | "All">("All");
  const [topicFilter, setTopicFilter] = useState<string | "All">("All");
  const [q, setQ] = useState("");

  const types = typeOrder.filter((t) => items.some((i) => i.type === t));

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    for (const t of types) c[t] = items.filter((i) => i.type === t).length;
    return c;
  }, [items, types]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((i) => {
      if (typeFilter !== "All" && i.type !== typeFilter) return false;
      if (topicFilter !== "All" && i.topic !== topicFilter) return false;
      if (term) {
        const hay = `${i.title} ${i.summary} ${i.topic}`.toLowerCase();
        if (!hay.includes(term)) return false;
      }
      return true;
    });
  }, [items, typeFilter, topicFilter, q]);

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-14 z-30 -mx-6 border-y border-line bg-bg/85 px-6 py-4 backdrop-blur-xl lg:-mx-10 lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          {/* Type chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Chip
              active={typeFilter === "All"}
              onClick={() => setTypeFilter("All")}
              label="All"
              count={counts.All}
            />
            {types.map((t) => (
              <Chip
                key={t}
                active={typeFilter === t}
                onClick={() => setTypeFilter(t)}
                label={t === "eBook" ? "eBooks" : `${t}s`}
                count={counts[t] || 0}
                icon={typeIcon[t]}
              />
            ))}
          </div>

          <div className="ml-auto flex flex-wrap items-center gap-2">
            {/* Topic select */}
            <label className="relative">
              <span className="sr-only">Topic</span>
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="appearance-none rounded-md border border-line bg-bg-card px-3 py-1.5 pr-8 text-[12.5px] text-ink outline-none transition-colors hover:border-line-2 focus:border-[color:var(--accent)]"
              >
                <option value="All">All topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <span aria-hidden className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-ink-3">
                ▾
              </span>
            </label>

            {/* Search */}
            <div className="relative">
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search insights"
                className="w-56 rounded-md border border-line bg-bg-card px-3 py-1.5 text-[12.5px] text-ink placeholder:text-ink-4 outline-none transition-colors hover:border-line-2 focus:border-[color:var(--accent)]"
              />
            </div>
          </div>
        </div>

        {/* Active filters / result count */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11.5px] text-ink-3">
          <span className="font-mono uppercase tracking-widest text-ink-4">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </span>
          {(typeFilter !== "All" || topicFilter !== "All" || q) && (
            <button
              type="button"
              onClick={() => {
                setTypeFilter("All");
                setTopicFilter("All");
                setQ("");
              }}
              className="rounded-full border border-line bg-bg-card px-2.5 py-0.5 text-ink-2 hover:border-line-2 hover:text-ink"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-line bg-bg-2 px-8 py-20 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-4">
            No matches
          </p>
          <h3 className="mt-3 font-display text-[20px] font-semibold">
            Nothing matches those filters yet.
          </h3>
          <p className="mt-3 text-[13.5px] text-ink-3">
            Try clearing filters or searching for a broader topic.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((i) => (
            <InsightCard key={i.id} item={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] transition-colors ${
        active
          ? "border-[color:var(--accent)]/60 bg-[color:rgba(0,199,183,0.10)] text-accent-2"
          : "border-line bg-bg-card text-ink-2 hover:border-line-2 hover:text-ink"
      }`}
    >
      {icon}
      <span>{label}</span>
      {typeof count === "number" && (
        <span className={`font-mono text-[10px] ${active ? "text-accent" : "text-ink-4"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function InsightCard({ item }: { item: InsightItem }) {
  const isCover = item.type === "eBook";
  return (
    <Link
      href={item.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-elev">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 100vw"
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${
              isCover ? "object-contain p-5" : "object-cover"
            }`}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,183,0.18),transparent_65%)]" />
            <div className="absolute inset-0 grid-bg opacity-25" />
            {(item.type === "Webinar" || item.type === "Video") && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-bg/60 backdrop-blur transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-accent-2" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md border border-line bg-bg/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-2 backdrop-blur">
          {typeIcon[item.type]} {item.type}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-black/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
          {item.meta}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
          {item.topic}
        </span>
        <h3 className="mt-1.5 font-display text-[15.5px] font-semibold leading-snug group-hover:text-accent-2">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[12.5px] leading-relaxed text-ink-3">
          {item.summary}
        </p>
        <p className="mt-4 border-t border-line pt-3 text-[12px] text-accent-2 group-hover:text-accent">
          {item.type === "eBook"
            ? "Download →"
            : item.type === "Blog"
              ? "Read →"
              : "Watch →"}
        </p>
      </div>
    </Link>
  );
}
