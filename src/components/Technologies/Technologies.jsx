import { technologies } from "../../data/portfolio";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import styles from "./Technologies.module.css";

/** Grade das tecnologias presentes no portfólio original. */
export default function Technologies() {
  return (
    <section className={styles.technologies} id="tecnologias">
      <Reveal>
        <SectionHeading
          eyebrow="Tecnologias"
          title="Ferramentas que transformam ideias em produto."
          description="Uma seleção das tecnologias e ferramentas que fazem parte dos meus estudos e projetos."
        />
        <div className={styles.grid}>
          {technologies.map((technology) => (
            <TechnologyCard key={technology.name} technology={technology} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
