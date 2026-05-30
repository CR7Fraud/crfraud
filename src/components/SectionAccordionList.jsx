// @ts-nocheck
import React from "react";
import RichText from "./RichText";

export default function SectionAccordionList({
  items,
  dark = false,
  defaultOpenIndex = 0,
  className = "",
  showDividers = false,
}) {
  const [openIndex, setOpenIndex] = React.useState(defaultOpenIndex);
  const baseId = React.useId();
  const sectionRefs = React.useRef([]);
  const contentRefs = React.useRef([]);
  const didMountRef = React.useRef(false);

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

  React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return undefined;
    }

    if (openIndex < 0) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      const contentElement = contentRefs.current[openIndex];
      const sectionElement = sectionRefs.current[openIndex];

      if (!contentElement && !sectionElement) {
        return;
      }

      const headerElement = document.querySelector(
        "[data-sticky-header='true']",
      );
      const headerHeight = headerElement?.getBoundingClientRect().height ?? 56;
      const targetElement = contentElement || sectionElement;
      const targetRect = targetElement.getBoundingClientRect();
      const targetY = Math.max(
        0,
        window.scrollY + targetRect.top - headerHeight - 12,
      );

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }, 50);

    return () => window.clearTimeout(timerId);
  }, [openIndex]);

  return (
    <div className={`${showDividers ? "space-y-2" : "space-y-6"} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `${baseId}-${index}`;

        return (
          <React.Fragment key={item.key || index}>
            {showDividers && index > 0 && (
              <div
                aria-hidden="true"
                className={`mx-3 my-6 border-t ${styles.border}`}
              />
            )}
            <section
              ref={(element) => {
                sectionRefs.current[index] = element;
              }}
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
                    <RichText as="span" className="inline">
                      {item.title}
                    </RichText>
                  </p>
                  {item.subtitle && (
                    <p
                      className={`mt-0.5 text-sm leading-relaxed ${styles.subtitle}`}
                    >
                      <RichText as="span" className="inline">
                        {item.subtitle}
                      </RichText>
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
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  className={`min-h-0 overflow-hidden border-t ${styles.border}`}
                >
                  <div className="px-6 py-6">
                    <div className="space-y-4">{item.content}</div>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </div>
  );
}
