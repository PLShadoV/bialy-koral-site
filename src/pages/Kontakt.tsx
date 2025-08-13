import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-sky-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Masz pytania? Skontaktuj się z nami!
            </p>
          </div>
        </section>
        
        {/* Main Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Call to Action */}
              <div className="text-center mb-12">
                <Card className="bg-ocean-gradient text-white shadow-ocean">
                  <CardContent className="p-12">
                    <MessageCircle className="h-16 w-16 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Zadaj nam pytanie!
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Phone className="h-8 w-8" />
                      <a 
                        href="tel:+48797392903"
                        className="text-3xl md:text-4xl font-bold hover:text-accent transition-colors"
                      >
                        +48 797 392 903
                      </a>
                    </div>
                    <p className="text-xl opacity-90">
                      Zadzwoń już dziś i zarezerwuj swój wymarzony pobyt!
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="shadow-soft">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Napisz do nas
                    </h3>
                    
                    <form className="space-y-6">
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
                        <Label htmlFor="message">Wiadomość</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Opisz swoje pytanie..."
                          rows={5}
                          className="mt-1"
                        />
                      </div>
                      
                      <Button variant="reserve" size="lg" className="w-full">
                        Wyślij wiadomość
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Contact Information */}
                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ocean-gradient p-3 rounded-full">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">E-mail</h3>
                      </div>
                      <a 
                        href="mailto:info@koralrusinowo.pl"
                        className="text-lg text-primary hover:text-primary-hover transition-colors"
                      >
                        info@koralrusinowo.pl
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ocean-gradient p-3 rounded-full">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Telefon</h3>
                      </div>
                      <a 
                        href="tel:+48797392903"
                        className="text-lg text-primary hover:text-primary-hover transition-colors"
                      >
                        +48 797 392 903
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-ocean-gradient p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Adres</h3>
                      </div>
                      <div className="text-lg text-muted-foreground">
                        <p>Sosnowa 9</p>
                        <p>76-107 Rusinowo</p>
                        <p>Polska</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Map placeholder */}
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-4">Lokalizacja</h3>
                      <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                        <p className="text-muted-foreground">Mapa - wkrótce dostępna</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;