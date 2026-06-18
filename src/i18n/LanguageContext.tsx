import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, Translations, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_STORAGE_KEY = "bialy-koral-language";

const isLanguage = (value: string | null): value is Language => {
  return value === "PL" || value === "DE" || value === "EN" || value === "UA" || value === "CS";
};

const htmlLangMap: Record<Language, string> = {
  PL: "pl",
  DE: "de",
  EN: "en",
  UA: "uk",
  CS: "cs",
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "PL";

    const savedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY);
    return isLanguage(savedLanguage) ? savedLanguage : "PL";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = htmlLangMap[language];
    window.localStorage.setItem(LANG_STORAGE_KEY, language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
