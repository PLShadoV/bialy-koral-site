import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Calendar, Banknote } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Cennik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBeach})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {t.pricing.pageTitle}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto drop-shadow-md">
              {t.pricing.pageSubtitle}
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-primary text-center mb-8">
                {t.pricing.pricingTableTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.pricing.rates.map((item, index) => (
                  <Card
                    key={`${item.period}-${index}`}
                    className="shadow-soft hover:shadow-ocean transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-ocean-gradient p-2 rounded-full">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{item.period}</h3>
                            <p className="text-sm text-muted-foreground">{t.pricing.perNight}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <Banknote className="h-5 w-5 text-primary" />
                            <span className="text-2xl font-bold text-primary">{item.price}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="reserve" className="w-full">
                        <Link to="/rezerwacja">{t.pricing.bookNow}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 text-center">
                <Card className="bg-accent/20 shadow-soft">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t.pricing.infoTitle}
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-left">
                      {t.pricing.infoItems.map((info, i) => (
                        <li key={i}>• {info}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cennik;
