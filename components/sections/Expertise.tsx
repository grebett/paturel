"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function Expertise() {
  const t = useTranslations("Expertise");
  const locale = useLocale();

  // Liste des clés définies dans le YAML
  const itemKeys = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <section id="expertise" className="bg-peau py-20 md:py-25">
      
      {/* Container global aligné gauche */}
      <div className="w-full px-10 md:px-20 xl:px-[7.5rem]">
        
        {/* --- TITRE SECTION --- */}
        <motion.div 
          key={`title-${locale}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-primary italic mb-8 leading-none font-bold">
            {t("title")}
          </h2>
        </motion.div>

        {/* --- Ligne pleine largeur (alignée conteneur) --- */}
        <div className="mx-auto max-w-4xl flex flex-col h-[1px] bg-primary" />

        {/* --- Contenu centré (4xl) --- */}
        <div className="mx-auto max-w-4xl flex flex-col">

          {itemKeys.map((key, index) => {
            // On récupère le slug traduit (ou hardcodé dans le YAML s'il ne change pas)
            const slug = t(`items.${key}.slug`);
            
            return (
              <motion.div 
                key={`${key}-${locale}`} // Force le re-render à chaque changement de langue
                id={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-primary last:border-none"
              >
                
                <div className="flex flex-col md:flex-row gap-y-6 gap-x-12 lg:gap-x-24 py-12 md:py-25 items-start md:items-center">
                  
                  {/* --- COLONNE GAUCHE : largeur custom --- */}
                  <div className="flex items-center gap-6 md:gap-8 flex-1">
                    
                    {/* Le Cercle */}
                    <div className="shrink-0 relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:rotate-90">
                        <Image 
                          src="/images/number-external-circle.svg" 
                          alt="" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                      <span className="relative z-10 font-serif text-4xl text-indigo font-bold -mt-3.25">
                        {t(`items.${key}.id`)}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="font-serif text-[1.8125rem] text-indigo italic font-bold leading-normal tracking-[0.01813rem]">
                      {t(`items.${key}.title`)}
                    </h3>

                  </div>

                  {/* --- COLONNE DROITE : prend tout le reste --- */}
                  <div className="md:w-[420px]">
                    <p className="text-black font-light text-sm md:text-[0.95rem] leading-[1.40] whitespace-pre-line">
                      {t(`items.${key}.desc`)}
                    </p>
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