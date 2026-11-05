import Link from "next/link";
import {
  ArrowUpRight,
  Armchair,
  Clock,
  DoorOpen,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Stethoscope,
  Sun,
  Zap,
} from "lucide-react";
import { FacilityHighlights } from "@/components/about/facility-highlights";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * About the clinic - factual information only (NMC ethical advertising
 * guidelines, 6 Oct 2026): no experience claims, no comparisons, no
 * superlatives, facilities listed plainly and not linked to outcomes.
 *
 * Keep this as app/about-clinic/page.tsx (server component).
 *
 * CLINIC MUST CONFIRM IN WRITING before publishing: facilities list,
 * clinic hours (SITE_CONFIG.hours) and the address.
 *
 * Layout changes in this version:
 *  - removed the large outlined "01-04" numbers that overlapped the facility
 *    text (the facilities are not a sequence, so numbering added nothing);
 *  - hours are grouped (Monday - Saturday / Sunday) with a 7-day strip;
 *  - the address card no longer has empty space and gets a directions link.
 */
export const metadata = buildMetadata({
  title: "About the Clinic",
  description:
    "Information about Dr. Anand Patil Skin & Cosmetic Laser Clinic at Ganj Golai, Latur: location, facilities, clinic hours and contact details.",
  path: "/about-clinic",
});

const FACILITIES = [
  {
    icon: DoorOpen,
    title: "Procedure rooms",
    description: "Dedicated rooms for consultations and procedures.",
  },
  {
    icon: Sun,
    title: "Phototherapy unit",
    description: "A phototherapy unit is available at the clinic.",
  },
  {
    icon: Zap,
    title: "Laser systems",
    description: "Diode and Q-switched laser systems are available at the clinic.",
  },
  {
    icon: Armchair,
    title: "Waiting area",
    description: "A seated waiting area for patients and their companions.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700";

type HourRow = { day: string; time: string };

/** Merge consecutive days that share the same time, e.g. "Monday - Saturday". */
function groupHours(hours: readonly HourRow[]) {
  const groups: { days: string[]; time: string }[] = [];
  for (const h of hours) {
    const last = groups[groups.length - 1];
    if (last && last.time === h.time) last.days.push(h.day);
    else groups.push({ days: [h.day], time: h.time });
  }
  return groups.map((g) => ({
    label:
      g.days.length > 1
        ? `${g.days[0]} \u2013 ${g.days[g.days.length - 1]}`
        : g.days[0],
    time: g.time,
  }));
}

export default function AboutClinicPage() {
  const hours = SITE_CONFIG.hours as readonly HourRow[];
  const groupedHours = groupHours(hours);
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    SITE_CONFIG.address.full
  )}`;

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About the Clinic", path: "/about-clinic" },
        ])}
      />

      {/* ------------------------ Hero ------------------------ */}
      <section
        aria-labelledby="page-title"
        className="relative overflow-hidden bg-gradient-to-br from-[#0D2E52] via-[#0A2342] to-[#06182E] text-white"
      >
        {/* decorative layers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(127,224,234,0.35) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse at 80% 20%, black 0%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 80% 20%, black 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl"
        />
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-40 -top-40 hidden h-[560px] w-[560px] sm:block"
          fill="none"
        >
          <defs>
            <linearGradient id="hero-arc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00B4D0" />
              <stop offset="100%" stopColor="#0A6FB8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="190" stroke="#7FE0EA" strokeOpacity="0.14" />
          <circle cx="200" cy="200" r="140" stroke="#7FE0EA" strokeOpacity="0.1" />
          <circle
            cx="200"
            cy="200"
            r="165"
            stroke="url(#hero-arc)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="520 900"
          />
        </svg>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          {/* Left: title + actions */}
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  About the Clinic
                </li>
              </ol>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#BFF3F6] ring-1 ring-white/15">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#5FD6D0]" />
              About the Clinic
            </p>

            <h1
              id="page-title"
              className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Clinic
              <br />
              <span className="bg-gradient-to-r from-[#7FE0EA] to-[#5FD6D0] bg-clip-text text-transparent">
                information
              </span>
              <span className="text-[#5FD6D0]">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Factual information about the clinic, its facilities, clinic hours
              and how to contact it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#5FD6D0] px-7 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#8CE6E1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
              >
                Appointment Enquiry
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white/10 px-7 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </div>

            {/* On-page links */}
            <nav
              aria-label="On this page"
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm"
            >
              <span className="text-white/60">On this page</span>
              {[
                { href: "#overview-heading", label: "Overview" },
                { href: "#facilities-heading", label: "Facilities" },
                { href: "#visit-heading", label: "Hours & address" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center font-medium text-[#BFF3F6] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: at-a-glance card */}
          <aside
            aria-label="Clinic at a glance"
            className="lg:col-span-5"
          >
            <div className="rounded-[2rem] bg-white/10 p-6 shadow-2xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md sm:p-8">
              <h2 className="font-display text-xl font-semibold">At a glance</h2>

              <dl className="mt-5 space-y-5">
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7FE0EA]"
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Address
                    </dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-[#E4EEF7]">
                      {SITE_CONFIG.address.full}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7FE0EA]"
                  >
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Clinic hours
                    </dt>
                    <dd className="mt-1 space-y-1 text-[15px] text-[#E4EEF7]">
                      {groupedHours.map((g) => (
                        <p
                          key={g.label}
                          className="flex flex-wrap justify-between gap-x-4"
                        >
                          <span>{g.label}</span>
                          <span
                            className={
                              g.time === "Closed"
                                ? "font-semibold text-rose-300"
                                : "font-semibold text-white"
                            }
                          >
                            {g.time}
                          </span>
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7FE0EA]"
                  >
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                        className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                      >
                        {SITE_CONFIG.contact.phonePrimary}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-5 border-t border-white/15 pt-4 text-sm text-white/70">
                Walk-ins are welcome. Calling ahead to book a time is
                recommended.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ------------------------ Overview ------------------------ */}
      <section
        aria-labelledby="overview-heading"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#dbe4ee 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 45%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 45%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Overview
            </p>
            <h2
              id="overview-heading"
              className="scroll-mt-28 mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl"
            >
              About the clinic<span className="text-sky-600">.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Dr. Anand Patil Skin &amp; Cosmetic Laser Clinic is a dermatology
                clinic at Ganj Golai, Latur, opposite the bus stand. Consultations
                for skin and hair concerns are given by Dr. Anand Patil.
              </p>
              <p>
                Information about treatment options is given after a clinical
                assessment by the doctor.
              </p>
              <p>
                Facilities at the clinic include procedure rooms, a phototherapy
                unit, diode and Q-switched laser systems, and a patient waiting
                area.
              </p>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Doctor", value: "Dr. Anand Patil" },
                { label: "Location", value: "Ganj Golai, Latur" },
                { label: "Consultations", value: "Skin and hair concerns" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[var(--shadow-card)]"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-sky-800">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-[var(--color-ink)]">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <FacilityHighlights />
        </div>
      </section>

      {/* ------------------------ Facilities ------------------------ */}
      <section
        aria-labelledby="facilities-heading"
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-sky-50 py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-teal-100/60 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm ring-1 ring-sky-100">
                <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                Facilities
              </p>
              <h2
                id="facilities-heading"
                className="scroll-mt-28 mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl"
              >
                Facilities at the clinic<span className="text-sky-600">.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 lg:pb-2">
              The facilities available at the clinic. Whether any treatment is
              suitable is decided only after a clinical assessment by the doctor.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((item) => (
              <li
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white bg-white/90 p-7 pt-8 shadow-[var(--shadow-card)] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-sky-500 before:to-teal-400 hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                >
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------ Timings & location ------------------------ */}
      <section
        aria-labelledby="visit-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Timings &amp; Location
            </p>
            <h2
              id="visit-heading"
              className="scroll-mt-28 mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl"
            >
              Clinic hours and address<span className="text-sky-600">.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* Hours */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700"
                >
                  <Clock className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                  Clinic hours
                </h3>
              </div>

              {/* 7-day strip (decorative; the text below carries the information) */}
              <div aria-hidden="true" className="mt-6 grid grid-cols-7 gap-2">
                {hours.map((h) => {
                  const closed = h.time === "Closed";
                  return (
                    <div
                      key={h.day}
                      className={`rounded-xl py-3 text-center text-xs font-semibold ${
                        closed
                          ? "bg-rose-50 text-[var(--color-emergency)] ring-1 ring-rose-100"
                          : "bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-sm shadow-sky-500/20"
                      }`}
                    >
                      {h.day.slice(0, 3)}
                    </div>
                  );
                })}
              </div>

              <ul className="mt-6 divide-y divide-slate-100">
                {groupedHours.map((g) => (
                  <li
                    key={g.label}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 text-base"
                  >
                    <span className="text-slate-600">{g.label}</span>
                    <span
                      className={
                        g.time === "Closed"
                          ? "font-semibold text-[var(--color-emergency)]"
                          : "font-semibold text-[var(--color-ink)]"
                      }
                    >
                      {g.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-slate-500">
                Walk-ins are welcome. Calling ahead to book a time is
                recommended.
              </p>
            </div>

            {/* Address + contact */}
            <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0D2E52] via-[#0A2342] to-[#06182E] p-7 text-white shadow-[var(--shadow-lifted)] sm:p-9">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 400 400"
                className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px]"
                fill="none"
              >
                <defs>
                  <linearGradient id="about-arc" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00B4D0" />
                    <stop offset="100%" stopColor="#0A6FB8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="190" stroke="#7FE0EA" strokeOpacity="0.12" />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="url(#about-arc)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="520 900"
                />
              </svg>

              <div className="relative flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#7FE0EA]"
                >
                  <MapPin className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-semibold">Address</h3>
              </div>
              <p className="relative mt-5 text-base leading-relaxed text-[#E4EEF7]">
                {SITE_CONFIG.address.full}
              </p>

              <p className="relative mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#E4EEF7] ring-1 ring-white/15">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#7FE0EA]" />
                Opposite the bus stand
              </p>

              <ul className="relative mt-7 space-y-1 border-t border-white/15 pt-5 text-base">
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                    className="inline-flex min-h-[44px] items-center gap-3 text-[#E4EEF7] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                  >
                    <Phone className="h-4 w-4 text-[#7FE0EA]" aria-hidden="true" />
                    {SITE_CONFIG.contact.phonePrimary}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="inline-flex min-h-[44px] items-center gap-3 break-all text-[#E4EEF7] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#7FE0EA]" aria-hidden="true" />
                    {SITE_CONFIG.contact.email}
                  </a>
                </li>
              </ul>

              <div className="relative mt-auto flex flex-wrap gap-3 pt-6">
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
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white/10 px-7 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0EA]"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}