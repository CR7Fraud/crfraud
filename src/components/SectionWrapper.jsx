import React from 'react';

export default function SectionWrapper({ id, label, title, children, dark = false }) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? 'bg-zinc-950' : 'bg-background'}`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {label && (
          <div className={`mb-4 inline-flex items-center gap-2 border rounded-full px-3 py-1 ${dark ? 'border-white/20 text-white/50' : 'border-border text-muted-foreground'}`}>
            <span className="text-xs font-semibold tracking-widest uppercase">{label}</span>
          </div>
        )}
        <h1 className={`font-playfair text-4xl md:text-5xl font-black leading-tight mb-10 ${dark ? 'text-white' : 'text-foreground'}`}>
          {title}
        </h1>
        <div className={dark ? 'prose-dark text-white/75' : 'prose-content'}>
          {children}
        </div>
      </div>
    </section>
  );
}