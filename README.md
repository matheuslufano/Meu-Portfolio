# Portfólio — Matheus S. Mota

Portfólio pessoal desenvolvido em React com uma identidade visual inspirada em superfícies Liquid Glass. A página apresenta perfil, tecnologias, projetos, trajetória e canais de contato.

## Tecnologias

- React 18, Vite e React Router 7.
- CSS Modules responsivo e co-localizado com cada componente.
- Lucide React para ícones.
- Intersection Observer para animações de entrada.

## Executar localmente

```bash
npm install
npm run dev
```

## Validação e produção

```bash
npm run lint
npm run build
npm run preview
```

O Vite utiliza `/Meu-Portfolio/` como caminho base para manter compatibilidade com a publicação atual no GitHub Pages.

### Publicação na Vercel

O arquivo `vercel.json` configura o build da Vercel com caminho base `/` e copia
os arquivos estáticos de `images/` para `dist/images/`. O workflow do GitHub
Pages continua utilizando `/Meu-Portfolio/`.

Ao importar o repositório na Vercel, selecione como Root Directory a pasta que
contém `package.json`, `vite.config.js` e `vercel.json`. Utilize o preset Vite
e mantenha os comandos definidos pelo arquivo de configuração, sem overrides
no painel. Cada push para a branch de produção gera uma nova publicação.

## Estrutura principal

```text
src/
├── components/                # Uma pasta por componente
│   └── Hero/
│       ├── Hero.jsx           # Estrutura e comportamento
│       └── Hero.module.css    # Estilos isolados do componente
├── data/                      # Conteúdo, links, tecnologias e projetos
├── pages/                     # Uma pasta por página e sua composição
├── services/                  # Integrações externas, como a API do GitHub
├── hooks/                     # Comportamentos reutilizáveis
├── App.jsx
├── App.module.css             # Estilo exclusivo do componente raiz
└── styles/
    └── global.css             # Tokens, reset e estilos realmente globais
```

Cada elemento utiliza uma única classe do respectivo CSS Module. Estados e
variações visuais, como item ativo, pasta aberta ou cartão destacado, são
representados por atributos `data-*`, evitando a concatenação de vários nomes
de classe no JSX.

## Recursos

- Navegação entre páginas com cabeçalho flutuante no desktop e barra inferior no mobile.
- Temas claro e escuro com preferência persistida no navegador.
- Componente reutilizável `LiquidGlass` com intensidade configurável. Sua classe
  local `surface` é importada explicitamente do CSS Module para manter os
  estilos vinculados ao componente também no build de produção.
- Tecnologias com logos coloridas em SVG, armazenadas em `images/technologies` e importadas pelo Vite, sobre cartões de vidro com reflexos e iluminação. Assets de marca do acervo [Devicon](https://github.com/devicons/devicon), sujeitos às diretrizes das respectivas marcas.
- Pasta interativa de projetos: clique para revelar os arquivos em janelas com capas e links. Os filtros por categoria continuam disponíveis; Escape fecha a pasta e retorna o foco ao botão. No celular, os arquivos são organizados em uma coluna.
- As pastas Meus projetos (azul), Projetos do IFTO (verde), Eventos de tecnologia (roxo) e Empresas onde trabalhei (laranja) são configuradas em `src/data/projectCatalog.js`. Esse arquivo é a fonte única de dados da seção: categorias e caminhos públicos das imagens são processados automaticamente, sem alterações nos componentes React.
- Formulário que prepara a mensagem no cliente de e-mail do visitante.
- Layout adaptado para desktop, tablet e celular.
- Redução de movimento baseada em `prefers-reduced-motion`.
- Fallback para navegadores sem suporte a `backdrop-filter`.

## Cadastrar projetos e pastas

O conteúdo manual das pastas de **Projetos em destaque** fica em `src/data/projectCatalog.js`.

Para cadastrar um projeto, coloque a imagem dentro de `images/` e adicione um
objeto ao array `projects` da pasta desejada:

```js
{
  name: 'Nome do projeto',
  category: 'Front-end',
  description: 'Descrição curta do projeto.',
  image: 'images/projects/nome-da-imagem.png',
  technologies: ['React', 'CSS3'],
  live: 'https://endereco-do-projeto.example',
  featured: true, // Opcional: aplica o destaque visual ao cartão.
}
```

O campo `image` recebe somente o caminho relativo à pasta pública; a base do
Vite é acrescentada automaticamente. Uma nova `category` também cria seu filtro
sem configuração adicional quando o projeto pertence a uma pasta com
`filterable: true`.

Para cadastrar uma pasta, adicione à lista `projectFolders`:

```js
createProjectFolder({
  id: 'identificador-unico',
  title: 'Título da pasta',
  color: 'purple', // blue, green, purple ou orange
  projects: [],
})
```

`projects` pode ser omitido para uma pasta vazia. Use `filterable: true` somente
na pasta cujos projetos devem responder aos botões de categoria exibidos acima
das pastas.


## Repositórios do GitHub

A galeria **Todos os meus repositórios**, abaixo das pastas, consulta automaticamente
os repositórios públicos de `matheuslufano`, incluindo forks e arquivados, ordenados
pela atualização mais recente. A busca considera nome, descrição e linguagem. Os
cartões aparecem em grupos de nove; **Mostrar mais projetos** permite acessar todos.
O link **Abrir site** aparece quando o campo Website do repositório contém uma URL
HTTP(S) válida. Os destaques manuais continuam em `src/data/projectCatalog.js`.

- `src/services/githubRepositories.js`: perfil em `GITHUB_USERNAME`, consulta de
  todas as páginas da API pública, normalização e cache em memória por dez minutos.
- `src/hooks/useGithubRepositories.js`: carregamento, cancelamento, limite de espera
  de vinte segundos e nova tentativa em caso de erro.
- `src/components/GithubProjects/`: seção independente, com largura e espaçamento
  próprios, busca e estilos responsivos. Não é renderizada por `Projects`.

Para adicionar um projeto à galeria, crie um repositório público nesse perfil e
preencha sua descrição e Website no GitHub. Ele será incluído na próxima consulta
sem cadastro manual. Para trocar de perfil, altere `GITHUB_USERNAME` no serviço.

A consulta ocorre no navegador, sem token ou variável de ambiente. Depende da
conexão e dos limites da [API pública do GitHub](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user).
Em caso de falha, a galeria oferece uma nova tentativa e mantém o link para o perfil.
O cache dura enquanto a página está aberta; recarregar a página inicia nova consulta.
Repositórios privados e repositórios de organizações não são incluídos.


## Páginas e navegação

| Rota | Conteúdo | Arquivo de entrada |
| --- | --- | --- |
| `/` | Página completa: apresentação, sobre, tecnologias, projetos, experiência e contato | `src/pages/Home/Home.jsx` |
| `/blog` | Apresentação do blog; ainda sem artigos cadastrados | `src/pages/Blog/Blog.jsx` |
| `/projetos` | Pastas, filtros e galeria pública do GitHub | `src/pages/Projects/ProjectsPage.jsx` |
| `/experiencia` | Formação e trajetória existentes | `src/pages/Experience/ExperiencePage.jsx` |
| `/contato` | Canais e formulário que prepara e-mail | `src/pages/Contact/ContactPage.jsx` |

No GitHub Pages, acrescente `/Meu-Portfolio` antes dessas rotas. A base vem de
`import.meta.env.BASE_URL`, compartilhada pelos links e assets. O projeto continua
em React/Vite, com React Router em modo declarativo (`BrowserRouter`, `Routes` e
`NavLink`), sem migração de framework. Não há autenticação nessas páginas.

### Organização e comportamento

- `src/App.jsx`: layout persistente, registro das rotas e página não encontrada.
- `src/data/navigation.js`: destinos, rótulos e identificação dos ícones; fonte
  compartilhada por cabeçalho, rodapé, barra inferior e entradas estáticas do build.
- `src/components/Header/`: marca, tema persistente e navegação horizontal.
- `src/components/MobileNavigation/`: barra inferior com os cinco destinos.
- `src/components/PageLayout/`: título principal e espaçamento das páginas internas.
- `src/hooks/useRouteNavigation.js`: título da aba, retorno ao topo e foco no conteúdo
  ao trocar de rota. As âncoras `/#sobre`, `/#tecnologias`, `/#projetos`,
  `/#experiencia` e `/#contato` acessam as seções da página inicial completa.
  O link de pular para o conteúdo permanece disponível.

O estado ativo vem do `NavLink`, com `aria-current="page"`, fundo e marcador visual.
Abaixo de 1000px, os links horizontais são substituídos pela barra inferior; a marca
e a troca de tema permanecem no topo. O ponto de quebra reserva espaço para marca,
cinco links e ações no desktop. A barra limita sua largura a 480px e respeita
`env(safe-area-inset-bottom)`. O layout reserva 104px mais a área segura após o rodapé.
`viewport-fit=cover` permite usar as áreas seguras em dispositivos compatíveis.

Os estilos ficam em CSS Modules junto aos componentes. As superfícies reutilizam
`LiquidGlass`, inclusive o fundo alternativo quando não há `backdrop-filter`.
As transições de entrada e microinterações respeitam `prefers-reduced-motion`.
O formulário de contato mantém validação HTML e abre o cliente de e-mail; não existe
serviço de envio no servidor. A galeria do GitHub aparece no Início e em Projetos,
reutilizando os mesmos componentes e o cache do serviço.

### Acesso direto e publicação

O plugin `staticRouteEntries` em `vite.config.js` gera um `index.html` dentro de cada
rota da navegação e um `404.html`. São entradas da aplicação cliente, não páginas
pré-renderizadas. Isso permite abrir e atualizar as cinco rotas no GitHub Pages.
URLs desconhecidas usam a página de erro do portfólio (com status 404 no Pages).
Na Vercel, `vercel.json` também direciona URLs para a entrada da aplicação.
As configurações de base e cópia das imagens das duas hospedagens foram preservadas.

### Adicionar uma página

1. Crie a pasta e o componente em `src/pages/`, com estilos locais se necessários.
2. Registre sua rota em `src/App.jsx`.
3. Inclua o destino em `src/data/navigation.js`. Se necessário, adicione seu ícone
   ao mapa em `MobileNavigation.jsx` e adapte a distribuição da barra.
4. Execute `npm run lint` e `npm run build`; confira navegação, acesso direto,
   atualização, teclado e largura de 320px. O build emitirá a entrada da nova rota.

O Blog possui apenas um estado inicial explícito. A publicação de artigos e uma
integração com CMS não fazem parte da implementação atual.


### Escolher as seções de cada página

A ordem e a presença das seções são definidas nos componentes das páginas.
`Projects` apresenta somente as pastas e filtros manuais. `GithubProjects` é a
seção independente **Direto do GitHub**, com consulta, busca e carregamento próprios.
Ambos são incluídos explicitamente no Início e na página Projetos.

Por exemplo, em `src/pages/Home/Home.jsx`:

```jsx
import GithubProjects from '../../components/GithubProjects/GithubProjects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <GithubProjects />
      <Experience />
      <Contact />
    </>
  );
}
```

Os demais imports permanecem no arquivo da página. Para ocultar a seção do GitHub,
remova `<GithubProjects />` e seu import daquela página. Para mudar sua posição,
mova o componente na composição. As outras páginas continuam independentes.
A galeria cuida de seu próprio contêiner; não precisa ficar dentro de `<Projects />`.
