import { PageHero } from "@/components/ui/page-hero";
import { TreatmentsGrid } from "@/components/services/treatments-grid";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { FeaturedTreatments } from "@/components/services/featured-treatments";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  HeartPulse,
  Zap,
  Scissors,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Skin, Hair & Laser Treatments in Latur",
  description:
    "Explore 24+ dermatology treatments at Dr. Anand Patil Skin Clinic, Latur — acne, pigmentation, hair loss, laser treatments, vitiligo surgery and more.",
  path: "/treatments",
});

const highlights = [
  {
    icon: ShieldCheck,
    title: "Evidence-Based Care",
    description:
      "Every treatment starts with an accurate diagnosis and personalized plan.",
  },
  {
    icon: Award,
    title: "Advanced Technology",
    description:
      "Modern lasers, PRP, GFC, RF procedures and surgical dermatology solutions.",
  },
  {
    icon: Users,
    title: "Personalized Treatments",
    description:
      "Tailored solutions based on skin type, age, concerns and goals.",
  },
];

const stats = [
  { value: "24+", label: "Treatments" },
  { value: "5000+", label: "Patients Treated" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Patient Satisfaction" },
];

const categories = [
  {
    icon: HeartPulse,
    title: "Medical Dermatology",
    description: "Acne, Melasma, Skin Biopsy & Medical Skin Conditions",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dermatology",
    description: "Pigmentation, Peels, Skin Glow Treatments",
  },
  {
    icon: Scissors,
    title: "Hair Treatments",
    description: "PRP, GFC, Mesotherapy & Hair Transplant",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    description: "Laser Hair Reduction, Tattoo Removal & Scars",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />

      <PageHero
        eyebrow="Our Treatments"
        title="Advanced Skin, Hair & Laser Treatments"
        description="Comprehensive dermatology solutions designed to improve skin health, restore confidence and deliver long-term results."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
        ]}
      />

      {/* CATEGORY SHOWCASE */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              Explore By Category
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Comprehensive Dermatology Services
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              From medical dermatology to advanced laser and cosmetic
              procedures, explore our complete treatment spectrum.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white border p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-sky-50 p-4 text-sky-600">
                  <item.icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
  <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-sky-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* FEATURED TREATMENTS SLIDER */}
<section className="py-24 bg-white">
  <FeaturedTreatments />
</section>

    

      {/* WHY CHOOSE */}
     <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <item.icon className="h-10 w-10 text-sky-600 mb-5" />

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    

     
{/* TREATMENTS */}
<section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium text-sky-700">
        24+ Specialized Treatments
      </span>

      {/* <h2 className="mt-5 text-4xl font-bold text-slate-900">
        Find The Right Treatment For Your Concern
      </h2> */}

      <p className="mt-4 text-lg text-slate-600">
        Explore our complete range of skin, hair, laser and surgical
        dermatology treatments.
      </p>
    </div>

    <TreatmentsGrid />
  </div>
</section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sky-600 font-semibold uppercase tracking-wider">
                Why Patients Trust Us
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Comprehensive Skin, Hair & Laser Care
              </h2>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Combining dermatology expertise with advanced technology to
                deliver safe, effective and personalized treatment outcomes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Personalized treatment plans",
                "Advanced laser technology",
                "PRP & GFC hair restoration",
                "Medical & cosmetic dermatology",
                "Dermatologic surgical procedures",
                "Long-term follow-up support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}