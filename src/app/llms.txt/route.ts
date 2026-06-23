import { listAllPaths } from "@/lib/marketing-md";

export const runtime = "nodejs";

const SITE = "https://discovercx.com";

export async function GET() {
  const paths = listAllPaths();

  // Group paths into sections for the llms.txt
  const product = paths.filter((p) => p === "/" || p.startsWith("/platform"));
  const company = paths.filter(
    (p) => p === "/about" || p === "/pricing" || p === "/contact"
  );
  const compare = paths.filter((p) => p === "/compare" || p.startsWith("/compare/"));
  const solutions = paths.filter((p) => p.startsWith("/solutions/"));
  const roles = paths.filter((p) => p.startsWith("/roles/"));
  const blog = paths.filter((p) => p === "/blog");

  const labelFor = (p: string) => {
    if (p === "/") return "Home";
    if (p === "/platform") return "Platform overview";
    if (p === "/platform/ccms") return "Discover CCMS";
    if (p === "/platform/cdp") return "Discover CDP";
    if (p === "/platform/ai") return "Discover AI";
    if (p === "/pricing") return "Pricing";
    if (p === "/about") return "About";
    if (p === "/contact") return "Contact";
    if (p === "/blog") return "Blog";
    if (p === "/compare") return "All comparisons";
    if (p.startsWith("/compare/")) return `vs. ${p.replace("/compare/", "").replace(/-/g, " ")}`;
    if (p.startsWith("/solutions/")) return p.replace("/solutions/", "").replace(/-/g, " ");
    if (p.startsWith("/roles/")) return p.replace("/roles/", "").replace(/-/g, " ");
    return p;
  };
  const fmt = (p: string) => {
    const url = p === "/" ? `${SITE}/index.md` : `${SITE}${p}.md`;
    return `- [${labelFor(p)}](${url})`;
  };

  const body = [
    "# DiscoverCX",
    "",
    "> The headless Content Delivery Platform built on the world's leading CCMS. DiscoverCX unifies structured authoring (DITA, Markdown, HTML), a typed component CCMS, and a real-time delivery API — so one source of truth serves docs sites, customer portals, Salesforce, in-product help, and AI assistants.",
    "",
    "DiscoverCX is built and operated by Ingeniux Corporation (founded 1999, Seattle). Used by Fortune 500 documentation and customer-content teams including Cisco, Coupa, Dolby, GE, UKG, and NCCI.",
    "",
    "Every page on this site is available as plain Markdown by appending `.md` to the URL (e.g. https://discovercx.com/platform/ccms.md). LLMs and AI agents can ingest these directly.",
    "",
    "## Product",
    "",
    ...product.map(fmt),
    "",
    "## Solutions",
    "",
    ...solutions.map(fmt),
    "",
    "## Roles",
    "",
    ...roles.map(fmt),
    "",
    "## Compare",
    "",
    ...compare.map(fmt),
    "",
    "## Company",
    "",
    ...company.map(fmt),
    "",
    "## Blog",
    "",
    ...blog.map(fmt),
    "",
    "## Optional",
    "",
    "- [Pricing details](https://discovercx.com/pricing.md)",
    "- [Request a demo](https://discovercx.com/demo)",
    "- [Talk to sales](https://discovercx.com/contact)",
    "",
    "---",
    "",
    "*This llms.txt follows the convention at https://llmstxt.org. Last updated 2026-06-04.*",
    "",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "X-Robots-Tag": "all",
    },
  });
}
