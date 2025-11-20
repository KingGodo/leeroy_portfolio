"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0"
        >
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Leeroy Mpofu</h3>
            <p className="text-sm text-gray-400 max-w-xs mt-2 leading-relaxed">
              Peer Educator • TB Champion • SRHR Defender • Future Social Scientist.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-gray-300">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#about" className="hover:text-white transition">About</Link></li>
                <li><Link href="#impact" className="hover:text-white transition">Impact</Link></li>
                <li><Link href="#achievements" className="hover:text-white transition">Achievements</Link></li>
                <li><Link href="#experience" className="hover:text-white transition">Experience</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-gray-300">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#education" className="hover:text-white transition">Education</Link></li>
                <li><Link href="#gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-gray-300">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:leeroy@gmail.com" className="hover:text-white transition">Email</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Leeroy Mpofu. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
};
