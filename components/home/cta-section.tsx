"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to start treating your skin the right way?",
  description = "Book a consultation with Dr. Anand Patil and get an honest, personalised treatment plan — not a generic prescription.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-clinic" />
      <div className="absolute inset-0 bg-clarity-grid opacity-20" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">{description}</p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg" icon={CalendarCheck} className="bg-white text-[var(--color-secondary)] hover:bg-white/90">
              Book Appointment
            </Button>
            <Button
              href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
              variant="outline"
              size="lg"
              icon={Phone}
              iconPosition="left"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white"
            >
              Call {SITE_CONFIG.contact.phonePrimary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
