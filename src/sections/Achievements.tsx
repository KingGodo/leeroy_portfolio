"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe2, Target, Star, Activity } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "1000+",
    label: "Youths Reached",
    icon: Users,
  },
  {
    id: 2,
    value: "50+",
    label: "Workshops Facilitated",
    icon: Activity,
  },
  {
    id: 3,
    value: "Community Champion",
    label: "Recognized for TB Advocacy",
    icon: Award,
  },
  {
    id: 4,
    value: "IYN Delegate",
    label: "International Youth Representation",
    icon: Globe2,
  },
  {
    id: 5,
    value: "Winter School Alumni",
    label: "Leadership & Policy Training",
    icon: Star,
  },
  {
    id: 6,
    value: "Multi-Sector Impact",
    label: "Health • Youth • Policy Engagement",
    icon: Target,
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full bg-neutral-950 text-white px-6 py-28 border-t border-white/5"
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
          Achievements
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.03)] text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}