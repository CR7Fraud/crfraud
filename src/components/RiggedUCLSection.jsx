import React from "react";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "The Champions League That Wasn't Clean",
    context_h: "The Context",
    context_p1:
      'Between 2016 and 2018, Real Madrid won three consecutive Champions Leagues — a historic feat. Ronaldo was the media protagonist of that sequence, accumulating goals, records and "Mr. Champions" narratives. The problem is what lay underneath: a series of serious refereeing decisions in decisive games that systematically benefited Real Madrid in moments when they could have been eliminated.',
    context_p2:
      'Those "survivals" became trophies. Those trophies became Ballon d\'Ors.',
    case1_year: "Final 2016",
    case1_title: "The Opening Goal That Was Illegal",
    case1_p1:
      "In the 2016 Champions League final, Sergio Ramos opens the scoring early. Atlético de Madrid equalise. Real win in extra time 4-1.",
    case1_p2:
      "What few know: in 2020, the final referee, Mark Clattenburg, publicly admitted that Ramos's goal was offside. His words:",
    case1_q: '"The goal was slightly offside, and we realised at half-time."',
    case1_p3:
      "The first major European title of the Real/Ronaldo era is literally built on an incident the referee himself acknowledges as irregular. Ronaldo scores from a penalty already in extra time, with the game decided — and enters the record books as European champion. Source:",
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
      "Result: Real advance to the semi-finals with a Ronaldo hat-trick that includes at least one illegal goal, in a 11 v 10 game that should not have existed. That passage is a central piece of the back-to-back Champions League narrative — and of the arguments used to justify the 2017 Ballon d'Or.",
    case3_year: "2018 vs PSG",
    case3_title:
      "The Non-Existent Penalty and the Goal That Should Have Been Retaken",
    case3_p1:
      "In the 2018 round of 16, PSG arrive in Madrid winning the first leg.",
    case3_li1:
      'The referee awards a penalty against Kroos in an incident that Iturralde González, a former Spanish referee, described as non-existent: "It\'s not a penalty. There is contact, but Kroos feels the arm and throws himself."',
    case3_li2:
      'Ronaldo converts. He later scores another penalty with the ball moving at the moment of the kick — a technical "double touch" that, according to the laws of the game, required a retake. Former English referee Graham Poll confirmed this in the British press.',
    case3_p2:
      "Real overturn 0-1 to 2-1. Two Ronaldo goals. At least one should not have counted. The other was born from a penalty that divided even the referees themselves.",
    case4_year: "2018 vs Juventus",
    case4_title: 'The 93rd-Minute Penalty and "The Robbery of the Century"',
    case4_p1:
      "This is the most emblematic case. Juventus do the impossible: lose 0-3 in Turin, go to Madrid and win 3-0 — tie level at 3-3.",
    case4_p2:
      "In the 93rd minute, referee Michael Oliver awards a penalty in a highly debatable incident of Benatia on Lucas Vázquez, and sends off Buffon for protesting. Ronaldo scores at 97 minutes.",
    case4_p3: "The reactions were historic:",
    case4_li1:
      '"This referee has a rubbish bin instead of a heart. You don\'t give a penalty like that in the 93rd minute."',
    case4_li2:
      "Chiellini makes the money gesture pointing to the Real Madrid badge — without needing to say a word.",
    case4_li3:
      'The Italian and Spanish press (including Sport de Barcelona) speak of "robbery of the century" and "worldwide outrage".',
    case4_p4:
      'Without that penalty, the tie goes to extra time with Juventus in full flow and the Bernabéu in shock. Real could very well have been eliminated — and with them, the treble of European titles that cemented Ronaldo\'s legend as "Mr. Champions" would have disappeared.',
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
      "In a scenario with VAR and consistent refereeing, Real could credibly and justifiably have won one or two fewer Champions Leagues in this cycle. Ronaldo's knockout-round goals — the basis of his European records — include at least three or four incidents that should not have counted.",
    conclusion_p3:
      'Those goals and those trophies were subsequently used, directly, as the central argument in the 2016 and 2017 Ballon d\'Ors. UEFA, France Football and the mainstream press justified both awards with "won the Champions League, scored in big games, was decisive in the knockouts". The Athletic, through Michael Cox, even proposed alternative winners precisely because the weight given to the Champions League distorted the assessment of real individual performance.',
    conclusion_p4:
      "There is no need to prove organised corruption to reach the central conclusion: a significant part of Ronaldo's European CV was built on games decided by serious refereeing errors in his club's favour. When that CV is used to argue for absolute superiority over Messi or anyone else, the argument rests on unstable foundations.",
  },
  pt: {
    title: "A Champions League que Não Foi Limpa",
    context_h: "O Contexto",
    context_p1:
      'Entre 2016 e 2018, o Real Madrid ganhou três Champions consecutivas - um feito histórico. Ronaldo foi o protagonista mediático dessa sequência, acumulando golos, recordes e narrativas de "Mr. Champions". O problema é o que ficou por baixo: uma série de decisões arbitrais graves, em jogos decisivos, que beneficiaram sistematicamente o Real Madrid em momentos em que podia ter sido eliminado.',
    context_p2:
      'Esses "sobrevivos" converteram-se em troféus. Os troféus converteram-se em Bolas de Ouro.',
    case1_year: "Final de 2016",
    case1_title: "O Golo Inaugural que Era Ilegal",
    case1_p1:
      "Na final da Champions de 2016, Sergio Ramos abre o marcador cedo. O Atlético de Madrid equilibra. O Real vence no prolongamento por 4-1.",
    case1_p2:
      "O que poucos sabem: em 2020, o árbitro da final, Mark Clattenburg, admitiu publicamente que o golo de Ramos era em fora de jogo. As suas palavras:",
    case1_q:
      '"O golo foi ligeiramente em offside, e apercebemo-nos disso ao intervalo."',
    case1_p3:
      "O primeiro grande título europeu desta era Real/Ronaldo está literalmente construído sobre um lance que o próprio árbitro reconhece como irregular. Fonte:",
    case2_year: "2017 vs Bayern",
    case2_title: "Vermelho Injusto, Dois Golos em Fora de Jogo",
    case2_p1:
      "Nos quartos de final de 2017, o Bayern chega a Espanha com a eliminatória empatada e com uma equipa superior em teoria ao Real nessa época.",
    case2_li1:
      "Com a eliminatória equilibrada, o árbitro expulsa Arturo Vidal com um segundo amarelo num lance em que replays mostram claramente que joga a bola.",
    case2_li2:
      "Ronaldo marca dois golos com posições de fora de jogo visíveis, amplamente documentadas na imprensa europeia.",
    case2_q:
      '"Quando o Madrid ficou com medo, o árbitro começou o seu show. Este roubo não pode acontecer na Champions."',
    case2_p2:
      "Resultado: Real passa às meias-finais com um hat-trick de Ronaldo que inclui pelo menos um golo ilegal, num jogo de 11 contra 10 que não devia existir.",
    case3_year: "2018 vs PSG",
    case3_title: "O Penálti que Não Era e o Golo que Devia Ser Repetido",
    case3_p1:
      "Nos oitavos de 2018, o PSG chega a Madrid a vencer a primeira mão.",
    case3_li1:
      "O árbitro marca penálti sobre Kroos num lance que Iturralde González, ex-árbitro espanhol, classificou como inexistente.",
    case3_li2:
      "Ronaldo converte. Mais tarde, marca outro penálti com a bola em movimento no momento do remate.",
    case3_p2:
      "O Real vira de 0-1 para 2-1. Dois golos de Ronaldo. Pelo menos um não devia ter contado.",
    case4_year: "2018 vs Juventus",
    case4_title: 'O Penálti do Minuto 93 e "O Roubo do Século"',
    case4_p1:
      "Este é o caso mais emblemático. A Juventus faz o impossível: perde 0-3 em Turim, vai a Madrid e faz 3-0 - eliminatória empatada a 3-3.",
    case4_p2:
      "No minuto 93, o árbitro Michael Oliver marca penálti num contacto altamente discutível de Benatia sobre Lucas Vázquez, e expulsa Buffon pelas protestas. Ronaldo marca aos 97 minutos.",
    case4_p3: "As reações foram históricas:",
    case4_li1:
      '"Este árbitro tem um saco de lixo em vez de coração. Não se marca um penálti destes no minuto 93."',
    case4_li2:
      "Chiellini faz o gesto do dinheiro apontando para o emblema do Real Madrid.",
    case4_li3:
      'A imprensa italiana e espanhola fala em "roubo do século" e "indignação mundial".',
    case4_p4:
      "Sem esse penálti, a eliminatória vai a prolongamento com a Juventus embalada e o Bernabéu em choque.",
    conclusion_h: "O Que Isto Significa Para o Palmarés de Ronaldo",
    conclusion_p1: "Juntando os quatro casos:",
    conclusion_li1:
      "2016: golo inaugural da final em fora de jogo, admitido pelo árbitro.",
    conclusion_li2:
      "2017: Bayern eliminado com vermelho injusto e golos em offside de Ronaldo.",
    conclusion_li3:
      "2018 (PSG): penálti duvidoso e golo tecnicamente ilegal pelas leis do jogo.",
    conclusion_li4:
      "2018 (Juventus): penálti no minuto 93 que chocou meio mundo.",
    conclusion_p2:
      "Num cenário com VAR e arbitragem consistente, o Real podia credível e justificadamente ter menos uma ou duas Champions neste ciclo.",
    conclusion_p3:
      "Esses golos e esses troféus foram depois usados, diretamente, como argumento central nas Bolas de Ouro de 2016 e 2017.",
    conclusion_p4:
      "Não é necessário provar corrupção organizada para chegar à conclusão central: uma parte significativa do currículo europeu de Ronaldo foi construída sobre jogos decididos por erros graves de arbitragem a favor do seu clube.",
  },
  es: {
    title: "La Champions League que no fue limpia",
    context_h: "El contexto",
    context_p1:
      'Entre 2016 y 2018, el Real Madrid ganó tres Champions seguidas — una hazaña histórica. Ronaldo fue el protagonista mediático de esa secuencia, acumulando goles, récords y narrativas de "Mr. Champions". El problema es lo que había debajo: una serie de decisiones arbitrales graves en partidos decisivos que favorecieron sistemáticamente al Real Madrid en momentos en que podía haber sido eliminado.',
    context_p2:
      'Esas "supervivencias" se convirtieron en trofeos. Esos trofeos se convirtieron en Balones de Oro.',
    case1_year: "Final 2016",
    case1_title: "El gol inicial que era ilegal",
    case1_p1:
      "En la final de la Champions de 2016, Sergio Ramos abre el marcador temprano. Atlético de Madrid empata. El Real gana en la prórroga por 4-1.",
    case1_p2:
      "Lo que pocos saben: en 2020, el árbitro de la final, Mark Clattenburg, admitió públicamente que el gol de Ramos estaba en fuera de juego. Sus palabras:",
    case1_q:
      '"El gol estaba ligeramente en fuera de juego, y nos dimos cuenta al descanso."',
    case1_p3:
      "El primer gran título europeo de la era Real/Ronaldo está construido literalmente sobre una jugada que el propio árbitro reconoce como irregular. Ronaldo marca de penalti ya en la prórroga, con el partido decidido — y entra en los libros como campeón de Europa. Fuente:",
    case2_year: "2017 vs Bayern",
    case2_title: "Roja injusta, dos goles en fuera de juego",
    case2_p1:
      "En los cuartos de 2017, el Bayern llega a España con la eliminatoria igualada y con una plantilla que, en teoría, era superior al Real en esa temporada.",
    case2_li1:
      "Con la eliminatoria equilibrada, el árbitro expulsa a Arturo Vidal con una segunda amarilla en una acción en la que las repeticiones muestran claramente que toca balón. El Bayern se queda con diez.",
    case2_li2:
      "Ronaldo marca dos goles en posiciones claramente adelantadas, ampliamente documentadas en la prensa europea.",
    case2_q:
      '"Cuando Madrid se asustó, el árbitro empezó su show. Este robo no puede pasar en la Champions League."',
    case2_p2:
      "Resultado: el Real avanza a semifinales con un hat-trick de Ronaldo que incluye al menos un gol ilegal, en un partido de 11 contra 10 que no debería haber existido. Ese pase es una pieza central de la narrativa de las dos Champions seguidas — y de los argumentos usados para justificar el Balón de Oro de 2017.",
    case3_year: "2018 vs PSG",
    case3_title: "El penalti inexistente y el gol que debió repetirse",
    case3_p1: "En octavos de 2018, el PSG llega a Madrid ganando la ida.",
    case3_li1:
      'El árbitro señala un penalti sobre Kroos en una acción que Iturralde González, exárbitro español, describió como inexistente: "No es penalti. Hay contacto, pero Kroos siente el brazo y se tira."',
    case3_li2:
      "Ronaldo lo convierte. Más tarde marca otro penalti con el balón moviéndose en el momento del golpeo — un doble toque técnico que, según las reglas, exigía repetir. El exárbitro inglés Graham Poll lo confirmó en la prensa británica.",
    case3_p2:
      "El Real remonta de 0-1 a 2-1. Dos goles de Ronaldo. Al menos uno no debió contar. El otro nació de un penalti que dividió incluso a los árbitros.",
    case4_year: "2018 vs Juventus",
    case4_title: 'El penalti del minuto 93 y "El robo del siglo"',
    case4_p1:
      "Este es el caso más emblemático. La Juventus hace lo imposible: pierde 0-3 en Turín, va a Madrid y gana 3-0 — eliminatoria igualada a 3-3.",
    case4_p2:
      "En el minuto 93, el árbitro Michael Oliver señala un penalti en una acción muy discutible de Benatia sobre Lucas Vázquez, y expulsa a Buffon por protestar. Ronaldo marca en el 97.",
    case4_p3: "Las reacciones fueron históricas:",
    case4_li1:
      '"Este árbitro tiene una papelera en lugar de corazón. No se pita un penalti así en el minuto 93."',
    case4_li2:
      "Chiellini hace el gesto del dinero señalando el escudo del Real Madrid — sin necesidad de decir una palabra.",
    case4_li3:
      'La prensa italiana y española (incluido Sport de Barcelona) habla de "robo del siglo" e "indignación mundial".',
    case4_p4:
      'Sin ese penalti, la eliminatoria se va a la prórroga con la Juventus lanzada y el Bernabéu en shock. El Real muy bien podría haber quedado eliminado — y con ello habría desaparecido el triplete europeo que cimentó la leyenda de Ronaldo como "Mr. Champions".',
    conclusion_h: "Lo que esto significa para el palmarés de Ronaldo",
    conclusion_p1: "Juntando los cuatro casos:",
    conclusion_li1:
      "2016: gol inicial de la final en fuera de juego, admitido por el árbitro.",
    conclusion_li2:
      "2017: Bayern eliminado con una roja injusta y goles en offside de Ronaldo.",
    conclusion_li3:
      "2018 (PSG): penalti dudoso y un gol técnicamente ilegal según las reglas del juego.",
    conclusion_li4:
      "2018 (Juventus): penalti en el minuto 93 que conmocionó a medio mundo.",
    conclusion_p2:
      "En un escenario con VAR y arbitraje consistente, el Real podría haber ganado una o dos Champions menos en este ciclo. Los goles de Ronaldo en la fase eliminatoria — base de sus récords europeos — incluyen al menos tres o cuatro acciones que no debieron contar.",
    conclusion_p3:
      'Esos goles y esos trofeos se utilizaron luego, directamente, como argumento central en los Balones de Oro de 2016 y 2017. UEFA, France Football y la prensa dominante justificaron ambos premios con "ganó la Champions, marcó en los partidos grandes, fue decisivo en el mata-mata". The Athletic, a través de Michael Cox, incluso propuso ganadores alternativos precisamente porque el peso dado a la Champions distorsionaba la evaluación del rendimiento individual real.',
    conclusion_p4:
      "No hace falta probar corrupción organizada para llegar a la conclusión central: una parte importante del currículum europeo de Ronaldo se construyó sobre partidos decididos por errores arbitrales graves a favor de su club. Cuando ese currículum se usa para defender una superioridad absoluta sobre Messi o sobre cualquiera, el argumento se apoya en bases inestables.",
  },
  fr: {
    title: "La Ligue des Champions qui n’était pas propre",
    context_h: "Le contexte",
    context_p1:
      'Entre 2016 et 2018, le Real Madrid a remporté trois Ligues des Champions consécutives — un exploit historique. Ronaldo a été le protagoniste médiatique de cette séquence, accumulant buts, records et récits de "Mr. Champions". Le problème, c’est ce qu’il y avait en dessous : une série de décisions arbitrales graves dans des matches décisifs qui ont systématiquement favorisé le Real Madrid à des moments où il aurait pu être éliminé.',
    context_p2:
      'Ces "survivals" sont devenus des trophées. Ces trophées sont devenus des Ballons d’Or.',
    case1_year: "Finale 2016",
    case1_title: "Le but d’ouverture qui était illégal",
    case1_p1:
      "Lors de la finale de la Ligue des Champions 2016, Sergio Ramos ouvre rapidement le score. L’Atlético de Madrid égalise. Le Real gagne en prolongation 4-1.",
    case1_p2:
      "Ce que peu de gens savent : en 2020, l’arbitre de la finale, Mark Clattenburg, a admis publiquement que le but de Ramos était hors-jeu. Ses mots :",
    case1_q:
      '"Le but était légèrement hors-jeu, et nous l’avons réalisé à la mi-temps."',
    case1_p3:
      "Le premier grand titre européen de l’ère Real/Ronaldo est littéralement bâti sur une action que l’arbitre lui-même reconnaît comme irrégulière. Ronaldo marque sur penalty en prolongation, alors que le match est déjà décidé — et entre dans les livres comme champion d’Europe. Source :",
    case2_year: "2017 contre le Bayern",
    case2_title: "Carton rouge injuste, deux buts hors-jeu",
    case2_p1:
      "En quarts de finale 2017, le Bayern arrive en Espagne avec une double confrontation à égalité et un effectif qui, en théorie, était supérieur au Real cette saison-là.",
    case2_li1:
      "Avec la confrontation équilibrée, l’arbitre expulse Arturo Vidal avec un deuxième jaune dans une action où les ralentis montrent clairement qu’il touche le ballon. Le Bayern se retrouve à dix.",
    case2_li2:
      "Ronaldo marque deux buts en position clairement hors-jeu, largement documentés dans la presse européenne.",
    case2_q:
      '"Quand Madrid a eu peur, l’arbitre a commencé son spectacle. Ce vol ne peut pas se produire en Ligue des Champions."',
    case2_p2:
      "Résultat : le Real atteint les demi-finales avec un triplé de Ronaldo comprenant au moins un but illégal, dans un match à 11 contre 10 qui n’aurait pas dû exister. Ce passage est un élément central du récit des deux Ligues des Champions consécutives — et des arguments utilisés pour justifier le Ballon d’Or 2017.",
    case3_year: "2018 contre le PSG",
    case3_title: "Le penalty inexistant et le but qui aurait dû être retiré",
    case3_p1:
      "En huitièmes de finale 2018, le PSG arrive à Madrid avec l’avantage du match aller.",
    case3_li1:
      'L’arbitre accorde un penalty contre Kroos dans une action qu’Iturralde González, ancien arbitre espagnol, a décrite comme inexistante : "Ce n’est pas un penalty. Il y a contact, mais Kroos sent le bras et se jette."',
    case3_li2:
      "Ronaldo le transforme. Il marque ensuite un autre penalty avec le ballon en mouvement au moment de la frappe — un double contact technique qui, selon les lois du jeu, devait entraîner une reprise. L’ancien arbitre anglais Graham Poll l’a confirmé dans la presse britannique.",
    case3_p2:
      "Le Real renverse le score de 0-1 à 2-1. Deux buts de Ronaldo. Au moins un ne devait pas compter. L’autre est né d’un penalty qui a même divisé les arbitres.",
    case4_year: "2018 contre la Juventus",
    case4_title: 'Le penalty de la 93e minute et "Le vol du siècle"',
    case4_p1:
      "C’est le cas le plus emblématique. La Juventus fait l’impossible : perdre 0-3 à Turin, aller à Madrid et gagner 3-0 — score cumulé à 3-3.",
    case4_p2:
      "À la 93e minute, l’arbitre Michael Oliver accorde un penalty dans une action très discutable de Benatia sur Lucas Vázquez, et expulse Buffon pour contestation. Ronaldo marque à la 97e.",
    case4_p3: "Les réactions ont été historiques :",
    case4_li1:
      '"Cet arbitre a une poubelle à la place du cœur. On ne siffle pas un penalty comme ça à la 93e minute."',
    case4_li2:
      "Chiellini fait le geste de l’argent en pointant l’écusson du Real Madrid — sans avoir besoin de dire un mot.",
    case4_li3:
      'La presse italienne et espagnole (y compris Sport de Barcelone) parle de "vol du siècle" et d’"indignation mondiale".',
    case4_p4:
      'Sans ce penalty, la double confrontation part en prolongation avec la Juventus lancée et le Bernabéu sous le choc. Le Real aurait très bien pu être éliminé — et avec lui disparaissait le triplé européen qui a cimenté la légende de Ronaldo comme "Mr. Champions".',
    conclusion_h: "Ce que cela signifie pour le palmarès de Ronaldo",
    conclusion_p1: "En réunissant les quatre cas :",
    conclusion_li1:
      "2016 : but d’ouverture de la finale hors-jeu, admis par l’arbitre.",
    conclusion_li2:
      "2017 : Bayern éliminé avec un carton rouge injuste et des buts hors-jeu de Ronaldo.",
    conclusion_li3:
      "2018 (PSG) : penalty douteux et but techniquement illégal selon les lois du jeu.",
    conclusion_li4:
      "2018 (Juventus) : penalty à la 93e minute qui a choqué la moitié du monde.",
    conclusion_p2:
      "Dans un scénario avec VAR et arbitrage cohérent, le Real aurait crédiblement pu gagner une ou deux Ligues des Champions de moins sur cette période. Les buts de Ronaldo dans les matches à élimination directe — base de ses records européens — comprennent au moins trois ou quatre actions qui n’auraient pas dû compter.",
    conclusion_p3:
      'Ces buts et ces trophées ont ensuite été utilisés, directement, comme argument central dans les Ballons d’Or 2016 et 2017. L’UEFA, France Football et la presse dominante ont justifié les deux prix en disant "il a gagné la Ligue des Champions, il a marqué dans les grands matches, il a été décisif dans les matches couperet". The Athletic, via Michael Cox, a même proposé des vainqueurs alternatifs précisément parce que le poids donné à la Ligue des Champions déformait l’évaluation de la vraie performance individuelle.',
    conclusion_p4:
      "Il n’est pas nécessaire de prouver une corruption organisée pour arriver à la conclusion centrale : une part importante du CV européen de Ronaldo a été construite sur des matches décidés par de graves erreurs d’arbitrage en faveur de son club. Quand ce CV est utilisé pour défendre une supériorité absolue sur Messi ou sur n’importe qui, l’argument repose sur des bases instables.",
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

const sourceCardCopy = {
  en: {
    badge: "Source",
    cta: "Open article",
    title: "Clattenburg on 2016 Real Madrid-Atletico final",
    description:
      "AS USA video article with the referee's admission and the offside context.",
  },
  pt: {
    badge: "Fonte",
    cta: "Abrir artigo",
    title: "Clattenburg sobre a final Real Madrid-Atlético de 2016",
    description:
      "Vídeo do AS USA com a admissão do árbitro e o contexto do fora de jogo.",
  },
  es: {
    badge: "Fuente",
    cta: "Abrir artículo",
    title: "Clattenburg sobre la final Real Madrid-Atlético de 2016",
    description:
      "Vídeo de AS USA con la admisión del árbitro y el contexto del fuera de juego.",
  },
  fr: {
    badge: "Source",
    cta: "Ouvrir l'article",
    title: "Clattenburg sur la finale Real Madrid-Atlético de 2016",
    description:
      "Vidéo AS USA avec l’aveu de l’arbitre et le contexte du hors-jeu.",
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
  pt: {
    badge: "Fonte",
    cta: "Abrir artigo",
    title: "O árbitro do Real-Bayern cometeu dois erros com Arturo Vidal",
    description:
      "Artigo da Marca sobre a expulsão e os dois erros de arbitragem nos quartos de final.",
  },
  es: {
    badge: "Fuente",
    cta: "Abrir artículo",
    title: "El árbitro del Real-Bayern cometió dos errores con Arturo Vidal",
    description:
      "Artículo de Marca sobre la expulsión y los dos errores arbitrales en la eliminatoria.",
  },
  fr: {
    badge: "Source",
    cta: "Ouvrir l'article",
    title: "L’arbitre de Real-Bayern a commis deux erreurs avec Arturo Vidal",
    description:
      "Article de Marca sur l’expulsion et les deux erreurs d’arbitrage du quart de finale.",
  },
};

export default function RiggedUCLSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const sourceCard = sourceCardCopy[lang] || sourceCardCopy.en;
  const case2SourceCard = case2SourceCardCopy[lang] || case2SourceCardCopy.en;

  return (
    <SectionWrapper
      id="rigged-ucl"
      label={t("label_ucl")}
      title={c("title")}
      dark
    >
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
        {c("context_h")}
      </h2>
      <p>{c("context_p1")}</p>
      <p>{c("context_p2")}</p>

      {/* Case 1 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
          {c("case1_year")}: {c("case1_title")}
        </h2>
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
            Clattenburg admits error: Madrid's first goal in 2016 UCL final was
            offside
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
      </div>

      {/* Case 2 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
          {c("case2_year")}: {c("case2_title")}
        </h2>
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
            Two frames, one story: Ronaldo's position at the moment of the pass
            (top) and at the moment of the finish (bottom). Both goals were
            allowed. Neither should have been.
          </figcaption>
        </figure>
      </div>

      {/* Case 3 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
          {c("case3_year")}: {c("case3_title")}
        </h2>
        <p>{c("case3_p1")}</p>
        <ul>
          <li>{c("case3_li1")}</li>
          <li>{c("case3_li2")}</li>
        </ul>
        <p>{c("case3_p2")}</p>
      </div>

      {/* Case 4 */}
      <div className="mb-12">
        <div className="border-t border-white/10 my-12" />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
          {c("case4_year")}: {c("case4_title")}
        </h2>
        <p>{c("case4_p1")}</p>
        <p>{c("case4_p2")}</p>
        <p>{c("case4_p3")}</p>
        <ul>
          <li>{c("case4_li1")}</li>
          <li>{c("case4_li2")}</li>
          <li>{c("case4_li3")}</li>
        </ul>
        <p>{c("case4_p4")}</p>
      </div>

      <div className="border-t border-white/10 my-12" />
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mt-0 mb-4">
        {c("conclusion_h")}
      </h2>
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
    </SectionWrapper>
  );
}
