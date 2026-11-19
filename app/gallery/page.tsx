import Image, { type StaticImageData } from "next/image";
import { ArrowDown, ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/ui/json-ld";
import { GALLERY_IMAGES } from "@/data/gallery";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Clinic Photo Gallery",
  description:
    "Photographs of the clinic entrance, reception, waiting areas and rooms, plus the address and opening hours.",
  path: "/gallery",
});

type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};

const ADDRESS = "Opp. Bus Stand, Latur Main Road, Ganj Golai, Latur – 413512";
const PHONE = "+91 8275373964";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Dr. Anand Patil Skin & Cosmetic Laser Clinic, Ganj Golai, Latur",
)}`;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00799D]";

function getPhotoLabel(image: GalleryImage) {
  const description = (image.caption ?? image.alt).toLowerCase();
  if (/signage|exterior|entrance|facade|façade/.test(description)) return "Clinic entrance";
  if (/phototherapy/.test(description)) return "Phototherapy unit";
  if (/diode|laser (equipment|machine|room)/.test(description)) return "Room with laser equipment";
  if (/procedure room|examination couch/.test(description)) return "Procedure room";
  if (/(reception desk|front desk)/.test(description)) return "Reception desk";
  if (/lounge/.test(description)) return "Reception seating";
  if (/waiting/.test(description)) return "Waiting area";
  return "Clinic interior";
}

function getPhotoUrl(image: GalleryImage) {
  return typeof image.src === "string" ? image.src : image.src.src;
}

const photoNotes: Partial<Record<string, string>> = {
  "Clinic entrance": "Look for the clinic sign on Latur Main Road, opposite the bus stand.",
  "Reception desk": "The front desk inside the clinic.",
  "Reception seating": "Seating next to the reception area.",
  "Waiting area": "Chairs in the indoor waiting area.",
  "Procedure room": "A room with an examination couch.",
  "Room with laser equipment": "Laser equipment pictured beside the procedure chair.",
  "Phototherapy unit": "The upright phototherapy cabinet pictured at the clinic.",
};

export default function GalleryPage() {
  // Review original photos for identifying information before publishing.
  const images: readonly GalleryImage[] = GALLERY_IMAGES;
  const photos = images.map((image) => ({ image, label: getPhotoLabel(image) }));
  const cover = photos.find(({ label }) => label === "Clinic entrance") ?? photos[0];
  const stories = [
    {
      title: "Arrival and reception",
      label: "Reception desk",
      alternateLabel: "Reception seating",
      text: "The clinic is on Latur Main Road, opposite the bus stand. The reception photographs show the front desk and nearby seating.",
    },
    {
      title: "The waiting area",
      label: "Waiting area",
      alternateLabel: "Reception seating",
      text: "The waiting area has indoor seating for patients and accompanying visitors.",
    },
    {
      title: "Procedure spaces",
      label: "Procedure room",
      alternateLabel: "Room with laser equipment",
      text: "The room photographs show the examination couch and the layout of the procedure space.",
    },
  ].flatMap((story) => {
    const photo = photos.find(({ label }) => label === story.label)
      ?? photos.find(({ label }) => label === story.alternateLabel);

    return photo ? [{ ...story, photo, text: photo.label === story.label
      ? story.text
      : photoNotes[photo.label] ?? story.text }] : [];
  }).filter((story, index, entries) =>
    entries.findIndex(({ photo }) => photo === story.photo) === index,
  );

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <style>{`
        .clinic-photo-picker { display: none; }
        @supports selector(:has(*)) {
          .clinic-photo-picker { display: block; }
          @media (min-width: 1024px) {
            .clinic-photo-browser { display: grid; grid-template-columns: minmax(0, 1fr) 17rem; }
          }
          .clinic-photo-stage > figure { display: none; }
        ${photos.map((_, i) => `
          .clinic-photo-browser:has(#clinic-photo-${i}:checked) #clinic-panel-${i} { display: block; }
          .clinic-photo-browser:has(#clinic-photo-${i}:checked) label[for="clinic-photo-${i}"] { background: #EAF7FD; color: #075674; }
        `).join("")}
        }
      `}</style>

      <section
        aria-labelledby="gallery-title"
        className="relative isolate flex min-h-[min(43rem,85svh)] items-end overflow-hidden bg-[#102B3A] pt-[calc(var(--header-height,80px)+2rem)] text-white"
      >
        {cover && (
          <Image
            src={cover.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute -z-20 object-cover object-center"
          />
        )}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071824] via-[#071824]/55 to-[#071824]/15" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10 sm:pb-16 lg:pb-20">
          <h1 id="gallery-title" className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            Inside the clinic
          </h1>
          {photos.length > 0 && (
            <a href="#gallery-photos" className={`mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#102B3A] hover:bg-sky-100 ${focusRing}`}>
              Explore photographs
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      <nav aria-label="Gallery sections" className="border-b border-[#DBE9ED] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-1 px-6 py-2 text-sm font-semibold text-[#19556B] sm:px-10">
          {photos.length > 0 && <a href="#gallery-photos" className={`inline-flex min-h-11 items-center hover:underline ${focusRing}`}>Photo gallery</a>}
          {stories.length > 0 && <a href="#clinic-spaces" className={`inline-flex min-h-11 items-center hover:underline ${focusRing}`}>Clinic spaces</a>}
          <a href="#clinic-details" className={`inline-flex min-h-11 items-center hover:underline ${focusRing}`}>Location and hours</a>
        </div>
      </nav>

      {photos.length > 0 && (
      <section
        id="gallery-photos"
        aria-labelledby="gallery-photos-title"
        className="scroll-mt-[calc(var(--header-height,80px)+1rem)] bg-[#F3F8FA] py-12 text-[#102B3A] sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <header className="mb-7 grid gap-3 md:grid-cols-[1fr_0.65fr] md:items-end">
            <h2 id="gallery-photos-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Photo gallery</h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 md:justify-self-end">
              Select a thumbnail to see the room or entrance in more detail. Open the original image from the caption below.
            </p>
          </header>

            <div className="clinic-photo-browser overflow-hidden rounded-3xl border border-[#CADFEB] bg-white shadow-[0_24px_60px_-40px_rgba(16,43,58,0.55)]">
              <div className="clinic-photo-stage min-w-0 bg-[#0D2636]">
                {photos.map(({ image, label }, i) => (
                  <figure key={i} id={`clinic-panel-${i}`}>
                    <div className="relative h-[clamp(16rem,52vw,34rem)] bg-[#091E2C]">
                      <Image
                        src={image.src}
                        alt={label}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1280px) 940px, (min-width: 1024px) 74vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 text-white sm:px-7">
                      <div>
                        <span className="block font-display text-xl font-semibold">{label}</span>
                        {photoNotes[label] && <p className="mt-1 text-sm leading-relaxed text-[#C4DDE8]">{photoNotes[label]}</p>}
                      </div>
                      <a
                        href={getPhotoUrl(image)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open full photo of ${label} in a new tab`}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium text-[#B8EFF8] hover:bg-white/10 ${focusRing}`}
                      >
                        Full photo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <fieldset className="clinic-photo-picker min-w-0 border-t border-[#CADFEB] px-3 pb-3 pt-2 lg:border-l lg:border-t-0">
                <legend className="sr-only">Select a clinic photograph</legend>
                <p aria-hidden="true" className="px-2 py-2 text-sm font-semibold text-[#102B3A]">
                  Select a photograph
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:pb-0">
                  {photos.map(({ image, label }, i) => (
                    <div key={i} className="relative shrink-0">
                      <input
                        id={`clinic-photo-${i}`}
                        name="clinic-gallery-selection"
                        type="radio"
                        defaultChecked={i === 0}
                        aria-controls={`clinic-panel-${i}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`clinic-photo-${i}`}
                        className="flex w-40 cursor-pointer items-center gap-2 rounded-xl p-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-sky-700 lg:w-full"
                      >
                        <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                          <Image src={image.src} alt="" fill sizes="56px" className="object-cover" />
                        </span>
                        <span className="leading-tight">{label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
        </div>
      </section>
      )}

      {stories.length > 0 && (
        <section
          id="clinic-spaces"
          aria-labelledby="clinic-spaces-title"
          className="scroll-mt-[calc(var(--header-height,80px)+1rem)] bg-white py-14 text-[#102B3A] sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <h2 id="clinic-spaces-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Clinic spaces</h2>
            <div className="mt-9 divide-y divide-[#DBE9ED] border-y border-[#DBE9ED]">
              {stories.map(({ title, text, photo }, index) => (
                <article key={title} className="grid gap-5 py-7 md:grid-cols-2 md:items-center md:gap-12 md:py-10">
                  <figure className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E6F1F5] ${index % 2 ? "md:order-last" : ""}`}>
                    <Image
                      src={photo.image.src}
                      alt={photo.label}
                      fill
                      sizes="(min-width: 1280px) 550px, (min-width: 768px) 47vw, 100vw"
                      className="object-contain"
                    />
                  </figure>
                  <div className="max-w-md">
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="clinic-details"
        aria-labelledby="clinic-details-title"
        className="scroll-mt-[calc(var(--header-height,80px)+1.5rem)] bg-white py-12 text-[#102B3A] sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-[#CADFEA] bg-[#F8FCFF] p-6 sm:p-8 lg:p-10">
            <h2 id="clinic-details-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Location and hours
            </h2>
            <dl className="mt-7 grid gap-7 border-t border-[#CADFEA] pt-7 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 font-semibold">
                  <MapPin aria-hidden="true" className="h-5 w-5 text-[#006C8C]" /> Address
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#4B626E]">
                  <p>{ADDRESS}</p>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-[#006C8C] underline-offset-4 hover:underline ${focusRing}`}>
                    Get directions <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-semibold">
                  <Clock aria-hidden="true" className="h-5 w-5 text-[#006C8C]" /> Clinic hours
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#4B626E]">
                  Mon–Sat, 10:00 AM–9:00 PM<br />Sunday closed
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-semibold">
                  <Phone aria-hidden="true" className="h-5 w-5 text-[#006C8C]" /> Phone
                </dt>
                <dd className="mt-2 text-sm text-[#4B626E]">
                  <a href="tel:+918275373964" className={`rounded-sm underline underline-offset-4 ${focusRing}`}>{PHONE}</a>
                </dd>
              </div>
            </dl>
          </div>
          <p className="mt-5 text-xs text-[#4B626E]">Page text prepared with AI assistance.</p>
        </div>
      </section>
    </>
  );
}
