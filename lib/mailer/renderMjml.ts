import mjml2html from "mjml";

export function renderMjml(template: string) {
    const { html, errors } = mjml2html(template, { minify: false });
    if (errors.length) {
        // Affiche l'erreur précise dans votre terminal Next.js
        console.error("MJML Errors:", errors.map(e => e.formattedMessage).join("\n"));
        throw new Error("MJML render failed");
    }
    return html;
}