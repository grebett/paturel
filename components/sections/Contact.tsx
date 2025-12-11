"use client";

import { motion } from "framer-motion";

export default function Contact() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-peau">

      {/* Container global aligné */}
      <div className="w-full px-10 md:px-12 xl:px-[7.5rem]">

        {/* --- TITRE --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-primary italic mb-8 leading-none font-bold">
            Contact
          </h2>
        </motion.div>

        {/* --- WRAPPER DU FORMULAIRE --- */}
        <div className="flex justify-end w-full">

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full md:w-11/18 space-y-5"
          >

            {/* Ligne 1 : Prénom / Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstname" className="text-sm text-primary ml-4 font-thin">Prénom*</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Ecrire votre prénom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastname" className="text-sm text-primary ml-4 font-thin">Nom*</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Ecrire votre nom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
            </div>

            {/* Ligne 2 : Email / Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-primary ml-4 font-thin">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ecrire votre email"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm text-primary ml-4 font-thin">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Ecrire votre téléphone"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                />
              </div>
            </div>

            {/* Ligne 3 : Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-primary ml-4 font-medium">Message*</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Ecrire votre message"
                className="w-full bg-transparent border border-primary border-[1.5px] rounded-[2rem] px-4 py-6 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all resize-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

              {/* Mobile : champs obligatoires en premier */}
              <span className="text-xs text-body/70 order-1 md:order-2">
                *Champs obligatoires
              </span>

              {/* Bouton */}
              <button
                type="submit"
                className="bg-indigo text-white cursor-pointer font-sans text-m font-medium px-12 rounded-full hover:bg-indigo/80 transition-colors duration-300 shadow-lg h-10 order-2 md:order-1"
              >
                Envoyer votre message
              </button>
            </div>

          </motion.form>
        </div>
      </div>
    </section>
  );
}