"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Video } from "@/app/resources/videos/_data";

type Size = "compact" | "wide";

export function VideoCard({
  v,
  size = "compact",
  showDate = true,
}: {
  v: Video;
  size?: Size;
  showDate?: boolean;
}) {
  const [hovering, setHovering] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  // Delay before kicking off the iframe so quick mouseovers don't load it.
  const timer = useRef<number | null>(null);

  function onEnter() {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setHovering(true), 220);
  }
  function onLeave() {
    if (timer.current) window.clearTimeout(timer.current);
    setHovering(false);
    setIframeReady(false);
  }

  return (
    <Link
      href={`/resources/videos/${v.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-colors hover:border-line-2"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elev">
        {/* Thumbnail layer */}
        {v.thumbnail && (
          <Image
            src={v.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 100vw"
            className={`object-cover transition-opacity duration-300 ${
              hovering ? "opacity-0" : "opacity-100 group-hover:scale-[1.04]"
            }`}
          />
        )}
        {/* Preview iframe — only mounted on hover.
            Skip past the cover-art intro: 30s for anything >2min,
            otherwise ~15% in, with an 5s floor. */}
        {hovering &&
          (() => {
            const skip =
              v.duration > 120
                ? 30
                : Math.max(5, Math.floor(v.duration * 0.15));
            return (
              <iframe
                src={`${v.embedUrl}?autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&background=1#t=${skip}s`}
                title="Preview"
                tabIndex={-1}
                aria-hidden
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                loading="eager"
                className="absolute inset-0 h-[140%] w-[140%] -translate-x-[14%] -translate-y-[14%] scale-100"
                style={{ border: 0 }}
              />
            );
          })()}
        {/* Static play affordance — fades when hovering (preview is doing the work) */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            hovering ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-bg/40 backdrop-blur">
            <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-accent-2" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Live dot during preview */}
        {hovering && (
          <span className="pointer-events-none absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Preview
          </span>
        )}
        {v.durationLabel && (
          <span className="pointer-events-none absolute bottom-2.5 right-2.5 rounded-md bg-black/65 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
            {v.durationLabel}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${size === "wide" ? "p-6" : "p-5"}`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
          {v.series || v.category}
        </span>
        <h4
          className={`mt-1.5 font-display font-semibold leading-snug text-ink group-hover:text-accent-2 ${
            size === "wide" ? "text-[16px]" : "text-[14.5px]"
          }`}
        >
          {v.displayTitle}
        </h4>
        {showDate && v.uploadDate && (
          <p className="mt-auto pt-3 text-[11px] text-ink-4">
            {new Date(v.uploadDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </Link>
  );
}
