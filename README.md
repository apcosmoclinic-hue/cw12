# Dr. Anand Patil Skin & Cosmetic Laser Clinic — Website

Premium, production-ready dermatology clinic website for Dr. Anand Patil Skin & Cosmetic Laser Clinic, Ganj Golai, Latur, Maharashtra.

## Tech Stack
- Next.js 15+ (App Router) / TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- React Hook Form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: `next/font/google` (Outfit + Inter) requires internet access on first build/dev run to fetch font files from Google Fonts.

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — routes (App Router), including dynamic `treatments/[slug]` and `blog/[slug]`, plus `sitemap.ts` and `robots.ts`
- `components/` — organised by domain (home, about, services, contact, gallery, testimonials, blog, layout, ui)
- `data/` — all site content (treatments, doctor bio, testimonials, gallery, blog, FAQs, site config) — edit these files to update site content
- `lib/` — utilities, SEO metadata builder, schema.org JSON-LD generators
- `hooks/` — `useCountUp`, `useScrolled`
- `types/` — shared TypeScript interfaces
- `public/images/gallery/` — real clinic photographs

## Editing Content

Almost all text content lives in `data/*.ts` — update the clinic's phone numbers, address, hours, treatments, doctor bio, testimonials and blog posts there. No component code changes are required for routine content updates.

## SEO

Metadata API, Open Graph, Twitter Cards, canonical URLs, `robots.ts`, `sitemap.ts`, and schema.org JSON-LD (MedicalClinic, Physician, LocalBusiness, BreadcrumbList, FAQPage, MedicalProcedure) are implemented throughout.
