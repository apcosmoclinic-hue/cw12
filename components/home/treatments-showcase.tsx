"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { TreatmentVisual } from "@/components/ui/treatment-visual";
import { Button } from "@/components/ui/button";
import { TREATMENTS } from "@/data/treatments";
import Image from "next/image";

export function TreatmentsShowcase() {
  const featured = TREATMENTS.filter((t) => t.featured).concat(TREATMENTS.filter((t) => !t.featured)).slice(0, 8);

  return (
    <section className="py-24 sm:py-28 bg-[var(--color-bg-light)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Our Treatments"
            title="Comprehensive skin, hair & laser care"
            align="left"
            description="20+ medical, cosmetic and surgical dermatology treatments, each with a plan tailored to your skin."
            className="mx-0"
          />
          <Button href="/treatments" variant="outline" icon={ArrowUpRight} className="shrink-0">
            View All Treatments
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((treatment, i) => (
            <motion.div
              key={treatment.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative h-52 overflow-hidden">
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
  <p className="text-sm leading-relaxed text-slate-600 flex-1 line-clamp-3">
    {treatment.tagline}
  </p>

  <div className="mt-6 flex items-center justify-between">
    <span className="font-semibold text-sky-600">
      Learn More
    </span>

    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-600 transition-all">
      <ArrowUpRight className="h-4 w-4 text-sky-600 group-hover:text-white" />
    </div>
  </div>
</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
