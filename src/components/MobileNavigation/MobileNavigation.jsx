import {
  BookOpen,
  BriefcaseBusiness,
  FolderGit2,
  House,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import styles from "./MobileNavigation.module.css";

const icons = {
  home: House,
  blog: BookOpen,
  projects: FolderGit2,
  experience: BriefcaseBusiness,
  contact: Mail,
};

/** Cinco destinos persistentes no mobile, com estado ativo fornecido pelo roteador. */
export default function MobileNavigation() {
  return (
    <LiquidGlass
      as="nav"
      className={styles.navigation}
      blur={28}
      opacity={0.95}
      aria-label="Navegação mobile"
    >
      {navigation.map(({ label, path, icon }) => {
        const Icon = icons[icon];
        return (
          <NavLink
            className={styles.link}
            key={path}
            to={path}
            end={path === "/"}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        );
      })}
    </LiquidGlass>
  );
}
