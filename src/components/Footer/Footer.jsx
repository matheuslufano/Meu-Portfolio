import { Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import { navigation, socials } from '../../data/portfolio';
import styles from './Footer.module.css';

/** Rodapé com navegação, contatos e ano corrente. */
export default function Footer() {
  return <footer className={styles.footer}><div className={styles.top}><a className={styles.brand} href="#inicio"><img src={`${import.meta.env.BASE_URL}images/logo/lontra.png`} alt="" /><span>Matheus<span>.dev</span></span></a><nav aria-label="Navegação do rodapé">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className={styles.socials}><a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a><a href={socials.email} aria-label="E-mail"><Mail /></a></div></div><div className={styles.bottom}><p>© {new Date().getFullYear()} Matheus S. Mota. Todos os direitos reservados.</p><a href={socials.email}>matheuslufano93@gmail.com</a></div></footer>;
}
