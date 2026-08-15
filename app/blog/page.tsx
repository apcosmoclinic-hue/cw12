import { PageHero } from "@/components/ui/page-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/data/blog";

export const metadata = buildMetadata({
  title: "Skin & Hair Care Blog",
  description: "Dermatology tips and guidance from Dr. Anand Patil — sunscreen, acne, hair loss, and everyday skin care advice for Indian skin.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Health Tips"
        title="From the dermatologist's desk"
        description="Practical, dermatologist-written guidance on skin and hair care — no fads, just what actually works."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
