(async () => {
  const root = document.getElementById("root");
  const isLocalHost = ["localhost", "127.0.0.1", "0.0.0.0"].includes(
    window.location.hostname,
  );
  const manifestCandidates = isLocalHost
    ? [
        "./.vite/manifest.json",
        "./dist/.vite/manifest.json",
        "./dist/manifest.json",
        "./manifest.json",
      ]
    : [
        "./.vite/manifest.json",
        "./manifest.json",
        "./dist/manifest.json",
        "./dist/.vite/manifest.json",
      ];

  async function fetchJson(url) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    }
  }

  const isViteDevServer = Boolean(import.meta?.env?.DEV);

  if (isViteDevServer) {
    await import("./src/main.jsx");
    return;
  }

  for (const manifestUrl of manifestCandidates) {
    const manifest = await fetchJson(manifestUrl);
    if (!manifest) continue;

    const entry = manifest["src/main.jsx"] || manifest["index.html"];
    if (!entry?.file) continue;

    const manifestBase = new URL(manifestUrl, document.baseURI);
    const assetBase = new URL("../", manifestBase);

    if (manifestUrl === "./dist/manifest.json") {
      let base = document.querySelector("base");
      if (!base) {
        base = document.createElement("base");
        document.head.prepend(base);
      }
      base.href = new URL("./dist/", document.baseURI).href;
    }

    for (const cssFile of entry.css || []) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = new URL(cssFile, assetBase).href;
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = new URL(entry.file, assetBase).href;
    document.body.appendChild(script);
    return;
  }

  root.innerHTML =
    '<div style="min-height:100vh;display:grid;place-items:center;background:#0b1016;color:#f4f7fb;font-family:sans-serif;text-align:center;padding:2rem"><div style="max-width:36rem"><h1 style="margin:0 0 .75rem;font-size:1.25rem">Unable to load the app bundle.</h1><p style="margin:0;opacity:.8">Run the Vite dev server with <code>npm run dev</code> or build the app first with <code>npm run build</code> before opening it through a static server.</p></div></div>';
})();
