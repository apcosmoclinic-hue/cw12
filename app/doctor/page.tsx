import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema, getPhysicianSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { DOCTOR } from "@/data/doctor";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "About Dr. Anand Patil | Dermatologist in Latur",
  description: "Dr. Anand Patil, MD (Dermatology, Venereology & Leprosy) — 24+ years of experience treating skin, hair and cosmetic concerns in Latur, Maharashtra.",
  path: "/doctor",
});

export default function DoctorPage() {
  return (
    <>
      <JsonLd data={[getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Dr. Anand Patil", path: "/doctor" }]), getPhysicianSchema()]} />
      <PageHero
        eyebrow="Meet Your Dermatologist"
        title={DOCTOR.name}
        description={`${DOCTOR.credentials} — ${DOCTOR.title}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Dr. Anand Patil", href: "/doctor" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lifted)]">

  <Image
    src="/images/dr.png"
    alt="Dr. Anand Patil"
    fill
    priority
    className="object-cover object-top"
  />

  {/* Premium Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

  {/* Experience Badge */}
  <div className="absolute top-6 left-6 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2">
    <p className="text-xs font-semibold tracking-widest uppercase text-white">
      24+ Years Experience
    </p>
  </div>

  {/* Doctor Details */}
  <div className="absolute bottom-0 left-0 right-0 p-8">

    <h2 className="font-display text-3xl font-bold text-white">
      {DOCTOR.name}
    </h2>

    <p className="mt-2 text-base text-white/90">
      {DOCTOR.credentials}
    </p>

    <p className="mt-3 text-sm uppercase tracking-[0.15em] text-cyan-200">
      {DOCTOR.title}
    </p>

  </div>

</div>

            <div className="mt-6 rounded-2xl border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-[var(--color-ink)] mb-4">Memberships</h3>
              <ul className="space-y-3">
                {DOCTOR.memberships.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent)] mt-0.5" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Biography" title="A dermatologist dedicated to Latur" align="left" className="mx-0" />
            <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
              {DOCTOR.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[var(--color-bg-light)] p-7 border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] italic leading-relaxed">{DOCTOR.vision}</p>
            </div>

            <div className="mt-12">
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-5 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[var(--color-secondary)]" /> Qualifications
              </h3>
              <div className="space-y-3">
                {DOCTOR.qualifications.map((q) => (
                  <div key={q.degree} className="flex justify-between items-center rounded-xl border border-slate-100 px-5 py-4">
                    <span className="font-medium text-[var(--color-ink)] text-sm">{q.degree}</span>
                    <span className="text-xs text-[var(--color-muted)]">{q.institution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-5">Specializations</h3>
              <div className="flex flex-wrap gap-2.5">
                {DOCTOR.specializations.map((s) => (
                  <span key={s} className="rounded-full bg-[var(--color-bg-light)] px-4 py-2 text-sm text-[var(--color-secondary)] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Career Highlights" title="Achievements & milestones" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTOR.achievements.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 text-center border border-slate-100">
                <Award className="h-6 w-6 text-[var(--color-accent)] mx-auto" />
                <p className="mt-3 font-display text-2xl font-bold text-gradient-clinic">{a.year}</p>
                <h4 className="mt-1.5 font-semibold text-sm text-[var(--color-ink)]">{a.title}</h4>
                <p className="mt-1.5 text-xs text-[var(--color-muted)] leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Professional Journey" title="Timeline" />
          <div className="mt-14 relative pl-8 border-l-2 border-slate-100 space-y-10">
            {DOCTOR.timeline.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full bg-gradient-clinic ring-4 ring-white" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">{item.year}</span>
                <h4 className="mt-1.5 font-display font-semibold text-lg text-[var(--color-ink)]">{item.title}</h4>
                <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed max-w-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Book a consultation with Dr. Anand Patil" description="Get an accurate diagnosis and a treatment plan built around your skin, not a template." />
    </>
  );
}
