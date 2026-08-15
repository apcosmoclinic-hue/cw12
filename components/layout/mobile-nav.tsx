"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/data/faqs";
import { SITE_CONFIG } from "@/data/site-config";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <span className="font-display font-semibold text-[var(--color-ink)]">Menu</span>
              <button onClick={onClose} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg-light)]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="border-b border-slate-50 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link href={link.href} onClick={onClose} className="flex-1 px-3 py-3.5 text-[15px] font-medium text-[var(--color-ink)]">
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                        className="p-3.5"
                        aria-label={`Toggle ${link.label}`}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${expanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.children && expanded === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-3 pb-2"
                      >
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={onClose} className="block px-3 py-2.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-secondary)]">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100 space-y-3">
              <a href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`} className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 py-3 text-sm font-semibold text-[var(--color-ink)]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-gradient-clinic py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
