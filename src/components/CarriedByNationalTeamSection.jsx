import React from "react";
import RichText from "./RichText";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const tournamentsEn = [
  {
    year: "World Cup 2010",
    title: "one goal in four games - the sixth of seven against North Korea",
    content:
      "In South Africa, Portugal reached only the round of 16. They finished second in Group G behind Brazil, with two goalless draws (Ivory Coast and Brazil) and a 7-0 over North Korea.",
    points: [
      "Group stage: Ronaldo scored once in three matches - the sixth goal in the 7-0 against North Korea. In the other two games, including the 0-0 with Brazil, he was goalless and without an assist.",
      "Round of 16 vs Spain: Portugal lost 0-1 to a David Villa goal. Ronaldo failed to score, failed to assist, and never produced the moment that might have changed the tie. Spain went on to win the World Cup.",
    ],
    conclusion:
      "One goal in four games, the sixth in a seven-goal rout against the weakest team in the group. In the match that ended Portugal's tournament, he offered no decisive contribution - the first entry in a pattern that would repeat across the next decade.",
  },
  {
    year: "Euro 2012",
    title: "penalties — but not his",
    content:
      "Under Paulo Bento, Portugal reached the semi-finals in Poland and Ukraine. Ronaldo scored three goals at the tournament — two against the Netherlands in the group stage and a decisive header against the Czech Republic in the quarter-final. The numbers were acceptable. The context, less so.",
    points: [
      "Group stage: two goals against an already eliminated Netherlands side, in a match without pressure. Against Germany, in the game that would decide first place in the group, Ronaldo was neutralized. Portugal lost 1–0 and finished second.",
      "Quarter-final vs Czech Republic: 1–0. Ronaldo produced one of his best performances for Portugal — active, present, vertical — and scored the only goal with a 79th-minute header that sent the team into the semi-finals.",
      "Semi-final vs Spain: 0–0 after extra time, Spain won 4–2 on penalties. In a semi-final against Spain — the dominant side of the era — Ronaldo was contained for 120 minutes without creating the moment that separated the teams. The shootout ended 4–2 before his turn came. The captain never took a kick.",
    ],
    conclusion:
      "Portugal were one step from the final. When everything came down to penalties, the player supposed to make the difference was a spectator. In the only truly big match of the tournament — against Spain — Ronaldo was not decisive.",
  },
  {
    year: "World Cup 2014",
    title: "carried by no one — eliminated in the group stage",
    content:
      "Brazil 2014 was Portugal's worst World Cup performance in a generation. Drawn with Germany, USA and Ghana, they never got out of the group. Ronaldo arrived clearly below his physical peak, carrying a knee problem. The numbers were poor, but the tournament story is worse.",
    points: [
      "Portugal 0–4 Germany: a historic defeat that effectively decided the group on day one. Ronaldo was reduced to speculative efforts from distance as Germany dominated.",
      "Portugal 2–2 USA: Portugal were minutes from elimination. Ronaldo had been quiet for most of the match but delivered the 95th-minute cross that Varela headed in for 2-2 — an assist that only postponed the problem.",
      "Portugal 2–1 Ghana: Ronaldo scored his only goal of the tournament, but Portugal were eliminated on goal difference. Both Portugal and the USA finished on four points, yet the USA advanced with a better goal difference while Portugal went home.",
    ],
    conclusion:
      "One goal and one assist in three games, a 4–0 collapse, and elimination in the group stage. Brazil 2014 is remembered far more for the scale of the defeat to Germany than for anything Ronaldo did.",
  },
  {
    year: "Euro 2016",
    title: "title decided by Nani, Quaresma, Éder, Patrício and Pepe",
    content:
      "The Player of the Tournament and top scorer was Antoine Griezmann, with 6 goals — twice Ronaldo. UEFA's verdict: Ronaldo was not the central figure of the tournament.\n\nBefore the knockouts, Portugal barely survived the group stage. Three draws, 3 points, third in Group F — behind Iceland and Hungary. They qualified only because the expanded format allowed the four best thirds to advance. Ronaldo didn't score in the first two matches, mocked Iceland's 'small mentality' after a 1–1 draw, and famously threw a journalist's microphone into a lake during training. The campaign was rescued by a 3–3 comeback with Hungary when Portugal trailed 1–3 with eight minutes left.",
    points: [
      "Round of 16 vs Croatia: Portugal had not had a single shot on target until the 117th minute. The goal came from a transition where Ronaldo's shot was saved and Quaresma headed in the 1-0.",
      "Quarter vs Poland: the shootout winner was Quaresma (5-3) after a Rui Patrício save.",
      "Final vs France: Ronaldo left injured at 25'. From there Rui Patrício made decisive saves, Pepe led the defence and Éder scored the title-winning goal at 109'.",
    ],
    conclusion:
      "International coverage was clear: Portugal surprised France and won the Euros despite Ronaldo's injury, thanks to Éder's goal and Patrício's heroics. The claim that Ronaldo 'carried' Portugal doesn't match the chronology of the match.",
  },
  {
    year: "Nations League 2019",
    title: "title goal is Guedes, the play is Bernardo",
    content:
      "In the semi vs Switzerland Ronaldo scored a hat-trick in a 3-1 win — his most significant contribution in the tournament, and the one most cited by those who attribute the trophy to him. The final, however, tells a different story... in final vs the Netherlands Portugal won 1-0.",
    points: [
      "The goal is by Gonçalo Guedes from outside the box.",
      "The move originates from a run and pass by Bernardo Silva; coverage highlighted that the trophy was won by 'Guedes' strike after Bernardo's brilliant work.'",
    ],
    conclusion:
      "Ronaldo was on the pitch, but the second official trophy in Portugal's history was again decided by others: Éder in 2016, Guedes in 2019.",
  },
  {
    year: "Euro 2020",
    title: "group-stage Golden Boot, invisible in the knockout",
    content:
      "Ronaldo was the tournament's top scorer (5 goals) in Euro 2020, but all in the group stage. In the round of 16 vs Belgium, Portugal lost 1-0.",
    points: [],
    quote: `The Athletic summed that game up: "Ronaldo blank, the Hazards in the spotlight, and Pepe finally loses his head." When the level rose and someone was needed to break a strong defensive block, it was others — Thorgan Hazard, De Bruyne, Courtois — who decided. The group-stage goals secure the Golden Boot, but they don't change the national team's fate.`,

    conclusion:
      "The pattern is consistent: when the opposition is strongest and the margin for error is zero. He fails to score, fails to assist, and fails to change the game. The moments that define Portugal's tournament runs are created by others. When it matters most, he is not the answer.",
  },
  {
    year: "World Cup 2022",
    title: "Ramos, Bruno and Pepe step up",
    content:
      "In Qatar the contrast was stark. Ronaldo arrived in the worst form of his career — six months after leaving Manchester United in acrimonious circumstances.",
    points: [
      'Group stage: one controversial penalty against Ghana (the Ghanaian coach called it "a special gift from the referee"); a goal against Uruguay officially credited to Bruno Fernandes after technology showed Ronaldo had not touched the ball; substituted in the final group game against South Korea with Fernando Santos publicly saying he "didn\'t like it, not at all" when Ronaldo reacted badly.',
      "Round of 16 vs Switzerland: Santos drops him. Gonçalo Ramos, 21, on his first start, scores a hat-trick. Portugal win 6-1.",
      "Quarter-finals vs Morocco: brought on at half-time with Portugal a goal down. 40 minutes, no shots on target, no assists. Portugal are eliminated. Ronaldo leaves the pitch in tears.",
    ],
    conclusion:
      "In five games across the 2022 World Cup, Ronaldo scored once — a penalty that Ghana's coach called a refereeing error. He did not assist a single goal. Against Morocco in the quarter-final, he did not even start; when he came on, he changed nothing. The player of the tournament for Portugal, by any reasonable measure, was Bruno Fernandes. The moment of the tournament was Gonçalo Ramos's hat-trick — in the other game Ronaldo didn't start.",
  },
  {
    year: "Euro 2024",
    title: "the worst striker in the tournament… always on the pitch",
    content:
      "At Euro 2024, the drop in output is even more visible, but his time on the pitch does not decrease. He started all five of Portugal's games, always as captain, and played every single minute available — 510 minutes including extra time against Slovenia and France. He did not score a single goal. With 23 attempts and an xG of 3.52, WhoScored named him the biggest xG underperformer of the entire tournament; only Kylian Mbappé took more shots (24), and no player in Euro history since 1980 had taken as many shots without scoring and still stayed on the pitch as an undisputed starter. A separate breakdown listed him with 0 goals, 1 assist, 23 shots, 3.47–3.52 xG, 5 big chances missed and 1 missed penalty.",
    points: [
      "Round of 16 vs Slovenia: 120 minutes, no goal, and a missed penalty in extra time that leaves him in tears on the pitch. Portugal only survive because Diogo Costa stops a one-on-one from Šeško in extra time and then saves all three Slovenian penalties in the shootout, while Ronaldo merely converts his own kick in the series. By the end of the game he has filled the shot column again, but the decisive actions belong to the goalkeeper.",
      'Quarter-finals vs France: again 120 minutes, again no goal. <a href="https://portugoal.net/selecao/3981-portugal-vs-france-player-ratings" target="_blank"><span style="color:#89CFF0">PortuGOAL</span></a> rates him 4.5/10 — the lowest mark in the team — highlighting that he recorded the worst pass completion and the fewest touches of any outfield player on the pitch. He stays on until the penalties and converts his attempt, but it is João Félix who hits the post and the French who score all five to knock Portugal out.',
    ],
    conclusion:
      "Across the tournament, he had more shots than any other player except Mbappé and the highest xG underperformance of anyone at Euro 2024. He scored none of them.",
  },
  {
    year: "Nations League 2025",
    title: "a title, but who really decided it?",
    content:
      "Portugal won its second Nations League in Munich, beating Spain 5-3 on penalties after a 2-2 draw in extra time, becoming the first team to lift the trophy twice. On paper it looks like a perfect coronation: Ronaldo scores in the final, makes the equaliser that sends the match to extra time, and finishes as one of the competition's top scorers with 8 goals in 9 matches. In reality, the official UEFA MVP was Nuno Mendes - with 6 assists, the goal that reignited the final and Lamine Yamal neutralised - and the real top scorer was Viktor Gyökeres, with 9 goals. The context softens the narrative quite a bit.",
    points: [
      "Semi-final vs Germany (2-1): Portugal suffered through the first hour before Francisco Conceição equalised with a sensational long-range strike - nominated by UEFA for Goal of the Tournament and named Player of the Match. The hard work - recovering from a poor first hour, changing the territory of the game, creating chances - came from the team. Ronaldo made it 2-1 with a tap-in after a Nuno Mendes cross assisted by Bruno Fernandes. An important goal, but built by others.",
      "Final vs Spain: Spain dominated the first half and went 2-0 up (Zubimendi, Oyarzabal). It was Nuno Mendes - scoring the first international goal of his career - who brought Portugal back, before Ronaldo's equaliser on 61', also inside the area, with a first-time finish after a deflected cross. Technically more than a tap-in, but with the heavy lifting already done. Neither side scored the third goal in 120 minutes.",
      "Penalties: Diogo Costa saved Morata's effort - the real hinge of the trophy. Rúben Neves scored the title-winning penalty. The names that decided qualification, on and off the pitch, were Nuno Mendes, Vitinha, Diogo Costa and Rúben Neves.",
    ],
    conclusion:
      "Ronaldo scores - including a crucial equaliser in the final - but the trophy rests on others: Nuno Mendes (MVP, goal, 6 assists, Yamal neutralised), Diogo Costa (decisive save in the shootout), Rúben Neves (title-winning penalty) and Francisco Conceição (semi-final stunner). A more present Ronaldo than in previous editions - a specialist of micro-distances, a finisher of moves made by the team - but far from the man who won the title.",
  },
];

const tournamentsPt = [
  {
    year: "World Cup 2010",
    title: "um golo em quatro jogos — o sexto de sete contra a Coreia do Norte",
    content:
      "Na África do Sul, Portugal chegou apenas aos oitavos de final. Ficou em segundo no Grupo G atrás do Brasil, com dois empates sem golos (Costa do Marfim e Brasil) e um 7–0 sobre a Coreia do Norte.",
    points: [
      "Fase de grupos: Ronaldo marcou um golo em três jogos — o sexto no 7-0 contra a Coreia do Norte. Nos outros dois jogos, inclusive o 0-0 com o Brasil, ficou em branco e sem assistências.",
      "Oitavos vs Espanha: Portugal perdeu 0-1 com um golo de David Villa. Ronaldo não marcou, não assistiu e não produziu o momento que pudesse ter mudado a eliminatória.",
    ],
    conclusion:
      "Um golo em quatro jogos, o sexto numa goleada contra a equipa mais fraca do grupo. No jogo que acabou com a campanha de Portugal, não teve uma contribuição decisiva — o primeiro sinal de um padrão que se repetiria na década seguinte.",
  },
  {
    year: "Euro 2012",
    title: "penáltis — mas não os seus",
    content:
      "Com Paulo Bento, Portugal chegou às meias-finais na Polónia e na Ucrânia. Ronaldo marcou três golos no torneio — dois frente à Holanda na fase de grupos e um cabeceamento decisivo frente à República Checa nos quartos-de-final. Os números eram aceitáveis. O contexto, menos.",
    points: [
      "Fase de grupos: dois golos contra a Holanda já eliminada, num jogo sem pressão. Contra a Alemanha, num encontro que definiria o primeiro lugar do grupo, Ronaldo foi anulado. Portugal perdeu 1–0 e ficou em segundo.",
      "Quartos vs República Checa: 1–0. Ronaldo assinou uma das suas melhores exibições pela seleção — ativo, presente, vertical — e marcou o único golo com um cabeceamento aos 79' que levou a equipa às meias-finais.",
      "Meia-final vs Espanha: 0–0 após prolongamento, Espanha venceu 4–2 nos penáltis. Numa meia-final com a Espanha — a seleção mais dominante da era —, Ronaldo foi contido durante 120 minutos sem conseguir criar o momento que separasse as equipas. A série de penáltis terminou em 4–2 antes que chegasse a sua vez. O capitão nunca bateu.",
    ],
    conclusion:
      "Portugal esteve a um passo da final. Quando tudo se resolveu nos penáltis, o jogador que supostamente faria a diferença foi espectador. No único jogo verdadeiramente grande do torneio — contra a Espanha — Ronaldo não foi decisivo.",
  },
  {
    year: "World Cup 2014",
    title: "ninguém carregou — eliminado na fase de grupos",
    content:
      "O Brasil 2014 foi o pior Mundial de Portugal numa geração. Integrado num grupo com Alemanha, EUA e Gana, não passou da fase de grupos. Ronaldo chegou claramente abaixo do pico físico, com um problema no joelho. Os números foram fracos, mas a história do torneio é ainda pior.",
    points: [
      "Portugal 0–4 Alemanha: uma derrota histórica que praticamente decidiu o grupo logo no primeiro dia. Ronaldo limitou-se a remates especulativos à distância.",
      "Portugal 2–2 EUA: Portugal esteve minutos de ser eliminado. Ronaldo esteve discreto, mas fez o cruzamento aos 95' que Varela cabeceou para 2-2 — uma assistência que apenas adiou o problema.",
      "Portugal 2–1 Gana: Ronaldo marcou o único golo do torneio, mas Portugal foi eliminado no saldo de golos. Portugal e os EUA terminaram com quatro pontos, mas os EUA avançaram com melhor diferença de golos enquanto Portugal regressou a casa.",
    ],
    conclusion:
      "Um golo e uma assistência em três jogos, uma derrota por 4–0 e eliminação na fase de grupos. O Brasil 2014 fica mais marcado pela escala da derrota frente à Alemanha do que por algo que Ronaldo tenha feito.",
  },
  {
    year: "Euro 2016",
    title: "título decidido por Nani, Quaresma, Éder, Patrício e Pepe",
    content:
      "O Jogador do Torneio e melhor marcador foi Antoine Griezmann, com 6 golos — o dobro de Ronaldo. O próprio veredicto da UEFA: Ronaldo não foi a figura central do torneio.\n\nAntes dos eliminatórios, Portugal mal sobreviveu à fase de grupos. Três empates, 3 pontos, terceiro lugar no Grupo F — atrás da Islândia e da Hungria. Qualificaram-se apenas porque o formato ampliado permitiu aos quatro melhores terceiros classificados avançar. Ronaldo não marcou nos primeiros dois jogos, ridicularizou publicamente a 'pequena mentalidade' da Islândia após um empate 1–1, e atirou o microfone de um jornalista para um lago durante um treino. A campanha foi salva por uma recuperação de 3–3 contra a Hungria, quando Portugal perdia 1–3 com oito minutos por jogar.",
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
      "Na meia-final contra a Suíça, Ronaldo marca um hat-trick num triunfo por 3–1 — a sua contribuição mais significativa do torneio, e a que é mais citada por quem lhe atribui o título. A final, porém, conta outra história: na final contra os Países Baixos, Portugal venceu 1-0.",
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
      'O The Athletic resumiu esse jogo numa frase: "Ronaldo em branco, os Hazards em destaque, e Pepe perde finalmente a cabeça". Quando o nível subiu e era preciso alguém para partir um bloco forte, foram outros (Thorgan Hazard, De Bruyne, Courtois) a decidir.\n\nO padrão é consistente: quando o adversário é mais forte e a margem de erro é zero. Ele falha em marcar, falha em assistir e falha em mudar o jogo. Os momentos que definem as campanhas do Portugal são criados por outros. Quando mais importa, ele não é a resposta.',
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
  {
    year: "Nations League 2025",
    title: "um título, mas quem o decidiu mesmo?",
    content:
      "Portugal conquistou a segunda Liga das Nações em Munique, batendo a Espanha por 5-3 nos penáltis depois de um empate 2-2 no prolongamento, tornando-se a primeira selecção a ganhar o troféu duas vezes. À primeira vista, parece uma coroação perfeita: Ronaldo marca na final, faz o empate que leva o jogo ao prolongamento e termina como um dos melhores marcadores da competição, com 8 golos em 9 jogos. Na realidade, o MVP oficial da UEFA foi Nuno Mendes — com 6 assistências, o golo que reacendeu a final e Lamine Yamal anulado — e o verdadeiro melhor marcador foi Viktor Gyökeres, com 9 golos. O contexto atenua bastante a narrativa.",
    points: [
      "Meia-final vs Alemanha (2-1): Portugal sofreu durante a primeira hora antes de Francisco Conceição empatar com um remate sensacional de fora da área — nomeado pela UEFA para Golo do Torneio e escolhido como Player of the Match. O trabalho duro — recuperar de uma primeira hora má, mudar o território do jogo, criar ocasiões — veio da equipa. Ronaldo fez o 2-1 com um tap-in após cruzamento de Nuno Mendes assistido por Bruno Fernandes. Um golo importante, mas construído por outros.",
      "Final vs Espanha: a Espanha dominou a primeira parte e chegou ao 2-0 (Zubimendi, Oyarzabal). Foi Nuno Mendes — a marcar o primeiro golo internacional da carreira — quem trouxe Portugal de volta, antes do empate de Ronaldo aos 61', também dentro da área, com uma finalização de primeira após um cruzamento desviado. Tecnicamente mais do que um tap-in, mas com o trabalho pesado já feito. Nenhuma das equipas marcou o terceiro golo em 120 minutos.",
      "Penáltis: Diogo Costa defendeu o remate de Morata — a verdadeira charneira do troféu. Rúben Neves marcou o penálti do título. Os nomes que decidiram a qualificação, dentro e fora de campo, foram Nuno Mendes, Vitinha, Diogo Costa e Rúben Neves.",
    ],
    conclusion:
      "Ronaldo marca — incluindo um empate crucial na final — mas o troféu fica nas mãos de outros: Nuno Mendes (MVP, golo, 6 assistências, Yamal anulado), Diogo Costa (defesa decisiva no desempate), Rúben Neves (penálti do título) e Francisco Conceição (golaço na meia-final). Um Ronaldo mais presente do que em edições anteriores — especialista de micro-distâncias, finalizador de jogadas feitas pela equipa — mas longe de ser o homem que ganhou o título.",
  },
];

const tournamentsEs = [
  {
    year: "World Cup 2010",
    title:
      "un gol en cuatro partidos — el sexto de siete contra Corea del Norte",
    content:
      "En Sudáfrica, Portugal llegó solo a los octavos de final. Quedó segundo en el Grupo G detrás de Brasil, con dos empates sin goles (Costa de Marfil y Brasil) y un 7–0 frente a Corea del Norte.",
    points: [
      "Fase de grupos: Ronaldo marcó un gol en tres partidos — el sexto en el 7-0 contra Corea del Norte. En los otros dos partidos, incluido el 0-0 con Brasil, se quedó en blanco y sin asistencias.",
      "Octavos vs España: Portugal perdió 0-1 por un gol de David Villa. Ronaldo no marcó, no asistió y no produjo el momento que podría haber cambiado la eliminatoria.",
    ],
    conclusion:
      "Un gol en cuatro partidos, el sexto en una goleada contra el equipo más débil del grupo. En el partido que acabó la participación de Portugal, no ofreció una contribución decisiva — la primera señal de un patrón que se repetiría en la década siguiente.",
  },
  {
    year: "Euro 2012",
    title: "penaltis — pero no los suyos",
    content:
      "Con Paulo Bento, Portugal llegó a las semifinales en Polonia y Ucrania. Ronaldo marcó tres goles en el torneo — dos frente a Holanda en la fase de grupos y un cabezazo decisivo frente a la República Checa en cuartos de final. Los números eran aceptables. El contexto, menos.",
    points: [
      "Fase de grupos: dos goles contra una Holanda ya eliminada, en un partido sin presión. Contra Alemania, en el encuentro que decidiría el primer puesto del grupo, Ronaldo fue anulado. Portugal perdió 1–0 y quedó segundo.",
      "Cuartos vs República Checa: 1–0. Ronaldo firmó una de sus mejores actuaciones con la selección — activo, presente, vertical — y marcó el único gol con un cabezazo en el minuto 79 que metió al equipo en las semifinales.",
      "Semifinal vs España: 0–0 tras la prórroga, España ganó 4–2 en penaltis. En una semifinal contra España — la selección más dominante de la era —, Ronaldo estuvo contenido durante 120 minutos sin conseguir crear el momento que separara a los equipos. La tanda terminó 4–2 antes de que llegara su turno. El capitán nunca pateó.",
    ],
    conclusion:
      "Portugal estuvo a un paso de la final. Cuando todo se decidió en los penaltis, el jugador que supuestamente haría la diferencia fue un espectador. En el único partido verdaderamente grande del torneo — contra España — Ronaldo no fue decisivo.",
  },
  {
    year: "World Cup 2014",
    title: "nadie cargó — eliminado en la fase de grupos",
    content:
      "Brasil 2014 fue la peor actuación de Portugal en un Mundial en una generación. Encajado en un grupo con Alemania, EEUU y Ghana, no pasó de la fase de grupos. Ronaldo llegó claramente por debajo de su pico físico, con un problema de rodilla. Los números fueron malos, pero la historia del torneo es todavía peor.",
    points: [
      "Portugal 0–4 Alemania: una derrota histórica que prácticamente decidió el grupo el primer día. Ronaldo se redujo a intentos especulativos desde fuera mientras Alemania dominaba.",
      "Portugal 2–2 EEUU: Portugal estuvo a minutos de la eliminación. Ronaldo estuvo discreto la mayor parte del partido pero dio el centro en el minuto 95 que Varela remató de cabeza para el 2-2 — una asistencia que solo retrasó el problema.",
      "Portugal 2–1 Ghana: Ronaldo marcó su único gol del torneo, pero Portugal fue eliminado por diferencia de goles. Portugal y EEUU terminaron con cuatro puntos, pero EEUU avanzó con mejor diferencia de goles mientras Portugal volvió a casa.",
    ],
    conclusion:
      "Un gol y una asistencia en tres partidos, una derrota por 4–0 y la eliminación en la fase de grupos. Brasil 2014 se recuerda más por la escala de la derrota ante Alemania que por algo que hiciera Ronaldo.",
  },
  {
    year: "Euro 2016",
    title: "título decidido por Nani, Quaresma, Éder, Patrício y Pepe",
    content:
      "El Jugador del Torneo y máximo goleador fue Antoine Griezmann, con 6 goles — el doble que Ronaldo. El propio veredicto de la UEFA: Ronaldo no fue la figura central del torneo.\n\nAntes de las eliminatorias, Portugal apenas sobrevivió a la fase de grupos. Tres empates, 3 puntos, tercer puesto en el Grupo F — por detrás de Islandia y Hungría. Se clasificaron solo porque el formato ampliado permitió que avanzaran los cuatro mejores terceros. Ronaldo no marcó en los dos primeros partidos, se burló públicamente de la 'pequeña mentalidad' de Islandia tras un 1–1, y lanzó el micrófono de un periodista al lago durante un entrenamiento. La campaña se salvó con una remontada 3–3 contra Hungría, cuando Portugal iba perdiendo 1–3 con ocho minutos por jugar.",
    points: [
      "Octavos contra Croacia: Portugal no había hecho un solo remate a puerta hasta el minuto 117. El gol llega en una transición en la que el disparo de Ronaldo es detenido y Quaresma remata de cabeza para el 1-0.",
      "Cuartos contra Polonia: en la tanda de penaltis, es Quaresma quien convierte el penalti decisivo (5-3), tras una parada de Rui Patrício.",
      "Final contra Francia: Ronaldo se lesiona en el minuto 25. A partir de ahí, Rui Patrício hace varias paradas decisivas, Pepe lidera la defensa y Éder marca el gol del título en el minuto 109.",
    ],
    conclusion:
      'Las crónicas internacionales fueron claras: Portugal "sorprendió a Francia y ganó la Euro pese a la lesión de Ronaldo, gracias al gol de Éder y a la actuación heroica de Patrício". La idea de que "llevó a Portugal al título" no resiste la cronología del partido.',
  },
  {
    year: "Nations League 2019",
    title: "Liga de Naciones 2019",
    content:
      "En la semifinal contra Suiza, Ronaldo marcó un hat-trick en una victoria por 3–1 — su contribución más significativa del torneo, y la que más citan quienes le atribuyen el título. La final, sin embargo, cuenta otra historia: en la final contra los Países Bajos, Portugal ganó 1-0.",
    points: [
      "El gol es de Gonçalo Guedes, desde fuera del área.",
      'La jugada nace de una carrera y un pase de Bernardo Silva; la BBC destaca que el trofeo se gana con "el disparo de Guedes tras el trabajo brillante de Bernardo".',
    ],
    conclusion:
      "Ronaldo está en el campo, pero el segundo título oficial de la historia de Portugal vuelve a decidirlo otro: Éder en 2016, Guedes en 2019.",
  },
  {
    year: "Euro 2020",
    title: "Euro 2020",
    content:
      "En la Euro 2020, Ronaldo es el máximo goleador del torneo (5 goles), pero todos en la fase de grupos. En octavos contra Bélgica, Portugal pierde 1-0.",
    points: [],
    quote:
      'The Athletic resumió ese partido en una frase: "Ronaldo en blanco, los Hazard en primer plano y Pepe perdiendo finalmente los nervios". Cuando subió el nivel y hacía falta alguien que rompiera un bloque fuerte, fueron otros — Thorgan Hazard, De Bruyne, Courtois — quienes decidieron. Los goles de la fase de grupos aseguran la Bota de Oro, pero no cambian el destino de la selección.',
    conclusion:
      "La frase honesta, mirando desde la Euro 2016 hasta hoy, no es 'Ronaldo llevó a la selección'. Es otra: Portugal pasó una década vendiendo la idea de que lo necesitaba para todo, pero siempre que hubo que decidir un torneo, casi siempre fueron sus compañeros quienes hicieron el trabajo pesado.",
  },
  {
    year: "Mundial 2022",
    title: "Mundial 2022",
    content: "En Qatar, el contraste es brutal.",
    points: [
      'Fase de grupos: Ronaldo marca un penalti contra Ghana en una jugada que la FIFA elogió como "genial" en la forma en que lo ganó, pero que el seleccionador ghanés calificó de error arbitral.',
      "Octavos contra Suiza: Fernando Santos lo deja fuera del once titular. En su lugar, Gonçalo Ramos, con 21 años, marca un hat-trick; Pepe también marca y Portugal gana 6-1.",
      "Cuartos contra Marruecos: entra desde el banquillo, influye poco y se marcha llorando.",
    ],
    conclusion:
      "En la mejor actuación del Portugal en un Mundial desde 1966, Ronaldo ni siquiera estaba sobre el césped. Los nombres que cargan con el peso son Ramos, Bruno y Pepe.",
  },
  {
    year: "Euro 2024",
    title: "Euro 2024",
    content:
      "En la Euro 2024, la caída de rendimiento es aún más visible, pero su tiempo en el campo no disminuye. Jugó los cinco partidos de Portugal, siempre como titular, acumulando prácticamente todos los minutos disponibles — incluyendo 120 minutos contra Eslovenia. No marcó ni un solo gol en juego abierto. Con 23 intentos y un xG de 3,52, WhoScored lo señaló como el mayor underperformer de xG de todo el torneo.",
    points: [
      "Octavos vs Eslovenia: 120 minutos, sin gol, un penalti fallado en la prórroga que lo dejó llorando en el césped. Portugal avanza solo porque Diogo Costa detiene los tres penaltis eslovenos en la tanda.",
      'Cuartos vs Francia: <a href="https://portugoal.net/selecao/3981-portugal-vs-france-player-ratings" target="_blank"><span style="color:#89CFF0">PortuGOAL</span></a> le da 4.5/10 — la peor tasa de pases completados y menos toques de cualquier jugador de campo. Es sustituido solo bien entrada la segunda mitad.',
    ],
    conclusion:
      "Tuvo más tiros que cualquier otro jugador en el torneo. No convirtió ninguno.",
  },
  {
    year: "Nations League 2025",
    title: "un título, pero ¿quién lo decidió de verdad?",
    content:
      "Portugal conquistó su segunda Liga de Naciones en Múnich, derrotando a España 5-3 en los penaltis después de un empate 2-2 en la prórroga, convirtiéndose en la primera selección en ganar el trofeo dos veces. Sobre el papel parece una coronación perfecta: Ronaldo marca en la final, hace el empate que lleva el partido a la prórroga y termina como uno de los máximos goleadores de la competición, con 8 goles en 9 partidos. En realidad, el MVP oficial de la UEFA fue Nuno Mendes — con 6 asistencias, el gol que reavivó la final y Lamine Yamal anulado — y el verdadero máximo goleador fue Viktor Gyökeres, con 9 goles. El contexto suaviza bastante el relato.",
    points: [
      "Semifinal vs Alemania (2-1): Portugal sufrió durante la primera hora antes de que Francisco Conceição empatara con un disparo sensacional desde fuera del área — nominado por la UEFA como Gol del Torneo y elegido Jugador del Partido. El trabajo duro — recuperarse de una mala primera hora, cambiar el territorio del partido, crear ocasiones — vino del equipo. Ronaldo puso el 2-1 con un toque a bocajarro tras un centro de Nuno Mendes asistido por Bruno Fernandes. Un gol importante, pero construido por otros.",
      "Final vs España: España dominó la primera mitad y se puso 2-0 (Zubimendi, Oyarzabal). Fue Nuno Mendes — marcando el primer gol internacional de su carrera — quien devolvió a Portugal al partido, antes del empate de Ronaldo en el 61', también dentro del área, con una volea de primera tras un centro desviado. Técnicamente más que un toque a bocajarro, pero con el trabajo pesado ya hecho. Ninguno de los dos equipos marcó el tercero en 120 minutos.",
      "Penaltis: Diogo Costa detuvo el remate de Morata — la verdadera bisagra del trofeo. Rúben Neves marcó el penalti del título. Los nombres que decidieron la clasificación, dentro y fuera del campo, fueron Nuno Mendes, Vitinha, Diogo Costa y Rúben Neves.",
    ],
    conclusion:
      "Ronaldo marca — incluido un empate crucial en la final — pero el trofeo queda en manos de otros: Nuno Mendes (MVP, gol, 6 asistencias, Yamal anulado), Diogo Costa (parada decisiva en la tanda), Rúben Neves (penalti del título) y Francisco Conceição (golazo en la semifinal). Un Ronaldo más presente que en ediciones anteriores — especialista de microdistancias, rematador de jugadas hechas por el equipo — pero lejos de ser el hombre que ganó el título.",
  },
];

const tournamentsFr = [
  {
    year: "World Cup 2010",
    title: "un but en quatre matches — le sixième contre la Corée du Nord",
    content:
      "En Afrique du Sud, le Portugal n'a atteint que les huitièmes de finale. Il a terminé deuxième du groupe G derrière le Brésil, avec deux nuls sans but et un 7–0 contre la Corée du Nord.",
    points: [
      "Phase de groupes : un seul but de Ronaldo, dans la large victoire 7-0 contre la Corée du Nord.",
      "Huitièmes vs Espagne : défaite 0-1 (David Villa). Ronaldo n'a pas fait la différence.",
    ],
    conclusion:
      "Un seul but dans le tournoi, et aucune contribution décisive lorsque cela comptait.",
  },
  {
    year: "Euro 2012",
    title: "tirs au but — mais pas les siens",
    content:
      "Avec Paulo Bento, le Portugal atteint les demi-finales en Pologne et en Ukraine. Ronaldo a marqué trois buts dans le tournoi — deux contre les Pays-Bas en phase de groupes et une tête décisive contre la République tchèque en quarts de finale. Les chiffres étaient acceptables. Le contexte, beaucoup moins.",
    points: [
      "Phase de groupes : deux buts contre des Pays-Bas déjà éliminés, dans un match sans pression. Contre l'Allemagne, lors du match qui devait décider de la première place du groupe, Ronaldo a été neutralisé. Le Portugal a perdu 1-0 et a terminé deuxième.",
      "Quart vs République tchèque : 1-0. Ronaldo a signé l'une de ses meilleures prestations avec la sélection — actif, présent, vertical — et a marqué l'unique but d'une tête à la 79e minute qui a envoyé l'équipe en demi-finales.",
      "Demi vs Espagne : 0-0 après prolongation, l'Espagne a gagné 4-2 aux tirs au but. Dans une demi-finale contre l'Espagne — la sélection la plus dominante de l'époque —, Ronaldo a été contenu pendant 120 minutes sans créer le moment qui séparait les équipes. La séance s'est terminée à 4-2 avant son tour. Le capitaine n'a jamais tiré.",
    ],
    conclusion:
      "Le Portugal était à un pas de la finale. Quand tout s'est joué aux tirs au but, le joueur censé faire la différence est resté spectateur. Dans le seul match vraiment majeur du tournoi — contre l'Espagne —, Ronaldo n'a pas été décisif.",
  },
  {
    year: "World Cup 2014",
    title: "éliminé en phase de groupes",
    content:
      "Le Brésil 2014 a été le pire Mondial du Portugal depuis une génération. Avec l'Allemagne, les États-Unis et le Ghana dans le groupe, l'équipe n'a pas dépassé la phase de groupes. Ronaldo est arrivé loin de son meilleur niveau, gêné par un problème au genou. Les chiffres étaient mauvais, mais l'histoire du tournoi l'est encore plus.",
    points: [
      "Portugal 0–4 Allemagne : une défaite historique qui a pratiquement décidé du groupe dès le premier jour. Ronaldo s'est contenté de frappes spéculatives de loin pendant que l'Allemagne dominait.",
      "Portugal 2–2 États-Unis : le Portugal a été à quelques minutes de l'élimination. Ronaldo a été discret, mais a donné le centre à la 95e minute que Varela a repris de la tête pour le 2-2 — une passe décisive qui n'a fait que retarder le problème.",
      "Portugal 2–1 Ghana : Ronaldo a marqué le seul but du tournoi, mais le Portugal a été éliminé à la différence de buts. Le Portugal et les États-Unis ont terminé avec quatre points, mais les États-Unis sont passés avec une meilleure différence de buts tandis que le Portugal rentrait à la maison.",
    ],
    conclusion:
      "Un but et une passe décisive en trois matches, une défaite 4-0 et une élimination en phase de groupes. Le Brésil 2014 reste bien plus associé à l'ampleur de la défaite contre l'Allemagne qu'à ce qu'a fait Ronaldo.",
  },
  {
    year: "Euro 2016",
    title: "titre décidé par Nani, Quaresma, Éder, Patrício et Pepe",
    content:
      "L'Euro 2016 se termine par un titre pour le Portugal, mais Ronaldo se blesse en finale et d'autres joueurs prennent le relais.",
    points: [
      "Huitièmes vs Croatie : match serré, but en prolongation.",
      "Quarts vs Pologne : victoire aux tirs au but.",
      "Finale vs France : Ronaldo sorti, Éder marque en prolongation.",
    ],
    conclusion: "Le titre collectif n'est pas uniquement grâce à Ronaldo.",
  },
  {
    year: "Nations League 2019",
    title: "Ligue des Nations 2019",
    content:
      "En demi-finale Ronaldo marque un triplé, mais la finale est remportée grâce à un but de Guedes.",
    points: [
      "Le but du titre : Guedes.",
      "La combinaison : une action née d'une passe de Bernardo Silva.",
    ],
    conclusion:
      "Le trophée est décidé par plusieurs contributions, pas seulement une star.",
  },
  {
    year: "Euro 2020",
    title: "Euro 2020",
    content:
      "Ronaldo termine meilleur buteur de la phase de groupes mais reste discret en phase à élimination directe.",
    points: [],
    quote:
      "The Athletic a résumé le match en indiquant que Ronaldo fut invisible quand le niveau monta.",
    conclusion:
      "Les réalisations en phase de groupes n'ont pas suffi pour changer le destin du Portugal.",
  },
  {
    year: "World Cup 2022",
    title: "Coupe du monde 2022",
    content: "Au Qatar, Gonçalo Ramos, Bruno et Pepe émergent lors du tournoi.",
    points: [
      "Phase de groupes : penalty contre le Ghana.",
      "Huitièmes vs Suisse : Ramos marque un triplé.",
      "Quarts vs Maroc : sortie en larmes après une entrée tardive.",
    ],
    conclusion: "Le rôle décisif revient souvent à d'autres joueurs.",
  },
  {
    year: "Euro 2024",
    title: "Euro 2024",
    content:
      "À l'Euro 2024, Ronaldo a peu converti ses occasions malgré un grand temps de jeu.",
    points: [
      "Huitièmes vs Slovénie : penalty manqué en prolongation.",
      'Quarts vs France: <a href="https://portugoal.net/selecao/3981-portugal-vs-france-player-ratings" target="_blank"><span style="color:#89CFF0">PortuGOAL</span></a> lui attribue une mauvaise note.',
    ],
    conclusion: "Beaucoup de tentatives, aucune concrétisation.",
  },
  {
    year: "Nations League 2025",
    title: "un titre, mais qui l'a vraiment décidé ?",
    content:
      "Le Portugal remporte sa deuxième Ligue des Nations à Munich, en battant l'Espagne 5-3 aux tirs au but après un 2-2 en prolongation, devenant la première sélection à soulever le trophée deux fois. Sur le papier, cela ressemble à un couronnement parfait : Ronaldo marque en finale, égalise pour emmener le match en prolongation et termine parmi les meilleurs buteurs de la compétition avec 8 buts en 9 matches. En réalité, le MVP officiel de l'UEFA était Nuno Mendes — avec 6 passes décisives, le but qui a relancé la finale et Lamine Yamal neutralisé — et le vrai meilleur buteur était Viktor Gyökeres, avec 9 buts. Le contexte nuance fortement le récit.",
    points: [
      "Demi-finale vs Allemagne (2-1) : le Portugal souffre pendant la première heure avant que Francisco Conceição n'égalise d'une frappe sensationnelle de loin — nommée par l'UEFA pour le but du tournoi et élu homme du match. Le gros du travail — revenir d'une première heure ratée, changer le territoire du match, créer des occasions — vient de l'équipe. Ronaldo inscrit le 2-1 d'une reprise à bout portant après un centre de Nuno Mendes servi par Bruno Fernandes. Un but important, mais construit par les autres.",
      "Finale vs Espagne : l'Espagne domine la première période et mène 2-0 (Zubimendi, Oyarzabal). C'est Nuno Mendes — auteur du premier but de sa carrière internationale — qui relance le Portugal, avant l'égalisation de Ronaldo à la 61e, elle aussi dans la surface, d'une reprise de volée après un centre dévié. Techniquement plus qu'un simple tap-in, mais avec le gros du travail déjà fait. Aucune des deux équipes ne marque le troisième but en 120 minutes.",
      "Tirs au but : Diogo Costa repousse la tentative de Morata — la vraie charnière du trophée. Rúben Neves transforme le penalty du titre. Les noms qui ont décidé la qualification, sur et en dehors du terrain, sont Nuno Mendes, Vitinha, Diogo Costa et Rúben Neves.",
    ],
    conclusion:
      "Ronaldo marque — y compris une égalisation cruciale en finale — mais le trophée repose sur d'autres : Nuno Mendes (MVP, but, 6 passes décisives, Yamal neutralisé), Diogo Costa (arrêt décisif dans la séance), Rúben Neves (penalty du titre) et Francisco Conceição (but splendide en demi-finale). Un Ronaldo plus présent que lors des éditions précédentes — spécialiste des micro-distances, finisseur des actions construites par l'équipe — mais loin d'être l'homme qui a gagné le titre.",
  },
];

const content = {
  en: {
    title: "Portugal Carried Ronaldo",
    intro:
      "Ronaldo has played for Portugal in eight major tournaments. He has never scored a goal in a knockout game at a World Cup. The narrative that he carried the national team for a decade doesn't survive contact with the match timeline.",
    summary_h: "Nine tournaments. Three titles.",
    summary_intro:
      "The winning goals: Éder, Guedes - and in 2025, finally, a Ronaldo equaliser that kept Portugal alive in extra time, with Rúben Neves scoring the penalty that sealed it.",
    summary_li1: "The pattern held for most of a decade.",
    summary_li2:
      "In 2025 it shifted - slightly. Ronaldo scored more, contributed in bigger moments, and finished as top scorer in the competition.",
    summary_li3:
      "But even then, the title rested on Nuno Mendes, Diogo Costa and Rúben Neves.",
    summary_li4: "The engine was still the team.",
    summary_li5: "The finishing touch was his.",
    summary_p:
      "That is not nothing. But it is also not carrying a team. It never was.",
  },
  pt: {
    title: "Portugal carregou Ronaldo",
    intro:
      "Ronaldo jogou por Portugal em oito grandes torneios. Nunca marcou num jogo a eliminar num Mundial. A narrativa de que carregou a seleção durante uma década não resiste ao cronograma dos jogos.",
    summary_h: "Nove torneios. Três títulos.",
    summary_intro:
      "Os golos da vitória: Éder, Guedes — e em 2025, finalmente, um empate de Ronaldo que manteve Portugal vivo no prolongamento, com Rúben Neves a marcar o penálti que selou tudo.",
    summary_li1: "O padrão manteve-se durante quase toda a década.",
    summary_li2:
      "Em 2025 isso mudou — ligeiramente. Ronaldo marcou mais, apareceu em momentos maiores e terminou como melhor marcador da competição.",
    summary_li3:
      "Mesmo assim, o título ficou nas mãos de Nuno Mendes, Diogo Costa e Rúben Neves.",
    summary_li4: "O motor continuou a ser a equipa.",
    summary_li5: "O toque final foi dele.",
    summary_p:
      "Isso não é pouco. Mas também não é carregar uma equipa. Nunca foi.",
  },
  es: {
    title: "Portugal llevó a Ronaldo",
    intro:
      "Ronaldo ha jugado para Portugal en ocho torneos importantes. Nunca ha marcado un gol en un partido de eliminación directa de un Mundial. La narrativa de que cargó con la selección durante una década no resiste el cronograma de los partidos.",
    summary_h: "Nueve torneos. Tres títulos.",
    summary_intro:
      "Los goles del título: Éder, Guedes — y en 2025, por fin, un empate de Ronaldo que mantuvo a Portugal con vida en la prórroga, con Rúben Neves marcando el penalti que lo selló.",
    summary_li1: "El patrón se mantuvo durante casi una década.",
    summary_li2:
      "En 2025 cambió - un poco. Ronaldo marcó más, apareció en momentos más grandes y terminó como máximo goleador de la competición.",
    summary_li3:
      "Aun así, el título siguió descansando en Nuno Mendes, Diogo Costa y Rúben Neves.",
    summary_li4: "El motor seguía siendo el equipo.",
    summary_li5: "El toque final fue suyo.",
    summary_p:
      "Eso no es poco. Pero tampoco es cargar a un equipo. Nunca lo fue.",
  },
  fr: {
    title: "Le Portugal a porté Ronaldo",
    intro:
      "Ronaldo a joué pour le Portugal dans huit grands tournois. Il n’a jamais marqué dans un match à élimination directe en Coupe du monde. Le récit selon lequel il a porté la sélection pendant une décennie ne résiste pas à la chronologie des matches.",
    summary_h: "Neuf tournois. Trois titres.",
    summary_intro:
      "Les buts décisifs : Éder, Guedes - et en 2025, enfin, une égalisation de Ronaldo qui a maintenu le Portugal en vie en prolongation, avant le penalty victorieux de Rúben Neves.",
    summary_li1: "Le schéma a duré presque toute une décennie.",
    summary_li2:
      "En 2025, cela a légèrement changé. Ronaldo a marqué davantage, a pesé dans de plus grands moments et a terminé meilleur buteur de la compétition.",
    summary_li3:
      "Même alors, le titre reposait sur Nuno Mendes, Diogo Costa et Rúben Neves.",
    summary_li4: "Le moteur restait l’équipe.",
    summary_li5: "La touche finale était la sienne.",
    summary_p:
      "Ce n’est pas rien. Mais ce n’est pas non plus porter une équipe. Ça ne l’a jamais été.",
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

const tournamentsByLang = {
  en: tournamentsEn,
  pt: tournamentsPt,
  es: tournamentsEs,
  fr: tournamentsFr,
};

export default function CarriedByNationalTeamSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);
  const tournaments = tournamentsByLang[lang] || tournamentsEn;

  const text = (value) => <RichText as="p">{value}</RichText>;
  const inline = (value) => (
    <RichText as="span" className="inline">
      {value}
    </RichText>
  );
  const quote = (value) => <RichText as="blockquote">{value}</RichText>;

  const items = tournaments.map((item) => ({
    key: item.year,
    eyebrow: t("label_national"),
    title: item.year,
    subtitle: item.title,
    content: (
      <>
        {text(item.content)}
        {item.points && item.points.length > 0 && (
          <ul>
            {item.points.map((point, index) => (
              <li key={index}>{inline(point)}</li>
            ))}
          </ul>
        )}
        {item.quote && quote(item.quote)}
        {item.conclusion && (
          <RichText
            as="p"
            className="text-muted-foreground italic text-sm border-l-2 border-amber-500 pl-4 mt-4"
          >
            {item.conclusion}
          </RichText>
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
      {text(c("intro"))}
      <div className="mt-8">
        <SectionAccordionList items={items} />
      </div>

      <div className="section-divider" />
      <h2>{c("summary_h")}</h2>
      {text(c("summary_intro"))}
      <ul>
        <li>{inline(c("summary_li1"))}</li>
        <li>{inline(c("summary_li2"))}</li>
        <li>{inline(c("summary_li3"))}</li>
        <li>{inline(c("summary_li4"))}</li>
        <li>{inline(c("summary_li5"))}</li>
      </ul>
      {text(c("summary_p"))}
    </SectionWrapper>
  );
}
