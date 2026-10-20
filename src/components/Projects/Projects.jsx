import { useState } from 'react';
import { projects } from '../../data/portfolio';
import { projectFolders } from '../../data/projectFolders';
import ProjectFolder from '../ProjectFolder/ProjectFolder';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Projects.module.css';

const filters = ['Todos', ...new Set(projects.map(({ category }) => category))];

/** Galeria filtrável dos projetos existentes. */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const visibleProjects = activeFilter === 'Todos' ? projects : projects.filter(({ category }) => category === activeFilter);
  return (
    <section className={styles.projects} id="projetos">
      <Reveal>
        <div className={styles.heading}>
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Cada pasta, uma parte da minha história."
            description="Explore meus projetos. Em breve, também vou compartilhar trabalhos do IFTO, eventos de tecnologia e experiências em empresas."
          />
          <div className={styles.filters} role="group" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button key={filter} className={styles.filter} data-active={activeFilter === filter || undefined} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
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
              projects={folder.id === 'personal' ? visibleProjects : folder.projects}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
