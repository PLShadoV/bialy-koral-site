import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Euro } from "lucide-react";

const Cennik = () => {
  const pricing = [
    { period: "12.04–31.05", price: "280 zł" },
    { period: "01.06–15.06", price: "300 zł" },
    { period: "16.06–29.06", price: "350 zł" },
    { period: "30.06–06.07", price: "450 zł" },
    { period: "07.07–12.07", price: "470 zł" },
    { period: "13.07–17.08", price: "550 zł" },
    { period: "18.08–31.08", price: "450 zł" },
    { period: "01.09–19.10", price: "320 zł" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-sky-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Cennik
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cennik sezonowy za domek na dobę. Rezerwuj już dziś!
            </p>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pricing.map((item, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-ocean transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-ocean-gradient p-2 rounded-full">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.period}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              za dobę
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <Euro className="h-5 w-5 text-primary" />
                            <span className="text-2xl font-bold text-primary">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild variant="reserve" className="w-full">
                        <Link to="/rezerwacja">
                          Zarezerwuj
                        </Link>
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
                      Informacje dodatkowe
                    </h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Ceny podane za domek na dobę</li>
                      <li>• Domki pięcioosobowe z pełnym wyposażeniem</li>
                      <li>• Możliwość pobytu z psami po wcześniejszym zgłoszeniu</li>
                      <li>• Bezpłatne Wi-Fi na terenie całego ośrodka</li>
                      <li>• Lokalizacja: 600m od morza, przy lesie</li>
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