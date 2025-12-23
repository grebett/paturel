"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

// Données statiques (non traduisibles)
const staticData = {
  marc: {
    image: "/images/marc-paturel.jpg",
    linkedin: "https://www.linkedin.com/in/marc-paturel-325743104/"
  },
  florence: {
    image: "/images/florence-pignal.jpg",
    linkedin: "https://www.linkedin.com/in/florence-pignal-41b65221/"
  }
};

// Liste ordonnée des clés pour l'itération
const memberKeys = ["marc", "florence"] as const;

export default function Team() {
  const t = useTranslations("Team");
  const locale = useLocale();

  return (
    <section id="equipe" className="bg-paper py-20 md:py-25 mb-10">
      
      {/* Container global */}
      <div className="w-full px-10 md:px-20 xl:px-[7.5rem]">
        
        {/* --- TITRE SECTION --- */}
        <motion.div 
          key={`title-${locale}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-terracotta italic mb-8 leading-none font-bold">
            {t("title")}
          </h2>
        </motion.div>

        {/* --- CONTENU CENTRÉ --- */}
        <div className="mx-auto max-w-4xl flex flex-col gap-20 md:gap-32">
          
          {memberKeys.map((key, index) => {
            const data = staticData[key];
            
            return (
              <motion.div 
                key={`${key}-${locale}`} // Force le re-render au switch de langue pour l'anim
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {/* Ligne de séparation */}
                <div className="w-full h-[1px] bg-primary mb-12 md:mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-24 items-start mt-30">
                  
                  {/* 1. Photo (Colonne Gauche) */}
                  <div className="w-full">
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                      <Image
                        src={data.image}
                        alt={t(`members.${key}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 2. Infos (Colonne Droite) */}
                  <div className="flex flex-col gap-6 w-full">
                    
                    {/* Nom */}
                    <h3 className="mt-[-5] p-0 leading-none font-serif text-[2rem] text-indigo font-bold tracking-[0.01813rem]">
                      {t(`members.${key}.name`)}
                    </h3>

                    {/* Bio */}
                    {/* whitespace-pre-line permet de respecter les \n\n du YAML pour faire des paragraphes */}
                    <div className="text-black font-light text-sm md:text-[0.95rem] leading-[1.40] text-left space-y-4 whitespace-pre-line">
                      <p>{t(`members.${key}.bio`)}</p>
                      
                      <p className="pt-2 italic text-black block">
                        {t(`members.${key}.language`)}
                      </p>
                    </div>

                    {/* Bouton LinkedIn Rond */}
                    <div className="pt-4">
                      <Link 
                        href={data.linkedin} 
                        target="_blank"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary text-primary transition-all hover:bg-primary hover:text-white"
                        aria-label={`LinkedIn de ${t(`members.${key}.name`)}`}
                      >
                        <FaLinkedinIn className="text-xl" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}