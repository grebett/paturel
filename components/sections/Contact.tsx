"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [toast, setToast] = React.useState<null | { type: "success" | "error"; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    setIsSubmitting(true);
    setToast(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      // Succès : reset du formulaire + toast
      form.reset();
      setToast({
        type: "success",
        message: "Votre message a bien été envoyé.",
      });
    } catch (err) {
      console.error("Erreur envoi formulaire :", err);
      setToast({
        type: "error",
        message: "Une erreur est survenue. Merci de réessayer ou d'écrire à accueil@paturel.notaires.fr.",
      });
    } finally {
      setIsSubmitting(false);
      // auto-hide du toast après 4s
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-peau">

      {/* Container global aligné */}
      <div className="w-full px-10 md:px-24 xl:px-[7.5rem]">

        {/* --- TITRE --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-[4rem] text-primary italic mb-8 leading-none font-bold">
            Contact &<br />Recrutement
          </h2>
        </motion.div>

        {/* --- WRAPPER DU FORMULAIRE --- */}
        <div className="grid grid-cols-1 md:grid-cols-[32%_60%] gap-30 w-full">


          {/* Texte gauche */}
          <div className="flex flex-col justify-start">
            <p className="text-primary/80 text-sm leading-5 md:pt-6">
              Nous sommes à votre disposition pour toute demande d'information ou toute question. Vous pouvez nous les adresser via le formulaire ci-contre.
              <br /><br />L'étude Paturel Notaires est en quête constante de nouveaux talents.
              Vous souhaitez nous rejoindre ? Adressez nous votre candidature selon le formulaire de contact ci-contre.
            </p>
          </div>

          {/* Formulaire droite */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstname" className="text-sm text-primary ml-4 font-thin">
                  Prénom*
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Ecrire votre prénom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastname" className="text-sm text-primary ml-4 font-thin">
                  Nom*
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Ecrire votre nom"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
            </div>

            {/* Ligne 2 : Email / Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-primary ml-4 font-thin">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ecrire votre email"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm text-primary ml-4 font-thin">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ecrire votre téléphone"
                  className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                />
              </div>
            </div>

            {/* Ligne 3 : Sujet de la demande */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm text-primary ml-4 font-medium">
                Sujet de la demande*
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full bg-transparent border border-primary border-[1.5px] rounded-full px-4 py-2 text-primary text-sm md:text-[0.95rem] placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all h-10"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir le motif de votre demande
                </option>
                <option value="information">Demande d&apos;information</option>
                <option value="rendez-vous">Prise de rendez-vous</option>
                <option value="acte">Question relative à un dossier / acte</option>
                <option value="recrutement">Candidature / recrutement</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            {/* Ligne 3 : Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-primary ml-4 font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Ecrire votre message"
                className="w-full bg-transparent border border-primary border-[1.5px] rounded-[2rem] px-4 py-6 text-primary placeholder:text-primary/40 focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all resize-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <span className="text-xs text-body/70 order-1 md:order-2">
                *Champs obligatoires
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo text-white cursor-pointer font-sans text-m font-medium px-12 rounded-full hover:bg-indigo/80 disabled:opacity-60 disabled:cursor-not-allowed transition-colors durée-300 shadow-lg h-10 order-2 md:order-1"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full text-xs md:text-sm shadow-lg flex items-center gap-3
              ${toast.type === "success" ? "text-primary bg-white" : "bg-amber-900 text-white"}`}
          >
            <span>{toast.message}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-white/80 hover:text-white text-[10px] uppercase tracking-[0.12em]"
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}