"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { SITE_CONFIG } from "@/data/site-config";

function StatItem({ value, suffix, label, isDecimal, index }: { value: number; suffix: string; label: string; isDecimal?: boolean; index: number }) {
  const { ref, value: animated } = useCountUp(value, 1600, isDecimal ? 1 : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <p ref={ref as never} className="font-display text-4xl sm:text-5xl font-bold text-gradient-clinic">
        {animated.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[var(--color-muted)] font-medium">{label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 rounded-3xl bg-white shadow-[var(--shadow-lifted)] px-8 py-10 sm:grid-cols-4 border border-slate-100">
          {SITE_CONFIG.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} isDecimal={"isDecimal" in stat ? stat.isDecimal : false} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
