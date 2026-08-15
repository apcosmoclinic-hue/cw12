import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <div className={cn("flex flex-col rounded-2xl bg-white border border-slate-100 p-7 shadow-[var(--shadow-soft)] h-full", className)}>
      <Quote className="h-7 w-7 text-[var(--color-accent)]/40" />
      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("h-4 w-4", i < testimonial.rating ? "fill-[var(--color-accent)] text-[var(--color-accent)]" : "text-slate-200")} />
        ))}
      </div>
      <p className="mt-4 text-sm text-[var(--color-ink)]/85 leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-clinic text-white font-display text-sm font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-muted)]">{testimonial.treatment} &middot; {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
