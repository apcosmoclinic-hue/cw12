"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Stethoscope, Microscope, ClipboardList, Sparkle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Clinic information section (factual only), per the NMC ethical advertising
 * guidelines of 6 Oct 2026: no superiority/comparative claims, no
 * years-of-experience or patient-count claims, no outcome claims.
 *
 * PHOTOS: put the clinic's OWN photos in /public/images/clinic/ using the file
 * names below (or change `image.src`). Use real photos of the clinic only:
 * no stock "perfect skin" images, no before/after, no identifiable patients
 * unless written consent is on file.
 *
 * Every statement below must be CONFIRMED IN WRITING by the clinic
 * (equipment list, conditions seen) before publishing.
 */
const INFO = [
  {
    icon: Stethoscope,
    title: "Clinical Assessment",
    description:
      "Consultations begin with a clinical assessment of the patient's skin or hair concern.",
    image: {
      src: "/images/clinic/consultation-room.jpg",
      alt: "Consultation room at Dr. Anand Patil Skin & Cosmetic Laser Clinic",
      caption: "Consultation room",
    },
  },
  {
    icon: Microscope,
    title: "In-House Equipment",
    description:
      "Equipment available at the clinic includes diode laser, Q-switched laser and phototherapy systems.",
    image: {
      src: "/images/clinic/laser-equipment.jpg",
      alt: "Laser and phototherapy equipment at the clinic",
      caption: "Laser & phototherapy room",
    },
  },
  {
    icon: ClipboardList,
    title: "Medical Dermatology",
    description:
      "Consultations are available for skin conditions such as psoriasis and vitiligo.",
    image: {
      src: "/images/clinic/examination-area.jpg",
      alt: "Examination area at the clinic",
      caption: "Examination area",
    },
  },
  {
    icon: Sparkle,
    title: "Cosmetic Dermatology",
    description:
      "Consultations are available for cosmetic skin concerns such as pigmentation.",
    image: {
      src: "/images/clinic/treatment-room.jpg",
      alt: "Treatment room at the clinic",
      caption: "Treatment room",
    },
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-28" aria-labelledby="clinic-info-heading">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Clinic Information"
          title="Consultations and facilities at the clinic"
          description="Factual information about the consultations and in-house facilities available at Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur."
        />

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((item, i) => (
            <motion.li
              key={item.title}
              {...(reduce
                ? {}
                : {
                    initial: { y: 24 },
                    whileInView: { y: 0 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { duration: 0.5, delay: i * 0.08 },
                  })}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-transparent hover:shadow-[var(--shadow-card)]"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg-light)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[var(--color-ink)] backdrop-blur">
                  {item.image.caption}
                </span>
              </div>

              {/* Icon badge overlapping the photo edge */}
              <div className="relative px-7 pb-7">
                <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-secondary)] shadow-md ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-gradient-clinic group-hover:text-white">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}