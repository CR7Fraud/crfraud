// @ts-nocheck
import React from "react";
import { ExternalLink } from "lucide-react";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const en = {
  title: "The Champions League That Wasn't Clean",
  context_h: "The Context",
  context_p1:
    'Between 2016 and 2018, Real Madrid won three consecutive Champions Leagues - a historic feat. Ronaldo was the media protagonist of that sequence, accumulating goals, records and "Mr. Champions" narratives. The problem is what lay underneath: a series of serious refereeing decisions in decisive games that systematically benefited Real Madrid in moments when they could have been eliminated.',
  context_p2:
    'Those "survivals" became trophies. Those trophies became Ballon d\'Ors.',
  case1_year: "Final 2016",
  case1_title: "The Opening Goal That Was Illegal",
  case1_p1:
    "In the 2016 Champions League final, Sergio Ramos opens the scoring early. Atletico de Madrid equalise. Real win in extra time 4-1.",
  case1_p2:
    "What few know: in 2020, the final referee, Mark Clattenburg, publicly admitted that Ramos's goal was offside. His words:",
  case1_q: '"The goal was slightly offside, and we realised at half-time."',
  case1_p3:
    "The first major European title of the Real/Ronaldo era is literally built on an incident the referee himself acknowledges as irregular. Ronaldo scores from a penalty already in extra time, with the game decided - and enters the record books as European champion. Source:",
  case2_year: "2017 vs Bayern",
  case2_title: "Unjust Red Card, Two Offside Goals",
  case2_p1:
    "In the 2017 quarter-finals, Bayern arrive in Spain with the tie level and a squad that, in theory, was superior to Real that season.",
  case2_li1:
    "With the tie balanced, the referee sends off Arturo Vidal with a second yellow in an incident where replays clearly show he plays the ball. Bayern are reduced to ten men.",
  case2_li2:
    "Ronaldo scores two goals in visible offside positions, widely documented in the European press.",
  case2_q:
    '"When Madrid got scared, the referee started his show. This robbery cannot happen in the Champions League."',
  case2_p2:
    "Result: Real advance to the semi-finals with a Ronaldo hat-trick that includes at least one illegal goal, in a 11 v 10 game that should not have existed. That passage is a central piece of the back-to-back Champions League narrative - and of the arguments used to justify the 2017 Ballon d'Or.",
  case3_year: "2018 vs PSG",
  case3_title:
    "The Non-Existent Penalty and the Goal That Should Have Been Retaken",
  case3_p1:
    "In the 2018 round of 16, PSG arrive in Madrid winning the first leg.",
  case3_li1:
    'The referee awards a penalty against Kroos in an incident that Iturralde Gonzalez, a former Spanish referee, described as non-existent: "It\'s not a penalty. There is contact, but Kroos feels the arm and throws himself."',
  case3_li2:
    'Ronaldo converts. He later scores another penalty with the ball moving at the moment of the kick - a technical "double touch" that, according to the laws of the game, required a retake. Former English referee Graham Poll confirmed this in the British press.',
  case3_p2:
    "Real overturn 0-1 to 2-1. Two Ronaldo goals. At least one should not have counted. The other was born from a penalty that divided even the referees themselves.",
  case4_year: "2018 vs Juventus",
  case4_title: 'The 93rd-Minute Penalty and "The Robbery of the Century"',
  case4_p1:
    "This is the most emblematic case. Juventus do the impossible: lose 0-3 in Turin, go to Madrid and win 3-0 - tie level at 3-3.",
  case4_p2:
    "In the 93rd minute, referee Michael Oliver awards a penalty in a highly debatable incident of Benatia on Lucas Vazquez, and sends off Buffon for protesting. Ronaldo scores at 97 minutes.",
  case4_p3: "The reactions were historic:",
  case4_li1:
    '"This referee has a rubbish bin instead of a heart. You don\'t give a penalty like that in the 93rd minute."',
  case4_li2:
    "Chiellini makes the money gesture pointing to the Real Madrid badge - without needing to say a word.",
  case4_li3:
    'The Italian and Spanish press (including Sport de Barcelona) speak of "robbery of the century" and "worldwide outrage".',
  case4_p4:
    'Without that penalty, the tie goes to extra time with Juventus in full flow and the Bernabeu in shock. Real could very well have been eliminated - and with them, the treble of European titles that cemented Ronaldo\'s legend as "Mr. Champions" would have disappeared.',
  conclusion_h: "What This Means for Ronaldo's Trophy Haul",
  conclusion_p1: "Putting the four cases together:",
  conclusion_li1:
    "2016: opening goal of the final in offside, admitted by the referee.",
  conclusion_li2:
    "2017: Bayern eliminated with an unjust red card and Ronaldo goals in offside.",
  conclusion_li3:
    "2018 (PSG): dubious penalty and a goal technically illegal under the laws of the game.",
  conclusion_li4:
    "2018 (Juventus): 93rd-minute penalty that shocked half the world.",
  conclusion_p2:
    "In a scenario with VAR and consistent refereeing, Real could credibly and justifiably have won one or two fewer Champions Leagues in this cycle. Ronaldo's knockout-round goals - the basis of his European records - include at least three or four incidents that should not have counted.",
  conclusion_p3:
    'Those goals and those trophies were subsequently used, directly, as the central argument in the 2016 and 2017 Ballon d\'Ors. UEFA, France Football and the mainstream press justified both awards with "won the Champions League, scored in big games, was decisive in the knockouts". The Athletic, through Michael Cox, even proposed alternative winners precisely because the weight given to the Champions League distorted the assessment of real individual performance.',
  conclusion_p4:
    "There is no need to prove organised corruption to reach the central conclusion: a significant part of Ronaldo's European CV was built on games decided by serious refereeing errors in his club's favour. When that CV is used to argue for absolute superiority over Messi or anyone else, the argument rests on unstable foundations.",
};

const content = { en, pt: en, es: en, fr: en };

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

const sourceCardCopy = {
  en: {
    badge: "Source",
    cta: "Open article",
    title: "Clattenburg on 2016 Real Madrid-Atletico final",
    description:
      "AS USA video article with the referee's admission and the offside context.",
  },
};

const case2SourceCardCopy = {
  en: {
    badge: "Source",
    cta: "Open article",
    title: "Real-Bayern referee made two errors with Arturo Vidal",
    description:
      "Marca English report on the sending-off and the two officiating mistakes in the quarter-final.",
  },
};

export default function RiggedUCLSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const sourceCard = sourceCardCopy[lang] || sourceCardCopy.en;
  const case2SourceCard = case2SourceCardCopy[lang] || case2SourceCardCopy.en;

  const items = [
    {
      key: "context",
      title: c("context_h"),
      content: (
        <>
          <p>{c("context_p1")}</p>
          <p>{c("context_p2")}</p>
        </>
      ),
    },
    {
      key: "case1",
      title: `${c("case1_year")}: ${c("case1_title")}`,
      content: (
        <>
          <p>{c("case1_p1")}</p>
          <p>{c("case1_p2")}</p>
          <blockquote>{c("case1_q")}</blockquote>
          <p>{c("case1_p3")}</p>
          <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-card/20 shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
            <img
              src={`${import.meta.env.BASE_URL}assets/ramos-offside-analysis.png`}
              alt="Visual analysis of Sergio Ramos' offside goal in the 2016 Champions League final"
              className="block w-full"
            />
            <figcaption className="border-t border-white/10 bg-black/85 px-5 py-4 text-sm font-medium leading-snug text-zinc-200">
              Clattenburg admits error: Madrid's first goal in 2016 UCL final
              was offside
            </figcaption>
          </figure>
          <a
            href="https://en.as.com/en/2021/11/04/videos/1636052317_471606.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-amber-400/25 bg-gradient-to-r from-amber-500/20 via-[#151920] to-[#0f1319] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400/55 hover:shadow-[0_24px_70px_rgba(245,158,11,0.18)]"
          >
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 shadow-inner shadow-black/20">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-300 shadow-sm shadow-black/20">
                    {sourceCard.badge}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                    AS USA
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                    Video
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {sourceCard.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  {sourceCard.description}
                </p>
              </div>
              <span className="mt-1 hidden shrink-0 items-center gap-2 text-sm font-semibold text-amber-300 sm:inline-flex">
                {sourceCard.cta}
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        </>
      ),
    },
    {
      key: "case2",
      title: `${c("case2_year")}: ${c("case2_title")}`,
      content: (
        <>
          <p>{c("case2_p1")}</p>
          <ul>
            <li>{c("case2_li1")}</li>
            <li>{c("case2_li2")}</li>
          </ul>
          <a
            href="https://www.marca.com/en/football/real-madrid/2017/04/18/58f67cc922601da11e8b45c1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-6 block rounded-3xl border border-rose-400/25 bg-gradient-to-r from-rose-500/20 via-[#151920] to-[#0f1319] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-400/55 hover:shadow-[0_24px_70px_rgba(244,63,94,0.18)]"
          >
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-300 shadow-inner shadow-black/20">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-rose-200 shadow-sm shadow-black/20">
                    {case2SourceCard.badge}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                    MARCA
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                    Article
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {case2SourceCard.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  {case2SourceCard.description}
                </p>
              </div>
              <span className="mt-1 hidden shrink-0 items-center gap-2 text-sm font-semibold text-rose-300 sm:inline-flex">
                {case2SourceCard.cta}
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
          <blockquote>{c("case2_q")}</blockquote>
          <p>{c("case2_p2")}</p>
          <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-card/20 shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
            <img
              src={`${import.meta.env.BASE_URL}assets/2017-bayern-offside.png`}
              alt="Visual analysis of Ronaldo's offside positions in the 2017 Bayern tie"
              className="block w-full"
            />
            <figcaption className="border-t border-white/10 bg-black/85 px-5 py-4 text-sm font-medium leading-snug text-zinc-200">
              Two frames, one story: Ronaldo's position at the moment of the
              pass (top) and at the moment of the finish (bottom). Both goals
              were allowed. Neither should have been.
            </figcaption>
          </figure>
        </>
      ),
    },
    {
      key: "case3",
      title: `${c("case3_year")}: ${c("case3_title")}`,
      content: (
        <>
          <p>{c("case3_p1")}</p>
          <ul>
            <li>{c("case3_li1")}</li>
            <li>{c("case3_li2")}</li>
          </ul>
          <p>{c("case3_p2")}</p>
        </>
      ),
    },
    {
      key: "case4",
      title: `${c("case4_year")}: ${c("case4_title")}`,
      content: (
        <>
          <p>{c("case4_p1")}</p>
          <p>{c("case4_p2")}</p>
          <p>{c("case4_p3")}</p>
          <ul>
            <li>{c("case4_li1")}</li>
            <li>{c("case4_li2")}</li>
            <li>{c("case4_li3")}</li>
          </ul>
          <p>{c("case4_p4")}</p>
        </>
      ),
    },
    {
      key: "conclusion",
      title: c("conclusion_h"),
      content: (
        <>
          <p>{c("conclusion_p1")}</p>
          <ul>
            <li>{c("conclusion_li1")}</li>
            <li>{c("conclusion_li2")}</li>
            <li>{c("conclusion_li3")}</li>
            <li>{c("conclusion_li4")}</li>
          </ul>
          <p>{c("conclusion_p2")}</p>
          <p>{c("conclusion_p3")}</p>
          <p>{c("conclusion_p4")}</p>
        </>
      ),
    },
  ];

  return (
    <SectionWrapper
      id="rigged-ucl"
      label={t("label_ucl")}
      title={c("title")}
      dark
    >
      <SectionAccordionList items={items} dark />
    </SectionWrapper>
  );
}
