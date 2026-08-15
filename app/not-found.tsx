import Link from "next/link";
import { Home, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data/site-config";

export default function NotFound() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-ink)] pt-[var(--header-height)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink)] to-[var(--color-secondary)]/30" />
      <div className="absolute inset-0 bg-clarity-grid opacity-10" />
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Stethoscope className="h-9 w-9" strokeWidth={1.5} />
        </div>
        <p className="mt-8 font-display text-7xl font-bold text-gradient-clinic">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">This page couldn&rsquo;t be found</h1>
        <p className="mt-4 text-white/70 leading-relaxed">
          The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back to something useful.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button
            href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
            variant="outline"
            size="lg"
            icon={Phone}
            iconPosition="left"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white"
          >
            Call the Clinic
          </Button>
        </div>
        <Link href="/treatments" className="mt-8 inline-block text-sm text-white/50 hover:text-white transition-colors">
          Or browse all treatments →
        </Link>
      </div>
    </section>
  );
}
