"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // 1. On importe useLocale

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale(); // 2. On récupère la locale actuelle (fr ou en)

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="etude" className="py-20 md:py-22 bg-paper">
      <div className="w-full px-10 md:px-12 xl:px-[7.5rem]">
        {/* --- TITRE --- */}
        <motion.h2
          key={`title-${locale}`} // 3. FORCE LE REFRESH : change à chaque langue
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // amount: déclenche quand 30% est visible (aide pour le blanc)
          className="font-serif text-5xl md:text-[4rem] text-terracotta font-bold italic mb-16 md:mb-20 leading-none"
        >
          {t("title")}
        </motion.h2>

        <div className="mx-auto max-w-4xl h-[1px] bg-primary mb-12 md:mb-18" />

        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-12 lg:gap-x-24 items-start">
          
          {/* --- BLOC 1 --- */}
          <motion.div
            key={`block1-${locale}`} // Clé unique par langue
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2 space-y-6 text-left text-indigo text-lg md:text-xl font-medium"
          >
            <p>{t("intro.p1")}</p>
            <p>{t("intro.p2")}</p>
            <p>{t("intro.p3")}</p>
          </motion.div>

          {/* --- BLOC 2 --- */}
          <motion.div
            key={`block2-${locale}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 text-black text-left md:text-[0.95rem] space-y-6 leading-[1.4]"
          >
            <p className="font-light">{t("vision.p1")}</p>
            <p className="font-light">{t("vision.p2")}</p>
            <p className="font-light">{t("vision.p3")}</p>
          </motion.div>

          {/* --- BLOC 3 (IMAGE) --- */}
          <motion.div
            key={`img-${locale}`}
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 w-full h-[320px] md:h-[480px] relative overflow-hidden"
          >
            <Image
              src="/images/office.jpg"
              alt={t("a11y.office_alt")}
              fill
              className="object-cover"
              // L'image Next.js gère son propre chargement, mais le motion wrapper gère l'opacité
            />
          </motion.div>

          {/* --- BLOC 4 --- */}
          <motion.div
            key={`block4-${locale}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 text-black font-light text-left text-sm md:text-[0.95rem] space-y-6 leading-[1.4]"
          >
            <p>{t("details.p1")}</p>
            <p>{t("details.p2")}</p>
            <p>{t("details.p3")}</p>
            <p>{t("details.p4")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}