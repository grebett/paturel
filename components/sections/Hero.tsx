"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[calc(100svh-80px)] md:min-h-200"
    >
      {/* --- IMAGE DE FOND --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt={t("a11y.bg_alt")}
          fill
          className="object-cover object-bottom"
          priority
        />
        <div
          className="absolute inset-0 z-10 opacity-98"
          style={{
            backgroundColor: '#251B5E',
            background: "linear-gradient(130deg, rgba(37, 27, 94, 1) 3%, rgba(37, 27, 94, 0.86) 35%, rgba(37, 27, 94, 0.7) 56%, rgba(37, 27, 94, 0.46) 80%, rgba(37, 27, 94, 0.16) 100%)"
          }}
        />
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-20 md:h-full w-full px-10 md:px-20 xl:px-[7.5rem] flex flex-col justify-center pt-30 md:pt-50">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif whitespace-pre-line text-[2rem] md:text-[2.8rem] xl:text-[3rem] italic font-semibold tracking-[0.0275rem] text-terracotta max-w-4xl [font-feature-settings:'calt','liga'] md:leading-[3.5rem] xl:leading-[4rem]"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 w-38 md:w-35 xl:w-40"
        >
          <Image
            src="/images/stamp.svg"
            alt={t("a11y.stamp_alt")}
            width={140}
            height={140}
            className="w-full h-auto opacity-100"
          />
        </motion.div>
      </div>
    </section>
  );
}