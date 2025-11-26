"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Les données textuelles (copiées/collées de ta maquette)
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
    <section id="expertise" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- TITRE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-primary italic mb-6">
            Notre expertise
          </h2>
          {/* Ligne séparatrice sous le titre */}
          <div className="w-full h-[1px] bg-primary/20" />
        </motion.div>

        {/* --- LISTE DES EXPERTISES --- */}
        <div className="flex flex-col">
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 items-start">
                
                {/* 1. Le Cercle avec Numéro */}
                <div className="shrink-0 relative w-24 h-24 flex items-center justify-center">
                  {/* Le cercle SVG qui tourne doucement au survol (optionnel) */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:rotate-90">
                     <Image 
                       src="/images/number-external-circle.svg" 
                       alt="" 
                       fill 
                       className="object-contain"
                     />
                  </div>
                  {/* Le Numéro centré */}
                  <span className="relative z-10 font-serif text-4xl text-primary font-bold pt-1">
                    {item.id}
                  </span>
                </div>

                {/* 2. Le Contenu Texte */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 w-full">
                  {/* Titre de l'item */}
                  <h3 className="font-serif text-3xl md:text-4xl text-primary italic">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body text-base leading-relaxed text-justify md:text-left">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Ligne séparatrice entre les items (sauf le dernier si tu veux, ici je la mets partout pour uniformiser) */}
              <div className="w-full h-[1px] bg-primary/20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}