import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/crfraud/",
  build: {
    outDir: "dist",
    manifest: true,
  },
  plugins: [
    react(),
    {
      name: "fix-html-paths-for-local-and-pages",
      writeBundle() {
        const indexPath = path.join(__dirname, "dist", "index.html");
        let html = fs.readFileSync(indexPath, "utf-8");

        // Change absolute script path to relative
        html = html.replace(
          /src="\/crfraud\/assets\//g,
          'src="./assets/',
        );

        // Inject base href detection script if not already present
        if (!html.includes("Detect if running on GitHub Pages or locally")) {
          const baseScript = `    <script>
      // Detect if running on GitHub Pages or locally
      const pathname = window.location.pathname;
      const baseHref = pathname.includes('/crfraud/') ? '/crfraud/' : './';
      const base = document.createElement('base');
      base.href = baseHref;
      document.head.prepend(base);
    </script>`;

          html = html.replace(/<title>.*?<\/title>/s, (match) => match + "\n" + baseScript);
        }

        fs.writeFileSync(indexPath, html, "utf-8");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
