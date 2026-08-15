"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={faq.question}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-[var(--color-ink)]">{faq.question}</span>
            <Plus className={cn("h-5 w-5 shrink-0 text-[var(--color-secondary)] transition-transform duration-300", open === i && "rotate-45")} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
