import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const clubsEn = [
  {
    name: "Real Madrid (2009–2018)",
    subtitle: "The Firing Factory",
    managers: [
      {
        name: "Manuel Pellegrini",
        detail:
          "In 2009–10, the Chilean built the most dominant Real Madrid side in years: 96 points in La Liga, a historic record at the time. It wasn't enough. Guardiola's Barcelona made 99. Pellegrini was sacked. Context matters: Ronaldo had arrived the previous summer for €94 million — the project was built around him. When the season didn't deliver the title, the manager left. The investment stayed.",
      },
      {
        name: "José Mourinho",
        detail:
          'He arrived in 2010 with seemingly unshakeable authority. He won a La Liga title (2011–12), a Copa del Rey and a Super Cup. But behind the scenes, his relationship with Ronaldo collapsed irreversibly during the 2012–13 season. Modrić writes that he saw Ronaldo "on the verge of tears" and that Mourinho actually made him cry, insisting defensive work was mandatory for everyone. Ronaldo reportedly responded: "After everything I\'ve done for you, this is how you treat me?" The relationship never recovered. At the end of that season, Mourinho left. Ronaldo stayed.',
      },
      {
        name: "Carlo Ancelotti",
        detail:
          "Perhaps the most absurd case on this list. He had just completed five consecutive years winning La Liga. He arrived in 2013–14 and won the club's tenth Champions League — the mythical \"Décima\", the trophy Madrid had been chasing for twelve years. Ancelotti not only won the most coveted title but also took the Copa del Rey that season. The following season went less well: Messi's Barcelona were more consistent in the league. Florentino Pérez sacked him in May 2015. Ronaldo continued.",
      },
      {
        name: "Rafael Benítez",
        detail:
          "Lasted seven months. Arrived in June 2015, left in January 2016. Reports from the time describe permanent tension between the Spanish coach and the club's star — Benítez opted for a more structured and defensive style than Ronaldo could tolerate. Seven months. Sacked.",
      },
      {
        name: "Zinedine Zidane",
        detail:
          "He was the exception that proves the rule. The Frenchman instinctively understood that the project required placing Ronaldo at the centre of everything, eliminating any tactical friction and building around the number seven. He won three consecutive Champions Leagues (2016, 2017, 2018). When Ronaldo left for Juventus in the summer of 2018, Zidane resigned voluntarily weeks later. He is the only manager on this list who left on his own terms. Not by coincidence, he is the only one who never publicly contradicted Ronaldo.",
      },
    ],
  },
  {
    name: "Juventus (2018–2021)",
    subtitle: "**€340 Million**, Zero Champions, Three Managers",
    intro:
      "In July 2018, Juventus paid €100 million for a 33-year-old striker. They committed to paying €31 million net per season — four times more than any other player in the squad. The total investment over three years was estimated at **€340 million** between the transfer fee and wages. The goal was explicit and singular: win the Champions League, the trophy that had eluded the club for decades. They didn't win it. And three managers left in the process.",
    managers: [
      {
        name: "Massimiliano Allegri",
        detail:
          "He was the first to go. He had just completed five consecutive years winning Serie A. What emerged later was that Allegri reportedly communicated to the board during the first season that Ronaldo's presence was unbalancing the collective, and that selling him would be preferable in the long run. The board refused. It was Allegri who left.",
      },
      {
        name: "Maurizio Sarri",
        detail:
          "Arrived in the summer of 2019 from Chelsea. At Juventus, he faced a problem his style could not solve: Ronaldo did not fit the positional play and collective pressing Sarri demanded. Juventus won Serie A, their ninth consecutive title. But in the Champions League they were eliminated in the round of 16 by Lyon — a team that had finished seventh in Ligue 1. Sarri was sacked. Ronaldo stayed. The Italian press interpreted the decision as a capitulation by the board to the dressing room star: they fired the manager to keep Ronaldo happy.",
      },
      {
        name: "Andrea Pirlo",
        detail:
          "The most inexplicable choice of this cycle. He had zero senior management experience. The 2020–21 season was Juventus's worst in over a decade: they finished fourth in Serie A, lost the title, and were eliminated in the round of 16 by Porto. Ronaldo abandoned the club in August 2021, days before the start of the following season, with no prior notice to the board — he **packed his bags**, loaded his cars onto a truck and left. Pirlo was sacked. Allegri returned to rebuild the wreckage.",
      },
    ],
    quotes: [
      {
        person: "Leonardo Bonucci",
        text: '"Players began unconsciously thinking that Ronaldo\'s presence was enough to win games."',
      },
      {
        person: "Giorgio Chiellini",
        text: '"We reached a point in the working relationship where Cristiano needed new motivation — and a team that played for him."',
      },
    ],
    balance:
      "The final balance of the CR7 project at Juventus: two Serie A titles (which the club had been winning for nine consecutive years regardless), one Coppa Italia, zero Champions Leagues, and a deep financial crisis — the club recorded losses of €113 million in a single half-year and was forced to seek capital increases from parent company EXOR. It was not just a failed sporting project. It was a strategic mistake with measurable accounting consequences.",
  },
  {
    name: "Manchester United (2021–2022)",
    subtitle: "The Return That Destroyed Everything",
    intro:
      "Ronaldo's return to Old Trafford in August 2021 was presented as an emotional redemption moment — the prodigal son coming home. Sportingly, it was one of the most destructive decisions in the club's recent history.",
    managers: [
      {
        name: "Ole Gunnar Solskjær",
        detail:
          "He believed signing Ronaldo would be the catalyst for United's rebuild. It was the opposite. The Norwegian publicly admitted, in a 2024 podcast, that the decision \"felt right at the time but ultimately didn't work out\". Ronaldo's presence distorted the tactical system. Solskjær was sacked in November 2021 after a 4-1 defeat to Watford.",
      },
      {
        name: "Ralf Rangnick",
        detail:
          "Arrived as interim and lasted a full season without real authority. The German was one of the most respected tactical thinkers in European football — the intellectual father of gegenpressing. With Ronaldo in the squad, his model was unworkable. The season ended with United in sixth place in the Premier League, without Champions League qualification. Rangnick left. Ronaldo stayed — and immediately began looking for a move to a club in the Champions League, disregarding his contractual commitment.",
      },
      {
        name: "Erik ten Hag",
        detail:
          'He was the manager who finally refused to bend. In October 2022, during a match against Tottenham, Ronaldo refused to come on as a substitute and **left the tunnel** before the end of the game — one of the most insubordinate gestures in the history of modern English football. Weeks later, Ronaldo gave a two-hour interview to Piers Morgan declaring he "had no respect" for the manager. The contract was terminated in November 2022 — not because the club dismissed him, but because Ronaldo made his continued presence impossible. He **left without a settlement**.',
      },
    ],
  },
  {
    name: "Al-Nassr (2023–present)",
    subtitle: "The End of the Line",
    intro:
      "Since January 2023, Al-Nassr have invested hundreds of millions of euros in wages and transfers to build a team capable of winning the Saudi league with Ronaldo as the protagonist. The club has not won a single major title. Three managers have rotated through. The league title has remained out of reach.",
    managers: [
      {
        name: "Rudi Garcia",
        detail:
          "He was the first to fall, in April 2023 — one day after Ronaldo had left the tunnel following a frustrating draw with Al-Feiha, a gesture that became his trademark in moments of adversity. The connection between the walkout and the sacking was reported simultaneously by Goal.com and Fox Sports, with sources inside the club.",
      },
      {
        name: "Luís Castro",
        detail:
          "He arrived, tried to impose structure, and was sacked in September 2024 — the third manager to leave since Ronaldo's arrival, with Al-Nassr still without a league title. Castro has a biographical detail that gives scale to what happened: at 63 years of age, with more than two decades in professional football, the Portuguese manager stated it was the first time he had ever been sacked. The first. The last was at Al-Nassr.",
      },
      {
        name: "Stefano Pioli",
        detail:
          "He was the third attempt. The Italian, former AC Milan manager, arrived with solid credentials. He was let go in June 2025. The Arab and European press pointed directly to the deteriorating relationship with Ronaldo as the determining factor.",
      },
    ],
    balance:
      "Al-Nassr have missed, at this point, more than thirteen title opportunities since Ronaldo's arrival — including league titles, national cups and Asian competitions. The team was eliminated in the group stage of the AFC Champions League. They spent more than any other club in the Saudi league. And they still haven't won.\n\nThere is an honest way to summarise the period: Al-Nassr bought the most famous player in the world to win trophies. What they won was sacked managers.",
  },
];

const clubsPt = [
  {
    name: "Real Madrid (2009–2018)",
    subtitle: "A Fábrica de Despedimentos",
    managers: [
      {
        name: "Manuel Pellegrini",
        detail:
          "Em 2009-10, o chileno construiu a equipa mais dominante que o Real Madrid tinha apresentado em anos: 96 pontos na Liga, recorde histórico até então. Não chegou. O Barcelona de Guardiola fez 99. Pellegrini foi despedido. O contexto importa: Ronaldo tinha chegado no verão anterior por 94 milhões de euros, o projeto era dele. Quando a temporada não produziu o título, o treinador saiu. O investimento ficou.",
      },
      {
        name: "José Mourinho",
        detail:
          'Chegou em 2010 com a autoridade que parecia inabalável. Ganhou uma Liga (2011-12), uma Copa del Rey e uma Supertaça. Mas nos bastidores, a relação com Ronaldo entrou em colapso irreversível durante a temporada 2012-13. Modrić escreve que viu Ronaldo "à beira das lágrimas" e que Mourinho o fez mesmo chorar, insistindo que o trabalho defensivo era obrigatório para todos. Ronaldo respondeu: "Depois de tudo o que fiz por ti, é assim que me tratas?" A relação nunca recuperou. No final daquela temporada, Mourinho saiu. Ronaldo ficou.',
      },
      {
        name: "Carlo Ancelotti",
        detail:
          'Talvez o caso mais absurdo desta lista. Chegou em 2013-14 e ganhou a décima Champions League do clube - a mítica "Décima". Ancelotti não apenas conquistou o título mais desejado pelos adeptos merengues como também ganhou a Copa del Rey nessa época. A temporada seguinte correu menos bem: o Barça de Messi foi mais regular na Liga. Florentino Pérez despediu-o em maio de 2015. Ronaldo continuou.',
      },
      {
        name: "Rafael Benítez",
        detail:
          "Durou sete meses. Chegou em junho de 2015, saiu em janeiro de 2016. Os relatos da época descrevem tensão permanente entre o técnico espanhol e a estrela do clube. Sete meses. Despedido.",
      },
      {
        name: "Zinedine Zidane",
        detail:
          "Foi a exceção que confirma a regra. O francês compreendeu instintivamente que o projeto exigia colocar Ronaldo no centro de tudo. Ganhou três Champions consecutivas (2016, 2017, 2018). Quando Ronaldo saiu para a Juventus, Zidane demitiu-se voluntariamente semanas depois. É o único treinador desta lista que saiu pelos seus termos.",
      },
    ],
  },
  {
    name: "Juventus (2018–2021)",
    subtitle: "340 Milhões de Euros, Zero Champions, Três Treinadores",
    intro:
      "Em julho de 2018, a Juventus pagou 100 milhões de euros por um avançado de 33 anos. Comprometeu-se a pagar 31 milhões líquidos por temporada. O objetivo era explícito e único: ganhar a Champions League. Não ganhou. E três treinadores saíram no processo.",
    managers: [
      {
        name: "Massimiliano Allegri",
        detail:
          "Foi o primeiro. Tinha acabado de completar cinco anos consecutivos a ganhar a Serie A. O que se soube depois é que Allegri terá comunicado à direção que a presença de Ronaldo estava a desequilibrar o coletivo. A direção recusou. Foi Allegri a sair.",
      },
      {
        name: "Maurizio Sarri",
        detail:
          "Chegou no verão de 2019 vindo do Chelsea. A Juventus ganhou a Serie A. Mas na Champions foi eliminada nos oitavos pelo Lyon. Sarri foi despedido. Ronaldo ficou. A decisão foi interpretada na imprensa italiana como uma capitulação da direção perante a estrela do balneário.",
      },
      {
        name: "Andrea Pirlo",
        detail:
          "Com zero experiência em futebol sénior. A época de 2020-21 foi a pior da Juventus em mais de uma década. Ronaldo abandonou o clube em agosto de 2021, sem aviso prévio à direção. Pirlo foi despedido. Allegri regressou para reconstruir os destroços.",
      },
    ],
    quotes: [
      {
        person: "Leonardo Bonucci",
        text: '"Os jogadores começaram inconscientemente a pensar que a presença de Ronaldo era suficiente para ganhar os jogos."',
      },
      {
        person: "Giorgio Chiellini",
        text: '"Chegámos a uma fase da relação de trabalho em que Cristiano precisava de novas motivações - e de uma equipa que jogasse para ele."',
      },
    ],
    balance:
      "O balanço final do projeto CR7 na Juventus: dois títulos da Serie A, uma Coppa Italia, zero Champions, e uma crise financeira profunda - o clube registou perdas de 113 milhões de euros num único semestre.\n\nNão foi apenas um projeto desportivo falhado. Foi um erro estratégico com consequências contabilísticas mensuráveis.",
  },
  {
    name: "Manchester United (2021–2022)",
    subtitle: "O Regresso que Destruiu Tudo",
    intro:
      "O regresso de Ronaldo a Old Trafford em agosto de 2021 foi apresentado como um momento de redenção emocional. Em termos desportivos, foi uma das decisões mais destrutivas da história recente do clube.",
    managers: [
      {
        name: "Ole Gunnar Solskjær",
        detail:
          'Acreditou que contratar Ronaldo seria o catalisador para a reconstrução do United. Foi o oposto. O norueguês admitiu publicamente, num podcast em 2024, que a decisão "pareceu certa na altura mas acabou por não resultar". Solskjær foi despedido em novembro de 2021, após uma derrota por 4-1 com o Watford.',
      },
      {
        name: "Ralf Rangnick",
        detail:
          "Chegou como interino e durou uma temporada inteira sem autoridade real. Com Ronaldo no plantel, o seu modelo era irrealizável. A época terminou com o United em sexto lugar na Premier League. Rangnick saiu. Ronaldo ficou.",
      },
      {
        name: "Erik ten Hag",
        detail:
          'Foi o treinador que finalmente recusou dobrar-se. Em outubro de 2022, durante um jogo contra o Tottenham, Ronaldo recusou entrar como suplente. Semanas depois, concedeu uma entrevista de duas horas a Piers Morgan onde declarou que "não respeitava" o treinador. A rescisão foi consumada em novembro de 2022.',
      },
    ],
  },
  {
    name: "Al-Nassr (2023–presente)",
    subtitle: "O Fim de Linha",
    intro:
      "Desde janeiro de 2023, o Al-Nassr investiu centenas de milhões de euros para construir uma equipa capaz de vencer a liga saudita com Ronaldo como protagonista. O clube não ganhou um único título maior. Três treinadores rodaram.",
    managers: [
      {
        name: "Rudi Garcia",
        detail:
          "Foi o primeiro a cair, em abril de 2023 - um dia depois de Ronaldo ter abandonado o túnel após um empate frustrante com o Al-Feiha. A ligação entre o abandono do campo e o despedimento foi reportada pela Goal.com e pela Fox Sports.",
      },
      {
        name: "Luís Castro",
        detail:
          "Chegou, tentou impor estrutura, e foi despedido em setembro de 2024. Castro, aos 63 anos de idade, com mais de duas décadas de carreira, declarou que era a primeira vez que era despedido. A última foi no Al-Nassr.",
      },
      {
        name: "Stefano Pioli",
        detail:
          "Foi a terceira tentativa. O italiano, ex-AC Milan, chegou com credenciais sólidas. Foi dispensado em junho de 2025. A imprensa árabe e europeia apontou diretamente para a relação deteriorada com Ronaldo como fator determinante.",
      },
    ],
    balance:
      "O Al-Nassr perdeu, nesta altura, mais de treze oportunidades de título desde a chegada de Ronaldo. A equipa foi eliminada na fase de grupos da AFC Champions League. Gastou mais do que qualquer outro clube da liga saudita. E continua sem ganhar.\n\nHá uma forma honesta de resumir o período: o Al-Nassr comprou o jogador mais famoso do mundo para ganhar títulos. Ganhou treinadores despedidos.",
  },
];

const clubsEs = [
  {
    name: "Real Madrid (2009-2018)",
    subtitle: "La fábrica de despidos",
    managers: [
      {
        name: "Manuel Pellegrini",
        detail:
          "En 2009-10, el chileno construyó el Real Madrid más dominante de años: 96 puntos en Liga, récord histórico en ese momento. No bastó. El Barcelona de Guardiola hizo 99. Pellegrini fue despedido. El contexto importa: Ronaldo había llegado el verano anterior por 94 millones de euros; el proyecto estaba montado a su alrededor. Cuando la temporada no dio el título, salió el entrenador. La inversión se quedó.",
      },
      {
        name: "José Mourinho",
        detail:
          'Llegó en 2010 con una autoridad que parecía inquebrantable. Ganó una Liga (2011-12), una Copa del Rey y una Supercopa. Pero en el vestuario la relación con Ronaldo se rompió de forma irreversible durante la temporada 2012-13. Modrić escribe que lo vio "al borde de las lágrimas" y que Mourinho incluso lo hizo llorar, insistiendo en que el trabajo defensivo era obligatorio para todos. Ronaldo respondió: "Después de todo lo que he hecho por ti, ¿así me tratas?". La relación nunca se recuperó. Al final de esa temporada, Mourinho se fue. Ronaldo se quedó.',
      },
      {
        name: "Carlo Ancelotti",
        detail:
          'Quizá el caso más absurdo de la lista. Había pasado cinco años seguidos ganando la Liga. Llegó en 2013-14 y ganó la décima Champions del club, la mítica "Décima", además de la Copa del Rey. La temporada siguiente fue peor: el Barça de Messi fue más regular en Liga. Florentino Pérez lo despidió en mayo de 2015. Ronaldo siguió.',
      },
      {
        name: "Rafael Benítez",
        detail:
          "Duró siete meses. Llegó en junio de 2015 y se marchó en enero de 2016. Los reportes de la época describen una tensión permanente entre el técnico español y la estrella del club; Benítez optó por un estilo más estructurado y defensivo del que Ronaldo toleraba. Siete meses. Despedido.",
      },
      {
        name: "Zinedine Zidane",
        detail:
          "Fue la excepción que confirma la regla. El francés entendió de inmediato que el proyecto exigía poner a Ronaldo en el centro, eliminar la fricción táctica y construir alrededor del número 7. Ganó tres Champions seguidas (2016, 2017, 2018). Cuando Ronaldo se fue a la Juventus en el verano de 2018, Zidane dimitió semanas después. Es el único entrenador de la lista que salió por decisión propia. No por casualidad, es el único que nunca contradijo públicamente a Ronaldo.",
      },
    ],
  },
  {
    name: "Juventus (2018-2021)",
    subtitle: "340 millones de euros, cero Champions, tres entrenadores",
    intro:
      "En julio de 2018, la Juventus pagó 100 millones de euros por un delantero de 33 años. Se comprometió a pagar 31 millones netos por temporada. El objetivo era explícito y único: ganar la Champions League. No la ganaron. Y tres entrenadores se fueron en el proceso.",
    managers: [
      {
        name: "Massimiliano Allegri",
        detail:
          "Fue el primero en caer. Acababa de completar cinco años consecutivos ganando la Serie A. Después se supo que Allegri habría comunicado a la directiva que la presencia de Ronaldo estaba desequilibrando al colectivo y que venderlo sería preferible a largo plazo. La directiva se negó. Se fue Allegri.",
      },
      {
        name: "Maurizio Sarri",
        detail:
          "Llegó en el verano de 2019 procedente del Chelsea. En la Juventus encontró un problema que su estilo no podía resolver: Ronaldo no encajaba en el juego posicional ni en la presión colectiva que Sarri exigía. La Juve ganó la Serie A, su noveno título consecutivo. Pero en la Champions fue eliminada en octavos por el Lyon, un equipo que había terminado séptimo en Ligue 1. Sarri fue despedido. Ronaldo se quedó. La prensa italiana interpretó la decisión como una capitulación de la junta ante la estrella del vestuario.",
      },
      {
        name: "Andrea Pirlo",
        detail:
          "La elección más inexplicable de este ciclo. No tenía experiencia previa en la élite. La temporada 2020-21 fue la peor de la Juventus en más de una década: acabaron cuartos en Serie A, perdieron la liga y fueron eliminados en octavos por el Porto. Ronaldo abandonó el club en agosto de 2021, días antes del inicio de la temporada siguiente, sin aviso previo a la directiva: hizo las maletas, cargó sus coches en un camión y se fue. Pirlo fue despedido. Allegri volvió para reconstruir los restos.",
      },
    ],
    quotes: [
      {
        person: "Leonardo Bonucci",
        text: '"Los jugadores empezaron a pensar inconscientemente que la presencia de Ronaldo era suficiente para ganar los partidos."',
      },
      {
        person: "Giorgio Chiellini",
        text: '"Llegamos a un punto en la relación de trabajo en el que Cristiano necesitaba nueva motivación — y un equipo que jugara para él."',
      },
    ],
    balance:
      "Balance final del proyecto CR7 en la Juventus: dos títulos de Serie A (que el club llevaba ganando durante nueve temporadas seguidas de todos modos), una Coppa Italia, cero Champions League y una crisis financiera profunda — el club registró pérdidas de 113 millones de euros en un solo semestre y tuvo que buscar ampliaciones de capital en EXOR. No fue solo un proyecto deportivo fallido. Fue un error estratégico con consecuencias contables medibles.",
  },
  {
    name: "Manchester United (2021-2022)",
    subtitle: "El regreso que lo destruyó todo",
    intro:
      "El regreso de Ronaldo a Old Trafford en agosto de 2021 se presentó como un momento de redención emocional — el hijo pródigo volviendo a casa. Deportivamente, fue una de las decisiones más destructivas de la historia reciente del club.",
    managers: [
      {
        name: "Ole Gunnar Solskjær",
        detail:
          'Creyó que fichar a Ronaldo sería el catalizador para reconstruir al United. Fue lo contrario. El noruego admitió públicamente, en un podcast de 2024, que la decisión "pareció correcta en su momento pero al final no funcionó". La presencia de Ronaldo desordenó el sistema táctico. Solskjær fue despedido en noviembre de 2021 tras una derrota por 4-1 ante el Watford.',
      },
      {
        name: "Ralf Rangnick",
        detail:
          "Llegó como interino y aguantó una temporada completa sin autoridad real. El alemán era uno de los pensadores tácticos más respetados del fútbol europeo, el padre intelectual del gegenpressing. Con Ronaldo en la plantilla, su modelo era inviable. La temporada terminó con el United sexto en la Premier League, sin clasificación para la Champions. Rangnick se marchó. Ronaldo se quedó — y enseguida empezó a buscar un club de Champions ignorando su compromiso contractual.",
      },
      {
        name: "Erik ten Hag",
        detail:
          'Fue el entrenador que finalmente se negó a doblarse. En octubre de 2022, durante un partido contra el Tottenham, Ronaldo se negó a entrar como suplente y se fue del túnel antes del final del encuentro — uno de los gestos más insubordinados de la historia moderna del fútbol inglés. Semanas después, dio una entrevista de dos horas a Piers Morgan en la que dijo que no "tenía respeto" por el entrenador. El contrato se rescindió en noviembre de 2022 — no porque el club lo echara, sino porque Ronaldo hizo imposible que siguiera.',
      },
    ],
  },
  {
    name: "Al-Nassr (2023-actualidad)",
    subtitle: "El final del camino",
    intro:
      "Desde enero de 2023, Al-Nassr ha invertido cientos de millones de euros en salarios y fichajes para construir un equipo capaz de ganar la liga saudí con Ronaldo como protagonista. El club no ha ganado un solo título importante. Tres entrenadores han ido rotando. La liga sigue fuera de alcance.",
    managers: [
      {
        name: "Rudi Garcia",
        detail:
          "Fue el primero en caer, en abril de 2023 — un día después de que Ronaldo abandonara el túnel tras un empate frustrante con Al-Feiha, un gesto que se convirtió en su marca en los momentos de adversidad. La conexión entre la salida y el despido fue reportada al mismo tiempo por Goal.com y Fox Sports, con fuentes dentro del club.",
      },
      {
        name: "Luís Castro",
        detail:
          "Llegó, intentó imponer estructura y fue despedido en septiembre de 2024 — el tercer entrenador que se fue desde la llegada de Ronaldo, con Al-Nassr todavía sin liga. Castro tiene un dato biográfico que da escala a lo ocurrido: con 63 años y más de dos décadas en el fútbol profesional, declaró que era la primera vez que lo despedían. La primera. La última fue en Al-Nassr.",
      },
      {
        name: "Stefano Pioli",
        detail:
          "Fue el tercer intento. El italiano, exentrenador del AC Milan, llegó con credenciales sólidas. Fue apartado en junio de 2025. La prensa árabe y europea apuntó directamente a la relación deteriorada con Ronaldo como factor determinante.",
      },
    ],
    balance:
      "Al-Nassr ha perdido, a estas alturas, más de trece oportunidades de título desde la llegada de Ronaldo — incluidas ligas, copas nacionales y competiciones asiáticas. El equipo fue eliminado en la fase de grupos de la AFC Champions League. Gastó más que cualquier otro club de la liga saudí. Y sigue sin ganar. Hay una forma honesta de resumir el periodo: Al-Nassr compró al jugador más famoso del mundo para ganar trofeos. Lo que ganó fueron entrenadores despedidos.",
  },
];

const clubsFr = [
  {
    name: "Real Madrid (2009-2018)",
    subtitle: "L’usine à licenciements",
    managers: [
      {
        name: "Manuel Pellegrini",
        detail:
          "En 2009-2010, le Chilien a construit le Real Madrid le plus dominant depuis des années : 96 points en Liga, un record historique à l’époque. Cela n’a pas suffi. Le Barça de Guardiola a fait 99. Pellegrini a été licencié. Le contexte compte : Ronaldo était arrivé l’été précédent pour 94 millions d’euros ; le projet était bâti autour de lui. Quand la saison n’a pas apporté le titre, l’entraîneur est parti. L’investissement est resté.",
      },
      {
        name: "José Mourinho",
        detail:
          'Il est arrivé en 2010 avec une autorité qui paraissait inébranlable. Il a remporté une Liga (2011-2012), une Coupe du Roi et une Supercoupe. Mais dans le vestiaire, la relation avec Ronaldo s’est brisée de façon irréversible pendant la saison 2012-2013. Modrić écrit qu’il l’a vu "au bord des larmes" et que Mourinho l’a effectivement fait pleurer, en insistant sur le fait que le travail défensif était obligatoire pour tout le monde. Ronaldo aurait répondu : "Après tout ce que j’ai fait pour toi, c’est comme ça que tu me traites ?". La relation ne s’est jamais rétablie. À la fin de cette saison, Mourinho est parti. Ronaldo est resté.',
      },
      {
        name: "Carlo Ancelotti",
        detail:
          'Peut-être le cas le plus absurde de la liste. Il venait de passer cinq saisons de suite à gagner la Liga. Il arrive en 2013-2014 et remporte la dixième Ligue des Champions du club, la mythique "Décima", ainsi que la Coupe du Roi. La saison suivante est moins bonne : le Barça de Messi est plus régulier en championnat. Florentino Pérez le licencie en mai 2015. Ronaldo continue.',
      },
      {
        name: "Rafael Benítez",
        detail:
          "Il a tenu sept mois. Arrivé en juin 2015, parti en janvier 2016. Les reportages de l’époque décrivent une tension permanente entre le technicien espagnol et la star du club ; Benítez privilégiait un style plus structuré et plus défensif que Ronaldo ne voulait pas accepter. Sept mois. Licencié.",
      },
      {
        name: "Zinedine Zidane",
        detail:
          "C’est l’exception qui confirme la règle. Le Français a compris instinctivement que le projet exigeait de placer Ronaldo au centre, d’éliminer les frictions tactiques et de construire autour du numéro 7. Il a gagné trois Ligues des Champions d’affilée (2016, 2017, 2018). Quand Ronaldo est parti à la Juventus à l’été 2018, Zidane a démissionné quelques semaines plus tard. C’est le seul entraîneur de la liste à être parti de son propre chef. Ce n’est pas un hasard : c’est le seul qui n’a jamais publiquement contredit Ronaldo.",
      },
    ],
  },
  {
    name: "Juventus (2018-2021)",
    subtitle:
      "340 millions d’euros, zéro Ligue des Champions, trois entraîneurs",
    intro:
      "En juillet 2018, la Juventus a payé 100 millions d’euros pour un attaquant de 33 ans. Le club s’est engagé à lui verser 31 millions nets par saison. L’objectif était explicite et unique : gagner la Ligue des Champions. Ils ne l’ont pas gagnée. Et trois entraîneurs sont partis dans le processus.",
    managers: [
      {
        name: "Massimiliano Allegri",
        detail:
          "C’est le premier à tomber. Il venait de terminer cinq saisons consécutives avec la Serie A. On a ensuite appris qu’Allegri aurait dit à la direction que la présence de Ronaldo déséquilibrait le collectif et qu’il serait préférable de le vendre à long terme. La direction a refusé. Allegri est parti.",
      },
      {
        name: "Maurizio Sarri",
        detail:
          "Arrivé à l’été 2019 en provenance de Chelsea. À la Juventus, il a trouvé un problème que son style ne pouvait pas résoudre : Ronaldo n’entrait pas dans le jeu de position ni dans le pressing collectif qu’il exigeait. La Juve a gagné la Serie A, son neuvième titre consécutif. Mais en Ligue des Champions, elle a été éliminée en huitièmes par Lyon, une équipe qui avait fini septième de Ligue 1. Sarri a été licencié. Ronaldo est resté. La presse italienne a interprété cette décision comme une capitulation de la direction face à la star du vestiaire.",
      },
      {
        name: "Andrea Pirlo",
        detail:
          "Le choix le plus inexplicable de ce cycle. Il n’avait aucune expérience au plus haut niveau. La saison 2020-2021 a été la pire de la Juventus depuis plus d’une décennie : quatrième place en Serie A, titre perdu, élimination en huitièmes par Porto. Ronaldo a quitté le club en août 2021, quelques jours avant le début de la saison suivante, sans prévenir la direction : il a fait ses valises, chargé ses voitures sur un camion et est parti. Pirlo a été licencié. Allegri est revenu reconstruire les décombres.",
      },
    ],
    quotes: [
      {
        person: "Leonardo Bonucci",
        text: '"Les joueurs ont commencé à penser inconsciemment que la présence de Ronaldo suffisait à gagner les matches."',
      },
      {
        person: "Giorgio Chiellini",
        text: '"Nous sommes arrivés à un point dans la relation de travail où Cristiano avait besoin d’une nouvelle motivation — et d’une équipe qui joue pour lui."',
      },
    ],
    balance:
      "Bilan final du projet CR7 à la Juventus : deux titres de Serie A (que le club gagnait de toute façon depuis neuf saisons d’affilée), une Coupe d’Italie, zéro Ligue des Champions et une crise financière profonde — le club a enregistré 113 millions d’euros de pertes sur un seul semestre et a dû chercher des augmentations de capital auprès d’EXOR. Ce n’était pas seulement un échec sportif. C’était une erreur stratégique aux conséquences comptables mesurables.",
  },
  {
    name: "Manchester United (2021-2022)",
    subtitle: "Le retour qui a tout détruit",
    intro:
      "Le retour de Ronaldo à Old Trafford en août 2021 a été présenté comme un moment de rédemption émotionnelle — le fils prodigue rentrant à la maison. Sportivement, ce fut l’une des décisions les plus destructrices de l’histoire récente du club.",
    managers: [
      {
        name: "Ole Gunnar Solskjær",
        detail:
          'Il a cru que recruter Ronaldo serait le catalyseur de la reconstruction de United. C’était l’inverse. Le Norvégien a admis publiquement, dans un podcast de 2024, que la décision "semblait juste sur le moment mais n’a finalement pas fonctionné". La présence de Ronaldo a déséquilibré le système tactique. Solskjær a été licencié en novembre 2021 après une défaite 4-1 contre Watford.',
      },
      {
        name: "Ralf Rangnick",
        detail:
          "Arrivé comme intérimaire, il a tenu une saison complète sans vraie autorité. L’Allemand était l’un des penseurs tactiques les plus respectés du football européen, le père intellectuel du gegenpressing. Avec Ronaldo dans l’effectif, son modèle était ingérable. La saison s’est terminée avec United à la sixième place de Premier League, sans qualification pour la Ligue des Champions. Rangnick est parti. Ronaldo est resté — et a immédiatement commencé à chercher un club de Ligue des Champions en ignorant son engagement contractuel.",
      },
      {
        name: "Erik ten Hag",
        detail:
          'C’est l’entraîneur qui a finalement refusé de plier. En octobre 2022, lors d’un match contre Tottenham, Ronaldo a refusé d’entrer en jeu comme remplaçant et a quitté le tunnel avant la fin de la rencontre — l’un des gestes les plus insubordonnés de l’histoire moderne du football anglais. Quelques semaines plus tard, il a donné une interview de deux heures à Piers Morgan où il a déclaré ne pas "avoir de respect" pour l’entraîneur. Le contrat a été résilié en novembre 2022 — non pas parce que le club l’a renvoyé, mais parce que Ronaldo a rendu sa présence impossible.',
      },
    ],
  },
  {
    name: "Al-Nassr (2023-aujourd’hui)",
    subtitle: "La fin de la ligne",
    intro:
      "Depuis janvier 2023, Al-Nassr a investi des centaines de millions d’euros en salaires et en transferts pour construire une équipe capable de gagner le championnat saoudien avec Ronaldo comme protagoniste. Le club n’a remporté aucun grand titre. Trois entraîneurs se sont succédé. Le championnat reste hors de portée.",
    managers: [
      {
        name: "Rudi Garcia",
        detail:
          "Il a été le premier à tomber, en avril 2023 — un jour après que Ronaldo a quitté le tunnel après un nul frustrant contre Al-Feiha, un geste devenu sa signature dans les moments d’adversité. Le lien entre cette sortie et le licenciement a été rapporté simultanément par Goal.com et Fox Sports, avec des sources au sein du club.",
      },
      {
        name: "Luís Castro",
        detail:
          "Il est arrivé, a essayé d’imposer une structure, puis a été licencié en septembre 2024 — le troisième entraîneur à partir depuis l’arrivée de Ronaldo, alors qu’Al-Nassr n’avait toujours pas de titre de championnat. Castro a un détail biographique qui donne l’échelle de ce qui s’est passé : à 63 ans, avec plus de vingt ans dans le football professionnel, le Portugais a déclaré que c’était la première fois de sa carrière qu’il était licencié. La première. La dernière à Al-Nassr.",
      },
      {
        name: "Stefano Pioli",
        detail:
          "C’était la troisième tentative. L’Italien, ancien entraîneur de l’AC Milan, est arrivé avec des références solides. Il a été écarté en juin 2025. La presse arabe et européenne a pointé directement la relation détériorée avec Ronaldo comme facteur décisif.",
      },
    ],
    balance:
      "Al-Nassr a perdu, à ce stade, plus de treize opportunités de titre depuis l’arrivée de Ronaldo — ligues, coupes nationales et compétitions asiatiques comprises. L’équipe a été éliminée en phase de groupes de l’AFC Champions League. Elle a dépensé plus que n’importe quel autre club de la Saudi League. Et elle n’a toujours rien gagné. Il existe une façon honnête de résumer la période : Al-Nassr a acheté le joueur le plus célèbre du monde pour gagner des trophées. Ce qu’il a gagné, ce sont des entraîneurs licenciés.",
  },
];

const clubsByLang = {
  en: clubsEn,
  pt: clubsPt,
  es: clubsEs,
  fr: clubsFr,
};

const sectionContent = {
  en: {
    title: "Sacked Managers",
    h1: "The Untouchable",
    p1: "There is one fact that runs through Cristiano Ronaldo's entire career with a consistency that is rarely named clearly: when results failed, the managers paid the price. He never did. At four clubs, over sixteen years, the same logic repeated itself — the team wasn't working, the titles weren't coming, and the board identified the problem as sitting on the bench. Never in the dressing room. Never with the player whose salary made any decision to break the relationship politically impossible.",
    p2: "The pattern is not necessarily a conspiracy. It is something more revealing than that: it is proof that at every club where he played, the institution built its identity around a single man — and when that model failed, nobody had the courage to say out loud who was at the centre of the problem.",
  },
  pt: {
    title: "Treinadores Despedidos",
    h1: "O Intocável",
    p1: "Há um dado que percorre toda a carreira de Cristiano Ronaldo com uma consistência que raramente é nomeada com clareza: quando os resultados falharam, os treinadores pagaram. Ele, nunca. Em quatro clubes, ao longo de dezasseis anos, a mesma lógica repetiu-se.",
    p2: "O padrão não é necessariamente uma conspiração. É algo mais revelador do que isso: é a prova de que em cada clube onde jogou, a instituição construiu a sua identidade em torno de um único homem.",
  },
  es: {
    title: "Entrenadores Despedidos",
    h1: "El Intocable",
    p1: "Hay un dato que recorre toda la carrera de Cristiano Ronaldo con una consistencia que rara vez se nombra con claridad: cuando los resultados fallaban, los entrenadores pagaban el precio. Él, nunca. En cuatro clubes, durante dieciséis años, la misma lógica se repitió.",
    p2: "El patrón no es necesariamente una conspiración. Es algo más revelador que eso: es la prueba de que en cada club donde jugó, la institución construyó su identidad en torno a un solo hombre.",
  },
  fr: {
    title: "Entraîneurs licenciés",
    h1: "L’intouchable",
    p1: "Il y a un fait qui traverse toute la carrière de Cristiano Ronaldo avec une cohérence rarement nommée clairement : quand les résultats n’étaient pas au rendez-vous, ce sont les entraîneurs qui payaient. Lui, jamais. Dans quatre clubs, pendant seize ans, la même logique s’est répétée.",
    p2: "Le schéma n’est pas forcément un complot. C’est quelque chose de plus révélateur : la preuve que dans chaque club où il a joué, l’institution a construit son identité autour d’un seul homme.",
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export default function SackedManagersSection() {
  const [openClub, setOpenClub] = useState(0);
  const { lang, t } = useI18n();
  const c = (key) => fallback(sectionContent, lang, key);
  const clubs = clubsByLang[lang] || clubsEn;

  return (
    <SectionWrapper
      id="sacked-managers"
      label={t("label_managers")}
      title={c("title")}
    >
      <h2>{c("h1")}</h2>
      <p>{c("p1")}</p>
      <p>{c("p2")}</p>

      <div className="section-divider" />

      <div className="space-y-6">
        {clubs.map((club, ci) => (
          <div
            key={ci}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenClub(openClub === ci ? -1 : ci)}
              className="w-full flex items-center justify-between px-6 py-5 bg-muted/30 hover:bg-muted/60 transition-colors text-left"
            >
              <div>
                <p className="font-semibold text-foreground text-lg">
                  {club.name}
                </p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {club.subtitle}
                </p>
              </div>
              <span className="text-2xl text-muted-foreground">
                {openClub === ci ? "−" : "+"}
              </span>
            </button>
            {openClub === ci && (
              <div className="px-6 py-6 space-y-4">
                {club.intro && (
                  <p className="text-foreground/75 leading-relaxed text-sm">
                    {club.intro}
                  </p>
                )}
                {club.managers.map((m, mi) => (
                  <div
                    key={mi}
                    className="border-l-4 border-amber-500 pl-4 py-1"
                  >
                    <p className="font-semibold text-foreground">{m.name}</p>
                    <p className="text-foreground/65 text-sm mt-1 leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                ))}
                {club.quotes && (
                  <div className="bg-muted/40 rounded-xl p-5 space-y-3 mt-4">
                    {club.quotes.map((q, qi) => (
                      <div key={qi}>
                        <p className="italic text-foreground/70 text-sm">
                          {q.text}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          - {q.person}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {club.balance && (
                  <div className="mt-4 p-5 bg-red-50 border border-red-100 rounded-xl">
                    {club.balance.split("\n\n").map((p, pi) => (
                      <p
                        key={pi}
                        className="text-foreground/75 text-sm mb-2 last:mb-0"
                      >
                        {p}
                      </p>
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
