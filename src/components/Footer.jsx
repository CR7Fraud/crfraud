import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-zinc-950 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center">
            <span className="font-playfair font-black text-lg">
              <span className="text-white">CR</span>
              <span className="text-amber-400">F</span>
            </span>
          </div>
        </div>

        <h2 className="font-playfair text-3xl font-black mb-4 text-white">
          CR<span className="text-amber-400">FRAUD</span>
        </h2>
        <p className="text-white/35 text-sm max-w-md mx-auto leading-relaxed">
          {t('footer_desc')}
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link to="/about" className="text-white/40 hover:text-white/70 text-sm transition-colors">{t('footer_about') || 'About'}</Link>
          <Link to="/contact" className="text-white/40 hover:text-white/70 text-sm transition-colors">{t('footer_contact') || 'Contact'}</Link>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-white/20 text-xs">
          {t('footer_copy')}
        </div>
      </div>
    </footer>
  );
}