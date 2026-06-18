import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.gallery, href: "/galeria" },
    { name: t.nav.pricing, href: "/cennik" },
    { name: t.nav.contact, href: "/kontakt" },
    { name: t.nav.reservation, href: "/rezerwacja" },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: "PL", name: "Polski" },
    { code: "DE", name: "Deutsch" },
    { code: "EN", name: "English" },
    { code: "UA", name: "Українська" },
    { code: "CS", name: "Čeština" },
  ];

  const externalLinks = [
    { name: "Biały Szafir", url: "https://szafirrusinowo.pl" },
    { name: "Biała Perła", url: "https://perlarusinowo.pl" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-ocean-gradient bg-clip-text text-transparent">
              Biały Koral
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Nasze ośrodki dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  {t.nav.ourResorts}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {externalLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {language}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`cursor-pointer ${language === lang.code ? "font-bold text-primary" : ""}`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    {lang.code} — {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-border pt-2">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  {t.nav.ourResorts}
                </div>
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="border-t border-border pt-2">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  {t.nav.language}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMenuOpen(false); }}
                    className={`block w-full text-left px-6 py-2 text-sm hover:text-primary transition-colors ${
                      language === lang.code ? "text-primary font-bold" : "text-foreground"
                    }`}
                  >
                    {lang.code} — {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
