"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa"; // Assure-toi d'avoir installé react-icons

const teamMembers = [
  {
    name: "Marc Paturel",
    image: "/images/marc-paturel.png",
    bio: [
      "Fort d’une expérience de plus de vingt-cinq ans dont quinze en qualité de notaire associé au sein de Wargny Katz, spécialisé en immobilier d’entreprise et institutionnel, Marc conseille une clientèle d’investisseurs notamment étrangers, promoteurs, grands utilisateurs, établissements de crédit pour tout type d’opérations d’investissement en immobilier d’entreprise.",
      "Marc conseille également une clientèle privée et des fondations dans leurs différents projets immobiliers."
    ],
    language: "Marc travaille aussi bien en anglais qu’en français.",
    linkedin: "https://www.linkedin.com" // Ajoute le vrai lien plus tard
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
    <section id="equipe" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- TITRE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#D4A373] italic">
            Notre équipe
          </h2>
        </motion.div>

        {/* --- LISTE MEMBRES --- */}
        <div className="flex flex-col gap-20 md:gap-32">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Ligne de séparation avant chaque membre (optionnel, ou juste le premier) */}
              <div className="w-full h-[1px] bg-primary/20 mb-12 md:mb-16" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                
                {/* 1. Photo (Gauche) */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 2. Infos (Droite) */}
                <div className="md:col-span-8 lg:col-span-7 lg:col-start-6 flex flex-col gap-6">
                  <h3 className="font-serif text-3xl md:text-4xl text-primary font-bold">
                    {member.name}
                  </h3>

                  <div className="text-body text-base md:text-lg leading-relaxed space-y-4 text-justify md:text-left">
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
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary text-primary transition-all hover:bg-primary hover:text-white"
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