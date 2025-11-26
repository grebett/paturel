"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const expertiseItems = [
  {
    id: 1,
    title: "Immobilier",
    desc: "L'étude intervient pour tous les projets immobiliers qu'il s'agisse d'acquisitions ou de cessions et pour tous types d'actifs (hôtellerie, logistique, bureaux, centres commerciaux...). L'étude a développé une compétence spécifique en immobilier, et particulièrement en immobilier tertiaire."
  },
  {
    id: 2,
    title: "Corporate",
    desc: "L'étude accompagne les entreprises dans leur projet de restructuration et notamment ceux comprenant des sous-jacents immobiliers dans le cadre de transmissions universelles de patrimoine, apports partiels d'actifs..."
  },
  {
    id: 3,
    title: "Financements immobiliers",
    desc: "L'étude accompagne les établissements de crédit et / ou les emprunteurs dans le cadre de la mise en place de leur financement et de l'octroi des sûretés y afférent qu'il s'agisse de financements personnels ou professionnels."
  },
  {
    id: 4,
    title: "Promotion / Aménagement",
    desc: "L'étude accompagne les promoteurs, collectivités publiques, aménageurs, investisseurs dans le cadre du développement de projets fonciers en participant tant à l'acquisition qu'au montage de ces projets."
  },
  {
    id: 5,
    title: "Clientèle privée",
    desc: "L'étude accompagne ses clients particuliers dans le cadre de leurs acquisitions / cessions."
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-peau py-20 md:py-32">
      
      {/* Container global aligné gauche (pour le titre) */}
      <div className="w-full px-6 md:px-12 xl:px-[7.5rem]">
        
        {/* --- TITRE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-primary italic mb-8 leading-none font-bold">
            Notre expertise
          </h2>
        </motion.div>

        {/* 
            --- CONTENU CENTRÉ --- 
            Même conteneur max-w-4xl que About.tsx
        */}
        <div className="mx-auto max-w-4xl flex flex-col">
          
          {/* Ligne de séparation du haut */}
          <div className="w-full h-[1px] bg-primary" />

          {/* Liste */}
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-primary last:border-none"
            >
              
              {/* 
                 STRUCTURE DE GRILLE IDENTIQUE À ABOUT.TSX
                 - grid-cols-2 : Sépare en deux colonnes égales
                 - gap-x-12 lg:gap-x-24 : Même espacement que About
                 - items-center : Alignement vertical centré
              */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 lg:gap-x-24 py-12 md:py-16 items-center">
                
                {/* --- COLONNE GAUCHE : CERCLE + TITRE --- */}
                <div className="flex items-center gap-6 md:gap-8">
                  
                  {/* Le Cercle */}
                  <div className="shrink-0 relative w-16 h-16 md:w-16 md:h-16 flex items-center justify-center">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:rotate-90">
                       <Image 
                         src="/images/number-external-circle.svg" 
                         alt="" 
                         fill 
                         className="object-contain"
                       />
                    </div>
                    <span className="relative z-10 font-serif text-3xl md:text-4xl text-indigo font-bold -mt-3.25">
                      {item.id}
                    </span>
                  </div>

                  {/* Le Titre */}
                  <h3 className="font-serif text-[1.8125rem] text-indigo italic font-bold leading-normal tracking-[0.01813rem]">
                    {item.title}
                  </h3>

                </div>


                {/* --- COLONNE DROITE : DESCRIPTION --- */}
                {/* Cette div aura maintenant exactement la même largeur que la colonne de droite de About */}
                <div className="w-full">
                  <p className="text-black font-light text-sm md:text-[0.95rem] leading-[1.6] text-left whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}