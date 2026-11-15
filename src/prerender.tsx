import { readFile, writeFile, mkdir } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { loadPage } from "./pages/loadPage";
import App from "./App";
import { localeBase, localeCodes, localizedPath, pages } from "./i18n/routes";
import { translations, type Language } from "./i18n/translations";
import { extra } from "./i18n/extra";

const origin = "https://www.koralrusinowo.pl";
const photo = origin + "/images/bialy-koral.jpg";
const languages = Object.keys(localeCodes) as Language[];
const escape = (value: string) => value.replace(/[&<>"]/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
})[char]!);
const business = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": origin + "/#bialy-koral",
  name: "Biały Koral",
  url: origin + "/",
  image: [photo, origin + "/images/koral-widok-1440.webp", origin + "/images/wnetrza/kuchnia-800.webp",
    origin + "/images/wnetrza/sypialnia-800.webp", origin + "/images/wnetrza/salon-800.webp", origin + "/images/wnetrza/lazienka-800.webp"],
  telephone: "+48797392903",
  email: "info@koralrusinowo.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sosnowa 9",
    postalCode: "76-107",
    addressLocality: "Rusinowo",
    addressCountry: "PL",
  },
  geo: { "@type": "GeoCoordinates", latitude: 54.51962, longitude: 16.51101 },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Sosnowa%209%2C%2076-107%20Rusinowo",
  checkinTime: "15:00",
  checkoutTime: "10:00",
  petsAllowed: true,
  amenityFeature: ["WiFi", "Air Conditioning", "Pet Friendly", "Kitchen", "Washing machine", "Dishwasher", "Barbecue grill", "Free parking", "Playground"].map(name => ({
    "@type": "LocationFeatureSpecification", name, value: true,
  })),
};

async function prerender() {
  const template = await readFile("dist/index.html", "utf8");
  const urls: string[] = [];
  for (const language of languages) {
    const t = translations[language];
    const metadata = [
      [t.hero.subtitle, extra[language].seo.home],
      [t.gallery.pageTitle, extra[language].seo.gallery],
      [t.pricing.pageTitle, extra[language].seo.pricing],
      [t.contact.pageTitle, extra[language].seo.contact],
      [t.reservation.pageTitle, extra[language].seo.reservation],
    ];
    for (const [index, page] of pages.entries()) {
      const pathname = localizedPath(language, page);
      const url = origin + pathname;
      const [label, description] = metadata[index];
      const title = escape(label + (page === "/" ? "" : " · Rusinowo") + " | Biały Koral");
      const summary = escape(description);
      const head = [
        ...(page === "/" ? ['<link rel="preload" as="image" href="/images/koral-widok-1440.webp" imagesrcset="/images/koral-widok-720.webp 720w, /images/koral-widok-960.webp 960w, /images/koral-widok-1440.webp 1440w, /images/koral-widok-1920.webp 1920w" imagesizes="100vw" fetchpriority="high">'] : []),
        `<title>${title}</title>`,
        `<meta name="description" content="${summary}">`,
        `<link rel="canonical" href="${url}">`,
        ...languages.map(lang => `<link rel="alternate" hreflang="${localeCodes[lang]}" href="${origin}${localizedPath(lang, page)}">`),
        `<link rel="alternate" hreflang="x-default" href="${origin}${page}">`,
        `<meta property="og:url" content="${url}">`,
        `<meta property="og:type" content="website">`,
        `<meta property="og:title" content="${title}">`,
        `<meta property="og:description" content="${summary}">`,
        `<meta property="og:image" content="${photo}">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        ...(page === "/" ? [`<script type="application/ld+json">${JSON.stringify(business)}</script>`] : [
          `<script type="application/ld+json">${JSON.stringify({
            "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Biały Koral", item: origin + localizedPath(language, "/") },
              { "@type": "ListItem", position: 2, name: label, item: url },
            ] })}</script>`]),
      ].join("\n");
      const Page = await loadPage(pathname);
      const body = renderToString(<StaticRouter basename={localeBase(language)} location={pathname}><App language={language} Page={Page} /></StaticRouter>);
      const file = `dist${pathname.endsWith("/") ? pathname + "index" : pathname}.html`;
      await mkdir(file.slice(0, file.lastIndexOf("/")), { recursive: true });
      await writeFile(file, template
        .replace('lang="pl"', `lang="${localeCodes[language]}"`)
        .replace("<!-- page-metadata -->", () => head)
        .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`));
      urls.push(url);
    }
  }

  const NotFound = await loadPage("/404");
  const errorPage = renderToString(<StaticRouter location="/404"><App language="PL" Page={NotFound} /></StaticRouter>);
  await writeFile("dist/404.html", template
    .replace("<!-- page-metadata -->", '<title>Nie znaleziono strony | Biały Koral</title><meta name="robots" content="noindex">')
    .replace('<div id="root"></div>', () => `<div id="root">${errorPage}</div>`));
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n")}
  </urlset>
  `);

}

void prerender().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
