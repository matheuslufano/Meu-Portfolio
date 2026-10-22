import PropTypes from "prop-types";
import styles from "./PageLayout.module.css";

/** Estrutura das páginas internas, com um título principal e espaço para o cabeçalho. */
export default function PageLayout({ eyebrow, title, description, children }) {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

PageLayout.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
