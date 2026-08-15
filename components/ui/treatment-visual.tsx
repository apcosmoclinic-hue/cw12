import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const CATEGORY_GRADIENTS: Record<string, string> = {
  "Medical Dermatology": "from-[var(--color-secondary)] to-[var(--color-primary)]",
  "Cosmetic Dermatology": "from-[var(--color-primary)] to-[var(--color-accent)]",
  "Hair & Scalp": "from-[var(--color-accent)] to-teal-500",
  "Laser & Surgery": "from-[var(--color-ink)] to-[var(--color-secondary)]",
};

export function TreatmentVisual({
  icon,
  category,
  className,
  iconClassName,
}: {
  icon: string;
  category: string;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = getIcon(icon);
  const gradient = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS["Medical Dermatology"];

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden bg-gradient-to-br", gradient, className)}>
      <div className="absolute inset-0 bg-clarity-grid opacity-20" />
      <div className="absolute -right-6 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -left-4 -top-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />
      <Icon className={cn("relative text-white/90", iconClassName ?? "h-10 w-10")} strokeWidth={1.5} />
    </div>
  );
}
