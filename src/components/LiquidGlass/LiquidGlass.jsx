import PropTypes from 'prop-types';
import styles from './LiquidGlass.module.css';

/** Superfície de vidro reutilizável com intensidade configurável. */
export default function LiquidGlass({
  as: Element = 'div',
  className = '',
  blur = 24,
  opacity = 0.66,
  interactive = false,
  children,
  ...props
}) {
  const opacityPercentage = `${Math.round(opacity * 100)}%`;

  return (
    <Element
      className={[styles.surface, className].filter(Boolean).join(' ')}
      data-liquid-glass
      data-interactive={interactive || undefined}
      style={{
        '--glass-blur': `${blur}px`,
        '--glass-opacity': opacityPercentage,
      }}
      {...props}
    >
      {children}
    </Element>
  );
}

LiquidGlass.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  blur: PropTypes.number,
  opacity: PropTypes.number,
  interactive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
