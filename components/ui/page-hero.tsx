import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] pt-[calc(var(--header-height)+3rem)] pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink)] to-[var(--color-secondary)]/30" />
      <div className="absolute inset-0 bg-clarity-grid opacity-10" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-white/80">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
              )}
            </span>
          ))}
        </nav>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90 border border-white/10">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">{title}</h1>
        {description && <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
