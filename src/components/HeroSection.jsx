import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../lib/i18n";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden pt-14">
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Subtle gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
            {t("hero_tag")}
          </span>
        </div>

        <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-8">
          <span className="text-white">CR</span>
          <span className="text-amber-400">FRAUD</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {t("hero_subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/ballon-dor"
            className="px-8 py-3 bg-amber-500 text-zinc-950 font-bold text-sm rounded-full hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            {t("hero_cta")}
          </Link>
          <span className="text-white/30 text-sm">{t("hero_meta")}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/10" />
        <div className="w-1 h-1 rounded-full bg-white/25" />
      </div>
    </section>
  );
}
