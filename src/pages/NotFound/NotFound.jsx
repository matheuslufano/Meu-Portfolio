import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./NotFound.module.css";

/** Destino de URLs que não correspondem a uma página do portfólio. */
export default function NotFound() {
  return (
    <PageLayout
      eyebrow="Página não encontrada"
      title="Esse caminho ainda não existe."
      description="Use a navegação para explorar o portfólio ou volte à página inicial."
    >
      <p className={styles.returnLink}>
        <Link to="/">Voltar ao início</Link>
      </p>
    </PageLayout>
  );
}
