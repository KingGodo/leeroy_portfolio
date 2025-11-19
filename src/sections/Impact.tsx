"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Users, Landmark, GraduationCap } from "lucide-react";

// Icon mapping
const iconMap = {
  peer: Heart,
  tb: ShieldCheck,
  srhr: Sparkles,
  hiv: Users,
  policy: Landmark,
  facilitation: GraduationCap,
};

const items = [
  {
    id: 1,
    title: "Peer Education",
    icon: iconMap.peer,
    desc: "Delivering youth‑friendly health education that empowers communities and encourages positive behavioral change.",
  },
  {
    id: 2,
    title: "TB Advocacy",
    icon: iconMap.tb,
    desc: "Championing early testing, awareness, and stigma reduction through evidence‑based community engagements.",
  },
  {
    id: 3,
    title: "SRHR Work",
    icon: iconMap.srhr,
    desc: "Promoting access to sexual and reproductive health services, rights literacy, and safe spaces for young people.",
  },
  {
    id: 4,
    title: "HIV‑Sensitive Case Management",
    icon: iconMap.hiv,
    desc: "Providing tailored psychosocial support, linkage to care, and treatment adherence guidance.",
  },
  {
    id: 5,
    title: "Policy Advocacy",
    icon: iconMap.policy,
    desc: "Engaging in youth‑centered policy dialogues and shaping inclusive, equitable social systems.",
  },
  {
    id: 6,
    title: "Facilitation & Training",
    icon: iconMap.facilitation,
    desc: "Leading workshops, training sessions, and community dialogues on health, empowerment, and social justice.",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="w-full bg-black text-white px-6 py-28 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-12"
        >
          What I Do
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:border-white/20 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.03)]"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-white/80" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
