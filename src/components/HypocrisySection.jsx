import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'Hypocrisy',
    h1: '"I don\'t chase records" — but lives for them',
    p1: 'Ronaldo has repeated the phrase for years: "I don\'t chase records, records chase me." It sounds good in interviews, but the way he managed the end of his career says the opposite.',
    p2: 'He stayed in the national team long after his competitive peak, insisting on starting at Euros and World Cups where he was one of the least productive players on the pitch — mainly to accumulate caps and goals. He chose the Saudi league, well below the competitive level of the European elite, precisely when he had no market at the top — but where he can keep adding goals and games in a far less demanding context. He continues to try to monopolise penalties and free kicks, even with poor efficiency and teammates who are stronger in that moment of the game.',
    p3: 'The phrase "I don\'t chase records" works as a slogan. The practice — national team at all costs, a lesser league to inflate numbers, set-piece monopoly — points to someone obsessed with exactly that.',
    h2: 'Human rights, women and the Saudi cheque',
    p4: 'In 2021, several outlets reported that Ronaldo turned down a contract of around €6–10 million per year to be the face of Saudi tourism, precisely because of the regime\'s human rights record. The decision was presented as a sign of conscience: he didn\'t want to be the face of a country associated with repression, executions and systematic discrimination against women.',
    p5: 'Two years later, he signs for Al-Nassr in a deal estimated at over €200 million per season and becomes, in effect, the global poster boy of the Saudi league and the regime\'s "Vision 2030". Amnesty International stated clearly that the signing is "part of a sportswashing strategy" and called on Ronaldo to use his platform to speak about political prisoners and gender inequality, rather than just praising the country.',
    p6: 'In a country where women were for decades treated as legal dependants of a male guardian, where gender equality activists were imprisoned and tortured, seeing Ronaldo help sell the image of a "cool new destination" is hard to reconcile with the 2021 version who allegedly turned down €10 million on principle. Human rights were a problem when the cheque was small; they stopped being one when the number of zeros changed.',
    h3: '"I want to finish with dignity, not in Qatar"… and ends up in Saudi Arabia',
    p7: 'In 2015, in a widely cited interview, Ronaldo said: "In my mind, I want to finish at the top. I want to finish with dignity, at a good club. I don\'t see myself going to the USA, Qatar or Dubai." The idea was clear: MLS and Gulf leagues were seen by him as pre-retirement destinations, incompatible with the image of a "top" player.',
    p8: 'Seven years later, that is precisely the path he takes. With no real market at elite clubs, he signs for Al-Nassr and goes to play in the Saudi Arabian championship — below the level he once criticised, but financially incomparable. The same argument — "Qatar/USA is end of the line, I want dignity" — now applies to himself.',
    p9: 'There\'s nothing wrong with accepting that the body can\'t keep up and choosing one last big contract. The hypocrisy lies in years of superiority discourse about those who took the same path… until the money was enough to make "dignity" forgotten.',
    h4: 'Mocking Xavi in Qatar… then living on the same map',
    p10: 'In 2016, in an exchange with Xavi, Ronaldo dismissed the Spaniard by noting he "plays in Qatar", as a way to diminish him in the Messi–Ronaldo debate. The implied message was simple: those who go to Qatar are at a lower level; those who stay at Real Madrid are "at the top".',
    p11: 'Years later, Ronaldo himself ends up in an equivalent project in the same region — a peripheral Saudi league, giant salaries, competition far below the Champions League. The phrase used to belittle Xavi now fits his own sporting reality.',
    h5: 'Conclusion',
    li1: 'Says he doesn\'t chase records, but shapes his entire end of career around preserving and inflating them.',
    li2: 'Refuses Saudi money over human rights… until the value is so high he lives and advertises in the same country.',
    li3: 'Says he wants to finish "with dignity", not in peripheral leagues — and ends up precisely in the Saudi championship.',
    li4: 'Ridicules Xavi for playing in Qatar — and ends up in a similar sporting scenario, just with a bigger pay cheque.',
  },
  pt: {
    title: 'Hipocrisia',
    h1: '"Não persigo recordes" - mas vive para eles',
    p1: 'Ronaldo repete há anos a frase: "Eu não persigo recordes, os recordes é que me perseguem." Soa bem em entrevista, mas a forma como geriu o fim de carreira diz o contrário.',
    p2: 'Mantém-se na Seleção muito depois do auge competitivo, insistindo em ser titular em Euros e Mundiais onde é um dos jogadores menos produtivos em campo, sobretudo para acumular internacionalizações e golos. Escolhe a liga da Arábia Saudita, muito abaixo do nível competitivo da elite europeia, precisamente quando deixou de ter mercado nesse topo - mas onde pode continuar a somar golos e jogos em contexto muito menos exigente. Continua a tentar monopolizar penáltis e livres diretos, mesmo com eficácia pobre e colegas mais fortes nesse momento do jogo.',
    p3: 'A frase "não persigo recordes" funciona como slogan. A prática - Seleção a todo o custo, liga menor para inflacionar números, monopólio da bola parada - aponta para alguém obcecado exatamente com isso.',
    h2: 'Direitos humanos, mulheres e o cheque saudita',
    p4: 'Em 2021, vários órgãos noticiam que Ronaldo recusou um contrato de cerca de 6-10 milhões de euros por ano para ser rosto do turismo da Arábia Saudita, precisamente devido ao historial de violações de direitos humanos do regime. A decisão foi apresentada como sinal de consciência: não queria ser a cara de um país associado a repressão, execuções e discriminação sistemática de mulheres.',
    p5: 'Dois anos depois, assina pelo Al-Nassr num acordo estimado em mais de 200 milhões de euros por época e torna-se, de facto, o cartaz global da liga saudita e da "Visão 2030" do regime. A Amnistia Internacional diz claramente que a contratação é "parte de uma estratégia de sportswashing" e pede a Ronaldo que use a sua plataforma para falar de presos políticos e desigualdade de género, em vez de apenas elogiar o país.',
    p6: 'Num país onde as mulheres foram durante décadas tratadas como dependentes legais de um tutor masculino, onde ativistas pela igualdade de género foram presas e torturadas, ver Ronaldo ajudar a vender a imagem de "novo destino cool" é difícil de conciliar com a versão de 2021 que alegadamente recusou 10 milhões por questões de princípio. Os direitos humanos foram um problema enquanto o cheque era pequeno; deixaram de o ser quando o número de zeros mudou.',
    h3: '"Quero acabar com dignidade, não no Qatar"… e acaba na Arábia Saudita',
    p7: 'Em 2015, numa entrevista amplamente citada, Ronaldo disse: "Na minha cabeça, quero acabar no topo. Quero acabar com dignidade, num bom clube. Não me vejo a ir para os EUA, Qatar ou Dubai." A ideia era clara: MLS e campeonatos da região do Golfo eram vistos por ele como destinos de pré-reforma, incompatíveis com a imagem de jogador "de topo".',
    p8: 'Sete anos depois, é precisamente esse o caminho que escolhe. Sem mercado real em clubes de elite, assina pelo Al-Nassr e vai jogar para o campeonato da Arábia Saudita, desportivamente abaixo do nível que criticava, mas financeiramente incomparável. O mesmo argumento - "Qatar/EUA é fim de linha, eu quero dignidade" - passa a aplicar-se a si próprio.',
    p9: 'Não há nada de errado em aceitar que o corpo já não acompanha e escolher um último contrato grande. A hipocrisia está em anos de discurso de superioridade sobre quem fazia o mesmo caminho… até o dinheiro ser suficiente para fazer esquecer a "dignidade".',
    h4: 'Gozo com Xavi no Qatar… e depois vida no mesmo mapa',
    p10: 'Em 2016, numa troca de declarações com Xavi, Ronaldo desvalorizou o espanhol lembrando que ele "joga no Qatar", como forma de o diminuir na discussão Messi-Ronaldo. A mensagem subentendida era simples: quem vai para o Qatar está num nível inferior; quem continua no Real Madrid está "no topo".',
    p11: 'Anos mais tarde, o próprio Ronaldo acaba num projeto equivalente na mesma região - campeonato periférico da Arábia Saudita, salários gigantescos, competição muito abaixo da Champions. A frase que serviu para rebaixar Xavi encaixa agora na sua própria realidade desportiva.',
    h5: 'Conclusão',
    li1: 'Diz que não persegue recordes, mas molda todo o fim de carreira a preservá-los e inflacioná-los.',
    li2: 'Recusa dinheiro saudita por direitos humanos… até o valor ser tão alto que passa a viver e a fazer publicidade no mesmo país.',
    li3: 'Diz que quer acabar "com dignidade", não em ligas periféricas - e acaba justamente no campeonato da Arábia Saudita.',
    li4: 'Ridiculariza Xavi por jogar no Qatar - e termina num cenário desportivo semelhante, apenas com uma folha salarial maior.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function HypocrisySection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="hypocrisy" label={t('label_hypocrisy')} title={c('title')}>
      <h2>{c('h1')}</h2>
      <p>{c('p1')}</p>
      <p>{c('p2')}</p>
      <p>{c('p3')}</p>

      <div className="section-divider" />
      <h2>{c('h2')}</h2>
      <p>{c('p4')}</p>
      <p>{c('p5')}</p>
      <p>{c('p6')}</p>

      <div className="section-divider" />
      <h2>{c('h3')}</h2>
      <p>{c('p7')}</p>
      <p>{c('p8')}</p>
      <p>{c('p9')}</p>

      <div className="section-divider" />
      <h2>{c('h4')}</h2>
      <p>{c('p10')}</p>
      <p>{c('p11')}</p>

      <div className="section-divider" />
      <h2>{c('h5')}</h2>
      <ul>
        <li>{c('li1')}</li>
        <li>{c('li2')}</li>
        <li>{c('li3')}</li>
        <li>{c('li4')}</li>
      </ul>
    </SectionWrapper>
  );
}