import React from "react";
import RichText from "./RichText";
import SectionAccordionList from "./SectionAccordionList";
import SectionWrapper from "./SectionWrapper";
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
  const { t } = useI18n();

  const text = (value) => <RichText as="p">{value}</RichText>;
  const quote = (value) => <RichText as="blockquote">{value}</RichText>;

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

          <div className="my-8 overflow-x-auto rounded-xl border border-border">
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

  return (
    <SectionWrapper
      id="ballon-dor"
      label={t("label_ballon")}
      title={t("title_ballon")}
    >
      <SectionAccordionList items={items} />

      <div className="section-divider" />

      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
        {t("bdor_summary_title")}
      </h2>
      {text(t("bdor_summary_p"))}

      <div className="overflow-x-auto rounded-xl border border-border my-8">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t("bdor_col_player")}</th>
              <th>{t("bdor_col_with_cl")}</th>
              <th>{t("bdor_col_years_with")}</th>
              <th>{t("bdor_col_without_cl")}</th>
              <th>{t("bdor_col_years_without")}</th>
            </tr>
          </thead>
          <tbody>
            {tableSummary.map((r, i) => (
              <tr key={i}>
                <td className="font-semibold">{r.player}</td>
                <td>{r.withCL}</td>
                <td className="text-muted-foreground">{r.yearsWith}</td>
                <td>{r.withoutCL}</td>
                <td className="text-muted-foreground">{r.yearsWithout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {text(t("bdor_summary_conclusion"))}
    </SectionWrapper>
  );
}
