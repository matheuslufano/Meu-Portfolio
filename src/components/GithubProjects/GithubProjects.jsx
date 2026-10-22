import { useId, useState } from 'react';
import { ArrowUpRight, Github, Search, Star } from 'lucide-react';
import useGithubRepositories from '../../hooks/useGithubRepositories';
import { GITHUB_USERNAME } from '../../services/githubRepositories';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import styles from './GithubProjects.module.css';

const VISIBLE_INCREMENT = 9;

/** Seção independente do GitHub; a página define sua presença e posição na composição. */
export default function GithubProjects() {
  const headingId = useId();
  const { repositories, loading, error, retry } = useGithubRepositories();
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(VISIBLE_INCREMENT);
  const searchTerm = query.trim().toLocaleLowerCase('pt-BR');
  const matchingRepositories = repositories.filter((repository) =>
    [repository.name, repository.description, repository.language]
      .filter(Boolean).join(' ').toLocaleLowerCase('pt-BR').includes(searchTerm),
  );

  return (
    <section className={styles.gallery} aria-labelledby={headingId}>
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}><Github size={18} aria-hidden="true" /> Direto do GitHub</span>
          <h2 id={headingId}>Todos os meus repositórios</h2>
          <p>Projetos, estudos e experimentos públicos de @{GITHUB_USERNAME}.</p>
        </div>
        <a className={styles.link} href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noreferrer">
          Ver perfil <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <label className={styles.search}>
        <Search size={19} aria-hidden="true" />
        <span className={styles.searchLabel}>Buscar repositórios</span>
        <input type="search" placeholder="Buscar por nome, descrição ou linguagem..." value={query} onChange={(event) => {
          setQuery(event.target.value);
          setVisibleCount(VISIBLE_INCREMENT);
        }} />
      </label>

      <p className={styles.status} role="status">
        {loading ? 'Consultando projetos no GitHub...' : error || `${matchingRepositories.length} de ${repositories.length} repositórios`}
      </p>
      {error && <button className={styles.button} type="button" onClick={retry}>Tentar novamente</button>}
      {!loading && !error && matchingRepositories.length === 0 && (
        <p className={styles.status}>{repositories.length ? 'Nenhum repositório corresponde à busca.' : 'Nenhum repositório público disponível.'}</p>
      )}

      <div className={styles.grid} aria-busy={loading}>
        {matchingRepositories.slice(0, visibleCount).map((repository) => (
          <LiquidGlass as="article" className={styles.card} key={repository.id}>
            <div className={styles.cardHeading}>
              <Github size={22} aria-hidden="true" />
              {repository.archived && <span>Arquivado</span>}
              {repository.fork && <span>Fork</span>}
            </div>
            <h3><a href={repository.url} target="_blank" rel="noreferrer">{repository.name}</a></h3>
            <p className={styles.description}>{repository.description}</p>
            <div className={styles.metadata}>
              <span>{repository.language || 'Linguagem não informada'}</span>
              <span aria-label={`${repository.stars} estrelas`}><Star size={15} aria-hidden="true" /> {repository.stars}</span>
            </div>
            <div className={styles.actions}>
              <a className={styles.link} href={repository.url} target="_blank" rel="noreferrer" aria-label={`Ver repositório ${repository.name}`}>
                Repositório <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              {repository.website && <a className={styles.link} href={repository.website} target="_blank" rel="noreferrer" aria-label={`Abrir site de ${repository.name}`}>Abrir site <ArrowUpRight size={17} aria-hidden="true" /></a>}
            </div>
          </LiquidGlass>
        ))}
      </div>
      {matchingRepositories.length > visibleCount && (
        <button className={styles.button} type="button" onClick={() => setVisibleCount((previous) => previous + VISIBLE_INCREMENT)}>
          Mostrar mais projetos ({matchingRepositories.length - visibleCount} restantes)
        </button>
      )}
    </section>
  );
}
