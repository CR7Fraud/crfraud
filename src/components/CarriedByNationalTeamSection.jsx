import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const tournamentsEn = [
  {
    year: 'Euro 2016',
    title: 'title decided by Nani, Quaresma, Éder, Patrício and Pepe',
    content: 'At Euro 2016, Ronaldo finishes with 3 goals, but he is not "the man of the tournament". Nani also scores 3, including the 2-0 in the semi-final against Wales, a goal described by the AP as "vital" to seal the game.',
    points: [
      'Round of 16 vs Croatia: Portugal had not a single shot on target until the 117th minute. The goal comes from a transition where Ronaldo\'s shot is saved and Quaresma heads in for 1-0.',
      'Quarter-finals vs Poland: in the penalty shootout, it is Quaresma who converts the decisive penalty (5-3), after a Rui Patrício save.',
      'Final vs France: Ronaldo goes off injured at 25 minutes. From then on, Rui Patrício makes several decisive saves, Pepe leads the defence and Éder scores the title-winning goal at 109 minutes.',
    ],
    conclusion: 'International reports were direct: Portugal "surprised France and won the Euro despite Ronaldo\'s injury, thanks to Éder\'s goal and Patrício\'s heroic display". The idea that he "carried Portugal to the title" does not survive the match timeline.'
  },
  {
    year: 'Nations League 2019',
    title: 'the title goal is Guedes\'s, the move is Bernardo\'s',
    content: 'In the 2019 Nations League final against the Netherlands, Portugal win 1-0.',
    points: [
      'The goal is by Gonçalo Guedes, from outside the box.',
      'The move originates from a run and pass by Bernardo Silva; the BBC highlights that the trophy is won by "Guedes\'s strike after brilliant work from Bernardo".',
    ],
    conclusion: 'Ronaldo is on the pitch, but Portugal\'s second official title in history is again decided by others: Éder in 2016, Guedes in 2019.'
  },
  {
    year: 'Euro 2020',
    title: 'Group stage Golden Boot, invisible in the knockout rounds',
    content: 'At Euro 2020, Ronaldo is the tournament\'s top scorer (5 goals), but all in the group stage. In the round of 16 against Belgium, Portugal lose 1-0.',
    points: [],
    quote: 'The Athletic summed up that game in one sentence: "Ronaldo blank, the Hazards in the spotlight, and Pepe finally loses his head." When the level rose and someone was needed to break a strong defensive block, it was others — Thorgan Hazard, De Bruyne, Courtois — who decided. The group stage goals secure the Golden Boot, but they don\'t change the national team\'s fate.'
  },
  {
    year: 'World Cup 2022',
    title: 'Ramos, Bruno and Pepe leading the way',
    content: 'In Qatar, the contrast is stark.',
    points: [
      'Group stage: Ronaldo scores a penalty against Ghana in an incident the FIFA praised as "genius" in the way he won it, but which the Ghanaian manager called a refereeing error.',
      'Round of 16 vs Switzerland: Fernando Santos drops him from the starting eleven. In his place, Gonçalo Ramos, 21, scores a hat-trick; Pepe also scores and Portugal win 6-1. Sky Sports: "Portugal had no regrets about leaving Ronaldo on the bench."',
      'Quarter-finals vs Morocco: he comes on from the bench, has little influence and leaves in tears. In PortuGOAL\'s ratings, the spotlight goes to Pepe (best on the pitch) and Bruno Fernandes as the most influential midfielder throughout the tournament.',
    ],
    conclusion: 'In Portugal\'s best display at a World Cup since 1966, Ronaldo was not even on the pitch. The names who carry the load are Ramos, Bruno, Pepe.'
  },
  {
    year: 'Euro 2024',
    title: 'the worst striker in the tournament… always on the pitch',
    content: 'At Euro 2024, the drop in output is even more visible, but his time on the pitch does not decrease.',
    points: [
      'He played all five of Portugal\'s games, always as a starter, accumulating nearly every available minute (including 120 against Slovenia).',
      'He did not score a single goal.',
      'According to data compiled by the English press, he was the striker with the worst efficiency in the competition: xG accumulated around 3.5 goals, zero converted — officially "the worst centre-forward at Euro 2024" relative to the chances he had.',
    ],
    conclusion: 'In the round of 16 against Slovenia, he had 120 minutes to decide, missed a penalty in extra time and ended in tears; the one who rescues Portugal is Diogo Costa, with three penalties saved, while Bruno and Bernardo convert without missing. In the quarter-final against France, PortuGOAL gives him 4.5/10, noting he had the worst passing percentage and fewest touches of any outfield player — yet he only comes off well into the second half.'
  },
];

const tournamentsPt = [
  {
    year: 'Euro 2016',
    title: 'título decidido por Nani, Quaresma, Éder, Patrício e Pepe',
    content: 'No Euro 2016, Ronaldo acaba com 3 golos, mas não é "o homem do torneio". Nani também marca 3, incluindo o 2-0 na meia-final com o País de Gales, golo descrito pela AP como "vital" para matar o jogo.',
    points: [
      'Oitavos com a Croácia: Portugal não tinha um único remate à baliza até aos 117 minutos. O golo surge numa transição em que Ronaldo vê o remate defendido e Quaresma aparece de cabeça para fazer o 1-0.',
      'Quartos com a Polónia: no desempate por penáltis, é Quaresma que converte o penálti decisivo (5-3), depois de defesa de Rui Patrício.',
      'Final com a França: Ronaldo sai lesionado aos 25 minutos. A partir daí, Rui Patrício faz várias defesas decisivas, Pepe lidera a defesa e Éder marca o golo do título aos 109 minutos.',
    ],
    conclusion: 'Crónicas internacionais foram diretas: Portugal "surpreendeu a França e ganhou o Euro apesar da lesão de Ronaldo, graças ao golo de Éder e à exibição heroica de Patrício".'
  },
  {
    year: 'Nations League 2019',
    title: 'o golo do título é de Guedes, a jogada é de Bernardo',
    content: 'Na final da Liga das Nações 2019, contra a Holanda, Portugal ganha 1-0.',
    points: [
      'O golo é de Gonçalo Guedes, num remate de fora da área.',
      'A jogada nasce de uma arrancada e passe de Bernardo Silva; a BBC sublinha que o troféu é conquistado pelo "remate de Guedes após brilhante trabalho de Bernardo".',
    ],
    conclusion: 'Ronaldo está em campo, mas o segundo troféu oficial da história de Portugal volta a ser decidido por outros: Éder em 2016, Guedes em 2019.'
  },
  {
    year: 'Euro 2020',
    title: 'Bota de Ouro de grupos, apagado no mata-mata',
    content: 'No Euro 2020, Ronaldo é melhor marcador da competição (5 golos), mas todos na fase de grupos. Nos oitavos contra a Bélgica, Portugal perde 1-0.',
    points: [],
    quote: 'O The Athletic resumiu esse jogo numa frase: "Ronaldo em branco, os Hazards em destaque, e Pepe perde finalmente a cabeça". Quando o nível subiu e era preciso alguém para partir um bloco forte, foram outros (Thorgan Hazard, De Bruyne, Courtois) a decidir.'
  },
  {
    year: 'Mundial 2022',
    title: 'Ramos, Bruno e Pepe à frente',
    content: 'No Qatar, o contraste é violento.',
    points: [
      'Fase de grupos: Ronaldo marca um penálti contra o Gana, num lance que a FIFA elogiou como "genialidade".',
      'Oitavos com a Suíça: Fernando Santos tira-o do onze. No seu lugar, Gonçalo Ramos marca um hat-trick; Pepe também marca e Portugal ganha 6-1.',
      'Quartos com Marrocos: entra do banco, tem pouca influência e sai em lágrimas.',
    ],
    conclusion: 'Na melhor exibição de Portugal num Mundial desde 1966, Ronaldo nem sequer esteve em campo. Os nomes que carregam são Ramos, Bruno, Pepe.'
  },
  {
    year: 'Euro 2024',
    title: 'o pior avançado do torneio… sempre em campo',
    content: 'No Euro 2024, a queda de rendimento é ainda mais visível, mas o tempo em campo não diminui.',
    points: [
      'Jogou todos os cinco jogos de Portugal, sempre como titular.',
      'Não marcou um único golo.',
      'Foi o avançado com pior eficácia da prova: xG acumulado a rondar 3,5 golos, zero convertidos.',
    ],
    conclusion: 'Nos oitavos com a Eslovénia, teve 120 minutos para decidir, falhou um penálti e acabou em lágrimas; quem segura Portugal é Diogo Costa, com três penáltis defendidos.'
  },
];

const content = {
  en: {
    title: 'Portugal Carried Ronaldo',
    intro: 'From Euro 2016 to the most recent Nations League/qualifier, the pattern is always the same: the narrative says Ronaldo carried Portugal, but when you look at the games that truly define tournaments, it is almost always others who step up.',
    summary_h: 'From Euro 2016 to today: who makes the plays and who appears on the cover',
    summary_intro: 'Across these tournaments, the timeline of important games always shows the same pattern: the moments when Portugal truly needs someone to decide come from others.',
    summary_li1: 'Euro 2016: Nani, Quaresma, Éder, Patrício and Pepe are the names in the key games.',
    summary_li2: 'Nations League 2019: Bernardo drives it, Guedes scores the title-winning goal.',
    summary_li3: 'Euro 2020: Group stage Golden Boot, but in the round of 16 it is the Belgians who decide; Ronaldo goes blank.',
    summary_li4: 'World Cup 2022: Ramos, Bruno and Pepe carry the 6-1 win over Switzerland; Portugal fall to Morocco without a Ronaldo goal.',
    summary_li5: 'Euro 2024: Diogo Costa, Bruno and Bernardo rescue the team in the shootout; Ronaldo is the protagonist of the drama, not the solution.',
    summary_p: 'The honest sentence, looking from Euro 2016 to today, is not "Ronaldo carried the national team". It is another: Portugal spent a decade selling the idea that it needed him for everything, but whenever someone was needed to decide a tournament, it was almost always teammates — Nani, Quaresma, Éder, Guedes, Bernardo, Bruno, Ramos, Diogo Costa — who did the heavy lifting, while the number 7 kept the protagonist role on the covers thanks to penalties and tap-ins during breaks.',
  },
  pt: {
    title: 'Portugal carregou Ronaldo',
    intro: 'Do Euro 2016 até à última Nations/qualificação recente, o padrão é sempre o mesmo: a narrativa diz que Ronaldo carregou Portugal, mas quando se olha para os jogos que realmente definem torneios, são quase sempre outros a aparecer.',
    summary_h: 'Entre Euro 2016 e hoje: quem faz as jogadas e quem aparece na capa',
    summary_intro: 'Entre estes torneios, a cronologia dos jogos importantes mostra sempre o mesmo padrão: os momentos em que Portugal realmente precisa de alguém para decidir vêm de outros.',
    summary_li1: 'Euro 2016: Nani, Quaresma, Éder, Patrício e Pepe são os nomes dos jogos-chave.',
    summary_li2: 'Nations League 2019: Bernardo conduz, Guedes marca o golo do título.',
    summary_li3: 'Euro 2020: Bota de Ouro de grupos, mas nos oitavos quem decide são os belgas; Ronaldo fica em branco.',
    summary_li4: 'Mundial 2022: Ramos, Bruno e Pepe carregam nos 6-1 à Suíça; Portugal cai com Marrocos sem golo de Ronaldo.',
    summary_li5: 'Euro 2024: Diogo Costa, Bruno e Bernardo salvam a equipa nos penáltis; Ronaldo é protagonista do drama, não da solução.',
    summary_p: 'A frase honesta, olhando de Euro 2016 até hoje, não é "Ronaldo carregou a Seleção". É outra: Portugal passou uma década a vender a ideia de que precisava dele para tudo, mas sempre que foi preciso alguém para decidir um torneio, foram quase sempre colegas a fazer o trabalho pesado.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function CarriedByNationalTeamSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const tournaments = lang === 'pt' ? tournamentsPt : tournamentsEn;

  return (
    <SectionWrapper id="national-team" label={t('label_national')} title={c('title')}>
      <p>{c('intro')}</p>

      <div className="space-y-10 mt-8">
        {tournaments.map((item, i) => (
          <div key={i} className="border border-border rounded-xl overflow-hidden">
            <div className="bg-muted/40 px-6 py-4">
              <span className="text-amber-500 font-bold text-xl font-playfair">{item.year}</span>
              <p className="text-foreground font-semibold mt-0.5">{item.title}</p>
            </div>
            <div className="px-6 py-5 prose-content">
              <p>{item.content}</p>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((p, pi) => <li key={pi}>{p}</li>)}
                </ul>
              )}
              {item.quote && <blockquote>{item.quote}</blockquote>}
              {item.conclusion && <p className="text-muted-foreground italic text-sm border-l-2 border-amber-500 pl-4 mt-4">{item.conclusion}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider" />
      <h2>{c('summary_h')}</h2>
      <p>{c('summary_intro')}</p>
      <ul>
        <li>{c('summary_li1')}</li>
        <li>{c('summary_li2')}</li>
        <li>{c('summary_li3')}</li>
        <li>{c('summary_li4')}</li>
        <li>{c('summary_li5')}</li>
      </ul>
      <p>{c('summary_p')}</p>
    </SectionWrapper>
  );
}