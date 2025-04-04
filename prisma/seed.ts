import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpar o banco de dados antes de popular (opcional)
  await prisma.savedContent.deleteMany({});
  await prisma.performance.deleteMany({});
  await prisma.studySession.deleteMany({});
  await prisma.topicContent.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.user.deleteMany({});

  // Criar usuário de demonstração
  const user = await prisma.user.create({
    data: {
      name: 'Usuário de Demonstração',
      email: 'demo@example.com',
      password: '$2a$10$8r1q3ZY1TiCjxgM7dVhGS.9JL9yQGMQx5PzFCEsZ7.cEFlPq1KsLe', // senha: password123
      image: 'https://randomuser.me/api/portraits/lego/1.jpg',
    },
  });

  // Criar tópicos
  const topics = await Promise.all([
    prisma.topic.create({
      data: {
        title: 'Enzimas Digestivas',
        description: 'Estudo sobre as principais enzimas do trato digestivo, suas funções e mecanismos de ação.',
        category: 'Bioquímica',
      },
    }),
    prisma.topic.create({
      data: {
        title: 'Metabolismo da Glicose',
        description: 'Vias metabólicas envolvidas no processamento da glicose, incluindo glicólise, ciclo de Krebs e fosforilação oxidativa.',
        category: 'Bioquímica',
      },
    }),
    prisma.topic.create({
      data: {
        title: 'Anatomia Cardíaca',
        description: 'Estrutura e função do coração, incluindo câmaras, válvulas, vasos principais e tecido de condução.',
        category: 'Anatomia',
      },
    }),
    prisma.topic.create({
      data: {
        title: 'Farmacologia de Antibióticos',
        description: 'Estudo dos principais grupos de antibióticos, mecanismos de ação, espectro de atividade e resistência bacteriana.',
        category: 'Farmacologia',
      },
    }),
    prisma.topic.create({
      data: {
        title: 'Fisiologia Renal',
        description: 'Mecanismos de filtração glomerular, reabsorção tubular e regulação do equilíbrio hidroeletrolítico.',
        category: 'Fisiologia',
      },
    }),
    prisma.topic.create({
      data: {
        title: 'Neuroanatomia',
        description: 'Estudo das estruturas do sistema nervoso central e periférico, incluindo vias neurais e funções.',
        category: 'Neurociência',
      },
    }),
  ]);

  // Criar conteúdo para o tópico de Metabolismo da Glicose
  const glucoseMetabolism = topics[1];
  await prisma.topicContent.create({
    data: {
      topicId: glucoseMetabolism.id,
      contentType: 'summary',
      content: `
        <h3>Glicólise</h3>
        <p>A glicólise é a via metabólica que converte glicose em piruvato, ocorrendo no citoplasma de todas as células. Esta via consiste em 10 reações enzimáticas sequenciais e pode ser dividida em duas fases:</p>
        
        <h4>Fase de Investimento Energético (Reações 1-5)</h4>
        <ul>
          <li>A glicose é fosforilada pela hexoquinase, formando glicose-6-fosfato (G6P)</li>
          <li>G6P é isomerizada para frutose-6-fosfato (F6P) pela fosfoglicoisomerase</li>
          <li>F6P é fosforilada novamente pela fosfofrutoquinase-1, formando frutose-1,6-bisfosfato (F1,6BP)</li>
          <li>F1,6BP é clivada pela aldolase em diidroxiacetona fosfato (DHAP) e gliceraldeído-3-fosfato (G3P)</li>
          <li>DHAP é convertido em outro G3P pela triose fosfato isomerase</li>
        </ul>

        <h4>Fase de Geração de Energia (Reações 6-10)</h4>
        <ul>
          <li>G3P é oxidado e fosforilado pela gliceraldeído-3-fosfato desidrogenase, produzindo 1,3-bisfosfoglicerato (1,3-BPG)</li>
          <li>1,3-BPG transfere um fosfato ao ADP pela fosfoglicerato quinase, gerando ATP e 3-fosfoglicerato (3PG)</li>
          <li>3PG é convertido em 2-fosfoglicerato (2PG) pela fosfoglicerato mutase</li>
          <li>2PG é desidratado pela enolase, formando fosfoenolpiruvato (PEP)</li>
          <li>PEP transfere seu fosfato ao ADP pela piruvato quinase, gerando ATP e piruvato</li>
        </ul>

        <h4>Balanço Energético</h4>
        <p>Para cada molécula de glicose processada:</p>
        <ul>
          <li>Consumo: 2 ATP (fase de investimento)</li>
          <li>Produção: 4 ATP (fase de geração)</li>
          <li>Saldo líquido: 2 ATP + 2 NADH</li>
        </ul>

        <h4>Regulação</h4>
        <p>Enzimas regulatórias principais:</p>
        <ul>
          <li>Hexoquinase: inibida por G6P</li>
          <li>Fosfofrutoquinase-1: principal ponto de controle, inibida por ATP e citrato, ativada por AMP e F2,6BP</li>
          <li>Piruvato quinase: inibida por ATP e alanina, ativada por F1,6BP</li>
        </ul>
      `,
      difficultyLevel: 3,
    },
  });

  // Criar sessões de estudo para o usuário
  await prisma.studySession.create({
    data: {
      userId: user.id,
      topicId: glucoseMetabolism.id,
      startTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 dias atrás
      endTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 + 45 * 60 * 1000), // 45 minutos depois
      duration: 45 * 60, // 45 minutos em segundos
      xpEarned: 120,
    },
  });

  await prisma.studySession.create({
    data: {
      userId: user.id,
      topicId: topics[0].id, // Enzimas Digestivas
      startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 dias atrás
      endTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000), // 30 minutos depois
      duration: 30 * 60, // 30 minutos em segundos
      xpEarned: 85,
    },
  });

  // Criar conteúdo salvo para revisão posterior
  await prisma.savedContent.create({
    data: {
      userId: user.id,
      contentType: 'flashcard',
      content: 'Qual é a principal enzima reguladora da glicólise? | A fosfofrutoquinase-1 (PFK-1) é a principal enzima reguladora da glicólise, representando seu passo mais irreversível e altamente regulado.',
      reviewDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 dias no futuro
    },
  });

  await prisma.savedContent.create({
    data: {
      userId: user.id,
      contentType: 'quiz',
      content: JSON.stringify({
        question: 'Qual das seguintes vias metabólicas ocorre exclusivamente sob condições anaeróbicas?',
        options: [
          'Glicólise',
          'Ciclo de Krebs',
          'Fermentação lática',
          'Fosforilação oxidativa'
        ],
        answer: 2,
        explanation: 'A fermentação lática ocorre exclusivamente em condições anaeróbicas, quando não há oxigênio suficiente disponível. A glicólise pode ocorrer tanto em condições aeróbicas quanto anaeróbicas.'
      }),
      reviewDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 dia no futuro
    },
  });

  console.log('Banco de dados populado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 