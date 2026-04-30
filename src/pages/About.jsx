import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title_1: 'About ',
    title_2: 'CRFraud',
    p1: "CRFraud is a project of critical and documented analysis of Cristiano Ronaldo's career. It is not a hate site — it is an archive of facts, statistics, public statements and patterns of behaviour that rarely appear together in one place.",
    p2: "The goal is simple: to give readers the tools to evaluate, with real data, one of the noisiest debates in modern football. Each page addresses a specific topic — from the Ballon d'Or controversies and the Champions League refereeing scandals, to behaviour on and off the pitch, through to the legacy in the Portuguese national team and the Saudi project.",
    p3: 'This site is for those who want to go beyond marketing narratives and understand what the numbers, the reference journalism and the words of those involved actually say when placed side by side. It is for football fans who appreciate honest analysis, regardless of the club they support.',
    p4: 'CRFraud is built independently, with no affiliation to any club, federation or media outlet. The content is based on verifiable public sources: statistics from sites like Opta and FBref, reporting from outlets such as The Athletic, Sport, Marca and ESPN, and public statements from the people involved.',
    p5: 'If there is a better argument than the one presented, bring the data. That is what this site asks of everyone.',
  },
  pt: {
    title_1: 'Sobre o ',
    title_2: 'CRFraud',
    p1: 'O CRFraud é um projeto de análise crítica e documentada sobre a carreira de Cristiano Ronaldo. Não é um site de ódio — é um arquivo de factos, estatísticas, declarações públicas e padrões de comportamento que raramente aparecem juntos num só lugar.',
    p2: 'O objetivo é simples: dar ao leitor as ferramentas para avaliar, com dados reais, um dos debates mais ruidosos do futebol moderno. Cada página aborda um tema específico — desde as Bolas de Ouro e as polémicas arbitrais da Champions, até ao comportamento dentro e fora de campo, passando pelo legado na seleção portuguesa e pelo projeto saudita.',
    p3: 'Este site é para quem quer ir além das narrativas de marketing e perceber o que os números, os jornais de referência e as próprias palavras dos envolvidos dizem quando são postos lado a lado. É para adeptos de futebol que apreciam análise honesta, independentemente do clube que apoiam.',
    p4: 'O CRFraud é construído de forma independente, sem afiliação a qualquer clube, federação ou meio de comunicação. O conteúdo baseia-se em fontes públicas verificáveis: estatísticas de sites como Opta e FBref, reportagens de meios como The Athletic, Sport, Marca e ESPN, e declarações públicas dos próprios intervenientes.',
    p5: 'Se há um argumento melhor do que o apresentado, traz os dados. É isso que este site pede a toda a gente.',
  },
  es: {
    title_1: 'Sobre ',
    title_2: 'CRFraud',
    p1: 'CRFraud es un proyecto de análisis crítico y documentado sobre la carrera de Cristiano Ronaldo. No es un sitio de odio — es un archivo de hechos, estadísticas, declaraciones públicas y patrones de comportamiento que raramente aparecen juntos en un solo lugar.',
    p2: "El objetivo es simple: darle al lector las herramientas para evaluar, con datos reales, uno de los debates más ruidosos del fútbol moderno. Cada página aborda un tema específico — desde los Balones de Oro y las polémicas arbitrales de la Champions, hasta el comportamiento dentro y fuera del campo, pasando por el legado en la selección portuguesa y el proyecto saudí.",
    p3: 'Este sitio es para quienes quieren ir más allá de las narrativas de marketing y entender qué dicen los números, el periodismo de referencia y las propias palabras de los implicados cuando se ponen lado a lado. Es para aficionados al fútbol que aprecian el análisis honesto, independientemente del club que apoyen.',
    p4: 'CRFraud está construido de forma independiente, sin afiliación a ningún club, federación ni medio de comunicación. El contenido se basa en fuentes públicas verificables: estadísticas de sitios como Opta y FBref, reportajes de medios como The Athletic, Sport, Marca y ESPN, y declaraciones públicas de los propios implicados.',
    p5: 'Si hay un argumento mejor que el presentado, trae los datos. Eso es lo que este sitio le pide a todo el mundo.',
  },
  fr: {
    title_1: 'À propos de ',
    title_2: 'CRFraud',
    p1: "CRFraud est un projet d'analyse critique et documentée de la carrière de Cristiano Ronaldo. Ce n'est pas un site de haine — c'est une archive de faits, de statistiques, de déclarations publiques et de schémas de comportement qui apparaissent rarement ensemble en un seul endroit.",
    p2: "L'objectif est simple : donner au lecteur les outils pour évaluer, avec des données réelles, l'un des débats les plus bruyants du football moderne. Chaque page aborde un sujet spécifique — des controverses du Ballon d'Or et des scandales arbitraux en Ligue des Champions, au comportement sur et hors du terrain, en passant par l'héritage en équipe nationale portugaise et le projet saoudien.",
    p3: "Ce site est pour ceux qui veulent aller au-delà des récits marketing et comprendre ce que les chiffres, le journalisme de référence et les propres mots des personnes impliquées disent lorsqu'ils sont mis côte à côte. C'est pour les fans de football qui apprécient une analyse honnête, quel que soit le club qu'ils soutiennent.",
    p4: "CRFraud est construit de manière indépendante, sans affiliation à aucun club, fédération ou média. Le contenu est basé sur des sources publiques vérifiables : statistiques de sites comme Opta et FBref, reportages de médias comme The Athletic, Sport, Marca et ESPN, et déclarations publiques des personnes concernées.",
    p5: "S'il existe un meilleur argument que celui présenté, apportez les données. C'est ce que ce site demande à tout le monde.",
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function About() {
  const { lang } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-8">
          {c('title_1')}<span className="text-amber-500">{c('title_2')}</span>
        </h1>
        <div className="prose-content space-y-6 text-foreground/80 leading-relaxed text-base">
          <p>{c('p1')}</p>
          <p>{c('p2')}</p>
          <p>{c('p3')}</p>
          <p>{c('p4')}</p>
          <p>{c('p5')}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}