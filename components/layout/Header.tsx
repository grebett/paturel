"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

// --- IMPORTANT : On utilise tes imports personnalisés ---
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const navLinks = [
  { key: "etude", href: "#etude" },
  { key: "expertise", href: "#expertise" },
  { key: "equipe", href: "#equipe" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale(); // "fr" ou "en"
  
  // Ces hooks sont magiques : pathname n'a pas le préfixe de langue !
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("etude");

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper backdrop-blur-sm transition-all duration-200 border-b border-b-primary/10">
      <div className="w-full md:h-32 h-20 flex items-end md:items-center justify-between px-10 md:px-12 xl:px-[7.5rem] flex-row-reverse md:flex-row">
        
        {/* --- LOGO --- */}
        <Link
          href="/"
          className="relative block w-15 pb-5 md:pb-0 md:w-26 shrink-0"
          onClick={() => setActiveLink("")}
        >
          <Image
            src="/images/paturel-logo-dark-blue.svg"
            alt={t("a11y.logo_alt")}
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
            <button
              onClick={() => switchLanguage("fr")}
              className="cursor-pointer relative group flex flex-col items-center"
            >
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">
                FR
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-300 ease-in-out font-normal text-primary group-hover:text-[#352397] ${
                  locale === "fr" ? "opacity-0" : "opacity-100"
                }`}
              >
                FR
              </span>
              <span
                className={`transition-opacity duration-300 ease-in-out font-bold text-[#352397] ${
                  locale === "fr" ? "opacity-100" : "opacity-0"
                }`}
              >
                FR
              </span>
            </button>
            <span className="text-indigo relative top-[-0.5px]">|</span>
            <button
              onClick={() => switchLanguage("en")}
              className="cursor-pointer relative group flex flex-col items-center"
            >
              <span className="invisible font-bold h-0 overflow-hidden" aria-hidden="true">
                EN
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-300 ease-in-out font-normal text-primary group-hover:text-[#352397] ${
                  locale === "en" ? "opacity-0" : "opacity-100"
                }`}
              >
                EN
              </span>
              <span
                className={`transition-opacity duration-300 ease-in-out font-bold text-[#352397] ${
                  locale === "en" ? "opacity-100" : "opacity-0"
                }`}
              >
                EN
              </span>
            </button>
          </div>

          {/* BLOC LIENS DESKTOP */}
          <ul className="flex items-baseline gap-[1.875rem]">
            {navLinks.map((link) => {
              const linkLabel = t(`nav.${link.key}`);
              const isActive = activeLink === link.key;

              return (
                <li key={link.key} className="relative group">
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.key)}
                    className="block text-sm uppercase tracking-[0.175rem] text-center relative"
                  >
                    <span
                      className="invisible font-bold h-0 overflow-hidden block"
                      aria-hidden="true"
                    >
                      {linkLabel}
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center justify-center font-normal text-primary group-hover:text-[#352397] transition-opacity duration-300 ease-in-out ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {linkLabel}
                    </span>
                    <span
                      className={`flex items-center justify-center font-bold text-[#352397] transition-opacity duration-300 ease-in-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {linkLabel}
                    </span>
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-[4px] bg-[#352397]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- MOBILE BURGER --- */}
        <button
          className="md:hidden pb-5 left-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t("a11y.menu_close") : t("a11y.menu_open")}
        >
          <Image
            src={isOpen ? "/images/cross.svg" : "/images/burger.svg"}
            alt="Menu"
            width={22}
            height={22}
            className="w-7 h-7 object-contain"
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
            className="absolute top-20 left-0 w-full bg-paper border-b border-primary/20 shadow-xl md:hidden px-10 py-8 flex flex-col justify-between min-h-[calc(100vh-5rem)] z-40"
          >
            {/* Haut : liens + langues */}
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => {
                const linkLabel = t(`nav.${link.key}`);
                const isActive = activeLink === link.key;

                return (
                  <div key={link.key} className="relative">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.key);
                        setIsOpen(false);
                      }}
                      className={`text-sm tracking-[0.175rem] uppercase transition-colors ${
                        isActive
                          ? "font-bold text-[#352397]"
                          : "font-normal text-primary"
                      }`}
                    >
                      <span className="relative inline-block">
                        {linkLabel}

                        {isActive && (
                          <motion.div
                            layoutId="mobile-underline"
                            className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#352397]"
                          />
                        )}
                      </span>
                    </Link>
                  </div>
                );
              })}

              <div className="flex gap-2 pt-4 border-t border-gray-100 w-16 justify-center text-sm tracking-widest">
                <button
                  onClick={() => switchLanguage("fr")}
                  className={
                    locale === "fr" ? "font-bold text-[#352397]" : "text-primary"
                  }
                >
                  FR
                </button>
                <span className="text-primary/30">|</span>
                <button
                  onClick={() => switchLanguage("en")}
                  className={
                    locale === "en" ? "font-bold text-[#352397]" : "text-primary"
                  }
                >
                  EN
                </button>
              </div>
            </div>

            {/* Bas : ligne + adresse + LinkedIn */}
            <div className="mt-10 pt-6 border-t border-primary/40 flex flex-col gap-6">
              <div className="text-xs tracking-[0.18em] text-primary">
                <p>{t("mobile.address_line1")}</p>
                <p>{t("mobile.address_line2")}</p>
                <p>{t("mobile.phone")}</p>
              </div>

              {/* Note: Pour les liens externes comme LinkedIn, on utilise le Link standard de Next.js ou une balise <a> */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#352397] rounded-full text-white hover:bg-[#24165c] transition-all duration-200 hover:scale-[1.05]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}