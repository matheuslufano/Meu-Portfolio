import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import styles from "./App.module.css";

/** Compõe a página principal a partir de seções independentes. */
export default function App() {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
