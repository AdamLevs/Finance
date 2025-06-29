import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useTranslation();

  return (
    <div className="p-6 text-right">
      <h2 className="text-2xl font-bold mb-4">{t(`posts.${slug}.title`)}</h2>
      <p>{t(`posts.${slug}.content`)}</p>
    </div>
  );
}