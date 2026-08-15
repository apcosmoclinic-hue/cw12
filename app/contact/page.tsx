import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationMap } from "@/components/contact/location-map";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata = buildMetadata({
  title: "Contact & Book an Appointment",
  description: "Contact Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur. Call, WhatsApp, or book an appointment online. Located at Ganj Golai, opposite the bus stand.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Get in Touch"
        title="Book your appointment"
        description="Call, WhatsApp, or fill out the form below — our team will confirm your appointment time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            <a href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`} className="rounded-2xl border border-slate-100 p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] transition-all">
              <Phone className="h-6 w-6 text-[var(--color-secondary)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Call Us</p>
              <p className="mt-1 font-semibold text-[var(--color-ink)]">{SITE_CONFIG.contact.phonePrimary}</p>
            </a>
            <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-100 p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] transition-all">
              <MessageCircle className="h-6 w-6 text-[var(--color-secondary)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">WhatsApp</p>
              <p className="mt-1 font-semibold text-[var(--color-ink)]">Chat with us</p>
            </a>
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="rounded-2xl border border-slate-100 p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] transition-all">
              <Mail className="h-6 w-6 text-[var(--color-secondary)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Email</p>
              <p className="mt-1 font-semibold text-[var(--color-ink)] text-sm break-all">{SITE_CONFIG.contact.email}</p>
            </a>
            <a href={SITE_CONFIG.address.mapLinkUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-100 p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] transition-all">
              <Navigation className="h-6 w-6 text-[var(--color-secondary)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Directions</p>
              <p className="mt-1 font-semibold text-[var(--color-ink)]">Ganj Golai, Latur</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10">
            <ContactForm />

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-100 p-7">
                <h3 className="font-display font-semibold text-[var(--color-ink)] flex items-center gap-2 mb-5">
                  <MapPin className="h-5 w-5 text-[var(--color-secondary)]" /> Clinic Address
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{SITE_CONFIG.address.full}</p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-7">
                <h3 className="font-display font-semibold text-[var(--color-ink)] flex items-center gap-2 mb-5">
                  <Clock className="h-5 w-5 text-[var(--color-secondary)]" /> Working Hours
                </h3>
                <ul className="space-y-2 text-sm">
                  {SITE_CONFIG.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-[var(--color-muted)]">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-[var(--color-emergency)] font-medium" : "text-[var(--color-ink)] font-medium"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <LocationMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
