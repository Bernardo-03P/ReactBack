# VCR Digital - Frontend (React)

## 📝 Descrição do Projeto

Este é o frontend do projeto VCR Digital, uma Single Page Application (SPA) desenvolvida em React. A aplicação é a interface com a qual o usuário interage, e inclui duas áreas principais:

1.  **Formulário Público:** Uma seção no site onde visitantes podem deixar seus depoimentos.
2.  **Painel de Administração:** Uma área restrita para gerenciar todos os depoimentos, permitindo ao administrador visualizar, editar e deletar cada registro de forma intuitiva e com atualização em tempo real.

A aplicação se comunica com a **API do Backend** para persistir e recuperar os dados.

## 🚀 Tecnologias Utilizadas

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **Create React App**: Ferramenta base para a estrutura do projeto.
-   **Axios**: Cliente HTTP para realizar requisições à API do backend.
-   **CSS**: Para estilização customizada dos componentes.

## 🔧 Instalação e Configuração

### Pré-requisitos

-   **Node.js** (versão 14 ou superior)
-   O **servidor do backend** deste projeto deve estar configurado e em execução.

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_FRONTEND>
    cd <pasta_do_frontend>
    ```

2.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```

3.  **Configure a Conexão com o Backend:**
    Para que a aplicação React possa se comunicar com a API em ambiente de desenvolvimento, é necessário configurar um proxy. Abra o arquivo `package.json` na raiz do projeto e adicione a seguinte linha:

    ```json
    "proxy": "http://localhost:3001"
    ```

    *Observação: `3001` é a porta padrão definida no backend. Se você a alterou no arquivo `.env` do backend, altere aqui também.*

4.  **(Opcional) Configure as Variáveis de Ambiente:**
    Para resolver um problema comum de `allowedHosts` ao usar a funcionalidade de proxy, crie um arquivo chamado `.env` na raiz deste projeto frontend e adicione o seguinte conteúdo:
    
    ```dotenv
    # Arquivo .env
    DANGEROUSLY_DISABLE_HOST_CHECK=true
    ```

## ▶️ Executando o Projeto

**Importante:** Antes de iniciar o frontend, certifique-se de que o servidor backend já está rodando.

1.  No terminal, navegue até a pasta raiz do projeto frontend.
2.  Execute o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

    ```bash
    npm start
    ```

A aplicação será aberta automaticamente no seu navegador, geralmente no endereço `http://localhost:3000`.

## 📂 Estrutura dos Componentes
-   **`App.js`**: Componente principal que renderiza as outras partes da aplicação.
-   **`depoimentos.js`**: Componente que representa o painel de administração, onde é possível gerenciar todos os depoimentos e criar novos!.


## 🚀 Equipe e Créditos

Este projeto foi construído com a dedicação e o talento da seguinte equipe:

#### Bernardo Pozzebon Poluceno - *Desenvolvedor Backend*
Bernardo foi o arquiteto da API, cuidando de toda a lógica do servidor. Suas principais contribuições foram:
- Estruturação do backend com Node.js e Express.
- Desenvolvimento das rotas da API (GET, POST, PATCH, DELETE).
- Implementação da conexão com o banco de dados PostgreSQL.
- **[GitHub](https://github.com/Bernardo-03P)** 

#### Jordan Soares Aguiar - *Desenvolvedor Frontend & Banco de Dados*
Jordan foi o responsável por dar vida ao painel de gerenciamento, conectando o visual à funcionalidade. Suas principais contribuições foram:
- Desenvolvimento da interface de administração em React.
- Criação e estruturação da tabela `depoimentos` no PostgreSQL.
- **[GitHub](https://github.com/Jordan0725)** 

#### Lucas Casemiro de Freitas Frarre - *Designer e Pesquisador*
Lucas definiu a identidade visual do projeto e ajudou a traçar o caminho inicial. Suas principais contribuições foram:
- Criação do design e dos layouts para as interfaces do sistema.
- Pesquisa de referências e auxílio no planejamento geral do projeto.
- **[GitHub](https://github.com/lucascasemiro)** 
