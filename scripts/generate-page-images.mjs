#!/usr/bin/env node
// Generate page-specific images for the DCX site.
// - Diagrams via Ideogram (text-on-image)
// - Human moments via Google nano-banana
//
// Outputs:
//   public/diagrams/<slug>.jpg
//   public/humans/<slug>.jpg (additive — won't overwrite without --force)
//
// Usage:
//   node scripts/generate-page-images.mjs           # generate missing
//   node scripts/generate-page-images.mjs --force   # regenerate all
//   node scripts/generate-page-images.mjs --only=<slug>

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const DIAGRAM_OUT = resolve(ROOT, "public/diagrams");
const HUMAN_OUT = resolve(ROOT, "public/humans");
mkdirSync(DIAGRAM_OUT, { recursive: true });
mkdirSync(HUMAN_OUT, { recursive: true });

// Load env
const envPath = resolve(ROOT, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
}
const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("Missing REPLICATE_API_TOKEN in .env.local");
  process.exit(1);
}

// ─── shared brand language for diagrams ────────────────────────────────────
const DIAGRAM_STYLE = `
Style: dark editorial infographic / poster-quality information graphic.
Background: very dark navy / near-black (#0B1313). Subtle radial glow.
Accent color: teal #00C7B7 used sparingly for highlights, connectors, and
key labels — never as background fill. Typography: clean modern sans-serif,
white labels with high contrast, monospace small-caps for category tags.
Layout: balanced, generous whitespace, NOT busy. No clip-art icons; use
simple geometric shapes (rounded rectangles, thin connector lines, small
dots). Looks like a single hero illustration from a serious enterprise
software brand site (think Linear / Vercel / GitHub).
NO photographic elements. NO 3D rendering. NO stock-photo people.
Aspect ratio: 16:9. Resolution: high enough to read every label.`;

const HUMAN_STYLE = `
PHOTOGRAPHIC STYLE (mandatory):
- Look: candid editorial documentary, not stock photo, not studio-lit.
- People: real adults, ages 28-55, casually dressed (NO suits).
- Environment: real workplaces — wood, plants, books, real mugs.
- Light: warm, directional, golden hour or evening with desk lamps.
- Color: muted, slightly desaturated, with subtle teal (#00C7B7) accent
  somewhere natural in the scene.
- Cinematic depth, slight grain.
`;

// ─── diagrams ──────────────────────────────────────────────────────────────
const diagrams = {
  "cdp-unify": {
    where: "/platform/cdp · 'From fragmented to unified' section hero",
    prompt: `Dark editorial illustration: scattered content sources
converging into one hub. Spell every label EXACTLY as given.
LEFT half — six small rounded rectangles drifting in scattered formation,
each labeled in clean white sans-serif (spell exactly):
  DITA
  Markdown
  HTML
  Confluence
  SharePoint
  PDF
Each source has a faint dashed teal line bending toward the right.
RIGHT half — one large softly-glowing rounded rectangle, centered, with
TWO LINES of large white sans-serif text:
  Product Knowledge
  Hub
Below that, in small monospace caps: DISCOVER CDP
A subtle teal halo around the rectangle.
NEGATIVE SPACE: generous. Premium brand illustration, NOT a technical
diagram. No additional small text anywhere. 16:9 aspect ratio.`,
  },
  "cdp-channels": {
    where: "/platform/cdp · 'Deliver anywhere' integrations section",
    prompt: `Dark editorial illustration: one content hub at center, channels
fanning out around it. Spell every label EXACTLY as given.
CENTER — one softly-glowing rounded square. Inside it, TWO LINES of large
white sans-serif text:
  Discover
  CDP
Subtle teal halo around the square.
SIX destination tiles arranged in a balanced ring around the hub, each a
small rounded rectangle with a single label in white sans-serif (spell
exactly each one):
  Knowledge Hub
  Salesforce
  ServiceNow
  AI Assistant
  In-Product Help
  Partner Portal
Each destination is connected to the center by exactly ONE thin teal line
ending in a small teal dot at the hub.
Minimal, balanced composition. Generous negative space. No extra small
text. 16:9 aspect ratio.`,
  },
  "cdp-search": {
    where: "/platform/cdp · 'Search that finds' section",
    prompt: `Dark poster-quality illustration of a federated search interface
(NOT a real screenshot — a stylized UI illustration). Spell every label
EXACTLY as given.
TOP — one large rounded search input on dark background, showing this
placeholder text in clean white sans-serif inside the input (spell exactly):
  Configure uplink on 9200 router
Small teal magnifier glyph at the right edge of the input.
BELOW the input — a horizontal row of FIVE small filter pill labels in
white sans-serif (spell each exactly):
  All Sources · Topics · Knowledge · Video · PDFs
The "All Sources" pill is highlighted with a teal background. The other
four pills have thin gray outlines on a dark background.
BELOW the pills — three stacked rectangular result cards. Each card shows:
  - ONE title line in white sans-serif (spell exactly):
      Card 1: Configuring uplink on 9200 router
      Card 2: Rack-mount guide v3.2
      Card 3: FAQ — install failures on RHEL 9
  - One gray line of placeholder text below the title (use simple
    light-gray horizontal bars, not real text)
  - One small source pill on the right edge of each card with a single
    word in monospace caps (spell exactly):
      Card 1: TOPIC
      Card 2: PDF
      Card 3: FAQ
Clean readable typography. Subtle teal accents only on active state and
magnifier. Generous negative space. No extra labels. 16:9.`,
  },
  "ccms-pipeline": {
    where: "/platform/ccms or /platform · publishing pipeline",
    prompt: `Dark editorial infographic: content publishing pipeline reading
left-to-right. Spell every label EXACTLY as given.
LEFT — heading text above in monospace caps: AUTHORING
Below it, three small rounded rectangles stacked vertically, each with a
single label in white sans-serif (spell exactly):
  DITA
  Markdown
  HTML
CENTER — one large prominent rectangle, softly glowing with a teal halo.
Inside it, TWO LINES of large white sans-serif text:
  Component
  Repository
RIGHT — heading text above in monospace caps: DELIVERY
Below it, four small rounded tiles in a 2x2 grid, each with a single label
in white sans-serif (spell exactly):
  HTML5
  PDF
  EPUB
  JSON
CONNECTORS — thin teal lines from each authoring tile flowing into the
center repository, then fanning out from the repository to each delivery
tile. Minimal, generous negative space. No extra small text. 16:9.`,
  },
};

// ─── humans ────────────────────────────────────────────────────────────────
const humans = {
  "customer-self-service": {
    where: "/platform/cdp · 'A customer's journey' or hero alt",
    prompt: `A customer (woman, early 30s, casual sweater, hair tied back)
sitting on a soft couch in a warm home or small home-office, laptop on lap,
half-smile of satisfaction as she finds the answer she needed. The laptop
screen glows softly, casting a subtle teal accent on her face. Mug of
coffee on a side table, plant in the background, soft late-afternoon
window light. Caught mid-moment — not posed. Cinematic depth.`,
  },
  "portal-design-session": {
    where: "/platform/cdp · 'Designed by your team' section",
    prompt: `Three colleagues (mixed ages 30-50, casual professional dress)
gathered around a single laptop at a wooden desk in a converted-loft office.
The screen shows a hint of a portal interface in progress (visible but
unreadable detail, teal glow). One person is pointing at the screen
mid-thought; another is leaning in nodding; the third is looking at a
notebook with sketches. Plants, books, coffee mugs, sticky notes on a
nearby corkboard. Warm desk lamp light. Caught in a real design moment,
not posed.`,
  },
  "field-service-tech": {
    where: "/roles/field-service · hero",
    prompt: `A field service technician (man, late 30s, work shirt with
sleeves rolled, tool belt visible) standing in the equipment room of an
industrial facility, holding a rugged tablet in one hand, looking at it
mid-troubleshoot. Soft ambient industrial light from overhead fluorescents
and a window. Large network or server equipment visible in the background,
but tasteful — not cluttered. The tablet screen glows softly with a hint of
teal. A real moment of focused problem-solving — not posed. Cinematic.`,
  },
  "product-engineer": {
    where: "/roles/product-engineering · hero",
    prompt: `A product engineer (woman, early 30s, hoodie, glasses, hair up)
at a multi-monitor setup in a converted-loft office. Two ultrawide monitors
visible — one with code (teal-tinted syntax highlighting on a dark
background, no readable detail), the other with a clean rendered web
preview. She's mid-keystroke, focused, half-smile. Soft desk lamp,
mechanical keyboard, mug of tea, plant. Warm directional light. Caught in a
real moment of building. Not stock-photo.`,
  },
  "exec-strategic-thinking": {
    where: "/roles/senior-leadership · hero",
    prompt: `An executive (man, late 40s, salt-and-pepper hair, casual
button-down — NO suit, NO tie) standing at a tall window of a corner
office, holding a coffee mug, looking out at a softly blurred city skyline
at golden hour. A laptop and notebook visible on the desk behind him. One
side of his face warmly lit. Thoughtful, mid-decision moment — not posed
for the camera. Cinematic widescreen. Calm authority, not power-posing.`,
  },
  "cio-strategy": {
    where: "/roles/cio-and-heads-of-knowledge · hero",
    prompt: `A technology executive (woman, mid-40s, blazer over a clean
t-shirt, hair pulled back, glasses on) at a wooden desk in a sunlit office,
gesturing toward a colleague off-frame mid-conversation. A laptop and a
whiteboard with a hint of an architecture diagram are visible. Late-morning
window light. She's animated but composed — caught explaining something
specific. Plants, books, real workspace. Not posed. Cinematic.`,
  },
  "about-story": {
    where: "/about · 'Our Story / Twenty years in the making' section",
    prompt: `Two colleagues working warmly together at a sunlit wooden desk
in a bright, airy office. On the left, a senior writer or strategist (man,
mid-50s, salt-and-pepper hair, soft sweater, glasses on his head not face)
leaning back slightly with hands resting on a worn leather notebook,
mid-thought, half-smile. On the right, a younger colleague (woman, late
20s, neutral cream cardigan, hair tied back) leaning slightly forward
toward an open laptop, looking up from the screen as if responding to what
he just said. A second small notebook open between them. Soft directional
morning window light from the left, casting warm shadows. Background: tall
shelves with stacks of books and small plants in terracotta pots, a single
ceramic mug, a clean off-white wall. Cream and warm-wood color palette,
slightly desaturated, with one small subtle teal accent (a sticky note on
the laptop or a teal-tinted screen glow). Cinematic editorial style — feels
like a brand campaign portrait of two people who actually do the work, not
stock photography. Natural, mid-conversation, neither person looking at the
camera. Soft film grain, slight depth-of-field on the background. Square
or near-square aspect ratio (1:1).`,
  },
};

// ─── runner ────────────────────────────────────────────────────────────────
async function pollReplicate(json) {
  if (json.status === "succeeded") return json;
  const start = Date.now();
  while (json.status !== "succeeded" && json.status !== "failed") {
    if (Date.now() - start > 180_000) throw new Error("timeout waiting for prediction");
    await new Promise((r) => setTimeout(r, 2000));
    const p = await fetch(json.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } });
    json = await p.json();
  }
  if (json.status === "failed") throw new Error(`prediction failed: ${json.error}`);
  return json;
}

async function callReplicate(model, input) {
  const res = await fetch(`https://api.replicate.com/v1/models/${model}/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      Prefer: "wait=60",
    },
    body: JSON.stringify({ input }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} — ${text.slice(0, 300)}`);
  }
  return pollReplicate(await res.json());
}

async function downloadTo(url, path) {
  const img = await fetch(url);
  if (!img.ok) throw new Error(`download failed: ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  writeFileSync(path, buf);
  return buf.length;
}

async function generateDiagram(slug, prompt) {
  const json = await callReplicate("ideogram-ai/ideogram-v3-turbo", {
    prompt: `${prompt}\n\n${DIAGRAM_STYLE}`,
    aspect_ratio: "16:9",
    magic_prompt_option: "Auto",
    style_type: "Design",
  });
  const url = Array.isArray(json.output) ? json.output[0] : json.output;
  if (!url) throw new Error("no output url");
  const path = resolve(DIAGRAM_OUT, `${slug}.jpg`);
  const size = await downloadTo(url, path);
  return { path, size };
}

async function generateHuman(slug, prompt) {
  // about-story wants a square frame to match the existing reference image
  const aspect_ratio = slug === "about-story" ? "1:1" : "16:9";
  const json = await callReplicate("google/nano-banana", {
    prompt: `${prompt}\n\n${HUMAN_STYLE}`,
    aspect_ratio,
  });
  const url = Array.isArray(json.output) ? json.output[0] : json.output;
  if (!url) throw new Error("no output url");
  const path = resolve(HUMAN_OUT, `${slug}.jpg`);
  const size = await downloadTo(url, path);
  return { path, size };
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyArg = args.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length) : null;

const targets = [
  ...Object.entries(diagrams).map(([slug, def]) => ({ kind: "diagram", slug, def })),
  ...Object.entries(humans).map(([slug, def]) => ({ kind: "human", slug, def })),
].filter((t) => (only ? t.slug === only : true));

if (only && targets.length === 0) {
  console.error(`No target "${only}".`);
  console.error("Diagrams:");
  for (const k of Object.keys(diagrams)) console.error(`  ${k}`);
  console.error("Humans:");
  for (const k of Object.keys(humans)) console.error(`  ${k}`);
  process.exit(1);
}

console.log(`Generating ${targets.length} image(s)...\n`);

let ok = 0, skip = 0, fail = 0;
for (const t of targets) {
  const outDir = t.kind === "diagram" ? DIAGRAM_OUT : HUMAN_OUT;
  const existing = existsSync(resolve(outDir, `${t.slug}.jpg`));
  if (existing && !force) {
    console.log(`  ⏭  [${t.kind}] ${t.slug} (exists)`);
    skip++;
    continue;
  }
  process.stdout.write(`  · [${t.kind}] ${t.slug}\n     ${t.def.where}\n`);
  try {
    const r = t.kind === "diagram"
      ? await generateDiagram(t.slug, t.def.prompt)
      : await generateHuman(t.slug, t.def.prompt);
    console.log(`     → ${r.path.split("/").slice(-2).join("/")} (${(r.size / 1024).toFixed(0)} KB)\n`);
    ok++;
  } catch (e) {
    console.error(`     ✗ ${e.message}\n`);
    fail++;
  }
}

console.log(`\nDone. ${ok} generated · ${skip} skipped · ${fail} failed.`);
process.exit(fail > 0 ? 1 : 0);
