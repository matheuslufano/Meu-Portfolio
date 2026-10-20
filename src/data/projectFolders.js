import { projects } from "./portfolio";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const iftoProjects = [
  {
    name: "IFTO Connect",
    category: "Design de interface",
    description:
      "Protótipo de uma rede social acadêmica para aproximar estudantes e comunidades do IFTO.",
    image: asset("images/projects/ifto-connect.png"),
    technologies: ["Figma", "UI/UX"],
    live: "https://www.figma.com/proto/6yEJXMSGJnMD1j0wYdZgjF/IFTO---REDE?node-id=208-84&t=EHGvtDpgQRKbunoE-1",
  },
  {
    name: "Projeto Figma do - IF Connect",
    category: "Design de interface",
    description:
      "Protótipo de uma rede social acadêmica para aproximar estudantes e comunidades do IFTO.",
    image: asset("images/projects/figma-IF-connect-1.png"),
    technologies: ["Figma", "UI/UX"],
    live: "https://www.figma.com/proto/6yEJXMSGJnMD1j0wYdZgjF/IFTO---REDE?node-id=208-84&t=EHGvtDpgQRKbunoE-1",
  },
];

/** Coleções do portfólio; adicione os futuros arquivos em cada lista de projetos. */
export const projectFolders = [
  { id: "personal", title: "Meus projetos", color: "blue", projects },
  {
    id: "ifto",
    title: "Projetos do IFTO",
    color: "green",
    projects: iftoProjects,
  },
  {
    id: "events",
    title: "Eventos de tecnologia",
    color: "purple",
    projects: [],
  },
  {
    id: "companies",
    title: "Empresas onde trabalhei",
    color: "orange",
    projects: [],
  },
];
