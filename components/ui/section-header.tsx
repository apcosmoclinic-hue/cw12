"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = "center", className, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4",
            light ? "bg-white/10 text-white/90" : "bg-[var(--color-bg-light)] text-[var(--color-secondary)]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.1] tracking-tight",
          light ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-white/70" : "text-[var(--color-muted)]")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
