import { PageHero } from "@/components/ui/page-hero";
import { MasonryGrid } from "@/components/gallery/masonry-grid";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { GALLERY_IMAGES } from "@/data/gallery";

export const metadata = buildMetadata({
  title: "Clinic Gallery",
  description: "Take a look inside Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur — our facility, equipment and patient care spaces.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="A look inside our clinic"
        description="From our procedure rooms to our patient lounge — a glimpse of the space where your care happens."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]}
      />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <MasonryGrid images={GALLERY_IMAGES} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
