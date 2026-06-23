// Shared knowledge of which routes have a Markdown twin available
// (via /api/md/ and the /r/ reader view). Used by the header toggle
// so it doesn't link to 404s, and by anything else that wants to
// gate behavior on MD availability.
//
// Keep this in sync with STATIC_PAGES + section catch-alls in
// src/lib/marketing-md.ts.

const STATIC_PATHS = new Set<string>([
  "/",
  "/platform",
  "/platform/ccms",
  "/platform/cdp",
  "/platform/ai",
  "/pricing",
  "/about",
  "/compare",
  "/blog",
  "/resources/what-is-a-ccms",
  "/resources/what-is-a-cdp",
  "/resources/ccms-rfp-template",
]);

const SECTION_PREFIXES = [
  "/compare/",
  "/roles/",
  "/solutions/",
  "/blog/",
  "/resources/ebooks/",
];

export function hasMarkdown(path: string): boolean {
  // Normalize: strip trailing slash (except root) + query string.
  const clean = (path || "/").split("?")[0].split("#")[0];
  const p = clean === "/" ? "/" : clean.replace(/\/$/, "");

  if (STATIC_PATHS.has(p)) return true;

  for (const prefix of SECTION_PREFIXES) {
    if (p.startsWith(prefix) && p.length > prefix.length) return true;
  }

  // Bare section-list pages (/roles, /solutions) don't have MD yet.
  return false;
}
