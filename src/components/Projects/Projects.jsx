import { useState } from "react";
import {
  filterableProjects,
  projectFilters,
  projectFolders,
} from "../../data/projectCatalog";
import ProjectFolder from "../ProjectFolder/ProjectFolder";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Projects.module.css";

/** Galeria filtrável dos projetos existentes. */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const visibleProjects =
    activeFilter === "Todos"
      ? filterableProjects
      : filterableProjects.filter(({ category }) => category === activeFilter);
  return (
    <section className={styles.projects} id="projetos">
      <Reveal>
        <div className={styles.heading}>
          <SectionHeading
            eyebrow="Projetos"
            title="Veja meus projetos"
            description="
              Abaixo você poderar acompanhar alguns dos meus projetos, que vão desde pequenos experimentos até projetos mais complexos.
              Alguns deles são projetos pessoais, enquanto outros foram desenvolvidos em equipe ou como parte de um trabalho acadêmico.
            "
          />
          <div
            className={styles.filters}
            role="group"
            aria-label="Filtrar projetos"
          >
            {projectFilters.map((filter) => (
              <button
                key={filter}
                className={styles.filter}
                data-active={activeFilter === filter || undefined}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.folders}>
          {projectFolders.map((folder) => (
            <ProjectFolder
              key={folder.id}
              title={folder.title}
              color={folder.color}
              projects={folder.filterable ? visibleProjects : folder.projects}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
