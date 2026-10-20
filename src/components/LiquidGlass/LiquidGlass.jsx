import PropTypes from 'prop-types';
import './LiquidGlass.module.css';

/** Superfície de vidro reutilizável com intensidade configurável. */
export default function LiquidGlass({ as: Element = 'div', className = '', blur = 24, opacity = 0.66, interactive = false, children, ...props }) {
  return <Element className={className || undefined} data-liquid-glass data-interactive={interactive || undefined} style={{ '--glass-blur': `${blur}px`, '--glass-opacity': opacity }} {...props}>{children}</Element>;
}

LiquidGlass.propTypes = { as: PropTypes.elementType, className: PropTypes.string, blur: PropTypes.number, opacity: PropTypes.number, interactive: PropTypes.bool, children: PropTypes.node.isRequired };
