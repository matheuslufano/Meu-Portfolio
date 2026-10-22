import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Sparkles,
} from "lucide-react";
import { socials } from "../../data/portfolio";
import FileFrame from "../FileFrame/FileFrame";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import styles from "./Hero.module.css";

/** Apresentação principal e resumo visual das competências. */
export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />
      <div className={styles.content}>
        <LiquidGlass className={styles.availability} blur={14} opacity={0.72}>
          <span />
          Disponível para novos projetos
        </LiquidGlass>
        <p className={styles.intro}>Olá, me chamo</p>
        <h1>Matheus Mota</h1>
        <p className={styles.description}>
          Sou desenvolvedor Full Stack e formado em Sistemas de Informação e amo
          a area que trabalho
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#projetos">
            Ver projetos <ArrowDownRight />
          </a>
          <a className={styles.ghostButton} href="#contato">
            Entrar em contato <ArrowUpRight />
          </a>
        </div>
        <div className={styles.socials}>
          <span>Encontre-me</span>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href={socials.links}
            target="_blank"
            rel="noreferrer"
            aria-label="Página de links"
          >
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div
        className={styles.visual}
        aria-label="Retrato de Matheus com tecnologias em destaque"
      >
        <div className={styles.portraitOrbit} aria-hidden="true" />
        <LiquidGlass className={styles.portraitCard} blur={30} opacity={0.54}>
          <FileFrame
            src={`${import.meta.env.BASE_URL}images/perfil/perfil-2.jpeg`}
            alt="Matheus S. Mota"
            fileName="matheus-dev.jpg"
          />
        </LiquidGlass>
        <img
          className={styles.portraitLogo}
          src={`${import.meta.env.BASE_URL}images/logo/lontra.png`}
          alt="Logo de lontra do Matheus.dev"
        />
        <LiquidGlass className={styles.codeCard} interactive>
          <Code2 />
          <div>
            <strong>Front-end</strong>
            <span>Interfaces responsivas</span>
          </div>
        </LiquidGlass>
        <LiquidGlass className={styles.stackCard} interactive>
          <Sparkles />
          <div>
            <strong>Full Stack</strong>
            <span>Do conceito ao código</span>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}
