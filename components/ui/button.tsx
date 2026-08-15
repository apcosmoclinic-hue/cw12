import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
}

const variants: Record<string, string> = {
  primary:
    "bg-gradient-clinic text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lifted)] hover:-translate-y-0.5",
  secondary: "bg-[var(--color-ink)] text-white hover:bg-slate-800 hover:-translate-y-0.5",
  outline:
    "border-2 border-[var(--color-primary)]/30 text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-light)]",
  ghost: "text-[var(--color-ink)] hover:bg-[var(--color-bg-light)]",
  emergency: "bg-[var(--color-emergency)] text-white hover:bg-rose-700 hover:-translate-y-0.5 shadow-lg shadow-rose-500/25",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  external,
  ...props
}: BaseProps & {
  href?: string;
  children: React.ReactNode;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
    </>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
