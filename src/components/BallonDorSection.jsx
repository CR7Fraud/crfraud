import React from "react";
import RichText from "./RichText";
import { useI18n } from "../lib/i18n";

const assetPath = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

const tableSummary = [
  {
    player: "Cristiano Ronaldo",
    withCL: 4,
    yearsWith: "2008, 2014, 2016, 2017",
    withoutCL: 1,
    yearsWithout: "2013",
  },
  {
    player: "Lionel Messi",
    withCL: 3,
    yearsWith: "2009, 2011, 2015",
    withoutCL: 5,
    yearsWithout: "2010, 2012, 2019, 2021, 2023",
  },
];

export default function BallonDorSection() {
  const { lang, t } = useI18n();
  const [selectedYear, setSelectedYear] = React.useState("2008");

  const analysisLabel =
    { en: "Analysis", es: "Análisis", fr: "Analyse", pt: "Análise" }[lang] ||
    "Analysis";

  const text = (value, className = "") => (
    <RichText
      as="p"
      className={`mb-0 text-left text-base leading-[1.65] text-foreground/80 [hyphens:auto] [text-align-last:left] md:text-justify [&_strong]:font-semibold [&_strong]:text-foreground ${className}`}
    >
      {value}
    </RichText>
  );
  const quote = (value) => (
    <RichText
      as="blockquote"
      className="my-2 border-l-4 border-accent bg-amber-50 px-5 py-4 text-base leading-[1.65] text-foreground/80 italic [&_strong]:font-semibold [&_strong]:text-foreground"
    >
      {value}
    </RichText>
  );

  const items = [
    {
      key: "2008",
      eyebrow: t("label_ballon"),
      title: "2008",
      content: text(t("bdor_2008")),
    },
    {
      key: "2013",
      eyebrow: t("label_ballon"),
      title: "2013",
      content: (
        <>
          {text(t("bdor_2013_p1"))}
          {text(t("bdor_2013_p2"))}

          <div className="my-8 rounded-xl border border-border">
            <img
              src={assetPath("2013-Bdor.png")}
              alt="Ballon d'Or 2013 Statistics"
              className="w-full"
            />
          </div>

          {text(t("bdor_2013_p3"))}
          {text(t("bdor_2013_p4"))}

          {quote(t("bdor_2013_quote"))}
        </>
      ),
    },
    {
      key: "2014",
      eyebrow: t("label_ballon"),
      title: "2014",
      content: (
        <>
          {text(t("bdor_2014_p1"))}
          {text(t("bdor_2014_p2"))}

          <div className="my-8 rounded-xl overflow-hidden border border-border">
            <img
              src={assetPath("2014-Bdor.png")}
              alt="Ballon d'Or 2014 Stats"
              className="w-full"
            />
          </div>

          {text(t("bdor_2014_p3"))}
          {text(t("bdor_2014_p4"))}
          {text(t("bdor_2014_p5"))}
          {text(t("bdor_2014_p6"))}
          {text(t("bdor_2014_p7"))}
        </>
      ),
    },
    {
      key: "2016",
      eyebrow: t("label_ballon"),
      title: "2016",
      content: (
        <>
          {text(t("bdor_2016_p1"))}
          {text(t("bdor_2016_p2"))}
          {text(t("bdor_2016_p3"))}

          <div className="my-8 rounded-xl overflow-hidden border border-border">
            <img
              src={assetPath("2016-BDor.png")}
              alt="Ballon d'Or 2016 Statistics Messi vs Ronaldo"
              className="w-full"
            />
          </div>

          {text(t("bdor_2016_p4"))}
          {text(t("bdor_2016_p5"))}
          {text(t("bdor_2016_p5_criteria"))}
        </>
      ),
    },
    {
      key: "2017",
      eyebrow: t("label_ballon"),
      title: "2017",
      content: (
        <>
          {text(t("bdor_2017_p1"))}
          {text(t("bdor_2017_p2"))}
          {text(t("bdor_2017_p3"))}
          {text(t("bdor_2017_p4"))}
        </>
      ),
    },
  ];

  const selectedItem =
    items.find((item) => item.key === selectedYear) || items[0];
  const selectedContentId = `ballon-dor-content-${selectedItem.key}`;
  const summaryConclusion = t("bdor_summary_conclusion");
  const conclusionBoundaries = {
    en: ["The conclusion is not", "Ronaldo stands out"],
    es: ["La conclusión no es", "Ronaldo destaca en"],
    fr: ["La conclusion n'est pas", "Ronaldo se distingue"],
    pt: ["A conclusão não é", "Ronaldo destaca-se"],
  }[lang] || ["The conclusion is not", "Ronaldo stands out"];
  const conclusionParagraphs = summaryConclusion.split(
    new RegExp(` (?=${conclusionBoundaries.join("|")}|<strong>)`),
  );

  return (
    <section
      id="ballon-dor"
      lang={lang}
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-[60rem] px-5 sm:px-8 lg:px-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-widest">
            {t("label_ballon")}
          </span>
        </div>
        <h1 className="mb-10 font-playfair text-4xl font-black leading-tight text-foreground md:text-5xl">
          {t("title_ballon")}
        </h1>

        <div className="mb-10">
          <div
            className="overflow-x-auto pb-2"
            role="tablist"
            aria-label={t("label_ballon")}
          >
            <div className="relative flex min-w-[30rem] items-center justify-between px-2 sm:min-w-0 sm:px-4">
              <div
                aria-hidden="true"
                className="absolute left-10 right-10 top-1/2 border-t border-border"
              />
              {items.map((item) => {
                const isSelected = item.key === selectedItem.key;

                return (
                  <button
                    key={item.key}
                    id={`ballon-dor-tab-${item.key}`}
                    type="button"
                    role="tab"
                    aria-controls={selectedContentId}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedYear(item.key)}
                    className={`relative z-10 flex h-11 min-w-20 items-center justify-center rounded-xl border px-4 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      isSelected
                        ? "border-foreground bg-foreground text-accent"
                        : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id={selectedContentId}
            role="tabpanel"
            aria-labelledby={`ballon-dor-tab-${selectedItem.key}`}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 border-b border-border pb-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {analysisLabel}
              </p>
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                {selectedItem.title}
              </h2>
            </div>
            <div className="space-y-5">{selectedItem.content}</div>
          </div>
        </div>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="mb-4 font-playfair text-2xl font-bold text-foreground md:text-3xl">
            {t("bdor_summary_title")}
          </h2>
          <div className="text-base leading-[1.65] text-foreground/80">
            {text(t("bdor_summary_p"))}
          </div>

          <div className="my-8 overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="min-w-[42rem] w-full text-sm">
              <thead>
                <tr className="bg-foreground text-left text-background">
                  <th className="px-5 py-4 font-semibold">
                    {t("bdor_col_player")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("bdor_col_with_cl")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("bdor_col_years_with")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("bdor_col_without_cl")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("bdor_col_years_without")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableSummary.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-b-0 even:bg-muted/30"
                  >
                    <td className="px-5 py-5 font-semibold">{r.player}</td>
                    <td className="px-5 py-5">{r.withCL}</td>
                    <td className="px-5 py-5 text-muted-foreground">
                      {r.yearsWith}
                    </td>
                    <td className="px-5 py-5">{r.withoutCL}</td>
                    <td className="px-5 py-5 text-muted-foreground">
                      {r.yearsWithout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-border bg-white p-5 md:p-7">
            <div className="space-y-4 text-left text-base leading-[1.7]">
              {conclusionParagraphs.map((paragraph, index) =>
                text(
                  paragraph,
                  index === conclusionParagraphs.length - 1
                    ? "border-l-4 border-accent pl-4 font-semibold text-foreground"
                    : "",
                ),
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
