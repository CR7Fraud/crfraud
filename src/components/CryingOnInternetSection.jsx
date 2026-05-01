import React from "react";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "Crying on the Internet",
    h1: "1. On-pitch crying that becomes content",
    h1a: "World Cup 2018 and 2022: the drama is always about him",
    p1: 'After the elimination against Uruguay in 2018, Ronaldo walks off crying into the tunnel and responds with an enigmatic post, more focused on his "destiny" at World Cups than on Portugal\'s collective failure. In 2022, eliminated by Morocco, the images repeat: he is filmed in tears walking to the dressing room, and the video is constantly recycled on highlight accounts and fan pages.',
    p2: "In both cases, the internet reacts less to the national team's failure and more to Ronaldo's personal drama: thumbnails, reels and TikToks are always about \"Ronaldo in tears\", not about Portugal being eliminated.",
    h1b: "Euro 2024: live breakdown and memes",
    p3: "Against Slovenia in the Euro 2024 round of 16, Ronaldo misses a penalty in extra time, breaks down in the middle of the pitch and is comforted by teammates while the game is still ongoing. Afterwards, the on-pitch narrative is Diogo Costa saving three penalties in a row to rescue Portugal; online, the narrative is Ronaldo's tears.",
    p4: 'Ge.globo highlighted that he "became the target of memes" for missing chances and his reactions, while opposing fans chanted "Messi" in the stands. Ruud Gullit, European champion, summed up the feeling in the studio:',
    quote1:
      '"I didn\'t like what I saw at all. Those are crocodile tears — he cried because he missed, not because the team could be eliminated."',
    p5: "In other words: the supposed 39-year-old leader turns the game into a reality show about his own suffering, and the digital world treats it as fuel for memes.",
    h2: "2. Offline tantrums, damage control on Instagram",
    h2a: "The phone at Goodison Park",
    p6: 'In 2022, after a defeat against Everton, Ronaldo walks to the tunnel and knocks the phone out of the hand of a 14-year-old autistic boy. The mother describes her son as "in shock" and with an injured hand; the police open an investigation, as do Manchester United and the FA.',
    p7: "The next day, the statement appears on Instagram:",
    quote2:
      '"It\'s not easy to deal with emotions in difficult moments… Nevertheless, we must always be respectful and set an example to the children who love football."',
    p8: "The pattern is clear: first the spoiled-child gesture, then the well-packaged text written to clean up the image. And again, the story lives on social media — clips of the moment, screenshots of the apology, debate in the comments.",
    h2b: '"The truth will come out" and "95% of the news is false"',
    p9: 'In the summer of 2022, still at United, he uses Instagram stories to attack the press: he says "the truth will be revealed in an interview", that he has a notebook where, out of 100 news stories, only 5 are correct, and the rest are lies.',
    p10: "Those stories are the public trailer for the Piers Morgan interview, where he destroys the club live on air. Again: the conflict is prepared and sold through his phone, as if it were a series — first teaser in the stories, then a 2-hour special episode.",
    h3: "3. Comment-section pundit",
    h3a: '"FACTS" against Messi (2021 Ballon d\'Or)',
    p11: 'When Messi wins the 2021 Ballon d\'Or, an anti-Messi fan page posts a text claiming the award is "stolen", that Ronaldo\'s numbers are better and that France Football always favours the Argentine. Ronaldo goes to the comments and writes just: "FACTS".',
    p12: "It's the typical behaviour of a stand fan — but it comes from the player himself. Instead of acknowledging that, that year, Messi had a historic Copa América (which most serious analysis highlights), he chooses to validate conspiracy theories in an Instagram comment.",
    h3b: "Laughing emojis at the 8th Ballon d'Or (2023)",
    p13: 'In 2023, Messi wins the Ballon d\'Or again, driven by a near-perfect World Cup in Qatar. Tomás Roncero makes a video claiming Messi "stole" several awards and that Haaland, Lewandowski, Iniesta and others were wronged.',
    p14: 'Ronaldo reacts with a row of laughing emojis 😂😂😂 under that video. Several outlets record the scene as yet another episode of "comment-section Ronaldo", unable to accept that in 2023 the Messi vs Ronaldo debate no longer exists in terms of form: one winning a World Cup and a Ballon d\'Or, the other scoring goals in Saudi Arabia.',
    p15: "This is where he simply comes across as lacking media intelligence: anyone who follows football understands Messi had obvious arguments in those years, and by aligning with videos that paint him as a trophy thief, Ronaldo places himself at the level of his own ultras — he looks bitter, not wronged.",
    h4: "4. Al-Nassr: gestures, unfollows and more digital drama",
    h4a: "Obscene gestures and crying in finals",
    p16: 'In Saudi Arabia, the "big kid" behaviour goes into permanent mode.',
    li1: 'In February 2024, he responds to "Messi" chants with an obscene gesture near his groin; the Saudi federation suspends him for one game and fines him.',
    li2: "In April, in the Super Cup, he is sent off for an elbow on an opponent and walks off sarcastically applauding the referee and the crowd.",
    li3: "In a King's Cup final, he cries again on the pitch after losing on penalties — images that go viral on social media.",
    p17: 'All of this is immediately cut into clips, reels, TikToks — a constant stream of "Ronaldo reacting" that feeds the character, even when the reaction is typical of a youth player, not a captain.',
    h4b: "90+15 penalty and unfollowing Rúben Neves",
    p18: "In 2025, an Al-Nassr match is decided by a penalty at 90+15, so controversial that teammates and opponents laugh about it on social media — Merih Demiral, Rúben Neves and Mahrez are seen mocking the incident. Shortly after, pages that monitor social media activity show that Ronaldo unfollowed Rúben Neves, precisely after those posts.",
    p19: "Even allowing for some noise, the story is consistent: an absurd penalty that favours him, teammates laughing, and the response is childish — not dialogue, not self-criticism, but unfollowing a colleague on Instagram.",
    h5: '5. "Look me in the eyes": press conferences as an extension of his feed',
    p20: "In March 2025, at a national team press conference, a journalist asks him if he still has the level to play at the highest level. He responds with:",
    li4: 'accusations of "negativity around the national team";',
    li5: 'complaints of "lack of respect";',
    li6: 'and the famous phrase: "Look me in the eyes when you ask me that."',
    p21: 'Goal summarises it: Ronaldo, irritated, tells the journalist to "look me in the eye" over a perfectly normal question about performance. It\'s the same social media grammar, but at a press conference: everything is about what he feels, never about what he plays.',
    p22: "In recent years, Ronaldo behaves less like an elite veteran and more like an overexposed child: he cries at every major failure, turns every negative episode into a personal drama on social media, and reacts to criticism with victimhood or mockery instead of responsibility.",
    h6: "The pattern, not isolated cases",
    li7: 'World Cup 2018, World Cup 2022, Euro 2024: walks off crying to the tunnel or cries on the pitch, and what goes viral is not Portugal failing — it\'s "Ronaldo suffering", turned into TikTok and Instagram clips.',
    li8: 'At Goodison Park, he hits the phone of a kid and only then tries to rewrite the episode with a polished Instagram apology, centred on "his emotions" rather than the victim.',
    li9: 'Uses stories to talk about "95% of fake news" and "the truth will come out", preparing attack-interviews where he is the betrayed one and everyone else — club, manager, board — is the problem.',
    li10: 'Comments "FACTS" and puts laughing emojis on anti-Messi posts, aligning with theories that his rival\'s awards are stolen, instead of behaving like someone who acknowledges the obvious: Messi had seasons where he was clearly better.',
    li11: 'Already in Saudi Arabia, responds to chants with obscene gestures, gets suspended, loses his head with referees and unfollows colleagues after they laugh at dubious penalties — and still talks about "negativity" and "lack of respect" when confronted.',
    p23: 'If the marketing insists on "example for children", the digital archive shows something else: a 40-year-old man addicted to his own image, always ready to cry, react and post, and very little accustomed to doing the most adult thing football requires — facing failure without turning everything into an episode about himself.',
  },
  pt: {
    title: "Crying on Internet",
    h1: "1. Choros em campo que viram conteúdo",
    h1a: "Mundial 2018 e 2022: o drama é sempre ele",
    p1: 'Depois da eliminação com o Uruguai em 2018, Ronaldo sai a chorar para o túnel e responde com um post enigmático, mais focado no seu "destino" em Mundiais do que no fracasso coletivo de Portugal. Em 2022, eliminado por Marrocos, as imagens repetem-se: volta a ser filmado em lágrimas a caminho do balneário, e o vídeo passa a ser reciclado constantemente em contas de highlights e páginas de fãs.',
    p2: 'Em ambos os casos, a internet reage menos à Seleção e mais ao drama pessoal de Ronaldo: thumbnails, reels e TikToks são sempre sobre "Ronaldo em lágrimas", não sobre Portugal eliminado.',
    h1b: "Euro 2024: colapso em direto e memes",
    p3: "Contra a Eslovénia, nos oitavos do Euro 2024, Ronaldo falha um penálti no prolongamento, entra em colapso no meio-campo e é amparado pelos colegas enquanto o jogo ainda não acabou. Depois, a narrativa em campo é Diogo Costa a defender três penáltis seguidos e a salvar Portugal; online, a narrativa são as lágrimas de Ronaldo.",
    p4: 'O ge.globo destaca que ele "vira alvo de memes" por falhar oportunidades e pela forma como reage, enquanto adeptos adversários gritam "Messi" nas bancadas. Ruud Gullit, campeão europeu, resume o sentimento em estúdio:',
    quote1:
      '"Não gostei nada do que vi. São lágrimas de crocodilo - chorou porque falhou ele, não porque a equipa podia perder."',
    p5: "Ou seja: o suposto líder de 39 anos transforma o jogo num reality show sobre o seu sofrimento, e o mundo digital trata isso como combustível para memes.",
    h2: "2. Birras offline, damage control no Instagram",
    h2a: "O telemóvel em Goodison Park",
    p6: 'Em 2022, depois de uma derrota com o Everton, Ronaldo sai para o túnel e esmurra o telemóvel da mão de um adolescente de 14 anos, que tem autismo. A mãe descreve o filho como "em choque" e com a mão magoada; a polícia abre investigação, o United e a FA também.',
    p7: "No dia seguinte, aparece o comunicado no Instagram:",
    quote2:
      '"Não é fácil lidar com emoções em momentos difíceis… Nevertheless, temos de ser sempre respeitosos e dar o exemplo às crianças que amam o futebol."',
    p8: "O padrão é claro: primeiro o gesto de criança malcriada, depois o texto bem embalado, escrito para limpar a imagem. E, de novo, a história vive nas redes - clips do momento, prints do pedido de desculpa, discussão em comentários.",
    h2b: '"A verdade vai sair" e "95% das notícias são falsas"',
    p9: 'No verão de 2022, ainda no United, usa stories de Instagram para atacar a imprensa: diz que "a verdade vai ser revelada numa entrevista", que tem um caderno onde, de 100 notícias, só 5 estão certas, e que o resto são mentiras.',
    p10: "Esses stories são o trailer público da entrevista com Piers Morgan, onde destrói o clube em direto. Outra vez: o conflito é preparado e vendido através do telemóvel, como se fosse uma série - primeiro teaser nos stories, depois episódio especial de 2 horas.",
    h3: "3. Comentador de caixa de comentários",
    h3a: '"FACTOS" contra Messi (Bola de Ouro 2021)',
    p11: 'Quando Messi ganha a Bola de Ouro 2021, uma fanpage anti-Messi publica um texto a dizer que o prémio é "roubado", que os números de Ronaldo são melhores e que a France Football favorece sempre o argentino. Ronaldo vai à caixa de comentários e escreve só: "FACTOS".',
    p12: "É o comportamento típico de adepto de bancada - mas vem do próprio jogador. Em vez de aceitar que, nesse ano, Messi trazia uma Copa América histórica (o que muita análise séria sublinha), escolhe validar teorias de conspiração num comentário de Instagram.",
    h3b: "Emojis a rir da 8.ª Bola de Ouro (2023)",
    p13: 'Em 2023, Messi volta a ganhar a Bola de Ouro, liderado por um Mundial praticamente perfeito no Qatar. Tomás Roncero faz um vídeo a dizer que Messi "roubou" vários prémios e que Haaland, Lewandowski, Iniesta, etc., foram prejudicados.',
    p14: 'Ronaldo reage com uma fila de emojis a rir 😂😂😂 por baixo desse vídeo. Vários media registam a cena como mais um episódio do "Ronaldo de caixa de comentários", incapaz de aceitar que, em 2023, o debate Messi vs Ronaldo já não existe em termos de forma: um a ganhar Mundial e Bola de Ouro, o outro a marcar golos na Arábia.',
    p15: "É aqui que ele parece simplesmente pouco inteligente do ponto de vista mediático: qualquer pessoa que acompanha futebol percebe que Messi tinha argumentos óbvios nesses anos, e Ronaldo, ao alinhar com vídeos que o pintam como ladrão de prémios, coloca-se ao nível dos seus ultras - passa por ressentido, não por injustiçado.",
    h4: "4. Al-Nassr: gestos, unfollows e mais drama digital",
    h4a: "Gestos obscenos e choros em finais",
    p16: 'Na Arábia, o comportamento de "criança grande" entra em modo permanente.',
    li1: 'Em fevereiro de 2024, responde a cânticos de "Messi" com um gesto obsceno junto à zona pélvica; a federação saudita suspende-o um jogo e multa-o.',
    li2: "Em abril, na Supertaça, é expulso por cotovelada num adversário e sai a aplaudir sarcasticamente o árbitro e o público.",
    li3: "Numa final da Taça do Rei, volta a chorar no relvado depois de perder nas grandes penalidades, imagens que se tornam virais nas redes.",
    p17: 'Tudo isto é imediatamente recortado em clips, reels, TikToks - um fluxo constante de "Ronaldo a reagir" que alimenta a personagem, mesmo quando a reação é típica de júnior, não de capitão.',
    h4b: "Penálti 90+15 e unfollow a Rúben Neves",
    p18: "Em 2025, um jogo do Al-Nassr decide-se com um penálti aos 90+15, tão polémico que colegas e adversários se riem nas redes - Merih Demiral, Rúben Neves e Mahrez surgem a gozar com o lance. Em seguida, páginas que monitorizam atividade social mostram que Ronaldo terá deixado de seguir Rúben Neves, precisamente depois dessas publicações.",
    p19: "Mesmo admitindo alguma margem de ruído, a história é coerente: um penálti absurdo que o favorece, colegas a rir, e a resposta é infantil - não diálogo, não autocrítica, mas recusar seguir um colega no Instagram.",
    h5: '5. "Olha-me nos olhos": conferências como extensão do feed',
    p20: "Em março de 2025, em conferência de imprensa da Seleção, um jornalista pergunta-lhe se ainda tem nível para jogar ao mais alto nível. Ele responde com:",
    li4: 'acusações de "negatividade à volta da Seleção";',
    li5: 'queixas de "falta de respeito";',
    li6: 'e a célebre frase: "Olha-me nos olhos quando me perguntas isso."',
    p21: 'Goal resume: Ronaldo, irritado, manda o jornalista "look me in the eye" por causa de uma pergunta normal sobre rendimento. É a mesma gramática das redes, mas em conferência: tudo é sobre o que ele sente, nunca sobre o que ele joga.',
    p22: "Nos últimos anos, Ronaldo comporta-se menos como um veterano de elite e mais como uma criança superexposta: chora em todos os grandes fracassos, transforma cada episódio negativo em drama pessoal nas redes e reage a críticas com vitimização ou gozo, em vez de responsabilidade.",
    h6: "O padrão, em vez de casos soltos",
    li7: 'Mundial 2018, Mundial 2022, Euro 2024: sai em lágrimas para o túnel ou chora em campo, e o que viraliza não é a Seleção falhar - é "Ronaldo a sofrer", transformado em clips para TikTok e Instagram.',
    li8: 'Em Goodison Park, agride o telemóvel de um miúdo e só depois tenta reescrever o episódio com um pedido de desculpa polido no Instagram, centrado nas "emoções dele" e não na vítima.',
    li9: 'Usa stories para falar de "95% de notícias falsas" e "a verdade vai sair", preparando entrevistas-ataque em que ele é o traído e todos os outros (clube, treinador, direção) são o problema.',
    li10: 'Comenta "FACTOS" e mete emojis a rir em posts anti-Messi, alinhando com teorias de que os prémios do rival são roubados, em vez de se comportar como alguém que reconhece o óbvio: Messi teve épocas em que foi claramente melhor.',
    li11: 'Já na Arábia, responde a cânticos com gestos obscenos, é suspenso, perde a cabeça com árbitros e faz unfollows a colegas depois de estes se rirem de penáltis duvidosos - e ainda assim fala de "negatividade" e "falta de respeito" quando alguém o confronta.',
    p23: 'Se o marketing insiste em "exemplo para as crianças", o arquivo digital mostra outra coisa: um homem de 40 anos viciado na própria imagem, sempre pronto a chorar, reagir e postar, e muito pouco habituado a fazer a coisa mais adulta que o futebol exige - enfrentar o fracasso sem transformar tudo num episódio sobre si próprio.',
  },
  es: {
    title: "Llorando en Internet",
    h1: "1. Llantos en el campo que se convierten en contenido",
    h1a: "Mundial 2018 y 2022: el drama siempre es él",
    p1: 'Después de la eliminación ante Uruguay en 2018, Ronaldo sale llorando hacia el túnel y responde con una publicación enigmática, más centrada en su "destino" en los Mundiales que en el fracaso colectivo de Portugal. En 2022, eliminado por Marruecos, las imágenes se repiten: vuelve a ser filmado entre lágrimas camino del vestuario, y el vídeo se recicla constantemente en cuentas de highlights y páginas de fans.',
    p2: 'En ambos casos, Internet reacciona menos a la eliminación de la selección y más al drama personal de Ronaldo: miniaturas, reels y TikToks son siempre sobre "Ronaldo llorando", no sobre Portugal fuera del torneo.',
    h1b: "Euro 2024: colapso en directo y memes",
    p3: "Contra Eslovenia, en octavos de la Euro 2024, Ronaldo falla un penalti en la prórroga, entra en colapso en el centro del campo y es consolado por sus compañeros mientras el partido sigue. Después, la historia en el campo es Diogo Costa deteniendo tres penaltis seguidos para salvar a Portugal; en internet, la historia son las lágrimas de Ronaldo.",
    p4: 'ge.globo destacó que se "convirtió en blanco de memes" por fallar ocasiones y por su forma de reaccionar, mientras los aficionados rivales cantaban "Messi" en la grada. Ruud Gullit, campeón de Europa, resumió la sensación en el plató:',
    quote1:
      '"No me gustó nada lo que vi. Son lágrimas de cocodrilo - lloró porque él falló, no porque el equipo pudiera quedar eliminado."',
    p5: "En otras palabras: el supuesto líder de 39 años convierte el partido en un reality show sobre su propio sufrimiento, y el mundo digital lo convierte en combustible para memes.",
    h2: "2. Rabietas offline, control de daños en Instagram",
    h2a: "El teléfono en Goodison Park",
    p6: 'En 2022, tras una derrota ante el Everton, Ronaldo camina hacia el túnel y golpea el teléfono de un chico autista de 14 años. La madre describe a su hijo como "en shock" y con la mano lesionada; la policía abre una investigación, al igual que Manchester United y la FA.',
    p7: "Al día siguiente aparece la declaración en Instagram:",
    quote2:
      '"No es fácil lidiar con las emociones en momentos difíciles... Sin embargo, siempre debemos ser respetuosos y dar ejemplo a los niños que aman el fútbol."',
    p8: "El patrón es claro: primero el gesto de niño malcriado, después el texto pulido escrito para limpiar la imagen. Y otra vez, la historia vive en las redes: clips del momento, capturas del perdón, debate en los comentarios.",
    h2b: '"La verdad saldrá" y "el 95% de las noticias son falsas"',
    p9: 'En el verano de 2022, todavía en United, usa historias de Instagram para atacar a la prensa: dice que "la verdad se revelará en una entrevista", que tiene un cuaderno donde, de 100 noticias, solo 5 son correctas y el resto son mentiras.',
    p10: "Esas historias son el tráiler público de la entrevista con Piers Morgan, donde destroza al club en directo. Otra vez: el conflicto se prepara y se vende a través del teléfono, como si fuera una serie - primero el teaser en stories, luego un episodio especial de dos horas.",
    h3: "3. Comentarista de la caja de comentarios",
    h3a: '"FACTS" contra Messi (Balón de Oro 2021)',
    p11: 'Cuando Messi gana el Balón de Oro 2021, una fanpage anti-Messi publica un texto diciendo que el premio es "robado", que los números de Ronaldo son mejores y que France Football siempre favorece al argentino. Ronaldo entra en los comentarios y escribe solo: "FACTS".',
    p12: "Es el comportamiento típico de un aficionado de grada, pero viene del propio jugador. En vez de aceptar que ese año Messi había firmado una Copa América histórica (algo que cualquier análisis serio subraya), decide validar teorías de conspiración en un comentario de Instagram.",
    h3b: "Emojis de risa en el 8.º Balón de Oro (2023)",
    p13: 'En 2023, Messi vuelve a ganar el Balón de Oro, impulsado por un Mundial casi perfecto en Qatar. Tomás Roncero publica un vídeo diciendo que Messi "robó" varios premios y que Haaland, Lewandowski, Iniesta y otros fueron perjudicados.',
    p14: 'Ronaldo reacciona con una fila de emojis riendo 😂😂😂 debajo de ese vídeo. Varios medios registran la escena como otro episodio de "Ronaldo en la caja de comentarios", incapaz de aceptar que en 2023 el debate Messi vs Ronaldo ya no existe en términos de forma: uno ganando un Mundial y un Balón de Oro, el otro marcando goles en Arabia.',
    p15: "Aquí simplemente parece carecer de inteligencia mediática: cualquiera que siga el fútbol entiende que Messi tenía argumentos obvios en esos años, y Ronaldo, al alinearse con vídeos que lo pintan como ladrón de premios, se coloca al nivel de sus ultras - parece resentido, no agraviado.",
    h4: "4. Al-Nassr: gestos, unfollows y más drama digital",
    h4a: "Gestos obscenos y llantos en finales",
    p16: 'En Arabia, el comportamiento de "niño grande" entra en modo permanente.',
    li1: 'En febrero de 2024, responde a los cánticos de "Messi" con un gesto obsceno en la zona pélvica; la federación saudí le suspende un partido y le multa.',
    li2: "En abril, en la Supercopa, es expulsado por un codazo a un rival y se va aplaudiendo sarcásticamente al árbitro y al público.",
    li3: "En una final de Copa, vuelve a llorar sobre el césped tras perder en los penaltis, imágenes que se vuelven virales en redes.",
    p17: 'Todo esto se recorta inmediatamente en clips, reels, TikToks - un flujo constante de "Ronaldo reaccionando" que alimenta el personaje, incluso cuando la reacción es típica de un juvenil, no de un capitán.',
    h4b: "Penalti 90+15 y dejar de seguir a Rúben Neves",
    p18: "En 2025, un partido de Al-Nassr se decide con un penalti en el 90+15, tan polémico que compañeros y rivales se ríen en redes - Merih Demiral, Rúben Neves y Mahrez aparecen burlándose del lance. Poco después, páginas que siguen la actividad social muestran que Ronaldo dejó de seguir a Rúben Neves, precisamente después de esas publicaciones.",
    p19: "Incluso admitiendo algo de ruido, la historia es coherente: un penalti absurdo que le favorece, compañeros riéndose, y la respuesta es infantil - no diálogo, no autocrítica, sino dejar de seguir a un compañero en Instagram.",
    h5: '5. "Mírame a los ojos": las ruedas de prensa como extensión de su feed',
    p20: "En marzo de 2025, en una rueda de prensa de la selección, un periodista le pregunta si aún tiene nivel para jugar al más alto nivel. Responde con:",
    li4: 'acusaciones de "negatividad alrededor de la selección";',
    li5: 'quejas de "falta de respeto";',
    li6: 'y la famosa frase: "Mírame a los ojos cuando me hagas esa pregunta".',
    p21: 'Goal lo resume así: Ronaldo, irritado, le dice al periodista que "le mire a los ojos" por una pregunta normal sobre su rendimiento. Es la misma gramática de las redes, pero en rueda de prensa: todo gira en torno a lo que siente, nunca a lo que juega.',
    p22: "En los últimos años, Ronaldo se comporta menos como un veterano de élite y más como un niño sobreexpuesto: llora en cada gran fracaso, convierte cada episodio negativo en un drama personal en redes y responde a la crítica con victimismo o burla en vez de responsabilidad.",
    h6: "El patrón, no casos aislados",
    li7: 'Mundial 2018, Mundial 2022, Euro 2024: sale llorando hacia el túnel o llora en el campo, y lo que se hace viral no es que Portugal falle, sino "Ronaldo sufriendo", convertido en clips de TikTok e Instagram.',
    li8: 'En Goodison Park, golpea el teléfono de un chico y solo después intenta reescribir el episodio con una disculpa pulida en Instagram, centrada en "sus emociones" y no en la víctima.',
    li9: 'Usa stories para hablar del "95% de noticias falsas" y de que "la verdad saldrá", preparando entrevistas-ataque en las que él es el traicionado y todos los demás - club, entrenador, directiva - son el problema.',
    li10: 'Escribe "FACTS" y pone emojis riendo en publicaciones anti-Messi, alineándose con teorías de que los premios de su rival son robados, en vez de comportarse como alguien que reconoce lo obvio: Messi tuvo temporadas en las que fue claramente mejor.',
    li11: 'Ya en Arabia, responde a los cánticos con gestos obscenos, es suspendido, pierde la cabeza con los árbitros y deja de seguir a compañeros después de que se rían de penaltis dudosos - y aun así habla de "negatividad" y "falta de respeto" cuando alguien lo confronta.',
    p23: 'Si el marketing insiste en un "ejemplo para los niños", el archivo digital muestra otra cosa: un hombre de 40 años adicto a su propia imagen, siempre listo para llorar, reaccionar y publicar, y muy poco acostumbrado a hacer lo más adulto que exige el fútbol: afrontar el fracaso sin convertirlo todo en un episodio sobre sí mismo.',
  },
  fr: {
    title: "Pleurer sur Internet",
    h1: "1. Les pleurs sur le terrain qui deviennent du contenu",
    h1a: "Coupe du monde 2018 et 2022 : le drame, c’est toujours lui",
    p1: 'Après l’élimination contre l’Uruguay en 2018, Ronaldo quitte le terrain en larmes vers le tunnel et répond par un post énigmatique, davantage centré sur son "destin" en Coupe du monde que sur l’échec collectif du Portugal. En 2022, éliminé par le Maroc, les images se répètent : on le filme encore en larmes en route vers le vestiaire, et la vidéo est recyclée sans cesse sur les comptes de highlights et les pages de fans.',
    p2: 'Dans les deux cas, Internet réagit moins à l’échec de l’équipe nationale qu’au drame personnel de Ronaldo : miniatures, reels et TikToks parlent toujours de "Ronaldo en larmes", pas du Portugal éliminé.',
    h1b: "Euro 2024 : effondrement en direct et memes",
    p3: "Contre la Slovénie, en huitième de finale de l’Euro 2024, Ronaldo manque un penalty en prolongation, s’effondre au milieu du terrain et est réconforté par ses coéquipiers pendant que le match continue. Ensuite, sur le terrain, l’histoire devient Diogo Costa arrêtant trois penalties d’affilée pour sauver le Portugal ; en ligne, l’histoire devient les larmes de Ronaldo.",
    p4: 'ge.globo a souligné qu’il était "devenu la cible de memes" pour avoir manqué des occasions et pour ses réactions, tandis que les supporters adverses scandaient "Messi" dans les tribunes. Ruud Gullit, champion d’Europe, a résumé le ressenti en plateau :',
    quote1:
      '"Je n’ai pas du tout aimé ce que j’ai vu. Ce sont des larmes de crocodile - il a pleuré parce qu’il a raté, pas parce que l’équipe pouvait être éliminée."',
    p5: "Autrement dit : le supposé leader de 39 ans transforme le match en reality show sur sa propre souffrance, et le monde numérique le traite comme du carburant à memes.",
    h2: "2. Crises hors ligne, communication de crise sur Instagram",
    h2a: "Le téléphone à Goodison Park",
    p6: 'En 2022, après une défaite contre Everton, Ronaldo se dirige vers le tunnel et frappe le téléphone d’un garçon autiste de 14 ans. La mère décrit son fils comme "sous le choc" et avec la main blessée ; la police ouvre une enquête, tout comme Manchester United et la FA.',
    p7: "Le lendemain, le communiqué apparaît sur Instagram :",
    quote2:
      '"Il n’est pas facile de gérer ses émotions dans les moments difficiles… Néanmoins, nous devons toujours être respectueux et montrer l’exemple aux enfants qui aiment le football."',
    p8: "Le schéma est clair : d’abord le geste de gamin gâté, puis le texte bien propre rédigé pour nettoyer l’image. Et encore une fois, l’histoire vit sur les réseaux : extraits du moment, captures d’écran des excuses, débat dans les commentaires.",
    h2b: '"La vérité sortira" et "95 % des infos sont fausses"',
    p9: 'À l’été 2022, toujours à United, il utilise les stories Instagram pour attaquer la presse : il dit que "la vérité sera révélée dans une interview", qu’il a un carnet où, sur 100 articles, seuls 5 sont justes, et que le reste est mensonge.',
    p10: "Ces stories sont la bande-annonce publique de l’interview avec Piers Morgan, où il détruit le club en direct. Encore une fois : le conflit est préparé et vendu via son téléphone, comme une série - d’abord le teaser dans les stories, puis un épisode spécial de deux heures.",
    h3: "3. Consultant des commentaires",
    h3a: '"FACTS" contre Messi (Ballon d’Or 2021)',
    p11: 'Quand Messi remporte le Ballon d’Or 2021, une page anti-Messi publie un texte affirmant que le prix est "volé", que les chiffres de Ronaldo sont meilleurs et que France Football favorise toujours l’Argentin. Ronaldo va dans les commentaires et écrit simplement : "FACTS".',
    p12: "C’est le comportement typique d’un supporter de tribune - sauf que cela vient du joueur lui-même. Au lieu d’admettre que cette année-là Messi a signé une Copa América historique (ce que toute analyse sérieuse souligne), il choisit de valider des théories du complot dans un commentaire Instagram.",
    h3b: "Des emojis rieurs au 8e Ballon d’Or (2023)",
    p13: 'En 2023, Messi remporte à nouveau le Ballon d’Or, porté par une Coupe du monde quasiment parfaite au Qatar. Tomás Roncero publie une vidéo disant que Messi a "volé" plusieurs trophées et que Haaland, Lewandowski, Iniesta et d’autres ont été lésés.',
    p14: 'Ronaldo réagit avec une rangée d’emojis qui rient 😂😂😂 sous cette vidéo. Plusieurs médias notent la scène comme un nouvel épisode de "Ronaldo en mode commentaires", incapable d’accepter qu’en 2023 le débat Messi vs Ronaldo n’existe plus en termes de forme : l’un gagne une Coupe du monde et un Ballon d’Or, l’autre marque des buts en Arabie.',
    p15: "C’est ici qu’il donne surtout l’impression d’un manque d’intelligence médiatique : quiconque suit le football comprend que Messi avait des arguments évidents ces années-là, et Ronaldo, en s’alignant sur des vidéos qui le présentent comme un voleur de trophées, se place au niveau de ses ultras - il paraît rancunier, pas lésé.",
    h4: "4. Al-Nassr : gestes, unfollows et autre drame numérique",
    h4a: "Gestes obscènes et pleurs en finale",
    p16: 'En Arabie, le comportement de "grand enfant" passe en mode permanent.',
    li1: 'En février 2024, il répond aux chants "Messi" par un geste obscène près de l’entrejambe ; la fédération saoudienne le suspend un match et lui inflige une amende.',
    li2: "En avril, en Supercoupe, il est expulsé pour un coup de coude sur un adversaire et quitte le terrain en applaudissant sarcastiquement l’arbitre et le public.",
    li3: "En finale de coupe, il pleure à nouveau sur la pelouse après une défaite aux tirs au but - des images qui deviennent virales sur les réseaux.",
    p17: 'Tout cela est immédiatement découpé en clips, reels, TikToks - un flux constant de "Ronaldo réagit" qui nourrit le personnage, même lorsque la réaction est typique d’un jeune, pas d’un capitaine.',
    h4b: "Penalty à 90+15 et unfollow de Rúben Neves",
    p18: "En 2025, un match d’Al-Nassr se joue sur un penalty à 90+15, si controversé que coéquipiers et adversaires en rient sur les réseaux - Merih Demiral, Rúben Neves et Mahrez apparaissent en train de se moquer de l’action. Peu après, des pages qui suivent l’activité sociale montrent que Ronaldo a cessé de suivre Rúben Neves, précisément après ces publications.",
    p19: "Même en admettant un peu de bruit, l’histoire est cohérente : un penalty absurde qui lui profite, des coéquipiers qui rient, et la réponse est enfantine - pas de dialogue, pas d’autocritique, mais unfollow un coéquipier sur Instagram.",
    h5: '5. "Regarde-moi dans les yeux" : les conférences de presse comme prolongement du feed',
    p20: "En mars 2025, lors d’une conférence de presse de l’équipe nationale, un journaliste lui demande s’il a encore le niveau pour jouer au plus haut niveau. Il répond avec :",
    li4: 'des accusations de "négativité autour de la sélection" ;',
    li5: 'des plaintes sur un "manque de respect" ;',
    li6: 'et la fameuse phrase : "Regarde-moi dans les yeux quand tu me poses cette question."',
    p21: 'Goal le résume ainsi : Ronaldo, agacé, dit au journaliste de "le regarder dans les yeux" pour une question tout à fait normale sur sa performance. C’est la même grammaire que sur les réseaux, mais en conférence de presse : tout tourne autour de ce qu’il ressent, jamais de ce qu’il joue.',
    p22: "Ces dernières années, Ronaldo ressemble moins à un vétéran d’élite qu’à un enfant surexposé : il pleure à chaque gros échec, transforme chaque épisode négatif en drame personnel sur les réseaux et répond à la critique par la victimisation ou la moquerie plutôt que par la responsabilité.",
    h6: "Le schéma, pas des cas isolés",
    li7: 'Coupe du monde 2018, Coupe du monde 2022, Euro 2024 : il quitte le terrain en larmes ou pleure sur la pelouse, et ce qui devient viral n’est pas l’échec du Portugal, mais "Ronaldo qui souffre", transformé en clips TikTok et Instagram.',
    li8: 'À Goodison Park, il frappe le téléphone d’un enfant puis tente seulement après de réécrire l’épisode avec des excuses Instagram soignées, centrées sur "ses émotions" et non sur la victime.',
    li9: 'Il utilise les stories pour parler de "95 % de fausses nouvelles" et de "la vérité sortira", préparant des interviews-attaques où il est le trahi et où tous les autres - club, entraîneur, direction - sont le problème.',
    li10: 'Il écrit "FACTS" et met des emojis rieurs sur des posts anti-Messi, s’alignant sur des théories selon lesquelles les trophées de son rival sont volés, au lieu d’agir comme quelqu’un qui reconnaît l’évidence : Messi a connu des saisons où il était clairement meilleur.',
    li11: 'Déjà en Arabie, il répond aux chants avec des gestes obscènes, est suspendu, s’énerve contre les arbitres et unfollow des coéquipiers après qu’ils se sont moqués de penalties douteux - tout en parlant encore de "négativité" et de "manque de respect" quand on le confronte.',
    p23: 'Si le marketing insiste sur un "exemple pour les enfants", l’archive numérique montre autre chose : un homme de 40 ans accro à sa propre image, toujours prêt à pleurer, réagir et poster, et très peu habitué à faire la chose la plus adulte qu’exige le football : affronter l’échec sans tout transformer en épisode sur lui-même.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export default function CryingOnInternetSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper
      id="crying"
      label={t("label_crying")}
      title={c("title")}
      dark
    >
      <h2>{c("h1")}</h2>
      <h3>{c("h1a")}</h3>
      <p>{c("p1")}</p>
      <p>{c("p2")}</p>
      <h3>{c("h1b")}</h3>
      <p>{c("p3")}</p>
      <p>{c("p4")}</p>
      <blockquote>{c("quote1")}</blockquote>
      <p>{c("p5")}</p>

      <div className="section-divider" />
      <h2>{c("h2")}</h2>
      <h3>{c("h2a")}</h3>
      <p>{c("p6")}</p>
      <p>{c("p7")}</p>
      <blockquote>{c("quote2")}</blockquote>
      <p>{c("p8")}</p>
      <h3>{c("h2b")}</h3>
      <p>{c("p9")}</p>
      <p>{c("p10")}</p>

      <div className="section-divider" />
      <h2>{c("h3")}</h2>
      <h3>{c("h3a")}</h3>
      <p>{c("p11")}</p>
      <p>{c("p12")}</p>
      <h3>{c("h3b")}</h3>
      <p>{c("p13")}</p>
      <p>{c("p14")}</p>
      <p>{c("p15")}</p>

      <div className="section-divider" />
      <h2>{c("h4")}</h2>
      <h3>{c("h4a")}</h3>
      <p>{c("p16")}</p>
      <ul>
        <li>{c("li1")}</li>
        <li>{c("li2")}</li>
        <li>{c("li3")}</li>
      </ul>
      <p>{c("p17")}</p>
      <h3>{c("h4b")}</h3>
      <p>{c("p18")}</p>
      <p>{c("p19")}</p>

      <div className="section-divider" />
      <h2>{c("h5")}</h2>
      <p>{c("p20")}</p>
      <ul>
        <li>{c("li4")}</li>
        <li>{c("li5")}</li>
        <li>{c("li6")}</li>
      </ul>
      <p>{c("p21")}</p>
      <p>{c("p22")}</p>

      <div className="section-divider" />
      <h2>{c("h6")}</h2>
      <ul>
        <li>{c("li7")}</li>
        <li>{c("li8")}</li>
        <li>{c("li9")}</li>
        <li>{c("li10")}</li>
        <li>{c("li11")}</li>
      </ul>
      <p>{c("p23")}</p>
    </SectionWrapper>
  );
}
