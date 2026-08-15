import { Hero } from "@/components/home/hero";
import { StatsCounter } from "@/components/home/stats-counter";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TreatmentsShowcase } from "@/components/home/treatments-showcase";
import { DoctorTeaser } from "@/components/home/doctor-teaser";
import { PatientJourney } from "@/components/home/patient-journey";
import { GalleryTeaser } from "@/components/home/gallery-teaser";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { LocationSection } from "@/components/home/location-section";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getFAQSchema } from "@/lib/schema";
import { GENERAL_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dr. Anand Patil Skin & Cosmetic Laser Clinic | Best Dermatologist in Latur",
  description:
    "Latur's trusted skin, hair & laser clinic led by Dr. Anand Patil (MD Dermatology). 24+ years of experience in acne, pigmentation, hair loss, laser & cosmetic dermatology.",
  path: "/",
  keywords: ["dermatologist Latur", "skin clinic Latur", "best skin doctor Latur", "Dr Anand Patil skin clinic"],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema(GENERAL_FAQS)} />
      <Hero />
     
      <TrustMarquee />
      <WhyChooseUs />
      <TreatmentsShowcase />
      <DoctorTeaser />
      <PatientJourney />
      <GalleryTeaser />
      <TestimonialsSection />
      <BlogTeaser />
      <FAQSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
