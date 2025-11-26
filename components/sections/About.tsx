"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="etude" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- TITRE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-[#D4A373] italic mb-12 md:mb-20"
        >
          L&apos;étude
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- COLONNE GAUCHE (Intro Bleue) --- */}
          <div className="lg:col-span-5">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed mb-8">
                L’office notarial Paturel Notaires accompagne ses clients avec rigueur, loyauté et disponibilité.
              </p>
              <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed mb-8">
                Fondé sur des valeurs d’excellence et de confiance, nous plaçons la qualité du conseil au cœur de notre pratique.
              </p>
              <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed">
                Notre ambition : être de véritables partenaires, engagés dans la réussite de chaque projet.
              </p>
            </motion.div>
          </div>

          {/* --- COLONNE DROITE (Texte standard) --- */}
          <div className="lg:col-span-7 text-body text-base md:text-lg leading-relaxed space-y-6 text-justify md:text-left">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
              <p>
                L’office notarial Paturel Notaires est né d’une vision commune du métier, fondée sur des valeurs fortes : qualité, rigueur, loyauté et grande disponibilité.
              </p>
              <p>
                Nous mettons ces principes au service d’un objectif unique : offrir à nos clients un accompagnement d’excellence, en cohérence avec nos compétences, nos savoir-faire et notre expérience en immobilier.
              </p>
              <p>
                Notre structure dédiée à l’immobilier nous permet de répondre au mieux aux défis d’un environnement en constante évolution, en nous appuyant notamment sur les nouvelles technologies, en développant une approche résolument internationale.
              </p>
              <p>
                Notre pratique s’appuie sur un accompagnement à chaque étape des projets de nos clients, en anticipant leurs besoins et leurs contraintes et en proposant des conseils stratégiques.
              </p>
              <p>
                De notre expérience, développée aux côtés d’acteurs institutionnels et plus particulièrement de fonds d’investissement étrangers de l’immobilier tertiaire, nous avons développé des standards élevés et une culture de la rigueur aux côtés de nos clients.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- IMAGE BAS DE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 w-full h-[300px] md:h-[500px] relative overflow-hidden"
        >
           <Image
             src="/images/office.png" // Ton image de bureau
             alt="Intérieur de l'étude"
             fill
             className="object-cover"
           />
        </motion.div>

      </div>
    </section>
  );
}