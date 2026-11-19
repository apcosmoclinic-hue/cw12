import Link from "next/link";
import { ArrowUpRight, CalendarCheck, ClipboardList, Phone, Stethoscope } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const visitSteps = [
  {
    icon: CalendarCheck,
    accent: "bg-[#E1EDFF] text-[#284E91]",
    title: "Request a time",
    description: "Use the enquiry form or call the clinic to check availability.",
  },
  {
    icon: Stethoscope,
    accent: "bg-[#DCF6F0] text-[#16615A]",
    title: "Discuss your concern",
    description: "Share your symptoms, medical history, and any questions during the visit.",
  },
  {
    icon: ClipboardList,
    accent: "bg-[#F0E8FF] text-[#614493]",
    title: "Review your options",
    description: "Ask about possible next steps, alternatives, and costs before deciding.",
  },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28797C]";

export function CTASection({
  title = "Plan your clinic visit",
  description = "Use the enquiry form or call the clinic for appointment availability and visit details.",
}: CTASectionProps) {
  return (
    <section aria-label={title} className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[#D9E9EB] bg-[#F3F8FF] shadow-[0_20px_55px_-30px_rgba(26,66,114,0.45)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative isolate flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#142746] via-[#174477] to-[#12646A] p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#3678B9_0%,transparent_60%)] opacity-70"
            />
            <div className="relative">
              <h2 className="max-w-xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#E1F2FA]">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#AAF0E1] px-5 text-sm font-semibold text-[#123D49] shadow-sm transition-colors hover:bg-[#C4F9ED] ${focus} focus-visible:outline-offset-4 focus-visible:outline-white`}
                >
                  Appointment enquiry
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20 ${focus} focus-visible:outline-offset-4 focus-visible:outline-white`}
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {SITE_CONFIG.contact.phonePrimary}
                </a>
              </div>
              <p className="mt-5 max-w-md text-xs leading-relaxed text-[#D0E7F0]">
                Website information is general. A clinician can assess your individual concerns.
              </p>
            </div>
          </div>

          <div className="border-t border-[#D9E9EB] bg-gradient-to-b from-white to-[#EDF6FF] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <h3 className="font-display text-xl font-semibold tracking-tight text-[#142E3B] sm:text-2xl">
              What to expect
            </h3>
            <ol className="mt-4 divide-y divide-[#E0EAEC]">
              {visitSteps.map(({ icon: Icon, accent, title: stepTitle, description: stepDescription }) => (
                <li key={stepTitle} className="flex items-start gap-3 py-4 last:pb-0">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent}`}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-display text-base font-semibold text-[#142E3B]">{stepTitle}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#405967]">{stepDescription}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
