import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Repeat,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  Phone,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Stethoscope,
  GraduationCap,
  MapPin,
  Info,
} from "lucide-react";
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

/* ------------------------------------------------------------------ */
/*  Replace with the doctor's real details (NMC / State Council rule:  */
/*  registration number should be displayed).                          */
/* ------------------------------------------------------------------ */
const DOCTOR = {
  name: "Dr. Anand Patil",
  qualification: "MBBS, M.D. (Dermatology, Venereology & Leprosy)",
  registration: "Maharashtra Medical Council Reg. No. XXXXX", // <-- put real number
  photo: "/images/doctor/dr-anand-patil.jpg",
  clinic: "Dr. Anand Patil Skin & Cosmetic Laser Clinic",
  address: "Opp. Bus Stand, Latur Main Road, Ganj Golai, Latur – 413512",
  timings: "Mon – Sat: 10:00 AM – 9:00 PM · Sunday closed",
};

/* Clinic photos: real photos of YOUR clinic only (no stock people). */
const CLINIC_PHOTOS = [
  {
    src: "/images/clinic/consultation-room.jpg",
    alt: "Consultation room at Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur",
    caption: "Consultation room",
  },
  {
    src: "/images/clinic/treatment-room.jpg",
    alt: "Clean treatment room with examination bed",
    caption: "Treatment room",
  },
  {
    src: "/images/clinic/equipment.jpg",
    alt: "Dermatology equipment kept sterilised and ready for use",
    caption: "Sterilised equipment",
  },
];

const ANCHORS = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms & causes" },
  { id: "process", label: "Process" },
  { id: "clinic", label: "Our clinic" },
  { id: "goals", label: "Treatment goals" },
  { id: "faq", label: "FAQs" },
];

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

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#F4FAFC] pt-[calc(var(--header-height)+3rem)] pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F4FAFC] to-[#E4F3F7]" />
        <div className="absolute inset-0 bg-clarity-grid opacity-10" />
        {/* soft glow behind the photo */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-[#BBDFEA]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-1.5 text-xs text-[#4B6471]">
            <Link href="/" className="hover:text-[#112638]">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-[#112638]">Treatments</Link>
            <span>/</span>
            <span className="text-[#334D60]">{treatment.shortName}</span>
          </nav>

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D0E5E9] bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#24676D] backdrop-blur">
                <Icon className="h-3.5 w-3.5 text-[#24676D]" />
                {treatment.category}
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-[#112638] sm:text-5xl lg:text-6xl">
                {treatment.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#405B69]">{treatment.tagline}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">Book Appointment</Button>
                <Button
                  href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  iconPosition="left"
                  className="border-[#BCD3DA] text-[#112638] hover:border-[#4C8791] hover:bg-white/70"
                >
                  Call to Ask
                </Button>
              </div>

              {/* glass facts bar */}
              <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-[#DDE9EA] overflow-hidden rounded-2xl border border-[#DDE9EA] bg-white/75 backdrop-blur-md">
                {[
                  { icon: Clock, label: "Duration", value: treatment.duration },
                  { icon: Repeat, label: "Sessions", value: treatment.sessions },
                  { icon: Activity, label: "Downtime", value: treatment.downtime },
                ].map(({ icon: I, label, value }) => (
                  <div key={label} className="flex flex-col gap-1.5 p-5">
                    <I className="h-4 w-4 text-[#24676D]" />
                    <dt className="text-xs text-[#4B6471]">{label}</dt>
                    <dd className="text-sm font-medium text-[#112638]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* hero photo with floating doctor chip */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-3 rounded-[2.5rem] border border-[#DDE9EA]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10">
                <Image
                  src={`/images/treatments/${treatment.slug}.jpg`}
                  alt={`${treatment.name} consultation at our clinic in Latur`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 0px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-8 flex items-center gap-4 rounded-2xl border border-[#DDE9EA] bg-white/95 p-4 pr-6 shadow-xl backdrop-blur">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-[var(--color-bg-light)]">
  <Image
    src="/images/dr.png"
    alt={DOCTOR.name}
    fill
    sizes="56px"
    className="object-cover"
  />
</div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{DOCTOR.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">Consultant Dermatologist</p>
                  <p className="mt-0.5 text-[11px] text-[var(--color-muted)]">{DOCTOR.registration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STICKY SECTION NAV ===================== */}
      <div className="sticky top-[var(--header-height)] z-30 border-b border-slate-100 bg-white/85 backdrop-blur-md">
        <nav aria-label="On this page" className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-3 text-sm">
          {ANCHORS.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="shrink-0 rounded-full px-4 py-1.5 font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-bg-light)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-secondary)]"
            >
              {a.label}
            </a>
          ))}
        </nav>
      </div>

      {/* =========================== OVERVIEW ========================= */}
      <section id="overview" className="scroll-mt-32 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <SectionHeader eyebrow="Overview" title={`Understanding ${treatment.shortName.toLowerCase()}`} align="left" className="mx-0" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{treatment.overview}</p>
          </div>

          {/* sticky "at a glance" card */}
          <aside className="lg:sticky lg:top-44 lg:self-start">
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[var(--shadow-lifted)]">
              <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">At a glance</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-[var(--color-muted)]">Category</span>
                  <span className="text-right font-medium text-[var(--color-ink)]">{treatment.category}</span>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-[var(--color-muted)]">Duration</span>
                  <span className="font-medium text-[var(--color-ink)]">{treatment.duration}</span>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-[var(--color-muted)]">Sessions</span>
                  <span className="font-medium text-[var(--color-ink)]">{treatment.sessions}</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span className="text-[var(--color-muted)]">Downtime</span>
                  <span className="font-medium text-[var(--color-ink)]">{treatment.downtime}</span>
                </li>
              </ul>
              <Button href="/contact" size="md" className="mt-7 w-full justify-center">Book Appointment</Button>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[var(--color-muted)]">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Suitability and duration are decided by the doctor after examination.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ===================== SYMPTOMS & CAUSES ====================== */}
      <section id="symptoms" className="scroll-mt-32 bg-[var(--color-bg-light)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Know the condition" title="Symptoms and causes" align="left" className="mx-0" />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* photo: examination / consultation (no patient face needed) */}
            <div className="relative hidden min-h-[26rem] overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/clinic/skin-examination.jpg"
                alt="Dermatologist examining skin with a dermatoscope"
                fill
                sizes="(min-width: 1024px) 30vw, 0px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm leading-relaxed text-white/90">
                A proper examination comes first. Treatment is planned only after the doctor understands your skin.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                { title: "Common symptoms", items: treatment.symptoms },
                { title: "Common causes", items: treatment.causes },
              ].map((block) => (
                <div key={block.title} className="rounded-3xl border border-slate-100 bg-white p-8">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10">
                    <Icon className="h-5 w-5 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{block.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ PROCESS ========================= */}
      <section id="process" className="scroll-mt-32 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Treatment process" title="What happens, step by step" />

          <div className="relative mt-20">
            {/* connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent lg:block" />
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {treatment.process.map((step) => (
                <li key={step.step} className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] font-display text-sm font-semibold text-white ring-8 ring-white">
                    {step.step}
                  </span>
                  <h4 className="mt-6 font-display text-lg font-semibold text-[var(--color-ink)]">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ======================== CLINIC GALLERY ====================== */}
      <section id="clinic" className="scroll-mt-32 bg-[#EDF7FA] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#112638] sm:text-4xl">
                Where your treatment takes place
              </h2>
              <p className="mt-4 leading-relaxed text-[#405B69]">
                Clean, well-equipped rooms at our Latur clinic. Instruments are sterilised and single-use items are used wherever required.
              </p>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#24676D] hover:underline">
              View clinic gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
            {CLINIC_PHOTOS.map((p, i) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 ? "min-h-[22rem] md:col-span-2 md:row-span-2" : "min-h-[14rem]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-sm font-medium text-white">{p.caption}</figcaption>
              </figure>
            ))}
          </div>

          {/* trust strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Hygiene first", text: "Sterilised instruments and clean rooms." },
              { icon: FileText, title: "Informed consent", text: "Procedure, risks and alternatives explained before you decide." },
              { icon: Stethoscope, title: "Doctor-led care", text: "Every plan is made by the doctor after examination." },
            ].map(({ icon: I, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-[#DDE9EA] bg-white p-5">
                <I className="mt-0.5 h-5 w-5 shrink-0 text-[#24676D]" />
                <div>
                  <p className="text-sm font-semibold text-[#112638]">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#405B69]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== TREATMENT GOALS ======================= */}
      <section id="goals" className="scroll-mt-32 bg-[var(--color-bg-light)] py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Treatment goals" title="What this treatment aims to do" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {treatment.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-[var(--color-muted)]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Results differ from person to person and cannot be guaranteed. The doctor will discuss realistic expectations during consultation.
          </p>
        </div>
      </section>

      {/* ============================ DOCTOR ========================== */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[var(--shadow-lifted)] md:grid-cols-[0.8fr_1.2fr]">
       <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg-light)] md:aspect-auto md:min-h-[22rem]">
  <Image
    src="/images/dr.png"
    alt={DOCTOR.name}
    fill
    sizes="(min-width: 1152px) 440px, (min-width: 768px) 40vw, 100vw"
    className="object-cover object-center"
  />
</div>
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Your doctor</h2>
              <p className="mt-2 font-display text-xl text-[var(--color-secondary)]">{DOCTOR.name}</p>

              <ul className="mt-8 space-y-5 text-sm text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-secondary)]" />
                  <span>
                    <span className="block font-medium text-[var(--color-ink)]">{DOCTOR.qualification}</span>
                    {DOCTOR.registration}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-secondary)]" />
                  <span>
                    <span className="block font-medium text-[var(--color-ink)]">{DOCTOR.clinic}</span>
                    {DOCTOR.address}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-secondary)]" />
                  <span>{DOCTOR.timings}</span>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact" size="md" icon={CalendarCheck} iconPosition="left">Book a consultation</Button>
                <Button href="/about" variant="outline" size="md">Doctor profile</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ =========================== */}
      <section id="faq" className="scroll-mt-32 bg-[var(--color-bg-light)] py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Questions" title={`FAQs about ${treatment.shortName.toLowerCase()}`} />
          <div className="mt-12">
            <FAQAccordion faqs={treatment.faqs} />
          </div>
        </div>
      </section>

      {/* ============================ RELATED ========================= */}
      {related.length > 0 && (
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Explore more" title="Related treatments" align="left" className="mx-0" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={`/images/treatments/${t.slug}.jpg`}
                      alt={t.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display font-semibold text-[var(--color-ink)]">{t.shortName}</h4>
                    <p className="mt-1.5 line-clamp-2 text-sm text-[var(--color-muted)]">{t.tagline}</p>
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

      <CTASection
        title={`Ready to discuss ${treatment.shortName.toLowerCase()}?`}
        description="Book a consultation with Dr. Anand Patil for a personalised assessment and plan."
      />
    </>
  );
}