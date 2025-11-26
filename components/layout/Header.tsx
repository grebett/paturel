"use client";

import Link from "next/link";
import Image from "next/image"; // Import nécessaire pour le logo et les icônes
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ÉTUDE", href: "#etude" },
  { name: "EXPERTISE", href: "#expertise" },
  { name: "ÉQUIPE", href: "#equipe" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("ÉTUDE");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* --- LOGO SVG --- */}
        <Link href="/" className="relative block w-32 md:w-40">
           {/* Ajuste width/height selon le ratio réel de ton SVG */}
           <Image 
             src="/images/paturel-logo-dark-blue.svg" 
             alt="Paturel Notaires" 
             width={160} 
             height={60} 
             className="w-full h-auto object-contain"
             priority // Chargement prioritaire pour le logo (LCP)
           />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {/* Langue Switcher */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary">
            <span className="cursor-pointer hover:text-accent transition-colors">FR</span>
            <span className="text-gray-300">|</span>
            <span className="cursor-pointer text-gray-400 hover:text-accent transition-colors">EN</span>
          </div>

          {/* Menu Links */}
          <ul className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-xs font-bold tracking-[0.15em] transition-colors hover:text-accent ${
                    activeLink === link.name ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Soulignement animé */}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- MOBILE BURGER (SVG CUSTOM) --- */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <Image
            src={isOpen ? "/images/cross.svg" : "/images/burger.svg"}
            alt={isOpen ? "Fermer menu" : "Ouvrir menu"}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden p-8 flex flex-col items-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-widest text-primary hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t w-16 justify-center border-gray-200 text-xs font-bold">
              <span>FR</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400">EN</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}