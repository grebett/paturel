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
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper backdrop-blur-sm transition-all duration-200 border-b border-b-primary/10">

      <div className="w-full h-32 flex items-end md:items-center justify-between px-6 md:px-12 xl:px-[7.5rem] flex-row-reverse md:flex-row">

        {/* --- LOGO --- */}
        <Link
          href="/"
          className="relative block w-20 pb-5 md:pb-0 md:w-26 shrink-0"
          onClick={() => setActiveLink("")}
        >
          <Image
            src="/images/paturel-logo-dark-blue.svg"
            alt="Paturel Notaires"
            width={162}
            height={115}
            className="w-full h-auto object-contain object-right md:object-left"
            priority
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-baseline gap-12 pt-[1.625rem]">

          {/* BLOC LANGUES */}
          <div className="flex items-center gap-2 text-sm tracking-[0.175rem]">
            <button onClick={() => setActiveLang("FR")} className="cursor-pointer relative group flex flex-col items-center">
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">FR</span>
              <span className={`absolute inset-0 transition-opacity duration-300 ease-in-out font-normal text-primary group-hover:text-[#352397] ${activeLang === "FR" ? "opacity-0" : "opacity-100"}`}>FR</span>
              <span className={`transition-opacity duration-300 ease-in-out font-bold text-[#352397] ${activeLang === "FR" ? "opacity-100" : "opacity-0"}`}>FR</span>
            </button>
            <span className="text-indigo relative top-[-0.5px]">|</span>
            <button onClick={() => setActiveLang("EN")} className="cursor-pointer relative group flex flex-col items-center">
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">EN</span>
              <span className={`absolute inset-0 transition-opacity duration-300 ease-in-out font-normal text-primary group-hover:text-[#352397] ${activeLang === "EN" ? "opacity-0" : "opacity-100"}`}>EN</span>
              <span className={`transition-opacity duration-300 ease-in-out font-bold text-[#352397] ${activeLang === "EN" ? "opacity-100" : "opacity-0"}`}>EN</span>
            </button>
          </div>

          {/* BLOC LIENS DESKTOP */}
          <ul className="flex items-baseline gap-[1.875rem]">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className="block text-sm uppercase tracking-[0.175rem] text-center relative"
                >
                  <span className="invisible font-bold h-0 overflow-hidden block" aria-hidden="true">{link.name}</span>
                  <span className={`absolute inset-0 flex items-center justify-center font-normal text-primary group-hover:text-[#352397] transition-opacity duration-300 ease-in-out ${activeLink === link.name ? "opacity-0" : "opacity-100"}`}>{link.name}</span>
                  <span className={`flex items-center justify-center font-bold text-[#352397] transition-opacity duration-300 ease-in-out ${activeLink === link.name ? "opacity-100" : "opacity-0"}`}>{link.name}</span>
                </Link>
                {/* Soulignement Desktop */}
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
          className="md:hidden pb-5 left-4"
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
            className="absolute top-32 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden p-8 flex flex-col items-left gap-8 z-40"
          >
            {navLinks.map((link) => (
              // AJOUT D'UNE DIV RELATIVE POUR ANCRER LA BARRE DE SOULIGNEMENT
              <div key={link.name} className="relative">
                <Link
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
                  <span className="relative inline-block">
                    {link.name}

                    {activeLink === link.name && (
                      <motion.div
                        layoutId="mobile-underline"
                        className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#352397]"
                      />
                    )}
                  </span>
                </Link>
              </div>
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