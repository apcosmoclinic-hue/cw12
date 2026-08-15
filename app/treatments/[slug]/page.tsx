import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Repeat, Activity, CheckCircle2, ArrowUpRight, Phone } from "lucide-react";
import { TREATMENTS, getTreatmentBySlug, getRelatedTreatments } from "@/data/treatments";
import { TreatmentVisual } from "@/components/ui/treatment-visual";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { getIcon } from "@/lib/icons";
import Image from "next/image";

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: `${treatment.name} in Latur`,
    description: `${treatment.tagline}. ${treatment.overview.slice(0, 120)}...`,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const related = getRelatedTreatments(slug, 3);
  const Icon = getIcon(treatment.icon);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments" },
            { name: treatment.shortName, path: `/treatments/${treatment.slug}` },
          ]),
          getFAQSchema(treatment.faqs),
          getMedicalProcedureSchema(treatment),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] pt-[calc(var(--header-height)+3rem)] pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink)] to-[var(--color-secondary)]/30" />
        <div className="absolute inset-0 bg-clarity-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link>
            <span>/</span>
            <span className="text-white/80">{treatment.shortName}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90 border border-white/10">
                {treatment.category}
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">{treatment.name}</h1>
              <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">{treatment.tagline}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">Book Appointment</Button>
                <Button href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`} variant="outline" size="lg" icon={Phone} iconPosition="left" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                  Call to Ask
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                <div className="flex flex-col gap-1.5">
                  <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                  <span className="text-xs text-white/50">Duration</span>
                  <span className="text-sm text-white font-medium">{treatment.duration}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Repeat className="h-4 w-4 text-[var(--color-accent)]" />
                  <span className="text-xs text-white/50">Sessions</span>
                  <span className="text-sm text-white font-medium">{treatment.sessions}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Activity className="h-4 w-4 text-[var(--color-accent)]" />
                  <span className="text-xs text-white/50">Downtime</span>
                  <span className="text-sm text-white font-medium">{treatment.downtime}</span>
                </div>
              </div>
            </div>

             <div className="hidden lg:block relative aspect-square overflow-hidden rounded-[2rem]">
   <Image
    src={`/images/treatments/${treatment.slug}.jpg`}
    alt={treatment.name}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
</div>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Overview" title={`Understanding ${treatment.shortName.toLowerCase()}`} align="left" className="mx-0" />
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed text-lg">{treatment.overview}</p>
        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white p-8 border border-slate-100">
            <h3 className="font-display font-semibold text-xl text-[var(--color-ink)] mb-6 flex items-center gap-2">
              <Icon className="h-5 w-5 text-[var(--color-secondary)]" /> Common Symptoms
            </h3>
            <ul className="space-y-4">
              {treatment.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent)] mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 border border-slate-100">
            <h3 className="font-display font-semibold text-xl text-[var(--color-ink)] mb-6 flex items-center gap-2">
              <Icon className="h-5 w-5 text-[var(--color-secondary)]" /> Common Causes
            </h3>
            <ul className="space-y-4">
              {treatment.causes.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent)] mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Treatment Process" title="What happens, step by step" />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatment.process.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-display text-5xl font-bold text-[var(--color-bg-light)]">{step.step}</span>
                <h4 className="mt-2 font-display font-semibold text-[var(--color-ink)]">{step.title}</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Benefits" title="What you can expect" />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {treatment.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl bg-white p-5 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Questions" title={`FAQs about ${treatment.shortName.toLowerCase()}`} />
          <div className="mt-12">
            <FAQAccordion faqs={treatment.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Explore More" title="Related treatments" align="left" className="mx-0" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((t) => (
                <Link key={t.slug} href={`/treatments/${t.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300">
                  <TreatmentVisual icon={t.icon} category={t.category} className="h-32" />
                  <div className="p-6">
                    <h4 className="font-display font-semibold text-[var(--color-ink)]">{t.shortName}</h4>
                    <p className="mt-1.5 text-sm text-[var(--color-muted)] line-clamp-2">{t.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={`Ready to treat ${treatment.shortName.toLowerCase()}?`} description="Book a consultation with Dr. Anand Patil for a personalised assessment and plan." />
    </>
  );
}
