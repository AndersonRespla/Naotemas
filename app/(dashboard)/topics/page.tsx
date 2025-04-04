import Link from 'next/link';

export default function TopicsPage() {
  // Mock de dados para o MVP
  const topics = [
    {
      id: '1',
      title: 'Enzimas Digestivas',
      description: 'Estudo sobre as principais enzimas do trato digestivo, suas funções e mecanismos de ação.',
      category: 'Bioquímica',
      progress: 65,
      content: {
        quizzes: 3,
        flashcards: 24,
        summaries: 2,
        clinicalCases: 1,
      },
    },
    {
      id: '2',
      title: 'Metabolismo da Glicose',
      description: 'Vias metabólicas envolvidas no processamento da glicose, incluindo glicólise, ciclo de Krebs e fosforilação oxidativa.',
      category: 'Bioquímica',
      progress: 42,
      content: {
        quizzes: 5,
        flashcards: 38,
        summaries: 3,
        clinicalCases: 2,
      },
    },
    {
      id: '3',
      title: 'Anatomia Cardíaca',
      description: 'Estrutura e função do coração, incluindo câmaras, válvulas, vasos principais e tecido de condução.',
      category: 'Anatomia',
      progress: 78,
      content: {
        quizzes: 4,
        flashcards: 32,
        summaries: 2,
        clinicalCases: 3,
      },
    },
    {
      id: '4',
      title: 'Farmacologia de Antibióticos',
      description: 'Estudo dos principais grupos de antibióticos, mecanismos de ação, espectro de atividade e resistência bacteriana.',
      category: 'Farmacologia',
      progress: 25,
      content: {
        quizzes: 6,
        flashcards: 45,
        summaries: 4,
        clinicalCases: 5,
      },
    },
    {
      id: '5',
      title: 'Fisiologia Renal',
      description: 'Mecanismos de filtração glomerular, reabsorção tubular e regulação do equilíbrio hidroeletrolítico.',
      category: 'Fisiologia',
      progress: 52,
      content: {
        quizzes: 4,
        flashcards: 29,
        summaries: 3,
        clinicalCases: 2,
      },
    },
    {
      id: '6',
      title: 'Neuroanatomia',
      description: 'Estudo das estruturas do sistema nervoso central e periférico, incluindo vias neurais e funções.',
      category: 'Neurociência',
      progress: 18,
      content: {
        quizzes: 7,
        flashcards: 52,
        summaries: 5,
        clinicalCases: 4,
      },
    },
  ];

  const categories = Array.from(new Set(topics.map((topic) => topic.category)));

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tópicos de Estudo</h1>
          <p className="mt-1 text-sm text-gray-500">
            Escolha um tópico para iniciar ou continuar seus estudos
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar tópicos..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Categorias */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de Tópicos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {topic.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{topic.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{topic.content.quizzes} Quizzes</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>{topic.content.flashcards} Cards</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-primary-600">
                        Progresso: {topic.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${topic.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Link
                  href={`/study?topic=${topic.id}`}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Estudar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 