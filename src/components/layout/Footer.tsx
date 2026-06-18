import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: "PL", name: "Polski" },
    { code: "DE", name: "Deutsch" },
    { code: "EN", name: "English" },
    { code: "UA", name: "Українська" },
    { code: "CS", name: "Čeština" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.contactUs}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:info@koralrusinowo.pl"
                  className="hover:text-accent transition-colors"
                >
                  info@koralrusinowo.pl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+48797392903"
                  className="hover:text-accent transition-colors"
                >
                  +48 797 392 903
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.location}</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1" />
              <div>
                <p>Sosnowa 9</p>
                <p>76-107 Rusinowo</p>
                <p>{t.footer.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="border-t border-primary-hover/20 mt-8 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>{t.footer.languages}:</span>
            </div>
            {languages.map((lang, index) => (
              <span key={lang.code} className="text-sm">
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={`hover:text-accent transition-colors ${
                    language === lang.code ? "text-accent font-bold underline" : ""
                  }`}
                >
                  {lang.code}
                </button>
                {index < languages.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-hover/20 mt-6 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Biały Koral. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
