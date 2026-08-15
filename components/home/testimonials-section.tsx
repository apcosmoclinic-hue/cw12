import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialsSlider } from "@/components/testimonials/testimonials-slider";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Patient Stories"
          title="What our patients say"
          description="Real feedback from patients treated at the clinic for skin, hair and cosmetic concerns."
        />
        <div className="mt-14">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
}
