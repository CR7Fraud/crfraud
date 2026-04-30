import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
          Contacto
        </h1>
        <p className="text-muted-foreground text-base mb-12 leading-relaxed">
          Tens dados melhores, uma correcao a fazer ou simplesmente queres falar
          sobre futebol? Entra em contacto.
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
              <p className="font-semibold text-foreground text-sm">Email</p>
              <p className="text-muted-foreground text-sm">p</p>
            </div>
          </a>

          <a
            href="https://twitter.com/crfraud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber-400/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Twitter className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                Twitter / X
              </p>
              <p className="text-muted-foreground text-sm">@crfraud_</p>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
