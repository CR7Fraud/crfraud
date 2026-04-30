const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from 'react';

import { RefreshCw } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const FALLBACK_STATS_EN = [
  { label: 'Goals', messi: '905', ronaldo: '969' },
  { label: 'Assists', messi: '407', ronaldo: '261' },
  { label: 'Appearances', messi: '1,150', ronaldo: '1,317' },
  { label: 'Min / Goal', messi: '105', ronaldo: '111' },
  { label: 'Min / Contribution', messi: '72', ronaldo: '88' },
  { label: 'Goals Outside Box', messi: '106', ronaldo: '72' },
  { label: 'Free Kick Goals', messi: '71', ronaldo: '64' },
  { label: 'Shots on Target', messi: '1,914', ronaldo: '2,122' },
  { label: 'Key Passes', messi: '2,061', ronaldo: '1,301' },
  { label: "Ballon d'Or", messi: '8', ronaldo: '5' },
];

const FALLBACK_STATS_PT = [
  { label: 'Golos', messi: '905', ronaldo: '969' },
  { label: 'Assistências', messi: '407', ronaldo: '261' },
  { label: 'Jogos', messi: '1.150', ronaldo: '1.317' },
  { label: 'Min/Golo', messi: '105', ronaldo: '111' },
  { label: 'Min/Contribuição', messi: '72', ronaldo: '88' },
  { label: 'Golos fora da área', messi: '106', ronaldo: '72' },
  { label: 'Golos de livre', messi: '71', ronaldo: '64' },
  { label: 'Remates certeiros', messi: '1.914', ronaldo: '2.122' },
  { label: 'Passes-chave', messi: '2.061', ronaldo: '1.301' },
  { label: 'Bolas de Ouro', messi: '8', ronaldo: '5' },
];

const ui = {
  en: { source: 'Source', updated: 'Updated', fallback: '(fallback data)', refresh: 'Refresh', stat: 'Stat' },
  pt: { source: 'Fonte', updated: 'Atualizado em', fallback: '(dados de reserva)', refresh: 'Atualizar', stat: 'Estatística' },
  es: { source: 'Fuente', updated: 'Actualizado', fallback: '(datos de reserva)', refresh: 'Actualizar', stat: 'Estadística' },
  fr: { source: 'Source', updated: 'Mis à jour', fallback: '(données de secours)', refresh: 'Actualiser', stat: 'Statistique' },
};

export default function StatsTable() {
  const { lang } = useI18n();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(false);

  const labels = ui[lang] || ui.en;
  const fallbackStats = lang === 'pt' ? FALLBACK_STATS_PT : FALLBACK_STATS_EN;

  const fetchStats = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await db.integrations.Core.InvokeLLM({
        prompt: `Go to messivsronaldo.app and extract the latest all-time career stats for Messi and Ronaldo. 
        Return the following stats: Goals, Assists, Appearances, Minutes Per Goal, Mins Per Goal/Assist, Outside the Box goals, Free Kick Goals, Shots on Target, Key Passes, and Ballon d'Or awards (Messi 8, Ronaldo 5).
        Use the "All Time Career" filter on the site. Return stat labels in English.`,
        add_context_from_internet: true,
        response_json_schema: {
          type: 'object',
          properties: {
            stats: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  label: { type: 'string' },
                  messi: { type: 'string' },
                  ronaldo: { type: 'string' },
                }
              }
            },
            source_date: { type: 'string' }
          }
        }
      });

      if (result?.stats && result.stats.length > 0) {
        setStats(result.stats);
        setLastUpdated(result.source_date || new Date().toLocaleDateString());
      } else {
        setStats(null);
        setLastUpdated(new Date().toLocaleDateString());
      }
    } catch (e) {
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

  const displayStats = stats || fallbackStats;

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-muted-foreground">
          {labels.source}: <a href="https://messivsronaldo.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">messivsronaldo.app</a>
          {lastUpdated && <span> · {labels.updated} {lastUpdated}</span>}
          {error && <span className="text-amber-500"> · {labels.fallback}</span>}
        </p>
        <button
          onClick={fetchStats}
          disabled={loading}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
        >
          <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
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
            <div key={i} className="px-4 py-3 border-b border-border grid grid-cols-3 gap-4 animate-pulse">
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