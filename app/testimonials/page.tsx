import { Star } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata = buildMetadata({
  title: "Patient Testimonials",
  description: "Read what patients say about their experience at Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])} />
      <PageHero
        eyebrow="Patient Stories"
        title="What our patients say"
        description="Honest feedback from patients treated for medical, cosmetic and hair concerns at the clinic."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials", href: "/testimonials" }]}
      />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-center gap-2 mb-14">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
            </div>
            <span className="text-sm text-[var(--color-muted)] font-medium">4.3 out of 5 based on patient reviews</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
