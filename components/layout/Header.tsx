"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [activeLang, setActiveLang] = useState("FR");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">

      <div className="w-full h-24 flex items-center justify-between px-6 md:px-12 xl:px-[7.5rem]">

        {/* --- LOGO --- */}
        <Link
          href="/"
          className="relative block w-32 md:w-40 shrink-0"
          onClick={() => setActiveLink("")}
        >
          <Image
            src="/images/paturel-logo-dark-blue.svg"
            alt="Paturel Notaires"
            width={162}
            height={115}
            className="w-full h-auto object-contain object-left"
            priority
          />
        </Link>

        {/* 
            --- DESKTOP NAV --- 
            Changement majeur ici :
            - items-baseline : Aligne le texte "FR" et "ÉTUDE" exactement sur la même ligne de base.
            - gap-[3rem] : Espace entre le bloc langue et le bloc menu (ajustable).
            - pt-[1.625rem] : Appliqué au parent pour descendre tout le monde ensemble.
        */}
        <nav className="hidden md:flex items-baseline gap-12 pt-[1.625rem]">

          {/* --- BLOC LANGUES --- */}
          <div className="flex items-baseline gap-2 text-sm tracking-[0.175rem]">

            {/* BOUTON FR */}
            <button
              onClick={() => setActiveLang("FR")}
              // Ajout de 'cursor-pointer' ici
              className={`cursor-pointer flex flex-col items-center transition-colors duration-200 ${activeLang === "FR" ? "text-[#352397]" : "text-primary hover:text-[#352397]"
                }`}
            >
              <span className={activeLang === "FR" ? "font-bold" : "font-normal"}>FR</span>
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">FR</span>
            </button>

            {/* SÉPARATEUR */}
            <span className="text-primary/30 font-normal">|</span>

            {/* BOUTON EN */}
            <button
              onClick={() => setActiveLang("EN")}
              // Ajout de 'cursor-pointer' ici aussi
              className={`cursor-pointer flex flex-col items-center transition-colors duration-200 ${activeLang === "EN" ? "text-[#352397]" : "text-primary hover:text-[#352397]"
                }`}
            >
              <span className={activeLang === "EN" ? "font-bold" : "font-normal"}>EN</span>
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">EN</span>
            </button>

          </div>

          {/* --- BLOC LIENS --- */}
          <ul className="flex items-baseline gap-[1.875rem]">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`
                    block text-sm uppercase tracking-[0.175rem] transition-colors duration-200 text-center
                    ${activeLink === link.name
                      ? "font-bold text-[#352397]"
                      : "font-normal text-primary hover:text-[#352397]"
                    }
                  `}
                >
                  {/* Astuce Anti-Saut */}
                  <span className={activeLink === link.name ? "font-bold" : "font-normal"}>
                    {link.name}
                  </span>
                  <span className="block font-bold h-0 overflow-hidden invisible" aria-hidden="true">
                    {link.name}
                  </span>
                </Link>

                {/* Soulignement (Positionné en absolute par rapport au li, n'affecte pas l'alignement baseline du texte) */}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[4px] bg-[#352397]"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- MOBILE BURGER --- */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <Image
            src={isOpen ? "/images/cross.svg" : "/images/burger.svg"}
            alt="Menu"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden p-8 flex flex-col items-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`text-sm tracking-[0.175rem] uppercase transition-colors ${activeLink === link.name
                    ? "font-bold text-[#352397]"
                    : "font-normal text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-4 pt-4 border-t border-gray-100 w-16 justify-center text-sm tracking-widest">
              <button
                onClick={() => setActiveLang("FR")}
                className={activeLang === "FR" ? "font-bold text-[#352397]" : "text-primary"}
              >
                FR
              </button>
              <span className="text-primary/30">|</span>
              <button
                onClick={() => setActiveLang("EN")}
                className={activeLang === "EN" ? "font-bold text-[#352397]" : "text-primary"}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}