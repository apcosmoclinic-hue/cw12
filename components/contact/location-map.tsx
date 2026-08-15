import { MapPin, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-[var(--shadow-soft)]">
      <div className="aspect-[16/9] w-full bg-[var(--color-bg-light)]">
        <iframe
          src={SITE_CONFIG.address.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${SITE_CONFIG.name} location map`}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 shrink-0 text-[var(--color-primary)] mt-0.5" />
          <p className="text-sm text-[var(--color-ink)]">{SITE_CONFIG.address.full}</p>
        </div>
        <a
          href={SITE_CONFIG.address.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-clinic px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
