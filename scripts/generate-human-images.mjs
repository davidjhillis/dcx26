#!/usr/bin/env node
// Generate buyer-persona human imagery via Replicate's google/nano-banana.
// Writes public/humans/<slug>.jpg.
//
// Scenes are tuned to DCX buyer personas: tech writers, content strategists,
// docs leadership, customer success, compliance/policy owners. Style is
// candid + warm + slightly cinematic — explicitly NOT corporate stock.
//
// Usage:
//   npm run gen-human-images            # generate any missing
//   npm run gen-human-images -- --force # regenerate all
//   npm run gen-human-images -- --only=<slug>

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "public/humans");

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

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

const MODEL = "google/nano-banana";
const ENDPOINT = `https://api.replicate.com/v1/models/${MODEL}/predictions`;

// Shared style directive — every prompt gets this appended so the human
// imagery feels like one consistent campaign.
const STYLE = `
PHOTOGRAPHIC STYLE (mandatory, applies to all images):
- Look: candid editorial documentary — like a thoughtful brand campaign
  for a serious software company. NOT stock photo, NOT studio-lit, NOT
  posed group shots in a glass conference room.
- People: real adults, ages 28-55, casually dressed (button-down, sweater,
  tee — NO suits, NO blazers-over-tee uniform), no exaggerated diverse
  Hollywood casting; specific, individual humans who look like real
  knowledge workers. Faces visible but not centered/posed for camera.
  No corporate handshakes, no thumbs-up.
- Environment: real workplaces — converted lofts, exposed brick, wood
  desks, plants, books, real coffee mugs, notebooks, sticky notes,
  whiteboards, normal-sized monitors. NOT generic open-plan glass offices.
- Light: warm, directional, golden hour or evening interior with desk
  lamps. Soft shadows. Slight film grain. Cinematic depth.
- Color: muted, slightly desaturated, with a subtle teal accent somewhere
  natural in the scene (a glowing screen, a sticky note, a sticker on a
  laptop, ambient light). Teal #00C7B7 is the brand accent — should be
  felt, not loud.
- Composition: cinematic widescreen 16:9. People often off-center.
  Mid-action moments, not posed. Foreground or background may be soft.
- Mood: focused, thoughtful, collaborative — buyer-persona authenticity.
- AVOID: stock smiles, fake diversity casting, headsets in 'aspirational
  call center', clipart-style icons, badges, text overlays, watermarks,
  studio backdrops, glass conference rooms, dancing in office, jumping
  in air, finger-pointing at laptop, fake whiteboard handwriting.
`.trim();

const scenes = {
  "writer-pair-review": {
    where: "Home: between authority and resources",
    prompt: `Two technical writers sitting at a wooden desk side by side,
mid-30s and mid-40s, casually dressed, one woman gesturing at a laptop
screen mid-explanation, the other man leaning in listening, slightly
amused. The laptop screen glows softly with a hint of teal (suggesting
structured content but not literally readable). Evening interior, warm
desk lamp, exposed brick wall behind, a few plants, coffee mug, notebook.
Caught mid-moment, not posed.`,
  },
  "standup-whiteboard": {
    where: "Home: alt to authority block / About: collaborative shot",
    prompt: `Small documentation team — three people, ages 30-45, mixed
casual clothing — gathered loosely in front of a large whiteboard
covered in handwritten sticky notes mapping content topics and arrows.
One person mid-marker stroke. Others looking at the board, one with
arms crossed thinking. Warm afternoon light through window. Real office
with character — wooden floor, plants. Candid energy, no one looking at
camera.`,
  },
  "solutions-engineer-demo": {
    where: "/demo: 'what to expect' visual / Pricing services",
    prompt: `A solutions engineer (woman, late 30s, glasses, casual
sweater) standing beside a wall-mounted screen mid-presentation,
gesturing to a softly visible diagram on the screen with a faint teal
glow. A small audience of two people sit relaxed at a wooden table,
one with laptop open, one taking notes. Conference room but warm —
exposed brick, plants, hanging pendant lights. Not glass, not corporate.
Mid-explanation moment.`,
  },
  "content-strategist-thinking": {
    where: "/about story column / Solutions hero alt",
    prompt: `A single content strategist (man, early 40s, beard,
thoughtful expression, casual button-down) sitting cross-legged on a
worn leather couch in a quiet office, notebook on lap, looking up at
a wall covered in pinned post-it notes arranged in a content topic
map. Late afternoon golden window light. One side of his face lit
warmly. Pensive, mid-thought. Plants and bookshelves visible. Not
posed.`,
  },
  "mentoring-moment": {
    where: "About / Solutions: technical-docs",
    prompt: `Senior tech writer (woman, mid-40s, salt-and-pepper hair,
glasses, sweater) and a younger colleague (man, late 20s) at adjacent
monitors. The senior is leaning slightly toward the junior's screen,
pointing at something specific, mid-explanation. Junior is nodding,
focused. Soft golden desk lamps, books and a couple of action figures
on the shared shelf above the monitors. Real office. Caught in a
genuine moment of mentoring.`,
  },
  "team-celebration": {
    where: "About: culture moment / Final CTA alt",
    prompt: `Four documentation team members in an office kitchen at
end of day, mid-30s to early-50s, mix of clothing styles, holding
coffee mugs and one La Croix can, mid-laugh at something one of them
just said. Warm overhead lights, simple kitchen with subway tile and
a plant. Real, not staged — one person genuinely cracking up. Not
clinking glasses on cue. The shared joke energy of shipping something
hard.`,
  },
  "compliance-tablet": {
    where: "/solutions/policies hero or sidebar",
    prompt: `A compliance professional (man, mid-50s, gray hair,
glasses, button-down shirt, no tie) standing at a tall standing desk
reading a policy document on a tablet, side window light from the
left, soft shadow on his face. Real workspace — stacks of bound
documents, a leather padfolio, a small reading lamp, plant on
windowsill. Focused, thoughtful expression. Office has personality —
not sterile.`,
  },
  "support-call": {
    where: "/solutions/salesforce or portals",
    prompt: `A customer success specialist (woman, early 30s, headset
on, casual sweater) in a warm home-office or small studio space,
looking at her monitor mid-conversation, half-smile. Soft desk lamp
to one side, plants, a coffee mug, a few books. Monitor screen
glowing softly. NOT a corporate call-center cube. NOT aspirational
stock photography. Just someone helping someone.`,
  },
  "leadership-roundtable": {
    where: "/about leadership lead-in / executive proof",
    prompt: `Three people, ages 40-55, sitting around a wooden round
table, mid-conversation — one mid-sentence with hands gesturing,
the others listening intently, one with chin on hand thinking. Mixed
genders, casual professional clothing. Late afternoon office light,
warm. Coffee, water glasses, a single open laptop, notepads. Real
moment, not posed. Looks like a working meeting, not a board photo.`,
  },
  "dita-pairing": {
    where: "/solutions/technical-docs / /platform Author section",
    prompt: `Two writers at adjacent monitors in a quiet office, both
focused on screens. The left screen shows a hint of structured content
markup (visible as colored text on dark background, no readable detail);
the right screen shows a clean rendered web view. They're not looking
at each other — comparing outputs. Subtle teal accent from the screen
glow. Plants, books, a real workspace. Late afternoon natural light.`,
  },
  "conference-talk": {
    where: "/about social proof / Webinars promo",
    prompt: `A speaker (man, late 40s, beard, casual sport coat over
t-shirt) mid-gesture on a small stage, addressing a softly blurred
audience in foreground. Stage lighting includes a subtle teal
backdrop wash. Mid-sentence, animated but not overacting. Looks like
a 200-person specialist conference, not a big keynote. Real, energetic.`,
  },
  "late-night-shipping": {
    where: "Hero alt / Final CTA / Final CTA tile",
    prompt: `Single person (woman, late 30s, hair tied back, hoodie)
at a desk, working late, single desk lamp casting warm pool of light,
otherwise dark room. Two monitors visible, one with softly glowing
teal-tinted content. A nearly-empty coffee cup. A plant in shadow. The
mood is focused not stressed — the satisfaction of finishing the thing.
Cinematic widescreen.`,
  },
};

async function generate(slug, prompt) {
  const body = {
    input: {
      prompt: `${prompt}\n\n${STYLE}`,
      aspect_ratio: "16:9",
    },
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      Prefer: "wait=60",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} — ${text.slice(0, 300)}`);
  }

  let json = await res.json();
  if (json.status === "failed") throw new Error(`prediction failed: ${json.error}`);
  if (json.status !== "succeeded") {
    const start = Date.now();
    while (json.status !== "succeeded" && json.status !== "failed") {
      if (Date.now() - start > 120_000) throw new Error("timeout waiting for prediction");
      await new Promise((r) => setTimeout(r, 1500));
      const p = await fetch(json.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } });
      json = await p.json();
    }
    if (json.status === "failed") throw new Error(`prediction failed: ${json.error}`);
  }

  const url = Array.isArray(json.output) ? json.output[0] : json.output;
  if (!url) throw new Error("no output url in prediction");

  const img = await fetch(url);
  if (!img.ok) throw new Error(`failed to download: ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  const ext = url.includes(".png") ? "png" : "jpg";
  const path = resolve(OUT, `${slug}.${ext}`);
  writeFileSync(path, buf);
  return { path, size: buf.length };
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyArg = args.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length) : null;

const targets = only
  ? Object.fromEntries(Object.entries(scenes).filter(([k]) => k === only))
  : scenes;

if (only && Object.keys(targets).length === 0) {
  console.error(`No scene "${only}". Available:`);
  for (const k of Object.keys(scenes)) console.error(`  ${k}`);
  process.exit(1);
}

console.log(`Generating ${Object.keys(targets).length} human image(s) via ${MODEL}...\n`);

let ok = 0, skip = 0, fail = 0;
for (const [slug, scene] of Object.entries(targets)) {
  const existing = ["jpg", "png"].find((e) => existsSync(resolve(OUT, `${slug}.${e}`)));
  if (existing && !force) {
    console.log(`  ⏭  ${slug}  (exists)`);
    skip++;
    continue;
  }
  process.stdout.write(`  · ${slug}\n     ${scene.where}\n`);
  try {
    const { path, size } = await generate(slug, scene.prompt);
    console.log(`     → ${path.split("/").slice(-2).join("/")} (${(size / 1024).toFixed(0)} KB)\n`);
    ok++;
  } catch (e) {
    console.error(`     ✗ ${e.message}\n`);
    fail++;
  }
}

console.log(`\nDone. ${ok} generated · ${skip} skipped · ${fail} failed.`);
process.exit(fail > 0 ? 1 : 0);
