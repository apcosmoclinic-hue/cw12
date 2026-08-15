"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/data/gallery";

export function GalleryTeaser() {
  const images = GALLERY_IMAGES.slice(0, 5);

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader eyebrow="Inside the Clinic" title="A closer look at our facility" align="left" className="mx-0" />
          <Button href="/gallery" variant="outline" icon={ArrowUpRight} className="shrink-0">
            View Full Gallery
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <Link href="/gallery">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
