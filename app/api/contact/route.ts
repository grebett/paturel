import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Les variables sensibles dans .env.local
// SMTP_HOST=...
// SMTP_PORT=587
// SMTP_USER=...
// SMTP_PASS=...

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { firstname, lastname, email, phone, message } = body;

        if (!firstname || !lastname || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Champs obligatoires manquants." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: false, // true si port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailText = `
Nouveau message depuis le site Paturel Notaires :

Prénom : ${firstname}
Nom : ${lastname}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}

Message :
${message}
    `.trim();

// temp
console.log('📩', mailText)
    return NextResponse.json(
            { ok: true, data: "Perfect ça roule" },
            { status: 200 }
        );

        await transporter.sendMail({
            from: `"Site Paturel Notaires" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
            to: "accueil@paturel.notaires.fr",
            replyTo: email,
            subject: `Nouveau message de ${firstname} ${lastname}`,
            text: mailText,
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
