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
      <div className="w-full px-6 md:px-12 xl:px-[7.5rem]">
        
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
            className="w-full max-w-3xl space-y-8"
          >
            
            {/* Ligne 1 : Prénom / Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstname" className="text-sm text-primary ml-4 font-thin">Prénom*</label>
                <input 
                  type="text" 
                  id="firstname" 
                  placeholder="Ecrire votre prénom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-11"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastname" className="text-sm text-primary ml-4 font-thin">Nom*</label>
                <input 
                  type="text" 
                  id="lastname" 
                  placeholder="Ecrire votre nom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-11"
                  required
                />
              </div>
            </div>

            {/* Ligne 2 : Email / Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-primary ml-4 font-thin">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Ecrire votre email"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-11"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-primary ml-4 font-thin">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Ecrire votre téléphone"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-11"
                />
              </div>
            </div>

            {/* Ligne 3 : Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-primary ml-4 font-medium">Message*</label>
              <textarea 
                id="message" 
                rows={6}
                placeholder="Ecrire votre message"
                className="w-full bg-transparent border border-primary border-[1.5px] rounded-[2rem] px-4 py-6 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all resize-none"
                required
              />
            </div>

            {/* Mentions et Bouton */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
               <button 
                type="submit"
                className="bg-indigo text-white cursor-pointer font-sans text-sm font-medium px-12 rounded-full hover:bg-indigo/80 transition-colors duration-300 shadow-lg h-11"
              >
                Envoyer votre message
              </button>
              <span className="text-xs text-body/70 self-end md:self-auto">
                *Champs obligatoires
              </span>
            </div>

          </motion.form>
        </div>
      </div>
    </section>
  );
}