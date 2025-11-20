"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="cta" className="w-full py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Ready to Collaborate?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Partner with Leeroy on youth empowerment, SRHR advocacy, policy development, or impactful community work.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:bg-gray-200 transition-all cursor-pointer"
        >
          Contact Leeroy
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};