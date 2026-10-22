import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import styles from "./Header.module.css";

/** Cabeçalho compartilhado; NavLink identifica a página atual pela URL. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  /** Aplica o tema imediatamente; armazenamento bloqueado não impede a troca. */
  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      /* Tema continua válido nesta visita. */
    }
  }

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <LiquidGlass className={styles.navbar} opacity={0.9}>
        <Link className={styles.brand} to="/" aria-label="Matheus.dev — Início">
          <img
            src={`${import.meta.env.BASE_URL}images/logo/lontra.png`}
            alt=""
          />
          <span>
            Matheus<span>.dev</span>
          </span>
        </Link>
        <nav className={styles.navLinks} aria-label="Navegação principal">
          {navigation.map(({ label, path }) => (
            <NavLink
              className={styles.navLink}
              key={path}
              to={path}
              end={path === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            type="button"
            onClick={toggleTheme}
            aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? (
              <Moon aria-hidden="true" />
            ) : (
              <Sun aria-hidden="true" />
            )}
          </button>
          <Link className={styles.contactLink} to="/contato">
            Vamos conversar
          </Link>
        </div>
      </LiquidGlass>
    </header>
  );
}
