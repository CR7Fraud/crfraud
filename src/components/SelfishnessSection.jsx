import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'Selfishness On and Off the Pitch',
    h1: 'A Matter of Data, Not Opinion',
    p1: "Ronaldo's selfishness is not an argument made by Messi fans. It is a pattern documented in statistics, teammates' statements, behaviour caught on camera, and institutional decisions spanning two decades. The question is not whether he scored many goals — he did. The question is: at what collective cost?",
    h2: 'On the Pitch',
    h2a: 'Free Kicks: Over 50 Attempts, 1 Goal',
    p2: 'In major international tournaments with Portugal — Euros and World Cups — Ronaldo took at least 53 direct free kicks. He scored one, against Spain at the 2018 World Cup.',
    p3: 'Not for lack of alternatives. Throughout his career, he coexisted with clearly superior specialists in this set piece: Pjanić and Dybala at Juventus, identified by The Athletic as better options at the time; Bruno Fernandes at Manchester United; João Moutinho in Portugal for an entire decade. The Athletic explicitly questioned whether Ronaldo should continue to be Juventus\'s primary free-kick taker.',
    p4: 'Ruud Gullit, European champion in 1988, was blunt when commenting on Euro 2024: he found Ronaldo\'s behaviour "unacceptable" and spoke of "crocodile tears" — he cried for himself, not for the team. Dieter Hamann reinforced that the tears after the missed penalty against Slovenia were "proof of how selfish Ronaldo is — he had to mentally leave the game because he was devastated with himself".',
    h2b: 'Penalties: The Ball Monopoly',
    p5: 'The free-kick pattern repeats itself with penalties. At clubs where there were other designated takers — Juventus, Manchester United, Portugal — Ronaldo systematically tended to take the responsibility, regardless of form or tactical context. When a teammate scores a penalty, the camera rarely shows him in full celebration — the narrative centres on his reaction to not being the protagonist.',
    h2c: 'The Teammate Whose Goal Gets Stolen',
    p6: 'In 2015, in a Real Madrid move with a goal practically made for a teammate at the back post, Ronaldo physically interposes himself and shoots himself. The video circulated precisely because it captures a pattern: it is not just goal instinct, it is goal instinct at the expense of the teammate who was in a better position.',
    h2d: 'The Teammates Who Stop Passing',
    p7: 'At Euro 2024, former England international Stuart Pearce, commenting on talkSPORT, repeatedly noted that Portugal\'s teammates were avoiding finding Ronaldo in situations where, ten years ago, the ball would have reached him automatically. He was not alone: Goal.com echoed the same idea, describing a pattern where Portuguese players were avoiding certain passing lines to Ronaldo because it took control away from them.',
    p8: 'It is a rare and revealing statistic: a team that, almost instinctively, diverts play away from its most famous striker — because it knows what happens when the ball enters that funnel.',
    h2e: 'Body Language as a Pattern',
    p9: '2012, Real Madrid vs Granada. Ronaldo scores two goals in a 3-0 win and refuses to celebrate either. Afterwards, he tells the press: "I\'m sad. I\'m not happy. The people at the club know why." Only later did it emerge that he had asked to leave. The team won. He didn\'t celebrate — because at that moment, collective results were below his personal priorities.',
    p10: 'Euro 2024, missed penalty and the bench reaction. Against Slovenia, Ronaldo misses a penalty in extra time and has an emotional breakdown on the pitch, needing to be comforted by teammates while the game is still going on. Minutes later, on the bench, cameras catch him visibly frustrated as a teammate converts a penalty with Portugal already winning 2-0. Instead of celebrating the goal and the comfortable lead, his reaction is minimal, centred on his own failure — an image that led commentators to describe the behaviour as "embarrassing" and "hard to watch".',
    quote1: 'Gullit returned to the theme: "The behaviour is unacceptable. Those are crocodile tears — he cried because he missed, not because the team could be eliminated."',
    h3: 'Off the Pitch',
    h3a: 'The Manchester United Dressing Room',
    p11: 'On 19 October 2022, in a 2-0 win over Tottenham, Ronaldo refused to come on as a substitute when Erik ten Hag called for him. He left the bench, went down the tunnel before the final whistle and left the stadium before his teammates returned to the dressing room. Ten Hag publicly confirmed he had refused to come on and decided to remove him from the squad for the next game.',
    p12: 'A few days later, the Mirror published an article where Emmanuel Petit, former French international and World Cup winner, spoke of an "oversized ego" that was "polluting the Manchester United dressing room". Gary Neville, one of Ronaldo\'s biggest public defenders, said live on air that the behaviour was "unacceptable" and that all he had to do was "sit on the bench for two or three games".',
    h3b: 'The Juventus Exit',
    p13: 'In August 2021, a few days before the transfer window closed, Ronaldo decided to leave Juventus. Several Italian and English reports described the same sequence: more than a normal end-of-cycle process, there was a rushed exit, with the player arranging logistics (including transporting his fleet of cars) before the club had a sporting plan in place. Juventus were forced to accept a relatively low offer from Manchester United because the alternative was being left with a massive asset who no longer wanted to be there.',
    p14: 'From an institutional standpoint, it was another example of the pattern: when the context stopped being ideal for Ronaldo, it was the club that had to adapt — not the other way around.',
    h3c: 'The Relationship with Mourinho at Real Madrid',
    p15: "Luka Modrić's autobiography, as well as excerpts reproduced in the press, describe an episode that became emblematic: after a match Real Madrid had won, José Mourinho confronted Ronaldo in the dressing room for not tracking the opposing fullback defensively. Modrić writes that he saw Ronaldo 'on the verge of tears' and that Mourinho actually made him cry, insisting that defensive work was mandatory for everyone.",
    quote2: 'The phrase attributed to Ronaldo in that context — "After everything I\'ve done for you, and this is how you treat me?" — captures the logic that runs through his career: collective defensive effort is optional for someone who scores goals. Demanding it is seen as ingratitude.',
    h4: "What His Own Mouth Revealed",
    h4a: 'Euro 2024: The Involuntary Confession',
    p16: 'In August 2024, in a conversation with Rio Ferdinand on his YouTube channel, Ronaldo explained why he cried after missing the penalty against Slovenia at Euro 2024.',
    quote3: '"When I cried, it wasn\'t because I felt that if I didn\'t score Portugal would be eliminated and the world would collapse on top of me. It wasn\'t that… People don\'t know me. Imagine you score the last 27 penalties. And in that moment you miss, and you feel bad about yourself."',
    quote4: '"I didn\'t even think about Portugal being eliminated. I was sad because of the pressure I\'ve put on myself since I was 11 years old."',
    p17: "Read carefully, the subtext stops being a subtext: Ronaldo admits he was not thinking about the risk of the national team's elimination. The focus was on his personal penalty-conversion streak and the image he had built of himself. Portugal was at stake. He was crying about the statistic.",
    h4b: 'The Piers Morgan Interview: A Manual of Ingratitude',
    p18: 'In November 2022, while still a Manchester United player, Ronaldo sat down with Piers Morgan for a two-hour interview. Among several statements, he said:',
    li1: '"I don\'t have respect for Erik ten Hag, because he doesn\'t show respect for me."',
    li2: 'He felt "betrayed" by the club.',
    li3: 'He harshly criticised the structure and ambition of United, suggesting the club had not evolved since Sir Alex Ferguson.',
    p19: 'All of this weeks after refusing to come on as a substitute and leaving the stadium before the end of a game. The contract was terminated by "mutual agreement", but the entire timeline shows who took the initiative to implode the relationship.',
    h4c: 'The Interview Pattern',
    p20: 'What unites these statements is not just impulsiveness — it is consistency. Over twenty years, Ronaldo used public interviews as a tool for pressure and image management:',
    li4: 'To force exits (Real Madrid 2012, Juventus 2021, Manchester United 2022).',
    li5: 'To distance himself from collective failures.',
    li6: 'To reinforce the idea that, if something goes wrong, the problem always lies with the structure, the manager, the press — rarely with himself.',
    p21: "It would be an exaggeration to say he never accepted any responsibility. But it is hard to find a relevant interview, in a moment of crisis, where self-criticism matches the level of criticism he directs at the context around him. And that is what defines the pattern: for Ronaldo, the collective is the stage where his greatness is measured — not the end in itself.",
  },
  pt: {
    title: 'Egoísmo em Campo e Fora Dele',
    h1: 'Uma Questão de Dados, Não de Opinião',
    p1: 'O egoísmo de Ronaldo não é um argumento de adeptos do Messi. É um padrão documentado em estatísticas, declarações de colegas, comportamentos captados em câmara e decisões institucionais ao longo de duas décadas. A questão não é se marcou muitos golos - marcou. A questão é: a que custo coletivo?',
    h2: 'Dentro de Campo',
    h2a: 'Os Livres: Mais de 50 Tentativas, 1 Golo',
    p2: 'Nos grandes torneios internacionais com Portugal - Euros e Mundiais -, Ronaldo cobrou pelo menos 53 livres diretos. Marcou um, contra a Espanha no Mundial 2018.',
    p3: 'Não foi por falta de alternativas. Ao longo da carreira, coexistiu com especialistas claramente superiores nesta bola parada: Pjanic e Dybala na Juventus, identificados pelo The Athletic como melhores opções na altura; Bruno Fernandes no Manchester United; João Moutinho em Portugal durante uma década inteira. O The Athletic chegou a questionar explicitamente se Ronaldo deveria continuar a ser o batedor principal de livres na Juventus.',
    p4: 'Ruud Gullit, campeão europeu em 1988, foi direto ao ponto quando comentou o Euro 2024: considerou "inaceitável" o comportamento de Ronaldo e falou em "lágrimas de crocodilo" - chorava por si, não pela equipa. Dieter Hamann reforçou que as lágrimas depois do penálti falhado contra a Eslovénia eram "a prova de como Ronaldo é egoísta - teve de sair do jogo mentalmente porque estava devastado consigo próprio".',
    h2b: 'Penáltis: O Monopólio da Bola',
    p5: 'O padrão dos livres repete-se nas grandes penalidades. Em equipas onde havia outros batedores designados - Juventus, Manchester United, Portugal -, Ronaldo tendeu sistematicamente a assumir a responsabilidade, independentemente da forma ou do contexto tático.',
    h2c: 'O Colega a Quem Se Rouba o Golo',
    p6: 'Em 2015, numa jogada do Real Madrid com golo praticamente feito para um colega ao segundo poste, Ronaldo interpõe-se fisicamente e remata ele próprio. O vídeo circulou precisamente porque condensa um padrão: não é apenas instinto de golo, é instinto de golo em detrimento do colega que estava em melhor posição.',
    h2d: 'Os Colegas Que Param de Passar',
    p7: 'No Euro 2024, o ex-internacional inglês Stuart Pearce, a comentar na talkSPORT, notou repetidamente que os colegas de Portugal evitavam procurar Ronaldo em situações em que, há dez anos, a bola lhe chegaria automaticamente.',
    p8: 'É um dado raro e revelador: uma equipa que, de forma quase instintiva, desvia o jogo do seu avançado mais famoso - porque sabe o que acontece quando a bola entra nesse funil.',
    h2e: 'A Linguagem Corporal Como Padrão',
    p9: '2012, Real Madrid vs Granada. Ronaldo marca dois golos numa vitória por 3-0 e recusa-se a celebrar ambos. No fim, diz à imprensa: "Estou triste. Não estou feliz. As pessoas no clube sabem porquê." Só mais tarde se soube que tinha pedido para sair.',
    p10: 'Euro 2024, penálti falhado e reacção no banco. Frente à Eslovénia, Ronaldo falha um penálti no prolongamento e entra em colapso emocional em campo, precisando de ser confortado pelos colegas enquanto o jogo ainda decorre.',
    quote1: 'Gullit voltou ao tema: "O comportamento é inaceitável. São lágrimas de crocodilo - chorou porque falhou ele, não porque a equipa podia perder."',
    h3: 'Fora de Campo',
    h3a: 'O Balneário do Manchester United',
    p11: 'Em 19 de outubro de 2022, numa vitória por 2-0 sobre o Tottenham, Ronaldo recusou entrar como suplente quando Erik ten Hag o chamou. Saiu do banco, desceu o túnel antes do apito final e abandonou o estádio antes dos colegas regressarem ao balneário.',
    p12: 'Poucos dias depois, o Mirror publicou um artigo em que Emmanuel Petit, ex-internacional francês e campeão do mundo, falava num "ego sobredimensionado" que estava a "poluir o balneário do Manchester United". Gary Neville disse em direto que o comportamento era "inaceitável".',
    h3b: 'A Fuga da Juventus',
    p13: 'Em agosto de 2021, a poucos dias do fecho de mercado, Ronaldo decidiu sair da Juventus. Várias reportagens italianas e inglesas descreveram a mesma sequência: mais do que um processo normal de fim de ciclo, houve uma saída apressada.',
    p14: 'Do ponto de vista institucional, foi mais um exemplo do padrão: quando o contexto deixou de ser ideal para Ronaldo, foi o clube que teve de se adaptar - não o contrário.',
    h3c: 'A Relação com Mourinho no Real Madrid',
    p15: 'A autobiografia de Luka Modrić conta um episódio emblemático: depois de um jogo em que o Real Madrid ganhara, José Mourinho confrontou Ronaldo no balneário por não ter acompanhado o lateral adversário na defesa. Modrić escreve que viu Ronaldo "à beira das lágrimas".',
    quote2: 'A frase atribuída a Ronaldo nesse contexto - "Depois de tudo o que fiz por ti, e assim que me tratas?" - condensa a lógica que atravessa a sua carreira: o esforço defensivo coletivo é opcional para quem marca golos.',
    h4: 'O Que a Sua Própria Boca Revelou',
    h4a: 'Euro 2024: A Confissão Involuntária',
    p16: 'Em agosto de 2024, numa conversa com Rio Ferdinand no seu canal de YouTube, Ronaldo explicou porque chorou após falhar o penálti contra a Eslovénia no Euro 2024.',
    quote3: '"Quando chorei, não foi porque senti que se não marcasse Portugal seria eliminado e o mundo ia desabar em cima de mim. Não foi por isso… As pessoas não me conhecem. Imagina que marcas os últimos 27 penáltis. E naquele momento falhas, e sentes-te mal contigo mesmo."',
    quote4: '"Nem sequer pensei em Portugal ser eliminado. Fiquei triste por causa da pressão que coloco em mim próprio desde os 11 anos."',
    p17: 'Lido com atenção, o subtexto deixa de ser subtexto: Ronaldo admite que não estava a pensar no risco de eliminação da seleção. O foco estava na sequência pessoal de penáltis convertidos e na imagem que construiu de si próprio.',
    h4b: 'A Entrevista a Piers Morgan: Manual de Ingratidão',
    p18: 'Em novembro de 2022, enquanto ainda era jogador do Manchester United, Ronaldo sentou-se com Piers Morgan para uma entrevista de duas horas. Entre várias declarações, afirmou:',
    li1: '"Não tenho respeito por Erik ten Hag, porque ele não mostra respeito por mim."',
    li2: 'Sentia-se "traído" pelo clube.',
    li3: 'Criticou duramente a estrutura e a ambição do United.',
    p19: 'Tudo isto semanas depois de ter recusado entrar como suplente e de ter abandonado o estádio antes do fim de um jogo.',
    h4c: 'O Padrão das Entrevistas',
    p20: 'O que une estas declarações não é apenas impulsividade - é a consistência. Ao longo de vinte anos, Ronaldo usou entrevistas públicas como ferramenta de pressão e de gestão de imagem:',
    li4: 'Para forçar saídas (Real Madrid 2012, Juventus 2021, Manchester United 2022).',
    li5: 'Para se distanciar de fracassos coletivos.',
    li6: 'Para reforçar a ideia de que, se algo corre mal, o problema está sempre na estrutura, no treinador, na imprensa - raramente nele próprio.',
    p21: 'Seria exagerado dizer que nunca assumiu qualquer responsabilidade. Mas é difícil encontrar uma entrevista relevante, em momento de crise, em que a autocrítica esteja ao nível da crítica que faz ao contexto à sua volta.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function SelfishnessSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="selfishness" label={t('label_selfish')} title={c('title')} dark>
      <h2>{c('h1')}</h2>
      <p>{c('p1')}</p>

      <div className="section-divider" />
      <h2>{c('h2')}</h2>
      <h3>{c('h2a')}</h3>
      <p>{c('p2')}</p>
      <p>{c('p3')}</p>
      <p>{c('p4')}</p>
      <h3>{c('h2b')}</h3>
      <p>{c('p5')}</p>
      <h3>{c('h2c')}</h3>
      <p>{c('p6')}</p>
      <h3>{c('h2d')}</h3>
      <p>{c('p7')}</p>
      <p>{c('p8')}</p>
      <h3>{c('h2e')}</h3>
      <p>{c('p9')}</p>
      <p>{c('p10')}</p>
      <blockquote>{c('quote1')}</blockquote>

      <div className="section-divider" />
      <h2>{c('h3')}</h2>
      <h3>{c('h3a')}</h3>
      <p>{c('p11')}</p>
      <p>{c('p12')}</p>
      <h3>{c('h3b')}</h3>
      <p>{c('p13')}</p>
      <p>{c('p14')}</p>
      <h3>{c('h3c')}</h3>
      <p>{c('p15')}</p>
      <blockquote>{c('quote2')}</blockquote>

      <div className="section-divider" />
      <h2>{c('h4')}</h2>
      <h3>{c('h4a')}</h3>
      <p>{c('p16')}</p>
      <blockquote>{c('quote3')}</blockquote>
      <blockquote>{c('quote4')}</blockquote>
      <p>{c('p17')}</p>
      <h3>{c('h4b')}</h3>
      <p>{c('p18')}</p>
      <ul>
        <li>{c('li1')}</li>
        <li>{c('li2')}</li>
        <li>{c('li3')}</li>
      </ul>
      <p>{c('p19')}</p>
      <h3>{c('h4c')}</h3>
      <p>{c('p20')}</p>
      <ul>
        <li>{c('li4')}</li>
        <li>{c('li5')}</li>
        <li>{c('li6')}</li>
      </ul>
      <p>{c('p21')}</p>
    </SectionWrapper>
  );
}