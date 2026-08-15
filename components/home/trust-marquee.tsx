import { SITE_CONFIG } from "@/data/site-config";
import { ShieldCheck } from "lucide-react";

export function TrustMarquee() {
  const items = [...SITE_CONFIG.trustLogos, ...SITE_CONFIG.trustLogos];

  return (
    <section className="py-14 bg-[var(--color-bg-light)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          Recognised &amp; Affiliated With
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max gap-16 marquee-track">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap text-[var(--color-ink)]/60 font-display font-medium text-lg">
              <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
