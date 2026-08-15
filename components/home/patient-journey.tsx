"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Stethoscope, CalendarClock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STEPS = [
  { icon: PhoneCall, title: "Book a Visit", description: "Call, WhatsApp, or use the contact form to schedule your consultation at a convenient time." },
  { icon: ClipboardList, title: "Share Your History", description: "A short intake covers your concern, medical history and any prior treatments tried." },
  { icon: Stethoscope, title: "Consult & Diagnose", description: "Dr. Patil examines your skin, hair or nails and explains the diagnosis in plain terms." },
  { icon: CalendarClock, title: "Personalised Plan", description: "You leave with a clear treatment plan, expected timeline, and follow-up schedule." },
];

export function PatientJourney() {
  return (
    <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What to Expect"
          title="Your visit, from first call to treatment plan"
          description="A straightforward process designed to respect your time and give you clarity at every step."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-slate-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)] text-[var(--color-secondary)]">
                  <step.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-[var(--color-ink)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
