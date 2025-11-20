"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Tariro Moyo",
    role: "Aquaculture Specialist",
    text: "Leeroy transforms ideas into powerful digital experiences. His precision and attention to detail are unmatched.",
  },
  {
    name: "Chido Nyathi",
    role: "Operations Manager",
    text: "The quality, the care, and the composure in his work is world-class. Truly premium output.",
  },
  {
    name: "Dr. Tendai Jona",
    role: "Marine Researcher",
    text: "His digital craftsmanship raised the standard of our entire project. Outstanding work ethic.",
  },
  {
    name: "Blessing Kudzai",
    role: "Tech Entrepreneur",
    text: "Elegant, modern, and visionary. Leeroy builds products that feel alive and beautifully crafted.",
  },
  {
    name: "Nyasha Mapisa",
    role: "Creative Director",
    text: "Working with him is seamless—fast delivery, top-tier quality, and flawless execution.",
  },
];

const laneAnimation = (reverse = false) => ({
  animate: {
    x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
  },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    duration: 28,
    ease: "linear",
  },
});

export function Testimonials() {
  return (
    <section
      className="
        w-full 
        py-32 
        bg-gradient-to-b 
        from-[#0b0b0b] 
        via-[#0e0e0e] 
        to-black 
        text-white 
        overflow-hidden
      "
    >
      <div className="container mx-auto text-center mb-14 px-6">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
          Testimonials
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          People who have worked with Leeroy share their experience.
        </p>
      </div>

      {/* 3-Lane Animation */}
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Lane 1 */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          {...laneAnimation(true)}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`lane1-${i}`} testimonial={t} />
          ))}
        </motion.div>

        {/* Lane 2 */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          {...laneAnimation(false)}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`lane2-${i}`} testimonial={t} />
          ))}
        </motion.div>

        {/* Lane 3 */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          {...laneAnimation(true)}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`lane3-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, role, text } = testimonial;

  return (
    <Card
      className="
        min-w-[340px]
        max-w-[380px]
        bg-white/10 
        backdrop-blur-xl 
        border-white/10 
        rounded-3xl 
        p-6 
        hover:bg-white/20 
        transition 
      "
    >
      <CardContent
        className="
          space-y-5 
          text-left 
          leading-relaxed
          whitespace-normal
          break-words
          hyphens-none
        "
      >
        <div className="flex text-brand-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="#F5C542" stroke="none" />
          ))}
        </div>

        <p className="text-white/90 text-[17px]">
          “{text}”
        </p>

        <div className="pt-3">
          <p className="font-semibold text-white text-lg">{name}</p>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
