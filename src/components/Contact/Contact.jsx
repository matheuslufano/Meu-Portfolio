import { ArrowUpRight, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import { socials } from '../../data/portfolio';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import Reveal from '../Reveal/Reveal';
import styles from './Contact.module.css';

/** Chamada de contato e formulário que prepara uma mensagem no cliente de e-mail. */
export default function Contact() {
  function submitContact(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato de ${form.get('name')} pelo portfólio`);
    const body = encodeURIComponent(`Nome: ${form.get('name')}\nE-mail: ${form.get('email')}\nCelular: ${form.get('phone')}\n\n${form.get('message')}`);
    window.location.href = `mailto:matheuslufano93@gmail.com?subject=${subject}&body=${body}`;
  }

  return <section className={styles.contact} id="contato"><Reveal><LiquidGlass className={styles.panel} blur={34} opacity={0.7}><div className={styles.copy}><span className={styles.eyebrow}>Vamos conversar</span><h2>Vamos transformar sua ideia em realidade?</h2><p>Estou disponível para colaborar em novos projetos, construir produtos digitais e explorar boas ideias com tecnologia.</p><div className={styles.links}><a href={socials.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a><a href={socials.email}><Mail /> E-mail</a><a href={socials.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={socials.instagram} target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div></div><form className={styles.form} onSubmit={submitContact}><label>Nome<input name="name" type="text" autoComplete="name" placeholder="Seu nome completo" required /></label><label>E-mail<input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required /></label><label>Celular<input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required /></label><label>Mensagem<textarea name="message" rows="4" placeholder="Conte um pouco sobre a sua ideia" required /></label><button className={styles.submitButton} type="submit">Preparar mensagem <ArrowUpRight /></button></form></LiquidGlass></Reveal></section>;
}
