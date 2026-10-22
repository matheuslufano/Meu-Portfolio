import { useEffect, useState } from 'react';
import { fetchGithubRepositories } from '../services/githubRepositories';

const REQUEST_TIMEOUT = 20000;

/** Carrega a galeria, cancela consultas pendentes e permite repetir uma falha. */
export default function useGithubRepositories() {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ repositories: [], loading: true, error: '' });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
    setState({ repositories: [], loading: true, error: '' });

    fetchGithubRepositories(controller.signal)
      .then((repositories) => {
        if (active) setState({ repositories, loading: false, error: '' });
      })
      .catch((error) => {
        if (!active) return;
        const message = controller.signal.aborted
          ? 'O GitHub demorou para responder. Tente novamente.'
          : error instanceof TypeError
            ? 'Não foi possível conectar ao GitHub. Verifique sua conexão e tente novamente.'
            : error.message;
        setState({ repositories: [], loading: false, error: message });
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      active = false;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [attempt]);

  return { ...state, retry: () => setAttempt((previous) => previous + 1) };
}
