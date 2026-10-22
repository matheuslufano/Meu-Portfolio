export const GITHUB_USERNAME = 'matheuslufano';
const PAGE_SIZE = 100;
const CACHE_DURATION = 10 * 60 * 1000;
let cachedRepositories = null;
let cachedAt = 0;

/** Aceita apenas endereços HTTP(S) cadastrados como site do repositório. */
function getWebsite(homepage) {
  if (!homepage) return null;
  try {
    const website = new URL(homepage);
    return ['http:', 'https:'].includes(website.protocol) ? website.href : null;
  } catch {
    return null;
  }
}

/**
 * Consulta todas as páginas dos repositórios públicos do perfil, incluindo forks
 * e arquivados. Mantém o resultado em memória por dez minutos, sem credenciais.
 * @param {AbortSignal} signal Cancela as requisições ao desmontar a galeria.
 * @returns {Promise<Array>} Repositórios com dados necessários à apresentação.
 * @throws {Error} Quando a API falha, limita as consultas ou retorna dados inválidos.
 */
export async function fetchGithubRepositories(signal) {
  if (cachedRepositories && Date.now() - cachedAt < CACHE_DURATION) {
    return cachedRepositories;
  }

  const repositories = [];
  let page = 1;
  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&direction=desc&per_page=${PAGE_SIZE}&page=${page}`,
      { signal, headers: { Accept: 'application/vnd.github+json' } },
    );
    if (!response.ok) {
      throw new Error(response.status === 403 || response.status === 429
        ? 'O GitHub limitou as consultas por enquanto. Tente novamente mais tarde.'
        : 'Não foi possível consultar os projetos no GitHub. Tente novamente.');
    }
    const pageRepositories = await response.json();
    if (!Array.isArray(pageRepositories)) {
      throw new Error('O GitHub retornou uma resposta inesperada. Tente novamente.');
    }
    repositories.push(...pageRepositories.filter((repository) => !repository.private));
    if (pageRepositories.length < PAGE_SIZE) break;
    page += 1;
  }

  cachedRepositories = repositories.map((repository) => ({
    id: repository.id,
    name: repository.name,
    description: repository.description || 'Este repositório ainda não possui uma descrição no GitHub.',
    language: repository.language,
    stars: repository.stargazers_count,
    fork: repository.fork,
    archived: repository.archived,
    url: `https://github.com/${GITHUB_USERNAME}/${encodeURIComponent(repository.name)}`,
    website: getWebsite(repository.homepage),
  }));
  cachedAt = Date.now();
  return cachedRepositories;
}
