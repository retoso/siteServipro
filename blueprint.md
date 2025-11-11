
# Visão Geral do Projeto de Reformulação

Este documento descreve o plano de ação para a recriação do site ServiPro, com o objetivo de reposicionar a marca para um consultor de automação focado em n8n, IA e integrações.

## Estrutura de Navegação e Componentes

O site é uma Single Page Application (SPA) construída em React. A navegação é gerenciada pela biblioteca `react-router-dom`.

- **Home:** Página principal com uma visão geral dos serviços.
- **Sobre:** Apresentação do consultor.
- **Soluções:** Detalhes sobre as soluções de automação.
- **Blog:** Artigos e conteúdo sobre automação.
- **FAQ:** Perguntas frequentes.
- **Contato:** Formulário e informações de contato.
- **Política de Privacidade:** Página com a política de privacidade.

## Plano de Ação

### Passo 1: Configuração do Ambiente e Estrutura Inicial

- **Concluído:** Instalação do `react-router-dom`.
- **Concluído:** Reestruturação do projeto em pastas para componentes, páginas e assets.
- **Concluído:** Criação da estrutura básica do `App.jsx` com o roteamento.

### Passo 2: Construção da Página Principal (Home)

- **Concluído:** Criação dos componentes `Hero`, `ProblemSolution`, `Tools`, `SecondaryCTA`.
- **Concluído:** Integração dos componentes na página `Home.jsx`.

### Passo 3: Criação das Páginas Estruturais

- **Concluído:** Criação da página `About.jsx`.
- **Concluído:** Criação da página `Solutions.jsx`.
- **Concluído:** Criação da página `Blog.jsx`.
- **Concluído:** Criação da página `FAQ.jsx`.
- **Concluído:** Criação da página `Contact.jsx`.
- **Concluído:** Criação da página `Privacy.jsx`.

### Passo 4: Implementação de Componentes Globais

- **Concluído:** Criação e estilização do componente `Navbar` com navegação responsiva.
- **Concluído:** Criação e estilização do componente `Footer` com layout de colunas.
- **Concluído:** Integração de todas as páginas no roteador principal e na navegação.

### Passo 5: Revisão e Finalização

- **Concluído:** Execução do `eslint` para garantir a qualidade do código.
- **Concluído:** Geração da build de produção.
- **Concluído:** Implantação da primeira versão no Firebase Hosting.

### Passo 6: Redesenho Visual e Implementação da Nova Identidade (Em Andamento)

- **Objetivo:** Aplicar a nova paleta de cores e a identidade visual de "interface viva" para aumentar a personalidade e o profissionalismo do site.
- **Paleta de Cores:**
  - **Primária:** Azul Elétrico (`#007BFF`) para elementos de ação.
  - **Secundária:** Cinza Antracite (`#212529`) para textos e cabeçalhos.
  - **Fundo:** Branco Puro (`#FFFFFF`) e Off-white (`#F8F9FA`).
  - **Apoio:** Verde-menta (`#00C896`) para indicadores de sucesso.
  - **Alerta/Ação:** Laranja (`#FF9F43`) para CTAs secundários e notificações.
- **Conceito Visual:** Implementar a ideia de "interface viva" com animações suaves em transições e um efeito de brilho sutil (neon) em elementos com a cor primária para dar a sensação de que a automação está sempre ativa.
- **Ações:**
  - Modificar todos os arquivos CSS para refletir a nova paleta.
  - Adicionar transições e animações para uma experiência de usuário mais fluida.
  - Aplicar um `box-shadow` com a cor primária em botões e links para criar o efeito de brilho.
