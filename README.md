```markdown
# VCR Digital - Frontend (React)

## 📝 Descrição do Projeto

Este é o frontend do projeto VCR Digital, construído com React. A aplicação consiste em uma interface pública para que os visitantes possam enviar seus depoimentos e um painel de administração completo para gerenciar esses depoimentos.

O painel de administração permite visualizar, editar e deletar os registros existentes, além de visualizar como eles aparecerão no site.

## 🚀 Tecnologias Utilizadas

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **Create React App**: Ferramenta para iniciar projetos React com configuração otimizada.
-   **Axios**: Cliente HTTP para realizar requisições à API do backend.
-   **CSS**: Para estilização dos componentes, seguindo a identidade visual do projeto.

## 🔧 Instalação e Configuração

### Pré-requisitos

-   **Node.js** (versão 14 ou superior)
-   O **servidor backend** deste projeto deve estar configurado e rodando.

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
    Para que a aplicação React possa se comunicar com a API durante o desenvolvimento, é necessário configurar um proxy no `package.json`:

    ```json
    // Dentro do seu package.json
    "proxy": "http://localhost:3001"
    ```
    *Obs: `3001` é a porta padrão definida no backend. Altere se necessário.*

4.  **Configure as Variáveis de Ambiente (Opcional, mas recomendado):**
    Para evitar um erro de segurança do `webpack-dev-server`, crie um arquivo chamado `.env` na raiz do projeto frontend e adicione a seguinte linha:
    
    ```
    DANGEROUSLY_DISABLE_HOST_CHECK=true
    ```

## ▶️ Executando o Projeto

**Importante:** Antes de iniciar o frontend, certifique-se de que o servidor backend já está rodando.

1.  Navegue até a pasta raiz do projeto frontend.
2.  Execute o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

    ```bash
    npm start
    ```

O comando irá abrir uma nova aba no seu navegador padrão com a aplicação rodando, geralmente em `http://localhost:3000`.
