import React from "react";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import { useI18n } from "../lib/i18n";

const content = {
  en: {
    title: "Hypocrisy",
    h1: '"I don\'t chase records" — but lives for them',
    p1: 'Ronaldo has repeated the phrase for years: "I don\'t chase records, records chase me." It sounds good in interviews, but the way he managed the end of his career says the opposite.',
    p2: "He stayed in the national team long after his competitive peak, insisting on starting at Euros and World Cups where he was one of the least productive players on the pitch — mainly to accumulate caps and goals. He chose the Saudi league, well below the competitive level of the European elite, precisely when he had no market at the top — but where he can keep adding goals and games in a far less demanding context. He continues to try to monopolise penalties and free kicks, even with poor efficiency and teammates who are stronger in that moment of the game.",
    p3: 'The phrase "I don\'t chase records" works as a slogan. The practice — national team at all costs, a lesser league to inflate numbers, set-piece monopoly — points to someone obsessed with exactly that.',
    h2: "Human rights, women and the Saudi cheque",
    p4: "In 2021, several outlets reported that Ronaldo turned down a contract of around €6–10 million per year to be the face of Saudi tourism, precisely because of the regime's human rights record. The decision was presented as a sign of conscience: he didn't want to be the face of a country associated with repression, executions and systematic discrimination against women.",
    p5: 'Two years later, he signs for Al-Nassr in a deal estimated at over €200 million per season and becomes, in effect, the global poster boy of the Saudi league and the regime\'s "Vision 2030". Amnesty International stated clearly that the signing is "part of a sportswashing strategy" and called on Ronaldo to use his platform to speak about political prisoners and gender inequality, rather than just praising the country.',
    p6: 'In a country where women were for decades treated as legal dependants of a male guardian, where gender equality activists were imprisoned and tortured, seeing Ronaldo help sell the image of a "cool new destination" is hard to reconcile with the 2021 version who allegedly turned down €10 million on principle. Human rights were a problem when the cheque was small; they stopped being one when the number of zeros changed.',
    h3: '"I want to finish with dignity, not in Qatar"… and ends up in Saudi Arabia',
    p7: 'In 2015, in a widely cited interview, Ronaldo said: "In my mind, I want to finish at the top. I want to finish with dignity, at a good club. I don\'t see myself going to the USA, Qatar or Dubai." The idea was clear: MLS and Gulf leagues were seen by him as pre-retirement destinations, incompatible with the image of a "top" player.',
    p8: 'Seven years later, that is precisely the path he takes. With no real market at elite clubs, he signs for Al-Nassr and goes to play in the Saudi Arabian championship — below the level he once criticised, but financially incomparable. The same argument — "Qatar/USA is end of the line, I want dignity" — now applies to himself.',
    p9: "There's nothing wrong with accepting that the body can't keep up and choosing one last big contract. The hypocrisy lies in years of superiority discourse about those who took the same path… until the money was enough to make \"dignity\" forgotten.",
    h4: "Mocking Xavi in Qatar… then living on the same map",
    p10: 'In 2016, in an exchange with Xavi, Ronaldo dismissed the Spaniard by noting he "plays in Qatar", as a way to diminish him in the Messi–Ronaldo debate. The implied message was simple: those who go to Qatar are at a lower level; those who stay at Real Madrid are "at the top".',
    p11: "Years later, Ronaldo himself ends up in an equivalent project in the same region — a peripheral Saudi league, giant salaries, competition far below the Champions League. The phrase used to belittle Xavi now fits his own sporting reality.",
    h5: "Conclusion",
    li1: "Says he doesn't chase records, but shapes his entire end of career around preserving and inflating them.",
    li2: "Refuses Saudi money over human rights… until the value is so high he lives and advertises in the same country.",
    li3: 'Says he wants to finish "with dignity", not in peripheral leagues — and ends up precisely in the Saudi championship.',
    li4: "Ridicules Xavi for playing in Qatar — and ends up in a similar sporting scenario, just with a bigger pay cheque.",
  },
  pt: {
    title: "Hipocrisia",
    h1: '"Não persigo recordes" - mas vive para eles',
    p1: 'Ronaldo repete há anos a frase: "Eu não persigo recordes, os recordes é que me perseguem." Soa bem em entrevista, mas a forma como geriu o fim de carreira diz o contrário.',
    p2: "Mantém-se na Seleção muito depois do auge competitivo, insistindo em ser titular em Euros e Mundiais onde é um dos jogadores menos produtivos em campo, sobretudo para acumular internacionalizações e golos. Escolhe a liga da Arábia Saudita, muito abaixo do nível competitivo da elite europeia, precisamente quando deixou de ter mercado nesse topo - mas onde pode continuar a somar golos e jogos em contexto muito menos exigente. Continua a tentar monopolizar penáltis e livres diretos, mesmo com eficácia pobre e colegas mais fortes nesse momento do jogo.",
    p3: 'A frase "não persigo recordes" funciona como slogan. A prática - Seleção a todo o custo, liga menor para inflacionar números, monopólio da bola parada - aponta para alguém obcecado exatamente com isso.',
    h2: "Direitos humanos, mulheres e o cheque saudita",
    p4: "Em 2021, vários órgãos noticiam que Ronaldo recusou um contrato de cerca de 6-10 milhões de euros por ano para ser rosto do turismo da Arábia Saudita, precisamente devido ao historial de violações de direitos humanos do regime. A decisão foi apresentada como sinal de consciência: não queria ser a cara de um país associado a repressão, execuções e discriminação sistemática de mulheres.",
    p5: 'Dois anos depois, assina pelo Al-Nassr num acordo estimado em mais de 200 milhões de euros por época e torna-se, de facto, o cartaz global da liga saudita e da "Visão 2030" do regime. A Amnistia Internacional diz claramente que a contratação é "parte de uma estratégia de sportswashing" e pede a Ronaldo que use a sua plataforma para falar de presos políticos e desigualdade de género, em vez de apenas elogiar o país.',
    p6: 'Num país onde as mulheres foram durante décadas tratadas como dependentes legais de um tutor masculino, onde ativistas pela igualdade de género foram presas e torturadas, ver Ronaldo ajudar a vender a imagem de "novo destino cool" é difícil de conciliar com a versão de 2021 que alegadamente recusou 10 milhões por questões de princípio. Os direitos humanos foram um problema enquanto o cheque era pequeno; deixaram de o ser quando o número de zeros mudou.',
    h3: '"Quero acabar com dignidade, não no Qatar"… e acaba na Arábia Saudita',
    p7: 'Em 2015, numa entrevista amplamente citada, Ronaldo disse: "Na minha cabeça, quero acabar no topo. Quero acabar com dignidade, num bom clube. Não me vejo a ir para os EUA, Qatar ou Dubai." A ideia era clara: MLS e campeonatos da região do Golfo eram vistos por ele como destinos de pré-reforma, incompatíveis com a imagem de jogador "de topo".',
    p8: 'Sete anos depois, é precisamente esse o caminho que escolhe. Sem mercado real em clubes de elite, assina pelo Al-Nassr e vai jogar para o campeonato da Arábia Saudita, desportivamente abaixo do nível que criticava, mas financeiramente incomparável. O mesmo argumento - "Qatar/EUA é fim de linha, eu quero dignidade" - passa a aplicar-se a si próprio.',
    p9: 'Não há nada de errado em aceitar que o corpo já não acompanha e escolher um último contrato grande. A hipocrisia está em anos de discurso de superioridade sobre quem fazia o mesmo caminho… até o dinheiro ser suficiente para fazer esquecer a "dignidade".',
    h4: "Gozo com Xavi no Qatar… e depois vida no mesmo mapa",
    p10: 'Em 2016, numa troca de declarações com Xavi, Ronaldo desvalorizou o espanhol lembrando que ele "joga no Qatar", como forma de o diminuir na discussão Messi-Ronaldo. A mensagem subentendida era simples: quem vai para o Qatar está num nível inferior; quem continua no Real Madrid está "no topo".',
    p11: "Anos mais tarde, o próprio Ronaldo acaba num projeto equivalente na mesma região - campeonato periférico da Arábia Saudita, salários gigantescos, competição muito abaixo da Champions. A frase que serviu para rebaixar Xavi encaixa agora na sua própria realidade desportiva.",
    h5: "Conclusão",
    li1: "Diz que não persegue recordes, mas molda todo o fim de carreira a preservá-los e inflacioná-los.",
    li2: "Recusa dinheiro saudita por direitos humanos… até o valor ser tão alto que passa a viver e a fazer publicidade no mesmo país.",
    li3: 'Diz que quer acabar "com dignidade", não em ligas periféricas - e acaba justamente no campeonato da Arábia Saudita.',
    li4: "Ridiculariza Xavi por jogar no Qatar - e termina num cenário desportivo semelhante, apenas com uma folha salarial maior.",
  },
  es: {
    title: "Hipocresía",
    h1: '"No persigo récords" — pero vive para ellos',
    p1: 'Ronaldo lleva años repitiendo la frase: "No persigo récords, los récords me persiguen". Suena bien como eslogan, pero la forma en que gestionó el final de su carrera dice lo contrario.',
    p2: "Se quedó en la selección mucho después de su pico competitivo, insistiendo en ser titular en Eurocopas y Mundiales donde era uno de los jugadores menos productivos del campo — sobre todo para acumular internacionalidades y goles. Eligió la liga saudí, muy por debajo del nivel competitivo de la élite europea, precisamente cuando ya no tenía mercado arriba — pero donde puede seguir sumando goles y partidos en un contexto mucho menos exigente. Sigue intentando monopolizar penaltis y libres, incluso con mala eficacia y compañeros más fuertes en ese momento del partido.",
    p3: 'La frase "no persigo récords" funciona como eslogan. La práctica — selección a cualquier precio, una liga menor para inflar cifras, monopolio del balón parado — apunta a alguien obsesionado precisamente con eso.',
    h2: "Derechos humanos, mujeres y el cheque saudí",
    p4: "En 2021, varios medios informaron que Ronaldo rechazó un contrato de unos 6-10 millones de euros al año para ser la cara del turismo saudí, precisamente por el historial de derechos humanos del régimen. La decisión se presentó como una muestra de conciencia: no quería ser la cara de un país asociado con represión, ejecuciones y discriminación sistemática contra las mujeres.",
    p5: 'Dos años después, firma con Al-Nassr en un acuerdo estimado en más de 200 millones de euros por temporada y se convierte, de hecho, en el cartel mundial de la liga saudí y de la "Visión 2030" del régimen. Amnistía Internacional dijo claramente que el fichaje es "parte de una estrategia de sportswashing" y pidió a Ronaldo que usara su plataforma para hablar de presos políticos y desigualdad de género, en vez de limitarse a elogiar el país.',
    p6: 'En un país donde durante décadas las mujeres fueron tratadas como dependientes legales de un tutor masculino, donde activistas por la igualdad de género fueron encarceladas y torturadas, ver a Ronaldo ayudar a vender la imagen de un "nuevo destino cool" es difícil de conciliar con la versión de 2021 que supuestamente rechazó 10 millones por principios. Los derechos humanos eran un problema cuando el cheque era pequeño; dejaron de serlo cuando cambiaron los ceros.',
    h3: '"Quiero acabar con dignidad, no en Qatar"… y termina en Arabia Saudí',
    p7: 'En 2015, en una entrevista muy citada, Ronaldo dijo: "En mi mente, quiero acabar en la cima. Quiero acabar con dignidad, en un buen club. No me veo yendo a EE. UU., Qatar o Dubái". La idea era clara: la MLS y las ligas del Golfo eran, para él, destinos de pre-retiro, incompatibles con la imagen de jugador "top".',
    p8: 'Siete años después, ese es precisamente el camino que toma. Sin mercado real en clubes de élite, firma por Al-Nassr y va a jugar al campeonato saudí — por debajo del nivel que antes criticaba, pero económicamente incomparable. El mismo argumento — "Qatar/EE. UU. es el final de la línea, yo quiero dignidad" — ahora se aplica a sí mismo.',
    p9: 'No tiene nada de malo aceptar que el cuerpo ya no acompaña y elegir un último gran contrato. La hipocresía está en años de discurso de superioridad sobre quienes tomaban el mismo camino… hasta que el dinero fue suficiente para hacer olvidar la "dignidad".',
    h4: "Burlarse de Xavi en Qatar… y luego vivir en el mismo mapa",
    p10: 'En 2016, en un intercambio con Xavi, Ronaldo despreció al español recordando que "juega en Qatar", como forma de rebajarlo en el debate Messi-Ronaldo. El mensaje subentendido era simple: quien va a Qatar está en un nivel inferior; quien sigue en el Real Madrid está "en la cima".',
    p11: "Años después, Ronaldo termina en un proyecto equivalente en la misma región — una liga saudí periférica, salarios gigantescos, competición muy por debajo de la Champions. La frase que sirvió para rebajar a Xavi ahora encaja en su propia realidad deportiva.",
    h5: "Conclusión",
    li1: "Dice que no persigue récords, pero moldea todo el final de su carrera para preservarlos e inflarlos.",
    li2: "Rechaza dinero saudí por derechos humanos… hasta que la cifra es tan alta que pasa a vivir y a anunciarse en el mismo país.",
    li3: 'Dice que quiere acabar "con dignidad", no en ligas periféricas — y termina precisamente en el campeonato saudí.',
    li4: "Ridiculiza a Xavi por jugar en Qatar — y acaba en un escenario deportivo similar, solo que con una nómina mucho mayor.",
  },
  fr: {
    title: "Hypocrisie",
    h1: '"Je ne chasse pas les records" — mais il vit pour eux',
    p1: 'Ronaldo répète depuis des années la phrase : "Je ne chasse pas les records, les records me chassent". Cela sonne bien comme slogan, mais la manière dont il a géré la fin de sa carrière dit exactement l’inverse.',
    p2: "Il est resté en sélection bien après son pic de forme, en insistant pour être titulaire à l’Euro et en Coupe du monde alors qu’il était l’un des joueurs les moins productifs sur le terrain — surtout pour accumuler sélections et buts. Il a choisi le championnat saoudien, bien en dessous du niveau compétitif de l’élite européenne, précisément au moment où il n’avait plus de marché au sommet — mais où il pouvait continuer à empiler buts et matches dans un contexte beaucoup moins exigeant. Il continue d’essayer de monopoliser penalties et coups francs, malgré une efficacité faible et des coéquipiers plus forts dans ce moment du jeu.",
    p3: 'La phrase "je ne chasse pas les records" fonctionne comme slogan. La pratique — sélection à tout prix, championnat inférieur pour gonfler les chiffres, monopole des coups de pied arrêtés — pointe vers quelqu’un d’obsédé exactement par cela.',
    h2: "Droits humains, femmes et le chèque saoudien",
    p4: "En 2021, plusieurs médias ont rapporté que Ronaldo avait refusé un contrat d’environ 6 à 10 millions d’euros par an pour être le visage du tourisme saoudien, précisément à cause du bilan des droits humains du régime. La décision a été présentée comme un signe de conscience : il ne voulait pas être la figure d’un pays associé à la répression, aux exécutions et à une discrimination systématique envers les femmes.",
    p5: 'Deux ans plus tard, il signe pour Al-Nassr dans un contrat estimé à plus de 200 millions d’euros par saison et devient, de fait, l’affiche mondiale du championnat saoudien et de la "Vision 2030" du régime. Amnesty International a clairement indiqué que la signature "s’inscrit dans une stratégie de sportswashing" et a demandé à Ronaldo d’utiliser sa plateforme pour parler des prisonniers politiques et des inégalités de genre, plutôt que de simplement louer le pays.',
    p6: 'Dans un pays où les femmes ont pendant des décennies été traitées comme des personnes légalement dépendantes d’un tuteur masculin, où des militantes pour l’égalité ont été emprisonnées et torturées, voir Ronaldo aider à vendre l’image d’une "nouvelle destination cool" est difficile à concilier avec la version de 2021 qui aurait refusé 10 millions par principe. Les droits humains posaient problème quand le chèque était petit ; ils ont cessé d’en poser un lorsque les zéros ont changé.',
    h3: '"Je veux finir avec dignité, pas au Qatar"… puis il termine en Arabie saoudite',
    p7: 'En 2015, dans une interview largement citée, Ronaldo disait : "Dans ma tête, je veux finir au sommet. Je veux finir avec dignité, dans un bon club. Je ne me vois pas aller aux États-Unis, au Qatar ou à Dubaï." L’idée était claire : la MLS et les championnats du Golfe étaient vus par lui comme des destinations de préretraite, incompatibles avec l’image d’un joueur "top".',
    p8: 'Sept ans plus tard, c’est précisément la voie qu’il emprunte. Sans marché réel dans les clubs d’élite, il signe à Al-Nassr et va jouer le championnat saoudien — en dessous du niveau qu’il critiquait autrefois, mais financièrement incomparable. Le même argument — "Qatar/États-Unis, c’est la fin de la route, moi je veux de la dignité" — s’applique désormais à lui-même.',
    p9: 'Il n’y a rien de mal à accepter que le corps ne suit plus et à choisir un dernier gros contrat. L’hypocrisie, c’est des années de discours de supériorité sur ceux qui prenaient le même chemin… jusqu’à ce que l’argent suffise à faire oublier la "dignité".',
    h4: "Se moquer de Xavi au Qatar… puis vivre sur la même carte",
    p10: 'En 2016, dans un échange avec Xavi, Ronaldo a rabaissé l’Espagnol en rappelant qu’il "joue au Qatar", pour le diminuer dans le débat Messi-Ronaldo. Le message sous-entendu était simple : ceux qui vont au Qatar sont à un niveau inférieur ; ceux qui restent au Real Madrid sont "au sommet".',
    p11: "Des années plus tard, Ronaldo finit lui-même dans un projet équivalent dans la même région — un championnat saoudien périphérique, des salaires géants, une compétition bien en dessous de la Ligue des Champions. La phrase utilisée pour rabaisser Xavi correspond désormais à sa propre réalité sportive.",
    h5: "Conclusion",
    li1: "Il dit ne pas chasser les records, mais il façonne toute la fin de sa carrière pour les préserver et les gonfler.",
    li2: "Il refuse l’argent saoudien pour des raisons de droits humains… jusqu’à ce que le montant soit si élevé qu’il vit et fait la promotion du même pays.",
    li3: 'Il dit vouloir finir "avec dignité", pas dans des ligues périphériques — et finit précisément dans le championnat saoudien.',
    li4: "Il ridiculise Xavi pour avoir joué au Qatar — et se retrouve dans un scénario sportif similaire, avec simplement un salaire beaucoup plus élevé.",
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c["en"][key];

export function HypocrisyBody({ lang, dark = false }) {
  const c = (key) => fallback(content, lang, key);

  const items = [
    {
      key: "h1",
      title: c("h1"),
      content: (
        <>
          <p>{c("p1")}</p>
          <p>{c("p2")}</p>
          <p>{c("p3")}</p>
        </>
      ),
    },
    {
      key: "h2",
      title: c("h2"),
      content: (
        <>
          <p>{c("p4")}</p>
          <p>{c("p5")}</p>
          <p>{c("p6")}</p>
        </>
      ),
    },
    {
      key: "h3",
      title: c("h3"),
      content: (
        <>
          <p>{c("p7")}</p>
          <p>{c("p8")}</p>
          <p>{c("p9")}</p>
        </>
      ),
    },
    {
      key: "h4",
      title: c("h4"),
      content: (
        <>
          <p>{c("p10")}</p>
          <p>{c("p11")}</p>
        </>
      ),
    },
    {
      key: "h5",
      title: c("h5"),
      content: (
        <ul>
          <li>{c("li1")}</li>
          <li>{c("li2")}</li>
          <li>{c("li3")}</li>
          <li>{c("li4")}</li>
        </ul>
      ),
    },
  ];

  return <SectionAccordionList items={items} dark={dark} />;
}

export default function HypocrisySection() {
  const { lang, t } = useI18n();

  return (
    <SectionWrapper
      id="hypocrisy"
      label={t("label_hypocrisy")}
      title={t("title_hypocrisy")}
    >
      <HypocrisyBody lang={lang} />
    </SectionWrapper>
  );
}
