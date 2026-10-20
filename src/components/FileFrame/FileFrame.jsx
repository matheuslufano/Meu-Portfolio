import PropTypes from "prop-types";
import styles from "./FileFrame.module.css";

/** Renderiza uma imagem dentro da moldura de arquivo usada no portfólio. */
export default function FileFrame({ src, alt, fileName, loading, objectPosition = "center" }) {
  return (
    <div className={styles.frame}>
      <div className={styles.titlebar} aria-hidden="true">
        <span className={styles.lights}>
          <i />
          <i />
          <i />
        </span>
        <span>{fileName}</span>
      </div>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        loading={loading}
        style={{ "--file-frame-position": objectPosition }}
      />
    </div>
  );
}

FileFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  loading: PropTypes.oneOf(["eager", "lazy"]),
  objectPosition: PropTypes.string,
};
