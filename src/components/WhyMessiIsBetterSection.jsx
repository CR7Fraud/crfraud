import React from "react";
import SectionWrapper from "./SectionWrapper";
import StatsTable from "./StatsTable";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "Why Messi is Better",
    h1: "Total production: more in less time",
    p1: "Global career data (as of April 2026, source messivsronaldo.app):",
    li1: "Messi: 905 goals, 407 assists, 1,150 games.",
    li2: "Ronaldo: 970 goals, 261 assists, 1,318 games.",
    p2: "This means:",
    li3: "Messi decides more often per game: a goal every 105 minutes, a goal contribution (goal+assist) every 72 minutes.",
    li4: "Ronaldo needs more time: 111 minutes per goal and 88 minutes per goal+assist.",
    p3: "Even granting that Ronaldo has more total goals, Messi has more impact per minute and per game — and still adds nearly double the assists.",
    h2: '"Real" goal: without penalties and from outside the box',
    p4: "When you look at the detail, Messi's advantage grows.",
    li5: "Goals without penalties: Messi has more open-play goals, even with fewer accumulated minutes.",
    li6: "From outside the box: Messi has 106 goals from outside the box against Ronaldo's 72 — nearly double.",
    li7: "Direct free kicks: Messi has surpassed Ronaldo here too — 71 free-kick goals vs Ronaldo's 64, according to Opta-compiled data.",
    p5: "And in shooting:",
    li8: "Messi needs fewer shots per goal (5.27 vs 6.43) and scores faster.",
    p6: 'In short: the label "best goalscorer in history" fits Messi just as well. He has more of the difficult goals: without penalties, from outside the box, with fewer shots and fewer minutes.',
    h3: "Playmaker: where there is no possible comparison",
    p7: "In chance creation data, the difference is brutal.",
    li9: "Assists (Opta criteria): 407 for Messi, 261 for Ronaldo.",
    li10: "Including all types of assists, the difference is even greater: 487 vs 329.",
    li11: "Messi also has far more key passes and pre-assist passes throughout his career — 2,061 key passes against Ronaldo's 1,303.",
    p8: "In practice:",
    li12: "Ronaldo is primarily a finisher.",
    li13: "Messi is an elite finisher + elite creator.",
    p9: "That is why, when you compare total contributions (goals + assists), Messi has 1,312 contributions against Ronaldo's 1,231, and decides a goal every 72 minutes, against 88 for Ronaldo.",
    h4: "Titles and awards: advantage in serious trophies",
    p10: "In trophies and individual distinctions, the picture converges to the same conclusion.",
    li14: "Ballon d'Or: Messi 8, Ronaldo 5.",
    li15: "Titles (clubs + national team): Messi is, in 2026, the most decorated male player in history, with 48 trophies to Ronaldo's 36.",
    li16: "In finals, Messi played more (51 vs 40), scored more (35 vs 25) and has more assists (17 vs 2).",
    p11: "National team:",
    li17: "Messi: 2022 World Cup, Copa América 2021 and 2024, Finalissima 2022, Olympic gold and U-20 World Cup.",
    li18: "Ronaldo: Euro 2016, Nations League 2019 and 2025.",
    p12: "Messi is also the only player in history to be MVP of two World Cups (Golden Ball 2014 and 2022) and best player of a Copa América — something Ronaldo has never come close to at a World Cup or European Championship.",
    h5: "2025–26: even older, Messi is still more influential",
    p13: 'Recent comparisons help kill the idea that "now it\'s just marketing".',
    li19: "In 2025, at 38, Messi had 46 goals and 28 assists in 54 games for club and country; Ronaldo, at 40, had 41 goals and 7 assists in 37 games.",
    li20: "Messi: a goal contribution every 61 minutes.",
    li21: "Ronaldo: one every 86 minutes.",
    li22: "In 2025–26 (club season), Messi has 25 goals and 18 assists in 27 games; Ronaldo 24 goals and 4 assists, needing more minutes per contribution.",
    p14: "In other words: even at the final stretch, Messi generates more goals and far more play for others.",
    h6: "On and off the pitch: no saints, but different profiles",
    p15: "It is true that:",
    li23: "Messi had a serious tax fraud case in Spain, was convicted with a suspended sentence and paid heavy fines.",
    li24: "He also associated himself with image projects for Qatar/Saudi Arabia, as many other players have done.",
    p16: "But compared to Ronaldo:",
    li25: "there are no records of refusing to enter the pitch or leaving the stadium mid-game;",
    li26: "there are no incidents of knocking phones out of fans' hands, obscene gestures at crowds, or public wars with managers/coaches in spectacle interviews;",
    li27: "there is no trail of constant complaints, public crying fits and media manipulation to control narratives as seen at Manchester United, Juventus, the national team and Saudi Arabia.",
    p17: 'Messi is not perfect, but he does not live in permanent drama mode. The image of "a player who focuses on playing" corresponds far more to reality than in Ronaldo\'s case.',
    conclusion_title: 'Why it makes sense to say "Messi is on another level"',
    cl1: "Production: Messi scores nearly at Ronaldo's level, but with a better average, more difficult goals (without penalties, from outside the box, free kicks) and far more assists.",
    cl2: "Quality of impact: decides more per minute, creates more for teammates, and is better in finals and major tournaments (World Cup, Copa América).",
    cl3: "Serious recognition: more Ballon d'Ors, more total titles, more MVPs in FIFA/CONMEBOL competitions.",
    cl4: "Final phase: even after 35, he still has seasons where he produces more goals+assists than Ronaldo in Saudi Arabia.",
    cl5: "Profile: with all his flaws, he generates far fewer controversies, ego clashes and public hypocrisy than his rival.",
    conclusion_p:
      'Put that way, you move beyond a conversation of "I prefer this one" and into something hard to refute: by today\'s data, Messi is a more complete, more efficient and more decisive player than Ronaldo — and that is written in goals, assists, trophies and behaviour.',
  },
  pt: {
    title: "Porque é que Messi é Melhor",
    h1: "Produção total: mais em menos tempo",
    p1: "Dados globais de carreira (até abril de 2026, fonte messivsronaldo.app):",
    li1: "Messi: 905 golos, 407 assistências, 1 150 jogos.",
    li2: "Ronaldo: 970 golos, 261 assistências, 1 318 jogos.",
    p2: "Isto significa:",
    li3: "Messi decide mais vezes por jogo: um golo a cada 105 minutos, contribuição para golo (golo+assistência) a cada 72 minutos.",
    li4: "Ronaldo precisa de mais tempo: 111 minutos por golo e 88 minutos por golo+assistência.",
    p3: "Mesmo admitindo que Ronaldo tem mais golos totais, Messi tem mais impacto por minuto e por jogo - e ainda acrescenta quase o dobro das assistências.",
    h2: 'Golo "de verdade": sem penáltis e fora da área',
    p4: "Quando se entra no detalhe, a vantagem de Messi cresce.",
    li5: "Golos sem penálti: Messi tem mais golos de bola corrida, mesmo com menos minutos acumulados.",
    li6: "Fora da área: Messi tem 106 golos de fora da área contra 72 de Ronaldo - quase o dobro.",
    li7: "Livres directos: Messi já passou Ronaldo também aqui - 71 golos de livre vs 64 de Ronaldo.",
    p5: "E em remate:",
    li8: "Messi precisa de menos remates por golo (5,27 vs 6,43) e marca mais rápido.",
    p6: 'Resumindo: o rótulo "melhor goleador da história" não fica nada mal em Messi.',
    h3: "Playmaker: onde não há comparação possível",
    p7: "Nos dados de criação, a diferença é brutal.",
    li9: "Assistências (critérios Opta): 407 para Messi, 261 para Ronaldo.",
    li10: "Se somarmos todos os tipos de assistências, a diferença é ainda maior: 487 vs 329.",
    li11: 'Messi tem também muito mais "key passes" ao longo da carreira, com 2 061 passes-chave contra 1 303 de Ronaldo.',
    p8: "Na prática:",
    li12: "Ronaldo é sobretudo finalizador.",
    li13: "Messi é finalizador de elite + criador de elite.",
    p9: "É por isso que, quando comparas contribuição total (golos + assistências), Messi tem 1 312 contribuições contra 1 231 de Ronaldo e decide um golo a cada 72 minutos, contra 88 de Ronaldo.",
    h4: "Títulos e prémios: vantagem nos troféus sérios",
    p10: "Em troféus e distinções individuais, o quadro converge para a mesma conclusão.",
    li14: "Bolas de Ouro: Messi 8, Ronaldo 5.",
    li15: "Títulos (clubes + selecção): Messi é, em 2026, o jogador masculino mais titulado da história, com 48 troféus contra 36 de Ronaldo.",
    li16: "Em finais, Messi jogou mais (51 vs 40), marcou mais (35 vs 25) e tem mais assistências (17 vs 2).",
    p11: "Selecção:",
    li17: "Messi: Mundial 2022, Copas América 2021 e 2024, Finalíssima 2022, ouro olímpico e Mundial sub-20.",
    li18: "Ronaldo: Euro 2016, Nations League 2019 e 2025.",
    p12: "Messi é ainda o único jogador da história a ser MVP de dois Mundiais e melhor jogador de uma Copa América.",
    h5: "2025-26: mesmo velho, Messi continua mais influente",
    p13: 'A comparação recente ajuda a matar a ideia de que "agora é só marketing".',
    li19: "Em 2025, aos 38, Messi fez 46 golos e 28 assistências em 54 jogos; Ronaldo, aos 40, fez 41 golos e 7 assistências em 37 jogos.",
    li20: "Messi: uma contribuição para golo a cada 61 minutos.",
    li21: "Ronaldo: uma a cada 86 minutos.",
    li22: "Em 2025-26, Messi tem 25 golos e 18 assistências em 27 jogos; Ronaldo 24 golos e 4 assistências.",
    p14: "Ou seja: mesmo na reta final, Messi gera mais golos e muito mais jogo para os outros.",
    h6: "Dentro e fora de campo: sem santos, mas perfis diferentes",
    p15: "É verdade que:",
    li23: "Messi teve um caso grave de fraude fiscal em Espanha, foi condenado com pena suspensa e pagou multas elevadas.",
    li24: "Também se associou a projectos de imagem do Qatar/Arábia, tal como muitos outros jogadores.",
    p16: "Mas, comparando com Ronaldo:",
    li25: "não há registos de recusar entrar em campo ou abandonar o estádio a meio de um jogo;",
    li26: "não há episódios de partir telemóveis de adeptos, gestos obscenos para bancadas ou guerras públicas com treinadores em entrevistas-espetáculo;",
    li27: "não há um rasto de queixas constantes, choros públicos e manipulação mediática para controlar narrativas.",
    p17: "Messi não é perfeito, mas não vive em modo drama permanente.",
    conclusion_title:
      'Porque é que faz sentido dizer que "Messi está a anos-luz"',
    cl1: "Producao: Messi marca quase ao nivel de Ronaldo, mas com melhor media, mais golos dificeis e muito mais assistencias.",
    cl2: "Qualidade do impacto: decide mais por minuto, cria mais para os colegas, e melhor em finais e em torneios grandes.",
    cl3: "Reconhecimento serio: tem mais Bolas de Ouro, mais titulos totais, mais MVPs em competicoes da FIFA/CONMEBOL.",
    cl4: "Fase final: mesmo depois dos 35, continua a ter epocas em que produz mais golos+assistencias do que Ronaldo na Arabia.",
    cl5: "Perfil: com todos os defeitos, arrasta muito menos polemicas, ego e hipocrisia publica do que o rival.",
    conclusion_p:
      'Dito assim, deixas de estar numa conversa de "gosto mais deste" e passas a uma coisa dificil de rebater: pelos dados de hoje, Messi e um jogador mais completo, mais eficiente e mais decisivo do que Ronaldo.',
  },
  es: {
    title: "Por qué Messi es mejor",
    h1: "Producción total: más en menos tiempo",
    p1: "Datos globales de carrera (a abril de 2026, fuente messivsronaldo.app):",
    li1: "Messi: 905 goles, 407 asistencias, 1.150 partidos.",
    li2: "Ronaldo: 970 goles, 261 asistencias, 1.318 partidos.",
    p2: "Esto significa:",
    li3: "Messi decide más veces por partido: un gol cada 105 minutos, una contribución de gol (gol+asistencia) cada 72 minutos.",
    li4: "Ronaldo necesita más tiempo: 111 minutos por gol y 88 minutos por gol+asistencia.",
    p3: "Incluso admitiendo que Ronaldo tiene más goles totales, Messi tiene más impacto por minuto y por partido — y además suma casi el doble de asistencias.",
    h2: 'Gol "real": sin penaltis y desde fuera del área',
    p4: "Cuando miras el detalle, la ventaja de Messi crece.",
    li5: "Goles sin penalti: Messi tiene más goles de juego abierto, incluso con menos minutos acumulados.",
    li6: "Desde fuera del área: Messi tiene 106 goles desde fuera del área contra 72 de Ronaldo — casi el doble.",
    li7: "Faltas directas: Messi también ha superado a Ronaldo aquí — 71 goles de falta frente a 64, según datos recopilados por Opta.",
    p5: "Y en el remate:",
    li8: "Messi necesita menos disparos por gol (5,27 vs 6,43) y marca más rápido.",
    p6: 'En resumen: la etiqueta "máximo goleador de la historia" le queda igual de bien a Messi. Tiene más de los goles difíciles: sin penaltis, desde fuera del área, con menos disparos y menos minutos.',
    h3: "Creador de juego: donde no hay comparación posible",
    p7: "En datos de creación de ocasiones, la diferencia es brutal.",
    li9: "Asistencias (criterio Opta): 407 para Messi, 261 para Ronaldo.",
    li10: "Incluyendo todo tipo de asistencias, la diferencia es todavía mayor: 487 vs 329.",
    li11: "Messi también tiene muchísimos más pases clave a lo largo de su carrera — 2.061 frente a 1.303 de Ronaldo.",
    p8: "En la práctica:",
    li12: "Ronaldo es sobre todo un finalizador.",
    li13: "Messi es un finalizador de élite + un creador de élite.",
    p9: "Por eso, cuando comparas contribuciones totales (goles + asistencias), Messi tiene 1.312 contribuciones frente a 1.231 de Ronaldo, y decide un gol cada 72 minutos, frente a 88 para Ronaldo.",
    h4: "Títulos y premios: ventaja en trofeos serios",
    p10: "En trofeos y distinciones individuales, la imagen converge a la misma conclusión.",
    li14: "Balones de Oro: Messi 8, Ronaldo 5.",
    li15: "Títulos (clubes + selección): Messi es, en 2026, el jugador masculino más laureado de la historia, con 48 trofeos frente a 36 de Ronaldo.",
    li16: "En finales, Messi jugó más (51 vs 40), marcó más (35 vs 25) y tiene más asistencias (17 vs 2).",
    p11: "Selección:",
    li17: "Messi: Mundial 2022, Copas América 2021 y 2024, Finalissima 2022, oro olímpico y Mundial sub-20.",
    li18: "Ronaldo: Euro 2016, Nations League 2019 y 2025.",
    p12: "Messi es también el único jugador de la historia que ha sido MVP de dos Mundiales (Balón de Oro 2014 y 2022) y mejor jugador de una Copa América — algo a lo que Ronaldo nunca se acercó en un Mundial o una Eurocopa.",
    h5: "2025-26: incluso más viejo, Messi sigue siendo más influyente",
    p13: 'Las comparaciones recientes ayudan a tumbar la idea de que "ahora solo es marketing".',
    li19: "En 2025, con 38 años, Messi hizo 46 goles y 28 asistencias en 54 partidos para club y selección; Ronaldo, con 40, hizo 41 goles y 7 asistencias en 37 partidos.",
    li20: "Messi: una contribución de gol cada 61 minutos.",
    li21: "Ronaldo: una cada 86 minutos.",
    li22: "En 2025-26 (temporada de club), Messi suma 25 goles y 18 asistencias en 27 partidos; Ronaldo, 24 goles y 4 asistencias, necesitando más minutos por contribución.",
    p14: "En otras palabras: incluso en el tramo final, Messi genera más goles y muchísimo más juego para los demás.",
    h6: "Dentro y fuera del campo: sin santos, pero perfiles distintos",
    p15: "Es cierto que:",
    li23: "Messi tuvo un caso serio de fraude fiscal en España, fue condenado con pena suspendida y pagó multas elevadas.",
    li24: "También se asoció con proyectos de imagen de Qatar/Arabia, como tantos otros jugadores.",
    p16: "Pero comparado con Ronaldo:",
    li25: "no hay registros de negarse a entrar al campo o abandonar el estadio a mitad de partido;",
    li26: "no hay incidentes de golpear teléfonos de aficionados, gestos obscenos a la grada o guerras públicas con entrenadores en entrevistas-espectáculo;",
    li27: "no hay una estela de quejas constantes, crisis de llanto público y manipulación mediática para controlar narrativas como se vio en Manchester United, Juventus, la selección y Arabia.",
    p17: 'Messi no es perfecto, pero no vive en modo drama permanente. La imagen de "un jugador que se centra en jugar" se corresponde mucho más con la realidad que en el caso de Ronaldo.',
    conclusion_title:
      'Por qué tiene sentido decir que "Messi está en otro nivel"',
    cl1: "Producción: Messi marca casi al nivel de Ronaldo, pero con mejor promedio, más goles difíciles (sin penaltis, desde fuera del área, faltas) y muchas más asistencias.",
    cl2: "Calidad del impacto: decide más por minuto, crea más para sus compañeros y es mejor en finales y grandes torneos (Mundial, Copa América).",
    cl3: "Reconocimiento serio: más Balones de Oro, más títulos totales, más MVPs en competiciones FIFA/CONMEBOL.",
    cl4: "Tramo final: incluso después de los 35, sigue teniendo temporadas en las que produce más goles+asistencias que Ronaldo en Arabia.",
    cl5: "Perfil: con todos sus defectos, genera muchísimas menos polémicas, choques de ego e hipocresía pública que su rival.",
    conclusion_p:
      'Dicho así, dejas de estar en una conversación de "prefiero a este" y pasas a algo difícil de refutar: por los datos de hoy, Messi es un jugador más completo, más eficiente y más decisivo que Ronaldo.',
  },
  fr: {
    title: "Pourquoi Messi est meilleur",
    h1: "Production totale : plus en moins de temps",
    p1: "Données globales de carrière (à avril 2026, source messivsronaldo.app) :",
    li1: "Messi : 905 buts, 407 passes décisives, 1 150 matches.",
    li2: "Ronaldo : 970 buts, 261 passes décisives, 1 318 matches.",
    p2: "Cela signifie :",
    li3: "Messi décide plus souvent par match : un but toutes les 105 minutes, une contribution au but (but+assist) toutes les 72 minutes.",
    li4: "Ronaldo a besoin de plus de temps : 111 minutes par but et 88 minutes par but+assist.",
    p3: "Même en admettant que Ronaldo ait plus de buts au total, Messi a plus d’impact par minute et par match — tout en ajoutant presque deux fois plus de passes décisives.",
    h2: 'But "réel" : sans penalties et de l’extérieur de la surface',
    p4: "Quand on regarde le détail, l’avantage de Messi grandit.",
    li5: "Buts sans penalty : Messi a plus de buts dans le jeu, malgré moins de minutes cumulées.",
    li6: "De l’extérieur de la surface : Messi en a 106 contre 72 pour Ronaldo — presque le double.",
    li7: "Coups francs directs : Messi a aussi dépassé Ronaldo ici — 71 buts sur coup franc contre 64, selon des données compilées par Opta.",
    p5: "Et au tir :",
    li8: "Messi a besoin de moins de tirs par but (5,27 contre 6,43) et marque plus vite.",
    p6: 'En bref : l’étiquette de "meilleur buteur de l’histoire" convient tout aussi bien à Messi. Il a plus de buts difficiles : sans penalties, de l’extérieur de la surface, avec moins de tirs et moins de minutes.',
    h3: "Passeur-créateur : là où la comparaison est impossible",
    p7: "Dans les données de création d’occasions, l’écart est brutal.",
    li9: "Passes décisives (critère Opta) : 407 pour Messi, 261 pour Ronaldo.",
    li10: "En incluant tous les types de passes décisives, l’écart est encore plus grand : 487 contre 329.",
    li11: "Messi a aussi beaucoup plus de passes clés sur l’ensemble de sa carrière — 2 061 contre 1 303 pour Ronaldo.",
    p8: "En pratique :",
    li12: "Ronaldo est surtout un finisseur.",
    li13: "Messi est un finisseur d’élite + un créateur d’élite.",
    p9: "C’est pour cela que, lorsqu’on compare les contributions totales (buts + passes), Messi en a 1 312 contre 1 231 pour Ronaldo, et décide un but toutes les 72 minutes, contre 88 pour Ronaldo.",
    h4: "Titres et récompenses : avantage dans les trophées sérieux",
    p10: "En trophées et distinctions individuelles, le tableau converge vers la même conclusion.",
    li14: "Ballons d’Or : Messi 8, Ronaldo 5.",
    li15: "Titres (clubs + sélection) : Messi est, en 2026, le joueur masculin le plus titré de l’histoire, avec 48 trophées contre 36 pour Ronaldo.",
    li16: "En finales, Messi a joué plus (51 contre 40), marqué plus (35 contre 25) et a plus de passes décisives (17 contre 2).",
    p11: "Sélection :",
    li17: "Messi : Coupe du monde 2022, Copa América 2021 et 2024, Finalissima 2022, or olympique et Coupe du monde U-20.",
    li18: "Ronaldo : Euro 2016, Nations League 2019 et 2025.",
    p12: "Messi est aussi le seul joueur de l’histoire à avoir été MVP de deux Coupes du monde (Ballon d’or 2014 et 2022) et meilleur joueur d’une Copa América — quelque chose dont Ronaldo ne s’est jamais approché en Coupe du monde ou à l’Euro.",
    h5: "2025-26 : même plus vieux, Messi reste plus influent",
    p13: 'Les comparaisons récentes aident à tuer l’idée que "maintenant, ce n’est plus que du marketing".',
    li19: "En 2025, à 38 ans, Messi a inscrit 46 buts et 28 passes décisives en 54 matches pour son club et sa sélection ; Ronaldo, à 40 ans, a inscrit 41 buts et 7 passes décisives en 37 matches.",
    li20: "Messi : une contribution au but toutes les 61 minutes.",
    li21: "Ronaldo : une toutes les 86 minutes.",
    li22: "En 2025-26 (saison de club), Messi affiche 25 buts et 18 passes décisives en 27 matches ; Ronaldo 24 buts et 4 passes décisives, avec plus de minutes nécessaires par contribution.",
    p14: "Autrement dit : même dans la dernière ligne droite, Messi produit plus de buts et beaucoup plus de jeu pour les autres.",
    h6: "Sur et hors du terrain : pas des saints, mais des profils différents",
    p15: "Il est vrai que :",
    li23: "Messi a eu une affaire sérieuse de fraude fiscale en Espagne, a été condamné avec sursis et a payé de lourdes amendes.",
    li24: "Il s’est aussi associé à des projets d’image du Qatar et de l’Arabie, comme beaucoup d’autres joueurs.",
    p16: "Mais comparé à Ronaldo :",
    li25: "il n’existe aucun cas de refus d’entrer sur le terrain ou de quitter le stade en plein match ;",
    li26: "aucun incident de téléphone arraché à un supporter, de geste obscène vers les tribunes ou de guerre publique avec les entraîneurs dans des interviews-spectacle ;",
    li27: "aucune trace de plaintes constantes, de crises de larmes publiques et de manipulation médiatique pour contrôler les récits comme à Manchester United, à la Juventus, en sélection et en Arabie.",
    p17: 'Messi n’est pas parfait, mais il ne vit pas en mode drame permanent. L’image d’"un joueur qui se concentre sur le jeu" correspond beaucoup plus à la réalité que dans le cas de Ronaldo.',
    conclusion_title:
      'Pourquoi il est logique de dire que "Messi est dans une autre catégorie"',
    cl1: "Production : Messi marque presque au niveau de Ronaldo, mais avec une meilleure moyenne, plus de buts difficiles (sans penalties, de l’extérieur, coups francs) et beaucoup plus de passes décisives.",
    cl2: "Qualité de l’impact : il décide plus par minute, crée davantage pour ses coéquipiers et est meilleur dans les finales et les grands tournois (Coupe du monde, Copa América).",
    cl3: "Reconnaissance sérieuse : plus de Ballons d’Or, plus de titres au total, plus de MVP dans les compétitions FIFA/CONMEBOL.",
    cl4: "Phase finale : même après 35 ans, il a encore des saisons où il produit plus de buts+passes que Ronaldo en Arabie.",
    cl5: "Profil : avec tous ses défauts, il génère beaucoup moins de polémiques, de chocs d’ego et d’hypocrisie publique que son rival.",
    conclusion_p:
      'Formulé ainsi, on ne parle plus d’un simple "je préfère celui-ci" mais de quelque chose de difficile à réfuter : selon les données actuelles, Messi est un joueur plus complet, plus efficace et plus décisif que Ronaldo.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export default function WhyMessiIsBetterSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="why-messi" label={t("label_messi")} title={c("title")}>
      <h2>{c("h1")}</h2>
      <p>{c("p1")}</p>
      <ul>
        <li>{c("li1")}</li>
        <li>{c("li2")}</li>
      </ul>
      <p>{c("p2")}</p>
      <ul>
        <li>{c("li3")}</li>
        <li>{c("li4")}</li>
      </ul>
      <p>{c("p3")}</p>

      <StatsTable />

      <h2>{c("h2")}</h2>
      <p>{c("p4")}</p>
      <ul>
        <li>{c("li5")}</li>
        <li>{c("li6")}</li>
        <li>{c("li7")}</li>
      </ul>
      <p>{c("p5")}</p>
      <ul>
        <li>{c("li8")}</li>
      </ul>
      <p>{c("p6")}</p>

      <h2>{c("h3")}</h2>
      <p>{c("p7")}</p>
      <ul>
        <li>{c("li9")}</li>
        <li>{c("li10")}</li>
        <li>{c("li11")}</li>
      </ul>
      <p>{c("p8")}</p>
      <ul>
        <li>{c("li12")}</li>
        <li>{c("li13")}</li>
      </ul>
      <p>{c("p9")}</p>

      <h2>{c("h4")}</h2>
      <p>{c("p10")}</p>
      <ul>
        <li>{c("li14")}</li>
        <li>{c("li15")}</li>
        <li>{c("li16")}</li>
      </ul>
      <p>{c("p11")}</p>
      <ul>
        <li>{c("li17")}</li>
        <li>{c("li18")}</li>
      </ul>
      <p>{c("p12")}</p>

      <h2>{c("h5")}</h2>
      <p>{c("p13")}</p>
      <ul>
        <li>{c("li19")}</li>
        <li>{c("li20")}</li>
        <li>{c("li21")}</li>
        <li>{c("li22")}</li>
      </ul>
      <p>{c("p14")}</p>

      <h2>{c("h6")}</h2>
      <p>{c("p15")}</p>
      <ul>
        <li>{c("li23")}</li>
        <li>{c("li24")}</li>
      </ul>
      <p>{c("p16")}</p>
      <ul>
        <li>{c("li25")}</li>
        <li>{c("li26")}</li>
        <li>{c("li27")}</li>
      </ul>
      <p>{c("p17")}</p>

      <div className="section-divider" />

      <div className="bg-yellow-600 text-[hsl(var(--card))] mt-8 p-8 rounded-2xl border border-zinc-800">
        <h3 className="text-[hsl(var(--secondary))] mb-6 font-playfair text-2xl font-bold">
          {c("conclusion_title")}
        </h3>
        <ul className="space-y-4">
          {["cl1", "cl2", "cl3", "cl4", "cl5"].map((key) => (
            <li key={key} className="flex gap-3">
              <span className="text-amber-400 font-bold shrink-0 mt-0.5">
                →
              </span>
              <span className="text-white">{c(key)}</span>
            </li>
          ))}
        </ul>
        <p className="text-[hsl(var(--card))] mt-6 text-sm leading-relaxed">
          {c("conclusion_p")}
        </p>
      </div>
    </SectionWrapper>
  );
}
