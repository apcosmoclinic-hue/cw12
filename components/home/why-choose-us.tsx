"use client";

import { motion } from "framer-motion";
import { Stethoscope, Microscope, HeartHandshake, Sparkle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const REASONS = [
  {
    icon: Stethoscope,
    title: "Diagnosis-First Approach",
    description: "Every treatment plan begins with an accurate diagnosis, not a generic prescription — the difference between managing symptoms and solving the actual problem.",
  },
  {
    icon: Microscope,
    title: "Advanced In-House Technology",
    description: "Diode laser, Q-switched laser and full-body phototherapy systems, all housed within the clinic for consistent, monitored treatment.",
  },
  {
    icon: HeartHandshake,
    title: "24+ Years of Trust",
    description: "Two decades of dedicated dermatology practice in Latur, with thousands of patients returning for ongoing skin and hair care.",
  },
  {
    icon: Sparkle,
    title: "Medical + Cosmetic, Under One Roof",
    description: "From chronic conditions like psoriasis and vitiligo to cosmetic concerns like pigmentation and anti-ageing — one doctor, one continuous record.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Patients Choose Us"
          title="Dermatology care built on precision, not guesswork"
          description="Latur deserves the same standard of skin and hair care available in bigger cities — that's the standard this clinic is built to meet."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-slate-100 p-7 hover:border-transparent hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-light)] text-[var(--color-secondary)] group-hover:bg-gradient-clinic group-hover:text-white transition-colors duration-300">
                <reason.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-[var(--color-ink)]">{reason.title}</h3>
              <p className="mt-2.5 text-sm text-[var(--color-muted)] leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
