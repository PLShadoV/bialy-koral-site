import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { localizedPath } from "./routes";
import { Language, Translations, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  languageHref: (lang: Language) => string;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, language }: { children: ReactNode; language: Language }) => {
  const { pathname } = useLocation();
  const value: LanguageContextType = {
    language,
    languageHref: (lang) => localizedPath(lang, pathname),
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
