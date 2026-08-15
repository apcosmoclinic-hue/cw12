"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryImage } from "@/types";

export function MasonryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }
  function next() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  }
  function prev() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {images.map((img, i) => (
          <motion.button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className="group relative mb-5 block w-full overflow-hidden rounded-2xl break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="flex items-center gap-2 text-white text-xs font-medium">
                <ZoomIn className="h-4 w-4" /> {img.category}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-10"
            onClick={close}
          >
            <button onClick={close} aria-label="Close" className="absolute top-6 right-6 text-white/80 hover:text-white">
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-2"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl"
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={images[activeIndex].width}
                height={images[activeIndex].height}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-white/70 text-sm">{images[activeIndex].alt}</p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
