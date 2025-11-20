"use client";

import Image from "next/image";
import peer from "@/assets/peer.jpg";
import { motion } from "framer-motion";

export const Gallery: React.FC = () => {
  const images = [
    peer,
    peer,
    peer,
    peer,
    peer,
    peer,
  ];

  return (
    <section className="w-full bg-white py-24" id="gallery">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-black text-center mb-12">
          Gallery
        </h2>

        {/* Bento Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-5
          auto-rows-[200px]
        ">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative w-full h-full rounded-2xl overflow-hidden
                ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}
                ${i === 3 ? "md:col-span-2" : ""}
              `}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
