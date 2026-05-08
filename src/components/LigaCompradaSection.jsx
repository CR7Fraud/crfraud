import React from "react";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "Bought League & Dubai d'Or",
    intro: "Ronaldo's Saudi project",
    h1: "2023: arrival, penalties and zero titles",
    p1: 'Ronaldo arrives at Al-Nassr in January 2023 as the face of the new Saudi Pro League, in a move that is openly political and commercial, not merely sporting. From that point on, the refereeing pattern shifts in tone: Al-Nassr begins to live off easy penalties, endless VAR reviews and generous stoppage time, feeding the idea that the league is tilted to protect the "product".',
    p2: "Even so, that half-season ends with zero official trophies: no league, no King's Cup, no Super Cup. The only title he lifts is the Arab Club Champions Cup 2023, a regional competition without the competitive weight of the league or the Asian Champions League.",
    h2: "2023–24: tilted league, Asian Champions League without a safety net",
    p3: 'In the first full season (2023–24), the sense of a "Bought League" solidifies, while Al-Nassr again fails to win the main trophies.',
    h2a: "At home: criteria that change with the shirt",
    p4: "Throughout the season, incidents accumulate in which:",
    li1: "minimal contact on Ronaldo results in penalties after long VAR reviews;",
    li2: "prior fouls by Al-Nassr players are ignored before a penalty is awarded;",
    li3: "stoppage time is systematically extended when Al-Nassr are level or losing.",
    p5: "Saudi fans of other clubs even ask on social media why \"Al-Nassr only stops getting penalties when Ronaldo doesn't play\", highlighting the difference in criteria with and without him on the pitch. Even so, the final result is the same: no league title, no King's Cup, no Super Cup.",
    h2b: "Away from home: the AFC does not bend the narrative",
    p6: "In the AFC Champions League, with referees and VAR under the AFC's jurisdiction, the margin of protection disappears.",
    li4: "Quarter-finals against Al-Ain: 1-0 defeat in the Emirates, 3-2 win in Riyadh.",
    li5: "Ronaldo misses a goal almost on the line and only scores from a penalty near the end.",
    li6: "In the shootout, he is the only Al-Nassr player to convert; teammates miss three, and the team is eliminated.",
    p7: "The external reading is direct: in the league, the context cushions errors with penalties and stoppage time; in Asia, without that cushion, Al-Nassr fall at the first real test.",
    h3: "2024–25: 90+15 penalty and a Super Cup tailored for the product",
    h3a: "The 90+15 penalty against Al-Fayha",
    p8: "In an Al-Nassr vs Al-Fayha match, Ronaldo's team are drawing 1-1 as stoppage time begins. The referee signals 6 minutes of added time, but the game stretches to 90+15:",
    li7: "at 90+12, there is a routine aerial duel in the box;",
    li8: "initially nothing is given, or the referee considers an attacking foul;",
    li9: "after a long VAR review, a penalty is awarded to Al-Nassr.",
    p9: 'Ronaldo scores at 90+15 to give the win. The Al-Fayha director states that the referee admitted to him on the pitch that the contact was offensive before VAR "convinced him" to change the decision. A local article describes the incident as "Ongoing Controversy: the Al-Nassr penalty ignites debate", summing up the general feeling: the game seems to extend until the right opportunity arises for Ronaldo from the spot.',
    h3b: "Super Cup in Hong Kong: punishing the champions, making room for Al-Nassr",
    p10: "In the summer of 2025, the Saudi federation decides to take the Super Cup to Hong Kong, between 19 and 23 August, shortly after the Club World Cup where Al-Hilal represented the country.",
    li10: "Al-Hilal refuse to participate, citing players' contractual right to 28 days of holidays;",
    li11: "the federation responds with a fine and banning the club from the next Super Cup;",
    li12: "the open slot is filled by another team, and the tournament bracket once again includes Al-Nassr, despite them not being champions.",
    p11: "In sporting terms, the strongest champions are punished for protecting their players; in commercial terms, it ensures Ronaldo and Al-Nassr are on the right stage. Even so, Al-Nassr lose the final again, and Ronaldo remains without official trophies in Saudi Arabia.",
    h4: 'Globe Soccer: the "Dubai d\'Or" as a compensation system',
    p12: "While the competitive reality shows an Al-Nassr that is not the best in Saudi Arabia or Asia, the Globe Soccer Awards in Dubai function as an image correction.",
    li13: 'Created in 2010 with strong influence from the Jorge Mendes circle, the awards quickly gained a reputation as the "Dubai d\'Or": a marketing gala, not a sporting consensus.',
    li14: 'Ronaldo has accumulated "Player of the Year" awards there and, in 2020, received the title of "Player of the Century 2001–2020" in a massive fan vote.',
    p13: "With the move to Saudi Arabia, the gala adapts:",
    li15: 'In 2023, the category "Best Middle East Player" appears; the winner, three years running, is always Ronaldo.',
    li16: 'In 2023 the "Maradona Award" for top scorer of the year is also created; Ronaldo wins the inaugural edition with the highest raw number of goals in 2023, combining games in the Saudi league and national team qualifiers.',
    p14: "All of this happens in years when:",
    li17: "the Saudi Pro League recognises Benzema and Mitrović as the main figures — MVP and top scorer in a league dominated by Al-Hilal;",
    li18: "the AFC distinguishes Firmino and Mahrez as the best in the Asian Champions League.",
    p15: 'In other words: in official awards, Ronaldo is no longer the best at anything; in the Dubai awards, there is always a regional trophy or "top scorer" award waiting.',
    p16: 'He feeds that dynamic himself: in 2024, he says in an interview that he prefers the Globe Soccer to the Ballon d\'Or, calls the Dubai gala "more honest" and uses the stage to reinforce the 1,000-goal narrative, while the competitive reality places him behind the colleagues the gala ignores.',
    h5: "The full picture: tilted league, tilted award",
    li19: "On the pitch, the Saudi Pro League stretches penalties, stoppage time and schedules to keep Ronaldo and Al-Nassr at the centre of the stage — but when the level rises (Al-Hilal in the league, the Asian Champions League), it is always others who lift the trophies.",
    li20: 'Off the pitch, the Globe Soccer ensures that, regardless of that, Ronaldo continues to leave the Middle East with individual cups: "Maradona Award", "Best Middle East Player", "Player of the Century".',
    p17: 'For a project called "Bought League", it is hard to find a purer example: an ecosystem willing to bend rules on the pitch and criteria off it to protect a product — and that still cannot hide the fact that, in football that really matters, Ronaldo\'s Al-Nassr has never been the best team in Saudi Arabia or in Asia.',
  },
  pt: {
    title: "Liga Comprada & Dubai d'Or",
    intro: "o projeto saudita de Ronaldo",
    h1: "2023: chegada, penáltis e zero títulos",
    p1: 'Ronaldo chega ao Al-Nassr em janeiro de 2023 como o rosto da nova Saudi Pro League, num movimento assumidamente político e comercial, não apenas desportivo. A partir daí, o padrão de arbitragem muda de tom: o Al-Nassr passa a viver de penáltis fáceis, revisões intermináveis de VAR e compensações generosas, alimentando a ideia de que a liga está inclinada para proteger o "produto".',
    p2: "Mesmo assim, essa meia época termina com zero troféus oficiais: não ganha a liga, não ganha a Taça do Rei, não ganha a Supertaça.",
    h2: "2023-24: liga inclinada, Champions asiática sem rede",
    p3: 'Na primeira época completa (2023-24), a sensação de "Liga Comprada" consolida-se, ao mesmo tempo que o Al-Nassr volta a falhar os troféus principais.',
    h2a: "Em casa: critérios que mudam com a camisola",
    p4: "Ao longo da época, acumulam-se lances em que:",
    li1: "contactos mínimos sobre Ronaldo dão penáltis após longas revisões de VAR;",
    li2: "faltas prévias de jogadores do Al-Nassr são ignoradas antes de se assinalar castigo máximo;",
    li3: "o tempo de compensação se alonga sistematicamente quando o Al-Nassr está empatado ou a perder.",
    p5: 'Adeptos sauditas de outros clubes chegam a perguntar, nas redes, porque é que "o Al-Nassr só deixa de ter penáltis quando o Ronaldo não joga".',
    h2b: "Fora de casa: a AFC não dobra a narrativa",
    p6: "Na Liga dos Campeões da Ásia, com árbitros e VAR sob tutela da AFC, a margem de proteção desaparece.",
    li4: "Quartos-de-final contra o Al-Ain: derrota 1-0 nos Emirados, vitória 3-2 em Riade.",
    li5: "Ronaldo falha um golo quase em cima da linha e só marca de penálti já perto do fim.",
    li6: "Nos penáltis, é o único do Al-Nassr a converter; os colegas falham três, e a equipa é eliminada.",
    p7: "A leitura de fora é direta: na liga, o contexto amortiza erros com penáltis e descontos; na Ásia, sem essa almofada, o Al-Nassr cai à primeira verdadeira prova.",
    h3: "2024-25: penálti aos 90+15 e Supertaça feita para o produto",
    h3a: "O penálti aos 90+15 contra o Al-Fayha",
    p8: "Num Al-Nassr-Al-Fayha, a equipa de Ronaldo está empatada 1-1 quando entram nos descontos. O árbitro indica 6 minutos de compensação, mas o jogo estica até aos 90+15:",
    li7: "aos 90+12, há um duelo aéreo banal na área;",
    li8: "inicialmente não é marcado nada, ou o árbitro considera falta atacante;",
    li9: "depois de uma revisão longa de VAR, decide-se penálti para o Al-Nassr.",
    p9: "Ronaldo marca aos 90+15 e dá a vitória.",
    h3b: "Supertaça em Hong Kong: castigar o campeão, abrir espaço ao Al-Nassr",
    p10: "No verão de 2025, a federação saudita decide levar a Supertaça para Hong Kong, entre 19 e 23 de agosto, pouco depois do Mundial de Clubes.",
    li10: "O Al-Hilal recusa participar, invocando o direito contratual dos jogadores a 28 dias de férias;",
    li11: "a federação responde com multa e banimento do clube da Supertaça seguinte;",
    li12: "a vaga aberta é ocupada por outra equipa, e o quadro do torneio volta a incluir o Al-Nassr, apesar de não ser campeão.",
    p11: "Em termos desportivos, o campeão mais forte é castigado por defender os seus jogadores; em termos comerciais, garante-se que Ronaldo e o Al-Nassr estão no palco certo.",
    h4: 'Globe Soccer: o "Dubai d\'Or" como sistema de compensação',
    p12: "Enquanto a realidade competitiva mostra um Al-Nassr que não é o melhor nem na Arábia nem na Ásia, o Globe Soccer Awards, em Dubai, funciona como correção de imagem.",
    li13: 'Criados em 2010 com forte influência do círculo de Jorge Mendes, os prémios rapidamente ganharam a fama de "Dubai d\'Or": gala de marketing, não de consenso desportivo.',
    li14: 'Ronaldo acumulou ali prémios de "Jogador do Ano" e, em 2020, recebeu até o título de "Player of the Century 2001-2020".',
    p13: "Com a mudança para a Arábia, a gala adapta-se:",
    li15: 'Em 2023, surge a categoria "Best Middle East Player"; o vencedor, três anos seguidos, é sempre Ronaldo.',
    li16: 'Em 2023 é criado também o "Maradona Award" para melhor marcador do ano; Ronaldo ganha a primeira edição.',
    p14: "Tudo isto acontece em anos em que:",
    li17: "a Saudi Pro League reconhece Benzema e Mitrović como figuras principais;",
    li18: "a AFC distingue Firmino e Mahrez como melhores da Champions asiática.",
    p15: 'Ou seja, nos prémios oficiais, Ronaldo já não é o melhor em nada; nos prémios de Dubai, há sempre um troféu regional ou de "melhor marcador" à espera.',
    p16: 'O próprio alimenta essa dinâmica: em 2024, diz em entrevista que prefere os Globe Soccer ao Ballon d\'Or e chama a gala de Dubai "mais honesta".',
    h5: "O quadro completo: liga inclinada, prémio inclinado",
    li19: "Em campo, a Saudi Pro League estica penáltis, descontos e calendários para ter Ronaldo e o Al-Nassr no centro do palco - mas, quando o nível sobe, são sempre os outros que levantam os troféus.",
    li20: "Fora de campo, o Globe Soccer assegura que Ronaldo continua a sair do Médio Oriente com taças individuais.",
    p17: 'Para um projeto chamado "Liga Comprada", é difícil arranjar exemplo mais puro: um ecossistema disposto a torcer regras dentro de campo e critérios fora dele para proteger um produto.',
  },
  es: {
    title: "Liga Comprada y Dubai d'Or",
    intro: "el proyecto saudí de Ronaldo",
    h1: "2023: llegada, penaltis y cero títulos",
    p1: 'Ronaldo llega a Al-Nassr en enero de 2023 como la cara de la nueva Saudi Pro League, en un movimiento abiertamente político y comercial, no solo deportivo. A partir de ahí, el patrón arbitral cambia de tono: Al-Nassr pasa a vivir de penaltis fáciles, revisiones interminables de VAR y compensaciones generosas, alimentando la idea de que la liga está inclinada para proteger el "producto".',
    p2: "Aun así, esa media temporada termina con cero trofeos oficiales: ni liga, ni Copa del Rey, ni Supercopa. El único título que levanta es la Arab Club Champions Cup 2023, una competición regional sin el peso competitivo de la liga ni de la Champions asiática.",
    h2: "2023-24: liga inclinada, Champions asiática sin red",
    p3: 'En la primera temporada completa (2023-24), la sensación de "Liga Comprada" se consolida, al mismo tiempo que Al-Nassr vuelve a fallar en los trofeos principales.',
    h2a: "En casa: criterios que cambian con la camiseta",
    p4: "A lo largo de la temporada, se acumulan acciones en las que:",
    li1: "los contactos mínimos sobre Ronaldo terminan en penaltis tras largas revisiones de VAR;",
    li2: "faltas previas de jugadores de Al-Nassr se ignoran antes de señalar la pena máxima;",
    li3: "el tiempo añadido se alarga sistemáticamente cuando Al-Nassr va empatando o perdiendo.",
    p5: 'Aficionados saudíes de otros clubes incluso preguntan en redes por qué "Al-Nassr solo deja de recibir penaltis cuando Ronaldo no juega", señalando la diferencia de criterio con y sin él sobre el césped. Aun así, el resultado final es el mismo: ni liga, ni Copa del Rey, ni Supercopa.',
    h2b: "Fuera de casa: la AFC no dobla la narrativa",
    p6: "En la Champions asiática, con árbitros y VAR bajo jurisdicción de la AFC, desaparece el margen de protección.",
    li4: "Cuartos de final contra Al-Ain: derrota 1-0 en Emiratos, victoria 3-2 en Riad.",
    li5: "Ronaldo falla un gol casi sobre la línea y solo marca de penalti al final.",
    li6: "En la tanda, es el único jugador de Al-Nassr que convierte; sus compañeros fallan tres y el equipo queda eliminado.",
    p7: "La lectura externa es clara: en la liga, el contexto amortigua los errores con penaltis y tiempo añadido; en Asia, sin esa protección, Al-Nassr cae en la primera prueba seria.",
    h3: "2024-25: penalti en el 90+15 y una Supercopa hecha a medida del producto",
    h3a: "El penalti en el 90+15 contra Al-Fayha",
    p8: "En un Al-Nassr-Al-Fayha, el equipo de Ronaldo va 1-1 cuando empiezan los descuentos. El árbitro señala 6 minutos de añadido, pero el partido se estira hasta el 90+15:",
    li7: "en el 90+12 hay un duelo aéreo rutinario en el área;",
    li8: "al principio no se señala nada, o el árbitro considera falta atacante;",
    li9: "tras una revisión larga de VAR, se concede un penalti a Al-Nassr.",
    p9: 'Ronaldo marca en el 90+15 y da la victoria. El director de Al-Fayha afirma que el árbitro le admitió en el campo que el contacto era ofensivo antes de que el VAR "lo convenciera" para cambiar la decisión. Un artículo local describe el incidente como "controversia en curso: el penalti de Al-Nassr enciende el debate", resumendo la sensación general: el partido parece alargarse hasta que surge la oportunidad adecuada para Ronaldo desde los once metros.',
    h3b: "Supercopa en Hong Kong: castigar al campeón, abrir espacio a Al-Nassr",
    p10: "En el verano de 2025, la federación saudí decide llevar la Supercopa a Hong Kong, entre el 19 y el 23 de agosto, poco después del Mundial de Clubes donde Al-Hilal representó al país.",
    li10: "Al-Hilal se niega a participar, alegando el derecho contractual de los jugadores a 28 días de vacaciones;",
    li11: "la federación responde con una multa y vetando al club de la siguiente Supercopa;",
    li12: "la plaza libre la ocupa otro equipo, y el cuadro del torneo vuelve a incluir a Al-Nassr, pese a no ser campeón.",
    p11: "En términos deportivos, se castiga a los campeones más fuertes por proteger a sus jugadores; en términos comerciales, se asegura que Ronaldo y Al-Nassr estén en el escenario correcto. Aun así, Al-Nassr pierde la final otra vez y Ronaldo sigue sin títulos oficiales en Arabia Saudí.",
    h4: 'Globe Soccer: el "Dubai d\'Or" como sistema de compensación',
    p12: "Mientras la realidad competitiva muestra a un Al-Nassr que no es el mejor ni en Arabia ni en Asia, los Globe Soccer Awards en Dubái funcionan como corrección de imagen.",
    li13: 'Creados en 2010 con una fuerte influencia del círculo de Jorge Mendes, los premios ganaron pronto fama de "Dubai d\'Or": gala de marketing, no de consenso deportivo.',
    li14: 'Ronaldo acumuló allí premios de "Jugador del Año" y, en 2020, recibió el título de "Player of the Century 2001-2020" en una gran votación de aficionados.',
    p13: "Con la mudanza a Arabia Saudí, la gala se adapta:",
    li15: 'En 2023 aparece la categoría "Best Middle East Player"; el ganador, durante tres años seguidos, es siempre Ronaldo.',
    li16: 'En 2023 también se crea el "Maradona Award" al máximo goleador del año; Ronaldo gana la edición inaugural con la cifra bruta más alta de goles en 2023, sumando liga saudí y clasificación con la selección.',
    p14: "Todo esto ocurre en años en los que:",
    li17: "la Saudi Pro League reconoce a Benzema y Mitrović como figuras principales — MVP y máximo goleador en una liga dominada por Al-Hilal;",
    li18: "la AFC distingue a Firmino y Mahrez como los mejores de la Champions asiática.",
    p15: 'En otras palabras: en los premios oficiales, Ronaldo ya no es el mejor en nada; en los premios de Dubái, siempre hay un trofeo regional o un premio al "máximo goleador" esperando.',
    p16: 'Él mismo alimenta esa dinámica: en 2024, dice en una entrevista que prefiere Globe Soccer al Ballon d\'Or, llama a la gala de Dubái "más honesta" y usa el escenario para reforzar la narrativa de los 1.000 goles, mientras la realidad competitiva lo sitúa detrás de los colegas que la gala ignora.',
    h5: "El cuadro completo: liga inclinada, premio inclinado",
    li19: "En el campo, la Saudi Pro League estira penaltis, tiempos añadidos y calendarios para mantener a Ronaldo y Al-Nassr en el centro del escenario — pero cuando el nivel sube (Al-Hilal en la liga, la Champions asiática), siempre son otros quienes levantan los trofeos.",
    li20: 'Fuera del campo, Globe Soccer garantiza que, pase lo que pase, Ronaldo siga saliendo de Oriente Medio con copas individuales: "Maradona Award", "Best Middle East Player", "Player of the Century".',
    p17: 'Para un proyecto llamado "Liga Comprada", cuesta encontrar un ejemplo más puro: un ecosistema dispuesto a doblar las reglas en el campo y los criterios fuera de él para proteger un producto — y que aun así no puede esconder el hecho de que, en el fútbol que realmente importa, el Al-Nassr de Ronaldo nunca ha sido el mejor equipo de Arabia Saudí ni de Asia.',
  },
  fr: {
    title: "Ligue achetée & Dubai d'Or",
    intro: "le projet saoudien de Ronaldo",
    h1: "2023 : arrivée, penalties et zéro titre",
    p1: 'Ronaldo arrive à Al-Nassr en janvier 2023 comme visage de la nouvelle Saudi Pro League, dans une opération ouvertement politique et commerciale, pas seulement sportive. À partir de là, le ton de l’arbitrage change : Al-Nassr vit de penalties faciles, de longues revues VAR et de temps additionnel généreux, nourrissant l’idée que le championnat est biaisé pour protéger le "produit".',
    p2: "Malgré cela, cette demi-saison se termine sans aucun trophée officiel : ni championnat, ni Coupe du Roi, ni Supercoupe. Le seul titre qu’il soulève est l’Arab Club Champions Cup 2023, une compétition régionale sans le poids compétitif du championnat ni de la Ligue des Champions asiatique.",
    h2: "2023-24 : championnat biaisé, Ligue des Champions asiatique sans filet",
    p3: 'Lors de la première saison complète (2023-24), le sentiment de "Ligue achetée" se consolide, tandis qu’Al-Nassr échoue à nouveau dans les grands trophées.',
    h2a: "À domicile : des critères qui changent avec le maillot",
    p4: "Tout au long de la saison, les séquences s’accumulent où :",
    li1: "de très légers contacts sur Ronaldo se transforment en penalties après de longues revues VAR ;",
    li2: "des fautes commises auparavant par des joueurs d’Al-Nassr sont ignorées avant l’attribution d’un penalty ;",
    li3: "le temps additionnel est systématiquement prolongé quand Al-Nassr est à égalité ou mené.",
    p5: 'Des supporters saoudiens d’autres clubs demandent même sur les réseaux pourquoi "Al-Nassr ne cesse de recevoir des penalties que lorsque Ronaldo ne joue pas", soulignant la différence de traitement avec et sans lui sur le terrain. Malgré cela, le résultat final reste le même : ni championnat, ni Coupe du Roi, ni Supercoupe.',
    h2b: "À l’extérieur : l’AFC ne plie pas le récit",
    p6: "En Ligue des Champions asiatique, avec arbitres et VAR sous la juridiction de l’AFC, la marge de protection disparaît.",
    li4: "Quarts de finale contre Al-Ain : défaite 1-0 aux Émirats, victoire 3-2 à Riyad.",
    li5: "Ronaldo manque un but presque sur la ligne et ne marque que sur penalty en fin de match.",
    li6: "Lors de la séance, il est le seul joueur d’Al-Nassr à convertir ; ses coéquipiers en ratent trois et l’équipe est éliminée.",
    p7: "La lecture extérieure est claire : dans le championnat, le contexte amortit les erreurs avec des penalties et du temps additionnel ; en Asie, sans ce coussin, Al-Nassr tombe au premier vrai test.",
    h3: "2024-25 : penalty à la 90+15 et Supercoupe taillée pour le produit",
    h3a: "Le penalty à la 90+15 contre Al-Fayha",
    p8: "Lors d’un match Al-Nassr-Al-Fayha, l’équipe de Ronaldo est à 1-1 lorsque le temps additionnel commence. L’arbitre annonce 6 minutes de temps additionnel, mais le match se prolonge jusqu’à la 90+15 :",
    li7: "à la 90+12, il y a un duel aérien banal dans la surface ;",
    li8: "au départ, rien n’est sifflé, ou l’arbitre considère une faute offensive ;",
    li9: "après une longue revue VAR, un penalty est accordé à Al-Nassr.",
    p9: 'Ronaldo marque à la 90+15 et offre la victoire. Le directeur d’Al-Fayha affirme que l’arbitre lui a admis sur la pelouse que le contact était offensif avant que la VAR ne le "convainque" de changer sa décision. Un article local décrit l’incident comme "controverse en cours : le penalty d’Al-Nassr enflamme le débat", résumant le sentiment général : le match semble se prolonger jusqu’à ce que la bonne occasion apparaisse pour Ronaldo sur penalty.',
    h3b: "Supercoupe à Hong Kong : punir le champion, ouvrir la place à Al-Nassr",
    p10: "À l’été 2025, la fédération saoudienne décide de déplacer la Supercoupe à Hong Kong, du 19 au 23 août, peu après la Coupe du monde des clubs où Al-Hilal représentait le pays.",
    li10: "Al-Hilal refuse de participer, invoquant le droit contractuel des joueurs à 28 jours de vacances ;",
    li11: "la fédération répond par une amende et l’exclusion du club de la Supercoupe suivante ;",
    li12: "la place libérée est occupée par une autre équipe, et le tableau du tournoi réintègre Al-Nassr, bien qu’il ne soit pas champion.",
    p11: "Sportivement, les champions les plus forts sont punis pour avoir protégé leurs joueurs ; commercialement, cela garantit que Ronaldo et Al-Nassr soient sur la bonne scène. Malgré cela, Al-Nassr perd encore la finale et Ronaldo reste sans trophée officiel en Arabie saoudite.",
    h4: 'Globe Soccer : le "Dubai d\'Or" comme système de compensation',
    p12: "Alors que la réalité sportive montre un Al-Nassr qui n’est ni le meilleur en Arabie ni en Asie, les Globe Soccer Awards à Dubaï servent de correction d’image.",
    li13: 'Créés en 2010 sous forte influence du cercle de Jorge Mendes, ces prix ont rapidement gagné la réputation de "Dubai d\'Or" : une gala de marketing, pas un consensus sportif.',
    li14: 'Ronaldo y a accumulé des prix de "Joueur de l’année" et, en 2020, a reçu le titre de "Player of the Century 2001-2020" lors d’un vaste vote des supporters.',
    p13: "Avec le départ pour l’Arabie saoudite, la gala s’adapte :",
    li15: 'En 2023, la catégorie "Best Middle East Player" apparaît ; le vainqueur, trois années de suite, est toujours Ronaldo.',
    li16: 'En 2023, le "Maradona Award" du meilleur buteur de l’année est aussi créé ; Ronaldo remporte la première édition avec le total brut de buts le plus élevé de 2023, en combinant championnat saoudien et qualification avec la sélection.',
    p14: "Tout cela se produit durant des années où :",
    li17: "la Saudi Pro League reconnaît Benzema et Mitrović comme figures principales — MVP et meilleur buteur dans un championnat dominé par Al-Hilal ;",
    li18: "l’AFC distingue Firmino et Mahrez comme les meilleurs de la Ligue des Champions asiatique.",
    p15: 'Autrement dit : dans les récompenses officielles, Ronaldo n’est plus le meilleur en rien ; à Dubaï, il y a toujours un trophée régional ou un prix de "meilleur buteur" qui l’attend.',
    p16: 'Il alimente lui-même cette dynamique : en 2024, il dit en interview qu’il préfère Globe Soccer au Ballon d’Or, qualifie la gala de Dubaï de "plus honnête" et utilise la scène pour renforcer le récit des 1 000 buts, tandis que la réalité sportive le place derrière les joueurs que la gala ignore.',
    h5: "Le tableau complet : championnat biaisé, récompense biaisée",
    li19: "Sur le terrain, la Saudi Pro League étire les penalties, le temps additionnel et les calendriers pour garder Ronaldo et Al-Nassr au centre de la scène — mais quand le niveau monte (Al-Hilal en championnat, la Ligue des Champions asiatique), ce sont toujours les autres qui soulèvent les trophées.",
    li20: 'Hors du terrain, Globe Soccer garantit que, quoi qu’il arrive, Ronaldo continue de repartir du Moyen-Orient avec des coupes individuelles : "Maradona Award", "Best Middle East Player", "Player of the Century".',
    p17: 'Pour un projet appelé "Ligue achetée", il est difficile de trouver un exemple plus pur : un écosystème prêt à tordre les règles sur le terrain et les critères en dehors pour protéger un produit — et qui ne peut pourtant pas cacher qu’en football vraiment important, l’Al-Nassr de Ronaldo n’a jamais été la meilleure équipe d’Arabie saoudite ni d’Asie.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export default function LigaCompradaSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  const items = [
    {
      key: "h1",
      title: c("h1"),
      content: (
        <>
          <p>{c("p1")}</p>
          <p>{c("p2")}</p>
        </>
      ),
    },
    {
      key: "h2",
      title: c("h2"),
      content: (
        <>
          <p>{c("p3")}</p>
          <h3>{c("h2a")}</h3>
          <p>{c("p4")}</p>
          <ul>
            <li>{c("li1")}</li>
            <li>{c("li2")}</li>
            <li>{c("li3")}</li>
          </ul>
          <p>{c("p5")}</p>
          <h3>{c("h2b")}</h3>
          <p>{c("p6")}</p>
          <ul>
            <li>{c("li4")}</li>
            <li>{c("li5")}</li>
            <li>{c("li6")}</li>
          </ul>
          <p>{c("p7")}</p>
        </>
      ),
    },
    {
      key: "h3",
      title: c("h3"),
      content: (
        <>
          <h3>{c("h3a")}</h3>
          <p>{c("p8")}</p>
          <ul>
            <li>{c("li7")}</li>
            <li>{c("li8")}</li>
            <li>{c("li9")}</li>
          </ul>
          <p>{c("p9")}</p>
          <h3>{c("h3b")}</h3>
          <p>{c("p10")}</p>
          <ul>
            <li>{c("li10")}</li>
            <li>{c("li11")}</li>
            <li>{c("li12")}</li>
          </ul>
          <p>{c("p11")}</p>
        </>
      ),
    },
    {
      key: "h4",
      title: c("h4"),
      content: (
        <>
          <p>{c("p12")}</p>
          <ul>
            <li>{c("li13")}</li>
            <li>{c("li14")}</li>
          </ul>
          <p>{c("p13")}</p>
          <ul>
            <li>{c("li15")}</li>
            <li>{c("li16")}</li>
          </ul>
          <p>{c("p14")}</p>
          <ul>
            <li>{c("li17")}</li>
            <li>{c("li18")}</li>
          </ul>
          <p>{c("p15")}</p>
          <p>{c("p16")}</p>
        </>
      ),
    },
    {
      key: "h5",
      title: c("h5"),
      content: (
        <>
          <ul>
            <li>{c("li19")}</li>
            <li>{c("li20")}</li>
          </ul>
          <p>{c("p17")}</p>
        </>
      ),
    },
  ];

  return (
    <SectionWrapper
      id="liga-comprada"
      label={t("label_liga")}
      title={c("title")}
      dark
    >
      <p>{c("intro")}</p>
      <SectionAccordionList items={items} dark />
    </SectionWrapper>
  );
}
