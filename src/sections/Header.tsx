"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Ultra-clean, Apple-inspired responsive header
export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="font-semibold tracking-tight text-xl text-white">
          Leeroy Mpofu
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/90 text-base hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Link
                href="#contact"
                className="px-4 py-3 rounded-full bg-white text-black text-center text-sm font-medium hover:bg-neutral-200 transition-colors"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}