import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Playfair_Display, Figtree } from "next/font/google";
import "../globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Import du Footer

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: 'variable',
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Paturel Notaires",
  description: "Étude notariale à Saint-Germain-en-Laye",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const messages = await getMessages();
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth scroll-pt-28">
      <body className={`${playfair.variable} ${figtree.variable} font-sans antialiased bg-white text-body`}>
        <NextIntlClientProvider messages={messages}>
        <Header />

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}