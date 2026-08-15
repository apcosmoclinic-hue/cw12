"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import { TreatmentVisual } from "@/components/ui/treatment-visual";

export function FeaturedTreatments() {
  const featured = TREATMENTS.filter((t) => t.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Most Popular Treatments
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Featured Treatments
          </h2>

          <p className="mt-3 text-slate-600">
            Explore our most requested dermatology treatments.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {featured.map((treatment) => (
            <SwiperSlide key={treatment.slug}>
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group block overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
  <Image
    src={`/images/treatments/${treatment.slug}.jpg`}
    alt={treatment.name}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
    {treatment.category}
  </span>

  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-xl font-bold text-white">
      {treatment.shortName}
    </h3>
  </div>
</div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {treatment.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {treatment.name}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                    {treatment.tagline}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sky-600 font-semibold">
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
