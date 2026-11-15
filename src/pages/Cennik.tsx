import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Calendar } from "lucide-react";
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
        <section className="bg-slate-900 px-4 py-10 text-center text-white md:py-14">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t.pricing.pageTitle}</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-100">{t.pricing.pageSubtitle}</p>
        </section>

        {/* Pricing Section */}
        <section className="py-8 bg-background md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="whitespace-nowrap text-xl font-bold tabular-nums text-slate-900 text-center mb-4">
                {t.pricing.pricingTableTitle}
              </h2>
              <div className="mb-6 text-center">
                <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                  <Link reloadDocument to="/rezerwacja">{t.hero.bookNow}</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {t.pricing.rates.map((item, index) => (
                  <Card
                    key={`${item.period}-${index}`}
                    className="shadow-soft"
                  >
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center justify-between gap-3">
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
                            <span className="whitespace-nowrap text-xl font-bold tabular-nums text-slate-900">{item.price}</span>
                          </div>
                        </div>
                      </div>
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
