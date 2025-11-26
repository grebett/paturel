"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="etude" className="py-20 md:py-22 bg-paper">
      
      <div className="w-full px-6 md:px-12 xl:px-[7.5rem]">
        
        {/* --- TITRE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-[4rem] text-terracotta font-bold italic mb-16 md:mb-20 leading-none"
        >
          L’étude
        </motion.h2>

        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 lg:gap-x-24 items-start text-justify">
          
          {/* --- COLONNE 1 --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="text-lg text-left md:text-xl text-indigo font-medium space-y-6">
              <p>
                L’office notarial Paturel Notaires accompagne ses clients avec rigueur, loyauté et disponibilité.
              </p>
              <p>
                Fondé sur des valeurs d’excellence et de confiance, nous plaçons la qualité du conseil au cœur de notre pratique.
              </p>
              <p>
                Notre ambition : être de véritables partenaires, engagés dans la réussite de chaque projet.
              </p>
            </div>

            <div className="text-black text-left md:text-[0.95rem] space-y-6">
              <p className="font-semibold">
                L’office notarial Paturel Notaires est né d’une vision commune du métier, fondée sur des valeurs fortes : qualité, rigueur, loyauté et grande disponibilité.
              </p>
              <p className="font-light">
                Nous mettons ces principes au service d’un objectif unique : offrir à nos clients un accompagnement d’excellence, en cohérence avec nos compétences, nos savoir-faire et notre expérience en immobilier.
              </p>
              <p>
                Notre structure dédiée à l’immobilier nous permet de
              </p>
            </div>
          </motion.div>


          {/* --- COLONNE 2 --- */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-black font-light text-left text-sm md:text-[0.95rem] space-y-6 leading-[1.275]"
          >
            <p>
              répondre au mieux aux défis d’un environnement en constante évolution, en nous appuyant notamment sur les nouvelles technologies, en développant une approche résolument internationale et en travaillant en étroite collaboration avec un réseau d’experts partenaires.
            </p>
            <p>
              Notre pratique s’appuie sur un accompagnement à chaque étape des projets de nos clients, en anticipant leurs besoins et leurs contraintes et en proposant des conseils stratégiques. Qu’il s’agisse de constituer et actualiser une data-room, préparer une Vendor Due Diligence dans une démarche ready to sell, de sécuriser la cession d’un actif immobilier ou d’une société, de préparer la signature d’un financement, notre approche vise toujours à optimiser la réussite des opérations au meilleur coût.
            </p>
            <p>
              De notre expérience, développée aux côtés d’acteurs institutionnels et plus particulièrement de fonds d’investissement étrangers de l’immobilier tertiaire, nous avons développé des standards élevés et une culture de la rigueur aux côtés de nos clients.
            </p>
            <p>
              Nous mettons également notre savoir-faire au service des projets personnels et patrimoniaux de nos clients.
            </p>
            <p>
              Notre ambition est claire : construire une relation de partenariat durable, fondée sur la confiance, la proximité et l’excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-6 w-full h-[600px] relative overflow-hidden col-span-1 lg:col-span-2"
          >
             <Image
               src="/images/office.png"
               alt="Intérieur de l'étude"
               fill
               className="object-cover"
             />
          </motion.div>

        </div>

      </div>
    </section>
  );
}