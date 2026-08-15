import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site-config";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

export function buildMetadata({ title, description, path, image, keywords }: BuildMetadataArgs): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image ?? SITE_CONFIG.ogImage;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
