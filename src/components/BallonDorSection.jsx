const db = globalThis.__B44_DB__ || {
  auth: { isAuthenticated: async () => false, me: async () => null },
  entities: new Proxy(
    {},
    {
      get: () => ({
        filter: async () => [],
        get: async () => null,
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
      }),
    },
  ),
  integrations: { Core: { UploadFile: async () => ({ file_url: "" }) } },
};

import React from "react";
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

function YearBlock({ year, children }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-playfair text-5xl font-black text-amber-500">
          {year}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </div>
  );
}

export default function BallonDorSection() {
  const { t } = useI18n();

  return (
    <SectionWrapper
      id="ballon-dor"
      label={t("label_ballon")}
      title={t("title_ballon")}
    >
      <YearBlock year="2008">
        <p>{t("bdor_2008")}</p>
      </YearBlock>

      <YearBlock year="2013">
        <p>{t("bdor_2013_p1")}</p>
        <p>{t("bdor_2013_p2")}</p>

        <div className="my-8 overflow-x-auto rounded-xl border border-border">
          <img
            src={assetPath("2013-Bdor.png")}
            alt="Ballon d'Or 2013 Statistics"
            className="w-full"
          />
        </div>

        <p>{t("bdor_2013_p3")}</p>
        <p>{t("bdor_2013_p4")}</p>

        <blockquote>{t("bdor_2013_quote")}</blockquote>
      </YearBlock>

      <YearBlock year="2014">
        <p>{t("bdor_2014_p1")}</p>
        <p>{t("bdor_2014_p2")}</p>

        <div className="my-8 rounded-xl overflow-hidden border border-border">
          <img
            src={assetPath("2014-Bdor.png")}
            alt="Ballon d'Or 2014 Stats"
            className="w-full"
          />
        </div>

        <p>{t("bdor_2014_p3")}</p>
        <p>{t("bdor_2014_p4")}</p>
        <p>{t("bdor_2014_p5")}</p>
        <p>{t("bdor_2014_p6")}</p>
        <p>{t("bdor_2014_p7")}</p>
      </YearBlock>

      <YearBlock year="2016">
        <p>{t("bdor_2016_p1")}</p>
        <p>{t("bdor_2016_p2")}</p>
        <p>{t("bdor_2016_p3")}</p>

        <div className="my-8 rounded-xl overflow-hidden border border-border">
          <img
            src={assetPath("2016-Bdor.png")}
            alt="Ballon d'Or 2016 Statistics Messi vs Ronaldo"
            className="w-full"
          />
        </div>

        <p>{t("bdor_2016_p4")}</p>
        <p>{t("bdor_2016_p5")}</p>
      </YearBlock>

      <YearBlock year="2017">
        <p>{t("bdor_2017_p1")}</p>
        <p>{t("bdor_2017_p2")}</p>
        <p>{t("bdor_2017_p3")}</p>
        <p>{t("bdor_2017_p4")}</p>
      </YearBlock>

      <div className="section-divider" />

      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
        {t("bdor_summary_title")}
      </h2>
      <p>{t("bdor_summary_p")}</p>

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

      <p>{t("bdor_summary_conclusion")}</p>
    </SectionWrapper>
  );
}
