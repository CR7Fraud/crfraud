import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'The Champions League That Wasn\'t Clean',
    context_h: 'The Context',
    context_p1: 'Between 2016 and 2018, Real Madrid won three consecutive Champions Leagues — a historic feat. Ronaldo was the media protagonist of that sequence, accumulating goals, records and "Mr. Champions" narratives. The problem is what lay underneath: a series of serious refereeing decisions in decisive games that systematically benefited Real Madrid in moments when they could have been eliminated.',
    context_p2: 'Those "survivals" became trophies. Those trophies became Ballon d\'Ors.',
    case1_year: 'Final 2014',
    case1_title: 'The Opening Goal That Was Illegal',
    case1_p1: 'In the 2014 Champions League final, Sergio Ramos opens the scoring early. Atlético de Madrid equalise. Real win in extra time 4-1.',
    case1_p2: 'What few know: in 2020, the final referee, Mark Clattenburg, publicly admitted that Ramos\'s goal was offside. His words:',
    case1_q: '"The goal was slightly offside, and we realised at half-time."',
    case1_p3: 'The first major European title of the Real/Ronaldo era is literally built on an incident the referee himself acknowledges as irregular. Ronaldo scores from a penalty already in extra time, with the game decided — and enters the record books as European champion.',
    case2_year: '2017 vs Bayern',
    case2_title: 'Unjust Red Card, Two Offside Goals',
    case2_p1: 'In the 2017 quarter-finals, Bayern arrive in Spain with the tie level and a squad that, in theory, was superior to Real that season.',
    case2_li1: 'With the tie balanced, the referee sends off Arturo Vidal with a second yellow in an incident where replays clearly show he plays the ball. Bayern are reduced to ten men.',
    case2_li2: 'Ronaldo scores two goals in visible offside positions, widely documented in the European press.',
    case2_q: '"When Madrid got scared, the referee started his show. This robbery cannot happen in the Champions League."',
    case2_p2: 'Result: Real advance to the semi-finals with a Ronaldo hat-trick that includes at least one illegal goal, in a 11 v 10 game that should not have existed. That passage is a central piece of the back-to-back Champions League narrative — and of the arguments used to justify the 2017 Ballon d\'Or.',
    case3_year: '2018 vs PSG',
    case3_title: 'The Non-Existent Penalty and the Goal That Should Have Been Retaken',
    case3_p1: 'In the 2018 round of 16, PSG arrive in Madrid winning the first leg.',
    case3_li1: 'The referee awards a penalty against Kroos in an incident that Iturralde González, a former Spanish referee, described as non-existent: "It\'s not a penalty. There is contact, but Kroos feels the arm and throws himself."',
    case3_li2: 'Ronaldo converts. He later scores another penalty with the ball moving at the moment of the kick — a technical "double touch" that, according to the laws of the game, required a retake. Former English referee Graham Poll confirmed this in the British press.',
    case3_p2: 'Real overturn 0-1 to 2-1. Two Ronaldo goals. At least one should not have counted. The other was born from a penalty that divided even the referees themselves.',
    case4_year: '2018 vs Juventus',
    case4_title: 'The 93rd-Minute Penalty and "The Robbery of the Century"',
    case4_p1: 'This is the most emblematic case. Juventus do the impossible: lose 0-3 in Turin, go to Madrid and win 3-0 — tie level at 3-3.',
    case4_p2: 'In the 93rd minute, referee Michael Oliver awards a penalty in a highly debatable incident of Benatia on Lucas Vázquez, and sends off Buffon for protesting. Ronaldo scores at 97 minutes.',
    case4_p3: 'The reactions were historic:',
    case4_li1: '"This referee has a rubbish bin instead of a heart. You don\'t give a penalty like that in the 93rd minute."',
    case4_li2: 'Chiellini makes the money gesture pointing to the Real Madrid badge — without needing to say a word.',
    case4_li3: 'The Italian and Spanish press (including Sport de Barcelona) speak of "robbery of the century" and "worldwide outrage".',
    case4_p4: 'Without that penalty, the tie goes to extra time with Juventus in full flow and the Bernabéu in shock. Real could very well have been eliminated — and with them, the treble of European titles that cemented Ronaldo\'s legend as "Mr. Champions" would have disappeared.',
    conclusion_h: 'What This Means for Ronaldo\'s Trophy Haul',
    conclusion_p1: 'Putting the four cases together:',
    conclusion_li1: '2014: opening goal of the final in offside, admitted by the referee.',
    conclusion_li2: '2017: Bayern eliminated with an unjust red card and Ronaldo goals in offside.',
    conclusion_li3: '2018 (PSG): dubious penalty and a goal technically illegal under the laws of the game.',
    conclusion_li4: '2018 (Juventus): 93rd-minute penalty that shocked half the world.',
    conclusion_p2: 'In a scenario with VAR and consistent refereeing, Real could credibly and justifiably have won one or two fewer Champions Leagues in this cycle. Ronaldo\'s knockout-round goals — the basis of his European records — include at least three or four incidents that should not have counted.',
    conclusion_p3: 'Those goals and those trophies were subsequently used, directly, as the central argument in the 2016 and 2017 Ballon d\'Ors. UEFA, France Football and the mainstream press justified both awards with "won the Champions League, scored in big games, was decisive in the knockouts". The Athletic, through Michael Cox, even proposed alternative winners precisely because the weight given to the Champions League distorted the assessment of real individual performance.',
    conclusion_p4: 'There is no need to prove organised corruption to reach the central conclusion: a significant part of Ronaldo\'s European CV was built on games decided by serious refereeing errors in his club\'s favour. When that CV is used to argue for absolute superiority over Messi or anyone else, the argument rests on unstable foundations.',
  },
  pt: {
    title: 'A Champions League que Não Foi Limpa',
    context_h: 'O Contexto',
    context_p1: 'Entre 2016 e 2018, o Real Madrid ganhou três Champions consecutivas - um feito histórico. Ronaldo foi o protagonista mediático dessa sequência, acumulando golos, recordes e narrativas de "Mr. Champions". O problema é o que ficou por baixo: uma série de decisões arbitrais graves, em jogos decisivos, que beneficiaram sistematicamente o Real Madrid em momentos em que podia ter sido eliminado.',
    context_p2: 'Esses "sobrevivos" converteram-se em troféus. Os troféus converteram-se em Bolas de Ouro.',
    case1_year: 'Final de 2014',
    case1_title: 'O Golo Inaugural que Era Ilegal',
    case1_p1: 'Na final da Champions de 2014, Sergio Ramos abre o marcador cedo. O Atlético de Madrid equilibra. O Real vence no prolongamento por 4-1.',
    case1_p2: 'O que poucos sabem: em 2020, o árbitro da final, Mark Clattenburg, admitiu publicamente que o golo de Ramos era em fora de jogo. As suas palavras:',
    case1_q: '"O golo foi ligeiramente em offside, e apercebemo-nos disso ao intervalo."',
    case1_p3: 'O primeiro grande título europeu desta era Real/Ronaldo está literalmente construído sobre um lance que o próprio árbitro reconhece como irregular.',
    case2_year: '2017 vs Bayern',
    case2_title: 'Vermelho Injusto, Dois Golos em Fora de Jogo',
    case2_p1: 'Nos quartos de final de 2017, o Bayern chega a Espanha com a eliminatória empatada e com uma equipa superior em teoria ao Real nessa época.',
    case2_li1: 'Com a eliminatória equilibrada, o árbitro expulsa Arturo Vidal com um segundo amarelo num lance em que replays mostram claramente que joga a bola.',
    case2_li2: 'Ronaldo marca dois golos com posições de fora de jogo visíveis, amplamente documentadas na imprensa europeia.',
    case2_q: '"Quando o Madrid ficou com medo, o árbitro começou o seu show. Este roubo não pode acontecer na Champions."',
    case2_p2: 'Resultado: Real passa às meias-finais com um hat-trick de Ronaldo que inclui pelo menos um golo ilegal, num jogo de 11 contra 10 que não devia existir.',
    case3_year: '2018 vs PSG',
    case3_title: 'O Penálti que Não Era e o Golo que Devia Ser Repetido',
    case3_p1: 'Nos oitavos de 2018, o PSG chega a Madrid a vencer a primeira mão.',
    case3_li1: 'O árbitro marca penálti sobre Kroos num lance que Iturralde González, ex-árbitro espanhol, classificou como inexistente.',
    case3_li2: 'Ronaldo converte. Mais tarde, marca outro penálti com a bola em movimento no momento do remate.',
    case3_p2: 'O Real vira de 0-1 para 2-1. Dois golos de Ronaldo. Pelo menos um não devia ter contado.',
    case4_year: '2018 vs Juventus',
    case4_title: 'O Penálti do Minuto 93 e "O Roubo do Século"',
    case4_p1: 'Este é o caso mais emblemático. A Juventus faz o impossível: perde 0-3 em Turim, vai a Madrid e faz 3-0 - eliminatória empatada a 3-3.',
    case4_p2: 'No minuto 93, o árbitro Michael Oliver marca penálti num contacto altamente discutível de Benatia sobre Lucas Vázquez, e expulsa Buffon pelas protestas. Ronaldo marca aos 97 minutos.',
    case4_p3: 'As reações foram históricas:',
    case4_li1: '"Este árbitro tem um saco de lixo em vez de coração. Não se marca um penálti destes no minuto 93."',
    case4_li2: 'Chiellini faz o gesto do dinheiro apontando para o emblema do Real Madrid.',
    case4_li3: 'A imprensa italiana e espanhola fala em "roubo do século" e "indignação mundial".',
    case4_p4: 'Sem esse penálti, a eliminatória vai a prolongamento com a Juventus embalada e o Bernabéu em choque.',
    conclusion_h: 'O Que Isto Significa Para o Palmarés de Ronaldo',
    conclusion_p1: 'Juntando os quatro casos:',
    conclusion_li1: '2014: golo inaugural da final em fora de jogo, admitido pelo árbitro.',
    conclusion_li2: '2017: Bayern eliminado com vermelho injusto e golos em offside de Ronaldo.',
    conclusion_li3: '2018 (PSG): penálti duvidoso e golo tecnicamente ilegal pelas leis do jogo.',
    conclusion_li4: '2018 (Juventus): penálti no minuto 93 que chocou meio mundo.',
    conclusion_p2: 'Num cenário com VAR e arbitragem consistente, o Real podia credível e justificadamente ter menos uma ou duas Champions neste ciclo.',
    conclusion_p3: 'Esses golos e esses troféus foram depois usados, diretamente, como argumento central nas Bolas de Ouro de 2016 e 2017.',
    conclusion_p4: 'Não é necessário provar corrupção organizada para chegar à conclusão central: uma parte significativa do currículo europeu de Ronaldo foi construída sobre jogos decididos por erros graves de arbitragem a favor do seu clube.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function RiggedUCLSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="rigged-ucl" label={t('label_ucl')} title={c('title')} dark>
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('context_h')}</h2>
      <p>{c('context_p1')}</p>
      <p>{c('context_p2')}</p>

      {/* Case 1 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('case1_year')}: {c('case1_title')}</h2>
        <p>{c('case1_p1')}</p>
        <p>{c('case1_p2')}</p>
        <blockquote>{c('case1_q')}</blockquote>
        <p>{c('case1_p3')}</p>
      </div>

      {/* Case 2 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('case2_year')}: {c('case2_title')}</h2>
        <p>{c('case2_p1')}</p>
        <ul>
          <li>{c('case2_li1')}</li>
          <li>{c('case2_li2')}</li>
        </ul>
        <blockquote>{c('case2_q')}</blockquote>
        <p>{c('case2_p2')}</p>
      </div>

      {/* Case 3 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('case3_year')}: {c('case3_title')}</h2>
        <p>{c('case3_p1')}</p>
        <ul>
          <li>{c('case3_li1')}</li>
          <li>{c('case3_li2')}</li>
        </ul>
        <p>{c('case3_p2')}</p>
      </div>

      {/* Case 4 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('case4_year')}: {c('case4_title')}</h2>
        <p>{c('case4_p1')}</p>
        <p>{c('case4_p2')}</p>
        <p>{c('case4_p3')}</p>
        <ul>
          <li>{c('case4_li1')}</li>
          <li>{c('case4_li2')}</li>
          <li>{c('case4_li3')}</li>
        </ul>
        <p>{c('case4_p4')}</p>
      </div>

      <div className="border-t border-white/10 my-12" />
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">{c('conclusion_h')}</h2>
      <p>{c('conclusion_p1')}</p>
      <ul>
        <li>{c('conclusion_li1')}</li>
        <li>{c('conclusion_li2')}</li>
        <li>{c('conclusion_li3')}</li>
        <li>{c('conclusion_li4')}</li>
      </ul>
      <p>{c('conclusion_p2')}</p>
      <p>{c('conclusion_p3')}</p>
      <p>{c('conclusion_p4')}</p>
    </SectionWrapper>
  );
}