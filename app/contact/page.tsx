import Link from "next/link";
import { ArrowDown, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationMap } from "@/components/contact/location-map";
import { JsonLd } from "@/components/ui/json-ld";
import { SITE_CONFIG } from "@/data/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Clinic Contact, Address and Hours",
  description: "Contact details, appointment enquiries, opening hours and directions for Dr. Anand Patil Skin & Cosmetic Laser Clinic in Latur.",
  path: "/contact",
});

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D8288]";
const sectionOffset = "scroll-mt-[calc(var(--header-height,80px)+1rem)]";

const contactLinks = [
  { label: "Phone", value: SITE_CONFIG.contact.phonePrimary, href: `tel:${SITE_CONFIG.contact.phonePrimaryRaw}`, icon: Phone, external: false },
  { label: "WhatsApp", value: "Open WhatsApp", href: SITE_CONFIG.social.whatsapp, icon: MessageCircle, external: true },
  { label: "Email", value: SITE_CONFIG.contact.email, href: `mailto:${SITE_CONFIG.contact.email}`, icon: Mail, external: false },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F5F9F8] text-[#17333A]">
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])} />

      <section
        aria-labelledby="contact-title"
        className="border-b border-[#DCE9E7] bg-white pt-[calc(var(--header-height,80px)+1.25rem)]"
      >
        <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 sm:pb-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className={`rounded-sm underline-offset-4 hover:underline ${focus}`}>Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <div className="mt-6 grid gap-6 rounded-[1.75rem] border border-[#D9E9E5] bg-[#EFF7F5] p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
            <div>
              <h1 id="contact-title" className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Contact the clinic
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-700">
                Send an appointment enquiry or find the clinic’s address, opening hours, and directions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
              <a href="#appointment-enquiry" className={`inline-flex min-h-11 items-center gap-2 rounded-full bg-[#174D50] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#103D40] ${focus}`}>
                Appointment enquiry <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="#clinic-location" className={`inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#174D50] underline-offset-4 hover:underline ${focus}`}>
                Find the clinic <MapPin aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start">
        <section id="appointment-enquiry" aria-labelledby="enquiry-title" className={`${sectionOffset} min-w-0`}>
          <h2 id="enquiry-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Appointment enquiries
          </h2>
          <p className="mb-5 mt-2 max-w-lg text-sm leading-relaxed text-slate-600">
            Your requested time is subject to confirmation by the clinic.
          </p>
          <ContactForm />
        </section>

        <aside aria-label="Clinic contact details" className="min-w-0 overflow-hidden rounded-[1.75rem] border border-[#DCE9E7] bg-white">
          <section aria-labelledby="contact-methods-title" className="p-5 sm:p-6">
            <h2 id="contact-methods-title" className="font-display text-2xl font-semibold tracking-tight">Phone, WhatsApp and email</h2>
            <ul className="mt-4 divide-y divide-[#E2ECEA]">
              {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`group flex min-h-14 items-center gap-3 rounded-lg px-1 py-3 hover:bg-[#F4FAF8] ${focus}`}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EBF5F2] text-[#275E62]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-600">{label}</span>
                      <span className="block break-words text-sm font-semibold">{value}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[#275E62]" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="clinic-hours-title" className="border-t border-[#DCE9E7] bg-[#F2F8F6] p-5 sm:p-6">
            <h2 id="clinic-hours-title" className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
              <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-[#275E62]" /> Clinic hours
            </h2>
            <dl className="mt-4 divide-y divide-[#DCE9E7] text-sm">
              {SITE_CONFIG.hours.map(({ day, time }) => (
                <div key={day} className="flex items-start justify-between gap-4 py-2">
                  <dt className="text-slate-600">{day}</dt>
                  <dd className="text-right font-semibold">{time}</dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>

      <section
        id="clinic-location"
        aria-labelledby="location-title"
        className={`${sectionOffset} border-t border-[#DCE9E7] bg-white py-10 sm:py-14`}
      >
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="flex flex-col justify-center rounded-[1.75rem] bg-[#153B40] p-6 text-white sm:p-8">
            <MapPin aria-hidden="true" className="mb-4 h-6 w-6 text-[#AFE0D5]" />
            <h2 id="location-title" className="font-display text-3xl font-semibold tracking-tight">Find the clinic</h2>
            <address className="mt-3 max-w-sm text-base not-italic leading-relaxed text-[#DFEFEB]">
              {SITE_CONFIG.address.full}
            </address>
            <a
              href={SITE_CONFIG.address.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#DDF3ED] px-4 text-sm font-semibold text-[#153B40] hover:bg-white ${focus}`}
            >
              <Navigation aria-hidden="true" className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[1.75rem] border border-[#DCE9E7]">
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
}
