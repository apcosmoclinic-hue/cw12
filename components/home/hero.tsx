"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  Award,
  Star,
  Sparkles,
  Scissors,
  Zap,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data/site-config";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "MD Dermatologist" },
  { icon: Award, label: "50,000+ Happy Patients" },
  { icon: Sparkles, label: "Advanced Laser Technology" },
];

const CARE_TRACKS = [
  {
    icon: Sparkles,
    title: "Skin Care",
    copy: "Acne, pigmentation, allergies & anti-aging",
  },
  {
    icon: Scissors,
    title: "Hair Care",
    copy: "PRP, hair fall & transplant surgery",
  },
  {
    icon: Zap,
    title: "Laser Care",
    copy: "Precision laser & cosmetic dermatology",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] pt-[var(--header-height)]">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/hero.png"
          alt="Inside Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur"
          fill
          priority
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink)]/92 to-[var(--color-secondary)]/30" />
        <div className="absolute inset-0 bg-clarity-grid opacity-[0.06]" />
        {/* two restrained glows — signature stays with the diagnostic rings, not the background */}
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--color-accent)]/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-var(--header-height))] max-w-7xl flex-col justify-center px-6 py-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---------------- Left column ---------------- */}
          <div>
            {/* <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
            >
              <Star className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              24+ Years of Trusted Skin Care
            </motion.div> */}

            <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="mt-6 text-[2.75rem] sm:text-6xl md:text-[4rem] font-display font-semibold leading-[1.03] tracking-tight text-white"
>
  Healthy Skin.
  <br />
  <span className="text-gradient-clinic">Beautiful Confi</span>
  <span className="text-[#E8C9A0]">dence.</span>
</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
            >
              Latur&rsquo;s trusted dermatology &amp; cosmetic laser clinic — led by{" "}
              <span className="text-white font-medium">Dr. Anand Patil, MD (Dermatology)</span>.
              From acne and pigmentation to hair transplant and laser care, every plan starts
              with an accurate diagnosis.
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.25 }}
  className="mt-4 flex flex-wrap gap-3"
>
  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white border border-white/10">
    🕒 Clinic Hours: 11:00 AM – 6:00 PM
  </div>

  <div className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-300 border border-red-500/20">
    📅 Sunday: Holiday
  </div>
</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg" icon={CalendarCheck}>
                Book Appointment
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                variant="outline"
                size="lg"
                icon={Phone}
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-colors"
              >
                Call Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-white/70 text-sm"
            >
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Care tracks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {CARE_TRACKS.map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="group rounded-2xl glass-panel px-4 py-4 transition-all hover:bg-white/[0.08] hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-white/55 leading-snug">{copy}</p>
                </div>
              ))}
            </motion.div>

            {/* Stat strip */}
            {/* <StatsCounter /> */}
          </div>

          {/* ---------------- Right column: layered portrait ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Diagnostic loupe rings — the signature element: concentric rings like a
                dermatoscope viewfinder, slowly rotating, framing the portrait */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-[var(--color-accent)]/25"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 rounded-full border border-[var(--color-secondary)]/20 border-dashed"
            />

            <div className="relative rounded-[2rem] glass-panel p-3 shadow-[var(--shadow-lifted)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/doctor/hero.jpg"
                  alt="Dr. Anand Patil, MD Dermatology, Latur"
                  width={560}
                  height={700}
                 className="h-[560px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge: experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 rounded-2xl bg-white p-5 shadow-[var(--shadow-lifted)] w-52"
              >
                <p className="font-display text-3xl font-bold text-[var(--color-ink)]">24+</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  Years treating skin, hair &amp; laser cases in Latur
                </p>
              </motion.div>

              {/* Floating badge: patients */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-lifted)]"
              >
                <ShieldCheck className="h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink)] leading-none">
                    50K+ Patients
                  </p>
                  <p className="text-[11px] text-[var(--color-muted)] mt-0.5">Safe procedures</p>
                </div>
              </motion.div>

              {/* Floating review card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -right-10 w-48 rounded-2xl bg-white p-4 shadow-[var(--shadow-lifted)]"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="mt-2 text-xs font-medium text-[var(--color-ink)] leading-snug">
                  &ldquo;Excellent experience, very professional.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-[var(--color-muted)]">
                  <Quote className="h-3 w-3" />
                  Google Verified
                </div>
              </motion.div>

              {/* Bottom consultation card */}
              <div className="absolute -bottom-8 right-6 rounded-2xl bg-[var(--color-ink)] px-5 py-4 shadow-[var(--shadow-lifted)] w-56">
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-accent)] font-semibold">
                  Today&rsquo;s Consultation
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Skin &middot; Laser &middot; Hair Analysis
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}