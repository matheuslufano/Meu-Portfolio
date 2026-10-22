import GithubProjects from "../../components/GithubProjects/GithubProjects";
import PageLayout from "../../components/PageLayout/PageLayout";
import Projects from "../../components/Projects/Projects";

/** Página de projetos manuais e repositórios públicos do GitHub. */
export default function ProjectsPage() {
  return (
    <PageLayout
      eyebrow="Portfólio"
      title="Ideias que viram projetos."
      description="Explore meus trabalhos, protótipos e experimentos em desenvolvimento."
    >
      <Projects />
      <GithubProjects />
    </PageLayout>
  );
}
