import React, { createContext, useContext, useState } from "react";

export const languages = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "fr", label: "FR", name: "Français" },
];

export const translations = {
  pt: {
    // Nav
    nav_ballon: "Ballon D'Or",
    nav_ucl: "UCL Manipulada",
    nav_managers: "Treinadores",
    nav_selfish: "Egoísmo",
    nav_character: "Caráter & Comportamento",
    nav_national: "Seleção",
    nav_crying: "Choros",
    nav_hypocrisy: "Hipocrisia",
    nav_liga: "Liga Comprada",
    nav_messi: "Messi é Melhor",
    // Hero
    hero_tag: "Análise Crítica",
    hero_subtitle:
      "Uma análise baseada em dados, factos e declarações públicas sobre a carreira de Cristiano Ronaldo — Bolas de Ouro, Champions League, treinadores despedidos, egoísmo, hipocrisia e muito mais.",
    hero_cta: "Começar a ler",
    hero_meta: "7 secções · 44 páginas de análise",
    // Section labels
    label_ballon: "Ballon D'Or",
    label_ucl: "Champions League",
    label_managers: "Sacked Managers",
    label_selfish: "Selfishness",
    label_character: "Comportamento",
    label_national: "Carried by National Team",
    label_crying: "Crying on Internet",
    label_hypocrisy: "Hypocrisy",
    label_liga: "Liga Comprada",
    label_messi: "Why Messi is Better",
    // Section titles
    title_ballon: "Ballon D'Or",
    title_ucl: "A Champions League que Não Foi Limpa",
    title_managers: "Treinadores Despedidos",
    title_selfish: "Egoísmo em Campo e Fora Dele",
    title_character: "Caráter & Comportamento",
    title_national: "Portugal carregou Ronaldo",
    title_crying: "Crying on Internet",
    title_hypocrisy: "Hipocrisia",
    title_liga: "Liga Comprada & Dubai d'Or",
    title_messi: "Porque é que Messi é Melhor",
    character_selfish_title: "O Espetáculo de Um Só Homem",
    character_selfish_subtitle:
      "Como livres, penáltis e linguagem corporal voltam sempre ao centro dele.",
    character_crying_title: "Chora, Publica, Repete",
    character_crying_subtitle:
      "As lágrimas, os pedidos de desculpa e o drama digital que nunca acaba.",
    character_hypocrisy_title: "Hipocrisia",
    character_hypocrisy_subtitle:
      "Recordes, dignidade e dinheiro saudita: o que diz e o que faz.",
    // Footer
    footer_desc:
      "Uma análise crítica baseada em dados públicos, declarações documentadas e registos desportivos. Todos os textos são transcritos diretamente da fonte original.",
    footer_about: "Sobre",
    footer_donate: "Doar",
    footer_contact: "Contacto",
    footer_copy:
      "Análise crítica sobre a carreira de Cristiano Ronaldo · Baseada em factos documentados",

    // Ballon d'Or section
    bdor_2008:
      "Nada a debater. Campeão inglês por dois anos consecutivos, vencedor da Champions League e Bota de Ouro europeia. Desempenho e troféus alinham sem ambiguidade — é o melhor jogador do ano.",
    bdor_2013_p1:
      "O primeiro Ballon d'Or de Ronaldo merecia mais debate do que recebeu. O jogador que o ganhou terminou a época sem um único troféu colectivo — zero ligas, zero taças, zero Champions. Os outros dois finalistas, Messi e Ribéry, somavam títulos e desempenhos individuais superiores ao longo de toda a temporada.",
    bdor_2013_p2:
      "Na Champions, o Real Madrid foi eliminado nas meias-finais pelo Borussia Dortmund, depois de uma derrota por 4-1 na primeira mão em que Ronaldo marcou apenas uma vez — e não voltou a marcar na segunda mão. Vale notar que sete dos seus golos europeus nessa época saíram em quatro jogos contra Galatasaray e Ajax; quando os adversários eram de nível superior, a produção desaparecia.",
    bdor_2013_p3:
      "Pela selecção portuguesa, na qualificação para o Mundial de 2014, Ronaldo não liderou a fase de grupos em golos — ficou em 27.º lugar com quatro golos em oito jogos. Nos play-offs contribuiu de forma decisiva com um hat-trick contra a Suécia, garantindo a qualificação. É um momento real, mas restrito a dois jogos numa campanha longa.",
    bdor_2013_p4:
      "O detalhe que mais questiona a decisão: pela primeira vez na história, a France Football estendeu o período de elegibilidade da votação — precisamente até à data desse jogo com a Suécia. A extensão permitiu que o único momento marcante de Ronaldo na fase final da temporada entrasse nos critérios.",
    bdor_2013_quote:
      "A disputa honesta era entre Messi e Ribéry. Ambos terminaram a época com títulos e exibições de nível superior durante mais tempo. O prémio foi para quem marcou 69 golos no total — uma distinção que, como existe o troféu da Bota de Ouro para reconhecer, serve outro propósito.",
    bdor_2014_p1:
      "Este é o ano mais difícil de julgar, e a honestidade obriga a reconhecer que Ronaldo tinha argumentos reais. Foi o melhor marcador da Champions, bateu o recorde de golos na competição, ganhou Liga, Taça do Rei e Champions com o Real Madrid. Em termos de números brutos, o dossiê é sólido.",
    bdor_2014_p2: "A polémica, no entanto, é legítima por duas razões.",
    bdor_2014_p3:
      "A primeira é interna ao Real Madrid: nas finais que definiram a época, Ronaldo raramente foi a figura decisiva. Gareth Bale foi o mais determinante na final da Champions e na final da Taça do Rei. Sergio Ramos marcou o golo que levou a final da Champions para prolongamento. Di María foi eleito o melhor jogador em campo nessa mesma final. Ronaldo marcou um penálti já no tempo extra, com o jogo controlado. Marcou, sim — mas num palco em que outros foram mais importantes.",
    bdor_2014_p4:
      'A segunda é pela selecção: Portugal foi eliminado na fase de grupos do Mundial do Brasil num grupo com Gana e os Estados Unidos. É uma das piores campanhas mundialistas da história recente do país e pesa directamente contra o argumento de "melhor jogador do mundo".',
    bdor_2014_p5:
      "Do lado dos outros dois candidatos: Messi chegou à final do Mundial, foi eleito o seu melhor jogador, e teve uma época civil de nível alto; a sua desvantagem foi não ganhar o Campeonato do Mundo nem a Liga. Neuer ganhou Liga, Taça, Supertaça alemã e o próprio Mundial, foi eleito o melhor guarda-redes da competição e o mais dominante da sua posição ao longo de toda a temporada.",
    bdor_2014_p6:
      "O argumento central que questiona Ronaldo é simples: os seus golos constam dos livros de records, mas a equipa do Real Madrid — Bale, Ramos, Di María, Modric — teve um peso tão determinante nos títulos que atribuir o mérito individual a um só jogador é um exercício de narrativa, não de análise. A Bota de Ouro existe precisamente para reconhecer o melhor marcador. A Bola de Ouro devia medir mais do que isso.",
    bdor_2014_p7:
      "Em retrospectiva: Neuer foi o mais importante em campo ao longo do ano; Messi foi o melhor jogador do principal torneio de selecções; Ronaldo foi o melhor marcador de um clube que ganhou muitos títulos. É discutível — mas a decisão não era óbvia.",
    bdor_2016_p1:
      "A narrativa para 2016 escreve-se sozinha: Champions League e Euro 2016 no mesmo ano civil. O problema é que os factos dentro desses torneios contam uma história diferente.",
    bdor_2016_p2:
      "Na Champions, Ronaldo foi o melhor marcador com 16 golos — mas 11 deles chegaram na fase de grupos, em jogos com Malmö FF e Shakhtar. A partir das meias-finais e na final, não marcou. O MVP da final foi Sergio Ramos.",
    bdor_2016_p3:
      "No Euro 2016, a campanha de Portugal começou com resultados negativos: zero vitórias na fase de grupos, terceiro classificado, penálti falhado frente à Áustria. Nos jogos a eliminar, Ronaldo marcou contra a Hungria e o País de Gales, mas nos momentos que realmente definiram o torneio foram outros. Contra a Croácia, o golo decisivo foi de Quaresma; contra a Polónia, foi Quaresma a converter o penálti que qualificou Portugal nos desempates; na final com a França, Ronaldo saiu lesionado aos 25 minutos e Portugal ganhou 1-0 graças a um golo de Éder e a uma exibição defensiva liderada por Pepe e Rui Patrício. O melhor jogador do Euro foi Antoine Griezmann.",
    bdor_2016_p4:
      "Messi, nesse mesmo ano, ganhou La Liga, a Taça do Rei, chegou à final da Copa América e somou 91 golos e assistências no total — foi eleito melhor avançado da Liga espanhola e terminou o ano civil com números superiores.",
    bdor_2016_p5:
      "O que aconteceu em 2016 é um caso claro de prémio baseado em troféus colectivos — que é um critério legítimo — mas sem que o jogador premiado fosse o protagonista real em nenhum deles. Os colegas de equipa no Real Madrid e em Portugal têm tanto mérito nesses títulos quanto Ronaldo, e em vários momentos decisivos mais.",
    bdor_2017_p1:
      "2017 é, dos cinco anos analisados, o mais defensável para Ronaldo.",
    bdor_2017_p2:
      "Ambos tiveram épocas fortes. Messi ganhou a Bota de Ouro, foi eleito melhor playmaker do ano pela IFFHS, recebeu reconhecimento individual em vários meios de comunicação e terminou com números ligeiramente superiores em golos e assistências. Ganhou apenas a Taça de Espanha em termos de títulos colectivos.",
    bdor_2017_p3:
      "Ronaldo marcou dois golos na final da Champions — a confirmar o padrão de aparecimento nos jogos grandes — ganhou a Champions, a Liga espanhola, a Supertaça de Espanha, a Supertaça Europeia e o Mundial de Clubes. O volume de títulos ao longo da época é difícil de ignorar, e a diferença para Messi em golos e assistências era pequena.",
    bdor_2017_p4:
      "A única nota de contexto é que, tal como em 2016, a Champions desse ano foi marcada por polémicas arbitrais graves — documentadas na secção dedicada a essa competição.",
    bdor_summary_title: "Resumo: o padrão ao longo de uma década",
    bdor_summary_p: "A tabela abaixo é o dado mais revelador desta análise:",
    bdor_col_player: "Jogador",
    bdor_col_with_cl: "Bolas de Ouro com Champions",
    bdor_col_years_with: "Anos",
    bdor_col_without_cl: "Bolas de Ouro sem Champions",
    bdor_col_years_without: "Anos",
    bdor_summary_conclusion:
      "Ronaldo ganhou quatro dos seus cinco prémios em anos em que o Real Madrid venceu a Champions. Messi ganhou cinco dos seus oito prémios em anos sem Champions. A conclusão não é que um é melhor do que o outro por isso — é que o modelo de avaliação favorece sistematicamente quem ganha a competição mais mediática da Europa, independentemente do protagonismo individual. Ao longo da carreira, Messi manteve médias superiores em golos, assistências e prémios de melhor jogador, e com a vantagem adicional de nunca ter beneficiado dos bónus de marcador da Premier League que Ronaldo acumulou durante anos. Ronaldo destaca-se no capítulo de golos na Champions e no número de prémios de melhor marcador dessa competição — um registo impressionante, mas que corresponde ao papel de avançado de área de um clube que dominou a Europa durante um período. Esses golos e esses títulos têm o seu mérito. Mas o currículo como argumento de superioridade absoluta sobre Messi assenta, em parte significativa, na Champions — e é aí que a análise se torna mais complexa.",
  },

  en: {
    nav_ballon: "Ballon D'Or",
    nav_ucl: "Rigged UCL",
    nav_managers: "Managers",
    nav_selfish: "Selfishness",
    nav_character: "Character & Behaviour",
    nav_national: "National Team",
    nav_crying: "Crying",
    nav_hypocrisy: "Hypocrisy",
    nav_liga: "Bought League",
    nav_messi: "Why Messi",
    hero_tag: "Critical Analysis",
    hero_subtitle:
      "A data-driven analysis based on facts and public statements about Cristiano Ronaldo's career — Ballon d'Or controversies, Champions League, sacked managers, selfishness, hypocrisy and much more.",
    hero_cta: "Start reading",
    hero_meta: "7 sections · 44 pages of analysis",
    label_ballon: "Ballon D'Or",
    label_ucl: "Champions League",
    label_managers: "Sacked Managers",
    label_selfish: "Selfishness",
    label_character: "Behaviour",
    label_national: "Carried by National Team",
    label_crying: "Crying on Internet",
    label_hypocrisy: "Hypocrisy",
    label_liga: "Bought League",
    label_messi: "Why Messi is Better",
    title_ballon: "Ballon D'Or",
    title_ucl: "The Champions League That Wasn't Clean",
    title_managers: "Sacked Managers",
    title_selfish: "Selfishness On and Off the Pitch",
    title_character: "Character & Behaviour",
    title_national: "Portugal Carried Ronaldo",
    title_crying: "Crying on the Internet",
    title_hypocrisy: "Hypocrisy",
    title_liga: "Bought League & Dubai d'Or",
    title_messi: "Why Messi is Better",
    character_selfish_title: "The One-Man Show",
    character_selfish_subtitle:
      "How set pieces, body language and teammates' choices keep circling back to him.",
    character_crying_title: "Cry, Post, Repeat",
    character_crying_subtitle:
      "The tears, the apologies and the digital drama that keep becoming content.",
    character_hypocrisy_title: "Hypocrisy",
    character_hypocrisy_subtitle:
      "Records, dignity and Saudi money: what he says versus what he does.",
    footer_desc:
      "A critical analysis based on public data, documented statements and sporting records. All texts are transcribed directly from the original source.",
    footer_about: "About",
    footer_donate: "Donate",
    footer_contact: "Contact",
    footer_copy:
      "Critical analysis of Cristiano Ronaldo's career · Based on documented facts",

    // Ballon d'Or section
    bdor_2008:
      "Nothing to debate. Back-to-back English champion, Champions League winner and European Golden Boot. Performance and trophies align without ambiguity — he is the best player of the year.",
    bdor_2013_p1:
      "Ronaldo's first Ballon d'Or deserved more debate than it received. The player who won it finished the season without a single collective trophy — zero leagues, zero cups, zero Champions League. The other two finalists, Messi and Ribéry, combined titles with superior individual performances throughout the entire season.",
    bdor_2013_p2:
      "In the Champions League, Real Madrid were eliminated in the semi-finals by Borussia Dortmund after a 4-1 first-leg defeat in which Ronaldo scored just once — and didn't score in the second leg either. It is worth noting that seven of his European goals that season came in four games against Galatasaray and Ajax; when the opponents were of a higher standard, his output disappeared.",
    bdor_2013_p3:
      "For the Portuguese national team, in qualification for the 2014 World Cup, Ronaldo did not lead the group stage in goals — he ranked 27th with four goals in eight games. In the play-offs he contributed decisively with a hat-trick against Sweden, securing qualification. It is a real moment, but limited to two games in a long campaign.",
    bdor_2013_p4:
      "The detail that most questions the decision: for the first time in history, France Football extended the eligibility period of the vote — precisely to the date of that game against Sweden. The extension allowed the only notable moment of Ronaldo's end-of-season run to enter the criteria.",
    bdor_2013_quote:
      "The honest contest was between Messi and Ribéry. Both finished the season with titles and superior performances sustained for longer. The award went to whoever scored 69 goals in total — a distinction which, as the Golden Boot trophy exists to recognise, serves a different purpose.",
    bdor_2014_p1:
      "This is the hardest year to judge, and honesty requires acknowledging that Ronaldo had real arguments. He was the Champions League top scorer, broke the competition's goals record, and won La Liga, the Copa del Rey and the Champions League with Real Madrid. In terms of raw numbers, the case is solid.",
    bdor_2014_p2: "The controversy, however, is legitimate for two reasons.",
    bdor_2014_p3:
      "The first is internal to Real Madrid: in the finals that defined the season, Ronaldo was rarely the decisive figure. Gareth Bale was the most influential in both the Champions League final and the Copa del Rey final. Sergio Ramos scored the goal that took the Champions League final to extra time. Di María was voted the best player on the pitch in that same final. Ronaldo scored a penalty already in extra time, with the game controlled. He scored, yes — but on a stage where others were more important.",
    bdor_2014_p4:
      'The second is through the national team: Portugal were eliminated in the group stage of the Brazil World Cup in a group with Ghana and the United States. It is one of the worst World Cup campaigns in the country\'s recent history and weighs directly against the argument of "best player in the world".',
    bdor_2014_p5:
      "Looking at the other two candidates: Messi reached the World Cup final, was named its best player, and had a high-level calendar year; his disadvantage was not winning the World Cup or La Liga. Neuer won the Bundesliga, the DFB-Pokal, the German Super Cup and the World Cup itself, was named the best goalkeeper of the competition and the most dominant in his position throughout the entire season.",
    bdor_2014_p6:
      "The central argument questioning Ronaldo is simple: his goals appear in the record books, but the Real Madrid team — Bale, Ramos, Di María, Modric — had such a decisive weight in the titles that attributing individual merit to a single player is an exercise in narrative, not analysis. The Golden Boot exists precisely to recognise the best scorer. The Ballon d'Or should measure more than that.",
    bdor_2014_p7:
      "In retrospect: Neuer was the most important player on the pitch throughout the year; Messi was the best player in the main international tournament; Ronaldo was the top scorer at a club that won many titles. It is debatable — but the decision was not obvious.",
    bdor_2016_p1:
      "The narrative for 2016 writes itself: Champions League and Euro 2016 in the same calendar year. The problem is that the facts within those tournaments tell a different story.",
    bdor_2016_p2:
      "In the Champions League, Ronaldo was the top scorer with 16 goals — but 11 of them came in the group stage, in games against Malmö FF and Shakhtar. From the semi-finals onwards and in the final, he did not score. The final MVP was Sergio Ramos.",
    bdor_2016_p3:
      "At Euro 2016, Portugal's campaign started with negative results: zero wins in the group stage, finishing third, a missed penalty against Austria. In the knockout rounds, Ronaldo scored against Hungary and Wales, but the moments that truly defined the tournament were delivered by others. Against Croatia, the decisive goal was Quaresma's; against Poland, it was Quaresma who converted the penalty that qualified Portugal in the shootout; in the final against France, Ronaldo went off injured at 25 minutes and Portugal won 1-0 thanks to Éder's goal and a defensive display led by Pepe and Rui Patrício. The best player of the Euro was Antoine Griezmann.",
    bdor_2016_p4:
      "Messi, in that same year, won La Liga, the Copa del Rey, reached the Copa América final and totalled 91 goals and assists — he was named best forward in the Spanish league and finished the calendar year with superior numbers.",
    bdor_2016_p5:
      "What happened in 2016 is a clear case of an award based on collective trophies — which is a legitimate criterion — but without the awarded player being the real protagonist in any of them. Teammates at Real Madrid and in Portugal have as much merit in those titles as Ronaldo does, and in several decisive moments more.",
    bdor_2017_p1:
      "2017 is, of the five years analysed, the most defensible for Ronaldo.",
    bdor_2017_p2:
      "Both had strong seasons. Messi won the Golden Boot, was named best playmaker of the year by IFFHS, received individual recognition in various media outlets and finished with slightly superior numbers in goals and assists. He won only the Copa del Rey in collective titles.",
    bdor_2017_p3:
      "Ronaldo scored two goals in the Champions League final — confirming the pattern of showing up in big games — won the Champions League, La Liga, the Spanish Super Cup, the UEFA Super Cup and the Club World Cup. The volume of titles throughout the season is hard to ignore, and the gap to Messi in goals and assists was small.",
    bdor_2017_p4:
      "The only contextual note is that, as in 2016, that year's Champions League was marked by serious refereeing controversies — documented in the section dedicated to that competition.",
    bdor_summary_title: "Summary: the pattern over a decade",
    bdor_summary_p:
      "The table below is the most revealing data point of this analysis:",
    bdor_col_player: "Player",
    bdor_col_with_cl: "Ballon d'Ors Won With CL",
    bdor_col_years_with: "Years",
    bdor_col_without_cl: "Ballon d'Ors Won Without CL",
    bdor_col_years_without: "Years",
    bdor_summary_conclusion:
      "Ronaldo won four of his five awards in years when Real Madrid won the Champions League. Messi won five of his eight awards in years without the Champions League. The conclusion is not that one is better than the other because of this — it is that the evaluation model systematically favours whoever wins Europe's most high-profile competition, regardless of individual starring role. Throughout their careers, Messi maintained superior averages in goals, assists and best player awards, with the additional advantage of never having benefited from the Premier League scorer bonuses Ronaldo accumulated for years. Ronaldo stands out in the chapter of Champions League goals and top scorer awards in that competition — an impressive record, but one that corresponds to the role of a penalty-box striker at a club that dominated Europe for a period. Those goals and those titles have their merit. But the CV as an argument for absolute superiority over Messi rests, in significant part, on the Champions League — and that is where the analysis becomes more complex.",
  },

  es: {
    nav_ballon: "Ballon D'Or",
    nav_ucl: "UCL Amañada",
    nav_managers: "Entrenadores",
    nav_selfish: "Egoísmo",
    nav_character: "Carácter & Comportamiento",
    nav_national: "Selección",
    nav_crying: "Llorando",
    nav_hypocrisy: "Hipocresía",
    nav_liga: "Liga Comprada",
    nav_messi: "Por qué Messi",
    hero_tag: "Análisis Crítico",
    hero_subtitle:
      "Un análisis basado en datos, hechos y declaraciones públicas sobre la carrera de Cristiano Ronaldo — Balones de Oro, Champions League, entrenadores despedidos, egoísmo, hipocresía y mucho más.",
    hero_cta: "Empezar a leer",
    hero_meta: "7 secciones · 44 páginas de análisis",
    label_ballon: "Ballon D'Or",
    label_ucl: "Champions League",
    label_managers: "Entrenadores Despedidos",
    label_selfish: "Egoísmo",
    label_character: "Comportamiento",
    label_national: "Llevado por la Selección",
    label_crying: "Llorando en Internet",
    label_hypocrisy: "Hipocresía",
    label_liga: "Liga Comprada",
    label_messi: "Por qué Messi es Mejor",
    title_ballon: "Ballon D'Or",
    title_ucl: "La Champions League que No Fue Limpia",
    title_managers: "Entrenadores Despedidos",
    title_selfish: "Egoísmo Dentro y Fuera del Campo",
    title_character: "Carácter & Comportamiento",
    title_national: "Portugal Cargó a Ronaldo",
    title_crying: "Llorando en Internet",
    title_hypocrisy: "Hipocresía",
    title_liga: "Liga Comprada & Dubai d'Or",
    title_messi: "Por qué Messi es Mejor",
    character_selfish_title: "El Show de Uno Solo",
    character_selfish_subtitle:
      "Cómo los libres, los penaltis y el lenguaje corporal vuelven siempre a él.",
    character_crying_title: "Llora, Publica, Repite",
    character_crying_subtitle:
      "Las lágrimas, las disculpas y el drama digital que no dejan de convertirse en contenido.",
    character_hypocrisy_title: "Hipocresía",
    character_hypocrisy_subtitle:
      "Récords, dignidad y dinero saudí: lo que dice frente a lo que hace.",
    footer_desc:
      "Un análisis crítico basado en datos públicos, declaraciones documentadas y registros deportivos. Todos los textos están transcritos directamente de la fuente original.",
    footer_about: "Sobre",
    footer_donate: "Donar",
    footer_contact: "Contacto",
    footer_copy:
      "Análisis crítico de la carrera de Cristiano Ronaldo · Basado en hechos documentados",

    bdor_2008:
      "Nada que debatir. Campeón inglés dos años consecutivos, ganador de la Champions League y Bota de Oro europea. Rendimiento y trofeos se alinean sin ambigüedad — es el mejor jugador del año.",
    bdor_2013_p1:
      "El primer Balón de Oro de Ronaldo merecía más debate del que recibió. El jugador que lo ganó terminó la temporada sin un solo trofeo colectivo — cero ligas, cero copas, cero Champions. Los otros dos finalistas, Messi y Ribéry, acumulaban títulos y rendimientos individuales superiores durante toda la temporada.",
    bdor_2013_p2:
      "En la Champions, el Real Madrid fue eliminado en semifinales por el Borussia Dortmund tras una derrota por 4-1 en la ida en la que Ronaldo marcó solo una vez — y no volvió a marcar en la vuelta. Vale señalar que siete de sus goles europeos esa temporada llegaron en cuatro partidos contra Galatasaray y Ajax; cuando los rivales eran de mayor nivel, la producción desaparecía.",
    bdor_2013_p3:
      "Con la selección portuguesa, en la clasificación para el Mundial de 2014, Ronaldo no lideró la fase de grupos en goles — quedó en el puesto 27 con cuatro goles en ocho partidos. En los play-offs contribuyó de forma decisiva con un hat-trick ante Suecia, asegurando la clasificación. Es un momento real, pero limitado a dos partidos de una larga campaña.",
    bdor_2013_p4:
      "El detalle que más cuestiona la decisión: por primera vez en la historia, France Football amplió el período de elegibilidad de la votación — precisamente hasta la fecha de ese partido con Suecia. La ampliación permitió que el único momento destacado de Ronaldo al final de la temporada entrara en los criterios.",
    bdor_2013_quote:
      "La disputa honesta era entre Messi y Ribéry. Ambos terminaron la temporada con títulos y actuaciones superiores durante más tiempo. El premio fue para quien marcó 69 goles en total — una distinción que, como existe el trofeo de la Bota de Oro para reconocer, sirve otro propósito.",
    bdor_2014_p1:
      "Este es el año más difícil de juzgar, y la honestidad obliga a reconocer que Ronaldo tenía argumentos reales. Fue el máximo goleador de la Champions, batió el récord de goles en la competición, ganó La Liga, la Copa del Rey y la Champions con el Real Madrid. En términos de números brutos, el expediente es sólido.",
    bdor_2014_p2: "La polémica, sin embargo, es legítima por dos razones.",
    bdor_2014_p3:
      "La primera es interna al Real Madrid: en las finales que definieron la temporada, Ronaldo raramente fue la figura decisiva. Gareth Bale fue el más determinante en la final de la Champions y en la final de la Copa del Rey. Sergio Ramos marcó el gol que llevó la final de la Champions a la prórroga. Di María fue elegido el mejor jugador en el campo en esa misma final. Ronaldo marcó un penalti ya en la prórroga, con el partido controlado. Marcó, sí — pero en un escenario en el que otros fueron más importantes.",
    bdor_2014_p4:
      'La segunda es con la selección: Portugal fue eliminado en la fase de grupos del Mundial de Brasil en un grupo con Ghana y Estados Unidos. Es una de las peores campañas mundialistas de la historia reciente del país y pesa directamente contra el argumento de "mejor jugador del mundo".',
    bdor_2014_p5:
      "En cuanto a los otros dos candidatos: Messi llegó a la final del Mundial, fue elegido su mejor jugador, y tuvo un año civil de alto nivel; su desventaja fue no ganar el Campeonato del Mundo ni La Liga. Neuer ganó la Bundesliga, la Copa, la Supercopa alemana y el propio Mundial, fue elegido el mejor portero de la competición y el más dominante en su posición durante toda la temporada.",
    bdor_2014_p6:
      "El argumento central que cuestiona a Ronaldo es simple: sus goles figuran en los libros de récords, pero el equipo del Real Madrid — Bale, Ramos, Di María, Modric — tuvo un peso tan determinante en los títulos que atribuir el mérito individual a un solo jugador es un ejercicio narrativo, no analítico. La Bota de Oro existe precisamente para reconocer al mejor goleador. El Balón de Oro debería medir más que eso.",
    bdor_2014_p7:
      "En retrospectiva: Neuer fue el más importante en el campo a lo largo del año; Messi fue el mejor jugador del principal torneo de selecciones; Ronaldo fue el máximo goleador de un club que ganó muchos títulos. Es discutible — pero la decisión no era obvia.",
    bdor_2016_p1:
      "La narrativa para 2016 se escribe sola: Champions League y Eurocopa 2016 en el mismo año natural. El problema es que los hechos dentro de esos torneos cuentan una historia diferente.",
    bdor_2016_p2:
      "En la Champions, Ronaldo fue el máximo goleador con 16 goles — pero 11 de ellos llegaron en la fase de grupos, en partidos contra Malmö FF y Shakhtar. A partir de las semifinales y en la final, no marcó. El MVP de la final fue Sergio Ramos.",
    bdor_2016_p3:
      "En la Eurocopa 2016, la campaña de Portugal empezó con resultados negativos: cero victorias en la fase de grupos, tercer clasificado, penalti fallado ante Austria. En los partidos eliminatorios, Ronaldo marcó ante Hungría y Gales, pero los momentos que realmente definieron el torneo los protagonizaron otros. Ante Croacia, el gol decisivo fue de Quaresma; ante Polonia, fue Quaresma quien convirtió el penalti que clasificó a Portugal en la tanda; en la final ante Francia, Ronaldo salió lesionado a los 25 minutos y Portugal ganó 1-0 gracias a un gol de Éder y a una exhibición defensiva liderada por Pepe y Rui Patrício. El mejor jugador de la Eurocopa fue Antoine Griezmann.",
    bdor_2016_p4:
      "Messi, ese mismo año, ganó La Liga, la Copa del Rey, llegó a la final de la Copa América y acumuló 91 goles y asistencias en total — fue elegido mejor delantero de la Liga española y terminó el año natural con números superiores.",
    bdor_2016_p5:
      "Lo que ocurrió en 2016 es un caso claro de premio basado en trofeos colectivos — que es un criterio legítimo — pero sin que el jugador premiado fuera el protagonista real en ninguno de ellos. Los compañeros de equipo en el Real Madrid y en Portugal tienen tanto mérito en esos títulos como Ronaldo, y en varios momentos decisivos más.",
    bdor_2017_p1:
      "2017 es, de los cinco años analizados, el más defendible para Ronaldo.",
    bdor_2017_p2:
      "Ambos tuvieron temporadas fuertes. Messi ganó la Bota de Oro, fue elegido mejor playmaker del año por la IFFHS, recibió reconocimiento individual en varios medios y terminó con números ligeramente superiores en goles y asistencias. Solo ganó la Copa del Rey en términos de títulos colectivos.",
    bdor_2017_p3:
      "Ronaldo marcó dos goles en la final de la Champions — confirmando el patrón de aparecer en los grandes partidos — ganó la Champions, La Liga, la Supercopa de España, la Supercopa Europea y el Mundial de Clubes. El volumen de títulos a lo largo de la temporada es difícil de ignorar, y la diferencia con Messi en goles y asistencias era pequeña.",
    bdor_2017_p4:
      "La única nota de contexto es que, al igual que en 2016, la Champions de ese año estuvo marcada por graves polémicas arbitrales — documentadas en la sección dedicada a esa competición.",
    bdor_summary_title: "Resumen: el patrón a lo largo de una década",
    bdor_summary_p:
      "La tabla siguiente es el dato más revelador de este análisis:",
    bdor_col_player: "Jugador",
    bdor_col_with_cl: "Balones de Oro con Champions",
    bdor_col_years_with: "Años",
    bdor_col_without_cl: "Balones de Oro sin Champions",
    bdor_col_years_without: "Años",
    bdor_summary_conclusion:
      "Ronaldo ganó cuatro de sus cinco premios en años en que el Real Madrid ganó la Champions. Messi ganó cinco de sus ocho premios en años sin Champions. La conclusión no es que uno sea mejor que el otro por eso — es que el modelo de evaluación favorece sistemáticamente a quien gana la competición más mediática de Europa, independientemente del protagonismo individual. A lo largo de sus carreras, Messi mantuvo promedios superiores en goles, asistencias y premios al mejor jugador, con la ventaja adicional de nunca haber beneficiado de los bonus de goleador de la Premier League que Ronaldo acumuló durante años. Ronaldo destaca en el capítulo de goles en la Champions y en el número de premios al máximo goleador de esa competición — un registro impresionante, pero que corresponde al papel de delantero de área en un club que dominó Europa durante un período. Esos goles y esos títulos tienen su mérito. Pero el currículum como argumento de superioridad absoluta sobre Messi se sustenta, en parte significativa, en la Champions — y es ahí donde el análisis se vuelve más complejo.",
  },

  fr: {
    nav_ballon: "Ballon D'Or",
    nav_ucl: "UCL Truquée",
    nav_managers: "Entraîneurs",
    nav_selfish: "Égoïsme",
    nav_character: "Caractère & Comportement",
    nav_national: "Équipe Nationale",
    nav_crying: "Pleurs",
    nav_hypocrisy: "Hypocrisie",
    nav_liga: "Ligue Achetée",
    nav_messi: "Messi est Meilleur",
    hero_tag: "Analyse Critique",
    hero_subtitle:
      "Une analyse basée sur des données, des faits et des déclarations publiques sur la carrière de Cristiano Ronaldo — Ballons d'Or, Ligue des Champions, entraîneurs licenciés, égoïsme, hypocrisie et bien plus encore.",
    hero_cta: "Commencer à lire",
    hero_meta: "7 sections · 44 pages d'analyse",
    label_ballon: "Ballon D'Or",
    label_ucl: "Ligue des Champions",
    label_managers: "Entraîneurs Licenciés",
    label_selfish: "Égoïsme",
    label_character: "Comportement",
    label_national: "Porté par l'Équipe Nationale",
    label_crying: "Pleurs sur Internet",
    label_hypocrisy: "Hypocrisie",
    label_liga: "Ligue Achetée",
    label_messi: "Pourquoi Messi est Meilleur",
    title_ballon: "Ballon D'Or",
    title_ucl: "La Ligue des Champions qui N'était Pas Propre",
    title_managers: "Entraîneurs Licenciés",
    title_selfish: "Égoïsme Sur et Hors du Terrain",
    title_character: "Caractère & Comportement",
    title_national: "Le Portugal a Porté Ronaldo",
    title_crying: "Pleurs sur Internet",
    title_hypocrisy: "Hypocrisie",
    title_liga: "Ligue Achetée & Dubai d'Or",
    title_messi: "Pourquoi Messi est Meilleur",
    character_selfish_title: "Le Spectacle d'un Seul Homme",
    character_selfish_subtitle:
      "Comment les coups de pied arrêtés, le langage corporel et les choix des coéquipiers reviennent toujours à lui.",
    character_crying_title: "Pleure, Publie, Recommence",
    character_crying_subtitle:
      "Les larmes, les excuses et le drame numérique qui deviennent sans cesse du contenu.",
    character_hypocrisy_title: "Hypocrisie",
    character_hypocrisy_subtitle:
      "Records, dignité et argent saoudien : ce qu'il dit face à ce qu'il fait.",
    footer_desc:
      "Une analyse critique basée sur des données publiques, des déclarations documentées et des records sportifs. Tous les textes sont transcrits directement de la source originale.",
    footer_about: "À propos",
    footer_donate: "Faire un don",
    footer_contact: "Contact",
    footer_copy:
      "Analyse critique de la carrière de Cristiano Ronaldo · Basée sur des faits documentés",

    bdor_2008:
      "Rien à débattre. Champion d'Angleterre deux années consécutives, vainqueur de la Ligue des Champions et du Soulier d'Or européen. Performance et trophées s'alignent sans ambiguïté — c'est le meilleur joueur de l'année.",
    bdor_2013_p1:
      "Le premier Ballon d'Or de Ronaldo méritait plus de débat qu'il n'en a reçu. Le joueur qui l'a remporté a terminé la saison sans un seul trophée collectif — zéro ligue, zéro coupe, zéro Ligue des Champions. Les deux autres finalistes, Messi et Ribéry, cumulaient titres et performances individuelles supérieures tout au long de la saison.",
    bdor_2013_p2:
      "En Ligue des Champions, le Real Madrid a été éliminé en demi-finale par le Borussia Dortmund après une défaite 4-1 à l'aller lors de laquelle Ronaldo n'avait marqué qu'une fois — et n'a plus marqué au retour. Il convient de noter que sept de ses buts européens cette saison sont venus en quatre matches contre Galatasaray et l'Ajax ; face à des adversaires de niveau supérieur, sa production disparaissait.",
    bdor_2013_p3:
      "Avec la sélection portugaise, lors des qualifications pour la Coupe du Monde 2014, Ronaldo n'a pas mené la phase de groupes en buts — il s'est classé 27e avec quatre buts en huit matches. En barrages, il a contribué de manière décisive avec un hat-trick contre la Suède, assurant la qualification. C'est un moment réel, mais limité à deux matches d'une longue campagne.",
    bdor_2013_p4:
      "Le détail qui remet le plus en question la décision : pour la première fois dans l'histoire, France Football a étendu la période d'éligibilité du vote — précisément jusqu'à la date de ce match contre la Suède. Cette extension a permis que le seul moment marquant de Ronaldo en fin de saison entre dans les critères.",
    bdor_2013_quote:
      "La vraie compétition opposait Messi et Ribéry. Tous deux ont terminé la saison avec des titres et des performances supérieures sur une période plus longue. Le prix est allé à celui qui avait marqué 69 buts au total — une distinction que le trophée du Soulier d'Or existe précisément pour reconnaître, remplissant un autre rôle.",
    bdor_2014_p1:
      "C'est l'année la plus difficile à juger, et l'honnêteté oblige à reconnaître que Ronaldo avait de vrais arguments. Il a été le meilleur buteur de la Ligue des Champions, a battu le record de buts dans la compétition, a remporté La Liga, la Coupe du Roi et la Ligue des Champions avec le Real Madrid. En termes de chiffres bruts, le dossier est solide.",
    bdor_2014_p2: "La controverse est néanmoins légitime pour deux raisons.",
    bdor_2014_p3:
      "La première est interne au Real Madrid : lors des finales qui ont défini la saison, Ronaldo a rarement été la figure décisive. Gareth Bale a été le plus déterminant en finale de la Ligue des Champions et en finale de la Coupe du Roi. Sergio Ramos a marqué le but qui a renvoyé la finale de la Ligue des Champions aux prolongations. Di María a été élu meilleur joueur sur le terrain lors de cette même finale. Ronaldo a marqué un penalty déjà en prolongation, avec le match maîtrisé. Il a marqué, oui — mais sur une scène où d'autres ont été plus importants.",
    bdor_2014_p4:
      "La seconde concerne la sélection : le Portugal a été éliminé en phase de groupes du Mondial au Brésil dans un groupe avec le Ghana et les États-Unis. C'est l'une des pires campagnes mondialistes de l'histoire récente du pays et cela pèse directement contre l'argument du « meilleur joueur du monde ».",
    bdor_2014_p5:
      "Du côté des deux autres candidats : Messi a atteint la finale du Mondial, a été élu son meilleur joueur, et a eu une année civile de haut niveau ; son désavantage était de ne pas avoir remporté la Coupe du Monde ni La Liga. Neuer a gagné la Bundesliga, la Coupe, la Supercoupe d'Allemagne et le Mondial lui-même, a été élu meilleur gardien de la compétition et le plus dominant à son poste tout au long de la saison.",
    bdor_2014_p6:
      "L'argument central qui remet Ronaldo en question est simple : ses buts figurent dans les livres de records, mais l'équipe du Real Madrid — Bale, Ramos, Di María, Modric — a eu un poids si déterminant dans les titres qu'attribuer le mérite individuel à un seul joueur est un exercice narratif, pas analytique. Le Soulier d'Or existe précisément pour reconnaître le meilleur buteur. Le Ballon d'Or devrait mesurer davantage que cela.",
    bdor_2014_p7:
      "En rétrospective : Neuer a été le plus important sur le terrain tout au long de l'année ; Messi a été le meilleur joueur du principal tournoi des sélections ; Ronaldo a été le meilleur buteur d'un club qui a remporté de nombreux titres. C'est discutable — mais la décision n'était pas évidente.",
    bdor_2016_p1:
      "La narrative pour 2016 s'écrit d'elle-même : Ligue des Champions et Euro 2016 la même année civile. Le problème est que les faits à l'intérieur de ces tournois racontent une histoire différente.",
    bdor_2016_p2:
      "En Ligue des Champions, Ronaldo a été le meilleur buteur avec 16 buts — mais 11 d'entre eux sont venus en phase de groupes, lors de matches contre Malmö FF et le Shakhtar. À partir des demi-finales et en finale, il n'a pas marqué. Le MVP de la finale était Sergio Ramos.",
    bdor_2016_p3:
      "À l'Euro 2016, la campagne du Portugal a débuté par des résultats négatifs : zéro victoire en phase de groupes, troisième au classement, pénalty raté contre l'Autriche. Dans les matches à élimination directe, Ronaldo a marqué contre la Hongrie et le Pays de Galles, mais les moments qui ont vraiment défini le tournoi ont été produits par d'autres. Contre la Croatie, le but décisif était de Quaresma ; contre la Pologne, c'est Quaresma qui a converti le pénalty qualificatif aux tirs au but ; en finale contre la France, Ronaldo est sorti blessé à la 25e minute et le Portugal a gagné 1-0 grâce à un but d'Éder et à une prestation défensive menée par Pepe et Rui Patrício. Le meilleur joueur de l'Euro était Antoine Griezmann.",
    bdor_2016_p4:
      "Messi, cette même année, a remporté La Liga, la Coupe du Roi, atteint la finale de la Copa América et totalisé 91 buts et passes décisives — il a été élu meilleur attaquant de la Liga espagnole et a terminé l'année civile avec des chiffres supérieurs.",
    bdor_2016_p5:
      "Ce qui s'est passé en 2016 est un cas clair de prix basé sur des trophées collectifs — ce qui est un critère légitime — mais sans que le joueur récompensé soit le vrai protagoniste dans aucun d'entre eux. Les coéquipiers du Real Madrid et du Portugal ont autant de mérite dans ces titres que Ronaldo, et à plusieurs moments décisifs davantage.",
    bdor_2017_p1:
      "2017 est, des cinq années analysées, la plus défendable pour Ronaldo.",
    bdor_2017_p2:
      "Tous deux ont eu des saisons solides. Messi a remporté le Soulier d'Or, a été élu meilleur meneur de jeu de l'année par l'IFFHS, a reçu une reconnaissance individuelle dans plusieurs médias et a terminé avec des chiffres légèrement supérieurs en buts et passes décisives. Il n'a remporté que la Coupe du Roi en termes de titres collectifs.",
    bdor_2017_p3:
      "Ronaldo a marqué deux buts en finale de la Ligue des Champions — confirmant le schéma des grandes sorties — a remporté la Ligue des Champions, La Liga, la Supercoupe d'Espagne, la Supercoupe de l'UEFA et la Coupe du Monde des clubs. Le volume de titres tout au long de la saison est difficile à ignorer, et l'écart avec Messi en buts et passes décisives était faible.",
    bdor_2017_p4:
      "La seule note de contexte est que, comme en 2016, la Ligue des Champions de cette année-là a été marquée par de graves controverses arbitrales — documentées dans la section consacrée à cette compétition.",
    bdor_summary_title: "Résumé : le schéma sur une décennie",
    bdor_summary_p:
      "Le tableau ci-dessous est la donnée la plus révélatrice de cette analyse :",
    bdor_col_player: "Joueur",
    bdor_col_with_cl: "Ballons d'Or avec la LDC",
    bdor_col_years_with: "Années",
    bdor_col_without_cl: "Ballons d'Or sans la LDC",
    bdor_col_years_without: "Années",
    bdor_summary_conclusion:
      "Ronaldo a remporté quatre de ses cinq prix lors d'années où le Real Madrid a gagné la Ligue des Champions. Messi a remporté cinq de ses huit prix lors d'années sans Ligue des Champions. La conclusion n'est pas que l'un est meilleur que l'autre pour autant — c'est que le modèle d'évaluation favorise systématiquement celui qui remporte la compétition la plus médiatisée d'Europe, indépendamment du rôle individuel. Tout au long de leur carrière, Messi a maintenu des moyennes supérieures en buts, passes décisives et prix de meilleur joueur, avec l'avantage supplémentaire de n'avoir jamais bénéficié des bonus de buteur de la Premier League qu'a accumulés Ronaldo pendant des années. Ronaldo se distingue dans le chapitre des buts en Ligue des Champions et du nombre de prix de meilleur buteur de cette compétition — un palmarès impressionnant, mais qui correspond au rôle d'avant-centre d'un club qui a dominé l'Europe pendant une période. Ces buts et ces titres ont leur mérite. Mais le CV comme argument de supériorité absolue sur Messi repose, dans une part significative, sur la Ligue des Champions — et c'est là que l'analyse devient plus complexe.",
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (key) =>
    translations[lang]?.[key] || translations["en"][key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
