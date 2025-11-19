"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Peer Educator",
      org: "Local & International Youth Networks",
      period: "2021 — Present",
      description:
        "Facilitating community health sessions, leading youth-centered education on SRHR, HIV awareness, and behaviour change communication.",
    },
    {
      role: "Tuberculosis Champion",
      org: "National TB Advocacy Initiatives",
      period: "2022 — Present",
      description:
        "Driving TB awareness campaigns, supporting early testing uptake, and influencing policy discussions on accessible TB care.",
    },
    {
      role: "HIV Sensitive Case Manager",
      org: "Community Health Programs",
      period: "2023 — Present",
      description:
        "Providing sensitive counselling, linkage to care, and follow-ups for young people living with or affected by HIV.",
    },
    {
      role: "Policy Advocate & Facilitator",
      org: "SRHR & Youth Policy Platforms",
      period: "2023 — Present",
      description:
        "Leading dialogues, facilitating workshops, and pushing for youth-led social policy improvements across communities.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey shaped by service, advocacy, and community transformation.
          </p>
        </motion.div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-6 md:ml-10"
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-md">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.role}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{item.org}</p>
                <span className="text-sm text-gray-500 block mb-3">{item.period}</span>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};