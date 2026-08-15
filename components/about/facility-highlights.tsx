"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/gallery";

export function FacilityHighlights() {
  const images = GALLERY_IMAGES.slice(0, 4);
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-64" : "h-40"}`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
        </motion.div>
      ))}
    </div>
  );
}
