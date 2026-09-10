import { createContext, useContext } from "react";
import type { Lang, Translations } from "../types";
import { zh } from "../i18n/zh";
import { en } from "../i18n/en";

const translations: Record<Lang, Translations> = { zh, en };

export const LangContext = createContext<{
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}>({
  lang: "zh",
  t: zh,
  toggleLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function getTranslations(lang: Lang) {
  return translations[lang];
}
