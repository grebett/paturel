"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] w-full overflow-hidden">
      
      {/* --- IMAGE DE FOND + GRADIENT --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Bureau Paturel Notaire"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* 
            L'overlay exact du Figma.
            J'ai ajouté 'mix-blend-multiply' optionnel : si tu trouves le bleu trop "laiteux" ou opaque 
            et qu'on ne voit plus assez la photo dessous, ajoute la classe 'mix-blend-multiply' 
            ou 'mix-blend-hard-light' à cette div.
            Pour l'instant, je le laisse en mode "Normal" comme ton CSS le suggère.
        */}
        <div 
          className="absolute inset-0 z-10 opacity-90"
          style={{
            background: "linear-gradient(306deg, rgba(37, 27, 94, 0.00) 3.99%, #251B5E 83.32%)"
          }}
        />
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        
        {/* Titre animé */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // J'ai remis ta couleur "cuivre" approximative, ajuste si tu as le code HEX exact du texte
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-[#E6C6B3] max-w-3xl italic"
        >
          Notre ambition : <br />
          <span className="not-italic">être les partenaires</span> <br />
          de nos clients.
        </motion.h1>

        {/* Le Tampon / Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 w-28 md:w-36"
        >
          {/* Note: Assure-toi que stamp.svg est bien blanc ou clair pour ressortir sur le bleu */}
          <Image
            src="/images/stamp.svg"
            alt="Sceau Paturel"
            width={140}
            height={140}
            className="w-full h-auto opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}