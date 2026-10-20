import htmlLogo from "../../images/technologies/html5.svg";
import cssLogo from "../../images/technologies/css3.svg";
import javascriptLogo from "../../images/technologies/javascript.svg";
import reactLogo from "../../images/technologies/react.svg";
import pythonLogo from "../../images/technologies/python.svg";
import nodeLogo from "../../images/technologies/nodejs.svg";
import mysqlLogo from "../../images/technologies/mysql.svg";
import vscodeLogo from "../../images/technologies/vscode.svg";
import photoshopLogo from "../../images/technologies/photoshop.svg";
import figmaLogo from "../../images/technologies/figma.svg";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navigation = [
  ["Início", "inicio"],
  ["Sobre", "sobre"],
  ["Tecnologias", "tecnologias"],
  ["Projetos", "projetos"],
  ["Experiência", "experiencia"],
  ["Contato", "contato"],
];

export const socials = {
  github: "https://github.com/matheuslufano",
  instagram: "https://www.instagram.com/mateu.py/",
  whatsapp: "https://wa.link/t2fb2x",
  links: "https://matheuslufano.github.io/pagina-de-links/",
  email: "mailto:matheuslufano93@gmail.com",
};

export const technologies = [
  {
    name: "HTML5",
    category: "Front-end",
    logo: htmlLogo,
    accent: "#e44d26",
    href: "https://github.com/matheuslufano/Curso-HTML5-CSS3",
  },
  {
    name: "CSS3",
    category: "Front-end",
    logo: cssLogo,
    accent: "#1572b6",
    href: "https://github.com/matheuslufano/Curso-HTML5-CSS3",
  },
  {
    name: "JavaScript",
    category: "Front-end",
    logo: javascriptLogo,
    accent: "#d7ad13",
    href: "https://github.com/matheuslufano/Curso-JavaScript",
  },
  {
    name: "React",
    category: "Front-end",
    logo: reactLogo,
    accent: "#149eca",
    href: "https://github.com/matheuslufano/Curso_React",
  },
  {
    name: "Python 3",
    category: "Back-end",
    logo: pythonLogo,
    accent: "#3776ab",
    href: "https://github.com/matheuslufano/Curso-de-Python",
  },
  {
    name: "Node.js",
    category: "Back-end",
    logo: nodeLogo,
    accent: "#5fa04e",
    href: "https://nodejs.org/en/",
  },
  {
    name: "MySQL",
    category: "Banco de dados",
    logo: mysqlLogo,
    accent: "#00758f",
    href: "https://www.mysql.com/",
  },
  {
    name: "VS Code",
    category: "Ferramentas",
    logo: vscodeLogo,
    accent: "#007acc",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Photoshop",
    category: "Design",
    logo: photoshopLogo,
    accent: "#31a8ff",
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Figma",
    category: "Design",
    logo: figmaLogo,
    accent: "#a259ff",
    href: "https://www.figma.com/",
  },
];

export const projects = [
  {
    name: "Curiosidades de Android",
    category: "Front-end",
    description:
      "Site editorial sobre a história do mascote Android, com conteúdo responsivo e identidade própria.",
    image: asset("images/site-android.png"),
    technologies: ["HTML5", "CSS3"],
    live: "https://matheuslufano.github.io/projeto-android/",
    featured: true,
  },
  {
    name: "Cordel Moderno",
    category: "Front-end",
    description:
      "Experiência de leitura inspirada em cordel, com imagens, tipografia expressiva e efeito parallax.",
    image: asset("images/proj-cordel.png"),
    technologies: ["HTML5", "CSS3"],
    live: "https://matheuslufano.github.io/Projeto-Cordel/cordel-moderno",
  },
  {
    name: "Calculadora JavaScript",
    category: "JavaScript",
    description:
      "Calculadora visual desenvolvida para praticar lógica, eventos e manipulação da interface.",
    image: asset("images/projeto-calculadora.png"),
    technologies: ["JavaScript", "CSS3"],
    live: "https://matheuslufano.github.io/projeto-calculadora/",
  },
  {
    name: "Página de links",
    category: "Front-end",
    description:
      "Central pessoal de links e canais profissionais, criada para reunir contatos em uma única experiência.",
    image: asset(
      "images/screencapture-matheuslufano-github-io-pagina-de-links-2023-11-26-10_43_54.png",
    ),
    technologies: ["HTML5", "CSS3"],
    live: "https://matheuslufano.github.io/pagina-de-links/",
  },
  {
    name: "Laboratório visual",
    category: "Em desenvolvimento",
    description:
      "Espaço reservado aos experimentos e projetos que estão em evolução.",
    image: asset("images/fundo/d3.png"),
    technologies: ["Design", "Front-end"],
    live: "https://github.com/matheuslufano",
  },
];

export const journey = [
  {
    period: "Formação em andamento",
    title: "Sistemas de Informação",
    place: "IFTO · Campus Paraíso do Tocantins",
    description:
      "Formação acadêmica que amplia a base em desenvolvimento, sistemas e tecnologia.",
  },
  {
    period: "Prática contínua",
    title: "Desenvolvimento Full Stack",
    place: "Projetos autorais",
    description:
      "Criação de interfaces e estudos práticos com HTML, CSS, JavaScript, React, Node.js e Python.",
  },
  {
    period: "Criação visual",
    title: "Design gráfico",
    place: "Projetos e eventos",
    description:
      "Produção de elementos visuais e artes com Photoshop e Figma para projetos digitais.",
  },
];
