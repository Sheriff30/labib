import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";

export const LANGS = ["ar", "en"];
export const DEFAULT_LANG = "ar";

// Natural-language keys: the Arabic string IS the key. The `en` resource maps
// each Arabic string to English. Missing keys fall back to the key itself
// (i.e. Arabic shows as-is, and any untranslated English gracefully shows Arabic).
i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: {} },
    en: { translation: en },
  },
  lng: DEFAULT_LANG,
  fallbackLng: "ar",
  keySeparator: false,
  nsSeparator: false,
  returnEmptyString: false,
  interpolation: { escapeValue: false },
});

export default i18n;
