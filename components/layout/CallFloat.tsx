"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";

export function CallFloat() {
  return (
    <motion.a
      href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
      aria-label="Call the clinic"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.85, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
    >
      <Phone className="h-5 w-5 relative z-10" fill="white" />
    </motion.a>
  );
}