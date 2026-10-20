import { useId, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectFolder.module.css';

/** Pasta expansível; Escape fecha os arquivos e devolve o foco ao controle. */
export default function ProjectFolder({ projects, title = 'Meus projetos', color = 'blue' }) {
  const [expanded, setExpanded] = useState(false);
  const folderButton = useRef(null);
  const filesId = useId();
  const isEmpty = projects.length === 0;

  function closeOnEscape(event) {
    if (event.key !== 'Escape' || !expanded) return;
    setExpanded(false);
    folderButton.current?.focus();
  }

  return (
    <div className={styles.desktop} data-project-folder data-color={color} data-open={expanded || undefined} data-empty={isEmpty || undefined} onKeyDown={closeOnEscape}>
      <button
        ref={folderButton}
        className={styles.folder}
        type="button"
        aria-expanded={expanded}
        aria-controls={filesId}
        onClick={() => setExpanded((previous) => !previous)}
      >
        <span className={styles.folderArt} aria-hidden="true">
          <span className={styles.folderBack} />
          <span className={styles.folderPreviews}>
            {projects.slice(0, 3).map((project, index) => (
              <img key={project.name} src={project.image} alt="" style={{ '--preview-index': index }} />
            ))}
          </span>
          <span className={styles.folderFront} />
        </span>
        <strong>{title}</strong>
        <span className={styles.folderHint}>
          {expanded ? 'Clique para fechar' : isEmpty ? 'Em breve · Clique para abrir' : `${projects.length} arquivos · Clique para abrir`}
        </span>
      </button>

      <div id={filesId} className={styles.folderFiles} inert={expanded ? undefined : ''} aria-hidden={!expanded}>
        {isEmpty && (
          <div className={styles.emptyMessage}>
            <strong>Essa história ainda vai ganhar arquivos.</strong>
            <p>Em breve, novos conteúdos por aqui.</p>
          </div>
        )}
        {projects.map((project, index) => (
          <div className={styles.file} key={project.name} style={{ '--file-index': index }}>
            <div className={styles.fileTitlebar} aria-hidden="true">
              <span className={styles.fileLights}><i /><i /><i /></span>
              <span>{project.name}</span>
            </div>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectFolder.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'green', 'purple', 'orange']),
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
