"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";

// The real WhatsApp glyph (official mark), inlined as SVG — lucide-react has
// no brand icons, and a generic MessageCircle doesn't read as WhatsApp.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L3 29l7.938-2.685A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.71 1.593 1.578-4.59-.232-.372A9.71 9.71 0 0 1 6.25 15c0-5.38 4.375-9.75 9.754-9.75 5.38 0 9.746 4.37 9.746 9.75s-4.367 9.75-9.746 9.75Zm5.354-7.302c-.293-.147-1.734-.856-2.003-.954-.269-.098-.464-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.342.22-.635.073-.293-.147-1.238-.456-2.358-1.454-.872-.777-1.46-1.737-1.63-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.513.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.513-.073-.147-.66-1.59-.904-2.178-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.513.073-.782.367-.269.293-1.026 1.003-1.026 2.444s1.051 2.836 1.198 3.032c.147.196 2.07 3.161 5.017 4.432.701.303 1.248.484 1.674.62.703.224 1.343.192 1.849.117.564-.084 1.734-.709 1.979-1.394.245-.685.245-1.272.171-1.394-.073-.122-.269-.196-.562-.343Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={SITE_CONFIG.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsAppIcon className="h-6 w-6 relative z-10" />
    </motion.a>
  );
}