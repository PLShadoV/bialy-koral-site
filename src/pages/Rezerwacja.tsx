import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";
import { Calendar, Users, CheckCircle, Clock } from "lucide-react";

const Rezerwacja = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    "Komfortowe domki dla maksymalnie 5 osób",
    "Pełne wyposażenie kuchenne",
    "Bezpłatne Wi-Fi na terenie ośrodka",
    "600 metrów od morza",
    "Ciche miejsce przy lesie",
    "Klimatyzacja i pralka",
    "Możliwość pobytu z psami"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-ocean-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rezerwacja
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Zarezerwuj jeden z naszych domków już dziś i ciesz się niezapomnianym wypoczynkiem nad morzem!
            </p>
          </div>
        </section>
        
        {/* Reservation Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Reservation Form */}
                <Card className="shadow-ocean">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-primary mb-4">
                        Zarezerwuj jeden z domków już dziś!
                      </h2>
                      <p className="text-muted-foreground">
                        Sprawdź dostępność i zarezerwuj swój pobyt
                      </p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="checkIn">Data przyjazdu</Label>
                          <Input 
                            id="checkIn" 
                            type="date"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="checkOut">Data wyjazdu</Label>
                          <Input 
                            id="checkOut" 
                            type="date"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="guests">Liczba gości</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Wybierz liczbę gości" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 osoba</SelectItem>
                            <SelectItem value="2">2 osoby</SelectItem>
                            <SelectItem value="3">3 osoby</SelectItem>
                            <SelectItem value="4">4 osoby</SelectItem>
                            <SelectItem value="5">5 osób</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Imię</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Twoje imię"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nazwisko</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Twoje nazwisko"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="twoj@email.pl"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+48 000 000 000"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="pets">Pobyt z psami</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Czy planujesz pobyt z psami?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">Nie</SelectItem>
                            <SelectItem value="yes">Tak, z psami</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button variant="reserve" size="lg" className="w-full">
                        <Calendar className="h-5 w-5 mr-2" />
                        Sprawdź dostępność
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Benefits and Info */}
                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ocean-gradient p-3 rounded-full">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Co oferujemy</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ocean-gradient p-3 rounded-full">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Informacje o rezerwacji</h3>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          • <strong>Check-in:</strong> od godziny 15:00
                        </p>
                        <p>
                          • <strong>Check-out:</strong> do godziny 11:00
                        </p>
                        <p>
                          • <strong>Zwierzęta:</strong> akceptowane po wcześniejszym zgłoszeniu
                        </p>
                        <p>
                          • <strong>Płatność:</strong> gotówka lub przelew
                        </p>
                        <p>
                          • <strong>Anulowanie:</strong> bezpłatne do 7 dni przed przyjazdem
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-accent/20 shadow-soft">
                    <CardContent className="p-8 text-center">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Potrzebujesz pomocy?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Zadzwoń do nas i pomożemy w rezerwacji
                      </p>
                      <Button variant="outline" size="lg">
                        <a href="tel:+48797392903">
                          +48 797 392 903
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
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

export default Rezerwacja;