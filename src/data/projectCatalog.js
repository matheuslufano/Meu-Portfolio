const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/**
 * @typedef {Object} Project
 * @property {string} name Nome exibido no cartão.
 * @property {string} category Categoria usada pelos filtros da pasta.
 * @property {string} description Resumo do projeto.
 * @property {string} image Caminho da imagem a partir da pasta pública do projeto.
 * @property {string[]} technologies Tecnologias ou competências relacionadas.
 * @property {string} live Endereço aberto pelo botão de visualização.
 * @property {boolean} [featured=false] Indica se o cartão recebe destaque visual.
 */

/**
 * Cria um projeto e resolve seu caminho de imagem conforme a base do Vite.
 *
 * @param {Project} project Dados exibidos no cartão do projeto.
 * @returns {Project} Projeto pronto para ser renderizado.
 */
const createProject = (project) => ({
  ...project,
  image: asset(project.image),
});

/**
 * @typedef {Object} ProjectFolder
 * @property {string} id Identificador único e estável da pasta.
 * @property {string} title Título exibido na interface.
 * @property {'blue'|'green'|'purple'|'orange'} color Cor visual da pasta.
 * @property {Project[]} [projects=[]] Projetos contidos na pasta.
 * @property {boolean} [filterable=false] Exibe os projetos desta pasta nos filtros.
 */

/**
 * Cria uma pasta com valores padrão, permitindo cadastrar pastas vazias apenas
 * com id, título e cor.
 *
 * @param {ProjectFolder} folder Configuração da pasta.
 * @returns {Required<ProjectFolder>} Pasta pronta para ser renderizada.
 */
const createProjectFolder = ({
  projects = [],
  filterable = false,
  ...folder
}) => ({
  ...folder,
  filterable,
  projects: projects.map(createProject),
});

/**
 * Fonte única de dados da seção "Projetos em destaque".
 * Para adicionar conteúdo, inclua um projeto em `projects` ou um novo objeto
 * `createProjectFolder` nesta lista. Nenhuma alteração no componente é necessária.
 */
export const projectFolders = [
  createProjectFolder({
    id: "personal",
    title: "Meus projetos",
    color: "blue",
    filterable: true,
    projects: [
      {
        name: "Curiosidades de Android",
        category: "Front-end",
        description:
          "Site editorial sobre a história do mascote Android, com conteúdo responsivo e identidade própria.",
        image: "images/site-android.png",
        technologies: ["HTML5", "CSS3"],
        live: "https://matheuslufano.github.io/projeto-android/",
        featured: true,
      },
      {
        name: "Cordel Moderno",
        category: "Front-end",
        description:
          "Experiência de leitura inspirada em cordel, com imagens, tipografia expressiva e efeito parallax.",
        image: "images/proj-cordel.png",
        technologies: ["HTML5", "CSS3"],
        live: "https://matheuslufano.github.io/Projeto-Cordel/cordel-moderno",
      },
      {
        name: "Calculadora JavaScript",
        category: "JavaScript",
        description:
          "Calculadora visual desenvolvida para praticar lógica, eventos e manipulação da interface.",
        image: "images/projeto-calculadora.png",
        technologies: ["JavaScript", "CSS3"],
        live: "https://matheuslufano.github.io/projeto-calculadora/",
      },
      {
        name: "Página de links",
        category: "Front-end",
        description:
          "Central pessoal de links e canais profissionais, criada para reunir contatos em uma única experiência.",
        image:
          "images/screencapture-matheuslufano-github-io-pagina-de-links-2023-11-26-10_43_54.png",
        technologies: ["HTML5", "CSS3"],
        live: "https://matheuslufano.github.io/pagina-de-links/",
      },
      {
        name: "Laboratório visual",
        category: "Em desenvolvimento",
        description:
          "Espaço reservado aos experimentos e projetos que estão em evolução.",
        image: "images/fundo/d3.png",
        technologies: ["Design", "Front-end"],
        live: "https://github.com/matheuslufano",
      },
    ],
  }),
  createProjectFolder({
    id: "ifto",
    title: "Projetos do IFTO",
    color: "green",
    projects: [
      {
        name: "IFTO Connect",
        category: "Design de interface",
        description:
          "Protótipo de uma rede social acadêmica para aproximar estudantes e comunidades do IFTO.",
        image: "images/projects/ifto-connect.png",
        technologies: ["Figma", "UI/UX"],
        live: "https://www.figma.com/proto/6yEJXMSGJnMD1j0wYdZgjF/IFTO---REDE?node-id=208-84&t=EHGvtDpgQRKbunoE-1",
      },
      {
        name: "Projeto Figma do - IF Connect",
        category: "Design de interface",
        description:
          "Protótipo de uma rede social acadêmica para aproximar estudantes e comunidades do IFTO.",
        image: "images/projects/figma-IF-connect-1.png",
        technologies: ["Figma", "UI/UX"],
        live: "https://www.figma.com/proto/6yEJXMSGJnMD1j0wYdZgjF/IFTO---REDE?node-id=208-84&t=EHGvtDpgQRKbunoE-1",
      },
    ],
  }),
  createProjectFolder({
    id: "events",
    title: "Eventos de tecnologia",
    color: "purple",
  }),
  createProjectFolder({
    id: "companies",
    title: "Empresas onde trabalhei",
    color: "orange",
    projects: [
      {
        name: "Netbox Site Oficial",
        category: "Front-end",
        description:
          "Criação de um site institucional para a empresa de tecnologia Netbox, com foco em apresentação de serviços e portfólio.",
        image: "images/projects/netbox/netbox site.png",
        technologies: ["Next.js", "Figma", "UI/UX", "TipoScript", "TailwindCSS"],
        live: "https://netbox.net.br/site",
      },
            {
        name: "Aniversário de 10 anos da Netbox",
        category: "Front-end",
        description:
          "Campanha de divulgação do aniversário de 10 anos da empresa de tecnologia Netbox, com foco em apresentação de serviços e portfólio.",
        image: "images/projects/netbox/netbox 10 ano - web.png",
        technologies: ["Next.js", "Figma", "UI/UX", "TipoScript", "TailwindCSS"],
        live: "https://netbox.net.br/site",
      },
    ],
  }),
];

/** Projetos das pastas que participam da filtragem por categoria. */
export const filterableProjects = projectFolders.flatMap((folder) =>
  folder.filterable ? folder.projects : [],
);

/** Categorias disponíveis, derivadas automaticamente dos projetos cadastrados. */
export const projectFilters = [
  "Todos",
  ...new Set(filterableProjects.map(({ category }) => category)),
];
