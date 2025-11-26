"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      
      {/* --- IMAGE DE FOND --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Bureau Paturel Notaire"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Gradient exact Figma */}
        <div 
          className="absolute inset-0 z-10 opacity-98"
          style={{
            background: "linear-gradient(306deg, rgba(37, 27, 94, 0.00) 3.99%, #251B5E 83.32%)"
          }}
        />
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-20 h-full w-full px-6 md:px-12 xl:px-[7.5rem] flex flex-col justify-center">
        {/* Titre */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif md:text-[2.3rem] xl:text-[3.5rem] italic font-semibold md:leading-12.5 xl:leading-18 tracking-[0.0275rem] text-terracotta max-w-4xl [font-feature-settings:'calt','liga']"
        >
          Notre ambition :<br />
          être les partenaires<br />
          de nos clients.
        </motion.h1>

        {/* Sceau */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 w-28 md:w-28 xl:w-40"
        >
          <Image
            src="/images/stamp.svg"
            alt="Sceau Paturel"
            width={140}
            height={140}
            className="w-full h-auto opacity-100"
          />
        </motion.div>
      </div>
    </section>
  );
}