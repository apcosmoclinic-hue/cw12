import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { FacilityHighlights } from "@/components/about/facility-highlights";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { ShieldCheck, Sparkles, Users, MapPin } from "lucide-react";

export const metadata = buildMetadata({
  title: "About the Clinic",
  description: "Learn about Dr. Anand Patil Skin & Cosmetic Laser Clinic in Ganj Golai, Latur — our facility, values, and 24+ years of dermatology care.",
  path: "/about-clinic",
});

const VALUES = [
  { icon: ShieldCheck, title: "Clinical Accuracy", description: "Every treatment is grounded in an accurate diagnosis — no shortcuts, no guesswork." },
  { icon: Sparkles, title: "Modern Technology", description: "In-house laser, phototherapy and dermatosurgical equipment maintained to clinical standards." },
  { icon: Users, title: "Patient-First Care", description: "Clear explanations, honest expectations, and follow-up that doesn't stop after one visit." },
  { icon: MapPin, title: "Rooted in Latur", description: "Built specifically to bring specialist-level dermatology to Latur and the surrounding district." },
];

export default function AboutClinicPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "About the Clinic", path: "/about-clinic" }])} />
      <PageHero
        eyebrow="About Us"
        title="A dermatology clinic built for Latur"
        description="Medical, cosmetic and surgical skin care — under one roof, led by one dermatologist you can build a long-term relationship with."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About the Clinic", href: "/about-clinic" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Our Story" title="Two decades of dermatology, one clinic" align="left" className="mx-0" />
            <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Dr. Anand Patil Skin &amp; Cosmetic Laser Clinic was founded with a clear purpose: to bring
                specialist-level dermatology care to Latur, without patients needing to travel to Pune, Aurangabad
                or Mumbai for reliable treatment.
              </p>
              <p>
                Located opposite the bus stand at Ganj Golai, the clinic has grown over 24+ years into a
                full-service centre offering medical dermatology, cosmetic procedures, laser therapy, and
                hair restoration — all under the direct care of Dr. Anand Patil.
              </p>
              <p>
                The clinic&rsquo;s facility includes dedicated procedure rooms, a full-body phototherapy unit for
                vitiligo and psoriasis, advanced diode and Q-switched laser systems, and a comfortable
                patient waiting area designed for a calm, unhurried visit.
              </p>
            </div>
          </div>
          <FacilityHighlights />
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What We Stand For" title="Our values in practice" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-7 border border-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-light)] text-[var(--color-secondary)]">
                  <value.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-[var(--color-ink)]">{value.title}</h3>
                <p className="mt-2.5 text-sm text-[var(--color-muted)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader eyebrow="Timings & Location" title="Visit us at Ganj Golai, Latur" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-[var(--color-ink)] mb-4">Clinic Hours</h3>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                {SITE_CONFIG.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span className={h.time === "Closed" ? "text-[var(--color-emergency)]" : "text-[var(--color-ink)] font-medium"}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-[var(--color-ink)] mb-4">Address</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{SITE_CONFIG.address.full}</p>
              <h3 className="font-display font-semibold text-[var(--color-ink)] mt-5 mb-2">Contact</h3>
              <p className="text-sm text-[var(--color-muted)]">{SITE_CONFIG.contact.phonePrimary}</p>
              <p className="text-sm text-[var(--color-muted)]">{SITE_CONFIG.contact.email}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
