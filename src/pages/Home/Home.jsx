import GithubProjects from "../../components/GithubProjects/GithubProjects";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";

/** Página inicial completa, preservando as seções e a ordem original do portfólio. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      {/* <GithubProjects /> */}
      <Experience />
      <Contact />
    </>
  );
}
