import { SectionHeader } from "@/components/ui/section-header";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GENERAL_FAQS } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Common Questions" title="Frequently asked questions" />
        <div className="mt-12">
          <FAQAccordion faqs={GENERAL_FAQS} />
        </div>
      </div>
    </section>
  );
}
