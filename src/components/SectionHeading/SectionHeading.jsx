import PropTypes from 'prop-types';
import styles from './SectionHeading.module.css';

/** Título padronizado das seções. */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return <div className={styles.heading} data-align={align}><span>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

SectionHeading.propTypes = { eyebrow: PropTypes.string.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string, align: PropTypes.oneOf(['left', 'center']) };
