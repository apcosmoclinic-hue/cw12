import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { FOOTER_TREATMENT_LINKS } from "@/data/faqs";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
           <div className="flex items-center gap-4 mb-5">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white p-1 shadow-md">
  <Image
    src="/images/logo.png"
    alt="Dr. Anand Patil Skin Clinic Logo"
    fill
    className="object-contain"
  />
</div>
              <div className="leading-tight">
  <h3 className="font-display text-lg font-bold tracking-tight text-white">
    Dr. Anand Patil
  </h3>
  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
    Skin & Cosmetic Laser Clinic
  </p>
</div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-clinic" className="text-white/75 hover:text-white transition-colors">About the Clinic</Link></li>
              <li><Link href="/doctor" className="text-white/75 hover:text-white transition-colors">About Dr. Anand Patil</Link></li>
              <li><Link href="/treatments" className="text-white/75 hover:text-white transition-colors">All Treatments</Link></li>
              <li><Link href="/gallery" className="text-white/75 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-white/75 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="text-white/75 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/75 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">Popular Treatments</h3>
            <ul className="space-y-3 text-sm">
              {FOOTER_TREATMENT_LINKS.map((t) => (
                <li key={t.slug}>
                  <Link href={`/treatments/${t.slug}`} className="text-white/75 hover:text-white transition-colors">
                    {t.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`} className="hover:text-white">{SITE_CONFIG.contact.phonePrimary}</a>
                  <a href={`tel:${SITE_CONFIG.contact.phoneLandlineRaw}`} className="hover:text-white">{SITE_CONFIG.contact.phoneLandline}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">{SITE_CONFIG.contact.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4.5 w-4.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                <div>
                  <p>Mon – Sat: 10:00 AM – 9:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-3">
  <p>
    © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
  </p>

  <div className="flex items-center gap-2 border-l border-white/20 pl-3">
    <span>Designed & Developed by</span>

    <Image
      src="/images/cwxlogo.png"
      alt="Codewinx IT Solutions"
      width={24}
      height={24}
      className="rounded-sm"
    />

    <a
      href="https://codewinx.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-white hover:text-[var(--color-primary)] transition-colors"
    >
      Codewinx IT Solutions
    </a>
  </div>
</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
