import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useI18n } from "../lib/i18n";

const sectionCards = [
  { path: "/ballon-dor", key: "nav_ballon", icon: "🏆", desc: "ballon_desc" },
  { path: "/rigged-ucl", key: "nav_ucl", icon: "⚽", desc: "ucl_desc" },
  { path: "/managers", key: "nav_managers", icon: "👔", desc: "managers_desc" },
  {
    path: "/character-behaviour",
    key: "nav_character",
    icon: "🧩",
    desc: "character_desc",
  },
  {
    path: "/national-team",
    key: "nav_national",
    icon: "🇵🇹",
    desc: "national_desc",
  },
  { path: "/liga-comprada", key: "nav_liga", icon: "💰", desc: "liga_desc" },
  { path: "/why-messi", key: "nav_messi", icon: "⭐", desc: "messi_desc" },
];

const cardDescs = {
  pt: {
    ballon_desc:
      "Análise das 5 Bolas de Ouro de Ronaldo e o padrão que as une.",
    ucl_desc:
      "As polémicas arbitrais que moldaram a era de Champions do Real Madrid.",
    managers_desc:
      "Dezasseis anos. Quatro clubes. Os treinadores que pagaram a conta.",
    selfish_desc: "O padrão de comportamento em campo e fora dele.",
    character_desc: "Egoísmo, lágrimas e hipocrisia num só bloco.",
    national_desc: "Quem realmente carregou Portugal nos grandes torneios.",
    crying_desc:
      "Drama nas redes sociais e a máquina de manipulação mediática.",
    hypocrisy_desc: "O que disse, o que fez, e a diferença entre os dois.",
    liga_desc: "A liga saudita, os árbitros e os prémios de consolação.",
    messi_desc: "Dados, estatísticas e argumentos para encerrar o debate.",
  },
  en: {
    ballon_desc:
      "Analysis of Ronaldo's 5 Ballon d'Ors and the pattern connecting them.",
    ucl_desc:
      "The refereeing controversies that shaped Real Madrid's Champions era.",
    managers_desc:
      "Sixteen years. Four clubs. The managers who paid the price.",
    selfish_desc: "The pattern of behaviour on and off the pitch.",
    character_desc: "Selfishness, tears and hypocrisy in one grouped page.",
    national_desc: "Who really carried Portugal in the major tournaments.",
    crying_desc: "Social media drama and the media manipulation machine.",
    hypocrisy_desc: "What he said, what he did, and the gap between the two.",
    liga_desc: "The Saudi league, the referees and the consolation prizes.",
    messi_desc: "Data, statistics and arguments to close the debate.",
  },
  es: {
    ballon_desc:
      "Análisis de los 5 Balones de Oro de Ronaldo y el patrón que los une.",
    ucl_desc:
      "Las polémicas arbitrales que moldearon la era Champions del Real Madrid.",
    managers_desc:
      "Dieciséis años. Cuatro clubes. Los entrenadores que pagaron la cuenta.",
    selfish_desc: "El patrón de comportamiento dentro y fuera del campo.",
    character_desc: "Egoísmo, lágrimas e hipocresía en una sola página.",
    national_desc: "Quién realmente cargó a Portugal en los grandes torneos.",
    crying_desc:
      "Drama en redes sociales y la máquina de manipulación mediática.",
    hypocrisy_desc: "Lo que dijo, lo que hizo y la diferencia entre ambos.",
    liga_desc: "La liga saudí, los árbitros y los premios de consolación.",
    messi_desc: "Datos, estadísticas y argumentos para cerrar el debate.",
  },
  fr: {
    ballon_desc:
      "Analyse des 5 Ballons d'Or de Ronaldo et le schéma qui les relie.",
    ucl_desc:
      "Les controverses arbitrales qui ont façonné l'ère Champions du Real Madrid.",
    managers_desc:
      "Seize ans. Quatre clubs. Les entraîneurs qui ont payé le prix.",
    selfish_desc: "Le schéma de comportement sur et hors du terrain.",
    character_desc: "Égoïsme, larmes et hypocrisie réunis dans une seule page.",
    national_desc: "Qui a vraiment porté le Portugal dans les grands tournois.",
    crying_desc:
      "Drama sur les réseaux sociaux et la machine de manipulation médiatique.",
    hypocrisy_desc:
      "Ce qu'il a dit, ce qu'il a fait, et la différence entre les deux.",
    liga_desc: "La ligue saoudienne, les arbitres et les prix de consolation.",
    messi_desc: "Données, statistiques et arguments pour clore le débat.",
  },
};

export default function Home() {
  const { t, lang } = useI18n();
  const descs = cardDescs[lang] || cardDescs.pt;

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectionCards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group block p-6 rounded-2xl border border-border bg-card hover:border-amber-400/50 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-3xl mb-3 block">{card.icon}</span>
              <h3 className=" font-bold text-lg text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                {t(card.key)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {descs[card.desc]}
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-amber-500 gap-1">
                {lang === "pt"
                  ? "Ler →"
                  : lang === "es"
                    ? "Leer →"
                    : lang === "fr"
                      ? "Lire →"
                      : "Read →"}
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
