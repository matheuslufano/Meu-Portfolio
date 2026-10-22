import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { navigation } from "./src/data/navigation";

/** Emite entradas estáticas para atualizar/acessar cada rota no GitHub Pages. */
function staticRouteEntries() {
  let outputDirectory;
  return {
    name: "static-route-entries",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const html = await readFile(
        resolve(outputDirectory, "index.html"),
        "utf8",
      );
      for (const { path } of navigation.filter(({ path }) => path !== "/")) {
        const directory = resolve(outputDirectory, path.slice(1));
        await mkdir(directory, { recursive: true });
        await writeFile(resolve(directory, "index.html"), html);
      }
      await writeFile(resolve(outputDirectory, "404.html"), html);
    },
  };
}

export default defineConfig({
  base: "/Meu-Portfolio/",
  plugins: [react(), staticRouteEntries()],
});
