import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import he from "./translations/he.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: {
        translation: he,
      },
    },
    fallbackLng: "he",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;