"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const competences = [
  "IMMOBILIER",
  "SERVICE AUX ENTREPRISES / CORPORATE",
  "FINANCEMENTS IMMOBILIERS",
  "PROMOTION / ACTEUR PUBLICS",
  "CLIENTÈLE PRIVÉE",
];

const links = [
  { name: "CONTACT", href: "#contact" },
  { name: "TARIFS", href: "#" }, // Lien à définir plus tard
  { name: "ETUDE", href: "#etude" },
  { name: "EQUIPE", href: "#equipe" },
];

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- PARTIE HAUTE (3 Colonnes) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* COL 1 : Logo Paturel + Adresse */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-12 block">
              <Image
                src="/images/paturel-logo-white.svg"
                alt="Paturel Notaire"
                width={180}
                height={60}
                className="w-48 h-auto"
              />
            </Link>

            <address className="not-italic text-sm leading-relaxed mb-6 font-sans">
              3 Place André Malraux<br />
              78100 SAINT-GERMAIN-EN-LAYE<br />
              01 88 85 77 77
            </address>

            {/* LinkedIn Icon */}
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-primary hover:bg-cream transition-colors"
            >
              <FaLinkedinIn />
            </Link>
          </div>

          {/* COL 2 : Compétences */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-bold text-xs tracking-widest mb-6 uppercase">
              Compétences
            </h3>
            <ul className="space-y-3">
              {competences.map((item) => (
                <li key={item}>
                  <Link href="#expertise" className="text-xs tracking-widest hover:text-white/70 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 : Liens & Logo Notaire */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right justify-between h-full">
            
            <div className="flex flex-col items-start md:items-end gap-6 w-full">
               <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs tracking-widest font-bold hover:text-white/70 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Langues */}
              <div className="font-bold text-sm tracking-widest mt-4">
                <span>FR</span> <span className="mx-1 opacity-50">|</span> <span className="opacity-50 hover:opacity-100 cursor-pointer">EN</span>
              </div>
            </div>

            {/* Logo Notaires de France (en bas de colonne) */}
            <div className="mt-12 md:mt-0">
               <Image
                src="/images/notaire-logo-white.svg"
                alt="Notaires de France"
                width={80}
                height={80}
                className="w-16 h-auto opacity-90"
              />
            </div>
          </div>
        </div>

        {/* --- SÉPARATEUR --- */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* --- PARTIE BASSE (Copyright + Mentions + Flèche) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider text-white/80">
          
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <span>© Paturel Notaire - Tous Droits Réservés</span>
            <div className="hidden md:block w-[1px] h-3 bg-white/40" />
            <Link href="#" className="hover:text-white">Mentions Légales - Politique De Confidentialité</Link>
          </div>

          {/* Scroll to Top Arrow */}
          <button 
            onClick={scrollToTop}
            className="p-2 group cursor-pointer transition-transform hover:-translate-y-1"
            aria-label="Retour en haut"
          >
            <Image
              src="/images/arrow.svg"
              alt="Haut de page"
              width={30}
              height={30}
              className="w-8 h-8"
            />
          </button>

        </div>
      </div>
    </footer>
  );
}