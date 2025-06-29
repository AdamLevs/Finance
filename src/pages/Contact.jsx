import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-right">
      <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>
    </div>
  );
}