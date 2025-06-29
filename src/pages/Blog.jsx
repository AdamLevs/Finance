import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-right">
      <h2 className="text-2xl font-bold mb-4">{t("blog.title")}</h2>
      <p>{t("blog.description")}</p>
    </div>
  );
}