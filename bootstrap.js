(async () => {
  const root = document.getElementById("root");
  const isLocalHost = ["localhost", "127.0.0.1", "0.0.0.0"].includes(
    window.location.hostname,
  );
  const manifestCandidates = isLocalHost
    ? ["./dist/.vite/manifest.json", "./dist/manifest.json", "./manifest.json"]
    : ["./manifest.json", "./dist/manifest.json", "./dist/.vite/manifest.json"];

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
    '<div style="min-height:100vh;display:grid;place-items:center;color:#f4f7fb;font-family:sans-serif;text-align:center;padding:2rem">Unable to load the app bundle.</div>';
})();
