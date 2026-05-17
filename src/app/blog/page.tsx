import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { getPosts } from "./_data";

export const metadata: Metadata = {
  title: "Blog — Headless CCMS, CDP, DITA & AI for Customer Content",
  description:
    "Field notes from the structured-content frontier — headless CCMS, content delivery platforms, DITA, AEO, AI grounding, and how Fortune 500 docs teams ship.",
};

function fmt(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Field notes from
            <br />
            <span className="text-ink-3">the structured-content frontier.</span>
          </>
        }
        lede="Headless CCMS, content delivery platforms, DITA, AEO, AI grounding — and how Fortune 500 docs teams ship."
      />

      {featured && (
        <section className="bg-bg border-b border-line">
          <div className="mx-auto max-w-[1480px] px-8 py-16 lg:px-12 lg:py-20">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-10 lg:grid-cols-12"
            >
              {featured.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[16/9] w-full rounded-xl border border-line bg-bg-elev object-cover lg:col-span-7"
                />
              )}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="eyebrow">Featured</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight group-hover:text-accent-blue-2">
                  {featured.title}
                </h2>
                {featured.summary && (
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                    {featured.summary}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-ink-3">
                  {featured.author && <span>{featured.author}</span>}
                  {featured.publishedAt && <span>· {fmt(featured.publishedAt)}</span>}
                  {featured.readingTime && <span>· {featured.readingTime}</span>}
                  {featured.category && (
                    <span className="rounded-md border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                      {featured.category}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-bg-2">
        <div className="mx-auto max-w-[1480px] px-8 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col"
              >
                {(p.thumb || p.image) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.thumb || p.image}
                    alt={p.title}
                    className="aspect-[16/9] w-full rounded-lg border border-line bg-bg-elev object-cover transition-opacity group-hover:opacity-90"
                  />
                )}
                <div className="mt-5 flex flex-1 flex-col">
                  {p.category && (
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-blue-2">
                      {p.category}
                    </p>
                  )}
                  <h3 className="mt-2 font-display text-[18px] font-semibold leading-snug tracking-tight group-hover:text-accent-blue-2">
                    {p.title}
                  </h3>
                  {p.summary && (
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink-3">
                      {p.summary}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-ink-4">
                    {p.author && <span>{p.author}</span>}
                    {p.publishedAt && <span>· {fmt(p.publishedAt)}</span>}
                    {p.readingTime && <span>· {p.readingTime}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
