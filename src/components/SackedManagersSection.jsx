import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const clubsEn = [
  {
    name: 'Real Madrid (2009–2018)',
    subtitle: 'The Firing Factory',
    managers: [
      { name: 'Manuel Pellegrini', detail: 'In 2009–10, the Chilean built the most dominant Real Madrid side in years: 96 points in La Liga, a historic record at the time. It wasn\'t enough. Guardiola\'s Barcelona made 99. Pellegrini was sacked. Context matters: Ronaldo had arrived the previous summer for €94 million — the project was built around him. When the season didn\'t deliver the title, the manager left. The investment stayed.' },
      { name: 'José Mourinho', detail: 'He arrived in 2010 with seemingly unshakeable authority. He won a La Liga title (2011–12), a Copa del Rey and a Super Cup. But behind the scenes, his relationship with Ronaldo collapsed irreversibly during the 2012–13 season. Modrić writes that he saw Ronaldo "on the verge of tears" and that Mourinho actually made him cry, insisting defensive work was mandatory for everyone. Ronaldo reportedly responded: "After everything I\'ve done for you, this is how you treat me?" The relationship never recovered. At the end of that season, Mourinho left. Ronaldo stayed.' },
      { name: 'Carlo Ancelotti', detail: 'Perhaps the most absurd case on this list. He had just completed five consecutive years winning La Liga. He arrived in 2013–14 and won the club\'s tenth Champions League — the mythical "Décima", the trophy Madrid had been chasing for twelve years. Ancelotti not only won the most coveted title but also took the Copa del Rey that season. The following season went less well: Messi\'s Barcelona were more consistent in the league. Florentino Pérez sacked him in May 2015. Ronaldo continued.' },
      { name: 'Rafael Benítez', detail: 'Lasted seven months. Arrived in June 2015, left in January 2016. Reports from the time describe permanent tension between the Spanish coach and the club\'s star — Benítez opted for a more structured and defensive style than Ronaldo could tolerate. Seven months. Sacked.' },
      { name: 'Zinedine Zidane', detail: 'He was the exception that proves the rule. The Frenchman instinctively understood that the project required placing Ronaldo at the centre of everything, eliminating any tactical friction and building around the number seven. He won three consecutive Champions Leagues (2016, 2017, 2018). When Ronaldo left for Juventus in the summer of 2018, Zidane resigned voluntarily weeks later. He is the only manager on this list who left on his own terms. Not by coincidence, he is the only one who never publicly contradicted Ronaldo.' },
    ]
  },
  {
    name: 'Juventus (2018–2021)',
    subtitle: '€340 Million, Zero Champions, Three Managers',
    intro: 'In July 2018, Juventus paid €100 million for a 33-year-old striker. They committed to paying €31 million net per season — four times more than any other player in the squad. The total investment over three years was estimated at €340 million between the transfer fee and wages. The goal was explicit and singular: win the Champions League, the trophy that had eluded the club for decades. They didn\'t win it. And three managers left in the process.',
    managers: [
      { name: 'Massimiliano Allegri', detail: 'He was the first to go. He had just completed five consecutive years winning Serie A. What emerged later was that Allegri reportedly communicated to the board during the first season that Ronaldo\'s presence was unbalancing the collective, and that selling him would be preferable in the long run. The board refused. It was Allegri who left.' },
      { name: 'Maurizio Sarri', detail: 'Arrived in the summer of 2019 from Chelsea. At Juventus, he faced a problem his style could not solve: Ronaldo did not fit the positional play and collective pressing Sarri demanded. Juventus won Serie A, their ninth consecutive title. But in the Champions League they were eliminated in the round of 16 by Lyon — a team that had finished seventh in Ligue 1. Sarri was sacked. Ronaldo stayed. The Italian press interpreted the decision as a capitulation by the board to the dressing room star: they fired the manager to keep Ronaldo happy.' },
      { name: 'Andrea Pirlo', detail: 'The most inexplicable choice of this cycle. He had zero senior management experience. The 2020–21 season was Juventus\'s worst in over a decade: they finished fourth in Serie A, lost the title, and were eliminated in the round of 16 by Porto. Ronaldo abandoned the club in August 2021, days before the start of the following season, with no prior notice to the board — he packed his bags, loaded his cars onto a truck and left. Pirlo was sacked. Allegri returned to rebuild the wreckage.' },
    ],
    quotes: [
      { person: 'Leonardo Bonucci', text: '"Players began unconsciously thinking that Ronaldo\'s presence was enough to win games."' },
      { person: 'Giorgio Chiellini', text: '"We reached a point in the working relationship where Cristiano needed new motivation — and a team that played for him."' },
    ],
    balance: 'The final balance of the CR7 project at Juventus: two Serie A titles (which the club had been winning for nine consecutive years regardless), one Coppa Italia, zero Champions Leagues, and a deep financial crisis — the club recorded losses of €113 million in a single half-year and was forced to seek capital increases from parent company EXOR. It was not just a failed sporting project. It was a strategic mistake with measurable accounting consequences.'
  },
  {
    name: 'Manchester United (2021–2022)',
    subtitle: 'The Return That Destroyed Everything',
    intro: 'Ronaldo\'s return to Old Trafford in August 2021 was presented as an emotional redemption moment — the prodigal son coming home. Sportingly, it was one of the most destructive decisions in the club\'s recent history.',
    managers: [
      { name: 'Ole Gunnar Solskjær', detail: 'He believed signing Ronaldo would be the catalyst for United\'s rebuild. It was the opposite. The Norwegian publicly admitted, in a 2024 podcast, that the decision "felt right at the time but ultimately didn\'t work out". Ronaldo\'s presence distorted the tactical system. Solskjær was sacked in November 2021 after a 4-1 defeat to Watford.' },
      { name: 'Ralf Rangnick', detail: 'Arrived as interim and lasted a full season without real authority. The German was one of the most respected tactical thinkers in European football — the intellectual father of gegenpressing. With Ronaldo in the squad, his model was unworkable. The season ended with United in sixth place in the Premier League, without Champions League qualification. Rangnick left. Ronaldo stayed — and immediately began looking for a move to a club in the Champions League, disregarding his contractual commitment.' },
      { name: 'Erik ten Hag', detail: 'He was the manager who finally refused to bend. In October 2022, during a match against Tottenham, Ronaldo refused to come on as a substitute and left the tunnel before the end of the game — one of the most insubordinate gestures in the history of modern English football. Weeks later, Ronaldo gave a two-hour interview to Piers Morgan declaring he "had no respect" for the manager. The contract was terminated in November 2022 — not because the club dismissed him, but because Ronaldo made his continued presence impossible. He left without a settlement.' },
    ],
  },
  {
    name: 'Al-Nassr (2023–present)',
    subtitle: 'The End of the Line',
    intro: 'Since January 2023, Al-Nassr have invested hundreds of millions of euros in wages and transfers to build a team capable of winning the Saudi league with Ronaldo as the protagonist. The club has not won a single major title. Three managers have rotated through. The league title has remained out of reach.',
    managers: [
      { name: 'Rudi Garcia', detail: 'He was the first to fall, in April 2023 — one day after Ronaldo had left the tunnel following a frustrating draw with Al-Feiha, a gesture that became his trademark in moments of adversity. The connection between the walkout and the sacking was reported simultaneously by Goal.com and Fox Sports, with sources inside the club.' },
      { name: 'Luís Castro', detail: 'He arrived, tried to impose structure, and was sacked in September 2024 — the third manager to leave since Ronaldo\'s arrival, with Al-Nassr still without a league title. Castro has a biographical detail that gives scale to what happened: at 63 years of age, with more than two decades in professional football, the Portuguese manager stated it was the first time he had ever been sacked. The first. The last was at Al-Nassr.' },
      { name: 'Stefano Pioli', detail: 'He was the third attempt. The Italian, former AC Milan manager, arrived with solid credentials. He was let go in June 2025. The Arab and European press pointed directly to the deteriorating relationship with Ronaldo as the determining factor.' },
    ],
    balance: 'Al-Nassr have missed, at this point, more than thirteen title opportunities since Ronaldo\'s arrival — including league titles, national cups and Asian competitions. The team was eliminated in the group stage of the AFC Champions League. They spent more than any other club in the Saudi league. And they still haven\'t won.\n\nThere is an honest way to summarise the period: Al-Nassr bought the most famous player in the world to win trophies. What they won was sacked managers.'
  }
];

const clubsPt = [
  {
    name: 'Real Madrid (2009–2018)',
    subtitle: 'A Fábrica de Despedimentos',
    managers: [
      { name: 'Manuel Pellegrini', detail: 'Em 2009-10, o chileno construiu a equipa mais dominante que o Real Madrid tinha apresentado em anos: 96 pontos na Liga, recorde histórico até então. Não chegou. O Barcelona de Guardiola fez 99. Pellegrini foi despedido. O contexto importa: Ronaldo tinha chegado no verão anterior por 94 milhões de euros, o projeto era dele. Quando a temporada não produziu o título, o treinador saiu. O investimento ficou.' },
      { name: 'José Mourinho', detail: 'Chegou em 2010 com a autoridade que parecia inabalável. Ganhou uma Liga (2011-12), uma Copa del Rey e uma Supertaça. Mas nos bastidores, a relação com Ronaldo entrou em colapso irreversível durante a temporada 2012-13. Modrić escreve que viu Ronaldo "à beira das lágrimas" e que Mourinho o fez mesmo chorar, insistindo que o trabalho defensivo era obrigatório para todos. Ronaldo respondeu: "Depois de tudo o que fiz por ti, é assim que me tratas?" A relação nunca recuperou. No final daquela temporada, Mourinho saiu. Ronaldo ficou.' },
      { name: 'Carlo Ancelotti', detail: 'Talvez o caso mais absurdo desta lista. Chegou em 2013-14 e ganhou a décima Champions League do clube - a mítica "Décima". Ancelotti não apenas conquistou o título mais desejado pelos adeptos merengues como também ganhou a Copa del Rey nessa época. A temporada seguinte correu menos bem: o Barça de Messi foi mais regular na Liga. Florentino Pérez despediu-o em maio de 2015. Ronaldo continuou.' },
      { name: 'Rafael Benítez', detail: 'Durou sete meses. Chegou em junho de 2015, saiu em janeiro de 2016. Os relatos da época descrevem tensão permanente entre o técnico espanhol e a estrela do clube. Sete meses. Despedido.' },
      { name: 'Zinedine Zidane', detail: 'Foi a exceção que confirma a regra. O francês compreendeu instintivamente que o projeto exigia colocar Ronaldo no centro de tudo. Ganhou três Champions consecutivas (2016, 2017, 2018). Quando Ronaldo saiu para a Juventus, Zidane demitiu-se voluntariamente semanas depois. É o único treinador desta lista que saiu pelos seus termos.' },
    ]
  },
  {
    name: 'Juventus (2018–2021)',
    subtitle: '340 Milhões de Euros, Zero Champions, Três Treinadores',
    intro: 'Em julho de 2018, a Juventus pagou 100 milhões de euros por um avançado de 33 anos. Comprometeu-se a pagar 31 milhões líquidos por temporada. O objetivo era explícito e único: ganhar a Champions League. Não ganhou. E três treinadores saíram no processo.',
    managers: [
      { name: 'Massimiliano Allegri', detail: 'Foi o primeiro. Tinha acabado de completar cinco anos consecutivos a ganhar a Serie A. O que se soube depois é que Allegri terá comunicado à direção que a presença de Ronaldo estava a desequilibrar o coletivo. A direção recusou. Foi Allegri a sair.' },
      { name: 'Maurizio Sarri', detail: 'Chegou no verão de 2019 vindo do Chelsea. A Juventus ganhou a Serie A. Mas na Champions foi eliminada nos oitavos pelo Lyon. Sarri foi despedido. Ronaldo ficou. A decisão foi interpretada na imprensa italiana como uma capitulação da direção perante a estrela do balneário.' },
      { name: 'Andrea Pirlo', detail: 'Com zero experiência em futebol sénior. A época de 2020-21 foi a pior da Juventus em mais de uma década. Ronaldo abandonou o clube em agosto de 2021, sem aviso prévio à direção. Pirlo foi despedido. Allegri regressou para reconstruir os destroços.' },
    ],
    quotes: [
      { person: 'Leonardo Bonucci', text: '"Os jogadores começaram inconscientemente a pensar que a presença de Ronaldo era suficiente para ganhar os jogos."' },
      { person: 'Giorgio Chiellini', text: '"Chegámos a uma fase da relação de trabalho em que Cristiano precisava de novas motivações - e de uma equipa que jogasse para ele."' },
    ],
    balance: 'O balanço final do projeto CR7 na Juventus: dois títulos da Serie A, uma Coppa Italia, zero Champions, e uma crise financeira profunda - o clube registou perdas de 113 milhões de euros num único semestre.\n\nNão foi apenas um projeto desportivo falhado. Foi um erro estratégico com consequências contabilísticas mensuráveis.'
  },
  {
    name: 'Manchester United (2021–2022)',
    subtitle: 'O Regresso que Destruiu Tudo',
    intro: 'O regresso de Ronaldo a Old Trafford em agosto de 2021 foi apresentado como um momento de redenção emocional. Em termos desportivos, foi uma das decisões mais destrutivas da história recente do clube.',
    managers: [
      { name: 'Ole Gunnar Solskjær', detail: 'Acreditou que contratar Ronaldo seria o catalisador para a reconstrução do United. Foi o oposto. O norueguês admitiu publicamente, num podcast em 2024, que a decisão "pareceu certa na altura mas acabou por não resultar". Solskjær foi despedido em novembro de 2021, após uma derrota por 4-1 com o Watford.' },
      { name: 'Ralf Rangnick', detail: 'Chegou como interino e durou uma temporada inteira sem autoridade real. Com Ronaldo no plantel, o seu modelo era irrealizável. A época terminou com o United em sexto lugar na Premier League. Rangnick saiu. Ronaldo ficou.' },
      { name: 'Erik ten Hag', detail: 'Foi o treinador que finalmente recusou dobrar-se. Em outubro de 2022, durante um jogo contra o Tottenham, Ronaldo recusou entrar como suplente. Semanas depois, concedeu uma entrevista de duas horas a Piers Morgan onde declarou que "não respeitava" o treinador. A rescisão foi consumada em novembro de 2022.' },
    ],
  },
  {
    name: 'Al-Nassr (2023–presente)',
    subtitle: 'O Fim de Linha',
    intro: 'Desde janeiro de 2023, o Al-Nassr investiu centenas de milhões de euros para construir uma equipa capaz de vencer a liga saudita com Ronaldo como protagonista. O clube não ganhou um único título maior. Três treinadores rodaram.',
    managers: [
      { name: 'Rudi Garcia', detail: 'Foi o primeiro a cair, em abril de 2023 - um dia depois de Ronaldo ter abandonado o túnel após um empate frustrante com o Al-Feiha. A ligação entre o abandono do campo e o despedimento foi reportada pela Goal.com e pela Fox Sports.' },
      { name: 'Luís Castro', detail: 'Chegou, tentou impor estrutura, e foi despedido em setembro de 2024. Castro, aos 63 anos de idade, com mais de duas décadas de carreira, declarou que era a primeira vez que era despedido. A última foi no Al-Nassr.' },
      { name: 'Stefano Pioli', detail: 'Foi a terceira tentativa. O italiano, ex-AC Milan, chegou com credenciais sólidas. Foi dispensado em junho de 2025. A imprensa árabe e europeia apontou diretamente para a relação deteriorada com Ronaldo como fator determinante.' },
    ],
    balance: 'O Al-Nassr perdeu, nesta altura, mais de treze oportunidades de título desde a chegada de Ronaldo. A equipa foi eliminada na fase de grupos da AFC Champions League. Gastou mais do que qualquer outro clube da liga saudita. E continua sem ganhar.\n\nHá uma forma honesta de resumir o período: o Al-Nassr comprou o jogador mais famoso do mundo para ganhar títulos. Ganhou treinadores despedidos.'
  }
];

const sectionContent = {
  en: {
    title: 'Sacked Managers',
    h1: 'The Untouchable',
    p1: 'There is one fact that runs through Cristiano Ronaldo\'s entire career with a consistency that is rarely named clearly: when results failed, the managers paid the price. He never did. At four clubs, over sixteen years, the same logic repeated itself — the team wasn\'t working, the titles weren\'t coming, and the board identified the problem as sitting on the bench. Never in the dressing room. Never with the player whose salary made any decision to break the relationship politically impossible.',
    p2: 'The pattern is not necessarily a conspiracy. It is something more revealing than that: it is proof that at every club where he played, the institution built its identity around a single man — and when that model failed, nobody had the courage to say out loud who was at the centre of the problem.',
  },
  pt: {
    title: 'Treinadores Despedidos',
    h1: 'O Intocável',
    p1: 'Há um dado que percorre toda a carreira de Cristiano Ronaldo com uma consistência que raramente é nomeada com clareza: quando os resultados falharam, os treinadores pagaram. Ele, nunca. Em quatro clubes, ao longo de dezasseis anos, a mesma lógica repetiu-se.',
    p2: 'O padrão não é necessariamente uma conspiração. É algo mais revelador do que isso: é a prova de que em cada clube onde jogou, a instituição construiu a sua identidade em torno de um único homem.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function SackedManagersSection() {
  const [openClub, setOpenClub] = useState(0);
  const { lang, t } = useI18n();
  const c = (key) => fallback(sectionContent, lang, key);
  const clubs = lang === 'pt' ? clubsPt : clubsEn;

  return (
    <SectionWrapper id="sacked-managers" label={t('label_managers')} title={c('title')}>
      <h2>{c('h1')}</h2>
      <p>{c('p1')}</p>
      <p>{c('p2')}</p>

      <div className="section-divider" />

      <div className="space-y-6">
        {clubs.map((club, ci) => (
          <div key={ci} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenClub(openClub === ci ? -1 : ci)}
              className="w-full flex items-center justify-between px-6 py-5 bg-muted/30 hover:bg-muted/60 transition-colors text-left"
            >
              <div>
                <p className="font-semibold text-foreground text-lg">{club.name}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{club.subtitle}</p>
              </div>
              <span className="text-2xl text-muted-foreground">{openClub === ci ? '−' : '+'}</span>
            </button>
            {openClub === ci && (
              <div className="px-6 py-6 space-y-4">
                {club.intro && <p className="text-foreground/75 leading-relaxed text-sm">{club.intro}</p>}
                {club.managers.map((m, mi) => (
                  <div key={mi} className="border-l-4 border-amber-500 pl-4 py-1">
                    <p className="font-semibold text-foreground">{m.name}</p>
                    <p className="text-foreground/65 text-sm mt-1 leading-relaxed">{m.detail}</p>
                  </div>
                ))}
                {club.quotes && (
                  <div className="bg-muted/40 rounded-xl p-5 space-y-3 mt-4">
                    {club.quotes.map((q, qi) => (
                      <div key={qi}>
                        <p className="italic text-foreground/70 text-sm">{q.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">- {q.person}</p>
                      </div>
                    ))}
                  </div>
                )}
                {club.balance && (
                  <div className="mt-4 p-5 bg-red-50 border border-red-100 rounded-xl">
                    {club.balance.split('\n\n').map((p, pi) => (
                      <p key={pi} className="text-foreground/75 text-sm mb-2 last:mb-0">{p}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}