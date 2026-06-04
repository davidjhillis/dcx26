// Build a Next.js metadata alternates object that advertises a per-page
// markdown twin. Wired through Metadata API so each page emits a
// <link rel="alternate" type="text/markdown" href="..."> in <head>.

const SITE = "https://discovercx.com";

export function mdAlternateFor(path: string) {
  const md = path === "/" ? `${SITE}/index.md` : `${SITE}${path}.md`;
  return {
    canonical: `${SITE}${path}`,
    types: { "text/markdown": md },
  } as const;
}
