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
  { name: "TARIFS", href: "#" }, // Placeholder PDF
  { name: "ÉTUDE", href: "#etude" },
  { name: "ÉQUIPE", href: "#equipe" },
];

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E1343] text-white md:pt-24 pb-8">
      
      {/* Container global aligné (7.5rem) */}
      <div className="w-full px-6 md:px-12 xl:px-[7.5rem]">
        
        {/* --- PARTIE HAUTE : GRILLE 2 COLONNES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 items-center lg:items-start">
          
          {/* COLONNE 1 : Logo Paturel (Centré verticalement par rapport au bloc de droite) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-center h-full">
            <Link href="/" className="block">
              <Image
                src="/images/paturel-logo-white.svg"
                alt="Paturel Notaire"
                width={220}
                height={150}
                className="w-56 h-auto mt-25"
              />
            </Link>
          </div>

          {/* COLONNE 2 : Bloc contenu (Adresse, Liens, Logos) */}
          <div className="lg:col-span-6 flex flex-col w-full">
            
            {/* 1. LIGNE DU HAUT : Adresse (Gauche) + LinkedIn (Droite) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
              <address className="not-italic text-sm font-light leading-relaxed font-sans">
                3 Place André Malraux<br />
                78100 SAINT-GERMAIN-EN-LAYE<br />
                01 88 85 77 77
              </address>

              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full text-[#1E1343] hover:bg-white transition-all duration-200 hover:scale-[1.05]"
              >
                <FaLinkedinIn />
              </Link>
            </div>

            {/* 2. GROSSE BARRE BLANCHE (7px request, adjusted to h-1.5 for balance) */}
            <div className="w-full h-1.5 bg-white mb-10" />

            {/* 3. COLONNES DE LIENS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Sous-colonne Gauche : Compétences */}
              <div className="flex flex-col">
                <h3 className="font-bold text-xs tracking-widest uppercase">
                  Compétences
                </h3>
                <ul className="">
                  {competences.map((item) => (
                    <li key={item}>
                      <Link href="#expertise" className="text-xs leading-1 tracking-widest font-light hover:text-white/70 transition-colors uppercase">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sous-colonne Droite : Navigation + Langue + Logo Notaire */}
              {/* 'items-end text-right' pour ferrer à droite */}
              <div className="flex flex-col items-start md:items-end text-left md:text-right justify-between h-full gap-8">
                
                {/* Navigation Links */}
                <ul className="">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs tracking-widest font-regular hover:text-white/70 transition-colors uppercase">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Langues */}
                <div className="font-bold text-sm tracking-widest">
                  <span>FR</span> <span className="mx-1 opacity-50 font-light">|</span> <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">EN</span>
                </div>

                {/* Logo Notaires de France */}
                <div className="mt-4">
                   <Image
                    src="/images/notaire-logo-white.svg"
                    alt="Notaires de France"
                    width={80}
                    height={80}
                    className="w-14 h-auto opacity-90"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

           {/* --- SEPARATEUR FIN --- */}
        <div className="w-full h-[1px] bg-white/80 mb-4" />

        {/* --- PARTIE BASSE TEXTE (Copyright / Mentions) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/90 font-light tracking-wide">
          
          {/* Gauche : Copyright */}
          <div>
            <span>© Paturel Notaire - Tous Droits Réservés</span>
          </div>

          {/* Droite : Mentions */}
          <div>
            <Link href="#" className="hover:text-white transition-colors">Mentions Légales - Politique De Confidentialité</Link>
          </div>
        </div>

        {/* 
            --- FLÈCHE EN DESSOUS --- 
            Placée dans une div séparée, alignée à droite (justify-end)
            mt-6 pour l'espacer du texte
        */}
        <div className="flex justify-end mt-6">
            <button 
              onClick={scrollToTop}
              className="group cursor-pointer transition-all duration-150 hover:scale-[1.05] hover:bg-white/10 border-1 rounded-full"
              aria-label="Retour en haut"
            >
              <Image
                src="/images/arrow.svg"
                alt="Haut de page"
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