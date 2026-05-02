import React, { useState, useEffect } from "react";

import { RefreshCw } from "lucide-react";
import { useI18n } from "../lib/i18n";

const SOURCE_URL = "https://r.jina.ai/http://messivsronaldo.app";

const LOCALES = {
  en: "en-US",
  pt: "pt-PT",
  es: "es-ES",
  fr: "fr-FR",
};

const STAT_LABELS = {
  en: {
    goals: "Goals",
    assists: "Assists",
    appearances: "Appearances",
    minutesPerGoal: "Min / Goal",
    minutesPerContribution: "Min / Contribution",
    outsideBox: "Goals Outside Box",
    freeKickGoals: "Free Kick Goals",
    shotsOnTarget: "Shots on Target",
    keyPasses: "Key Passes",
    ballonDor: "Ballon d'Or",
  },
  pt: {
    goals: "Golos",
    assists: "Assistências",
    appearances: "Jogos",
    minutesPerGoal: "Min/Golo",
    minutesPerContribution: "Min/Contribuição",
    outsideBox: "Golos fora da área",
    freeKickGoals: "Golos de livre",
    shotsOnTarget: "Remates certeiros",
    keyPasses: "Passes-chave",
    ballonDor: "Bolas de Ouro",
  },
  es: {
    goals: "Goles",
    assists: "Asistencias",
    appearances: "Partidos",
    minutesPerGoal: "Min/Gol",
    minutesPerContribution: "Min/Contribución",
    outsideBox: "Goles fuera del área",
    freeKickGoals: "Goles de falta",
    shotsOnTarget: "Tiros a puerta",
    keyPasses: "Pases clave",
    ballonDor: "Balones de Oro",
  },
  fr: {
    goals: "Buts",
    assists: "Passes décisives",
    appearances: "Matches",
    minutesPerGoal: "Min/But",
    minutesPerContribution: "Min/Contribution",
    outsideBox: "Buts hors de la surface",
    freeKickGoals: "Buts sur coup franc",
    shotsOnTarget: "Tirs cadrés",
    keyPasses: "Passes clés",
    ballonDor: "Ballons d'Or",
  },
};

const FALLBACK_STATS = {
  goals: { messi: 905, ronaldo: 970 },
  assists: { messi: 407, ronaldo: 261 },
  appearances: { messi: 1150, ronaldo: 1318 },
  minutesPerGoal: { messi: 105, ronaldo: 111 },
  minutesPerContribution: { messi: 72, ronaldo: 88 },
  outsideBox: { messi: 106, ronaldo: 72 },
  freeKickGoals: { messi: 71, ronaldo: 64 },
  shotsOnTarget: { messi: 1914, ronaldo: 2124 },
  keyPasses: { messi: 2061, ronaldo: 1303 },
  ballonDor: { messi: 8, ronaldo: 5 },
};

const STAT_ORDER = [
  "goals",
  "assists",
  "appearances",
  "minutesPerGoal",
  "minutesPerContribution",
  "outsideBox",
  "freeKickGoals",
  "shotsOnTarget",
  "keyPasses",
  "ballonDor",
];

const ui = {
  en: {
    source: "Source",
    updated: "Updated",
    fallback: "(fallback data)",
    refresh: "Refresh",
    stat: "Stat",
  },
  pt: {
    source: "Fonte",
    updated: "Atualizado em",
    fallback: "(dados de reserva)",
    refresh: "Atualizar",
    stat: "Estatística",
  },
  es: {
    source: "Fuente",
    updated: "Actualizado",
    fallback: "(datos de reserva)",
    refresh: "Actualizar",
    stat: "Estadística",
  },
  fr: {
    source: "Source",
    updated: "Mis à jour",
    fallback: "(données de secours)",
    refresh: "Actualiser",
    stat: "Statistique",
  },
};

const normalizeNumber = (value) => {
  if (value == null) {
    return null;
  }

  const digitsOnly = String(value).replace(/[^\d]/g, "");
  if (!digitsOnly) {
    return null;
  }

  const parsed = Number(digitsOnly);
  return Number.isFinite(parsed) ? parsed : null;
};

const extractNumber = (source, regex) => {
  const match = source.match(regex);
  return match ? normalizeNumber(match[1]) : null;
};

const formatNumber = (value, lang) => {
  const numericValue =
    typeof value === "number" ? value : normalizeNumber(value);
  if (numericValue == null) {
    return "";
  }

  return new Intl.NumberFormat(LOCALES[lang] || LOCALES.en).format(
    numericValue,
  );
};

const buildDisplayStats = (lang, statsSource) =>
  STAT_ORDER.map((key) => ({
    label: STAT_LABELS[lang]?.[key] || STAT_LABELS.en[key],
    messi: formatNumber(statsSource[key].messi, lang),
    ronaldo: formatNumber(statsSource[key].ronaldo, lang),
  }));

const buildWithFallback = (parsedStats) => {
  const mergedStats = {};

  for (const key of STAT_ORDER) {
    mergedStats[key] = {
      messi: parsedStats?.[key]?.messi ?? FALLBACK_STATS[key].messi,
      ronaldo: parsedStats?.[key]?.ronaldo ?? FALLBACK_STATS[key].ronaldo,
    };
  }

  mergedStats.sourceDate = parsedStats?.sourceDate ?? null;
  return mergedStats;
};

const parseLiveStats = (text) => {
  const careerMatch = text.match(
    /### Messi Stats All Time Career All Time([\s\S]*?)### Ronaldo Stats All Time Career All Time([\s\S]*?)Detailed Stats/i,
  );

  if (!careerMatch) {
    return null;
  }

  const messiCareerBlock = careerMatch[1];
  const ronaldoCareerBlock = careerMatch[2];

  const stats = {
    goals: {
      messi: extractNumber(messiCareerBlock, /([\d,]+)\s*GOALS/i),
      ronaldo: extractNumber(ronaldoCareerBlock, /([\d,]+)\s*GOALS/i),
    },
    assists: {
      messi: extractNumber(messiCareerBlock, /([\d,]+)\s*ASSISTS/i),
      ronaldo: extractNumber(ronaldoCareerBlock, /([\d,]+)\s*ASSISTS/i),
    },
    appearances: {
      messi: extractNumber(messiCareerBlock, /([\d,]+)\s*APPS?/i),
      ronaldo: extractNumber(ronaldoCareerBlock, /([\d,]+)\s*APPS?/i),
    },
    minutesPerGoal: {
      messi: extractNumber(
        messiCareerBlock,
        /([\d.]+)\s*minutes?\s+per\s+goal\b/i,
      ),
      ronaldo: extractNumber(
        ronaldoCareerBlock,
        /([\d.]+)\s*minutes?\s+per\s+goal\b/i,
      ),
    },
    minutesPerContribution: {
      messi: extractNumber(
        messiCareerBlock,
        /([\d.]+)\s*minutes?\s+per\s+goal contribution\b/i,
      ),
      ronaldo: extractNumber(
        ronaldoCareerBlock,
        /([\d.]+)\s*minutes?\s+per\s+goal contribution\b/i,
      ),
    },
  };

  const freeKickMatch = text.match(
    /Messi\s+([\d,]+)\s+Free Kick Goals\s+Ronaldo\s+([\d,]+)\s+Free Kick Goals/i,
  );
  if (freeKickMatch) {
    stats.freeKickGoals = {
      messi: normalizeNumber(freeKickMatch[1]),
      ronaldo: normalizeNumber(freeKickMatch[2]),
    };
  }

  const outsideBoxMatch = text.match(
    /Messi\s+([\d,]+)\s+Outside the Box\s+Ronaldo\s+([\d,]+)\s+Outside the Box/i,
  );
  if (outsideBoxMatch) {
    stats.outsideBox = {
      messi: normalizeNumber(outsideBoxMatch[1]),
      ronaldo: normalizeNumber(outsideBoxMatch[2]),
    };
  }

  const shotsOnTargetMatch = text.match(
    /Messi\s+([\d,]+)\s+Shots on Target\s+Ronaldo\s+([\d,]+)\s+Shots on Target/i,
  );
  if (shotsOnTargetMatch) {
    stats.shotsOnTarget = {
      messi: normalizeNumber(shotsOnTargetMatch[1]),
      ronaldo: normalizeNumber(shotsOnTargetMatch[2]),
    };
  }

  const keyPassesMatch = text.match(
    /Messi has made\s+\*{0,2}([\d,]+)\*{0,2}\s+key passes[\s\S]*?Ronaldo has made\s+\*{0,2}([\d,]+)\*{0,2}\s+key passes/i,
  );
  if (keyPassesMatch) {
    stats.keyPasses = {
      messi: normalizeNumber(keyPassesMatch[1]),
      ronaldo: normalizeNumber(keyPassesMatch[2]),
    };
  }

  const ballonDorMatch = text.match(
    /### Messi Ballon d'Or Awards\s+(\d+)[\s\S]*?### Ronaldo Ballon d'Or Awards\s+(\d+)/i,
  );
  if (ballonDorMatch) {
    stats.ballonDor = {
      messi: normalizeNumber(ballonDorMatch[1]),
      ronaldo: normalizeNumber(ballonDorMatch[2]),
    };
  }

  const updatedLines = text.match(/Updated\s+[^\n]+/gi);
  if (updatedLines?.length) {
    stats.sourceDate = updatedLines
      .at(-1)
      .replace(/^Updated\s+/i, "")
      .trim();
  }

  return stats;
};

export default function StatsTable() {
  const { lang } = useI18n();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(false);

  const labels = ui[lang] || ui.en;
  const sourceStats = stats || buildWithFallback(null);
  const displayStats = buildDisplayStats(lang, sourceStats);

  const fetchStats = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${SOURCE_URL}?_=${Date.now()}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status}`);
      }

      const text = await response.text();
      const parsedStats = parseLiveStats(text);

      if (!parsedStats) {
        throw new Error("Failed to parse stats from source");
      }

      setStats(buildWithFallback(parsedStats));
      setLastUpdated(parsedStats.sourceDate || new Date().toLocaleDateString());
    } catch (error) {
      setStats(null);
      setError(true);
      setLastUpdated(new Date().toLocaleDateString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-muted-foreground">
          {labels.source}:{" "}
          <a
            href="https://messivsronaldo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            messivsronaldo.app
          </a>
          {lastUpdated && (
            <span>
              {" "}
              · {labels.updated} {lastUpdated}
            </span>
          )}
          {error && (
            <span className="text-amber-500"> · {labels.fallback}</span>
          )}
        </p>
        <button
          onClick={fetchStats}
          disabled={loading}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
        >
          <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
          {labels.refresh}
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="bg-foreground px-4 py-3 grid grid-cols-3 gap-4">
            <div className="h-4 bg-background/20 rounded" />
            <div className="h-4 bg-amber-500/40 rounded" />
            <div className="h-4 bg-red-400/40 rounded" />
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b border-border grid grid-cols-3 gap-4 animate-pulse"
            >
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-amber-100 rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="data-table">
            <thead>
              <tr>
                <th>{labels.stat}</th>
                <th className="text-amber-400">Messi</th>
                <th className="text-red-400">Ronaldo</th>
              </tr>
            </thead>
            <tbody>
              {displayStats.map((s, i) => (
                <tr key={i}>
                  <td className="font-medium">{s.label}</td>
                  <td className="font-bold text-amber-600">{s.messi}</td>
                  <td className="text-muted-foreground">{s.ronaldo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
