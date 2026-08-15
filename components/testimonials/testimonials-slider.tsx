"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const perView = 3;

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = Array.from({ length: perView }).map((_, i) => TESTIMONIALS[(index + i) % TESTIMONIALS.length]);

  return (
    <div>
      <div className="hidden md:grid grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((t) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div key={TESTIMONIALS[index].id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4 }}>
            <TestimonialCard testimonial={TESTIMONIALS[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={prev} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-[var(--color-primary)] transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-slate-200"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-[var(--color-primary)] transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
