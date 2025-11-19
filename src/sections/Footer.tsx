"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold"
        >
          Leeroy (Thobelikhaya) Mpofu
        </motion.h3>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/60 mt-3 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Youth Leader • Public Health Advocate • SRHR Champion •  
          Driving community empowerment and evidence-based health solutions.
        </motion.p>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-12"
        >
          <Link href="#hero" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#impact" className="hover:text-white transition">Impact</Link>
          <Link href="#achievements" className="hover:text-white transition">Achievements</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#education" className="hover:text-white transition">Education</Link>
          <Link href="#gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="#testimonials" className="hover:text-white transition">Testimonials</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xs text-white/40"
        >
          © {new Date().getFullYear()} Leeroy Mpofu — All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}
