"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

// --- Imports personnalisés ---
import { Link, usePathname, useRouter } from "@/i18n/navigation";

// On définit les listes avec des clés de traduction (key) et les cibles (href/slug)
const competencesList = [
  { key: "immobilier", slug: "immobilier" },
  { key: "corporate", slug: "corporate" },
  { key: "financements", slug: "financements-immobiliers" },
  { key: "promotion", slug: "promotion-amenagement" },
  { key: "privee", slug: "clientele-privee" },
];

const linksList = [
  { key: "contact", href: "#contact" },
  { key: "tarifs", href: "#" }, // Placeholder PDF
  { key: "etude", href: "#etude" },
  { key: "equipe", href: "#equipe" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <footer className="bg-[#1E1343] text-white md:pt-24 pb-8 overflow-x-hidden">
      {/* Container global aligné (7.5rem) */}
      <div className="w-full px-10 md:px-12 xl:px-[7.5rem]">
        {/* --- PARTIE HAUTE : GRILLE 2 COLONNES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 items-center lg:items-start">
          
          {/* COLONNE 1 : Logo Paturel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center h-full min-w-0">
            <Link href="/" className="block">
              <Image
                src="/images/paturel-logo-white.svg"
                alt={t("a11y.logo_alt")}
                width={220}
                height={150}
                className="w-60 h-auto mt-25"
              />
            </Link>
          </div>

          {/* COLONNE 2 : Bloc contenu */}
          <div className="lg:col-span-7 flex flex-col w-full min-w-0">
            
            {/* Adresse + LinkedIn */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6 min-w-0">
              <address className="not-italic text-m font-light leading-relaxed font-sans break-words">
                {t("address.line1")}
                <br />
                {t("address.line2")}
                <br />
                {t("address.phone")}
              </address>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.linkedin")}
                className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full text-[#1E1343] hover:bg-white transition-all duration-200 hover:scale-[1.05] shrink-0"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Barre blanche */}
            <div className="w-full h-1.5 bg-white mb-10" />

            {/* Colonnes de liens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-w-0">
              
              {/* Compétences */}
              <div className="flex flex-col min-w-0">
                <ul className="min-w-0">
                  <li className="font-bold text-xs tracking-widest uppercase mb-2">
                    {t("titles.competences")}
                  </li>
                  {competencesList.map((item) => (
                    <li key={item.key} className="min-w-0">
                      <Link
                        href={`#${item.slug}`}
                        className="text-xs leading-5 tracking-[0.12em] md:tracking-widest font-medium hover:text-white/70 transition-colors uppercase break-words"
                      >
                        {t(`competences.${item.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation + langue + logo */}
              <div className="flex flex-col items-start md:items-end text-left md:text-right justify-between h-full gap-8 min-w-0">
                <ul className="min-w-0">
                  {linksList.map((link) => (
                    <li key={link.key} className="min-w-0">
                      <Link
                        href={link.href}
                        className="text-xs leading-5 tracking-[0.12em] md:tracking-widest font-medium hover:text-white/70 transition-colors uppercase break-words"
                      >
                        {t(`nav.${link.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Langues */}
                <div className="font-bold text-sm tracking-widest shrink-0 flex items-center">
                  <button
                    onClick={() => switchLanguage("fr")}
                    className={`hover:opacity-100 transition-opacity ${
                      locale === "fr" ? "opacity-100" : "opacity-50 font-light"
                    }`}
                  >
                    FR
                  </button>
                  <span className="mx-1 opacity-50 font-light">|</span>
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`hover:opacity-100 transition-opacity ${
                      locale === "en" ? "opacity-100" : "opacity-50 font-light"
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Logo Notaires */}
                <div className="mt-4 shrink-0">
                  <Image
                    src="/images/notaires.svg"
                    alt={t("a11y.notaires_logo_alt")}
                    width={80}
                    height={80}
                    className="w-14 h-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-[1px] bg-white/80 mb-4" />

        {/* Bas footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/80 font-light tracking-wide min-w-0">
          {/* Mentions → 1er en mobile, 2e en desktop */}
          <div className="flex flex-col items-center md:items-end gap-1 order-1 md:order-2 min-w-0">
            <Link
              href="#"
              className="hover:text-white transition-colors text-center md:text-right break-words"
            >
              {t("legal.mentions")}
            </Link>
          </div>

          {/* Copyright → 2e en mobile, 1er en desktop */}
          <div className="flex flex-col items-center md:items-start gap-1 order-2 md:order-1 min-w-0">
            <span className="break-words">
              {t("legal.copyright")}
            </span>
            <span className="opacity-70 break-words text-center md:text-left">
              {t("legal.disclaimer")}
            </span>
          </div>
        </div>

        {/* Flèche */}
        <div className="flex justify-end mt-6">
          <button
            onClick={scrollToTop}
            className="group cursor-pointer transition-all duration-150 hover:scale-[1.05] hover:bg-white/10 border-1 rounded-full"
            aria-label={t("a11y.scroll_top")}
          >
            <Image
              src="/images/arrow.svg"
              alt=""
              width={24}
              height={24}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}