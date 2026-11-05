import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  ClipboardList,
  GraduationCap,
  MapPin,
  MessageSquareText,
  Navigation,
  ShieldCheck,
  Stethoscope,
  BadgeCheck,
  Landmark,
  Info,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema, getPhysicianSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { DOCTOR } from "@/data/doctor";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * About Dr. Anand Patil - factual profile only.
 *
 * Written to follow the NMC ethical advertising guidelines (6 Oct 2026).
 * Removed from the old page: "24+ years" (metadata, photo badge, achievement
 * card), "50,000+ patients", "4.3 star patient-rated", "20+ treatments",
 * comparison with Pune/Mumbai, the "non-negotiable" vision slogan,
 * "accurate diagnosis ... not a template", and the achievements/timeline
 * sections built on those claims (§8.1 ii, iii, ix, xii).
 *
 * This file does NOT use DOCTOR.bio, DOCTOR.vision, DOCTOR.achievements or
 * DOCTOR.timeline. It uses DOCTOR.name, credentials, title, qualifications,
 * memberships and specializations - make sure those are accurate.
 *
 * BEFORE PUBLISHING the doctor must confirm in writing:
 *  1. Title line (DOCTOR.title): "Consultant", "Cosmetologist" and "Cosmetic
 *     Laser Surgeon" must match registered qualifications.
 *  2. Qualification institutions are currently generic ("Recognised Medical
 *     College...") - replace with the real names (and years if desired).
 *  3. The old bio said "(MD)" while credentials say D.V.D. - use the correct one.
 *  4. Registration number - fill REGISTRATION_NUMBER below.
 *  5. Check getPhysicianSchema() for experience, rating or review fields.
 */
export const metadata = buildMetadata({
  title: "About Dr. Anand Patil | Dermatologist in Latur",
  description:
    "Dr. Anand Patil, MBBS, D.V.D. (Dermatology, Venereology & Leprosy). Qualifications, memberships and consultation areas at Ganj Golai, Latur, Maharashtra.",
  path: "/doctor",
});

// TODO: add the Maharashtra Medical Council registration number (leave "" to hide).
const REGISTRATION_NUMBER = "";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ClipboardList,
    title: "History and examination",
    text: "Your concern, medical history, current medicines and allergies are discussed, and the skin, hair or nails are examined.",
  },
  {
    icon: MessageSquareText,
    title: "Findings and options explained",
    text: "The doctor explains the findings, the options available, the possible risks, and the charges, before you decide anything.",
  },
  {
    icon: CalendarCheck,
    title: "Review and follow-up",
    text: "Follow-up visits are used to review your progress and update the plan as your condition needs.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]";

function FloatChip({
  icon: Icon,
  label,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-10 flex max-w-[15rem] items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-[#06182E] shadow-xl shadow-black/25 ring-1 ring-white/60 backdrop-blur ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 text-white"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-[13px] font-semibold leading-snug">{label}</span>
    </div>
  );
}

export default function DoctorPage() {
  const nameParts = DOCTOR.name.split(" ");
  const lastWord = nameParts.pop();
  const firstWords = nameParts.join(" ");

  const council = DOCTOR.memberships.find((m: string) =>
    /medical council/i.test(m)
  );
  const otherMemberships = DOCTOR.memberships.filter(
    (m: string) => m !== council
  );

  const chipA = DOCTOR.qualifications[0]?.degree;
  const chipB = DOCTOR.qualifications[1]?.degree;

  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    SITE_CONFIG.address.full
  )}`;

  return (
    <>
      <style>{`
        @keyframes dp-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes dp-spin { to { transform: rotate(360deg) } }
        @keyframes dp-rise { from { opacity: 0; transform: translateY(28px) } to { opacity: 1; transform: none } }
        .dp-float { animation: dp-float 6s ease-in-out infinite }
        .dp-float-b { animation: dp-float 8s ease-in-out infinite; animation-delay: -3s }
        .dp-spin { animation: dp-spin 70s linear infinite }
        @supports (animation-timeline: view()) {
          .dp-reveal { animation: dp-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 35% }
        }
        @media (prefers-reduced-motion: reduce) {
          .dp-float, .dp-float-b, .dp-spin, .dp-reveal { animation: none !important }
        }
      `}</style>

      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Dr. Anand Patil", path: "/doctor" },
          ]),
          getPhysicianSchema(),
        ]}
      />

      {/* ============================== HERO ============================== */}
      <section
        aria-labelledby="doctor-title"
        className="relative overflow-hidden bg-gradient-to-br from-[#0D2E52] via-[#0A2342] to-[#06182E] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(127,224,234,0.35) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse at 75% 40%, black 0%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 75% 40%, black 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-400/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          {/* Text */}
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link
                    href="/"
                    className={`transition-colors hover:text-white ${focusRing}`}
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  About Dr. Anand Patil
                </li>
              </ol>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#BFF3F6] ring-1 ring-white/15">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#5FD6D0]" />
              About the Doctor
            </p>

            <h1
              id="doctor-title"
              className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {firstWords}
              <br />
              <span className="bg-gradient-to-r from-[#7FE0EA] via-[#5FD6D0] to-[#8CE6E1] bg-clip-text text-transparent">
                {lastWord}
              </span>
              <span className="text-[#5FD6D0]">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium text-white/90">
              {DOCTOR.credentials}
            </p>
            <p className="mt-2 max-w-xl text-sm uppercase tracking-[0.16em] text-[#BFF3F6]">
              {DOCTOR.title}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={`group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#5FD6D0] px-7 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#8CE6E1] ${focusRing}`}
              >
                Appointment Enquiry
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="#credentials"
                className={`inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white/10 px-7 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/20 ${focusRing}`}
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                View qualifications
              </a>
            </div>
          </div>

          {/* Photo composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md">
              {/* rotating dashed orbit */}
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 400 400"
                className="dp-spin pointer-events-none absolute -inset-[14%] h-[128%] w-[128%]"
                fill="none"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  stroke="#7FE0EA"
                  strokeOpacity="0.35"
                  strokeDasharray="4 12"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="10" r="5" fill="#5FD6D0" />
                <circle cx="390" cy="200" r="3.5" fill="#7FE0EA" />
              </svg>
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-sky-400/40 to-teal-400/30 blur-2xl"
              />

              {/* arch frame */}
              <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-slate-900 shadow-2xl shadow-black/40 ring-1 ring-white/30">
                <Image
                  src="/images/dr.png"
                  alt={DOCTOR.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover object-top"
                />
              </div>

              {chipA && (
                <div className="dp-float absolute left-0 top-[18%] z-10 -translate-x-3 sm:-translate-x-10">
                  <FloatChip icon={GraduationCap} label={chipA} className="static" />
                </div>
              )}
              {chipB && (
                <div className="dp-float-b absolute right-0 top-[46%] z-10 translate-x-3 sm:translate-x-10">
                  <FloatChip icon={Stethoscope} label={chipB} className="static" />
                </div>
              )}
              {council && (
                <div className="dp-float absolute bottom-[6%] left-0 z-10 -translate-x-3 sm:-translate-x-8">
                  <FloatChip icon={ShieldCheck} label={council} className="static" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CREDENTIALS ============================ */}
      <section
        id="credentials"
        aria-labelledby="credentials-heading"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#dbe4ee 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 40%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Credentials
            </p>
            <h2
              id="credentials-heading"
              className="mt-5 scroll-mt-28 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl"
            >
              Qualifications and registration
              <span className="text-sky-600">.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {/* Qualifications - large card */}
            <div className="dp-reveal rounded-3xl bg-gradient-to-br from-sky-300 via-slate-200 to-teal-300 p-px lg:col-span-2 lg:row-span-2">
              <div className="h-full rounded-[1.4rem] bg-white p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-lg shadow-sky-500/25"
                  >
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                    Qualifications
                  </h3>
                </div>

                <ol className="relative mt-8 space-y-8 pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-sky-400 via-teal-300 to-transparent"
                  />
                  {DOCTOR.qualifications.map(
                    (q: { degree: string; institution: string }) => (
                      <li key={q.degree} className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-8 top-2 h-[18px] w-[18px] rounded-full border-[3px] border-sky-500 bg-white"
                        />
                        <p className="font-display text-2xl font-semibold leading-snug text-[var(--color-ink)] sm:text-3xl">
                          {q.degree}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {q.institution}
                        </p>
                      </li>
                    )
                  )}
                  <li className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-8 top-2 h-[18px] w-[18px] rounded-full bg-gradient-to-br from-sky-500 to-teal-400"
                    />
                    <p className="font-display text-2xl font-semibold leading-snug text-[var(--color-ink)] sm:text-3xl">
                      Consulting at Ganj Golai, Latur
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Dr. Anand Patil Skin &amp; Cosmetic Laser Clinic
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Registration - dark card */}
            <div className="dp-reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D2E52] via-[#0A2342] to-[#06182E] p-7 text-white shadow-[var(--shadow-lifted)]">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 400 400"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72"
                fill="none"
              >
                <circle cx="200" cy="200" r="190" stroke="#7FE0EA" strokeOpacity="0.15" />
                <circle cx="200" cy="200" r="140" stroke="#7FE0EA" strokeOpacity="0.12" />
              </svg>
              <span
                aria-hidden="true"
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#7FE0EA]"
              >
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold">
                Registration
              </h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-[#E4EEF7]">
                {council ?? "Registered medical practitioner"}
              </p>
              {REGISTRATION_NUMBER && (
                <p className="relative mt-4 inline-block rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20">
                  <span className="text-white/60">Registration No. </span>
                  <span className="font-semibold tracking-wide">
                    {REGISTRATION_NUMBER}
                  </span>
                </p>
              )}
            </div>

            {/* Memberships */}
            <div className="dp-reveal rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700"
                >
                  <Landmark className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                  Memberships
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {otherMemberships.map((m: string) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-snug text-slate-700"
                  >
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                      aria-hidden="true"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice strip */}
            <div className="dp-reveal lg:col-span-3">
              <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-teal-50 p-7 ring-1 ring-sky-100 sm:p-8 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm ring-1 ring-sky-100"
                  >
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                      Place of practice
                    </h3>
                    <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-slate-600">
                      {SITE_CONFIG.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/about-clinic"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-sky-800 ring-1 ring-sky-200 transition-colors hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    Clinic information
                  </Link>
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 px-6 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= ABOUT + CONSULTATION ======================= */}
      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-sky-50 py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-teal-100/60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm ring-1 ring-sky-100">
              <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
              Biography
            </p>
            <h2
              id="about-heading"
              className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl"
            >
              About Dr. Anand Patil<span className="text-sky-600">.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Dr. Anand Patil is a dermatologist with an MBBS and a D.V.D.
                (Dermatology, Venereology &amp; Leprosy). He sees patients with
                skin, hair and nail concerns at Dr. Anand Patil Skin &amp;
                Cosmetic Laser Clinic, Ganj Golai, Latur.
              </p>
              <p>
                Consultations cover medical dermatology, cosmetic dermatology,
                laser and dermatosurgical procedures, and hair concerns. Whether
                any treatment is suitable is decided only after a clinical
                assessment.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sky-100 bg-white/80 px-5 py-4 text-sm leading-relaxed text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
              <p>
                This page is for general information and is not medical advice.
                Response to treatment differs from person to person.
              </p>
            </div>
          </div>

          {/* Consultation steps */}
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-300 via-white to-teal-300 p-px shadow-[var(--shadow-card)]">
              <div className="rounded-[calc(2rem-1px)] bg-white p-7 sm:p-10">
                <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                  What to expect at a consultation
                </h3>
                <ol className="relative mt-8 space-y-8">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-sky-300 via-teal-300 to-transparent"
                  />
                  {STEPS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.title} className="dp-reveal relative flex gap-5">
                        <span
                          aria-hidden="true"
                          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-lg shadow-sky-500/25"
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                            Step {i + 1}
                          </p>
                          <h4 className="mt-0.5 font-display text-lg font-semibold text-[var(--color-ink)]">
                            {s.title}
                          </h4>
                          <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">
                            {s.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== AREAS OF CONSULTATION ========================== */}
      <section
        aria-labelledby="areas-heading"
        className="relative overflow-hidden bg-gradient-to-br from-[#0D2E52] via-[#0A2342] to-[#06182E] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(127,224,234,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at 20% 10%, black 0%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 20% 10%, black 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#BFF3F6] ring-1 ring-white/15">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#5FD6D0]" />
                Consultation areas
              </p>
              <h2
                id="areas-heading"
                className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl"
              >
                Areas of consultation
                <span className="text-[#5FD6D0]">.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/75 lg:pb-2">
              The areas in which Dr. Anand Patil sees patients. Suitability of
              any treatment is decided only after a clinical assessment.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTOR.specializations.map((s: string) => {
              const [title, rest] = s.split(" (");
              const detail = rest?.replace(/\)$/, "");
              return (
                <li
                  key={s}
                  className="dp-reveal group relative overflow-hidden rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-[#7FE0EA]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7FE0EA] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-400 text-white"
                  >
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
                    {title}
                  </h3>
                  {detail && (
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {detail}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection
        title="Book a consultation with Dr. Anand Patil"
        description="Consultations are by appointment, and walk-ins are welcome. Treatment options are explained after a clinical assessment."
      />
    </>
  );
}