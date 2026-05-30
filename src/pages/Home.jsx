import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useI18n } from "../lib/i18n";

const assetPath = (fileName) =>
  new URL(`assets/homepageCardImages/${fileName}`, document.baseURI).href;

const sectionCards = [
  {
    path: "/ballon-dor",
    key: "nav_ballon",
    desc: "ballon_desc",
    image: assetPath("balondor.png"),
    featured: true,
  },
  {
    path: "/rigged-ucl",
    key: "nav_ucl",
    desc: "ucl_desc",
    image: assetPath("riggeducl.png"),
  },
  {
    path: "/managers",
    key: "nav_managers",
    desc: "managers_desc",
    image: assetPath("sackedmanagers.png"),
  },
  {
    path: "/character-behaviour",
    key: "nav_character",
    desc: "character_desc",
    image: assetPath("characterBehavior.png"),
  },
  {
    path: "/national-team",
    key: "nav_national",
    desc: "national_desc",
    image: assetPath("nationalteam.png"),
  },
  {
    path: "/liga-comprada",
    key: "nav_liga",
    desc: "liga_desc",
    image: assetPath("boughtleague.png"),
  },
  {
    path: "/why-messi",
    key: "nav_messi",
    desc: "messi_desc",
    image: assetPath("whymessi.png"),
  },
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
      <main className="bg-[#f0f0f0] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[180px] md:grid-flow-row-dense">
            {sectionCards.map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className={`group relative overflow-hidden rounded-[12px] border border-[#c8a84b] bg-black shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.24)] ${
                  card.featured
                    ? "md:row-span-2 min-h-[360px] md:min-h-0"
                    : "min-h-[180px]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.3)_60%,transparent_100%)]"
                  aria-hidden="true"
                />
                <div className="relative flex h-full items-end p-4">
                  <div className="max-w-[92%]">
                    <h3 className="text-[18px] font-bold leading-tight text-white">
                      {t(card.key)}
                    </h3>
                    <p className="mt-2 text-[13px] leading-snug text-white/75">
                      {descs[card.desc]}
                    </p>
                    <span className="mt-3 inline-flex text-[13px] font-semibold text-[#c8a84b]">
                      {lang === "pt"
                        ? "Ler →"
                        : lang === "es"
                          ? "Leer →"
                          : lang === "fr"
                            ? "Lire →"
                            : "Read →"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
