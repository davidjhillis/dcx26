import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { getMarkdownForPath, listAllPaths } from "@/lib/marketing-md";
import { MarkdownActions } from "@/components/markdown-actions";

export const dynamicParams = true;
export const revalidate = 3600;

type Params = { slug: string[] };

function pathFromSlug(slug: string[]): string {
  if (slug.length === 0) return "/";
  const joined = `/${slug.join("/")}`;
  return joined === "/index" ? "/" : joined;
}

export async function generateStaticParams() {
  return listAllPaths()
    .filter((p) => p !== "/")
    .map((p) => ({ slug: p.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const md = getMarkdownForPath(path);
  if (!md) return {};
  // First non-empty line after frontmatter that starts with "# " is the H1.
  const titleMatch = md.match(/^#\s+(.+)$/m);
  const descMatch = md.match(/^>\s+(.+)$/m);
  const title = titleMatch?.[1].trim() ?? "Markdown view";
  const description = descMatch?.[1].trim() ?? title;
  const canonical =
    path === "/" ? "https://discovercx.com/" : `https://discovercx.com${path}`;
  return {
    title: `${title} — reader view`,
    description,
    alternates: {
      canonical,
      types: {
        "text/markdown": `https://discovercx.com${path === "/" ? "/index" : path}.md`,
      },
    },
    robots: { index: false, follow: true },
  };
}

// Build a flat list of {level, id, text} from markdown for the right-rail ToC.
function buildToc(md: string) {
  const lines = md.split("\n");
  const toc: { level: 2 | 3; id: string; text: string }[] = [];
  let inCode = false;
  for (const ln of lines) {
    if (ln.startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const m = ln.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (!m) continue;
    const level = m[1].length as 2 | 3;
    const text = m[2].replace(/[*_`]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    toc.push({ level, id, text });
  }
  return toc;
}

export default async function ReaderPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const md = getMarkdownForPath(path);
  if (!md) notFound();

  // Strip the standard footer block ("---\n## About DiscoverCX") so the
  // reader view ends cleanly and we render our own footer chrome.
  const aboutIdx = md.indexOf("\n## About DiscoverCX");
  const body = aboutIdx > 0 ? md.slice(0, aboutIdx).replace(/\n---\n\s*$/, "") : md;
  const toc = buildToc(body);

  const rawMdUrl = path === "/" ? "/index.md" : `${path}.md`;
  const marketingUrl = path;

  return (
    <div className="bg-bg">
      {/* TOP BAR — light chrome that frames the reader as a focused view */}
      <div className="border-b border-line bg-bg-2">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-3 px-6 py-3 lg:px-10">
          <div className="flex items-center gap-3 text-[12px] text-ink-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
              Reader view
            </span>
            <span className="text-ink-4">·</span>
            <Link
              href={marketingUrl}
              className="hover:text-ink"
              title="Go back to the marketing page"
            >
              ← {marketingUrl}
            </Link>
          </div>
          <MarkdownActions rawMdUrl={rawMdUrl} marketingUrl={marketingUrl} />
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT: prose + sticky ToC */}
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:px-10 lg:py-16">
        <article className="prose-md min-w-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["anchor-heading"],
                  },
                },
              ],
            ]}
          >
            {body}
          </ReactMarkdown>
        </article>

        {/* Sticky table of contents */}
        {toc.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-4">
                On this page
              </p>
              <ul className="space-y-2 border-l border-line pl-4 text-[12.5px]">
                {toc.map((h, i) => (
                  <li
                    key={`${h.id}-${i}`}
                    className={h.level === 3 ? "pl-3" : ""}
                  >
                    <a
                      href={`#${h.id}`}
                      className="block text-ink-3 transition-colors hover:text-accent-2"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
