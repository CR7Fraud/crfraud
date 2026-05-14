// @ts-nocheck
import React from "react";

export default function SectionAccordionList({
  items,
  dark = false,
  defaultOpenIndex = 0,
  className = "",
}) {
  const [openIndex, setOpenIndex] = React.useState(defaultOpenIndex);
  const baseId = React.useId();

  const styles = dark
    ? {
        card: "border-white/10 bg-white/5",
        button: "bg-white/5 hover:bg-white/10",
        border: "border-white/10",
        title: "text-white",
        subtitle: "text-zinc-300",
        sign: "text-white/70",
      }
    : {
        card: "border-border bg-card shadow-sm",
        button: "bg-muted/30 hover:bg-muted/60",
        border: "border-border",
        title: "text-foreground",
        subtitle: "text-muted-foreground",
        sign: "text-muted-foreground",
      };

  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `${baseId}-${index}`;

        return (
          <section
            key={item.key || index}
            className={`overflow-hidden rounded-xl border ${styles.card}`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${styles.button}`}
            >
              <div className="min-w-0 flex-1">
                <p
                  className={`text-lg font-semibold leading-tight ${styles.title}`}
                >
                  {item.title}
                </p>
                {item.subtitle && (
                  <p
                    className={`mt-0.5 text-sm leading-relaxed ${styles.subtitle}`}
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>
              <span
                className={`shrink-0 text-2xl font-light leading-none ${styles.sign}`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={contentId}
              aria-hidden={!isOpen}
              inert={isOpen ? undefined : ""}
              className="grid"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 300ms ease-in-out",
                pointerEvents: isOpen ? "auto" : "none",
              }}
            >
              <div
                className={`min-h-0 overflow-hidden border-t ${styles.border}`}
              >
                <div className="px-6 py-6">
                  <div className="space-y-4">{item.content}</div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
