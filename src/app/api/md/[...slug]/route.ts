import { getMarkdownForPath } from "@/lib/marketing-md";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await ctx.params;
  const joined = slug.length === 0 ? "/" : `/${slug.join("/")}`;
  // Allow either "/index" (from /index.md) or "/" to return root
  const path = joined === "/index" ? "/" : joined;

  const md = getMarkdownForPath(path);
  if (!md) {
    return new Response(
      `# Not found\n\nNo markdown version of \`${path}\` is available.\n\nSee /llms.txt for the site index.\n`,
      {
        status: 404,
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      }
    );
  }

  return new Response(md, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "X-Robots-Tag": "all",
    },
  });
}
