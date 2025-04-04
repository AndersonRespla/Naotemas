import Link from 'next/link';

export default function StudyPage() {
  // Mock de dados para o MVP
  const currentTopic = {
    id: '2',
    title: 'Metabolismo da Glicose',
    description: 'Vias metabólicas envolvidas no processamento da glicose, incluindo glicólise, ciclo de Krebs e fosforilação oxidativa.',
    progress: 42,
  };

  // Mock do conteúdo de estudo atual
  const studyContent = {
    type: 'summary',
    title: 'Glicólise: Visão Geral',
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
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{currentTopic.title}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {currentTopic.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            Progresso: {currentTopic.progress}%
          </span>
        </div>
      </header>

      {/* Barra de navegação do conteúdo */}
      <div className="flex overflow-x-auto pb-3 -mx-4 px-4 space-x-4">
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md flex-shrink-0">
          Resumo
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md shadow-sm flex-shrink-0">
          Flashcards
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md shadow-sm flex-shrink-0">
          Quiz
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md shadow-sm flex-shrink-0">
          Caso Clínico
        </button>
      </div>

      {/* Conteúdo de estudo */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">{studyContent.title}</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
          <div 
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: studyContent.content }}
          />
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-between">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200">
            Marcar como "Rever Depois"
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
            Marcar como Aprendido
          </button>
        </div>
      </div>

      {/* Navegação do conteúdo */}
      <div className="flex justify-between pt-4">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          Próximo
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 