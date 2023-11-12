// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";

// i18n.use(initReactI18next).use(Backend).init({
//   lng: "az",
// });

// export default i18n;
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAZ from "../locales/az/translation.json";
import translationEN from "../locales/en/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
  az: {
    translation: translationAZ,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "az",
    debug: true,
    lng: "az",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
