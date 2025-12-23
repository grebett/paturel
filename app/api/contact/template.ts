export const mjmlTemplate = ({ 
  firstname, 
  lastname, 
  email, 
  phone, 
  subject, 
  message 
}: { 
  firstname: string, 
  lastname: string, 
  email: string, 
  phone: string, 
  subject: string, 
  message: string 
}) => `
<mjml>
  <mj-head>
    <mj-title>Nouveau contact - Paturel Notaires</mj-title>
    <mj-preview>Nouveau message de ${firstname} ${lastname} - ${subject}</mj-preview>
    <mj-attributes>
      <mj-all font-family="'Figtree', Helvetica, Arial, sans-serif" color="#4A4A4A" />
      <mj-text font-size="16px" line-height="24px" />
      <mj-section padding="0px" />
    </mj-attributes>
    <!-- URLs Google Fonts avec &amp; pour respecter le XML -->
    <mj-font name="Playfair Display" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;display=swap" />
    <mj-font name="Figtree" href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;600&amp;display=swap" />
  </mj-head>
  <mj-body background-color="#FFFBFA">
    
    <!-- HEADER -->
    <mj-section background-color="#251B5E" padding="32px 24px">
      <mj-column>
        <mj-text align="center" color="#FFFFFF" font-family="'Playfair Display', Georgia, serif" font-size="24px" letter-spacing="1px" text-transform="uppercase">
          Paturel Notaires
        </mj-text>
        <mj-text align="center" color="#CC978A" font-size="14px" padding-top="8px" font-weight="600" text-transform="uppercase" letter-spacing="2px">
          Notification de contact
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- SPACER -->
    <mj-section padding="20px"></mj-section>

    <!-- MAIN CARD -->
    <mj-section padding="0 16px">
      <mj-column background-color="#FFFFFF" border-radius="4px" padding="32px 24px" border-top="4px solid #CC978A">
        
        <!-- INTRO -->
        <mj-text font-family="'Playfair Display', Georgia, serif" font-size="20px" color="#251B5E">
          Bonjour,
        </mj-text>
        <mj-text padding-top="16px">
          Vous avez reçu un nouveau message via le formulaire de contact du site internet.
        </mj-text>

        <mj-divider border-color="#FBF2EE" border-width="2px" padding="24px 0" />

        <!-- INFORMATIONS CLIENT -->
        <mj-text font-weight="600" color="#251B5E" font-size="14px" text-transform="uppercase" letter-spacing="1px" padding-bottom="12px">
          Informations de l'expéditeur
        </mj-text>

        <mj-table cellpadding="4px" table-layout="fixed">
          <tr>
            <td style="width:100px; color:#CC978A; font-weight:600; font-size:14px;">Nom :</td>
            <td style="color:#4A4A4A; font-weight:600;">${firstname} ${lastname}</td>
          </tr>
          <tr>
            <td style="width:100px; color:#CC978A; font-weight:600; font-size:14px;">Email :</td>
            <td style="color:#4A4A4A;">
              <a href="mailto:${email}" style="color:#251B5E; text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="width:100px; color:#CC978A; font-weight:600; font-size:14px;">Tél :</td>
            <td style="color:#4A4A4A;">${phone || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="width:100px; color:#CC978A; font-weight:600; font-size:14px;">Objet :</td>
            <td style="color:#4A4A4A; font-weight:600;">${subject}</td>
          </tr>
        </mj-table>

        <mj-divider border-color="#FBF2EE" border-width="2px" padding="24px 0" />

        <!-- MESSAGE CONTENT -->
        <mj-text font-weight="600" color="#251B5E" font-size="14px" text-transform="uppercase" letter-spacing="1px" padding-bottom="12px">
          Message
        </mj-text>

        <!-- CORRECTION : On injecte une DIV HTML standard pour gérer le background et le border-radius -->
        <mj-text padding="0">
          <div style="background-color:#FBF2EE; border-radius:4px; padding:16px; font-style:italic; color:#4A4A4A; line-height:26px;">
            « ${message.replace(/\n/g, "<br />")} »
          </div>
        </mj-text>

        <!-- BUTTON -->
        <mj-button href="mailto:${email}?subject=RE: ${subject}" background-color="#251B5E" color="#FFFFFF" font-family="'Figtree', sans-serif" font-weight="600" border-radius="2px" padding-top="32px">
          Répondre à ${firstname} ${lastname}
        </mj-button>

      </mj-column>
    </mj-section>

    <!-- FOOTER -->
    <mj-section padding="24px 0 48px 0">
      <mj-column>
        <mj-text align="center" color="#999999" font-size="12px">
          Cet email a été envoyé automatiquement depuis le site www.paturel-notaires.fr
        </mj-text>
      </mj-column>
    </mj-section>

  </mj-body>
</mjml>
`;


export const mailText = ({ firstname, lastname, email, phone, subject, message }: { firstname: string, lastname: string, email: string, phone: string, subject: string, message: string }) => `
Bonjour. Vous avez reçu un nouveau message depuis le site Paturel Notaires :

Prénom : ${firstname}
Nom : ${lastname}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}

Objet de la demande: ${subject}

Message :
${message}
`
export const mailSubject = ({ firstname, lastname, subject }: { firstname: string, lastname: string, subject: string }) => `Nouveau message de ${firstname} ${lastname} (${subject})`