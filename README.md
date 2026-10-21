# Portfólio — Matheus S. Mota

Portfólio pessoal desenvolvido em React com uma identidade visual inspirada em superfícies Liquid Glass. A página apresenta perfil, tecnologias, projetos, trajetória e canais de contato.

## Tecnologias

- React 18 e Vite.
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

- Navegação flutuante e menu mobile.
- Temas claro e escuro com preferência persistida no navegador.
- Componente reutilizável `LiquidGlass` com intensidade configurável. Sua classe
  local `surface` é importada explicitamente do CSS Module para manter os
  estilos vinculados ao componente também no build de produção.
- Tecnologias com logos coloridas em SVG, armazenadas em `images/technologies` e importadas pelo Vite, sobre cartões de vidro com reflexos e iluminação. Assets de marca do acervo [Devicon](https://github.com/devicons/devicon), sujeitos às diretrizes das respectivas marcas.
- Pasta interativa de projetos: clique para revelar os arquivos em janelas com capas e links. Os filtros por categoria continuam disponíveis; Escape fecha a pasta e retorna o foco ao botão. No celular, os arquivos são organizados em uma coluna.
- As pastas Meus projetos (azul), Projetos do IFTO (verde), Eventos de tecnologia (roxo) e Empresas onde trabalhei (laranja) são configuradas em `src/data/projectFolders.js`. A coleção do IFTO contém o protótipo IFTO Connect; Eventos de tecnologia e Empresas onde trabalhei permanecem disponíveis para futuros conteúdos. Para cadastrar projetos, use os campos `name`, `category`, `description`, `image`, `technologies` e `live`, conforme os exemplos existentes.
- Formulário que prepara a mensagem no cliente de e-mail do visitante.
- Layout adaptado para desktop, tablet e celular.
- Redução de movimento baseada em `prefers-reduced-motion`.
- Fallback para navegadores sem suporte a `backdrop-filter`.
