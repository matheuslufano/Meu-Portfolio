import ExperienceTimeline from '../ExperienceTimeline/ExperienceTimeline';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Experience.module.css';

/** Seção de formação e trajetória profissional. */
export default function Experience() {
  return <section className={styles.experience} id="experiencia"><Reveal><SectionHeading eyebrow="Experiência e trajetória" title="Aprendizado que ganha forma em projetos." description="Um percurso em construção, conectando formação acadêmica, desenvolvimento e repertório visual." align="center" /><ExperienceTimeline /></Reveal></section>;
}
