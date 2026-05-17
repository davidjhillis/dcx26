"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useId, useRef } from "react";

// "Topic" — the protagonist object of the platform narrative.
// A glowing violet/blue hexagon (the structured content topic).
// Each chapter shows it doing something different:
//   Author   — being born from typed characters in an editor frame
//   Manage   — being filed into a stack of versioned siblings
//   Deliver  — splitting into copies that fan out to channels
//   Discover — landing in a portal panel and rippling outward

type Variant = "author" | "manage" | "deliver" | "discover";

const COLORS = {
  topic: "#7C5CFF",      // accent-violet (the Topic itself stays violet — its identity)
  topicBright: "#9F86FF",
  beam: "#5BE9DE",        // accent-2 (teal — the "active" / connection color)
  hint: "#00C7B7",        // accent
  line: "rgba(255,255,255,0.10)",
  ink: "#F7F8F8",
  ink3: "#8A8F98",
};

/** The Topic itself — a glowing hexagonal token with internal lattice. */
function Topic({
  size = 56,
  glow = true,
  pulse = true,
}: {
  size?: number;
  glow?: boolean;
  pulse?: boolean;
}) {
  const reactId = useId();
  const id = `topic${reactId.replace(/:/g, "")}`;
  return (
    <g>
      {glow && (
        <motion.circle
          r={size * 1.6}
          fill={`url(#${id}-glow)`}
          animate={pulse ? { opacity: [0.5, 0.85, 0.5] } : undefined}
          transition={pulse ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
      )}
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor={COLORS.topic} stopOpacity="0.55" />
          <stop offset="60%" stopColor={COLORS.topic} stopOpacity="0.08" />
          <stop offset="100%" stopColor={COLORS.topic} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.topicBright} />
          <stop offset="100%" stopColor={COLORS.topic} />
        </linearGradient>
      </defs>
      <motion.g
        animate={pulse ? { scale: [1, 1.05, 1] } : undefined}
        transition={pulse ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
        style={{ transformOrigin: "center" }}
      >
        {/* Hexagon outer */}
        <polygon
          points={hex(size)}
          fill={`url(#${id}-fill)`}
          stroke={COLORS.topicBright}
          strokeWidth="1"
          opacity="0.95"
        />
        {/* Internal lattice — suggests structure */}
        <polygon
          points={hex(size * 0.55)}
          fill="none"
          stroke={COLORS.beam}
          strokeWidth="0.6"
          opacity="0.7"
        />
        <line
          x1={0}
          y1={-size * 0.55}
          x2={0}
          y2={size * 0.55}
          stroke={COLORS.beam}
          strokeWidth="0.6"
          opacity="0.45"
        />
        <line
          x1={-size * 0.48}
          y1={-size * 0.28}
          x2={size * 0.48}
          y2={size * 0.28}
          stroke={COLORS.beam}
          strokeWidth="0.6"
          opacity="0.45"
        />
        <line
          x1={size * 0.48}
          y1={-size * 0.28}
          x2={-size * 0.48}
          y2={size * 0.28}
          stroke={COLORS.beam}
          strokeWidth="0.6"
          opacity="0.45"
        />
        {/* Centre seed */}
        <circle r="3" fill={COLORS.ink} />
      </motion.g>
    </g>
  );
}

function hex(r: number) {
  // Pointy-top hexagon
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`);
  }
  return pts.join(" ");
}

/** Each variant is a self-contained 480x320 SVG scene starring the Topic. */
export function TopicVisual({ variant }: { variant: Variant }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const animate = inView && !reduceMotion;

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-[radial-gradient(ellipse_at_top,#1B1340,#0E0F11_60%,#08090A)]"
      role="img"
      aria-label={`Topic visualization: ${variant}`}
    >
      <svg
        viewBox="0 0 480 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {variant === "author" && <AuthorScene animate={animate} />}
        {variant === "manage" && <ManageScene animate={animate} />}
        {variant === "deliver" && <DeliverScene animate={animate} />}
        {variant === "discover" && <DiscoverScene animate={animate} />}
      </svg>
    </div>
  );
}

/** AUTHOR — Topic materializes from typed characters in an editor frame. */
function AuthorScene({ animate }: { animate: boolean }) {
  return (
    <g>
      {/* Editor frame */}
      <rect
        x="50"
        y="50"
        width="380"
        height="200"
        rx="10"
        fill="rgba(255,255,255,0.02)"
        stroke={COLORS.line}
      />
      {/* Title bar dots */}
      <circle cx="70" cy="68" r="3" fill={COLORS.line} />
      <circle cx="80" cy="68" r="3" fill={COLORS.line} />
      <circle cx="90" cy="68" r="3" fill={COLORS.line} />
      <line x1="50" y1="84" x2="430" y2="84" stroke={COLORS.line} />

      {/* Typed lines */}
      {[110, 130, 150, 170, 210].map((y, i) => (
        <motion.rect
          key={y}
          x="70"
          y={y - 5}
          height="6"
          rx="2"
          fill={COLORS.ink3}
          initial={{ width: 0, opacity: 0 }}
          animate={animate ? { width: [0, [220, 260, 180, 240, 140][i]], opacity: 0.4 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: "easeOut" }}
        />
      ))}
      {/* Blinking cursor */}
      <motion.rect
        x="70"
        y="185"
        width="2"
        height="14"
        fill={COLORS.beam}
        animate={animate ? { opacity: [1, 0, 1] } : { opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Topic emerges from the editor */}
      <motion.g
        initial={{ x: 240, y: 220, scale: 0, opacity: 0 }}
        animate={
          animate
            ? { x: 240, y: 170, scale: 1, opacity: 1 }
            : { x: 240, y: 220, scale: 0, opacity: 0 }
        }
        transition={{ delay: 1.2, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Topic size={32} />
      </motion.g>
    </g>
  );
}

/** MANAGE — Topic gets filed into a versioned stack. */
function ManageScene({ animate }: { animate: boolean }) {
  const stackX = 340;
  return (
    <g>
      {/* Existing stack of versioned siblings */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${stackX} ${190 - i * 18})`}>
          <rect
            x="-46"
            y="-12"
            width="92"
            height="24"
            rx="4"
            fill="rgba(255,255,255,0.02)"
            stroke={COLORS.line}
          />
          <circle cx="-30" cy="0" r="4" fill={COLORS.topic} opacity={0.4 - i * 0.08} />
          <rect x="-18" y="-2" width={56 - i * 8} height="4" rx="1" fill={COLORS.ink3} opacity="0.5" />
        </g>
      ))}
      {/* Version timeline */}
      <line x1="80" y1="100" x2="400" y2="100" stroke={COLORS.line} strokeDasharray="3 4" />
      {["v1.0", "v1.1", "v1.2", "v2.0"].map((v, i) => (
        <g key={v} transform={`translate(${130 + i * 80} 100)`}>
          <circle r="3" fill={COLORS.beam} opacity="0.7" />
          <text
            x="0"
            y="-12"
            textAnchor="middle"
            fontSize="9"
            fill={COLORS.ink3}
            fontFamily="ui-monospace, monospace"
          >
            {v}
          </text>
        </g>
      ))}

      {/* The new Topic flies in from the left and lands on top of the stack */}
      <motion.g
        initial={{ x: 80, y: 180, scale: 0.7, opacity: 0 }}
        animate={
          animate
            ? { x: stackX, y: 118, scale: 1, opacity: 1 }
            : { x: 80, y: 180, scale: 0.7, opacity: 0 }
        }
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <Topic size={28} />
      </motion.g>
    </g>
  );
}

/** DELIVER — Topic splits into copies that fan out to four channels. */
function DeliverScene({ animate }: { animate: boolean }) {
  const cx = 160;
  const cy = 150;
  // Four destination panels on the right
  const destinations = [
    { x: 380, y: 60, label: "portal" },
    { x: 380, y: 120, label: "in-product" },
    { x: 380, y: 180, label: "salesforce" },
    { x: 380, y: 240, label: "ai-rag" },
  ];
  return (
    <g>
      {/* Beams */}
      {destinations.map((d, i) => (
        <motion.line
          key={d.label}
          x1={cx}
          y1={cy}
          x2={d.x - 32}
          y2={d.y}
          stroke={COLORS.beam}
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      {/* Destinations */}
      {destinations.map((d, i) => (
        <motion.g
          key={d.label}
          transform={`translate(${d.x} ${d.y})`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.4, delay: 1.0 + i * 0.12 }}
        >
          <rect
            x="-30"
            y="-14"
            width="60"
            height="28"
            rx="6"
            fill="rgba(255,255,255,0.04)"
            stroke={COLORS.line}
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="10"
            fill={COLORS.ink}
            fontFamily="ui-monospace, monospace"
          >
            {d.label}
          </text>
        </motion.g>
      ))}

      {/* Packets travelling along the beams (the Topic copies) */}
      {animate &&
        destinations.map((d, i) => (
          <motion.g
            key={`p-${d.label}`}
            initial={{ x: cx, y: cy, opacity: 0 }}
            animate={{
              x: [cx, d.x - 32],
              y: [cy, d.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 1.3 + i * 0.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <circle r="4" fill={COLORS.topicBright} />
            <circle r="8" fill={COLORS.topic} opacity="0.25" />
          </motion.g>
        ))}

      {/* The Topic at the source */}
      <g transform={`translate(${cx} ${cy})`}>
        <Topic size={36} />
      </g>

      <text
        x={cx}
        y={cy + 70}
        textAnchor="middle"
        fontSize="10"
        fill={COLORS.ink3}
        fontFamily="ui-monospace, monospace"
      >
        one source
      </text>
    </g>
  );
}

/** DISCOVER — Topic lands inside a portal panel and ripples outward. */
function DiscoverScene({ animate }: { animate: boolean }) {
  const cx = 240;
  const cy = 155;
  return (
    <g>
      {/* Outer portal frame */}
      <rect
        x="40"
        y="40"
        width="400"
        height="220"
        rx="10"
        fill="rgba(255,255,255,0.02)"
        stroke={COLORS.line}
      />
      <line x1="40" y1="72" x2="440" y2="72" stroke={COLORS.line} />
      <circle cx="60" cy="56" r="3" fill={COLORS.line} />
      <circle cx="70" cy="56" r="3" fill={COLORS.line} />
      <circle cx="80" cy="56" r="3" fill={COLORS.line} />

      {/* Search bar */}
      <rect
        x="80"
        y="92"
        width="320"
        height="22"
        rx="11"
        fill="rgba(255,255,255,0.03)"
        stroke={COLORS.line}
      />
      <circle cx="94" cy="103" r="4" fill="none" stroke={COLORS.ink3} strokeWidth="1.2" />

      {/* Result cards */}
      {[140, 170, 200, 230].map((y, i) => (
        <motion.g
          key={y}
          initial={{ opacity: 0, x: -6 }}
          animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.15 }}
        >
          <rect
            x="80"
            y={y - 8}
            width="320"
            height="20"
            rx="4"
            fill="rgba(255,255,255,0.02)"
            stroke={COLORS.line}
          />
          {/* The matched-card lights up with violet ring */}
          {i === 1 && animate && (
            <motion.rect
              x="80"
              y={y - 8}
              width="320"
              height="20"
              rx="4"
              fill="none"
              stroke={COLORS.topicBright}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 0.6, delay: 2 }}
            />
          )}
          <rect x="94" y={y - 3} width="180" height="3" rx="1" fill={COLORS.ink3} opacity="0.6" />
          <rect x="94" y={y + 3} width="120" height="3" rx="1" fill={COLORS.ink3} opacity="0.3" />
        </motion.g>
      ))}

      {/* The Topic lands at the matched card */}
      <motion.g
        initial={{ x: cx, y: 0, scale: 1.2, opacity: 0 }}
        animate={
          animate
            ? { x: cx, y: cy + 15, scale: 0.85, opacity: 1 }
            : { x: cx, y: 0, scale: 1.2, opacity: 0 }
        }
        transition={{ duration: 1.0, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <Topic size={26} />
      </motion.g>

      {/* Ripple on landing */}
      {animate && (
        <motion.circle
          cx={cx}
          cy={cy + 15}
          r={0}
          fill="none"
          stroke={COLORS.topicBright}
          strokeWidth="1"
          initial={{ r: 0, opacity: 0.8 }}
          animate={{ r: 90, opacity: 0 }}
          transition={{ duration: 1.4, delay: 1.4, repeat: Infinity, repeatDelay: 1.5 }}
        />
      )}
    </g>
  );
}
