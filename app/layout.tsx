import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CallFloat } from "@/components/layout/CallFloat";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { JsonLd } from "@/components/ui/json-ld";
import { getMedicalClinicSchema, getLocalBusinessSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/data/site-config";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Dermatologist in Latur`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "dermatologist in Latur",
    "skin clinic Latur",
    "Dr Anand Patil",
    "skin specialist Latur",
    "hair transplant Latur",
    "laser treatment Latur",
    "acne treatment Latur",
    "cosmetic dermatologist Latur",
  ],
  authors: [{ name: "Dr. Anand Patil" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Dermatologist in Latur`,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Dermatologist in Latur`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd data={[getMedicalClinicSchema(), getLocalBusinessSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CallFloat />
        <WhatsAppFloat />
      </body>
    </html>
  );
}