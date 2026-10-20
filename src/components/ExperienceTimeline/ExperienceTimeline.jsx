import { journey } from '../../data/portfolio';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import styles from './ExperienceTimeline.module.css';

/** Linha do tempo baseada somente na formação e nas atividades informadas no site original. */
export default function ExperienceTimeline() {
  return <ol className={styles.timeline}>{journey.map((entry) => <li key={entry.title}><span className={styles.marker} aria-hidden="true" /><LiquidGlass className={styles.card} interactive><span>{entry.period}</span><h3>{entry.title}</h3><strong>{entry.place}</strong><p>{entry.description}</p></LiquidGlass></li>)}</ol>;
}
