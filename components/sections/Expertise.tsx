"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const expertiseItems = [
  {
    id: 1,
    title: "Immobilier",
    slug: "immobilier",
    desc: `L’étude intervient pour tous les projets immobiliers qu’il s’agisse d’acquisitions ou de cessions et pour tous types d’actifs (hôtellerie, logistique, bureaux, centres commerciaux, locaux commerciaux, sites industriels / usines, résidences étudiantes, logements), aussi bien en français qu’en anglais.

L’étude a développé une compétence spécifique en immobilier, et particulièrement en immobilier tertiaire, les associés ayant conseillé une clientèle de fonds d’investissement, de foncières, de grands utilisateurs pendant plus de vingt ans.  `
  },
  {
    id: 2,
    title: "Corporate",
    slug: "corporate",
    desc: "L’étude accompagne les entreprises dans leur projet de restructuration et notamment ceux comprenant des sous-jacents immobiliers dans le cadre de transmissions universelles de patrimoine, apports partiels d’actifs, qu’il s’agisse de rédiger les actes ou d’établir les rapports d’audit immobiliers nécessaires à la structuration."
  },
  {
    id: 3,
    title: "Financements immobiliers",
    slug: "financements-immobiliers",
    desc: "L’étude accompagne les établissements de crédit et / ou les emprunteurs dans le cadre de la mise en place de leur financement et de l’octroi des sûretés y afférent qu’il s’agisse de financements personnels ou professionnels."
  },
  {
    id: 4,
    title: "Promotion / Aménagement",
    slug: "promotion-amenagement",
    desc: "L’étude accompagne les promoteurs, collectivités publiques, aménageurs, investisseurs dans le cadre du développement de projets fonciers en participant tant à l’acquisition / la vente des fonciers nécessaires au développement de ces projets qu’au montage de ces projets et de leurs commercialisations."
  },
  {
    id: 5,
    title: "Clientèle privée",
    slug: "clientele-privee",
    desc: "L’étude accompagne ses clients particuliers dans le cadre de leurs acquisitions / cessions."
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-peau py-20 md:py-32">
      
      {/* Container global aligné gauche */}
      <div className="w-full px-10 md:px-12 xl:px-[7.5rem]">
        
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

        {/* --- Ligne pleine largeur (alignée conteneur) --- */}
        <div className="mx-auto max-w-4xl flex flex-col h-[1px] bg-primary" />

        {/* --- Contenu centré (4xl) --- */}
        <div className="mx-auto max-w-4xl flex flex-col">

          {expertiseItems.map((item, index) => (
            <motion.div 
              key={item.id}
              id={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-primary last:border-none"
            >
              
              <div className="flex flex-col md:flex-row gap-y-6 gap-x-12 lg:gap-x-24 py-12 md:py-16 items-start md:items-center">
                
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
                      {item.id}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="font-serif text-[1.8125rem] text-indigo italic font-bold leading-normal tracking-[0.01813rem]">
                    {item.title}
                  </h3>

                </div>

                {/* --- COLONNE DROITE : prend tout le reste --- */}
                <div className="md:w-[420px]">
                  <p className="text-black font-light text-sm md:text-[0.95rem] leading-[1.40] whitespace-pre-line">
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
