import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import LiquidGlass from "../../components/LiquidGlass/LiquidGlass";
import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./Blog.module.css";

/** Estado inicial do blog, sem apresentar artigos ou publicações fictícias. */
export default function Blog() {
  return (
    <PageLayout
      eyebrow="Blog"
      title="Um espaço para compartilhar."
      description="Desenvolvimento, design e aprendizados ao longo da minha trajetória."
    >
      <LiquidGlass className={styles.empty}>
        <BookOpen size={36} aria-hidden="true" />
        <h2>Os primeiros artigos estão por vir.</h2>
        <p>
          Enquanto preparo os conteúdos, você pode conhecer os projetos e
          estudos que já fazem parte dessa jornada.
        </p>
        <Link to="/projetos">
          Explorar projetos <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </LiquidGlass>
    </PageLayout>
  );
}
