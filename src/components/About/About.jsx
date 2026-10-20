import { Code2, GraduationCap, Palette } from "lucide-react";
import FileFrame from "../FileFrame/FileFrame";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";

const specialties = [
  {
    icon: Code2,
    title: "Websites",
    text: "Experiências digitais que comunicam identidade, conectam pessoas e transformam ideias em produtos.",
  },
  {
    icon: Palette,
    title: "Design gráfico",
    text: "Elementos visuais e artes para projetos e eventos, combinando criatividade com objetivos claros.",
  },
  {
    icon: GraduationCap,
    title: "Python 3",
    text: "Minha linguagem favorita para estudar lógica, resolver problemas e criar novos projetos.",
  },
];

const dataNascimento = new Date(2000, 9, 19); // 19/10/2000

function calcularIdade(dataNascimento) {
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNascimento.getFullYear();

  const aindaNaoFezAniversario =
    hoje.getMonth() < dataNascimento.getMonth() ||
    (hoje.getMonth() === dataNascimento.getMonth() &&
      hoje.getDate() < dataNascimento.getDate());

  if (aindaNaoFezAniversario) {
    idade--;
  }

  return idade;
}

const idade = calcularIdade(dataNascimento);

/** Biografia e especialidades preservadas do portfólio original. */
export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <Reveal>
        <SectionHeading
          eyebrow="Sobre mim"
          title="Minha história"
          description="Tenho uma história construída entre código, design e muita de participar de novos projetos."
        />
        <div className={styles.grid}>
          <LiquidGlass className={styles.photo} opacity={0.56}>
            <FileFrame
              src={`${import.meta.env.BASE_URL}images/perfil/encontro com guanabara.jpeg`}
              alt="Matheus S. Mota"
              fileName="encontro com guanabara.jpeg"
              loading="lazy"
              objectPosition="center 18%"
            />
          </LiquidGlass>
          <div className={styles.story}>
            <p>
              Tenho {idade} anos, nasci em Paraíso do Tocantins, onde vivo até hoje.
              Desde criança gosto de tecnologia e acompanho sua evolução com
              curiosidade.
            </p>
            <p>
              Esse fascínio me levou à programação e às suas possibilidades.
              Atualmente curso Sistemas de Informação no IFTO, campus Paraíso,
              aprendendo com pessoas e projetos que ampliam minha visão sobre a
              área.
            </p>
            <div className={styles.specialties}>
              {specialties.map(({ icon: Icon, title, text }) => (
                <LiquidGlass className={styles.specialty} interactive key={title}>
                  <Icon />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </LiquidGlass>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
