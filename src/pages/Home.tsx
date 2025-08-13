import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ContactSection from "@/components/sections/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint, Bike, Trees, Home as HomeIcon, Utensils, Tv, Wifi, Snowflake, Waves, Car } from "lucide-react";

const Home = () => {
  const amenities = [
    { icon: Tv, text: "TV + satelita" },
    { icon: Wifi, text: "Światłowód" },
    { icon: Utensils, text: "Kuchnia (płyta indukcja, ekspres, czajnik, lodówka z zamrażalnikiem)" },
    { icon: Snowflake, text: "Klimatyzacja" },
    { icon: Waves, text: "Pralka" },
    { icon: Utensils, text: "Zmywarka" },
    { icon: Car, text: "Grill" },
    { icon: Wifi, text: "Bezpłatne Wi-Fi na terenie ośrodka" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Biały Koral — Domki letniskowe nad morzem
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zapraszamy do naszych komfortowych domków letniskowych w Rusinowie. 
              Idealne miejsce na rodzinny wypoczynek w otoczeniu pięknej przyrody, 
              z łatwym dostępem do plaży i licznych atrakcji turystycznych.
            </p>
          </div>
        </section>
        
        <Features />
        
        {/* Pet-Friendly Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-ocean-gradient p-3 rounded-full">
                    <PawPrint className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Pobyt z czworonogiem
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Akceptujemy zwierzęta po wcześniejszym zgłoszeniu. Wasze pupile muszą znajdować się 
                  pod stałym nadzorem podczas całego pobytu. Zapewniamy przyjazne środowisko dla 
                  całej rodziny, w tym dla waszych czworonożnych przyjaciół.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Cycling Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-ocean-gradient p-3 rounded-full">
                    <Bike className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Rowerem nad morzem
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Odkryj malownicze trasy rowerowe w okolicy Rusinowa. Przejażdżki wśród 
                  sosnowych lasów, ścieżki nadmorskie i malownicze trasy łączące nasze 
                  miasteczko z sąsiednimi kurortami zapewnią niezapomniane wrażenia.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Area Description */}
        <section className="py-16 bg-sky-gradient">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-soft bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-ocean-gradient p-3 rounded-full">
                    <Trees className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Najbliższa okolica
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nasze domki położone są w cichym miejscu przy lesie, który zaprasza na 
                  spokojne spacery i kontakt z naturą. Znajdujemy się w pobliżu Jarosławca 
                  i Wici, co zapewnia dostęp do dodatkowych atrakcji turystycznych i gastronomicznych.
                </p>
                <Button asChild variant="default">
                  <Link to="/kontakt">
                    Dowiedz się więcej
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Equipment Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Wyposażenie
              </h2>
              <p className="text-lg text-muted-foreground">
                Wszystko czego potrzebujesz na komfortowy wypoczynek
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {amenities.map((amenity, index) => (
                <Card key={index} className="shadow-soft hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-ocean-gradient p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <amenity.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {amenity.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="default" size="lg">
                <Link to="/galeria">
                  Zobacz galerię
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;