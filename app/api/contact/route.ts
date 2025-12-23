export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// Importe toutes les versions des templates (FR et EN)
import { 
  mailText, mjmlTemplate, mailSubject, 
  mailTextEn, mjmlTemplateEn, mailSubjectEn 
} from "./template";
import { renderMjml } from "@/lib/mailer/renderMjml";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Ajoute 'locale' à la déstructuration du corps de la requête
        const { firstname, lastname, email, phone, subject, message, locale } = body;

        if (!firstname || !lastname || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Champs obligatoires manquants." },
                { status: 400 }
            );
        }

        // --- Détermine quel jeu de templates utiliser ---
        // Par défaut, nous utilisons le français si la locale n'est pas "en"
        const isEnglish = locale === 'en';

        const selectedMjmlTemplate = isEnglish ? mjmlTemplateEn : mjmlTemplate;
        const selectedMailText = isEnglish ? mailTextEn : mailText;
        const selectedMailSubject = isEnglish ? mailSubjectEn : mailSubject;
        // -----------------------------------------------

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT!, 10) ?? 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        });

        // Utilise les templates sélectionnés
        const html = renderMjml(selectedMjmlTemplate({ firstname, lastname, email, phone, subject, message }));
        const text = selectedMailText({ firstname, lastname, email, phone, subject, message });
        
        // La ligne console.log a été commentée/supprimée car c'était du débogage
        // console.log(html, text);

        await transporter.sendMail({
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            // Utilise le générateur de sujet sélectionné
            subject: selectedMailSubject({ firstname, lastname, subject }),
            text,
            html,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Erreur envoi mail contact:", err);
        return NextResponse.json(
            { ok: false, error: "Erreur lors de l'envoi du message." },
            { status: 500 }
        );
    }
}