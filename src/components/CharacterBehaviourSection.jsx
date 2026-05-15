// @ts-nocheck
import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { useI18n } from "../lib/i18n";
import personalityBehaviourMarkdownEn from "../../ronaldo-personalityBehaviour.md?raw";
import personalityBehaviourMarkdownPt from "../../ronaldo-personalityBehaviour.pt.md?raw";
import personalityBehaviourMarkdownEs from "../../ronaldo-personalityBehaviour.es.md?raw";
import personalityBehaviourMarkdownFr from "../../ronaldo-personalityBehaviour.fr.md?raw";

const commentImageFiles = [
  "Captura de ecrã 2026-05-14 003118.png",
  "Captura de ecrã 2026-05-14 003518.png",
  "Captura de ecrã 2026-05-14 003556.png",
  "Captura de ecrã 2026-05-14 003658.png",
  "Captura de ecrã 2026-05-14 200157.png",
];

const carouselMarker = "_[carousel — screenshots of social media comments]_";

const screenshotCopyByLang = {
  en: {
    button: "Social media comments screenshot",
    dialog: "Enlarged view of the selected social media comments screenshot.",
  },
  pt: {
    button: "Captura de ecrã de comentários nas redes sociais",
    dialog:
      "Vista ampliada da captura de ecrã de comentários nas redes sociais selecionada.",
  },
  es: {
    button: "Captura de pantalla de comentarios en redes sociales",
    dialog:
      "Vista ampliada de la captura de pantalla de comentarios en redes sociales seleccionada.",
  },
  fr: {
    button: "Capture d'écran de commentaires sur les réseaux sociaux",
    dialog:
      "Vue agrandie de la capture d'écran de commentaires sur les réseaux sociaux sélectionnée.",
  },
};

const markdownByLang = {
  en: personalityBehaviourMarkdownEn,
  pt: personalityBehaviourMarkdownPt,
  es: personalityBehaviourMarkdownEs,
  fr: personalityBehaviourMarkdownFr,
};

const markdownComponents = {
  h1: ({ ...props }) => (
    <h2
      className="font-playfair text-2xl md:text-3xl font-bold text-white mt-8 mb-4"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h3
      className="font-inter text-xl font-semibold text-white/90 mt-8 mb-3"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h4
      className="font-inter text-lg font-semibold text-white/85 mt-6 mb-2"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p className="leading-relaxed mb-4 text-white/75" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="space-y-2 mb-4 pl-5 list-disc text-white/75" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="space-y-2 mb-4 pl-5 list-decimal text-white/75" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="leading-relaxed text-white/75" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-amber-500 pl-5 my-6 italic text-white/60"
      {...props}
    />
  ),
  strong: ({ ...props }) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  em: ({ ...props }) => <em className="text-white/80" {...props} />,
  a: ({ ...props }) => (
    <a
      className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
      {...props}
    />
  ),
};

const normalizeMarkdown = (value) => value.replaceAll("\r\n", "\n").trim();

const stripHeadingPrefix = (value) =>
  value
    .replace(/^#{1,6}\s*/, "")
    .replace(/^\d+\.\s*/, "")
    .trim();

const splitHeading = (headingText) => {
  const colonSplit = headingText.split(/:\s+/);

  if (colonSplit.length > 1) {
    return {
      title: colonSplit.shift().trim(),
      subtitle: colonSplit.join(": ").trim(),
    };
  }

  const dashSplit = headingText.split(/\s[—–-]\s/);

  if (dashSplit.length > 1) {
    return {
      title: dashSplit.shift().trim(),
      subtitle: dashSplit.join(" — ").trim(),
    };
  }

  return { title: headingText, subtitle: "" };
};

const firstMeaningfulLine = (block) =>
  block
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 0 && !line.startsWith("## "))
    ?.replace(/^#{1,6}\s*/, "")
    .replace(/^[-*]\s*/, "")
    .replace(/^>\s*/, "")
    .trim();

const stripFirstHeadingFromBlock = (block) => {
  const lines = block.split("\n");
  return lines.slice(1).join("\n").trim();
};

const MarkdownBlock = ({ markdown }) => (
  <ReactMarkdown components={markdownComponents}>{markdown}</ReactMarkdown>
);

function CommentImage({ fileName, alt, className = "" }) {
  const src = `${import.meta.env.BASE_URL}assets/cr7comments/${encodeURIComponent(fileName)}`;

  return <img src={src} alt={alt} decoding="async" className={className} />;
}

function SocialCommentsCarousel({ lang }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const selectedFile =
    selectedIndex === null ? null : commentImageFiles[selectedIndex];
  const copy = screenshotCopyByLang[lang] ?? screenshotCopyByLang.en;

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 shadow-xl shadow-black/20">
      <Carousel className="relative w-full" opts={{ loop: false }}>
        <CarouselContent>
          {commentImageFiles.map((fileName, index) => (
            <CarouselItem key={fileName} className="pl-0">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${copy.button} ${index + 1}`}
                title={`${copy.button} ${index + 1}`}
                className="group block w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                <div className="aspect-[16/9] overflow-hidden p-2">
                  <div className="flex h-full w-full items-center justify-center">
                    <CommentImage
                      fileName={fileName}
                      alt={`${copy.button} ${index + 1}`}
                      className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex -left-3 border-white/10 bg-zinc-950/80 text-white hover:bg-zinc-900" />
        <CarouselNext className="hidden md:inline-flex -right-3 border-white/10 bg-zinc-950/80 text-white hover:bg-zinc-900" />
      </Carousel>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedIndex(null);
          }
        }}
      >
        <DialogContent className="max-w-[95vw] border-white/10 bg-zinc-950 p-3 sm:max-w-5xl">
          <DialogTitle className="sr-only">
            {selectedIndex === null
              ? copy.button
              : `${copy.button} ${selectedIndex + 1}`}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {copy.dialog}
          </DialogDescription>

          {selectedFile && (
            <div className="flex max-h-[90vh] items-center justify-center overflow-hidden rounded-xl bg-black/50 p-2">
              <CommentImage
                fileName={selectedFile}
                alt={`${copy.button} ${selectedIndex + 1}`}
                className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MarkdownWithCarousel({ markdown, lang }) {
  const segments = markdown.split(carouselMarker);

  return segments.map((segment, index) => (
    <React.Fragment key={`${index}-${segment.slice(0, 16)}`}>
      {segment.trim() ? <MarkdownBlock markdown={segment} /> : null}
      {index < segments.length - 1 ? (
        <SocialCommentsCarousel lang={lang} />
      ) : null}
    </React.Fragment>
  ));
}

export default function CharacterBehaviourSection() {
  const { t, lang } = useI18n();

  const { introMarkdown, accordionItems } = useMemo(() => {
    const selectedMarkdown = markdownByLang[lang] ?? markdownByLang.en;
    const parts = normalizeMarkdown(selectedMarkdown)
      .split(/\n---\n+/)
      .map((part) => part.trim())
      .filter(Boolean);

    const [introPart = "", ...sectionParts] = parts;

    const items = sectionParts.map((part, index) => {
      const firstLine =
        part.split("\n").find((line) => line.trim().length > 0) || "";
      const headingText = stripHeadingPrefix(firstLine);
      const { title, subtitle } = splitHeading(headingText);
      const sectionBody = stripFirstHeadingFromBlock(part);
      const derivedSubtitle =
        subtitle || firstMeaningfulLine(sectionBody) || "";

      return {
        key: `section-${index}`,
        title,
        subtitle: derivedSubtitle,
        content: <MarkdownWithCarousel markdown={sectionBody} lang={lang} />,
      };
    });

    return {
      introMarkdown: stripFirstHeadingFromBlock(introPart),
      accordionItems: items,
    };
  }, [lang]);

  return (
    <SectionWrapper
      id="character-behaviour"
      label={t("label_character")}
      title={t("title_character")}
      dark
    >
      <div className="space-y-6">
        <MarkdownBlock markdown={introMarkdown} />
        <SectionAccordionList items={accordionItems} dark />
      </div>
    </SectionWrapper>
  );
}
