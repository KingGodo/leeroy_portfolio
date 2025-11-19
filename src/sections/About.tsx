"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="w-full bg-neutral-950 text-white px-6 py-28 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
        >
          About Me
        </motion.h2>

        {/* Main Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg text-white/70 leading-relaxed mb-6"
        >
          Leeroy Mpofu is a passionate youth leader, peer educator, and public health advocate dedicated to improving community wellbeing across Zimbabwe and beyond. As a Social Policy and Sociology student at Midlands State University, he blends academic insight with frontline experience to drive meaningful impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-lg text-white/70 leading-relaxed mb-6"
        >
          His work spans Tuberculosis advocacy, HIV-sensitive case management, Sexual and Reproductive Health and Rights (SRHR), and youth-focused policy contributions. As an IYN delegate and Winter School Alumni, Leeroy champions inclusive, evidence-based solutions that support healthier, more empowered communities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-lg text-white/70 leading-relaxed"
        >
          With a commitment to social justice and public health transformation, Leeroy continues to lead impactful community programs, facilitate youth dialogues, and advocate for equitable access to essential services.
        </motion.p>
      </div>
    </section>
  );
}