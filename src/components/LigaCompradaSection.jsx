import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'Bought League & Dubai d\'Or',
    intro: "Ronaldo's Saudi project",
    h1: '2023: arrival, penalties and zero titles',
    p1: "Ronaldo arrives at Al-Nassr in January 2023 as the face of the new Saudi Pro League, in a move that is openly political and commercial, not merely sporting. From that point on, the refereeing pattern shifts in tone: Al-Nassr begins to live off easy penalties, endless VAR reviews and generous stoppage time, feeding the idea that the league is tilted to protect the \"product\".",
    p2: "Even so, that half-season ends with zero official trophies: no league, no King's Cup, no Super Cup. The only title he lifts is the Arab Club Champions Cup 2023, a regional competition without the competitive weight of the league or the Asian Champions League.",
    h2: '2023–24: tilted league, Asian Champions League without a safety net',
    p3: 'In the first full season (2023–24), the sense of a "Bought League" solidifies, while Al-Nassr again fails to win the main trophies.',
    h2a: 'At home: criteria that change with the shirt',
    p4: 'Throughout the season, incidents accumulate in which:',
    li1: 'minimal contact on Ronaldo results in penalties after long VAR reviews;',
    li2: 'prior fouls by Al-Nassr players are ignored before a penalty is awarded;',
    li3: 'stoppage time is systematically extended when Al-Nassr are level or losing.',
    p5: 'Saudi fans of other clubs even ask on social media why "Al-Nassr only stops getting penalties when Ronaldo doesn\'t play", highlighting the difference in criteria with and without him on the pitch. Even so, the final result is the same: no league title, no King\'s Cup, no Super Cup.',
    h2b: 'Away from home: the AFC does not bend the narrative',
    p6: 'In the AFC Champions League, with referees and VAR under the AFC\'s jurisdiction, the margin of protection disappears.',
    li4: 'Quarter-finals against Al-Ain: 1-0 defeat in the Emirates, 3-2 win in Riyadh.',
    li5: 'Ronaldo misses a goal almost on the line and only scores from a penalty near the end.',
    li6: 'In the shootout, he is the only Al-Nassr player to convert; teammates miss three, and the team is eliminated.',
    p7: 'The external reading is direct: in the league, the context cushions errors with penalties and stoppage time; in Asia, without that cushion, Al-Nassr fall at the first real test.',
    h3: '2024–25: 90+15 penalty and a Super Cup tailored for the product',
    h3a: 'The 90+15 penalty against Al-Fayha',
    p8: 'In an Al-Nassr vs Al-Fayha match, Ronaldo\'s team are drawing 1-1 as stoppage time begins. The referee signals 6 minutes of added time, but the game stretches to 90+15:',
    li7: 'at 90+12, there is a routine aerial duel in the box;',
    li8: 'initially nothing is given, or the referee considers an attacking foul;',
    li9: 'after a long VAR review, a penalty is awarded to Al-Nassr.',
    p9: 'Ronaldo scores at 90+15 to give the win. The Al-Fayha director states that the referee admitted to him on the pitch that the contact was offensive before VAR "convinced him" to change the decision. A local article describes the incident as "Ongoing Controversy: the Al-Nassr penalty ignites debate", summing up the general feeling: the game seems to extend until the right opportunity arises for Ronaldo from the spot.',
    h3b: 'Super Cup in Hong Kong: punishing the champions, making room for Al-Nassr',
    p10: 'In the summer of 2025, the Saudi federation decides to take the Super Cup to Hong Kong, between 19 and 23 August, shortly after the Club World Cup where Al-Hilal represented the country.',
    li10: 'Al-Hilal refuse to participate, citing players\' contractual right to 28 days of holidays;',
    li11: 'the federation responds with a fine and banning the club from the next Super Cup;',
    li12: 'the open slot is filled by another team, and the tournament bracket once again includes Al-Nassr, despite them not being champions.',
    p11: 'In sporting terms, the strongest champions are punished for protecting their players; in commercial terms, it ensures Ronaldo and Al-Nassr are on the right stage. Even so, Al-Nassr lose the final again, and Ronaldo remains without official trophies in Saudi Arabia.',
    h4: 'Globe Soccer: the "Dubai d\'Or" as a compensation system',
    p12: 'While the competitive reality shows an Al-Nassr that is not the best in Saudi Arabia or Asia, the Globe Soccer Awards in Dubai function as an image correction.',
    li13: 'Created in 2010 with strong influence from the Jorge Mendes circle, the awards quickly gained a reputation as the "Dubai d\'Or": a marketing gala, not a sporting consensus.',
    li14: 'Ronaldo has accumulated "Player of the Year" awards there and, in 2020, received the title of "Player of the Century 2001–2020" in a massive fan vote.',
    p13: 'With the move to Saudi Arabia, the gala adapts:',
    li15: 'In 2023, the category "Best Middle East Player" appears; the winner, three years running, is always Ronaldo.',
    li16: 'In 2023 the "Maradona Award" for top scorer of the year is also created; Ronaldo wins the inaugural edition with the highest raw number of goals in 2023, combining games in the Saudi league and national team qualifiers.',
    p14: 'All of this happens in years when:',
    li17: 'the Saudi Pro League recognises Benzema and Mitrović as the main figures — MVP and top scorer in a league dominated by Al-Hilal;',
    li18: 'the AFC distinguishes Firmino and Mahrez as the best in the Asian Champions League.',
    p15: 'In other words: in official awards, Ronaldo is no longer the best at anything; in the Dubai awards, there is always a regional trophy or "top scorer" award waiting.',
    p16: 'He feeds that dynamic himself: in 2024, he says in an interview that he prefers the Globe Soccer to the Ballon d\'Or, calls the Dubai gala "more honest" and uses the stage to reinforce the 1,000-goal narrative, while the competitive reality places him behind the colleagues the gala ignores.',
    h5: 'The full picture: tilted league, tilted award',
    li19: 'On the pitch, the Saudi Pro League stretches penalties, stoppage time and schedules to keep Ronaldo and Al-Nassr at the centre of the stage — but when the level rises (Al-Hilal in the league, the Asian Champions League), it is always others who lift the trophies.',
    li20: 'Off the pitch, the Globe Soccer ensures that, regardless of that, Ronaldo continues to leave the Middle East with individual cups: "Maradona Award", "Best Middle East Player", "Player of the Century".',
    p17: 'For a project called "Bought League", it is hard to find a purer example: an ecosystem willing to bend rules on the pitch and criteria off it to protect a product — and that still cannot hide the fact that, in football that really matters, Ronaldo\'s Al-Nassr has never been the best team in Saudi Arabia or in Asia.',
  },
  pt: {
    title: 'Liga Comprada & Dubai d\'Or',
    intro: 'o projeto saudita de Ronaldo',
    h1: '2023: chegada, penáltis e zero títulos',
    p1: 'Ronaldo chega ao Al-Nassr em janeiro de 2023 como o rosto da nova Saudi Pro League, num movimento assumidamente político e comercial, não apenas desportivo. A partir daí, o padrão de arbitragem muda de tom: o Al-Nassr passa a viver de penáltis fáceis, revisões intermináveis de VAR e compensações generosas, alimentando a ideia de que a liga está inclinada para proteger o "produto".',
    p2: 'Mesmo assim, essa meia época termina com zero troféus oficiais: não ganha a liga, não ganha a Taça do Rei, não ganha a Supertaça.',
    h2: '2023-24: liga inclinada, Champions asiática sem rede',
    p3: 'Na primeira época completa (2023-24), a sensação de "Liga Comprada" consolida-se, ao mesmo tempo que o Al-Nassr volta a falhar os troféus principais.',
    h2a: 'Em casa: critérios que mudam com a camisola',
    p4: 'Ao longo da época, acumulam-se lances em que:',
    li1: 'contactos mínimos sobre Ronaldo dão penáltis após longas revisões de VAR;',
    li2: 'faltas prévias de jogadores do Al-Nassr são ignoradas antes de se assinalar castigo máximo;',
    li3: 'o tempo de compensação se alonga sistematicamente quando o Al-Nassr está empatado ou a perder.',
    p5: 'Adeptos sauditas de outros clubes chegam a perguntar, nas redes, porque é que "o Al-Nassr só deixa de ter penáltis quando o Ronaldo não joga".',
    h2b: 'Fora de casa: a AFC não dobra a narrativa',
    p6: 'Na Liga dos Campeões da Ásia, com árbitros e VAR sob tutela da AFC, a margem de proteção desaparece.',
    li4: 'Quartos-de-final contra o Al-Ain: derrota 1-0 nos Emirados, vitória 3-2 em Riade.',
    li5: 'Ronaldo falha um golo quase em cima da linha e só marca de penálti já perto do fim.',
    li6: 'Nos penáltis, é o único do Al-Nassr a converter; os colegas falham três, e a equipa é eliminada.',
    p7: 'A leitura de fora é direta: na liga, o contexto amortiza erros com penáltis e descontos; na Ásia, sem essa almofada, o Al-Nassr cai à primeira verdadeira prova.',
    h3: '2024-25: penálti aos 90+15 e Supertaça feita para o produto',
    h3a: 'O penálti aos 90+15 contra o Al-Fayha',
    p8: 'Num Al-Nassr-Al-Fayha, a equipa de Ronaldo está empatada 1-1 quando entram nos descontos. O árbitro indica 6 minutos de compensação, mas o jogo estica até aos 90+15:',
    li7: 'aos 90+12, há um duelo aéreo banal na área;',
    li8: 'inicialmente não é marcado nada, ou o árbitro considera falta atacante;',
    li9: 'depois de uma revisão longa de VAR, decide-se penálti para o Al-Nassr.',
    p9: 'Ronaldo marca aos 90+15 e dá a vitória.',
    h3b: 'Supertaça em Hong Kong: castigar o campeão, abrir espaço ao Al-Nassr',
    p10: 'No verão de 2025, a federação saudita decide levar a Supertaça para Hong Kong, entre 19 e 23 de agosto, pouco depois do Mundial de Clubes.',
    li10: 'O Al-Hilal recusa participar, invocando o direito contratual dos jogadores a 28 dias de férias;',
    li11: 'a federação responde com multa e banimento do clube da Supertaça seguinte;',
    li12: 'a vaga aberta é ocupada por outra equipa, e o quadro do torneio volta a incluir o Al-Nassr, apesar de não ser campeão.',
    p11: 'Em termos desportivos, o campeão mais forte é castigado por defender os seus jogadores; em termos comerciais, garante-se que Ronaldo e o Al-Nassr estão no palco certo.',
    h4: 'Globe Soccer: o "Dubai d\'Or" como sistema de compensação',
    p12: 'Enquanto a realidade competitiva mostra um Al-Nassr que não é o melhor nem na Arábia nem na Ásia, o Globe Soccer Awards, em Dubai, funciona como correção de imagem.',
    li13: 'Criados em 2010 com forte influência do círculo de Jorge Mendes, os prémios rapidamente ganharam a fama de "Dubai d\'Or": gala de marketing, não de consenso desportivo.',
    li14: 'Ronaldo acumulou ali prémios de "Jogador do Ano" e, em 2020, recebeu até o título de "Player of the Century 2001-2020".',
    p13: 'Com a mudança para a Arábia, a gala adapta-se:',
    li15: 'Em 2023, surge a categoria "Best Middle East Player"; o vencedor, três anos seguidos, é sempre Ronaldo.',
    li16: 'Em 2023 é criado também o "Maradona Award" para melhor marcador do ano; Ronaldo ganha a primeira edição.',
    p14: 'Tudo isto acontece em anos em que:',
    li17: 'a Saudi Pro League reconhece Benzema e Mitrović como figuras principais;',
    li18: 'a AFC distingue Firmino e Mahrez como melhores da Champions asiática.',
    p15: 'Ou seja, nos prémios oficiais, Ronaldo já não é o melhor em nada; nos prémios de Dubai, há sempre um troféu regional ou de "melhor marcador" à espera.',
    p16: 'O próprio alimenta essa dinâmica: em 2024, diz em entrevista que prefere os Globe Soccer ao Ballon d\'Or e chama a gala de Dubai "mais honesta".',
    h5: 'O quadro completo: liga inclinada, prémio inclinado',
    li19: 'Em campo, a Saudi Pro League estica penáltis, descontos e calendários para ter Ronaldo e o Al-Nassr no centro do palco - mas, quando o nível sobe, são sempre os outros que levantam os troféus.',
    li20: 'Fora de campo, o Globe Soccer assegura que Ronaldo continua a sair do Médio Oriente com taças individuais.',
    p17: 'Para um projeto chamado "Liga Comprada", é difícil arranjar exemplo mais puro: um ecossistema disposto a torcer regras dentro de campo e critérios fora dele para proteger um produto.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function LigaCompradaSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="liga-comprada" label={t('label_liga')} title={c('title')} dark>
      <p>{c('intro')}</p>

      <h2>{c('h1')}</h2>
      <p>{c('p1')}</p>
      <p>{c('p2')}</p>

      <div className="section-divider" />
      <h2>{c('h2')}</h2>
      <p>{c('p3')}</p>
      <h3>{c('h2a')}</h3>
      <p>{c('p4')}</p>
      <ul>
        <li>{c('li1')}</li>
        <li>{c('li2')}</li>
        <li>{c('li3')}</li>
      </ul>
      <p>{c('p5')}</p>
      <h3>{c('h2b')}</h3>
      <p>{c('p6')}</p>
      <ul>
        <li>{c('li4')}</li>
        <li>{c('li5')}</li>
        <li>{c('li6')}</li>
      </ul>
      <p>{c('p7')}</p>

      <div className="section-divider" />
      <h2>{c('h3')}</h2>
      <h3>{c('h3a')}</h3>
      <p>{c('p8')}</p>
      <ul>
        <li>{c('li7')}</li>
        <li>{c('li8')}</li>
        <li>{c('li9')}</li>
      </ul>
      <p>{c('p9')}</p>
      <h3>{c('h3b')}</h3>
      <p>{c('p10')}</p>
      <ul>
        <li>{c('li10')}</li>
        <li>{c('li11')}</li>
        <li>{c('li12')}</li>
      </ul>
      <p>{c('p11')}</p>

      <div className="section-divider" />
      <h2>{c('h4')}</h2>
      <ul>
        <li>{c('li13')}</li>
        <li>{c('li14')}</li>
      </ul>
      <p>{c('p13')}</p>
      <ul>
        <li>{c('li15')}</li>
        <li>{c('li16')}</li>
      </ul>
      <p>{c('p14')}</p>
      <ul>
        <li>{c('li17')}</li>
        <li>{c('li18')}</li>
      </ul>
      <p>{c('p15')}</p>
      <p>{c('p16')}</p>

      <div className="section-divider" />
      <h2>{c('h5')}</h2>
      <ul>
        <li>{c('li19')}</li>
        <li>{c('li20')}</li>
      </ul>
      <p>{c('p17')}</p>
    </SectionWrapper>
  );
}