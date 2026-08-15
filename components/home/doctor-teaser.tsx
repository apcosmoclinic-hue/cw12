"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOCTOR } from "@/data/doctor";
import Image from "next/image";

export function DoctorTeaser() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lifted)]">

  <Image
    src="/images/dr.png"
    alt="Dr. Anand Patil"
    fill
    priority
    className="object-cover object-top"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/25 to-transparent" />

  {/* Doctor Details */}
  <div className="absolute bottom-0 left-0 right-0 p-8">

    <div className="inline-flex rounded-full bg-white/15 backdrop-blur-md px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white mb-4">
      Consultant Dermatologist
    </div>

    <h3 className="font-display text-3xl font-bold text-white">
      {DOCTOR.name}
    </h3>

    <p className="mt-2 text-white/90">
      {DOCTOR.credentials}
    </p>

    <p className="mt-2 text-sm uppercase tracking-wider text-cyan-200">
      {DOCTOR.title}
    </p>

  </div>

</div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-[var(--shadow-lifted)] border border-slate-100 max-w-[240px] hidden sm:block">
              <Quote className="h-5 w-5 text-[var(--color-accent)]" />
              <p className="mt-2 text-xs text-[var(--color-muted)] italic leading-relaxed">
                &ldquo;Every plan starts with an honest diagnosis — that&rsquo;s non-negotiable.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
              Meet Your Dermatologist
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-tight">
              {DOCTOR.experience} of dedicated dermatology practice in Latur
            </h2>
            <p className="mt-5 text-[var(--color-muted)] leading-relaxed">{DOCTOR.intro}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center gap-2 rounded-xl bg-[var(--color-bg-light)] py-5">
                <GraduationCap className="h-5 w-5 text-[var(--color-secondary)]" />
                <span className="text-xs font-medium text-[var(--color-ink)]">MD Dermatology</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 rounded-xl bg-[var(--color-bg-light)] py-5">
                <Users className="h-5 w-5 text-[var(--color-secondary)]" />
                <span className="text-xs font-medium text-[var(--color-ink)]">50,000+ Patients</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 rounded-xl bg-[var(--color-bg-light)] py-5">
                <Award className="h-5 w-5 text-[var(--color-secondary)]" />
                <span className="text-xs font-medium text-[var(--color-ink)]">IADVL Member</span>
              </div>
            </div>

            <div className="mt-9">
              <Button href="/doctor" variant="primary" icon={ArrowUpRight}>
                Read Full Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
