import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileSignature,
  HeartPulse,
  Info,
  ListChecks,
  MessageSquareText,
  Scissors,
  Sparkles,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/**
 * Treatments - factual information only.  (app/treatments/page.tsx)
 *
 * Written to follow the NMC ethical advertising guidelines (6 Oct 2026).
 * Removed from the old page: the stats band ("5000+ patients", "95% patient
 * satisfaction", "10+ years"), "Featured" / "Most popular" labels,
 * "Advanced", "Modern", "Evidence-based", "Why patients trust us",
 * "safe, effective ... outcomes", "long-term results", "celebrity-inspired",
 * "instant", "expert", and the stock/model photographs on the cards
 * (sections 8.1 ii, iii, v, ix, xii).
 *
 * Design: ink navy #102832 · warm white #F5F2EC · deep teal #006C65 · soft sage #ABCCC1,
 * Instrument Serif + DM Sans (same as the new home hero; set up in app/layout.tsx via
 * the --font-instrument / --font-dm-sans variables — falls back to Georgia / system sans).
 *
 * BEFORE PUBLISHING the doctor must confirm in writing:
 *  1. Every treatment is actually offered at the clinic and is within the
 *     doctor's registered qualifications.
 *  2. Every summary below is medically accurate.
 *  3. Each `slug` matches your existing /treatments/[slug] route. The detail
 *     pages need the same review (claims, photos, results, offers).
 *  4. "Hollywood Facial" is a marketing name; consider listing it only as
 *     "Carbon laser peel".
 */
export const metadata = buildMetadata({
  title: "Treatments | Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur",
  description:
    "Information about the dermatology, hair, laser and procedural treatments available at Dr. Anand Patil Skin & Cosmetic Laser Clinic, Ganj Golai, Latur. Suitability is decided after a clinical assessment.",
  path: "/treatments",
});

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */
type CategoryId = "medical" | "cosmetic" | "hair" | "laser" | "procedures";

type Treatment = {
  name: string;
  slug: string;
  category: CategoryId;
  summary: string;
};

const CATEGORIES: {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  intro: string;
}[] = [
  {
    id: "medical",
    label: "Medical Dermatology",
    icon: HeartPulse,
    intro:
      "Evaluation and management of skin conditions after examination by the doctor.",
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dermatology",
    icon: Sparkles,
    intro:
      "Procedures for concerns about the appearance of the skin, advised only after assessment.",
  },
  {
    id: "hair",
    label: "Hair Treatments",
    icon: Scissors,
    intro:
      "Assessment of hair concerns and the procedures used for them. The cause is looked at before a procedure is discussed.",
  },
  {
    id: "laser",
    label: "Laser Treatments",
    icon: Zap,
    intro:
      "Laser-based procedures. The type of laser and the number of sessions depend on the assessment.",
  },
  {
    id: "procedures",
    label: "Procedures & Surgeries",
    icon: Stethoscope,
    intro:
      "Minor procedures and surgeries, carried out after examination and your consent.",
  },
];

const TREATMENTS: Treatment[] = [
  // ---- Medical dermatology ----
  {
    name: "Acne",
    slug: "acne",
    category: "medical",
    summary: "Evaluation and management of acne and related skin concerns.",
  },
  {
    name: "Melasma",
    slug: "melasma",
    category: "medical",
    summary:
      "Assessment and management of melasma, a pigmentation condition that commonly affects the face.",
  },
  {
    name: "Keloids",
    slug: "keloids",
    category: "medical",
    summary:
      "Assessment and management of keloids, which are raised, overgrown scars.",
  },
  {
    name: "Skin Biopsy",
    slug: "skin-biopsy",
    category: "medical",
    summary:
      "A small skin sample is taken and examined in a laboratory to help diagnose a skin condition.",
  },

  // ---- Cosmetic dermatology ----
  {
    name: "Pigmentation",
    slug: "pigmentation",
    category: "cosmetic",
    summary:
      "Assessment of uneven skin colour or dark patches, and discussion of the options available.",
  },
  {
    name: "Chemical Peel",
    slug: "chemical-peel",
    category: "cosmetic",
    summary:
      "A procedure in which a chemical solution is applied to exfoliate the outer layers of the skin. Suitability is assessed first.",
  },
  {
    name: "Carbon Peel",
    slug: "carbon-peel",
    category: "cosmetic",
    summary:
      "A laser procedure that uses a carbon lotion applied to the skin. Suitability is assessed first.",
  },
  {
    name: "Hollywood Facial",
    slug: "hollywood-facial",
    category: "cosmetic",
    summary:
      "Another name for a carbon laser peel. Suitability is assessed first.",
  },
  {
    name: "Birthmark",
    slug: "birthmark",
    category: "cosmetic",
    summary:
      "Evaluation of birthmarks and discussion of the treatment options, if any are needed.",
  },

  // ---- Hair ----
  {
    name: "PRP",
    slug: "prp",
    category: "hair",
    summary:
      "Platelet-rich plasma, a preparation made from the patient's own blood, used in some hair and skin concerns.",
  },
  {
    name: "GFC",
    slug: "gfc",
    category: "hair",
    summary:
      "Growth factor concentrate, a preparation made from the patient's own blood, used in some hair concerns.",
  },
  {
    name: "Mesotherapy",
    slug: "mesotherapy",
    category: "hair",
    summary:
      "Tiny injections of selected preparations into the skin or scalp, used in some hair and skin concerns.",
  },
  {
    name: "Hair Transplant",
    slug: "hair-transplant",
    category: "hair",
    summary:
      "A surgical procedure in which hair follicles are moved from one area of the scalp to another. Suitability is assessed first.",
  },

  // ---- Laser ----
  {
    name: "Laser Hair Reduction",
    slug: "laser-hair-reduction",
    category: "laser",
    summary:
      "Use of laser over several sessions to reduce unwanted body or facial hair.",
  },
  {
    name: "Tattoo Removal",
    slug: "tattoo-removal",
    category: "laser",
    summary:
      "Use of a Q-switched laser over several sessions to fade tattoo pigment. Complete removal cannot be assured.",
  },
  {
    name: "Acne Scars",
    slug: "acne-scars",
    category: "laser",
    summary:
      "Assessment of acne scars and discussion of the options that may suit your skin.",
  },
  {
    name: "Traumatic Scars",
    slug: "traumatic-scars",
    category: "laser",
    summary:
      "Assessment of scars that follow an injury and discussion of the options available.",
  },

  // ---- Procedures & surgeries ----
  {
    name: "Vitiligo Surgery",
    slug: "vitiligo",
    category: "procedures",
    summary:
      "Surgical options for vitiligo patches that have remained stable, considered after assessment.",
  },
  {
    name: "Warts",
    slug: "warts",
    category: "procedures",
    summary: "Examination and removal of warts.",
  },
  {
    name: "Mole Removal",
    slug: "mole-removal",
    category: "procedures",
    summary:
      "Examination of moles and removal when it is medically or cosmetically indicated.",
  },
  {
    name: "Skin Tags",
    slug: "skin-tags",
    category: "procedures",
    summary: "Removal of small, soft skin growths.",
  },
  {
    name: "Corn",
    slug: "corn",
    category: "procedures",
    summary:
      "Treatment of corns, which are thickened areas of skin caused by pressure or friction.",
  },
  {
    name: "Nail Surgery",
    slug: "nail-surgery",
    category: "procedures",
    summary: "Surgical procedures for nail conditions, advised after examination.",
  },
  {
    name: "Electrocautery",
    slug: "electrocautery",
    category: "procedures",
    summary:
      "A procedure that uses heat from an electric current to treat selected skin lesions.",
  },
  {
    name: "RF Treatment",
    slug: "rf-treatment",
    category: "procedures",
    summary:
      "Radiofrequency-based procedures used for selected skin concerns. Suitability is assessed first.",
  },
];

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ClipboardList,
    title: "Assessment first",
    text: "The doctor takes your history and examines you. A treatment is discussed only after this.",
  },
  {
    icon: MessageSquareText,
    title: "Options explained",
    text: "Available options, expected course, possible risks, alternatives and charges are explained to you.",
  },
  {
    icon: FileSignature,
    title: "Your consent",
    text: "A procedure is carried out only after you understand it and agree to go ahead.",
  },
  {
    icon: CalendarCheck,
    title: "Review and follow-up",
    text: "Your progress is reviewed at follow-up visits and the plan is updated as needed.",
  },
];

const TELL_THE_DOCTOR = [
  "Your medical history and any long-term conditions",
  "Medicines you take, including creams and supplements",
  "Known allergies, including to medicines and cosmetics",
  "Pregnancy or breastfeeding",
  "Earlier treatments or procedures on the same area",
  "If your skin scars or darkens easily after injury",
];

/* -------------------------------------------------------------------------- */
/*  STYLE TOKENS                                                              */
/* -------------------------------------------------------------------------- */
const serif = "font-[family-name:var(--font-instrument),Georgia,serif]";
const sans = "font-[family-name:var(--font-dm-sans),system-ui,sans-serif]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006C65]";
const focusRingDark =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ABCCC1]";

const byCategory = (id: CategoryId) =>
  TREATMENTS.filter((t) => t.category === id);

/* -------------------------------------------------------------------------- */
/*  TREATMENT PRESENTATIONS (one distinct layout per category)                */
/* -------------------------------------------------------------------------- */
function RowItem({ t, icon: Icon }: { t: Treatment; icon: LucideIcon }) {
  return (
    <Link
      id={t.slug}
      href={`/treatments/${t.slug}`}
      className={`tp-reveal group relative flex scroll-mt-40 items-start gap-5 overflow-hidden rounded-2xl border border-[#102832]/10 bg-[#F5F2EC]/60 p-5 transition-all duration-300 hover:border-[#006C65]/40 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(16,40,50,0.35)] motion-reduce:transition-none sm:p-6 ${focusRing}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-[#006C65] opacity-0 transition-opacity group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ABCCC1]/40 text-[#006C65] transition-colors group-hover:bg-[#006C65] group-hover:text-[#F5F2EC]"
      >
        <Icon className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`${serif} block text-2xl text-[#102832]`}>{t.name}</span>
        <span className="mt-1 block text-[15px] leading-relaxed text-[#102832]/70">
          {t.summary}
        </span>
      </span>
      <ArrowUpRight
        className="mt-1.5 h-5 w-5 shrink-0 text-[#102832]/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#006C65]"
        aria-hidden="true"
      />
    </Link>
  );
}

function CardItem({ t }: { t: Treatment }) {
  return (
    <Link
      id={t.slug}
      href={`/treatments/${t.slug}`}
      className={`tp-reveal group relative flex h-full scroll-mt-40 flex-col overflow-hidden rounded-3xl border border-[#102832]/10 bg-white p-7 pt-8 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#006C65] before:to-[#ABCCC1] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(16,40,50,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
    >
      <h3 className={`${serif} text-2xl text-[#102832]`}>{t.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#102832]/70">
        {t.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#006C65]">
        Read more
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

function DarkItem({ t }: { t: Treatment }) {
  return (
    <Link
      id={t.slug}
      href={`/treatments/${t.slug}`}
      className={`tp-reveal group relative flex h-full scroll-mt-40 flex-col overflow-hidden rounded-3xl border border-[#F5F2EC]/15 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ABCCC1]/50 hover:bg-[#F5F2EC]/[0.05] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRingDark}`}
    >
      <h3 className={`${serif} text-2xl text-[#F5F2EC]`}>{t.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#F5F2EC]/70">
        {t.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#ABCCC1]">
        Read more
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

function SplitItem({ t, icon: Icon }: { t: Treatment; icon: LucideIcon }) {
  return (
    <Link
      id={t.slug}
      href={`/treatments/${t.slug}`}
      className={`tp-reveal group relative flex scroll-mt-40 flex-col overflow-hidden rounded-[2rem] bg-[#ABCCC1]/25 p-8 ring-1 ring-[#ABCCC1]/60 transition-all duration-300 hover:bg-[#ABCCC1]/35 hover:shadow-[0_24px_50px_-28px_rgba(16,40,50,0.45)] motion-reduce:transition-none ${focusRing}`}
    >
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 h-44 w-44 text-[#006C65]/15 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 motion-reduce:transition-none"
        strokeWidth={1}
      />
      <h3 className={`${serif} relative text-3xl text-[#102832]`}>{t.name}</h3>
      <p className="relative mt-3 max-w-xs flex-1 text-[15px] leading-relaxed text-[#102832]/75">
        {t.summary}
      </p>
      <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F5F2EC] px-4 py-2 text-sm font-medium text-[#006C65] ring-1 ring-[#102832]/10">
        Read more
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

function CompactItem({ t }: { t: Treatment }) {
  return (
    <Link
      id={t.slug}
      href={`/treatments/${t.slug}`}
      className={`tp-reveal group flex scroll-mt-40 flex-col rounded-2xl border border-[#102832]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#006C65]/50 hover:shadow-[0_18px_40px_-26px_rgba(16,40,50,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className={`${serif} text-xl text-[#102832]`}>{t.name}</span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-[#102832]/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#006C65]"
          aria-hidden="true"
        />
      </span>
      <span className="mt-2 text-sm leading-relaxed text-[#102832]/70">
        {t.summary}
      </span>
    </Link>
  );
}

function CategoryHeading({
  id,
  label,
  intro,
  icon: Icon,
  number,
  dark = false,
}: {
  id: string;
  label: string;
  intro: string;
  icon: LucideIcon;
  number: number;
  dark?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            dark
              ? "bg-[#F5F2EC]/10 text-[#ABCCC1] ring-1 ring-[#F5F2EC]/20"
              : "bg-[#006C65] text-[#F5F2EC]"
          }`}
        >
          <Icon className="h-7 w-7" />
        </span>
        <span
          aria-hidden="true"
          className={`${serif} text-xl ${dark ? "text-[#ABCCC1]" : "text-[#006C65]"}`}
        >
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <h2
        id={id}
        className={`${serif} mt-5 text-4xl leading-[1.05] sm:text-5xl ${
          dark ? "text-[#F5F2EC]" : "text-[#102832]"
        }`}
      >
        {label}
        <span className={dark ? "text-[#ABCCC1]" : "text-[#006C65]"}>.</span>
      </h2>
      <p
        className={`mt-4 max-w-md text-base leading-relaxed ${
          dark ? "text-[#F5F2EC]/75" : "text-[#102832]/70"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */
export default function TreatmentsPage() {
  const sortedAZ = [...TREATMENTS].sort((a, b) => a.name.localeCompare(b.name));
  const cat = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!;
  const num = (id: CategoryId) => CATEGORIES.findIndex((c) => c.id === id) + 1;

  // A–Z index grouped by first letter
  const groups = sortedAZ.reduce<Record<string, Treatment[]>>((acc, t) => {
    const k = t.name.charAt(0).toUpperCase();
    (acc[k] ||= []).push(t);
    return acc;
  }, {});
  const letters = Object.keys(groups).sort();

  return (
    <>
      <style>{`
        @keyframes tp-rise { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }
        @keyframes th-rise { from { transform: translateY(18px) } to { transform: none } }
        .th-rise { animation: th-rise .9s ease-out both }
        @supports (animation-timeline: view()) {
          .tp-reveal { animation: tp-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 35% }
        }
        @media (prefers-reduced-motion: reduce) {
          .th-rise, .tp-reveal { animation: none !important }
        }
      `}</style>

      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />

      <div className={sans}>
        {/* ============================== HERO ============================== */}
        <section
          aria-labelledby="treatments-title"
          className="relative isolate overflow-hidden bg-[#102832] text-[#F5F2EC]"
        >
          {/* fine grid, faded toward the right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(171,204,193,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(171,204,193,0.07) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 80% 90% at 75% 40%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 90% at 75% 40%, black 0%, transparent 75%)",
            }}
          />
          {/* one static, soft teal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#006C65]/35 blur-3xl"
          />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-16 lg:pb-16 lg:pt-16">
            <div className="th-rise lg:col-span-7">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-[#F5F2EC]/70">
                  <li>
                    <Link
                      href="/"
                      className={`transition-colors hover:text-[#F5F2EC] ${focusRingDark}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#F5F2EC]">
                    Treatments
                  </li>
                </ol>
              </nav>

              <p className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#ABCCC1]">
                <span aria-hidden="true" className="h-px w-8 bg-[#ABCCC1]" />
                Dermatology clinic in Latur
              </p>

              <h1
                id="treatments-title"
                className={`${serif} mt-5 font-normal tracking-[-0.01em]`}
                style={{
                  fontSize: "clamp(3rem, 1.6rem + 6vw, 6.25rem)",
                  lineHeight: 1,
                }}
              >
                Treatments
                <br />
                <em className="italic text-[#F5F2EC]/80">at the clinic</em>
                <span className="text-[#ABCCC1]">.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#F5F2EC]/80 sm:text-lg">
                Information about the skin, hair, laser and procedural treatments
                available at the clinic. Whether any treatment is suitable for you
                is decided only after a clinical assessment by the doctor.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={`group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#006C65] px-8 text-base font-medium text-[#F5F2EC] ring-1 ring-[#ABCCC1]/40 transition-colors hover:bg-[#00807A] ${focusRingDark}`}
                >
                  Appointment enquiry
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="#index"
                  className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#F5F2EC]/45 px-8 text-base font-medium text-[#F5F2EC] transition-colors hover:border-[#F5F2EC] hover:bg-[#F5F2EC]/10 ${focusRingDark}`}
                >
                  <ListChecks className="h-4 w-4" aria-hidden="true" />
                  A to Z index
                </a>
              </div>
            </div>

            {/* category index */}
            <nav
              aria-label="Browse by category"
              className="th-rise self-end lg:col-span-5"
              style={{ animationDelay: "0.12s" }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ABCCC1]">
                Browse by category
              </p>
              <ol className="mt-4 border-b border-[#F5F2EC]/15">
                {CATEGORIES.map((c, i) => {
                  const Icon = c.icon;
                  const n = byCategory(c.id).length;
                  return (
                    <li key={c.id} className="border-t border-[#F5F2EC]/15">
                      <a
                        href={`#cat-${c.id}`}
                        className={`group flex min-h-[68px] items-center gap-4 px-2 py-3 transition-colors hover:bg-[#F5F2EC]/[0.05] ${focusRingDark}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${serif} w-8 text-xl text-[#ABCCC1]`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#ABCCC1]/80"
                          aria-hidden="true"
                        />
                        <span className="flex-1">
                          <span className="block text-[15px] font-medium leading-tight sm:text-base">
                            {c.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-[#F5F2EC]/60">
                            {n} {n === 1 ? "treatment" : "treatments"}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-[#F5F2EC]/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F5F2EC]"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>

          {/* notice strip */}
          <div className="border-t border-[#F5F2EC]/15">
            <div className="mx-auto flex max-w-7xl items-start gap-3 px-6 py-5 text-sm leading-relaxed text-[#F5F2EC]/70">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-[#ABCCC1]"
                aria-hidden="true"
              />
              <p>
                Results differ from person to person and cannot be guaranteed.
                Risks, alternatives and charges are explained before you decide.
              </p>
            </div>
          </div>
        </section>

        {/* ======================= 01 MEDICAL (rows, sticky heading) ======================= */}
        <section
          id="cat-medical"
          aria-labelledby="medical-heading"
          className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <CategoryHeading
                  id="medical-heading"
                  label={cat("medical").label}
                  intro={cat("medical").intro}
                  icon={cat("medical").icon}
                  number={num("medical")}
                />
              </div>
            </div>
            <div className="space-y-4 lg:col-span-8">
              {byCategory("medical").map((t) => (
                <RowItem key={t.slug} t={t} icon={cat("medical").icon} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= 02 COSMETIC (cards) ======================= */}
        <section
          id="cat-cosmetic"
          aria-labelledby="cosmetic-heading"
          className="scroll-mt-28 bg-[#F5F2EC] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <CategoryHeading
              id="cosmetic-heading"
              label={cat("cosmetic").label}
              intro={cat("cosmetic").intro}
              icon={cat("cosmetic").icon}
              number={num("cosmetic")}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {byCategory("cosmetic").map((t) => (
                <CardItem key={t.slug} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= 03 HAIR (ink) ======================= */}
        <section
          id="cat-hair"
          aria-labelledby="hair-heading"
          className="relative isolate scroll-mt-28 overflow-hidden bg-[#102832] py-20 text-[#F5F2EC] sm:py-24 lg:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(171,204,193,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(171,204,193,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 80% at 20% 10%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 20% 10%, black 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-7xl px-6">
            <CategoryHeading
              id="hair-heading"
              label={cat("hair").label}
              intro={cat("hair").intro}
              icon={cat("hair").icon}
              number={num("hair")}
              dark
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {byCategory("hair").map((t) => (
                <DarkItem key={t.slug} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= 04 LASER (split cards) ======================= */}
        <section
          id="cat-laser"
          aria-labelledby="laser-heading"
          className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <CategoryHeading
              id="laser-heading"
              label={cat("laser").label}
              intro={cat("laser").intro}
              icon={cat("laser").icon}
              number={num("laser")}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {byCategory("laser").map((t) => (
                <SplitItem key={t.slug} t={t} icon={cat("laser").icon} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= 05 PROCEDURES (compact tiles) ======================= */}
        <section
          id="cat-procedures"
          aria-labelledby="procedures-heading"
          className="scroll-mt-28 bg-[#F5F2EC] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <CategoryHeading
              id="procedures-heading"
              label={cat("procedures").label}
              intro={cat("procedures").intro}
              icon={cat("procedures").icon}
              number={num("procedures")}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {byCategory("procedures").map((t) => (
                <CompactItem key={t.slug} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= A–Z INDEX (grouped by letter) ======================= */}
        <section
          id="index"
          aria-labelledby="index-heading"
          className="scroll-mt-28 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#006C65]">
              <span aria-hidden="true" className="h-px w-8 bg-[#006C65]" />
              Index
            </p>
            <h2
              id="index-heading"
              className={`${serif} mt-4 text-4xl text-[#102832] sm:text-5xl`}
            >
              All treatments, A to Z<span className="text-[#006C65]">.</span>
            </h2>

            <div className="mt-10 border-b border-[#102832]/10">
              {letters.map((L) => (
                <div
                  key={L}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[#102832]/10 py-5 sm:grid-cols-[5rem_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className={`${serif} text-3xl text-[#006C65] sm:text-4xl`}
                  >
                    {L}
                  </span>
                  <ul className="flex flex-wrap gap-2.5">
                    {groups[L].map((t) => (
                      <li key={t.slug}>
                        <a
                          href={`#${t.slug}`}
                          className={`inline-flex min-h-[44px] items-center rounded-full border border-[#102832]/15 bg-white px-5 text-sm font-medium text-[#102832] transition-colors hover:border-[#006C65] hover:bg-[#006C65] hover:text-[#F5F2EC] ${focusRing}`}
                        >
                          {t.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= BEFORE ANY TREATMENT ======================= */}
        <section
          aria-labelledby="process-heading"
          className="bg-[#F5F2EC] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#006C65]">
              <span aria-hidden="true" className="h-px w-8 bg-[#006C65]" />
              Before any treatment
            </p>
            <h2
              id="process-heading"
              className={`${serif} mt-4 max-w-2xl text-4xl leading-[1.05] text-[#102832] sm:text-5xl`}
            >
              How a treatment is decided
              <span className="text-[#006C65]">.</span>
            </h2>

            <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.title}
                    className="tp-reveal border-t-2 border-[#006C65] pt-5"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        aria-hidden="true"
                        className={`${serif} text-4xl text-[#006C65]`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ABCCC1]/40 text-[#006C65]"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className={`${serif} mt-5 text-2xl text-[#102832]`}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#102832]/70">
                      {s.text}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div className="mt-14 rounded-[2rem] bg-white p-7 ring-1 ring-[#102832]/10 sm:p-10">
              <h3 className={`${serif} text-3xl text-[#102832]`}>
                Please tell the doctor about
              </h3>
              <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {TELL_THE_DOCTOR.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-snug text-[#102832]/80"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#006C65]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 text-sm leading-relaxed text-[#102832]/70">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-[#006C65]"
                aria-hidden="true"
              />
              <p>
                Results differ from person to person and cannot be guaranteed.
                Every procedure has possible risks and side effects, which are
                explained before you decide. The information on this page is for
                general awareness and is not a substitute for a consultation.
              </p>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Book a consultation"
        description="Treatment options are explained after a clinical assessment by the doctor. Results differ from person to person."
      />
    </>
  );
}