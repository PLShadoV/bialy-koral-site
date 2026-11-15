import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { loadPage } from "./pages/loadPage";
import App from "./App";
import { languageFromPath, localeBase, localeCodes } from "./i18n/routes";
import "./index.css";

const language = languageFromPath(location.pathname);
const root = document.getElementById("root")!;
void loadPage(location.pathname).then(Page => {
  const app = <BrowserRouter basename={localeBase(language)}><App language={language} Page={Page} /></BrowserRouter>;

  if (root.hasChildNodes() && document.documentElement.lang === localeCodes[language]) hydrateRoot(root, app);
  else createRoot(root).render(app);
});
