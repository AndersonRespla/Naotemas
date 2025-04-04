import Link from 'next/link';

export default function Dashboard() {
  // Mock de dados para o MVP
  const recentTopics = [
    { id: '1', title: 'Enzimas Digestivas', progress: 65, lastStudied: '2 dias atrás' },
    { id: '2', title: 'Metabolismo da Glicose', progress: 42, lastStudied: '4 dias atrás' },
    { id: '3', title: 'Anatomia Cardíaca', progress: 78, lastStudied: '1 dia atrás' },
  ];

  const upcomingReviews = [
    { id: '1', title: 'Flashcards: Enzimas Pancreáticas', dueDate: 'Hoje' },
    { id: '2', title: 'Quiz: Ciclo de Krebs', dueDate: 'Amanhã' },
    { id: '3', title: 'Caso Clínico: Diabetes Tipo 2', dueDate: 'Em 2 dias' },
  ];

  const totalXP = 2450;
  const streakDays = 4;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Acompanhe seu progresso e continue seus estudos
        </p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">XP Total</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">{totalXP}</div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">Dias Consecutivos</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">{streakDays}</div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">Tópicos Estudados</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">8</div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">Tempo de Estudo</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">12h 30m</div>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Topics */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Tópicos Recentes</h3>
            <Link href="/topics" className="text-sm font-medium text-primary-600 hover:text-primary-500">
              Ver todos
            </Link>
          </div>
          <div className="px-4 py-3 sm:px-6">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentTopics.map((topic) => (
                  <li key={topic.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{topic.title}</p>
                        <div className="mt-1">
                          <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                              <div
                                style={{ width: `${topic.progress}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Último estudo: {topic.lastStudied}</p>
                      </div>
                      <div>
                        <Link
                          href={`/study?topic=${topic.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                        >
                          Continuar
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Upcoming Reviews */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Revisões Pendentes</h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
              {upcomingReviews.length} pendentes
            </span>
          </div>
          <div className="px-4 py-3 sm:px-6">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {upcomingReviews.map((review) => (
                  <li key={review.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{review.title}</p>
                        <p className="text-sm text-gray-500">Prazo: {review.dueDate}</p>
                      </div>
                      <div>
                        <Link
                          href={`/study/review/${review.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                        >
                          Revisar
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Message */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 text-white">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Olá, Estudante!</h4>
              <p className="mt-1">
                Você está mantendo um bom ritmo de estudos! Considerando seu progresso no tópico
                "Metabolismo da Glicose", recomendo revisar os conceitos de glicólise para fortalecer 
                sua compreensão antes do próximo quiz.
              </p>
              <div className="mt-4">
                <Link
                  href="/study?topic=2&focus=glycolysis"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50"
                >
                  Revisar Glicólise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 