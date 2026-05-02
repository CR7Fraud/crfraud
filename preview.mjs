import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const viteBin = resolve(projectRoot, "node_modules", "vite", "bin", "vite.js");
const distDir = resolve(projectRoot, "dist");
const forwardedArgs = process.argv.slice(2);

const child = spawn(
  process.execPath,
  [viteBin, "preview", "--outDir", distDir, ...forwardedArgs],
  {
    cwd: projectRoot,
    stdio: "inherit",
    env: process.env,
  },
);

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
