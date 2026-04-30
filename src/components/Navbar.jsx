import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n, languages } from "../lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const sections = [
    { path: "/ballon-dor", key: "nav_ballon" },
    { path: "/rigged-ucl", key: "nav_ucl" },
    { path: "/managers", key: "nav_managers" },
    { path: "/selfishness", key: "nav_selfish" },
    { path: "/national-team", key: "nav_national" },
    { path: "/crying", key: "nav_crying" },
    { path: "/hypocrisy", key: "nav_hypocrisy" },
    { path: "/liga-comprada", key: "nav_liga" },
    { path: "/why-messi", key: "nav_messi" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/assets/logo.png"
            alt="CRFraud"
            className="h-8 w-8 rounded-lg border border-zinc-700 object-cover shadow-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {sections.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              className={`px-2.5 py-1.5 text-xs font-medium transition-colors rounded hover:bg-black/5 ${
                location.pathname === s.path
                  ? "text-amber-500 font-semibold"
                  : scrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {t(s.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${scrolled || !isHome ? "border-border text-foreground hover:bg-muted" : "border-white/30 text-white hover:bg-white/10"}`}
            >
              {lang.toUpperCase()}
              <svg
                className="w-3 h-3 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50 min-w-[130px]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors ${lang === l.code ? "text-amber-500 font-semibold bg-muted/50" : "text-foreground"}`}
                  >
                    <span className="font-bold text-xs w-6">{l.label}</span>
                    <span className="text-muted-foreground">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile burger */}
          <button
            className="xl:hidden p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""} ${scrolled || !isHome ? "bg-foreground" : "bg-white"}`}
              />
              <span
                className={`block h-0.5 transition-all ${menuOpen ? "opacity-0" : ""} ${scrolled || !isHome ? "bg-foreground" : "bg-white"}`}
              />
              <span
                className={`block h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""} ${scrolled || !isHome ? "bg-foreground" : "bg-white"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-4">
          <div className="grid grid-cols-2 gap-1 pt-2">
            {sections.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                onClick={() => setMenuOpen(false)}
                className={`text-left px-3 py-2 text-sm rounded transition-colors ${location.pathname === s.path ? "text-amber-500 font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                {t(s.key)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close lang */}
      {langOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangOpen(false)}
        />
      )}
    </header>
  );
}
