import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageSquare, Twitter } from "lucide-react";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "Contact",
    subtitle:
      "Got better data, a correction to make, or just want to talk football? Get in touch.",
    emailLabel: "Personal Dev Email",
    twitterLabel: "Twitter / X",
    discordLabel: "Discord",
  },
  pt: {
    title: "Contacto",
    subtitle:
      "Tens dados melhores, uma correção a fazer ou simplesmente queres falar sobre futebol? Entra em contacto.",
    emailLabel: "Email pessoal de desenvolvimento",
    twitterLabel: "Twitter / X",
    discordLabel: "Discord",
  },
  es: {
    title: "Contacto",
    subtitle:
      "¿Tienes mejores datos, una corrección que hacer o simplemente quieres hablar de fútbol? Ponte en contacto.",
    emailLabel: "Correo personal de desarrollo",
    twitterLabel: "Twitter / X",
    discordLabel: "Discord",
  },
  fr: {
    title: "Contact",
    subtitle:
      "Tu as de meilleures données, une correction à proposer ou tu veux simplement parler de football ? Contacte-moi.",
    emailLabel: "E-mail personnel de développement",
    twitterLabel: "Twitter / X",
    discordLabel: "Discord",
  },
};

const fallback = (copy, lang, key) => copy[lang]?.[key] || copy.en[key];

export default function Contact() {
  const { lang } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
          {c("title")}
        </h1>
        <p className="text-muted-foreground text-base mb-12 leading-relaxed">
          {c("subtitle")}
        </p>

        <div className="space-y-4">
          <a
            href="mailto:info@crfraud.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber-400/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {c("emailLabel")}
              </p>
              <p className="text-muted-foreground text-sm">
                pedroseixasa@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://twitter.com/cr7fraud_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber-400/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Twitter className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {c("twitterLabel")}
              </p>
              <p className="text-muted-foreground text-sm">@cr7fraud_</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {c("discordLabel")}
              </p>
              <p className="text-muted-foreground text-sm">pedrini_ogfounder</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
