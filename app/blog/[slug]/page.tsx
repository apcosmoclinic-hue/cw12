import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { ShareButtons } from "@/components/blog/share-buttons";
import { JsonLd } from "@/components/ui/json-ld";
import { BLOG_POSTS } from "@/data/blog";
import { SITE_CONFIG } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type BlogPageProps = { params: Promise<{ slug: string }> };

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28797C]";

export async function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((article) => article.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((article) => article.slug === slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const related = BLOG_POSTS.filter((article) => article.slug !== slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 2);

  return (
    <div className="bg-white text-[#112638]">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            publisher: { "@type": "Organization", name: SITE_CONFIG.name },
          },
        ]}
      />

      <article aria-labelledby="article-title">
        <header className="border-b border-[#DDE9EA] bg-[#F2F9FC] pt-[calc(var(--header-height,80px)+1.25rem)]">
          <div className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 sm:pb-14">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/" className={`rounded-sm underline-offset-4 hover:underline ${focus}`}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className={`rounded-sm underline-offset-4 hover:underline ${focus}`}>Blog</Link>
            </nav>

            <div className="mt-7 max-w-3xl border-l-2 border-[#669AA3] pl-4 sm:pl-6">
              <p className="text-sm font-medium text-[#24676D]">{post.category}</p>
              <h1 id="article-title" className="mt-2 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <li className="font-medium text-[#334D60]">{post.author}</li>
                <li className="flex items-center gap-2">
                  <CalendarDays aria-hidden="true" className="h-4 w-4 text-[#24676D]" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </li>
                <li className="flex items-center gap-2">
                  <Clock aria-hidden="true" className="h-4 w-4 text-[#24676D]" />
                  {post.readTime}
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="prose-content space-y-6 break-words text-base leading-[1.8] text-[#334D60] sm:text-lg">
                {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>

              <div className="mt-9 border-t border-[#DDE9EA] pt-6">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </div>

            <aside className="self-start rounded-2xl border border-[#DDE9EA] bg-[#F6FAFB] p-5" aria-labelledby="reading-note">
              <h2 id="reading-note" className="font-display text-lg font-semibold">About this article</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                This article provides general health information. An individual assessment can help put it in context.
              </p>
              {post.tags.length > 0 && (
                <ul aria-label="Article topics" className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-[#DDE9EA] bg-white px-3 py-1 text-xs font-medium text-[#24676D]">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-title" className="border-t border-[#DDE9EA] bg-[#F4F9FB] py-9 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
            <h2 id="related-title" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {related.length > 0 ? "Related articles" : "More reading"}
            </h2>
            <Link href="/blog" className={`inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#24676D] underline-offset-4 hover:underline ${focus}`}>
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to blog
            </Link>
          </div>
          {related.length > 0 && (
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((article) => (
                <li key={article.slug}>
                  <Link href={`/blog/${article.slug}`} className={`flex h-full items-start justify-between gap-4 rounded-2xl border border-[#DDE9EA] bg-white p-5 hover:border-[#86B7BB] ${focus}`}>
                    <div>
                      <p className="text-sm text-[#24676D]">{article.category}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold leading-tight">{article.title}</h3>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#24676D]" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
