import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-right">
      <h1 className="text-3xl font-bold mb-4">{t("home.title")}</h1>
      <p>{t("home.description")}</p>
    </div>
  );
}