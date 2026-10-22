import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../data/navigation";

/** Atualiza título, rolagem e foco, preservando as âncoras das seções da página. */
export default function useRouteNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const currentPage = navigation.find(
      ({ path }) =>
        path === pathname.replace(/\/$/, "") ||
        (path === "/" && pathname === "/"),
    );
    document.title = `${currentPage?.label || "Página não encontrada"} | Matheus S. Mota`;
    // IDs conhecidos não exigem decodificação e toleram hashes malformados.
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.getElementById("conteudo")?.focus({ preventScroll: true });
  }, [pathname, hash]);
}
