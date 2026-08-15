import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 prose-content space-y-8 text-[var(--color-muted)] leading-relaxed">
          <p className="text-sm">Last updated: July 2026</p>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">1. Introduction</h2>
            <p>{SITE_CONFIG.name} (&ldquo;the Clinic&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy of visitors to our website and patients who use our services. This policy explains what information we collect, how we use it, and the choices you have.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">2. Information We Collect</h2>
            <p>When you use our appointment form or contact us, we may collect your name, phone number, email address, and details about your medical concern. We do not collect sensitive health information through the website beyond what you voluntarily share to help us prepare for your visit.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">3. How We Use Your Information</h2>
            <p>Information submitted through our website is used solely to respond to appointment requests, confirm bookings, and communicate with you about your visit. We do not sell or rent your personal information to third parties.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">4. Medical Records</h2>
            <p>Any medical records created during your treatment at the clinic are maintained in accordance with applicable Indian medical record-keeping regulations and are kept strictly confidential, accessible only to authorised clinical staff.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">5. Cookies &amp; Analytics</h2>
            <p>Our website may use basic analytics tools to understand how visitors use the site, helping us improve content and navigation. This data is aggregated and does not personally identify you.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information held by us by contacting the clinic directly using the details on our Contact page.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">7. Contact Us</h2>
            <p>For questions about this policy, reach us at {SITE_CONFIG.contact.email} or {SITE_CONFIG.contact.phonePrimary}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
