/**
 * app/gallery/page.tsx  (single file, no extra components needed)
 *
 * Server component, so `metadata` keeps working for SEO.
 * The photo viewer is CSS-only (:target), so no "use client" is required.
 *
 * Expected shape of GALLERY_IMAGES items:
 *   { src: string | StaticImageData; alt: string; caption?: string }
 * If your keys differ, edit only the GalleryImage type and label().
 */
import Image, { type StaticImageData } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Maximize2,
  Navigation,
  Phone,
  X,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { GALLERY_IMAGES } from "@/data/gallery";

export const metadata = buildMetadata({
  title: "Clinic Gallery",
  description:
    "Take a look inside Dr. Anand Patil Skin & Cosmetic Laser Clinic, Latur — our facility, equipment and patient care spaces.",
  path: "/gallery",
});

/* -------------------------------------------------------------------------- */
/*  CONFIG                                                                    */
/* -------------------------------------------------------------------------- */
type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};
const label = (img: GalleryImage) => img.caption ?? img.alt;

/** Paste the same heading-font class PageHero / CTASection use (your Outfit class). "" = inherit. */
const heading = "";

const ADDRESS = "Opp. Bus Stand, Latur Main Road, Ganj Golai, Latur - 413512";
const PHONE_DISPLAY = "+91 8275373964";
const PHONE_HREF = "tel:+918275373964";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Dr. Anand Patil Skin & Cosmetic Laser Clinic, Ganj Golai, Latur",
)}`;

/**
 * Span pattern repeats every 6 photos and tiles a 4-column grid exactly:
 *   ┌───────┬───┬───┐
 *   │   1   │ 2 │ 3 │
 *   │       ├───┴───┤
 *   │       │   4   │
 *   ├───┬───┴───────┤
 *   │ 5 │     6     │
 *   └───┴───────────┘
 */
const SPANS = [
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2",
  "row-span-2",
  "row-span-2 md:col-span-3",
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4D0]";
const focusRingDark =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ED6CF]";
const viewerBtn = `grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 ${focusRing}`;

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */
export default function GalleryPage() {
  const images = GALLERY_IMAGES as GalleryImage[];
  const total = images.length;

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      {/* Hero unchanged, so its font and styling stay exactly as they are */}
      <PageHero
        eyebrow="Gallery"
        title="A look inside our clinic"
        description="From our procedure rooms to our patient lounge — a glimpse of the space where your care happens."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      <section
        id="gallery-photos"
        className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3FAFB] to-white py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[#00B4D0]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-20 -z-10 h-[360px] w-[360px] rounded-full bg-[#0C8F8A]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2
              className={`${heading} max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#062F5C] sm:text-5xl`}
            >
              Photographs of the clinic
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-[#062F5C]/70">
              The entrance, waiting area, procedure room and equipment. Select
              a photo to view it larger.
            </p>
          </div>

          {/* ---------------------------- mosaic ---------------------------- */}
          <ul className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:mt-12 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[240px]">
            {images.map((img, i) => (
              <li key={i} className={`relative ${SPANS[i % SPANS.length]}`}>
                <a
                  href={`#photo-${i}`}
                  aria-label={`View larger: ${label(img)}`}
                  className={`group absolute inset-0 overflow-hidden rounded-[1.75rem] bg-[#062F5C]/10 ${focusRing}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#062F5C]/60 to-transparent"
                  />
                  <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
                    <span className="min-w-0 max-w-[80%] truncate rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-medium text-[#062F5C] backdrop-blur">
                      {label(img)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/90 text-[#062F5C] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* ------------------------- visit panel -------------------------- */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#062F5C] text-white sm:mt-20">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
              <div className="flex items-start gap-4 bg-[#062F5C] p-6 sm:p-8">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#5ED6CF]" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/65">Address</p>
                  <p className="mt-1 leading-snug">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#062F5C] p-6 sm:p-8">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#5ED6CF]" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/65">Clinic hours</p>
                  <p className="mt-1 leading-snug">
                    Mon – Sat, 10:00 AM – 9:00 PM
                    <br />
                    Sunday closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#062F5C] p-6 sm:p-8">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#5ED6CF]" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/65">Phone</p>
                  <a
                    href={PHONE_HREF}
                    className={`mt-1 inline-block underline-offset-4 hover:underline ${focusRingDark}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-[#062F5C] p-6 sm:p-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#5ED6CF] px-6 font-semibold text-[#062F5C] transition-colors hover:bg-[#7ee3dd] lg:w-auto ${focusRingDark}`}
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- photo viewer (CSS-only, opens via #photo-N) --------------- */}
      {images.map((img, i) => {
        const prev = (i - 1 + total) % total;
        const next = (i + 1) % total;
        return (
          <div
            key={i}
            id={`photo-${i}`}
            role="dialog"
            aria-modal="true"
            aria-label={label(img)}
            className="fixed inset-0 z-[100] hidden flex-col bg-[#05182F]/95 backdrop-blur-sm target:flex"
          >
            {/* click outside the photo to close */}
            <a
              href="#gallery-photos"
              aria-label="Close photo"
              tabIndex={-1}
              className="absolute inset-0 cursor-default"
            />

            <div className="pointer-events-none relative z-10 flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm text-white/70">
                Photo {i + 1} of {total}
              </p>
              <a
                href="#gallery-photos"
                aria-label="Close photo"
                className={`pointer-events-auto ${viewerBtn}`}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="pointer-events-none relative min-h-0 flex-1">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-contain px-4 sm:px-20"
              />
              {total > 1 && (
                <>
                  <a
                    href={`#photo-${prev}`}
                    aria-label="Previous photo"
                    className={`pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 sm:left-5 ${viewerBtn}`}
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href={`#photo-${next}`}
                    aria-label="Next photo"
                    className={`pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 sm:right-5 ${viewerBtn}`}
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </a>
                </>
              )}
            </div>

            <p className="pointer-events-none relative z-10 px-4 pb-6 pt-3 text-center text-base text-white">
              {label(img)}
            </p>
          </div>
        );
      })}

      <CTASection />
    </>
  );
}