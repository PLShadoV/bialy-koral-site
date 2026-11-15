import { localeBase, languageFromPath } from "@/i18n/routes";

const loaders = {
  "/": () => import("./Home"),
  "/galeria": () => import("./Galeria"),
  "/cennik": () => import("./Cennik"),
  "/kontakt": () => import("./Kontakt"),
  "/rezerwacja": () => import("./Rezerwacja"),
};

export async function loadPage(pathname: string) {
  const base = localeBase(languageFromPath(pathname));
  const path = pathname.slice(base.length).replace(/\/+$/, "") || "/";
  const load = Object.prototype.hasOwnProperty.call(loaders, path) ? loaders[path as keyof typeof loaders] : () => import("./NotFound");
  return (await load()).default;
}
