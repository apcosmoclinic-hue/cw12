import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site-config";
import { TREATMENTS } from "@/data/treatments";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about-clinic",
    "/doctor",
    "/treatments",
    "/gallery",
    "/testimonials",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentPages = TREATMENTS.map((t) => ({
    url: `${SITE_CONFIG.url}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((b) => ({
    url: `${SITE_CONFIG.url}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...treatmentPages, ...blogPages];
}
