import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import styles from './ProjectCard.module.css';

/** Cartão de projeto com imagem, descrição, tecnologias e destino publicado. */
export default function ProjectCard({ project }) {
  return <LiquidGlass as="article" className={styles.card} data-project-card data-featured={project.featured || undefined} interactive>
    <a className={styles.media} data-project-media href={project.live} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}><img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" /></a>
    <div className={styles.content} data-project-content><span className={styles.category} data-project-category>{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className={styles.footer} data-project-footer><ul aria-label="Tecnologias utilizadas">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><a href={project.live} target="_blank" rel="noreferrer">Visualizar <ArrowUpRight /></a></div></div>
  </LiquidGlass>;
}

ProjectCard.propTypes = { project: PropTypes.shape({ name: PropTypes.string, category: PropTypes.string, description: PropTypes.string, image: PropTypes.string, technologies: PropTypes.arrayOf(PropTypes.string), live: PropTypes.string, featured: PropTypes.bool }).isRequired };
