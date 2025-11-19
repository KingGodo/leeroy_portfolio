"use client";

import { motion } from "framer-motion";
import peer from '@/assets/peer.jpg'

export const Gallery = () => {
  const images = [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo3.jpg",
    "/gallery/photo4.jpg",
    "/gallery/photo5.jpg",
    "/gallery/photo6.jpg",
  ];

  return (
    <section id="gallery" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual story of community work, advocacy, and moments that shaped the journey.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <img
                src={src}
                alt="Gallery image"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};