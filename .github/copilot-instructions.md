## Resumo rápido

Este repositório é uma SPA React criada com Vite. Estrutura principal:

- Entrypoint: `src/main.jsx` → renderiza `src/App.jsx`.
- Rotas: definidas em `src/App.jsx` usando `react-router-dom` (ex.: `/`, `/solutions`, `/sobre`, `/blog/:postId`).
- Componentes: `src/components/` (Navbar, Footer, Hero, etc.).
- Páginas: `src/pages/` (Home, Blog, Contact, About, etc.).
- Dados estáticos: `src/blogData.js` e `src/faqData.js` (exemplo de como adicionar posts e FAQs).

## Comandos de desenvolvedor

- Dev (hot reload): `npm run dev` (Vite)
- Build: `npm run build` → saída em `dist/`
- Preview do build: `npm run preview`
- Lint: `npm run lint` (ESLint configurado no projeto)

Observação de hosting: `firebase.json` espera que o static host sirva a pasta `dist` e reescreve todas as rotas para `index.html` (SPA). Ao implantar no Firebase Hosting, certifique-se de rodar `npm run build` antes.

## Padrões e convenções do projeto (úteis para agentes)

- Idioma: componentes e rotas usam português (ex.: `/sobre`, `/contato`). Preserve a localização ao adicionar textos.
- CSS: cada componente geralmente tem seu próprio arquivo CSS em `src/components/` e estilos de página em `src/styles/`. Mantenha o mesmo padrão ao adicionar novos componentes.
- Dados locais: o blog e FAQ são arrays JS exportados (`src/blogData.js`, `src/faqData.js`). Para adicionar um post, adicione um objeto com `slug`, `title`, `date`, `excerpt`, `imageUrl` e `content` (HTML string usada por `BlogPost.jsx`).
- Icons: usa `react-icons` em vários componentes (ex.: `Footer.jsx`). Prefira esse pacote para ícones consistentes.

## Integrações e pontos sensíveis

- Email: `src/pages/Contact.jsx` usa `@emailjs/browser` e atualmente inclui IDs/keys diretamente no código (service ID, template ID, public key). Evite commitar chaves reais — mova para variáveis de ambiente e atualize o código para `import.meta.env` ou `process.env` conforme apropriado.
- Hosting: `firebase.json` com rewrite para `index.html` — qualquer rota definida pelo React Router será servida corretamente pelo hosting.

## Arquivos-chave para mudanças comuns (exemplos práticos)

- Adicionar rota/página: editar `src/App.jsx` (adicionar import e <Route path=... element=... />). Veja como `/blog/:postId` é feito.
- Adicionar post de blog: editar `src/blogData.js` e adicionar objeto com `slug` (usado em URL), `title`, `date`, `excerpt`, `imageUrl` e `content`.
- Atualizar footer/navbar: `src/components/Footer.jsx` e `src/components/Navbar.jsx` — ambos usam CSS locais (`Footer.css`, `Navbar.css`).

## Regras específicas para agentes Copilot / IA

1. Seja conservador ao tocar em arquivos de configuração (package.json, vite.config.js, firebase.json). Modificações aqui afetam todo o fluxo de deploy.
2. Ao alterar código que lida com credenciais (ex.: `Contact.jsx`), mova chaves para variáveis de ambiente e deixe notas claras no commit sobre rotação/remoção das chaves expostas.
3. Preserve paths de rota existentes (ex.: `/politica-de-privacidade` vs `/privacy`) — o site já usa slugs em português; mude somente se atualizar links no `Navbar` e `Footer` simultaneamente.
4. Para mudanças visuais, siga a convenção CSS local por componente e evite alterar regras globais sem necessidade.

## Exemplo rápido (adicionar blog post)

1. Abra `src/blogData.js`.
2. Copie o formato de objeto existente e adicione novo item com `slug` único.
3. Atualize `Blog.jsx` ou deixe que rotas existentes ( `/blog/:postId` ) consumam o novo `slug` automaticamente.

## Onde procurar problemas/limitações conhecidas

- Não existem testes automatizados (nenhum script `test` no `package.json`). Agentes devem evitar assumir cobertura de testes.
- ESLint está configurado; rode `npm run lint` após mudanças grandes.
- Algumas strings e dados estão hard-coded (ex.: contatos, chaves) — avaliar segurança/privacidade antes de publicar.

Se quiser, eu posso ajustar o tom (mais técnico ou mais resumido), adicionar exemplos de PR messages, ou mover chaves sensíveis para `.env` com um patch. Qual parte você quer que eu detalhe mais? 
