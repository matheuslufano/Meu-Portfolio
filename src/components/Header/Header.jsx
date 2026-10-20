import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navigation } from '../../data/portfolio';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import styles from './Header.module.css';

/** Navegação flutuante com menu mobile, tema persistente e estado de rolagem. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  }

  return <header className={styles.header} data-scrolled={scrolled || undefined}>
    <LiquidGlass className={styles.navbar} opacity={0.74}>
      <a className={styles.brand} href="#inicio" aria-label="Ir para o início">
        <img src={`${import.meta.env.BASE_URL}images/logo/lontra.png`} alt="" /><span>Matheus<span>.dev</span></span>
      </a>
      <nav className={styles.navLinks} data-open={menuOpen || undefined} aria-label="Navegação principal">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className={styles.actions}>
        <button className={styles.iconButton} type="button" onClick={toggleTheme} aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`} aria-pressed={theme === 'dark'}>{theme === 'light' ? <Moon /> : <Sun />}</button>
        <a className={styles.contactLink} href="#contato">Vamos conversar</a>
        <button className={styles.menuButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </LiquidGlass>
  </header>;
}
