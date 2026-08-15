import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service", href: "/terms" }]} />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 space-y-8 text-[var(--color-muted)] leading-relaxed">
          <p className="text-sm">Last updated: July 2026</p>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">1. Acceptance of Terms</h2>
            <p>By using this website, you agree to these Terms of Service. If you do not agree, please discontinue use of the site.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">2. Not a Substitute for In-Person Care</h2>
            <p>Content on this website, including treatment descriptions and blog articles, is for general informational purposes only and does not constitute medical advice. Always consult Dr. Anand Patil or a qualified physician for diagnosis and treatment specific to your condition.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">3. Appointment Requests</h2>
            <p>Submitting an appointment request through this website does not guarantee a confirmed slot until our team contacts you to verify the date and time.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics and design, is the property of {SITE_CONFIG.name} unless otherwise noted, and may not be reproduced without permission.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">5. Limitation of Liability</h2>
            <p>The clinic is not liable for any indirect or consequential loss arising from reliance on general information provided on this website.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of India and subject to the jurisdiction of the courts in Latur, Maharashtra.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at {SITE_CONFIG.contact.email}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
