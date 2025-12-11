"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="etude" className="py-20 md:py-22 bg-paper">
      <div className="w-full px-10 md:px-12 xl:px-[7.5rem]">
        {/* --- TITRE --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-[4rem] text-terracotta font-bold italic mb-16 md:mb-20 leading-none"
        >
          L’étude
        </motion.h2>

        {/* --- Ligne pleine largeur (alignée conteneur max-w-4xl) --- */}
        <div className="mx-auto max-w-4xl h-[1px] bg-primary mb-12 md:mb-18" />

        {/* --- GRID 4 COLONNES --- */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-12 lg:gap-x-24 items-start">
          {/* --- BLOC 1 : Texte haut gauche (paragraphe 1) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 text-left text-indigo text-lg md:text-xl font-medium"
          >
            <p>
              L’office notarial Paturel Notaires accompagne ses clients avec rigueur, loyauté et disponibilité.
            </p>
            <p>
              Fondé sur des valeurs d’excellence et de confiance, nous plaçons la qualité du conseil au cœur de notre pratique.
            </p>
            <p>
              Notre ambition&nbsp;: être de véritables partenaires, engagés dans la réussite de chaque projet.
            </p>
          </motion.div>

          {/* --- BLOC 2 : Texte haut droite (paragraphe 2) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 text-black text-left md:text-[0.95rem] space-y-6 leading-[1.4]"
          >
            <p className="font-light">
              L’office notarial Paturel Notaires est né d’une vision commune du métier, fondée sur des valeurs fortes&nbsp;: qualité, rigueur, loyauté et grande disponibilité.
            </p>
            <p className="font-light">
              Nous mettons ces principes au service d’un objectif unique&nbsp;: offrir à nos clients un accompagnement d’excellence, en cohérence avec nos compétences, nos savoir-faire et notre expérience en immobilier.
            </p>
            <p className="font-light">
              Notre structure dédiée à l’immobilier nous permet de répondre au mieux aux défis d’un environnement en constante évolution, en nous appuyant notamment sur les nouvelles technologies, en développant une approche résolument internationale et en travaillant en étroite collaboration avec un réseau d’experts partenaires.
            </p>
          </motion.div>

          {/* --- BLOC 3 : Image bas gauche --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 w-full h-[320px] md:h-[480px] relative overflow-hidden"
          >
            <Image
              src="/images/office.jpg"
              alt="Intérieur de l'étude"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* --- BLOC 4 : Texte bas droite (paragraphe 3) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 text-black font-light text-left text-sm md:text-[0.95rem] space-y-6 leading-[1.4]"
          >
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
              Notre ambition est claire&nbsp;: construire une relation de partenariat durable, fondée sur la confiance, la proximité et l’excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
