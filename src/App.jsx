import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import useRouteNavigation from "./hooks/useRouteNavigation";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFound from "./pages/NotFound/NotFound";
import styles from "./App.module.css";

/** Layout persistente das páginas, com navegação e rodapé compartilhados. */
export default function App() {
  const { pathname } = useLocation();
  useRouteNavigation();

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main className={styles.main} id="conteudo" tabIndex={-1}>
        <div className={styles.route} key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/experiencia" element={<ExperiencePage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
}
