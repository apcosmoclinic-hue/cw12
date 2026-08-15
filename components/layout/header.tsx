"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CalendarCheck,
  Menu,
  ChevronDown,
  Sparkles,
  Scissors,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS } from "@/data/faqs";
import { SITE_CONFIG } from "@/data/site-config";
import { useScrolled } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";

// Icon lookup for Treatments mega-dropdown children — keyed by label so it
// works with whatever child list NAV_LINKS already provides, no data-shape change needed.
const TREATMENT_ICONS: Record<string, LucideIcon> = {
  Skin: Sparkles,
  Hair: Scissors,
  Laser: Zap,
};

export function Header() {
  const scrolled = useScrolled(40);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          transparent ? "bg-transparent py-5" : "bg-white/90 backdrop-blur-lg shadow-[0_1px_0_rgba(15,23,42,0.06)] py-3"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className={cn(
                "relative h-12 w-12 overflow-hidden rounded-xl transition-all",
                transparent ? "bg-white/10 backdrop-blur-sm p-1" : "bg-white shadow-sm p-1"
              )}
            >
              <Image
                src="/images/logo.png"
                alt="Dr. Anand Patil Skin Clinic Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p
                className={cn(
                  "font-display font-semibold text-[15px] tracking-tight",
                  transparent ? "text-white" : "text-[var(--color-ink)]"
                )}
              >
                Dr. Anand Patil
              </p>
              <p
                className={cn(
                  "text-[11px] uppercase tracking-wider font-medium",
                  transparent ? "text-white/70" : "text-[var(--color-muted)]"
                )}
              >
                Skin &amp; Cosmetic Laser Clinic
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isTreatments = link.label === "Treatments" && link.children;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-[var(--color-ink)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-bg-light)]"
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={cn("absolute left-0 top-full pt-3", isTreatments ? "w-[30rem]" : "w-72")}
                      >
                        {isTreatments ? (
                          // Mega dropdown: treatment categories on the left, a
                          // standout CTA panel on the right, per the brief.
                          <div className="grid grid-cols-[1.4fr_1fr] gap-2 rounded-2xl bg-white shadow-[var(--shadow-lifted)] border border-slate-100 p-2">
                            <div className="grid gap-0.5">
                              {link.children.map((child) => {
                                const Icon = TREATMENT_ICONS[child.label] ?? Sparkles;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-[var(--color-bg-light)] transition-colors"
                                  >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-light)] text-[var(--color-secondary)]">
                                      <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="flex flex-col">
                                      <span className="text-sm font-medium text-[var(--color-ink)]">
                                        {child.label}
                                      </span>
                                      {child.description && (
                                        <span className="text-xs text-[var(--color-muted)]">
                                          {child.description}
                                        </span>
                                      )}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                            <Link
                              href="/treatments"
                              className="group flex flex-col justify-between rounded-xl bg-gradient-clinic p-4 text-white transition-transform hover:-translate-y-0.5"
                            >
                              <div>
                                <p className="text-sm font-semibold">All Treatments</p>
                                <p className="mt-1 text-xs text-white/80 leading-snug">
                                  Explore the full range of skin, hair &amp; laser care.
                                </p>
                              </div>
                              <span className="mt-4 flex items-center gap-1 text-xs font-semibold">
                                View All
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                              </span>
                            </Link>
                          </div>
                        ) : (
                          <div className="rounded-2xl bg-white shadow-[var(--shadow-lifted)] border border-slate-100 p-2 grid gap-0.5">
                            {link.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex flex-col rounded-xl px-4 py-2.5 hover:bg-[var(--color-bg-light)] transition-colors"
                              >
                                <span className="text-sm font-medium text-[var(--color-ink)]">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-[var(--color-muted)]">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* <a
              href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                transparent
                  ? "text-white border border-white/30 hover:bg-white/10"
                  : "text-[var(--color-ink)] border border-slate-200 hover:border-[var(--color-primary)]"
              )}
            >
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.contact.phonePrimary}
            </a> */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-gradient-clinic px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-all hover:shadow-[0_0_24px_rgba(200,169,90,0.45)] hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors",
              transparent ? "text-white bg-white/10" : "text-[var(--color-ink)] bg-[var(--color-bg-light)]"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}