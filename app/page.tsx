import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Study Copilot
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Sua assistente de estudos personalizada para medicina. Potencialize seu aprendizado com conteúdo adaptativo e repetição espaçada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/login" 
              className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/auth/register" 
              className="bg-secondary-500 hover:bg-secondary-600 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Como o Study Copilot pode ajudar você</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conteúdo Personalizado</h3>
              <p className="text-gray-600">
                Receba conteúdo de estudo adaptado às suas preferências, estilo de aprendizado e nível de conhecimento.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Repetição Espaçada</h3>
              <p className="text-gray-600">
                Otimize sua memorização e retenção com revisões programadas com base na Curva do Esquecimento de Ebbinghaus.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Acompanhamento de Progresso</h3>
              <p className="text-gray-600">
                Visualize seu progresso em cada tópico e ganhe insights sobre seu desempenho com análises detalhadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para transformar seus estudos de medicina?
          </h2>
          <Link 
            href="/auth/register" 
            className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Study Copilot</h3>
              <p className="text-gray-400 max-w-md">
                Transformando a maneira como estudantes de medicina aprendem e retêm conhecimento.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">Produto</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Recursos</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Preços</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Serviço</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Study Copilot. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 