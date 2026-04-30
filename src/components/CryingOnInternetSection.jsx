import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useI18n } from '../lib/i18n';

const content = {
  en: {
    title: 'Crying on the Internet',
    h1: '1. On-pitch crying that becomes content',
    h1a: 'World Cup 2018 and 2022: the drama is always about him',
    p1: 'After the elimination against Uruguay in 2018, Ronaldo walks off crying into the tunnel and responds with an enigmatic post, more focused on his "destiny" at World Cups than on Portugal\'s collective failure. In 2022, eliminated by Morocco, the images repeat: he is filmed in tears walking to the dressing room, and the video is constantly recycled on highlight accounts and fan pages.',
    p2: 'In both cases, the internet reacts less to the national team\'s failure and more to Ronaldo\'s personal drama: thumbnails, reels and TikToks are always about "Ronaldo in tears", not about Portugal being eliminated.',
    h1b: 'Euro 2024: live breakdown and memes',
    p3: 'Against Slovenia in the Euro 2024 round of 16, Ronaldo misses a penalty in extra time, breaks down in the middle of the pitch and is comforted by teammates while the game is still ongoing. Afterwards, the on-pitch narrative is Diogo Costa saving three penalties in a row to rescue Portugal; online, the narrative is Ronaldo\'s tears.',
    p4: 'Ge.globo highlighted that he "became the target of memes" for missing chances and his reactions, while opposing fans chanted "Messi" in the stands. Ruud Gullit, European champion, summed up the feeling in the studio:',
    quote1: '"I didn\'t like what I saw at all. Those are crocodile tears — he cried because he missed, not because the team could be eliminated."',
    p5: 'In other words: the supposed 39-year-old leader turns the game into a reality show about his own suffering, and the digital world treats it as fuel for memes.',
    h2: '2. Offline tantrums, damage control on Instagram',
    h2a: 'The phone at Goodison Park',
    p6: 'In 2022, after a defeat against Everton, Ronaldo walks to the tunnel and knocks the phone out of the hand of a 14-year-old autistic boy. The mother describes her son as "in shock" and with an injured hand; the police open an investigation, as do Manchester United and the FA.',
    p7: 'The next day, the statement appears on Instagram:',
    quote2: '"It\'s not easy to deal with emotions in difficult moments… Nevertheless, we must always be respectful and set an example to the children who love football."',
    p8: 'The pattern is clear: first the spoiled-child gesture, then the well-packaged text written to clean up the image. And again, the story lives on social media — clips of the moment, screenshots of the apology, debate in the comments.',
    h2b: '"The truth will come out" and "95% of the news is false"',
    p9: 'In the summer of 2022, still at United, he uses Instagram stories to attack the press: he says "the truth will be revealed in an interview", that he has a notebook where, out of 100 news stories, only 5 are correct, and the rest are lies.',
    p10: 'Those stories are the public trailer for the Piers Morgan interview, where he destroys the club live on air. Again: the conflict is prepared and sold through his phone, as if it were a series — first teaser in the stories, then a 2-hour special episode.',
    h3: '3. Comment-section pundit',
    h3a: '"FACTS" against Messi (2021 Ballon d\'Or)',
    p11: 'When Messi wins the 2021 Ballon d\'Or, an anti-Messi fan page posts a text claiming the award is "stolen", that Ronaldo\'s numbers are better and that France Football always favours the Argentine. Ronaldo goes to the comments and writes just: "FACTS".',
    p12: 'It\'s the typical behaviour of a stand fan — but it comes from the player himself. Instead of acknowledging that, that year, Messi had a historic Copa América (which most serious analysis highlights), he chooses to validate conspiracy theories in an Instagram comment.',
    h3b: 'Laughing emojis at the 8th Ballon d\'Or (2023)',
    p13: 'In 2023, Messi wins the Ballon d\'Or again, driven by a near-perfect World Cup in Qatar. Tomás Roncero makes a video claiming Messi "stole" several awards and that Haaland, Lewandowski, Iniesta and others were wronged.',
    p14: 'Ronaldo reacts with a row of laughing emojis 😂😂😂 under that video. Several outlets record the scene as yet another episode of "comment-section Ronaldo", unable to accept that in 2023 the Messi vs Ronaldo debate no longer exists in terms of form: one winning a World Cup and a Ballon d\'Or, the other scoring goals in Saudi Arabia.',
    p15: 'This is where he simply comes across as lacking media intelligence: anyone who follows football understands Messi had obvious arguments in those years, and by aligning with videos that paint him as a trophy thief, Ronaldo places himself at the level of his own ultras — he looks bitter, not wronged.',
    h4: '4. Al-Nassr: gestures, unfollows and more digital drama',
    h4a: 'Obscene gestures and crying in finals',
    p16: 'In Saudi Arabia, the "big kid" behaviour goes into permanent mode.',
    li1: 'In February 2024, he responds to "Messi" chants with an obscene gesture near his groin; the Saudi federation suspends him for one game and fines him.',
    li2: 'In April, in the Super Cup, he is sent off for an elbow on an opponent and walks off sarcastically applauding the referee and the crowd.',
    li3: 'In a King\'s Cup final, he cries again on the pitch after losing on penalties — images that go viral on social media.',
    p17: 'All of this is immediately cut into clips, reels, TikToks — a constant stream of "Ronaldo reacting" that feeds the character, even when the reaction is typical of a youth player, not a captain.',
    h4b: '90+15 penalty and unfollowing Rúben Neves',
    p18: 'In 2025, an Al-Nassr match is decided by a penalty at 90+15, so controversial that teammates and opponents laugh about it on social media — Merih Demiral, Rúben Neves and Mahrez are seen mocking the incident. Shortly after, pages that monitor social media activity show that Ronaldo unfollowed Rúben Neves, precisely after those posts.',
    p19: 'Even allowing for some noise, the story is consistent: an absurd penalty that favours him, teammates laughing, and the response is childish — not dialogue, not self-criticism, but unfollowing a colleague on Instagram.',
    h5: '5. "Look me in the eyes": press conferences as an extension of his feed',
    p20: 'In March 2025, at a national team press conference, a journalist asks him if he still has the level to play at the highest level. He responds with:',
    li4: 'accusations of "negativity around the national team";',
    li5: 'complaints of "lack of respect";',
    li6: 'and the famous phrase: "Look me in the eyes when you ask me that."',
    p21: 'Goal summarises it: Ronaldo, irritated, tells the journalist to "look me in the eye" over a perfectly normal question about performance. It\'s the same social media grammar, but at a press conference: everything is about what he feels, never about what he plays.',
    p22: 'In recent years, Ronaldo behaves less like an elite veteran and more like an overexposed child: he cries at every major failure, turns every negative episode into a personal drama on social media, and reacts to criticism with victimhood or mockery instead of responsibility.',
    h6: 'The pattern, not isolated cases',
    li7: 'World Cup 2018, World Cup 2022, Euro 2024: walks off crying to the tunnel or cries on the pitch, and what goes viral is not Portugal failing — it\'s "Ronaldo suffering", turned into TikTok and Instagram clips.',
    li8: 'At Goodison Park, he hits the phone of a kid and only then tries to rewrite the episode with a polished Instagram apology, centred on "his emotions" rather than the victim.',
    li9: 'Uses stories to talk about "95% of fake news" and "the truth will come out", preparing attack-interviews where he is the betrayed one and everyone else — club, manager, board — is the problem.',
    li10: 'Comments "FACTS" and puts laughing emojis on anti-Messi posts, aligning with theories that his rival\'s awards are stolen, instead of behaving like someone who acknowledges the obvious: Messi had seasons where he was clearly better.',
    li11: 'Already in Saudi Arabia, responds to chants with obscene gestures, gets suspended, loses his head with referees and unfollows colleagues after they laugh at dubious penalties — and still talks about "negativity" and "lack of respect" when confronted.',
    p23: 'If the marketing insists on "example for children", the digital archive shows something else: a 40-year-old man addicted to his own image, always ready to cry, react and post, and very little accustomed to doing the most adult thing football requires — facing failure without turning everything into an episode about himself.',
  },
  pt: {
    title: 'Crying on Internet',
    h1: '1. Choros em campo que viram conteúdo',
    h1a: 'Mundial 2018 e 2022: o drama é sempre ele',
    p1: 'Depois da eliminação com o Uruguai em 2018, Ronaldo sai a chorar para o túnel e responde com um post enigmático, mais focado no seu "destino" em Mundiais do que no fracasso coletivo de Portugal. Em 2022, eliminado por Marrocos, as imagens repetem-se: volta a ser filmado em lágrimas a caminho do balneário, e o vídeo passa a ser reciclado constantemente em contas de highlights e páginas de fãs.',
    p2: 'Em ambos os casos, a internet reage menos à Seleção e mais ao drama pessoal de Ronaldo: thumbnails, reels e TikToks são sempre sobre "Ronaldo em lágrimas", não sobre Portugal eliminado.',
    h1b: 'Euro 2024: colapso em direto e memes',
    p3: 'Contra a Eslovénia, nos oitavos do Euro 2024, Ronaldo falha um penálti no prolongamento, entra em colapso no meio-campo e é amparado pelos colegas enquanto o jogo ainda não acabou. Depois, a narrativa em campo é Diogo Costa a defender três penáltis seguidos e a salvar Portugal; online, a narrativa são as lágrimas de Ronaldo.',
    p4: 'O ge.globo destaca que ele "vira alvo de memes" por falhar oportunidades e pela forma como reage, enquanto adeptos adversários gritam "Messi" nas bancadas. Ruud Gullit, campeão europeu, resume o sentimento em estúdio:',
    quote1: '"Não gostei nada do que vi. São lágrimas de crocodilo - chorou porque falhou ele, não porque a equipa podia perder."',
    p5: 'Ou seja: o suposto líder de 39 anos transforma o jogo num reality show sobre o seu sofrimento, e o mundo digital trata isso como combustível para memes.',
    h2: '2. Birras offline, damage control no Instagram',
    h2a: 'O telemóvel em Goodison Park',
    p6: 'Em 2022, depois de uma derrota com o Everton, Ronaldo sai para o túnel e esmurra o telemóvel da mão de um adolescente de 14 anos, que tem autismo. A mãe descreve o filho como "em choque" e com a mão magoada; a polícia abre investigação, o United e a FA também.',
    p7: 'No dia seguinte, aparece o comunicado no Instagram:',
    quote2: '"Não é fácil lidar com emoções em momentos difíceis… Nevertheless, temos de ser sempre respeitosos e dar o exemplo às crianças que amam o futebol."',
    p8: 'O padrão é claro: primeiro o gesto de criança malcriada, depois o texto bem embalado, escrito para limpar a imagem. E, de novo, a história vive nas redes - clips do momento, prints do pedido de desculpa, discussão em comentários.',
    h2b: '"A verdade vai sair" e "95% das notícias são falsas"',
    p9: 'No verão de 2022, ainda no United, usa stories de Instagram para atacar a imprensa: diz que "a verdade vai ser revelada numa entrevista", que tem um caderno onde, de 100 notícias, só 5 estão certas, e que o resto são mentiras.',
    p10: 'Esses stories são o trailer público da entrevista com Piers Morgan, onde destrói o clube em direto. Outra vez: o conflito é preparado e vendido através do telemóvel, como se fosse uma série - primeiro teaser nos stories, depois episódio especial de 2 horas.',
    h3: '3. Comentador de caixa de comentários',
    h3a: '"FACTOS" contra Messi (Bola de Ouro 2021)',
    p11: 'Quando Messi ganha a Bola de Ouro 2021, uma fanpage anti-Messi publica um texto a dizer que o prémio é "roubado", que os números de Ronaldo são melhores e que a France Football favorece sempre o argentino. Ronaldo vai à caixa de comentários e escreve só: "FACTOS".',
    p12: 'É o comportamento típico de adepto de bancada - mas vem do próprio jogador. Em vez de aceitar que, nesse ano, Messi trazia uma Copa América histórica (o que muita análise séria sublinha), escolhe validar teorias de conspiração num comentário de Instagram.',
    h3b: 'Emojis a rir da 8.ª Bola de Ouro (2023)',
    p13: 'Em 2023, Messi volta a ganhar a Bola de Ouro, liderado por um Mundial praticamente perfeito no Qatar. Tomás Roncero faz um vídeo a dizer que Messi "roubou" vários prémios e que Haaland, Lewandowski, Iniesta, etc., foram prejudicados.',
    p14: 'Ronaldo reage com uma fila de emojis a rir 😂😂😂 por baixo desse vídeo. Vários media registam a cena como mais um episódio do "Ronaldo de caixa de comentários", incapaz de aceitar que, em 2023, o debate Messi vs Ronaldo já não existe em termos de forma: um a ganhar Mundial e Bola de Ouro, o outro a marcar golos na Arábia.',
    p15: 'É aqui que ele parece simplesmente pouco inteligente do ponto de vista mediático: qualquer pessoa que acompanha futebol percebe que Messi tinha argumentos óbvios nesses anos, e Ronaldo, ao alinhar com vídeos que o pintam como ladrão de prémios, coloca-se ao nível dos seus ultras - passa por ressentido, não por injustiçado.',
    h4: '4. Al-Nassr: gestos, unfollows e mais drama digital',
    h4a: 'Gestos obscenos e choros em finais',
    p16: 'Na Arábia, o comportamento de "criança grande" entra em modo permanente.',
    li1: 'Em fevereiro de 2024, responde a cânticos de "Messi" com um gesto obsceno junto à zona pélvica; a federação saudita suspende-o um jogo e multa-o.',
    li2: 'Em abril, na Supertaça, é expulso por cotovelada num adversário e sai a aplaudir sarcasticamente o árbitro e o público.',
    li3: 'Numa final da Taça do Rei, volta a chorar no relvado depois de perder nas grandes penalidades, imagens que se tornam virais nas redes.',
    p17: 'Tudo isto é imediatamente recortado em clips, reels, TikToks - um fluxo constante de "Ronaldo a reagir" que alimenta a personagem, mesmo quando a reação é típica de júnior, não de capitão.',
    h4b: 'Penálti 90+15 e unfollow a Rúben Neves',
    p18: 'Em 2025, um jogo do Al-Nassr decide-se com um penálti aos 90+15, tão polémico que colegas e adversários se riem nas redes - Merih Demiral, Rúben Neves e Mahrez surgem a gozar com o lance. Em seguida, páginas que monitorizam atividade social mostram que Ronaldo terá deixado de seguir Rúben Neves, precisamente depois dessas publicações.',
    p19: 'Mesmo admitindo alguma margem de ruído, a história é coerente: um penálti absurdo que o favorece, colegas a rir, e a resposta é infantil - não diálogo, não autocrítica, mas recusar seguir um colega no Instagram.',
    h5: '5. "Olha-me nos olhos": conferências como extensão do feed',
    p20: 'Em março de 2025, em conferência de imprensa da Seleção, um jornalista pergunta-lhe se ainda tem nível para jogar ao mais alto nível. Ele responde com:',
    li4: 'acusações de "negatividade à volta da Seleção";',
    li5: 'queixas de "falta de respeito";',
    li6: 'e a célebre frase: "Olha-me nos olhos quando me perguntas isso."',
    p21: 'Goal resume: Ronaldo, irritado, manda o jornalista "look me in the eye" por causa de uma pergunta normal sobre rendimento. É a mesma gramática das redes, mas em conferência: tudo é sobre o que ele sente, nunca sobre o que ele joga.',
    p22: 'Nos últimos anos, Ronaldo comporta-se menos como um veterano de elite e mais como uma criança superexposta: chora em todos os grandes fracassos, transforma cada episódio negativo em drama pessoal nas redes e reage a críticas com vitimização ou gozo, em vez de responsabilidade.',
    h6: 'O padrão, em vez de casos soltos',
    li7: 'Mundial 2018, Mundial 2022, Euro 2024: sai em lágrimas para o túnel ou chora em campo, e o que viraliza não é a Seleção falhar - é "Ronaldo a sofrer", transformado em clips para TikTok e Instagram.',
    li8: 'Em Goodison Park, agride o telemóvel de um miúdo e só depois tenta reescrever o episódio com um pedido de desculpa polido no Instagram, centrado nas "emoções dele" e não na vítima.',
    li9: 'Usa stories para falar de "95% de notícias falsas" e "a verdade vai sair", preparando entrevistas-ataque em que ele é o traído e todos os outros (clube, treinador, direção) são o problema.',
    li10: 'Comenta "FACTOS" e mete emojis a rir em posts anti-Messi, alinhando com teorias de que os prémios do rival são roubados, em vez de se comportar como alguém que reconhece o óbvio: Messi teve épocas em que foi claramente melhor.',
    li11: 'Já na Arábia, responde a cânticos com gestos obscenos, é suspenso, perde a cabeça com árbitros e faz unfollows a colegas depois de estes se rirem de penáltis duvidosos - e ainda assim fala de "negatividade" e "falta de respeito" quando alguém o confronta.',
    p23: 'Se o marketing insiste em "exemplo para as crianças", o arquivo digital mostra outra coisa: um homem de 40 anos viciado na própria imagem, sempre pronto a chorar, reagir e postar, e muito pouco habituado a fazer a coisa mais adulta que o futebol exige - enfrentar o fracasso sem transformar tudo num episódio sobre si próprio.',
  },
};

const fallback = (c, lang, key) => c[lang]?.[key] || c['en'][key];

export default function CryingOnInternetSection() {
  const { lang, t } = useI18n();
  const c = (key) => fallback(content, lang, key);

  return (
    <SectionWrapper id="crying" label={t('label_crying')} title={c('title')} dark>
      <h2>{c('h1')}</h2>
      <h3>{c('h1a')}</h3>
      <p>{c('p1')}</p>
      <p>{c('p2')}</p>
      <h3>{c('h1b')}</h3>
      <p>{c('p3')}</p>
      <p>{c('p4')}</p>
      <blockquote>{c('quote1')}</blockquote>
      <p>{c('p5')}</p>

      <div className="section-divider" />
      <h2>{c('h2')}</h2>
      <h3>{c('h2a')}</h3>
      <p>{c('p6')}</p>
      <p>{c('p7')}</p>
      <blockquote>{c('quote2')}</blockquote>
      <p>{c('p8')}</p>
      <h3>{c('h2b')}</h3>
      <p>{c('p9')}</p>
      <p>{c('p10')}</p>

      <div className="section-divider" />
      <h2>{c('h3')}</h2>
      <h3>{c('h3a')}</h3>
      <p>{c('p11')}</p>
      <p>{c('p12')}</p>
      <h3>{c('h3b')}</h3>
      <p>{c('p13')}</p>
      <p>{c('p14')}</p>
      <p>{c('p15')}</p>

      <div className="section-divider" />
      <h2>{c('h4')}</h2>
      <h3>{c('h4a')}</h3>
      <p>{c('p16')}</p>
      <ul>
        <li>{c('li1')}</li>
        <li>{c('li2')}</li>
        <li>{c('li3')}</li>
      </ul>
      <p>{c('p17')}</p>
      <h3>{c('h4b')}</h3>
      <p>{c('p18')}</p>
      <p>{c('p19')}</p>

      <div className="section-divider" />
      <h2>{c('h5')}</h2>
      <p>{c('p20')}</p>
      <ul>
        <li>{c('li4')}</li>
        <li>{c('li5')}</li>
        <li>{c('li6')}</li>
      </ul>
      <p>{c('p21')}</p>
      <p>{c('p22')}</p>

      <div className="section-divider" />
      <h2>{c('h6')}</h2>
      <ul>
        <li>{c('li7')}</li>
        <li>{c('li8')}</li>
        <li>{c('li9')}</li>
        <li>{c('li10')}</li>
        <li>{c('li11')}</li>
      </ul>
      <p>{c('p23')}</p>
    </SectionWrapper>
  );
}