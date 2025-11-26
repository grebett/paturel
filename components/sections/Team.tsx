"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Marc Paturel",
    image: "/images/marc-paturel.png",
    bio: [
      "Fort d’une expérience de plus de vingt-cinq ans dont quinze en qualité de notaire associé au sein de Wargny Katz, spécialisé en immobilier d’entreprise et institutionnel, Marc conseille une clientèle d’investisseurs notamment étrangers, promoteurs, grands utilisateurs, établissements de crédit pour tout type d’opérations d’investissement en immobilier d’entreprise.",
      "Marc conseille également une clientèle privée et des fondations dans leurs différents projets immobiliers."
    ],
    language: "Marc travaille aussi bien en anglais qu’en français.",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "Florence Pignal",
    image: "/images/florence-pignal.png",
    bio: [
      "Spécialisée en droit immobilier, et forte d’une dizaine d’années d’expérience au sein d’études de premier plan, dont sept à travailler en binôme avec Marc Paturel au sein de Wargny Katz, Florence intervient dans les domaines de l’immobilier d’entreprise (investissement, promotion, aménagement) et conseille également une clientèle privée et des fondations dans leurs différents projets immobiliers."
    ],
    language: "Florence travaille aussi bien en anglais qu’en français.",
    linkedin: "https://www.linkedin.com"
  }
];

export default function Team() {
  return (
    <section id="equipe" className="bg-paper py-20 md:py-32">
      
      {/* Container global aligné gauche (pour le titre) */}
      <div className="w-full px-6 md:px-12 xl:px-[7.5rem]">
        
        {/* --- TITRE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-terracotta italic mb-8 leading-none font-bold">
            Notre équipe
          </h2>
        </motion.div>

        {/* --- CONTENU CENTRÉ (Même largeur que About et Expertise) --- */}
        <div className="mx-auto max-w-4xl flex flex-col gap-20 md:gap-32">
          
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Ligne de séparation au dessus de chaque membre */}
              <div className="w-full h-[1px] bg-primary mb-12 md:mb-16" />

              {/* 
                 GRILLE 2 COLONNES
                 - grid-cols-2 : Photo à gauche, Texte à droite
                 - gap-x-12 lg:gap-x-24 : Même espacement que les autres sections
              */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-24 items-start">
                
                {/* 1. Photo (Colonne Gauche) */}
                <div className="w-full">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 2. Infos (Colonne Droite) */}
                <div className="flex flex-col gap-6 w-full">
                  
                  {/* Nom */}
                  <h3 className="mt-[-5] p-0 leading-none font-serif text-[2rem] text-indigo font-bold tracking-[0.01813rem]">
                    {member.name}
                  </h3>

                  {/* Bio */}
                  <div className="text-black font-light text-sm md:text-[0.95rem] leading-[1.25] text-left space-y-4">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <p className="pt-2 italic text-primary/80">
                      {member.language}
                    </p>
                  </div>

                  {/* Bouton LinkedIn Rond */}
                  <div className="pt-4">
                    <Link 
                      href={member.linkedin} 
                      target="_blank"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary text-primary transition-all hover:bg-primary hover:text-white"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedinIn className="text-xl" />
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}