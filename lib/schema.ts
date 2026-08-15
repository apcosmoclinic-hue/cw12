import { SITE_CONFIG } from "@/data/site-config";
import { DOCTOR } from "@/data/doctor";
import { Treatment, FAQ } from "@/types";

export function getMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.url}/#clinic`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phonePrimaryRaw,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.latitude,
      longitude: SITE_CONFIG.address.longitude,
    },
    openingHoursSpecification: SITE_CONFIG.hours
      .filter((h) => h.time !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "10:00",
        closes: "21:00",
      })),
    medicalSpecialty: "Dermatology",
    founder: {
      "@type": "Physician",
      name: DOCTOR.name,
    },
  };
}

export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_CONFIG.url}/doctor#physician`,
    name: DOCTOR.name,
    image: `${SITE_CONFIG.url}${DOCTOR.image}`,
    medicalSpecialty: "Dermatology",
    honorificSuffix: DOCTOR.credentials,
    worksFor: {
      "@type": "MedicalClinic",
      name: SITE_CONFIG.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: "IN",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phonePrimaryRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "1096",
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function getFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getMedicalProcedureSchema(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.overview,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    bodyLocation: "Skin",
    performer: {
      "@type": "Physician",
      name: DOCTOR.name,
    },
  };
}
