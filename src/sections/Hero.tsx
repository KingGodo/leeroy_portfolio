"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Premium, Apple-level hero section
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto pt-32 pb-20">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Leeroy (Thobelikhaya) Mpofu
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
        >
          Peer Educator • Tuberculosis Champion • SRHR Defender • HIV-Sensitive Case Manager • Policy Advocate • Social Scientist in the Making
        </motion.p>

        {/* Micro-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 text-base md:text-lg text-white/60"
        >
          Empowering communities through evidence, education, and human-centered health advocacy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm md:text-base hover:bg-neutral-200 transition-colors"
          >
            Get in Touch
          </Link>

          <Link
            href="/Leeroy-Mpofu-CV.pdf"
            className="px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm md:text-base hover:bg-white/10 transition-colors"
          >
            Download CV
          </Link>
        </motion.div>
      </div>

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent)]" />
    </section>
  );
}