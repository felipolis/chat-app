# Chat App

Bem-vindo à nossa aplicação de chat web! Aqui, você pode se cadastrar e criar grupos de conversa para se conectar com seus amigos em tempo real. Esta plataforma oferece uma experiência de comunicação dinâmica e interativa.

### Recursos Principais:

* **Cadastro de Usuários:** Registre-se facilmente para começar a utilizar a plataforma.
* **Criação de Grupos:** Crie grupos de conversa para conectar-se com amigos e colegas.
* **Conversas em Tempo Real:** Desfrute de bate-papos instantâneos e em tempo real.
* **Status dos Membros Online:** Visualize quem está atualmente conectado nos grupos.
* **Indicação de Digitação:** Saiba quando alguém está digitando uma mensagem.

### Tecnologias

* ReactJs, Mantine UI, Zustand, Apollo Client
* Nestjs, Prisma, Postgres, GraphQL, Redis, Apollo Server

### Como Executar

1. Clone o repositório
   ```bash
   git clone https://github.com/felipolis/chat-app.git
   ```
2. Execute o docker-compose para o postgres e o redis
   ```bash
   cd chat-app
   cd backend
   docker-compose up
   ```
3. Preencha as varaveis de ambiente do backend com o que for de sua preferência
4. Instale as dependencias do backend e inicie o servidor
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```
5. Instale as dependencias do frontend e inicie o cliente
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
