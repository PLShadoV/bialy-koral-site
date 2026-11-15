import type { Language } from "./translations";

export const localeCodes = { PL: "pl", DE: "de", EN: "en", UA: "uk", CS: "cs" } satisfies Record<Language, string>;
export const pages = ["/", "/galeria", "/cennik", "/kontakt", "/rezerwacja"] as const;

export const localeBase = (language: Language) => language === "PL" ? "" : "/" + localeCodes[language];
export const localizedPath = (language: Language, path: string) => localeBase(language) + path;
export const languageFromPath = (path: string): Language =>
  (Object.keys(localeCodes) as Language[]).find(language => localeBase(language) === "/" + path.split("/")[1]) ?? "PL";
