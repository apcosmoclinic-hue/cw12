import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, List } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { BlogCard } from "@/components/blog/blog-card";
import { ShareButtons } from "@/components/blog/share-buttons";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/home/cta-section";
import { SITE_CONFIG } from "@/data/site-config";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Skin Care": "from-[var(--color-primary)] to-[var(--color-secondary)]",
  "Acne Care": "from-[var(--color-secondary)] to-purple-500",
  "Hair Care": "from-[var(--color-accent)] to-teal-600",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const gradient = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS["Skin Care"];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
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

      <article className="pt-[calc(var(--header-height)+3rem)]">
        <header className="mx-auto max-w-3xl px-6 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--color-secondary)]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--color-secondary)]">Blog</Link>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
            {post.category}
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-ink)] leading-tight">{post.title}</h1>
          <div className="mt-6 flex items-center justify-center gap-5 text-sm text-[var(--color-muted)] flex-wrap">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </header>

        <div className={`relative mx-auto mt-10 max-w-5xl h-64 sm:h-80 rounded-[2rem] bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-clarity-grid opacity-20" />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16 grid lg:grid-cols-[1fr_180px] gap-12">
          <div>
            <div className="mb-10 rounded-2xl bg-[var(--color-bg-light)] p-6">
              <h3 className="flex items-center gap-2 font-display font-semibold text-sm text-[var(--color-ink)] mb-3">
                <List className="h-4 w-4" /> In This Article
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                A {post.readTime.toLowerCase()} guide covering: {post.tags.join(", ")}.
              </p>
            </div>

            <div className="prose-content space-y-6 text-[var(--color-ink)]/85 leading-relaxed">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--color-bg-light)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-secondary)]">
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-3">Written By</p>
              <p className="font-display font-semibold text-[var(--color-ink)] text-sm">{post.author}</p>
              <p className="text-xs text-[var(--color-muted)] mt-1">Consultant Dermatologist</p>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-24 bg-[var(--color-bg-light)]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-10 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
