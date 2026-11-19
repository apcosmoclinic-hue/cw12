import Link from "next/link";
import { TREATMENTS as DETAIL_TREATMENTS } from "@/data/treatments";
import {
  ArrowUpRight,
  CalendarCheck,
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
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Confirm clinical descriptions and treatment availability before publishing.
export const metadata = buildMetadata({
  title: "Skin, Hair and Laser Treatment Information",
  description:
    "General information about skin and hair conditions, laser procedures and minor skin surgery, including what a clinical assessment may involve.",
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

const DIRECTORY_TREATMENTS: Treatment[] = [
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


const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00799D]";
const anchor = "scroll-mt-[calc(var(--header-height,80px)+1.5rem)]";

const categoryStyles: Record<CategoryId, string> = {
  medical: "border-sky-100 bg-sky-50 text-sky-900",
  cosmetic: "border-indigo-100 bg-indigo-50 text-indigo-900",
  hair: "border-teal-100 bg-teal-50 text-teal-900",
  laser: "border-cyan-100 bg-cyan-50 text-cyan-900",
  procedures: "border-blue-100 bg-blue-50 text-blue-900",
};

function normalizeName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function findDetailSlug(entry: Treatment) {
  const exactSlug = DETAIL_TREATMENTS.find(({ slug }) =>
    slug === (entry.slug === "acne" ? "acne-treatment" : entry.slug),
  );
  if (exactSlug) return exactSlug.slug;

  const name = normalizeName(entry.name);
  const matches = DETAIL_TREATMENTS.filter((item) =>
    [item.name, item.shortName].some((label) => label && normalizeName(label) === name),
  );
  return matches.length === 1 ? matches[0].slug : undefined;
}

export default function TreatmentsPage() {
  const treatments = DIRECTORY_TREATMENTS.map((entry) => ({
    ...entry,
    detailSlug: findDetailSlug(entry),
  }));
  const alphabetized = [...treatments].sort((a, b) => a.name.localeCompare(b.name, "en"));
  const letters = [...new Set(alphabetized.map((treatment) => treatment.name[0].toUpperCase()))];

  return (
    <div className="bg-[#F5F8F8] text-[#112638]">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />

      <section aria-labelledby="treatments-title" className="border-b border-[#DDE9EA] bg-[#FDFFFF] pt-[calc(var(--header-height,80px)+1.5rem)]">
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className={`rounded-sm hover:text-sky-800 ${focus}`}>Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Treatments</span>
          </nav>

          <div className="mt-7 grid items-end gap-6 border-b border-[#DDE9EA] pb-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
            <h1 id="treatments-title" className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Skin, hair and <span className="text-[#256A70]">laser treatments</span>
            </h1>
            <div className="lg:border-l lg:border-[#DDE9EA] lg:pl-7">
              <p className="max-w-sm text-base leading-relaxed text-slate-600">
                Browse skin and hair conditions and procedures. Treatment suitability
                depends on an individual clinical assessment.
              </p>
              <a href="#index" className={`mt-2 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#24676D] underline-offset-4 hover:underline ${focus}`}>
                <ListChecks aria-hidden="true" className="h-4 w-4" /> Browse A–Z
              </a>
            </div>
          </div>
          <nav aria-label="Treatment categories" className="mt-5">
            <ul className="flex flex-wrap gap-2">
              {CATEGORIES.map(({ id, icon: Icon, label }) => (
                <li key={id}>
                  <a href={`#cat-${id}`} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors hover:border-current ${categoryStyles[id]} ${focus}`}>
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-9 px-5 py-10 sm:px-8 sm:py-14">
        {CATEGORIES.map(({ id, icon: Icon, label, intro }) => (
          <section key={id} id={`cat-${id}`} aria-labelledby={`${id}-heading`} className={`${anchor} rounded-[1.75rem] border border-[#E0EAEA] bg-[#FCFEFE] p-4 sm:p-6`}>
            <div className={`flex items-start gap-3 rounded-2xl border px-4 py-4 sm:px-6 ${categoryStyles[id]}`}>
              <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <h2 id={`${id}-heading`} className="font-display text-2xl font-semibold tracking-tight">{label}</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{intro}</p>
              </div>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.filter((treatment) => treatment.category === id).map((treatment) => (
                <li key={treatment.slug} id={treatment.slug} className={`${anchor} rounded-2xl border border-[#DBE7E9] bg-white target:border-[#4C9AA0] target:bg-[#F1FAFA]`}>
                  {treatment.detailSlug ? (
                    <Link href={`/treatments/${treatment.detailSlug}`} className={`group flex h-full items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-[#F4FAFA] sm:p-5 ${focus}`}>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-sky-900">{treatment.name}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{treatment.summary}</p>
                      </div>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EDF6F5] text-[#24676D] transition-colors group-hover:bg-[#DDEFEF]">
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </Link>
                  ) : (
                    <div className="px-4 py-4 sm:px-6">
                      <h3 className="font-display text-lg font-semibold leading-tight">{treatment.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{treatment.summary}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section id="index" aria-labelledby="index-heading" className={`${anchor} rounded-2xl border border-slate-200 bg-white p-5 sm:p-7`}>
          <h2 id="index-heading" className="font-display text-2xl font-semibold">Treatments A–Z</h2>
          <dl className="mt-4 divide-y divide-slate-100">
            {letters.map((letter) => (
              <div key={letter} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2 py-2">
                <dt className="pt-2 font-display font-semibold text-sky-800">{letter}</dt>
                <dd className="flex flex-wrap gap-x-4">
                  {alphabetized.filter((treatment) => treatment.name[0].toUpperCase() === letter).map((treatment) => (
                    <Link key={treatment.slug} href={treatment.detailSlug ? `/treatments/${treatment.detailSlug}` : `#${treatment.slug}`} className={`inline-flex min-h-10 items-center rounded-sm text-sm text-slate-700 underline-offset-4 hover:text-sky-800 hover:underline ${focus}`}>
                      {treatment.name}
                    </Link>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="assessment-heading" className="rounded-2xl border border-sky-100 bg-[#EAF7FD] p-5 sm:p-7">
          <h2 id="assessment-heading" className="font-display text-2xl font-semibold">How a treatment is decided</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {STEPS.map(({ title, text, icon: Icon }) => (
              <li key={title} className="rounded-xl border border-sky-100 bg-white p-4">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-sky-700" /> {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{text}</p>
              </li>
            ))}
          </ol>
          <details className="mt-4 rounded-xl border border-sky-100 bg-white">
            <summary className={`cursor-pointer rounded-xl px-4 py-3 font-medium ${focus}`}>What to tell your doctor</summary>
            <ul className="list-disc space-y-1 pb-4 pl-9 pr-4 text-sm leading-relaxed text-slate-700">
              {TELL_THE_DOCTOR.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </details>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-700">
            <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
            Expected outcomes and recovery vary. Ask about risks, possible side effects and alternatives before giving consent.
          </p>
        </section>

        <p className="text-xs leading-relaxed text-slate-600">This page contains AI-assisted text and provides general information for patients.</p>
      </div>
    </div>
  );
}
