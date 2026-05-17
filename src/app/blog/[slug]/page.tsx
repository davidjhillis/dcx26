import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/ui";
import { getPost, getPosts } from "../_data";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary || p.title,
    openGraph: {
      title: p.title,
      description: p.summary || p.title,
      images: p.image ? [p.image] : undefined,
      type: "article",
      publishedTime: p.publishedAt,
      authors: p.author ? [p.author] : undefined,
    },
  };
}

function fmt(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getPosts();
  const related = all
    .filter((p) => p.slug !== post.slug && (p.category === post.category || !p.category))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "DiscoverCX" },
    publisher: {
      "@type": "Organization",
      name: "DiscoverCX",
      logo: {
        "@type": "ImageObject",
        url: "https://discovercx.com/brand/dcx-white.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://discovercx.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-glow border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-8 pt-20 pb-12 md:pt-28">
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-widest text-ink-3 hover:text-accent-blue-2"
          >
            ← Blog
          </Link>
          {post.category && (
            <p className="eyebrow mt-6">{post.category}</p>
          )}
          <h1 className="headline mt-4 text-[36px] md:text-[48px]">{post.title}</h1>
          {post.summary && (
            <p className="mt-6 text-[17px] leading-relaxed text-ink-2">{post.summary}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-[13px] text-ink-3">
            {post.author && <span className="text-ink">{post.author}</span>}
            {post.publishedAt && <span>· {fmt(post.publishedAt)}</span>}
            {post.readingTime && <span>· {post.readingTime}</span>}
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      {post.image && (
        <section className="bg-bg">
          <div className="mx-auto max-w-4xl px-8 pt-12 md:pt-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full rounded-xl border border-line bg-bg-elev object-cover"
            />
          </div>
        </section>
      )}

      {/* BODY */}
      <article className="bg-bg">
        <div
          className="prose-article mx-auto max-w-3xl px-8 py-12 md:py-20"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-line bg-bg-2">
          <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
            <p className="eyebrow">Keep reading</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block"
                >
                  {r.thumb || r.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={r.thumb || r.image}
                      alt={r.title}
                      className="aspect-[16/9] w-full rounded-lg border border-line bg-bg-elev object-cover"
                    />
                  ) : null}
                  <h3 className="mt-4 font-display text-[16px] font-semibold leading-snug group-hover:text-accent-blue-2">
                    {r.title}
                  </h3>
                  {r.summary && (
                    <p className="mt-2 line-clamp-2 text-[12px] text-ink-3">{r.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA
        title="Built any of this yet?"
        lede="A solution engineer walks the headless CCMS, delivery API, and customer portal in 30 minutes — on your stack."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "All posts", href: "/blog" }}
      />
    </>
  );
}
