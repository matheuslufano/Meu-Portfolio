import PropTypes from 'prop-types';
import useReveal from '../../hooks/useReveal';
import styles from './Reveal.module.css';

/** Contêiner de entrada progressiva acionada pela viewport. */
export default function Reveal({ as: Element = 'div', children }) {
  const ref = useReveal();
  return <Element ref={ref} className={styles.reveal}>{children}</Element>;
}

Reveal.propTypes = { as: PropTypes.elementType, children: PropTypes.node.isRequired };
