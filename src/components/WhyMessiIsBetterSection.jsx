import React from 'react';
import SectionWrapper from './SectionWrapper';
import StatsTable from './StatsTable';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'Why Messi is Better',
    h1: 'Total production: more in less time',
    p1: 'Global career data (as of April 2026, source messivsronaldo.app):',
    li1: 'Messi: 903 goals, 407 assists, 1,146 games.',
    li2: 'Ronaldo: 967 goals, 261 assists, 1,313 games.',
    p2: 'This means:',
    li3: 'Messi decides more often per game: a goal every 104 minutes, a goal contribution (goal+assist) every 72 minutes.',
    li4: 'Ronaldo needs more time: 111 minutes per goal and 87 minutes per goal+assist.',
    p3: 'Even granting that Ronaldo has more total goals, Messi has more impact per minute and per game — and still adds nearly double the assists.',
    h2: '"Real" goal: without penalties and from outside the box',
    p4: 'When you look at the detail, Messi\'s advantage grows.',
    li5: 'Goals without penalties: Messi has more open-play goals, even with fewer accumulated minutes.',
    li6: 'From outside the box: Messi has 132 goals from outside the box against Ronaldo\'s 74 — nearly double.',
    li7: 'Direct free kicks: Messi has surpassed Ronaldo here too — 71 free-kick goals vs Ronaldo\'s 64, according to Opta-compiled data.',
    p5: 'And in shooting:',
    li8: 'Messi needs fewer shots per goal (5.36 vs 6.52) and scores faster.',
    p6: 'In short: the label "best goalscorer in history" fits Messi just as well. He has more of the difficult goals: without penalties, from outside the box, with fewer shots and fewer minutes.',
    h3: 'Playmaker: where there is no possible comparison',
    p7: 'In chance creation data, the difference is brutal.',
    li9: 'Assists (Opta criteria): 407 for Messi, 261 for Ronaldo.',
    li10: 'Including all types of assists, the difference is even greater: 487 vs 329.',
    li11: 'Messi also has far more key passes and pre-assist passes throughout his career — over 1,700 key passes against Ronaldo\'s roughly 1,250.',
    p8: 'In practice:',
    li12: 'Ronaldo is primarily a finisher.',
    li13: 'Messi is an elite finisher + elite creator.',
    p9: 'That is why, when you compare total contributions (goals + assists), Messi has 1,310 contributions against Ronaldo\'s 1,228, and decides a goal every 72 minutes, against 87 for Ronaldo.',
    h4: 'Titles and awards: advantage in serious trophies',
    p10: 'In trophies and individual distinctions, the picture converges to the same conclusion.',
    li14: 'Ballon d\'Or: Messi 8, Ronaldo 5.',
    li15: 'Titles (clubs + national team): Messi is, in 2026, the most decorated male player in history, with around 47–48 trophies, while Ronaldo falls somewhat short.',
    li16: 'In finals, Messi played more (46 vs 37), won more (33 vs 25) and has more goals (37 vs 25) and assists (19 vs 2).',
    p11: 'National team:',
    li17: 'Messi: 2022 World Cup, Copa América 2021 and 2024, Finalissima 2022, Olympic gold and U-20 World Cup.',
    li18: 'Ronaldo: Euro 2016, Nations League 2019 and 2025.',
    p12: 'Messi is also the only player in history to be MVP of two World Cups (Golden Ball 2014 and 2022) and best player of a Copa América — something Ronaldo has never come close to at a World Cup or European Championship.',
    h5: '2025–26: even older, Messi is still more influential',
    p13: 'Recent comparisons help kill the idea that "now it\'s just marketing".',
    li19: 'In 2025, at 38, Messi had 46 goals and 28 assists in 54 games for club and country; Ronaldo, at 40, had 41 goals and 7 assists in 37 games.',
    li20: 'Messi: a goal contribution every 61 minutes.',
    li21: 'Ronaldo: one every 86 minutes.',
    li22: 'In 2025–26 (club season), Messi has 25 goals and 18 assists in 27 games; Ronaldo 24 goals and 4 assists, needing more minutes per contribution.',
    p14: 'In other words: even at the final stretch, Messi generates more goals and far more play for others.',
    h6: 'On and off the pitch: no saints, but different profiles',
    p15: 'It is true that:',
    li23: 'Messi had a serious tax fraud case in Spain, was convicted with a suspended sentence and paid heavy fines.',
    li24: 'He also associated himself with image projects for Qatar/Saudi Arabia, as many other players have done.',
    p16: 'But compared to Ronaldo:',
    li25: 'there are no records of refusing to enter the pitch or leaving the stadium mid-game;',
    li26: 'there are no incidents of knocking phones out of fans\' hands, obscene gestures at crowds, or public wars with managers/coaches in spectacle interviews;',
    li27: 'there is no trail of constant complaints, public crying fits and media manipulation to control narratives as seen at Manchester United, Juventus, the national team and Saudi Arabia.',
    p17: 'Messi is not perfect, but he does not live in permanent drama mode. The image of "a player who focuses on playing" corresponds far more to reality than in Ronaldo\'s case.',
    conclusion_title: 'Why it makes sense to say "Messi is on another level"',
    cl1: 'Production: Messi scores nearly at Ronaldo\'s level, but with a better average, more difficult goals (without penalties, from outside the box, free kicks) and far more assists.',
    cl2: 'Quality of impact: decides more per minute, creates more for teammates, and is better in finals and major tournaments (World Cup, Copa América).',
    cl3: 'Serious recognition: more Ballon d\'Ors, more total titles, more MVPs in FIFA/CONMEBOL competitions.',
    cl4: 'Final phase: even after 35, he still has seasons where he produces more goals+assists than Ronaldo in Saudi Arabia.',
    cl5: 'Profile: with all his flaws, he generates far fewer controversies, ego clashes and public hypocrisy than his rival.',
    conclusion_p: 'Put that way, you move beyond a conversation of "I prefer this one" and into something hard to refute: by today\'s data, Messi is a more complete, more efficient and more decisive player than Ronaldo — and that is written in goals, assists, trophies and behaviour.'
  },
  pt: {
    title: 'Porque é que Messi é Melhor',
    h1: 'Produção total: mais em menos tempo',
    p1: 'Dados globais de carreira (até abril de 2026, fonte messivsronaldo.app):',
    li1: 'Messi: 903 golos, 407 assistências, 1 146 jogos.',
    li2: 'Ronaldo: 967 golos, 261 assistências, 1 313 jogos.',
    p2: 'Isto significa:',
    li3: 'Messi decide mais vezes por jogo: um golo a cada 104 minutos, contribuição para golo (golo+assistência) a cada 72 minutos.',
    li4: 'Ronaldo precisa de mais tempo: 111 minutos por golo e 87 minutos por golo+assistência.',
    p3: 'Mesmo admitindo que Ronaldo tem mais golos totais, Messi tem mais impacto por minuto e por jogo - e ainda acrescenta quase o dobro das assistências.',
    h2: 'Golo "de verdade": sem penáltis e fora da área',
    p4: 'Quando se entra no detalhe, a vantagem de Messi cresce.',
    li5: 'Golos sem penálti: Messi tem mais golos de bola corrida, mesmo com menos minutos acumulados.',
    li6: 'Fora da área: Messi tem 132 golos de fora da área contra 74 de Ronaldo - quase o dobro.',
    li7: 'Livres directos: Messi já passou Ronaldo também aqui - 71 golos de livre vs 64 de Ronaldo.',
    p5: 'E em remate:',
    li8: 'Messi precisa de menos remates por golo (5,36 vs 6,52) e marca mais rápido.',
    p6: 'Resumindo: o rótulo "melhor goleador da história" não fica nada mal em Messi.',
    h3: 'Playmaker: onde não há comparação possível',
    p7: 'Nos dados de criação, a diferença é brutal.',
    li9: 'Assistências (critérios Opta): 407 para Messi, 261 para Ronaldo.',
    li10: 'Se somarmos todos os tipos de assistências, a diferença é ainda maior: 487 vs 329.',
    li11: 'Messi tem também muito mais "key passes" ao longo da carreira, com mais de 1 700 passes-chave contra cerca de 1 250 de Ronaldo.',
    p8: 'Na prática:',
    li12: 'Ronaldo é sobretudo finalizador.',
    li13: 'Messi é finalizador de elite + criador de elite.',
    p9: 'É por isso que, quando comparas contribuição total (golos + assistências), Messi tem 1 310 contribuições contra 1 228 de Ronaldo e decide um golo a cada 72 minutos, contra 87 de Ronaldo.',
    h4: 'Títulos e prémios: vantagem nos troféus sérios',
    p10: 'Em troféus e distinções individuais, o quadro converge para a mesma conclusão.',
    li14: 'Bolas de Ouro: Messi 8, Ronaldo 5.',
    li15: 'Títulos (clubes + selecção): Messi é, em 2026, o jogador masculino mais titulado da história, com cerca de 47-48 troféus.',
    li16: 'Em finais, Messi jogou mais (46 vs 37), ganhou mais (33 vs 25) e tem mais golos (37 vs 25) e assistências (19 vs 2).',
    p11: 'Selecção:',
    li17: 'Messi: Mundial 2022, Copas América 2021 e 2024, Finalíssima 2022, ouro olímpico e Mundial sub-20.',
    li18: 'Ronaldo: Euro 2016, Nations League 2019 e 2025.',
    p12: 'Messi é ainda o único jogador da história a ser MVP de dois Mundiais e melhor jogador de uma Copa América.',
    h5: '2025-26: mesmo velho, Messi continua mais influente',
    p13: 'A comparação recente ajuda a matar a ideia de que "agora é só marketing".',
    li19: 'Em 2025, aos 38, Messi fez 46 golos e 28 assistências em 54 jogos; Ronaldo, aos 40, fez 41 golos e 7 assistências em 37 jogos.',
    li20: 'Messi: uma contribuição para golo a cada 61 minutos.',
    li21: 'Ronaldo: uma a cada 86 minutos.',
    li22: 'Em 2025-26, Messi tem 25 golos e 18 assistências em 27 jogos; Ronaldo 24 golos e 4 assistências.',
    p14: 'Ou seja: mesmo na reta final, Messi gera mais golos e muito mais jogo para os outros.',
    h6: 'Dentro e fora de campo: sem santos, mas perfis diferentes',
    p15: 'É verdade que:',
    li23: 'Messi teve um caso grave de fraude fiscal em Espanha, foi condenado com pena suspensa e pagou multas elevadas.',
    li24: 'Também se associou a projectos de imagem do Qatar/Arábia, tal como muitos outros jogadores.',
    p16: 'Mas, comparando com Ronaldo:',
    li25: 'não há registos de recusar entrar em campo ou abandonar o estádio a meio de um jogo;',
    li26: 'não há episódios de partir telemóveis de adeptos, gestos obscenos para bancadas ou guerras públicas com treinadores em entrevistas-espetáculo;',
    li27: 'não há um rasto de queixas constantes, choros públicos e manipulação mediática para controlar narrativas.',
    p17: 'Messi não é perfeito, mas não vive em modo drama permanente.',
    conclusion_title: 'Porque é que faz sentido dizer que "Messi está a anos-luz"',
    cl1: 'Producao: Messi marca quase ao nivel de Ronaldo, mas com melhor media, mais golos dificeis e muito mais assistencias.',
    cl2: 'Qualidade do impacto: decide mais por minuto, cria mais para os colegas, e melhor em finais e em torneios grandes.',
    cl3: 'Reconhecimento serio: tem mais Bolas de Ouro, mais titulos totais, mais MVPs em competicoes da FIFA/CONMEBOL.',
    cl4: 'Fase final: mesmo depois dos 35, continua a ter epocas em que produz mais golos+assistencias do que Ronaldo na Arabia.',
    cl5: 'Perfil: com todos os defeitos, arrasta muito menos polemicas, ego e hipocrisia publica do que o rival.',
    conclusion_p: 'Dito assim, deixas de estar numa conversa de "gosto mais deste" e passas a uma coisa dificil de rebater: pelos dados de hoje, Messi e um jogador mais completo, mais eficiente e mais decisivo do que Ronaldo.'
  }
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function WhyMessiIsBetterSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="why-messi" label={t('label_messi')} title={c('title')}>
      <h2>{c('h1')}</h2>
      <p>{c('p1')}</p>
      <ul>
        <li>{c('li1')}</li>
        <li>{c('li2')}</li>
      </ul>
      <p>{c('p2')}</p>
      <ul>
        <li>{c('li3')}</li>
        <li>{c('li4')}</li>
      </ul>
      <p>{c('p3')}</p>

      <StatsTable />

      <h2>{c('h2')}</h2>
      <p>{c('p4')}</p>
      <ul>
        <li>{c('li5')}</li>
        <li>{c('li6')}</li>
        <li>{c('li7')}</li>
      </ul>
      <p>{c('p5')}</p>
      <ul>
        <li>{c('li8')}</li>
      </ul>
      <p>{c('p6')}</p>

      <h2>{c('h3')}</h2>
      <p>{c('p7')}</p>
      <ul>
        <li>{c('li9')}</li>
        <li>{c('li10')}</li>
        <li>{c('li11')}</li>
      </ul>
      <p>{c('p8')}</p>
      <ul>
        <li>{c('li12')}</li>
        <li>{c('li13')}</li>
      </ul>
      <p>{c('p9')}</p>

      <h2>{c('h4')}</h2>
      <p>{c('p10')}</p>
      <ul>
        <li>{c('li14')}</li>
        <li>{c('li15')}</li>
        <li>{c('li16')}</li>
      </ul>
      <p>{c('p11')}</p>
      <ul>
        <li>{c('li17')}</li>
        <li>{c('li18')}</li>
      </ul>
      <p>{c('p12')}</p>

      <h2>{c('h5')}</h2>
      <p>{c('p13')}</p>
      <ul>
        <li>{c('li19')}</li>
        <li>{c('li20')}</li>
        <li>{c('li21')}</li>
        <li>{c('li22')}</li>
      </ul>
      <p>{c('p14')}</p>

      <h2>{c('h6')}</h2>
      <p>{c('p15')}</p>
      <ul>
        <li>{c('li23')}</li>
        <li>{c('li24')}</li>
      </ul>
      <p>{c('p16')}</p>
      <ul>
        <li>{c('li25')}</li>
        <li>{c('li26')}</li>
        <li>{c('li27')}</li>
      </ul>
      <p>{c('p17')}</p>

      <div className="section-divider" />

      <div className="bg-yellow-600 text-[hsl(var(--card))] mt-8 p-8 rounded-2xl border border-zinc-800">
        <h3 className="text-[hsl(var(--secondary))] mb-6 font-playfair text-2xl font-bold">{c('conclusion_title')}</h3>
        <ul className="space-y-4">
          {['cl1', 'cl2', 'cl3', 'cl4', 'cl5'].map((key) =>
          <li key={key} className="flex gap-3">
              <span className="text-amber-400 font-bold shrink-0 mt-0.5">→</span>
              <span className="text-white">{c(key)}</span>
            </li>
          )}
        </ul>
        <p className="text-[hsl(var(--card))] mt-6 text-sm leading-relaxed">{c('conclusion_p')}</p>
      </div>
    </SectionWrapper>);

}