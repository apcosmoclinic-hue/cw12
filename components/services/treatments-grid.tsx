"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Star,
} from "lucide-react";

import { TreatmentVisual } from "@/components/ui/treatment-visual";
import { TREATMENTS, TREATMENT_CATEGORIES } from "@/data/treatments";
import { cn } from "@/lib/utils";

export function TreatmentsGrid() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...TREATMENT_CATEGORIES];

  const filtered =
    active === "All"
      ? TREATMENTS
      : TREATMENTS.filter(
          (treatment) => treatment.category === active
        );

  return (
    <div className="relative">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
          <Sparkles className="h-4 w-4" />
          Explore Treatments
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Personalized Dermatology Solutions
        </h2>

        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Advanced medical, cosmetic, laser and surgical dermatology
          treatments tailored to your skin and hair concerns.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="relative"
          >
            {active === cat && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <span
              className={cn(
                "relative z-10 block rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                active === cat
                  ? "text-white"
                  : "bg-white border border-slate-200 hover:border-sky-300"
              )}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filtered.map((treatment, index) => (
            <motion.div
              key={treatment.slug}
              layout
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-sky-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                {/* Featured badge */}
                {treatment.featured && (
                  <div className="absolute right-4 top-4 z-20">
                    <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-sky-700 shadow">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
  <Image
    src={`/images/treatments/${treatment.slug}.jpg`}
    alt={treatment.name}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
    {treatment.category}
  </span>

  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-xl font-bold text-white">
      {treatment.shortName}
    </h3>
  </div>
</div>

               <div className="p-6 flex flex-col">

  {/* Category Badge */}
  <span className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-sky-600">
    {treatment.category}
  </span>

  {/* Treatment Name */}
  <h3 className="mt-4 text-xl font-bold text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
    {treatment.shortName}
  </h3>

  {/* Description */}
  <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 flex-1">
    {treatment.tagline}
  </p>


  {/* Bottom Action */}
  <div className="mt-6 flex items-center justify-between">

    <span className="relative font-semibold text-sm text-sky-600 
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
      after:w-0 after:bg-sky-600 after:transition-all 
      group-hover:after:w-full">
      View Treatment
    </span>


    <div
      className="
      flex h-11 w-11 items-center justify-center 
      rounded-full 
      bg-sky-50 
      transition-all duration-300
      group-hover:bg-sky-600
      group-hover:rotate-12
      "
    >
      <ArrowUpRight
        className="
        h-5 w-5 
        text-sky-600 
        transition-colors
        group-hover:text-white
        "
      />
    </div>

  </div>

</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}