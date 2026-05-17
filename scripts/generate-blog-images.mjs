#!/usr/bin/env node
// Generate one brand-consistent hero image per blog post via Nano Banana
// (Gemini 2.5 Flash Image). Reads content/blog/posts.csv, writes
// public/blog/<slug>.jpg.
//
// Usage:
//   npm run gen-blog-images            # generate any missing images
//   npm run gen-blog-images -- --force # regenerate everything
//   npm run gen-blog-images -- --only=<slug>
//
// Requires GEMINI_API_KEY in .env.local with billing enabled on the
// project. Free tier has a 0-quota for image models.

import { parse } from "csv-parse/sync";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "public/blog");
const CSV = resolve(ROOT, "content/blog/posts.csv");

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Load .env.local
const envPath = resolve(ROOT, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
}

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Shared visual directive — every prompt gets this appended so the whole
// blog feels like one design system.
const BRAND_DIRECTIVE = `
VISUAL STYLE (mandatory, applies to all images):
- Aesthetic: GitHub / Linear marketing surface — dark, refined, technical, architectural.
- Background: deep near-black charcoal (#08090A) with a soft directional glow from the top.
- Glow palette (mix of these only): deep indigo (#1B1340), violet (#7C5CFF), GitHub blue (#2F81F7), and a small accent of teal (#00C7B7).
- Composition: abstract / geometric / data-art. NO photo-realistic people. NO stock-photo offices. NO illustrated mascots. NO rainbow gradients.
- Subject: one clean focal element (prism, lattice, network of nodes, layered glass panels, isometric pipes, abstract data flows, glowing geometric tokens, etc.) chosen to *suggest* the topic without literal illustration.
- Treatment: high contrast, subtle grain, soft top-down rim light. Generous negative space.
- Aspect ratio: 16:9 wide hero.
- NO text, NO logos, NO UI screenshots, NO words anywhere in the image.
`.trim();

// Map a post title to a topical visual concept. Order matters — first
// match wins. Falls back to a generic "structured content" visual.
const TOPIC_RULES = [
  {
    test: /\b(AI|LLM|GPT|RAG|copilot|generative|chatbot|machine learning|prompt|grounding|agent)\b/i,
    visual:
      "An abstract knowledge graph: glowing teal nodes connected by thin blue light filaments, organized in layered clouds, suggesting structured content feeding an AI brain. Deep violet ambient haze. No people.",
  },
  {
    test: /\b(headless|API|delivery|JSON|composable|microservice|webhook|REST|GraphQL)\b/i,
    visual:
      "A central glass prism in cool blue splitting a single light beam into multiple distinct output beams (one teal, one violet, one blue) that fan out toward unseen surfaces. Conveys 'one source, every channel'. Geometric, no UI elements.",
  },
  {
    test: /\b(portal|self.?service|knowledge base|community|forum|support)\b/i,
    visual:
      "An abstract architectural composition of layered, frosted-glass panels in deep violet and indigo, lit from above with soft blue rim light. Suggests a structured portal experience built from modular content surfaces.",
  },
  {
    test: /\b(Salesforce|CRM|service cloud|experience cloud|Einstein|KCS)\b/i,
    visual:
      "Two glowing geometric clouds — one indigo, one teal — connected by bidirectional blue light streams, suggesting bi-directional knowledge sync between systems. Clean, technical, no logos.",
  },
  {
    test: /\b(DITA|XML|structured content|single.?source|topic|conref|markdown)\b/i,
    visual:
      "Stacked isometric blocks of structured content arranged like a precise crystalline lattice, with thin violet light tracing the relationships between blocks. Each block uniform in size, suggesting structured reusable components. No words.",
  },
  {
    test: /\b(translation|localization|multilingual|locale|i18n|XLIFF)\b/i,
    visual:
      "A ring of identical geometric tokens arrayed around a glowing central node, each token rendered in a slightly different hue along the violet-blue spectrum to suggest locale fan-out. Soft connecting filaments. No flags, no text.",
  },
  {
    test: /\b(personalization|personalize|adaptive|dynamic|tailored|relevant)\b/i,
    visual:
      "A central geometric kernel surrounded by overlapping translucent panels that shift in color and angle, suggesting content adapting to different audiences. Violet and blue accents. Architectural, refined.",
  },
  {
    test: /\b(SEO|AEO|search|ranking|discoverability|find|answer engine)\b/i,
    visual:
      "An abstract spotlight effect — a single sharp beam of teal-blue light cutting through a structured grid of geometric tokens, illuminating one node at the focal point. Suggests precise retrieval. No magnifying glass clichés.",
  },
  {
    test: /\b(workflow|review|approval|governance|audit|version|compliance|policy|SOP)\b/i,
    visual:
      "A clean sequence of stacked layers connected by thin blue lines, each layer slightly offset, suggesting a structured review and approval pipeline. Deep violet undertone. Architectural precision.",
  },
  {
    test: /\b(CCMS|CMS|content management|repository|publishing)\b/i,
    visual:
      "An abstract structured content vault — a central architectural form built from precise stacked panels with cool blue interior lighting and soft violet outer glow. Suggests an enterprise content repository.",
  },
  {
    test: /\b(customer experience|CX|self.?service|engagement|portal)\b/i,
    visual:
      "Concentric arcs of soft violet and blue light emanating from a central glowing kernel, suggesting customer experience surfaces radiating from a single source. Refined, calm, no people.",
  },
  {
    test: /\b(technical documentation|tech docs|help|user guide|knowledge)\b/i,
    visual:
      "A precise lattice of identical glass cells arranged in a 3D grid, with soft violet light pulsing through specific paths. Suggests structured technical documentation organized for reuse. No screens, no people.",
  },
];

function visualFor(title) {
  for (const rule of TOPIC_RULES) {
    if (rule.test.test(title)) return rule.visual;
  }
  // Generic fallback.
  return "An abstract architectural composition: stacked geometric panels in deep violet and indigo with soft blue rim lighting from above. Suggests structured, modular content infrastructure. High contrast, refined, no people.";
}

function promptFor(title) {
  return `
Topic: "${title}"

CONCEPT for this image:
${visualFor(title)}

${BRAND_DIRECTIVE}
`.trim();
}

async function generate(slug, title) {
  const body = {
    contents: [{ parts: [{ text: promptFor(title) }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio: "16:9" },
    },
  };

  const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} — ${text.slice(0, 300)}`);
  }

  const json = await res.json();
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
  if (!part) throw new Error(`no image in response`);

  const buf = Buffer.from(part.inlineData.data, "base64");
  const ext = part.inlineData.mimeType?.includes("png") ? "png" : "jpg";
  const path = resolve(OUT, `${slug}.${ext}`);
  writeFileSync(path, buf);
  return { path, size: buf.length };
}

// --- main ---
const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyArg = args.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length) : null;

const csv = readFileSync(CSV, "utf8");
const rows = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
});

const posts = rows
  .map((r) => ({ slug: (r["Slug"] || "").trim(), title: (r["Name"] || "").trim(), draft: (r["Draft"] || "").toLowerCase() === "true" }))
  .filter((p) => p.slug && p.title && !p.draft);

const targets = only ? posts.filter((p) => p.slug === only) : posts;

if (only && targets.length === 0) {
  console.error(`No post with slug "${only}". First few slugs:`);
  for (const p of posts.slice(0, 5)) console.error(`  ${p.slug}`);
  process.exit(1);
}

console.log(`Generating ${targets.length} blog image(s) with ${MODEL}...\n`);

let ok = 0, skip = 0, fail = 0;
for (const post of targets) {
  const existing = ["jpg", "png"].find((e) => existsSync(resolve(OUT, `${post.slug}.${e}`)));
  if (existing && !force) {
    console.log(`  ⏭  ${post.slug}  (exists — use --force to regenerate)`);
    skip++;
    continue;
  }
  process.stdout.write(`  · ${post.slug}\n     "${post.title.slice(0, 70)}"\n`);
  try {
    const { path, size } = await generate(post.slug, post.title);
    console.log(`     → ${path.split("/").slice(-2).join("/")} (${(size / 1024).toFixed(0)} KB)\n`);
    ok++;
    // Light throttle to avoid hammering the API
    await new Promise((r) => setTimeout(r, 400));
  } catch (e) {
    console.error(`     ✗ ${e.message}\n`);
    fail++;
  }
}

console.log(`\nDone. ${ok} generated · ${skip} skipped · ${fail} failed.`);
process.exit(fail > 0 ? 1 : 0);
