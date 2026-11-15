"use client";

/**
 * HeroSection.tsx — ALL-IN-ONE
 * Contains: Hero (with info strip), HeroMedia (video/poster layer) and ConsultationSteps.
 *
 * PASTE: replace your current hero file with this one (e.g. src/components/home/Hero.tsx).
 * Exports: `Hero` and `ConsultationSteps`.
 *   import { Hero, ConsultationSteps } from "<path>/Hero";
 *   <Hero />
 *   <ConsultationSteps />
 *
 * NEEDS (see bottom of this comment):
 *  1. Fonts in app/layout.tsx — Instrument_Serif (--font-instrument) + DM_Sans (--font-dm-sans)
 *     via next/font/google, both .variable classes on <html>.
 *  2. Media in /public/media:
 *       clinic-hero-poster.jpg  (2400×1350, first frame of the video)
 *       clinic-hero.webm        (1920×1080, silent, ~8–12 s)
 *       clinic-hero.mp4         (same clip)
 *  3. Logo stays at /public/images/logo.png (used in the header, not here).
 *
 * Palette: warm white #F5F2EC · ink navy #102832 · deep teal #006C65 · soft sage #ABCCC1
 *
 * Content is informational only (NMC ethical advertising guidelines, 6 Oct 2026):
 * no testimonials, ratings, statistics, superiority/outcome claims, offers,
 * patient images or doctor photograph. Footage must show no identifiable patients.
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  Pause,
  Phone,
  Play,
  Stethoscope,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

/* ════════════════════════════════════════════════════════════
   CONFIG
   ════════════════════════════════════════════════════════════ */

/**
 * ACTIONS BEFORE PUBLISHING
 *  - Fill `qualifications` and `registration` ONLY from the doctor's verified
 *    registration documents. Empty = not shown.
 *  - Fill `address` with the confirmed full address. Empty = city only.
 *  - Get the clinic to confirm `hours` / `closedDay` in writing.
 *  - Record written clinic approval of the final hero text.
 */
const CLINIC_FACTS = {
  doctorName: "Dr. Anand Patil",
  /** Exactly as on the registration certificate. */
  qualifications: "",
  /** e.g. "Maharashtra Medical Council – Reg. No. 00000" */
  registration: "",
  /** Confirmed full address. */
  address: "",
  /** Carried over from the existing site — pending clinic confirmation. */
  hours: "11:00 AM – 6:00 PM",
  closedDay: "Sunday closed",
};

const HERO_MEDIA = {
  poster: "/media/clinic-hero-poster.jpg",
  webm: "/media/clinic-hero.webm",
  mp4: "/media/clinic-hero.mp4",
  alt: "Reception and consultation room of Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur",
};

const STEPS = [
  { title: "Enquiry", copy: "Contact the clinic to ask about an appointment." },
  { title: "Clinical assessment", copy: "Your concern is examined by the doctor." },
  { title: "Discussion", copy: "Treatment options are explained to you." },
];

const serif = "font-[family-name:var(--font-instrument)]";
const sans = "font-[family-name:var(--font-dm-sans)]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ABCCC1]";

/* ════════════════════════════════════════════════════════════
   HeroMedia — poster / video / push-in layer
   Modes:
     still  : mobile, tablet, reduced motion, data-saver, slow network → poster only
     video  : muted, inline, looping clip (desktop)
     pushin : desktop but video missing/failed → poster with ONE slow push-in
   ════════════════════════════════════════════════════════════ */

type Mode = "still" | "video" | "pushin";
type NetworkInfo = { saveData?: boolean; effectiveType?: string };

function StaticScene() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_35%,#2C5560_0%,#18383F_45%,#102832_100%)]"
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        <defs>
          <linearGradient id="hm-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5F2EC" stopOpacity="0.34" />
            <stop offset="1" stopColor="#F5F2EC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hm-door" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5F2EC" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ABCCC1" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="hm-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ABCCC1" stopOpacity="0.16" />
            <stop offset="1" stopColor="#102832" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="skewX(-12)">
          <rect x="1020" y="0" width="120" height="640" fill="url(#hm-beam)" />
          <rect x="1170" y="0" width="120" height="640" fill="url(#hm-beam)" />
          <rect x="1320" y="0" width="120" height="640" fill="url(#hm-beam)" />
        </g>
        <rect x="1180" y="250" width="190" height="380" rx="6" fill="url(#hm-door)" />
        <rect x="1180" y="250" width="190" height="380" rx="6" fill="none" stroke="#ABCCC1" strokeOpacity="0.35" />
        <rect x="0" y="630" width="1600" height="270" fill="url(#hm-floor)" />
        <line x1="0" y1="630" x2="1600" y2="630" stroke="#ABCCC1" strokeOpacity="0.2" />
      </svg>
    </div>
  );
}

function HeroMedia({ className = "" }: { className?: string }) {
  const [canAnimate, setCanAnimate] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [posterOk, setPosterOk] = useState(true);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const calm = window.matchMedia("(prefers-reduced-motion: no-preference)");

    const evaluate = () => {
      const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection;
      const constrained =
        !!conn?.saveData ||
        ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
      const ok = wide.matches && calm.matches && !constrained;
      setCanAnimate(ok);
      if (!ok) {
        setVideoReady(false);
        setPaused(false);
      }
    };

    evaluate();
    wide.addEventListener("change", evaluate);
    calm.addEventListener("change", evaluate);
    return () => {
      wide.removeEventListener("change", evaluate);
      calm.removeEventListener("change", evaluate);
    };
  }, []);

  const mode: Mode = !canAnimate ? "still" : videoFailed ? "pushin" : "video";

  useEffect(() => {
    const v = videoRef.current;
    if (mode !== "video" || !v) return;
    if (paused) {
      v.pause();
    } else {
      v.play().catch(() => setVideoFailed(true));
    }
  }, [mode, paused]);

  const showControl = mode === "pushin" || (mode === "video" && videoReady);

  return (
    <div className={`overflow-hidden bg-[#102832] ${className}`}>
      <style>{`
        @keyframes hero-push { from { transform: scale(1); } to { transform: scale(1.09); } }
        .hero-pushin { transform-origin: 72% 55%; animation: hero-push 28s ease-out forwards; }
        .hero-paused { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .hero-pushin { animation: none; } }
      `}</style>

      {/* 1 — built-in fallback (visible only if the poster file is missing) */}
      <StaticScene />

      {/* 2 — poster: rendered from first paint, stays under the video */}
      {posterOk && (
        <Image
          src={HERO_MEDIA.poster}
          alt={HERO_MEDIA.alt}
          fill
          priority
          quality={80}
          sizes="100vw"
          onError={() => setPosterOk(false)}
          className={`object-cover object-[72%_50%] ${
            mode === "pushin" ? "hero-pushin" : ""
          } ${mode === "pushin" && paused ? "hero-paused" : ""}`}
        />
      )}

      {/* 3 — video (desktop, motion allowed, no data-saver) */}
      {mode === "video" && (
        <video
          ref={videoRef}
          aria-hidden="true"
          tabIndex={-1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_MEDIA.poster}
          onPlaying={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[72%_50%] transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={HERO_MEDIA.webm} type="video/webm" />
          <source
            src={HERO_MEDIA.mp4}
            type="video/mp4"
            onError={() => setVideoFailed(true)}
          />
        </video>
      )}

      {/* 4 — ink overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#102832] to-transparent lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,40,50,0.95) 0%, rgba(16,40,50,0.80) 30%, rgba(16,40,50,0.30) 58%, rgba(16,40,50,0) 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(0deg, rgba(16,40,50,1) 0%, rgba(16,40,50,0.55) 45%, rgba(16,40,50,0) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,40,50,0.75) 0%, rgba(16,40,50,0) 100%)",
        }}
      />

      {/* 5 — discreet pause control */}
      {showControl && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className={`absolute bottom-5 right-5 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F5F2EC]/25 bg-[#102832]/60 px-4 text-xs font-medium tracking-wide text-[#F5F2EC] backdrop-blur transition-colors hover:bg-[#102832]/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ABCCC1] lg:bottom-6 lg:right-10 ${sans}`}
        >
          {paused ? (
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Pause className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {paused ? "Play background" : "Pause background"}
        </button>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   Hero + information strip
   ════════════════════════════════════════════════════════════ */

export function Hero() {
  const reduce = !!useReducedMotion();
  const { doctorName, qualifications, registration, address, hours, closedDay } =
    CLINIC_FACTS;

  // One subtle entrance. Opacity is never animated, so copy is always visible.
  const entrance = reduce
    ? {}
    : {
        initial: { y: 22 },
        animate: { y: 0 },
        transition: { duration: 0.9, delay: 0.1, ease: "easeOut" as const },
      };

  const phone = SITE_CONFIG.contact.phonePrimaryRaw;
  const doctorSub = [qualifications, registration].filter(Boolean).join(" · ");

  const facts = [
    {
      icon: Stethoscope,
      label: "Doctor",
      value: doctorName,
      sub: doctorSub || undefined,
      href: undefined as string | undefined,
    },
    {
      icon: MapPin,
      label: address ? "Address" : "Location",
      value: address || "Latur, Maharashtra",
      sub: undefined as string | undefined,
      href: undefined as string | undefined,
    },
    {
      icon: Clock,
      label: "Clinic hours",
      value: hours,
      sub: closedDay as string | undefined,
      href: undefined as string | undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      sub: undefined as string | undefined,
      href: `tel:${phone}` as string | undefined,
    },
  ];

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className={`relative isolate flex flex-col overflow-hidden bg-[#102832] text-[#F5F2EC] lg:min-h-[max(680px,min(100svh,920px))] lg:justify-end ${sans}`}
      >
        {/* Copy — above the still image on mobile/tablet; bottom-left on desktop */}
        <div className="relative z-10 order-1 mx-auto w-full max-w-[1360px] px-5 pb-8 pt-[calc(var(--header-height,80px)+2rem)] sm:px-8 lg:order-2 lg:px-12 lg:pb-16 lg:pt-40">
          <motion.div {...entrance} className="max-w-[640px]">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#ABCCC1]">
              <span aria-hidden="true" className="h-px w-8 bg-[#ABCCC1]" />
              Dermatology clinic in Latur
            </p>

            <h1
              id="hero-heading"
              className={`${serif} mt-5 max-w-[15ch] text-balance font-normal tracking-[-0.01em] text-[#F5F2EC]`}
              style={{
                fontSize: "clamp(2.75rem, 1.7rem + 4.6vw, 5.5rem)",
                lineHeight: 1.02,
              }}
            >
              Consultations for <em className="italic">skin and hair</em>
            </h1>

            <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-[#F5F2EC]/80 sm:text-lg">
              Discuss your concerns and treatment options after a clinical
              assessment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={`group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#006C65] px-8 text-base font-medium text-[#F5F2EC] ring-1 ring-[#ABCCC1]/40 transition-colors hover:bg-[#00807A] ${focusRing}`}
              >
                Appointment enquiry
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={`tel:${phone}`}
                className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#F5F2EC]/45 px-8 text-base font-medium text-[#F5F2EC] transition-colors hover:border-[#F5F2EC] hover:bg-[#F5F2EC]/10 ${focusRing}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call the clinic
              </a>
            </div>
          </motion.div>
        </div>

        {/* Media */}
        <HeroMedia className="relative order-2 aspect-[4/5] w-full sm:aspect-[16/10] lg:absolute lg:inset-0 lg:-z-0 lg:order-none lg:aspect-auto" />
      </section>

      {/* Slim information strip */}
      <div className={`bg-[#F5F2EC] text-[#102832] ${sans}`}>
        <dl className="mx-auto grid max-w-[1360px] divide-y divide-[#102832]/10 px-5 sm:grid-cols-2 sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:divide-x lg:px-12">
          {facts.map(({ icon: Icon, label, value, sub, href }) => (
            <div
              key={label}
              className="flex items-start gap-3 py-5 sm:py-6 lg:px-6 lg:first:pl-0"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ABCCC1]/40 text-[#006C65]"
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#006C65]">
                  {label}
                </dt>
                <dd className="mt-0.5 text-[15px] font-medium leading-snug">
                  {href ? (
                    <a
                      href={href}
                      className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006C65]"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
                {sub ? (
                  <dd className="text-sm leading-snug text-[#102832]/70">{sub}</dd>
                ) : null}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   ConsultationSteps — "How a consultation works" (place right after <Hero />)
   ════════════════════════════════════════════════════════════ */

export function ConsultationSteps() {
  const reduce = !!useReducedMotion();

  return (
    <section
      aria-labelledby="steps-heading"
      className={`bg-[#102832] text-[#F5F2EC] ${sans}`}
    >
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ABCCC1]">
          Before you visit
        </p>
        <h2
          id="steps-heading"
          className={`${serif} mt-3 text-4xl font-normal sm:text-5xl`}
        >
          How a consultation works
        </h2>

        <ol className="mt-10 grid gap-8 border-t border-[#F5F2EC]/15 pt-8 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduce ? false : { y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="flex gap-4"
            >
              <span
                aria-hidden="true"
                className={`${serif} flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ABCCC1]/60 text-lg text-[#ABCCC1]`}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-medium">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#F5F2EC]/75">
                  {step.copy}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}