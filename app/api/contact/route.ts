export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { mailText, mjmlTemplate, mailSubject } from "./template";
import { renderMjml } from "@/lib/mailer/renderMjml";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { firstname, lastname, email, phone, subject, message } = body;

        if (!firstname || !lastname || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Champs obligatoires manquants." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT!, 10) ?? 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        });

        const html = renderMjml(mjmlTemplate({ firstname, lastname, email, phone, subject, message }));
        const text = mailText({ firstname, lastname, email, phone, subject, message });
        

        console.log(html, text);

        // return NextResponse.json({ ok: true });
        await transporter.sendMail({
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: mailSubject({ firstname, lastname, subject }),
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