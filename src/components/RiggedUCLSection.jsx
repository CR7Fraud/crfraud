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
  case1_title: "The Opening Goal That Was **Illegal**",
  case1_p1:
    "In the 2016 Champions League final, Sergio Ramos opens the scoring early. Atletico de Madrid equalise. Real win in extra time 4-1.",
  case1_p2:
    "What few know: in 2020, the final referee, Mark Clattenburg, publicly admitted that Ramos's goal was offside. His words:",
  case1_q: '"The goal was slightly offside, and we realised at half-time."',
  case1_p3:
    "The first major European title of the Real/Ronaldo era is literally built on an incident the referee himself acknowledges as irregular. Ronaldo scores from a penalty already in extra time, with the game decided - and enters the record books as European champion. Source:",
  case2_year: "2017 vs Bayern",
  case2_title: "**Unjust Red Card**, Two Offside Goals",
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
    "The **Non-Existent Penalty** and the Goal That Should Have Been Retaken",
  case3_p1:
    "In the 2018 round of 16, PSG arrive in Madrid winning the first leg.",
  case3_li1:
    'The referee awards a penalty against Kroos in an incident that Iturralde Gonzalez, a former Spanish referee, described as non-existent: "It\'s not a penalty. There is contact, but Kroos feels the arm and throws himself."',
  case3_li2:
    'Ronaldo converts. He later scores another penalty with the ball moving at the moment of the kick - a technical "double touch" that, according to the laws of the game, required a retake. Former English referee Graham Poll confirmed this in the British press.',
  case3_p2:
    "Real overturn 0-1 to 2-1. Two Ronaldo goals. At least one should not have counted. The other was born from a penalty that divided even the referees themselves.",
  case4_year: "2018 vs Juventus",
  case4_title: 'The 93rd-Minute Penalty and "**The Robbery of the Century**"',
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
  case1_img_alt:
    "Visual analysis of Sergio Ramos' offside goal in the 2016 Champions League final",
  case1_figcaption:
    "Clattenburg admits error: Madrid's first goal in 2016 UCL final was offside",
  case2_img_alt:
    "Visual analysis of Ronaldo's offside positions in the 2017 Bayern tie",
  case2_figcaption:
    "Two frames, one story: Ronaldo's position at the moment of the pass (top) and at the moment of the finish (bottom). Both goals were allowed. Neither should have been.",
};

const pt = {
  ...en,
  title: `A Champions League que Não Foi Limpa`,
  context_h: `O Contexto`,
  context_p1: `Entre 2016 e 2018, o Real Madrid venceu três Champions Leagues consecutivas - um feito histórico. Ronaldo foi o protagonista mediático dessa sequência, acumulando golos, recordes e narrativas de "Mr. Champions". O problema é o que estava por baixo: uma série de decisões arbitrais graves em jogos decisivos que beneficiaram sistematicamente o Real Madrid em momentos em que podiam ter sido eliminados.`,
  context_p2: `Essas "sobrevivências" tornaram-se troféus. Esses troféus tornaram-se Bolas de Ouro.`,
  case1_title: `O golo de abertura que foi ilegal`,
  case1_p1: `Na final da Champions League de 2016, Sergio Ramos abriu o marcador cedo. O Atlético de Madrid empatou. O Real venceu 4-1 no prolongamento.`,
  case1_p2: `O que pouca gente sabe: em 2020, o árbitro da final, Mark Clattenburg, admitiu publicamente que o golo de Ramos estava em fora-de-jogo. As suas palavras:`,
  case1_q: `"O golo estava ligeiramente em fora-de-jogo, e apercebemo-nos disso ao intervalo."`,
  case1_p3: `O primeiro grande título europeu da era Real/Ronaldo está literalmente construído sobre um lance que o próprio árbitro reconhece como irregular. Ronaldo marca de penálti já no prolongamento, com o jogo decidido - e entra para os livros de recordes como campeão europeu. Fonte:`,
  case1_img_alt: `Análise visual do golo em fora-de-jogo de Sergio Ramos na final da Champions de 2016`,
  case1_figcaption: `Clattenburg admite o erro: o primeiro golo do Madrid na final da UCL de 2016 estava em fora-de-jogo`,
  case2_title: `Cartão vermelho injusto, dois golos em fora-de-jogo`,
  case2_p1: `Nos quartos de final de 2017, o Bayern chega a Espanha com a eliminatória empatada e um plantel que, em teoria, era superior ao do Real nessa época.`,
  case2_li1: `Com a eliminatória equilibrada, o árbitro expulsa Arturo Vidal com um segundo amarelo num lance em que as repetições mostram claramente que ele toca na bola. O Bayern fica reduzido a dez.`,
  case2_li2: `Ronaldo marca dois golos em posições de fora-de-jogo visíveis, amplamente documentados na imprensa europeia.`,
  case2_q: `"Quando o Madrid ficou com medo, o árbitro começou o espetáculo dele. Este roubo não pode acontecer na Champions League."`,
  case2_p2: `Resultado: o Real segue para as meias-finais com um hat-trick de Ronaldo que inclui pelo menos um golo ilegal, num jogo de 11 contra 10 que nunca devia ter existido. Esse percurso é uma peça central da narrativa das Champions consecutivas - e dos argumentos usados para justificar a Bola de Ouro de 2017.`,
  case2_img_alt: `Análise visual das posições de Ronaldo em fora-de-jogo no duelo com o Bayern em 2017`,
  case2_figcaption: `Dois enquadramentos, uma só história: a posição de Ronaldo no momento do passe (em cima) e no momento da finalização (em baixo). Ambos os golos foram validados. Nenhum devia ter sido.`,
  case3_title: `O penálti inexistente e o golo que devia ter sido repetido`,
  case3_p1: `Nos oitavos de final de 2018, o PSG chega a Madrid a ganhar a primeira mão.`,
  case3_li1: `"O árbitro assinala penálti contra Kroos num lance que Iturralde González, ex-árbitro espanhol, descreveu como inexistente: "Não é penálti. Há contacto, mas o Kroos sente o braço e atira-se.""`,
  case3_li2: `"Ronaldo converte. Mais tarde marca outro penálti com a bola em movimento no momento do remate - um "toque duplo" técnico que, segundo as leis do jogo, exigia repetição. O antigo árbitro inglês Graham Poll confirmou isso na imprensa britânica."`,
  case3_p2: `O Real vira o resultado de 0-1 para 2-1. Dois golos de Ronaldo. Pelo menos um não devia ter contado. O outro nasceu de um penálti que dividiu até os próprios árbitros.`,
  case4_title: `O penálti aos 93 minutos e "O roubo do século"`,
  case4_p1: `Este é o caso mais emblemático. A Juventus faz o impossível: perde 0-3 em Turim, vai a Madrid e ganha 3-0 - empate a 3-3.`,
  case4_p2: `Aos 93 minutos, o árbitro Michael Oliver assinala penálti num lance muito discutível de Benatia sobre Lucas Vázquez, e expulsa Buffon por protestos. Ronaldo marca aos 97 minutos.`,
  case4_p3: `As reações foram históricas:`,
  case4_li1: `"Este árbitro tem um caixote do lixo em vez de um coração. Não se marca um penálti assim aos 93 minutos."`,
  case4_li2: `Chiellini faz o gesto do dinheiro apontando para o emblema do Real Madrid - sem precisar de dizer uma palavra.`,
  case4_li3: `A imprensa italiana e espanhola (incluindo o Sport de Barcelona) fala de "roubo do século" e de "indignação mundial".`,
  case4_p4: `Sem esse penálti, a eliminatória iria para prolongamento com a Juventus em plena ascensão e o Bernabéu em choque. O Real poderia muito bem ter sido eliminado - e com isso teria desaparecido o tri de títulos europeus que cimentou a lenda de Ronaldo como "Mr. Champions".`,
  conclusion_h: `O Que Isto Significa para o Palmarés de Ronaldo`,
  conclusion_p1: `Juntando os quatro casos:`,
  conclusion_li1: `2016: golo inicial da final em fora-de-jogo, admitido pelo árbitro.`,
  conclusion_li2: `2017: Bayern eliminado com um vermelho injusto e golos de Ronaldo em fora-de-jogo.`,
  conclusion_li3: `2018 (PSG): penálti duvidoso e um golo tecnicamente ilegal segundo as leis do jogo.`,
  conclusion_li4: `2018 (Juventus): penálti aos 93 minutos que chocou meio mundo.`,
  conclusion_p2: `Num cenário com VAR e arbitragem consistente, o Real poderia credivelmente e justificadamente ter ganho uma ou duas Champions Leagues a menos neste ciclo. Os golos de Ronaldo na fase a eliminar - a base dos seus recordes europeus - incluem pelo menos três ou quatro lances que não deviam ter contado.`,
  conclusion_p3: `Esses golos e esses troféus foram depois usados, diretamente, como argumento central nas Bolas de Ouro de 2016 e 2017. A UEFA, a France Football e a imprensa mainstream justificaram ambos os prémios com "venceu a Champions League, marcou nos grandes jogos, foi decisivo nas eliminatórias". O The Athletic, através de Michael Cox, chegou mesmo a propor vencedores alternativos precisamente porque o peso dado à Champions distorcia a avaliação do verdadeiro rendimento individual.`,
  conclusion_p4: `Não é preciso provar corrupção organizada para chegar à conclusão central: uma parte significativa do currículo europeu de Ronaldo foi construída em jogos decididos por erros de arbitragem graves a favor do seu clube. Quando esse currículo é usado para argumentar uma superioridade absoluta sobre Messi ou qualquer outro, o argumento assenta em bases instáveis.`,
};

const es = {
  ...en,
  title: `La Champions League que No Fue Limpia`,
  context_h: `El Contexto`,
  context_p1: `Entre 2016 y 2018, el Real Madrid ganó tres Champions League consecutivas - un logro histórico. Ronaldo fue el protagonista mediático de esa secuencia, acumulando goles, récords y relatos de "Mr. Champions". El problema está debajo: una serie de decisiones arbitrales graves en partidos decisivos que beneficiaron sistemáticamente al Real Madrid en momentos en los que podían haber sido eliminados.`,
  context_p2: `Esas "supervivencias" se convirtieron en trofeos. Esos trofeos se convirtieron en Balones de Oro.`,
  case1_title: `El gol de apertura que fue ilegal`,
  case1_p1: `En la final de la Champions League de 2016, Sergio Ramos abrió el marcador pronto. El Atlético de Madrid empató. El Real ganó 4-1 en la prórroga.`,
  case1_p2: `Lo que poca gente sabe: en 2020, el árbitro de la final, Mark Clattenburg, admitió públicamente que el gol de Ramos estaba en fuera de juego. Sus palabras:`,
  case1_q: `"El gol estaba ligeramente en fuera de juego, y nos dimos cuenta en el descanso."`,
  case1_p3: `El primer gran título europeo de la era Real/Ronaldo está literalmente construido sobre una acción que el propio árbitro reconoce como irregular. Ronaldo marca de penalti ya en la prórroga, con el partido decidido - y entra en los libros de récords como campeón de Europa. Fuente:`,
  case1_img_alt: `Análisis visual del gol en fuera de juego de Sergio Ramos en la final de la Champions de 2016`,
  case1_figcaption: `Clattenburg admite el error: el primer gol del Madrid en la final de la UCL 2016 estaba en fuera de juego`,
  case2_title: `Tarjeta roja injusta, dos goles en fuera de juego`,
  case2_p1: `En los cuartos de final de 2017, el Bayern llega a España con la eliminatoria empatada y una plantilla que, en teoría, era superior a la del Real ese año.`,
  case2_li1: `Con la eliminatoria equilibrada, el árbitro expulsa a Arturo Vidal con una segunda amarilla en una acción en la que las repeticiones muestran claramente que toca el balón. El Bayern se queda con diez.`,
  case2_li2: `Ronaldo marca dos goles en posiciones de fuera de juego visibles, ampliamente documentados en la prensa europea.`,
  case2_q: `"Cuando el Madrid se asustó, el árbitro empezó su espectáculo. Este robo no puede pasar en la Champions League."`,
  case2_p2: `Resultado: el Real avanza a semifinales con un hat-trick de Ronaldo que incluye al menos un gol ilegal, en un partido de 11 contra 10 que nunca debió existir. Ese tramo es una pieza central de la narrativa de las Champions consecutivas - y de los argumentos usados para justificar el Balón de Oro de 2017.`,
  case2_img_alt: `Análisis visual de las posiciones de Ronaldo en fuera de juego en el duelo con el Bayern en 2017`,
  case2_figcaption: `Dos fotogramas, una sola historia: la posición de Ronaldo en el momento del pase (arriba) y en el momento de la finalización (abajo). Ambos goles fueron validados. Ninguno debía haberlo sido.`,
  case3_title: `El penalti inexistente y el gol que debió repetirse`,
  case3_p1: `En los octavos de final de 2018, el PSG llega a Madrid ganando la ida.`,
  case3_li1: `"El árbitro señala penalti contra Kroos en una acción que Iturralde González, ex árbitro español, describió como inexistente: "No es penalti. Hay contacto, pero Kroos siente el brazo y se tira.""`,
  case3_li2: `"Ronaldo lo convierte. Más tarde marca otro penalti con el balón en movimiento en el momento del golpeo - un "doble toque" técnico que, según las leyes del juego, exigía repetición. El ex árbitro inglés Graham Poll lo confirmó en la prensa británica."`,
  case3_p2: `El Real remonta de 0-1 a 2-1. Dos goles de Ronaldo. Al menos uno no debía haber contado. El otro nació de un penalti que dividió incluso a los propios árbitros.`,
  case4_title: `El penalti en el minuto 93 y "El robo del siglo"`,
  case4_p1: `Este es el caso más emblemático. La Juventus hace lo imposible: pierde 0-3 en Turín, va a Madrid y gana 3-0 - empate a 3-3.`,
  case4_p2: `En el minuto 93, el árbitro Michael Oliver señala penalti en una acción muy discutible de Benatia sobre Lucas Vázquez, y expulsa a Buffon por protestar. Ronaldo marca en el 97.`,
  case4_p3: `Las reacciones fueron históricas:`,
  case4_li1: `"Este árbitro tiene una papelera en lugar de corazón. No se pita un penalti así en el minuto 93."`,
  case4_li2: `Chiellini hace el gesto del dinero apuntando al escudo del Real Madrid - sin necesidad de decir una palabra.`,
  case4_li3: `La prensa italiana y española (incluyendo Sport de Barcelona) habla de "robo del siglo" e "indignación mundial".`,
  case4_p4: `Sin ese penalti, la eliminatoria se iría a la prórroga con la Juventus lanzada y el Bernabéu en shock. El Real muy bien podría haber sido eliminado - y con ello habría desaparecido el triplete de títulos europeos que cimentó la leyenda de Ronaldo como "Mr. Champions".`,
  conclusion_h: `Lo que Esto Significa para el Palmarés de Ronaldo`,
  conclusion_p1: `Juntando los cuatro casos:`,
  conclusion_li1: `2016: gol inicial de la final en fuera de juego, admitido por el árbitro.`,
  conclusion_li2: `2017: el Bayern eliminado con una roja injusta y goles de Ronaldo en fuera de juego.`,
  conclusion_li3: `2018 (PSG): penalti dudoso y un gol técnicamente ilegal según las leyes del juego.`,
  conclusion_li4: `2018 (Juventus): penalti en el minuto 93 que sacudió a medio mundo.`,
  conclusion_p2: `En un escenario con VAR y arbitraje consistente, el Real podría haber ganado con credibilidad y justificación una o dos Champions League menos en este ciclo. Los goles de Ronaldo en eliminatorias - la base de sus récords europeos - incluyen al menos tres o cuatro acciones que no deberían haber contado.`,
  conclusion_p3: `Esos goles y esos trofeos se usaron después, directamente, como argumento central en los Balones de Oro de 2016 y 2017. La UEFA, France Football y la prensa generalista justificaron ambos premios con "ganó la Champions League, marcó en los grandes partidos, fue decisivo en las eliminatorias". The Athletic, a través de Michael Cox, incluso propuso ganadores alternativos precisamente porque el peso dado a la Champions distorsionaba la evaluación del rendimiento individual real.`,
  conclusion_p4: `No hace falta probar corrupción organizada para llegar a la conclusión central: una parte significativa del currículum europeo de Ronaldo se construyó en partidos decididos por graves errores arbitrales a favor de su club. Cuando ese currículum se usa para argumentar una superioridad absoluta sobre Messi o cualquiera, el argumento se apoya en bases inestables.`,
};

const fr = {
  ...en,
  title: `La Ligue des Champions qui N'était Pas Propre`,
  context_h: `Le contexte`,
  context_p1: `Entre 2016 et 2018, le Real Madrid a remporté trois Ligue des Champions consécutives - un exploit historique. Ronaldo était le protagoniste médiatique de cette série, accumulant buts, records et récits de "Mr. Champions". Le problème, c'est ce qu'il y avait en dessous : une série de décisions arbitrales graves dans des matches décisifs qui ont systématiquement favorisé le Real Madrid à des moments où ils auraient pu être éliminés.`,
  context_p2: `Ces "survivals" sont devenus des trophées. Ces trophées sont devenus des Ballons d'Or.`,
  case1_title: `Le but d'ouverture qui était hors-jeu`,
  case1_p1: `Lors de la finale de la Ligue des Champions 2016, Sergio Ramos ouvre rapidement le score. L'Atlético de Madrid égalise. Le Real s'impose 4-1 après prolongation.`,
  case1_p2: `Ce que peu de gens savent : en 2020, l'arbitre de la finale, Mark Clattenburg, a publiquement admis que le but de Ramos était hors-jeu. Ses mots :`,
  case1_q: `"Le but était légèrement hors-jeu, et nous nous en sommes rendu compte à la mi-temps."`,
  case1_p3: `Le premier grand titre européen de l'ère Real/Ronaldo repose littéralement sur une action que l'arbitre lui-même reconnaît comme irrégulière. Ronaldo marque sur penalty déjà en prolongation, alors que le match est plié - et entre dans les livres des records comme champion d'Europe. Source :`,
  case1_img_alt: `Analyse visuelle du but hors-jeu de Sergio Ramos en finale de Ligue des Champions 2016`,
  case1_figcaption: `Clattenburg admet son erreur : le premier but du Real en finale de LDC 2016 était hors-jeu`,
  case2_title: `Carton rouge injuste, deux buts hors-jeu`,
  case2_p1: `En quarts de finale 2017, le Bayern arrive en Espagne avec une égalité parfaite et un effectif qui, en théorie, était supérieur à celui du Real cette saison-là.`,
  case2_li1: `Alors que la confrontation est équilibrée, l'arbitre expulse Arturo Vidal sur un second jaune dans une action où les ralentis montrent clairement qu'il touche le ballon. Le Bayern se retrouve à dix.`,
  case2_li2: `Ronaldo marque deux buts dans des positions de hors-jeu visibles, largement documentées par la presse européenne.`,
  case2_q: `"Quand Madrid a eu peur, l'arbitre a commencé son spectacle. Ce vol ne peut pas se produire en Ligue des Champions."`,
  case2_p2: `Résultat : le Real file en demi-finale avec un triplé de Ronaldo qui inclut au moins un but illégal, dans un match à 11 contre 10 qui n'aurait jamais dû exister. Cette séquence est un élément central du récit des victoires consécutives en Ligue des Champions - et des arguments utilisés pour justifier le Ballon d'Or 2017.`,
  case2_img_alt: `Analyse visuelle des positions de Ronaldo hors-jeu lors du duel avec le Bayern en 2017`,
  case2_figcaption: `Deux images, une seule histoire : la position de Ronaldo au moment de la passe (en haut) et au moment de la finition (en bas). Les deux buts ont été validés. Aucun n'aurait dû l'être.`,
  case3_title: `Le penalty inexistant et le but qui aurait dû être rejoué`,
  case3_p1: `En huitièmes de finale 2018, le PSG arrive à Madrid en gagnant le match aller.`,
  case3_li1: `"L'arbitre accorde un penalty contre Kroos dans une action que Iturralde González, ancien arbitre espagnol, a décrite comme inexistante : "Ce n'est pas un penalty. Il y a contact, mais Kroos sent le bras et se jette.""`,
  case3_li2: `"Ronaldo le transforme. Il marque ensuite un autre penalty avec le ballon en mouvement au moment du tir - un "double contact" technique qui, selon les lois du jeu, nécessitait une reprise. L'ancien arbitre anglais Graham Poll l'a confirmé dans la presse britannique."`,
  case3_p2: `Le Real renverse 0-1 en 2-1. Deux buts de Ronaldo. Au moins l'un d'eux n'aurait pas dû compter. L'autre est né d'un penalty qui a même divisé les arbitres eux-mêmes.`,
  case4_title: `Le penalty à la 93e minute et "Le vol du siècle"`,
  case4_p1: `C'est le cas le plus emblématique. La Juventus fait l'impossible : perdre 0-3 à Turin, aller à Madrid et gagner 3-0 - égalité à 3-3.`,
  case4_p2: `À la 93e minute, l'arbitre Michael Oliver accorde un penalty sur une action très discutable de Benatia sur Lucas Vazquez, et expulse Buffon pour protestation. Ronaldo marque à la 97e minute.`,
  case4_p3: `Les réactions ont été historiques :`,
  case4_li1: `"Cet arbitre a une poubelle à la place du cœur. On ne siffle pas un penalty comme ça à la 93e minute."`,
  case4_li2: `Chiellini fait le geste de l'argent en pointant l'écusson du Real Madrid - sans avoir besoin de dire un mot.`,
  case4_li3: `La presse italienne et espagnole (notamment Sport de Barcelone) parle de "vol du siècle" et d'"indignation mondiale".`,
  case4_p4: `Sans ce penalty, la confrontation partait en prolongation avec une Juventus en pleine confiance et le Bernabéu sous le choc. Le Real aurait très bien pu être éliminé - et avec lui, le triplé de titres européens qui a cimenté la légende de Ronaldo comme "Mr. Champions" aurait disparu.`,
  conclusion_h: `Ce Que Cela Signifie pour le Palmarès de Ronaldo`,
  conclusion_p1: `En mettant les quatre cas ensemble :`,
  conclusion_li1: `2016 : but d'ouverture de la finale hors-jeu, admis par l'arbitre.`,
  conclusion_li2: `2017 : Bayern éliminé avec un rouge injuste et des buts de Ronaldo hors-jeu.`,
  conclusion_li3: `2018 (PSG) : penalty douteux et but techniquement illégal selon les lois du jeu.`,
  conclusion_li4: `2018 (Juventus) : penalty à la 93e minute qui a choqué la moitié du monde.`,
  conclusion_p2: `Dans un scénario avec VAR et un arbitrage cohérent, le Real aurait de manière crédible et justifiée pu remporter une ou deux Ligue des Champions de moins durant ce cycle. Les buts de Ronaldo en phase à élimination directe - la base de ses records européens - comprennent au moins trois ou quatre actions qui n'auraient pas dû compter.`,
  conclusion_p3: `Ces buts et ces trophées ont ensuite été utilisés, directement, comme argument central dans les Ballons d'Or 2016 et 2017. L'UEFA, France Football et la presse grand public ont justifié les deux prix avec "il a gagné la Ligue des Champions, il a marqué dans les grands matches, il a été décisif dans les phases à élimination directe". The Athletic, via Michael Cox, a même proposé des vainqueurs alternatifs précisément parce que le poids accordé à la Ligue des Champions déformait l'évaluation de la vraie performance individuelle.`,
  conclusion_p4: `Il n'est pas nécessaire de prouver une corruption organisée pour arriver à la conclusion centrale : une part significative du CV européen de Ronaldo a été construite dans des matches décidés par de graves erreurs d'arbitrage en faveur de son club. Quand ce CV est utilisé pour plaider une supériorité absolue sur Messi ou n'importe qui d'autre, l'argument repose sur des bases instables.`,
};

const content = { en, pt, es, fr };

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

const sourceCardCopy = {
  en: {
    badge: "Source",
    cta: "Open article",
    title: "Clattenburg on 2016 Real Madrid-Atletico final",
    format: "Video",
    description:
      "AS USA video article with the referee's admission and the offside context.",
  },
  pt: {
    badge: `Fonte`,
    cta: `Abrir artigo`,
    title: `Clattenburg sobre a final Real Madrid-Atlético de 2016`,
    format: `Vídeo`,
    description: `Artigo em vídeo da AS USA com a admissão do árbitro e o contexto do fora-de-jogo.`,
  },
  es: {
    badge: `Fuente`,
    cta: `Abrir artículo`,
    title: `Clattenburg sobre la final Real Madrid-Atlético de 2016`,
    format: `Vídeo`,
    description: `Artículo en vídeo de AS USA con la admisión del árbitro y el contexto del fuera de juego.`,
  },
  fr: {
    badge: `Source`,
    cta: `Ouvrir l'article`,
    title: `Clattenburg à propos de la finale Real Madrid-Atlético de 2016`,
    format: `Vidéo`,
    description: `Article vidéo d'AS USA avec l'aveu de l'arbitre et le contexte du hors-jeu.`,
  },
};

const case2SourceCardCopy = {
  en: {
    badge: "Source",
    cta: "Open article",
    title: "Real-Bayern referee made two errors with Arturo Vidal",
    format: "Article",
    description:
      "Marca English report on the sending-off and the two officiating mistakes in the quarter-final.",
  },
  pt: {
    badge: `Fonte`,
    cta: `Abrir artigo`,
    title: `O árbitro de Real-Bayern cometeu dois erros com Arturo Vidal`,
    format: `Artigo`,
    description: `Reportagem da Marca English sobre a expulsão e os dois erros de arbitragem nos quartos de final.`,
  },
  es: {
    badge: `Fuente`,
    cta: `Abrir artículo`,
    title: `El árbitro de Real-Bayern cometió dos errores con Arturo Vidal`,
    format: `Artículo`,
    description: `Reportaje de Marca English sobre la expulsión y los dos errores arbitrales en los cuartos de final.`,
  },
  fr: {
    badge: `Source`,
    cta: `Ouvrir l'article`,
    title: `L'arbitre de Real-Bayern a commis deux erreurs avec Arturo Vidal`,
    format: `Article`,
    description: `Reportage de Marca English sur l'expulsion et les deux erreurs d'arbitrage en quarts de finale.`,
  },
};

export default function RiggedUCLSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const sourceCard = sourceCardCopy[lang] || sourceCardCopy.en;
  const case2SourceCard = case2SourceCardCopy[lang] || case2SourceCardCopy.en;

  const contextIntro = (
    <div className="mb-8 space-y-4">
      <h2 className="font-playfair text-2xl font-bold text-white/90">
        {c("context_h")}
      </h2>
      <p>{c("context_p1")}</p>
      <p>{c("context_p2")}</p>
    </div>
  );

  const items = [
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
              alt={c("case1_img_alt")}
              className="block w-full"
            />
            <figcaption className="border-t border-white/10 bg-black/85 px-5 py-4 text-sm font-medium leading-snug text-zinc-200">
              {c("case1_figcaption")}
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
                    {sourceCard.format}
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
                    {case2SourceCard.format}
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
              alt={c("case2_img_alt")}
              className="block w-full"
            />
            <figcaption className="border-t border-white/10 bg-black/85 px-5 py-4 text-sm font-medium leading-snug text-zinc-200">
              {c("case2_figcaption")}
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
      <div className="space-y-8">
        {contextIntro}
        <SectionAccordionList items={items} dark />
      </div>
    </SectionWrapper>
  );
}
