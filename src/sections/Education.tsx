"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      program: "Bachelor of Social Science in Sociology & Social Policy",
      institution: "Midlands State University (MSU)",
      period: "2022 — Present",
      details:
        "Focused on social research, policy analysis, community development, and understanding the social structures that shape public health and youth welfare.",
    },
    {
      program: "Winter School Alumni Programme",
      institution: "Youth Leadership & Policy Development Initiative",
      period: "2023",
      details:
        "Completed intensive leadership training centered on SRHR, youth advocacy, evidence-based policymaking, and community transformation practices.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white" id="education">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lifelong learning grounded in social justice, research, and youth-centered development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-6 md:ml-10"
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="w-3 h-3 text-white" />
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.program}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{item.institution}</p>
                <span className="text-sm text-gray-500 block mb-3">{item.period}</span>
                <p className="text-gray-600 leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};