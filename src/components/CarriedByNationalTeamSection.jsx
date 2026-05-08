import React from "react";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const tournamentsEn = [
  {
    year: "Euro 2016",
    title: "title decided by Nani, Quaresma, Éder, Patrício and Pepe",
    content:
      'At Euro 2016, Ronaldo finishes with 3 goals, but he is not "the man of the tournament". Nani also scores 3, including the 2-0 in the semi-final against Wales, a goal described by the AP as "vital" to seal the game.',
    points: [
      "Round of 16 vs Croatia: Portugal had not a single shot on target until the 117th minute. The goal comes from a transition where Ronaldo's shot is saved and Quaresma heads in for 1-0.",
      "Quarter-finals vs Poland: in the penalty shootout, it is Quaresma who converts the decisive penalty (5-3), after a Rui Patrício save.",
      "Final vs France: Ronaldo goes off injured at 25 minutes. From then on, Rui Patrício makes several decisive saves, Pepe leads the defence and Éder scores the title-winning goal at 109 minutes.",
    ],
    conclusion:
      'International reports were direct: Portugal "surprised France and won the Euro despite Ronaldo\'s injury, thanks to Éder\'s goal and Patrício\'s heroic display". The idea that he "carried Portugal to the title" does not survive the match timeline.',
  },
  {
    year: "Nations League 2019",
    title: "the title goal is Guedes's, the move is Bernardo's",
    content:
      "In the 2019 Nations League final against the Netherlands, Portugal win 1-0.",
    points: [
      "The goal is by Gonçalo Guedes, from outside the box.",
      'The move originates from a run and pass by Bernardo Silva; the BBC highlights that the trophy is won by "Guedes\'s strike after brilliant work from Bernardo".',
    ],
    conclusion:
      "Ronaldo is on the pitch, but Portugal's second official title in history is again decided by others: Éder in 2016, Guedes in 2019.",
  },
  {
    year: "Euro 2020",
    title: "Group stage Golden Boot, invisible in the knockout rounds",
    content:
      "At Euro 2020, Ronaldo is the tournament's top scorer (5 goals), but all in the group stage. In the round of 16 against Belgium, Portugal lose 1-0.",
    points: [],
    quote:
      "The Athletic summed up that game in one sentence: \"Ronaldo blank, the Hazards in the spotlight, and Pepe finally loses his head.\" When the level rose and someone was needed to break a strong defensive block, it was others — Thorgan Hazard, De Bruyne, Courtois — who decided. The group stage goals secure the Golden Boot, but they don't change the national team's fate.",
  },
  {
    year: "World Cup 2022",
    title: "Ramos, Bruno and Pepe leading the way",
    content: "In Qatar, the contrast is stark.",
    points: [
      'Group stage: Ronaldo scores a penalty against Ghana in an incident the FIFA praised as "genius" in the way he won it, but which the Ghanaian manager called a refereeing error.',
      'Round of 16 vs Switzerland: Fernando Santos drops him from the starting eleven. In his place, Gonçalo Ramos, 21, scores a hat-trick; Pepe also scores and Portugal win 6-1. Sky Sports: "Portugal had no regrets about leaving Ronaldo on the bench."',
      "Quarter-finals vs Morocco: he comes on from the bench, has little influence and leaves in tears. In PortuGOAL's ratings, the spotlight goes to Pepe (best on the pitch) and Bruno Fernandes as the most influential midfielder throughout the tournament.",
    ],
    conclusion:
      "In Portugal's best display at a World Cup since 1966, Ronaldo was not even on the pitch. The names who carry the load are Ramos, Bruno, Pepe.",
  },
  {
    year: "Euro 2024",
    title: "the worst striker in the tournament… always on the pitch",
    content:
      "At Euro 2024, the drop in output is even more visible, but his time on the pitch does not decrease.",
    points: [
      "He played all five of Portugal's games, always as a starter, accumulating nearly every available minute (including 120 against Slovenia).",
      "He did not score a single goal.",
      'According to data compiled by the English press, he was the striker with the worst efficiency in the competition: xG accumulated around 3.5 goals, zero converted — officially "the worst centre-forward at Euro 2024" relative to the chances he had.',
    ],
    conclusion:
      "In the round of 16 against Slovenia, he had 120 minutes to decide, missed a penalty in extra time and ended in tears; the one who rescues Portugal is Diogo Costa, with three penalties saved, while Bruno and Bernardo convert without missing. In the quarter-final against France, PortuGOAL gives him 4.5/10, noting he had the worst passing percentage and fewest touches of any outfield player — yet he only comes off well into the second half.",
  },
];

const tournamentsPt = [
  {
    year: "Euro 2016",
    title: "título decidido por Nani, Quaresma, Éder, Patrício e Pepe",
    content:
      'No Euro 2016, Ronaldo acaba com 3 golos, mas não é "o homem do torneio". Nani também marca 3, incluindo o 2-0 na meia-final com o País de Gales, golo descrito pela AP como "vital" para matar o jogo.',
    points: [
      "Oitavos com a Croácia: Portugal não tinha um único remate à baliza até aos 117 minutos. O golo surge numa transição em que Ronaldo vê o remate defendido e Quaresma aparece de cabeça para fazer o 1-0.",
      "Quartos com a Polónia: no desempate por penáltis, é Quaresma que converte o penálti decisivo (5-3), depois de defesa de Rui Patrício.",
      "Final com a França: Ronaldo sai lesionado aos 25 minutos. A partir daí, Rui Patrício faz várias defesas decisivas, Pepe lidera a defesa e Éder marca o golo do título aos 109 minutos.",
    ],
    conclusion:
      'Crónicas internacionais foram diretas: Portugal "surpreendeu a França e ganhou o Euro apesar da lesão de Ronaldo, graças ao golo de Éder e à exibição heroica de Patrício".',
  },
  {
    year: "Nations League 2019",
    title: "o golo do título é de Guedes, a jogada é de Bernardo",
    content:
      "Na final da Liga das Nações 2019, contra a Holanda, Portugal ganha 1-0.",
    points: [
      "O golo é de Gonçalo Guedes, num remate de fora da área.",
      'A jogada nasce de uma arrancada e passe de Bernardo Silva; a BBC sublinha que o troféu é conquistado pelo "remate de Guedes após brilhante trabalho de Bernardo".',
    ],
    conclusion:
      "Ronaldo está em campo, mas o segundo troféu oficial da história de Portugal volta a ser decidido por outros: Éder em 2016, Guedes em 2019.",
  },
  {
    year: "Euro 2020",
    title: "Bota de Ouro de grupos, apagado no mata-mata",
    content:
      "No Euro 2020, Ronaldo é melhor marcador da competição (5 golos), mas todos na fase de grupos. Nos oitavos contra a Bélgica, Portugal perde 1-0.",
    points: [],
    quote:
      'O The Athletic resumiu esse jogo numa frase: "Ronaldo em branco, os Hazards em destaque, e Pepe perde finalmente a cabeça". Quando o nível subiu e era preciso alguém para partir um bloco forte, foram outros (Thorgan Hazard, De Bruyne, Courtois) a decidir.',
  },
  {
    year: "Mundial 2022",
    title: "Ramos, Bruno e Pepe à frente",
    content: "No Qatar, o contraste é violento.",
    points: [
      'Fase de grupos: Ronaldo marca um penálti contra o Gana, num lance que a FIFA elogiou como "genialidade".',
      "Oitavos com a Suíça: Fernando Santos tira-o do onze. No seu lugar, Gonçalo Ramos marca um hat-trick; Pepe também marca e Portugal ganha 6-1.",
      "Quartos com Marrocos: entra do banco, tem pouca influência e sai em lágrimas.",
    ],
    conclusion:
      "Na melhor exibição de Portugal num Mundial desde 1966, Ronaldo nem sequer esteve em campo. Os nomes que carregam são Ramos, Bruno, Pepe.",
  },
  {
    year: "Euro 2024",
    title: "o pior avançado do torneio… sempre em campo",
    content:
      "No Euro 2024, a queda de rendimento é ainda mais visível, mas o tempo em campo não diminui.",
    points: [
      "Jogou todos os cinco jogos de Portugal, sempre como titular.",
      "Não marcou um único golo.",
      "Foi o avançado com pior eficácia da prova: xG acumulado a rondar 3,5 golos, zero convertidos.",
    ],
    conclusion:
      "Nos oitavos com a Eslovénia, teve 120 minutos para decidir, falhou um penálti e acabou em lágrimas; quem segura Portugal é Diogo Costa, com três penáltis defendidos.",
  },
];

const tournamentsEs = [
  {
    year: "Euro 2016",
    title: "título decidido por Nani, Quaresma, Éder, Patrício y Pepe",
    content:
      'En la Euro 2016, Ronaldo termina con 3 goles, pero no es "el hombre del torneo". Nani también marca 3, incluido el 2-0 en la semifinal ante Gales, un gol descrito por AP como "vital" para cerrar el partido.',
    points: [
      "Octavos contra Croacia: Portugal no había hecho un solo remate a puerta hasta el minuto 117. El gol llega en una transición en la que el disparo de Ronaldo es detenido y Quaresma remata de cabeza para el 1-0.",
      "Cuartos contra Polonia: en la tanda de penaltis, es Quaresma quien convierte el penalti decisivo (5-3), tras una parada de Rui Patrício.",
      "Final contra Francia: Ronaldo se lesiona en el minuto 25. A partir de ahí, Rui Patrício hace varias paradas decisivas, Pepe lidera la defensa y Éder marca el gol del título en el minuto 109.",
    ],
    conclusion:
      'Las crónicas internacionales fueron claras: Portugal "sorprendió a Francia y ganó la Euro pese a la lesión de Ronaldo, gracias al gol de Éder y a la actuación heroica de Patrício". La idea de que "llevó a Portugal al título" no resiste la cronología del partido.',
  },
  {
    year: "Liga de Naciones 2019",
    title: "el gol del título es de Guedes, la jugada es de Bernardo",
    content:
      "En la final de la Liga de Naciones 2019 contra los Países Bajos, Portugal gana 1-0.",
    points: [
      "El gol es de Gonçalo Guedes, desde fuera del área.",
      'La jugada nace de una carrera y un pase de Bernardo Silva; la BBC destaca que el trofeo se gana con "el disparo de Guedes tras el trabajo brillante de Bernardo".',
    ],
    conclusion:
      "Ronaldo está en el campo, pero el segundo título oficial de la historia de Portugal vuelve a decidirlo otro: Éder en 2016, Guedes en 2019.",
  },
  {
    year: "Euro 2020",
    title: "Bota de Oro de la fase de grupos, invisible en el mata-mata",
    content:
      "En la Euro 2020, Ronaldo es el máximo goleador del torneo (5 goles), pero todos en la fase de grupos. En octavos contra Bélgica, Portugal pierde 1-0.",
    points: [],
    quote:
      'The Athletic resumió ese partido en una frase: "Ronaldo en blanco, los Hazard en primer plano y Pepe perdiendo finalmente los nervios". Cuando subió el nivel y hacía falta alguien que rompiera un bloque fuerte, fueron otros — Thorgan Hazard, De Bruyne, Courtois — quienes decidieron. Los goles de la fase de grupos aseguran la Bota de Oro, pero no cambian el destino de la selección.',
  },
  {
    year: "Mundial 2022",
    title: "Ramos, Bruno y Pepe al frente",
    content: "En Qatar, el contraste es brutal.",
    points: [
      'Fase de grupos: Ronaldo marca un penalti contra Ghana en una jugada que la FIFA elogió como "genial" en la forma en que lo ganó, pero que el seleccionador ghanés calificó de error arbitral.',
      "Octavos contra Suiza: Fernando Santos lo deja fuera del once titular. En su lugar, Gonçalo Ramos, con 21 años, marca un hat-trick; Pepe también marca y Portugal gana 6-1.",
      "Cuartos contra Marruecos: entra desde el banquillo, influye poco y se marcha llorando.",
    ],
    conclusion:
      "En la mejor actuación de Portugal en un Mundial desde 1966, Ronaldo ni siquiera estaba sobre el césped. Los nombres que cargan con el peso son Ramos, Bruno y Pepe.",
  },
  {
    year: "Euro 2024",
    title: "el peor delantero del torneo… siempre en el campo",
    content:
      "En la Euro 2024, la caída de rendimiento es todavía más visible, pero su tiempo en el campo no disminuye.",
    points: [
      "Jugó los cinco partidos de Portugal, siempre como titular.",
      "No marcó ni un solo gol.",
      'Fue el delantero con peor eficacia de la competición: xG acumulado en torno a 3,5 goles, cero convertidos, oficialmente "el peor centrodelantero de la Euro 2024" en relación con las ocasiones que tuvo.',
    ],
    conclusion:
      "En octavos contra Eslovenia, tuvo 120 minutos para decidir, falló un penalti en la prórroga y terminó llorando; quien rescata a Portugal es Diogo Costa, con tres penaltis detenidos, mientras Bruno y Bernardo convierten sin fallar. En cuartos contra Francia, PortuGOAL le da un 4,5/10 y señala que tuvo el peor porcentaje de pase y menos toques que cualquier jugador de campo, aunque solo salió ya entrada la segunda parte.",
  },
];

const tournamentsFr = [
  {
    year: "Euro 2016",
    title: "le titre est décidé par Nani, Quaresma, Éder, Patrício et Pepe",
    content:
      'À l’Euro 2016, Ronaldo termine avec 3 buts, mais il n’est pas "l’homme du tournoi". Nani marque lui aussi 3 buts, dont le 2-0 en demi-finale contre le pays de Galles, un but décrit par l’AP comme "vital" pour tuer le match.',
    points: [
      "Huitième de finale contre la Croatie : le Portugal n’a pas cadré un seul tir avant la 117e minute. Le but vient d’une transition où la frappe de Ronaldo est repoussée et Quaresma place une tête pour le 1-0.",
      "Quarts contre la Pologne : lors de la séance de tirs au but, c’est Quaresma qui transforme le penalty décisif (5-3), après un arrêt de Rui Patrício.",
      "Finale contre la France : Ronaldo sort blessé à la 25e minute. À partir de là, Rui Patrício réalise plusieurs arrêts décisifs, Pepe mène la défense et Éder inscrit le but du titre à la 109e minute.",
    ],
    conclusion:
      'Les chroniques internationales ont été directes : le Portugal a "surpris la France et gagné l’Euro malgré la blessure de Ronaldo, grâce au but d’Éder et à la prestation héroïque de Patrício". L’idée qu’il "a porté le Portugal au titre" ne résiste pas à la chronologie du match.',
  },
  {
    year: "Ligue des Nations 2019",
    title: "le but du titre est celui de Guedes, l’action celle de Bernardo",
    content:
      "En finale de la Ligue des Nations 2019 contre les Pays-Bas, le Portugal s’impose 1-0.",
    points: [
      "Le but est inscrit par Gonçalo Guedes, d’une frappe de l’extérieur de la surface.",
      'L’action naît d’une course et d’une passe de Bernardo Silva ; la BBC souligne que le trophée est remporté grâce au "tir de Guedes après le travail brillant de Bernardo".',
    ],
    conclusion:
      "Ronaldo est sur la pelouse, mais le deuxième titre officiel de l’histoire du Portugal est encore une fois décidé par d’autres : Éder en 2016, Guedes en 2019.",
  },
  {
    year: "Euro 2020",
    title:
      "Soulier d’or de la phase de groupes, invisible dans les matches à élimination directe",
    content:
      "À l’Euro 2020, Ronaldo est le meilleur buteur du tournoi (5 buts), mais tous en phase de groupes. En huitième de finale contre la Belgique, le Portugal perd 1-0.",
    points: [],
    quote:
      'The Athletic a résumé ce match en une phrase : "Ronaldo muet, les Hazard sous les projecteurs, et Pepe finit enfin par perdre ses nerfs". Quand le niveau est monté et qu’il fallait quelqu’un pour faire sauter un bloc défensif solide, ce sont les autres — Thorgan Hazard, De Bruyne, Courtois — qui ont décidé. Les buts de la phase de groupes assurent le Soulier d’or, mais ils ne changent pas le destin de la sélection.',
  },
  {
    year: "Coupe du monde 2022",
    title: "Ramos, Bruno et Pepe mènent la danse",
    content: "Au Qatar, le contraste est saisissant.",
    points: [
      'Phase de groupes : Ronaldo marque un penalty contre le Ghana dans une action que la FIFA a saluée comme "géniale" dans la façon dont il l’a obtenue, mais que le sélectionneur ghanéen a qualifiée d’erreur d’arbitrage.',
      "Huitièmes contre la Suisse : Fernando Santos le sort du onze de départ. À sa place, Gonçalo Ramos, 21 ans, signe un triplé ; Pepe marque aussi et le Portugal s’impose 6-1.",
      "Quarts contre le Maroc : il entre en fin de match, pèse peu et quitte la pelouse en larmes.",
    ],
    conclusion:
      "Dans la meilleure prestation du Portugal en Coupe du monde depuis 1966, Ronaldo n’était même pas sur le terrain. Les noms qui portent l’équipe sont Ramos, Bruno et Pepe.",
  },
  {
    year: "Euro 2024",
    title: "le pire avant-centre du tournoi… toujours sur le terrain",
    content:
      "À l’Euro 2024, la baisse de rendement est encore plus visible, mais son temps de jeu ne diminue pas.",
    points: [
      "Il a disputé les cinq matchs du Portugal, toujours titulaire.",
      "Il n’a marqué aucun but.",
      'Selon les données compilées par la presse anglaise, il a été l’attaquant le moins efficace de la compétition : xG total autour de 3,5 buts, zéro conversion, officiellement "le pire numéro 9 de l’Euro 2024" au regard des occasions qu’il a eues.',
    ],
    conclusion:
      "En huitième contre la Slovénie, il a eu 120 minutes pour décider, a raté un penalty en prolongation et a fini en larmes ; celui qui sauve le Portugal est Diogo Costa, avec trois penalties arrêtés, tandis que Bruno et Bernardo transforment sans trembler. En quart contre la France, PortuGOAL lui donne 4,5/10, en notant qu’il avait le pire pourcentage de passes et le moins de touches de n’importe quel joueur de champ — et pourtant il ne sort qu’en seconde période bien avancée.",
  },
];

const tournamentsByLang = {
  en: tournamentsEn,
  pt: tournamentsPt,
  es: tournamentsEs,
  fr: tournamentsFr,
};

const content = {
  en: {
    title: "Portugal Carried Ronaldo",
    intro:
      "From Euro 2016 to the most recent Nations League/qualifier, the pattern is always the same: the narrative says Ronaldo carried Portugal, but when you look at the games that truly define tournaments, it is almost always others who step up.",
    summary_h:
      "From Euro 2016 to today: who makes the plays and who appears on the cover",
    summary_intro:
      "Across these tournaments, the timeline of important games always shows the same pattern: the moments when Portugal truly needs someone to decide come from others.",
    summary_li1:
      "Euro 2016: Nani, Quaresma, Éder, Patrício and Pepe are the names in the key games.",
    summary_li2:
      "Nations League 2019: Bernardo drives it, Guedes scores the title-winning goal.",
    summary_li3:
      "Euro 2020: Group stage Golden Boot, but in the round of 16 it is the Belgians who decide; Ronaldo goes blank.",
    summary_li4:
      "World Cup 2022: Ramos, Bruno and Pepe carry the 6-1 win over Switzerland; Portugal fall to Morocco without a Ronaldo goal.",
    summary_li5:
      "Euro 2024: Diogo Costa, Bruno and Bernardo rescue the team in the shootout; Ronaldo is the protagonist of the drama, not the solution.",
    summary_p:
      'The honest sentence, looking from Euro 2016 to today, is not "Ronaldo carried the national team". It is another: Portugal spent a decade selling the idea that it needed him for everything, but whenever someone was needed to decide a tournament, it was almost always teammates — Nani, Quaresma, Éder, Guedes, Bernardo, Bruno, Ramos, Diogo Costa — who did the heavy lifting, while the number 7 kept the protagonist role on the covers thanks to penalties and tap-ins during breaks.',
  },
  pt: {
    title: "Portugal carregou Ronaldo",
    intro:
      "Do Euro 2016 até à última Nations/qualificação recente, o padrão é sempre o mesmo: a narrativa diz que Ronaldo carregou Portugal, mas quando se olha para os jogos que realmente definem torneios, são quase sempre outros a aparecer.",
    summary_h:
      "Entre Euro 2016 e hoje: quem faz as jogadas e quem aparece na capa",
    summary_intro:
      "Entre estes torneios, a cronologia dos jogos importantes mostra sempre o mesmo padrão: os momentos em que Portugal realmente precisa de alguém para decidir vêm de outros.",
    summary_li1:
      "Euro 2016: Nani, Quaresma, Éder, Patrício e Pepe são os nomes dos jogos-chave.",
    summary_li2:
      "Nations League 2019: Bernardo conduz, Guedes marca o golo do título.",
    summary_li3:
      "Euro 2020: Bota de Ouro de grupos, mas nos oitavos quem decide são os belgas; Ronaldo fica em branco.",
    summary_li4:
      "Mundial 2022: Ramos, Bruno e Pepe carregam nos 6-1 à Suíça; Portugal cai com Marrocos sem golo de Ronaldo.",
    summary_li5:
      "Euro 2024: Diogo Costa, Bruno e Bernardo salvam a equipa nos penáltis; Ronaldo é protagonista do drama, não da solução.",
    summary_p:
      'A frase honesta, olhando de Euro 2016 até hoje, não é "Ronaldo carregou a Seleção". É outra: Portugal passou uma década a vender a ideia de que precisava dele para tudo, mas sempre que foi preciso alguém para decidir um torneio, foram quase sempre colegas a fazer o trabalho pesado.',
  },
  es: {
    title: "Portugal llevó a Ronaldo",
    intro:
      "Desde la Euro 2016 hasta la Nations/qualificación más reciente, el patrón es siempre el mismo: la narrativa dice que Ronaldo cargó con Portugal, pero cuando miras los partidos que de verdad definen torneos, son casi siempre otros los que aparecen.",
    summary_h:
      "De la Euro 2016 a hoy: quién hace las jugadas y quién sale en la portada",
    summary_intro:
      "En estos torneos, la cronología de los partidos importantes muestra siempre el mismo patrón: los momentos en que Portugal realmente necesita a alguien que decida vienen de otros.",
    summary_li1:
      "Euro 2016: Nani, Quaresma, Éder, Patrício y Pepe son los nombres de los partidos clave.",
    summary_li2:
      "Liga de Naciones 2019: Bernardo conduce, Guedes marca el gol del título.",
    summary_li3:
      "Euro 2020: Bota de Oro de la fase de grupos, pero en octavos quienes deciden son los belgas; Ronaldo se queda en blanco.",
    summary_li4:
      "Mundial 2022: Ramos, Bruno y Pepe cargan con el 6-1 a Suiza; Portugal cae ante Marruecos sin gol de Ronaldo.",
    summary_li5:
      "Euro 2024: Diogo Costa, Bruno y Bernardo salvan al equipo en los penaltis; Ronaldo es protagonista del drama, no de la solución.",
    summary_p:
      'La frase honesta, mirando desde la Euro 2016 hasta hoy, no es "Ronaldo llevó a la selección". Es otra: Portugal pasó una década vendiendo la idea de que lo necesitaba para todo, pero siempre que hubo que decidir un torneo, casi siempre fueron sus compañeros — Nani, Quaresma, Éder, Guedes, Bernardo, Bruno, Ramos, Diogo Costa — quienes hicieron el trabajo pesado.',
  },
  fr: {
    title: "Le Portugal a porté Ronaldo",
    intro:
      "De l’Euro 2016 à la dernière Nations/qualification, le schéma est toujours le même : le récit dit que Ronaldo a porté le Portugal, mais quand on regarde les matches qui définissent vraiment les tournois, ce sont presque toujours les autres qui se révèlent.",
    summary_h:
      "De l’Euro 2016 à aujourd’hui : qui fait les actions et qui apparaît en couverture",
    summary_intro:
      "Dans ces tournois, la chronologie des matches importants montre toujours le même schéma : les moments où le Portugal a vraiment besoin de quelqu’un pour décider viennent des autres.",
    summary_li1:
      "Euro 2016 : Nani, Quaresma, Éder, Patrício et Pepe sont les noms des matches clés.",
    summary_li2:
      "Ligue des Nations 2019 : Bernardo mène, Guedes marque le but du titre.",
    summary_li3:
      "Euro 2020 : Soulier d’or de la phase de groupes, mais en huitième ce sont les Belges qui décident ; Ronaldo reste muet.",
    summary_li4:
      "Coupe du monde 2022 : Ramos, Bruno et Pepe portent le 6-1 contre la Suisse ; le Portugal tombe contre le Maroc sans but de Ronaldo.",
    summary_li5:
      "Euro 2024 : Diogo Costa, Bruno et Bernardo sauvent l’équipe aux tirs au but ; Ronaldo est le protagoniste du drame, pas la solution.",
    summary_p:
      'La phrase honnête, en regardant de l’Euro 2016 à aujourd’hui, n’est pas "Ronaldo a porté la sélection". C’en est une autre : le Portugal a passé une décennie à vendre l’idée qu’il avait besoin de lui pour tout, mais chaque fois qu’il fallait décider d’un tournoi, ce sont presque toujours des coéquipiers — Nani, Quaresma, Éder, Guedes, Bernardo, Bruno, Ramos, Diogo Costa — qui ont fait le gros du travail.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export default function CarriedByNationalTeamSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const tournaments = tournamentsByLang[lang] || tournamentsEn;

  const items = tournaments.map((item) => ({
    key: item.year,
    eyebrow: t("label_national"),
    title: item.year,
    subtitle: item.title,
    content: (
      <>
        <p>{item.content}</p>
        {item.points.length > 0 && (
          <ul>
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {item.quote && <blockquote>{item.quote}</blockquote>}
        {item.conclusion && (
          <p className="text-muted-foreground italic text-sm border-l-2 border-amber-500 pl-4 mt-4">
            {item.conclusion}
          </p>
        )}
      </>
    ),
  }));

  return (
    <SectionWrapper
      id="national-team"
      label={t("label_national")}
      title={c("title")}
    >
      <p>{c("intro")}</p>
      <div className="mt-8">
        <SectionAccordionList items={items} />
      </div>

      <div className="section-divider" />
      <h2>{c("summary_h")}</h2>
      <p>{c("summary_intro")}</p>
      <ul>
        <li>{c("summary_li1")}</li>
        <li>{c("summary_li2")}</li>
        <li>{c("summary_li3")}</li>
        <li>{c("summary_li4")}</li>
        <li>{c("summary_li5")}</li>
      </ul>
      <p>{c("summary_p")}</p>
    </SectionWrapper>
  );
}
