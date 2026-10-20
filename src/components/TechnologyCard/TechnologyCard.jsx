import PropTypes from 'prop-types';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import styles from './TechnologyCard.module.css';

/** Apresenta a logo da marca em uma superfície de vidro, mantendo o link original. */
export default function TechnologyCard({ technology }) {
  const { name, category, logo, accent, href } = technology;

  return (
    <LiquidGlass as="a" className={styles.card} blur={28} opacity={0.56} interactive href={href} target="_blank" rel="noreferrer">
      <span className={styles.icon} style={{ '--technology-accent': accent }}>
        <img src={logo} alt="" aria-hidden="true" width="42" height="42" loading="lazy" decoding="async" />
      </span>
      <span>
        <strong>{name}</strong>
        <small>{category}</small>
      </span>
    </LiquidGlass>
  );
}

TechnologyCard.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};
