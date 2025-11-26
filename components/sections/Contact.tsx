"use client";

import { motion } from "framer-motion";

export default function Contact() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu pourras brancher ton API d'envoi d'email plus tard
    alert("Message envoyé ! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* --- TITRE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-primary italic mb-12 md:mb-16"
        >
          Contact
        </motion.h2>

        {/* --- FORMULAIRE --- */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          
          {/* Ligne 1 : Prénom / Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-sm text-body ml-4">Prénom*</label>
              <input 
                type="text" 
                id="firstname" 
                placeholder="Ecrire votre prénom"
                className="w-full bg-transparent border border-primary rounded-full px-6 py-3 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="text-sm text-body ml-4">Nom*</label>
              <input 
                type="text" 
                id="lastname" 
                placeholder="Ecrire votre nom"
                className="w-full bg-transparent border border-primary rounded-full px-6 py-3 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
          </div>

          {/* Ligne 2 : Email / Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-body ml-4">Email*</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Ecrire votre email"
                className="w-full bg-transparent border border-primary rounded-full px-6 py-3 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm text-body ml-4">Téléphone</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Ecrire votre téléphone"
                className="w-full bg-transparent border border-primary rounded-full px-6 py-3 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          {/* Ligne 3 : Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-body ml-4">Message*</label>
            <textarea 
              id="message" 
              rows={6}
              placeholder="Ecrire votre message"
              className="w-full bg-transparent border border-primary rounded-[2rem] px-6 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              required
            />
          </div>

          {/* Mentions et Bouton */}
          <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <button 
              type="submit"
              className="bg-primary text-white font-sans text-sm font-bold py-4 px-12 rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
            >
              Envoyer votre message
            </button>
            <span className="text-xs text-primary/60 italic self-end md:self-auto">
              *Champs obligatoires
            </span>
          </div>

        </motion.form>
      </div>
    </section>
  );
}