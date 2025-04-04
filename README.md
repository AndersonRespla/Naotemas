# Study Copilot - Assistente de Estudos para Medicina

Study Copilot é uma aplicação projetada para ajudar estudantes de medicina a otimizar seus estudos com conteúdo personalizado, repetição espaçada e acompanhamento de progresso.

## Tecnologias Utilizadas

- **Frontend/Backend**: [Next.js 14](https://nextjs.org/) (App Router)
- **Estilização**: [TailwindCSS](https://tailwindcss.com/)
- **Banco de Dados**: PostgreSQL com [Prisma ORM](https://www.prisma.io/)
- **Autenticação**: [NextAuth.js](https://next-auth.js.org/)
- **Implantação**: [Vercel](https://vercel.com/) (recomendado)

## Requisitos

- Node.js 18 ou superior
- PostgreSQL (local ou hospedado)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/study-copilot.git
cd study-copilot
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/study_copilot"
NEXTAUTH_SECRET="sua-chave-secreta-para-nextauth"
NEXTAUTH_URL="http://localhost:3000"
```

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

5. Popule o banco de dados com dados iniciais (opcional):
```bash
npx prisma db seed
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Funcionalidades

- **Autenticação de Usuários**: Cadastro, login e gerenciamento de perfil
- **Seleção de Tópicos de Estudo**: Escolha entre diversos tópicos médicos
- **Conteúdo Personalizado**: Resumos, quizzes, flashcards e casos clínicos adaptados
- **Repetição Espaçada**: Algoritmo baseado na curva de esquecimento de Ebbinghaus
- **Acompanhamento de Progresso**: Estatísticas e visualização do histórico de estudos
- **Assistente AI**: Recomendações personalizadas baseadas no desempenho

## Estrutura do Projeto

- **/app**: Rotas e páginas da aplicação (usando o App Router do Next.js)
- **/components**: Componentes React reutilizáveis
- **/lib**: Utilitários e configurações
- **/prisma**: Esquema e migrações do banco de dados

## Implantação

Esta aplicação está configurada para fácil implantação na Vercel:

1. Crie uma conta na [Vercel](https://vercel.com/)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente necessárias
4. Implante!

## Licença

MIT

## Contato

Para sugestões ou dúvidas, entre em contato através de [seu-email@exemplo.com] 