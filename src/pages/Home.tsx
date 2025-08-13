import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ContactSection from "@/components/sections/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, Bike, Trees, Home as HomeIcon, Utensils, Tv, Wifi, AirVent, WashingMachine, ChefHat, MapPin } from "lucide-react";
import dogBeachImage from "@/assets/dog-beach.jpg";
import bikeForestImage from "@/assets/bike-forest.jpg";

const Home = () => {
  console.log("Home component rendered");
  useEffect(() => {
    console.log("Home useEffect - scrolling to top");
    window.scrollTo(0, 0);
  }, []);
  
  const amenities = [
    { icon: Tv, text: "TV + satelita" },
    { icon: Wifi, text: "Światłowód" },
    { icon: Utensils, text: "Kuchnia (płyta indukcja, ekspres, czajnik, lodówka z zamrażalnikiem)" },
    { icon: AirVent, text: "Klimatyzacja" },
    { icon: WashingMachine, text: "Pralka" },
    { icon: Utensils, text: "Zmywarka" },
    { icon: ChefHat, text: "Grill" },
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
        
        {/* Pet-Friendly and Cycling Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pet-Friendly */}
              <Card className="shadow-soft">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={dogBeachImage} 
                    alt="Pies na plaży nad Bałtykiem - wakacje z czworonogiem w Rusinowie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ocean-gradient p-3 rounded-full">
                      <PawPrint className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Pobyt z czworonogiem
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Akceptujemy zwierzęta po wcześniejszym zgłoszeniu. Wasze pupile muszą znajdować się 
                    pod stałym nadzorem podczas całego pobytu. Zapewniamy przyjazne środowisko dla 
                    całej rodziny, w tym dla waszych czworonożnych przyjaciół.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Plaża w Rusinowie jest idealna dla spacerów z psami. Szeroki pas piasku pozwala na 
                    swobodną zabawę, a czyste powietrze i morska bryza sprawią, że Twój pies będzie 
                    zachwycony wakacjami nad Bałtykiem.
                  </p>
                </CardContent>
              </Card>

              {/* Cycling */}
              <Card className="shadow-soft">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={bikeForestImage} 
                    alt="Trasy rowerowe przez lasy w okolicy Rusinowa - aktywny wypoczynek"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ocean-gradient p-3 rounded-full">
                      <Bike className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Rowerem nad morzem
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Odkryj malownicze trasy rowerowe w okolicy Rusinowa. Przejażdżki wśród 
                    sosnowych lasów, ścieżki nadmorskie i malownicze trasy łączące nasze 
                    miasteczko z sąsiednimi kurortami zapewnią niezapomniane wrażenia.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Region Słowińskiego Parku Narodowego oferuje kilometry bezpiecznych ścieżek 
                    rowerowych. Możesz dotrzeć do Jarosławca, Wici czy Darłowa, podziwiając po 
                    drodze unikalne krajobraz y wydm i nadmorskich łąk.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                    Najbliższa okolica Rusinowa
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Nasze domki położone są w cichym miejscu przy lesie, który zaprasza na 
                  spokojne spacery i kontakt z naturą. Znajdujemy się w pobliżu Jarosławca 
                  i Wici, co zapewnia dostęp do dodatkowych atrakcji turystycznych i gastronomicznych.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rusinowo to małe, spokojne miasteczko na polskim wybrzeżu Bałtyku, położone 
                  między Darłowem a Jarosławcem. Dzięki położeniu w sercu Słowińskiego Parku 
                  Narodowego, oferuje niepowtarzalny kontakt z przyrodą. W okolicy znajdziecie 
                  ruchome wydmy, jeziora nadmorskie, latarnię morską w Darłowie oraz liczne 
                  szlaki piesze i rowerowe.
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
                Wyposażenie domków letniskowych
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Wszystko czego potrzebujesz na komfortowy wypoczynek nad morzem
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Każdy domek jest w pełni wyposażony i przygotowany na pobyt do 5 osób. 
                Nowoczesne udogodnienia zapewniają komfort porównywalny z domowym.
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

        {/* Map Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Jak nas znaleźć
              </h2>
              <p className="text-lg text-muted-foreground">
                Biały Koral - Domki letniskowe w Rusinowie
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-soft">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.2!2d16.2!3d54.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7a5f2a2a2a2a%3A0x1111111111111111!2sSosnowa%209%2C%2076-107%20Rusinowo!5e0!3m2!1spl!2spl!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa - Biały Koral, Sosnowa 9, 76-107 Rusinowo"
                  />
                </CardContent>
              </Card>
              
              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Sosnowa 9, 76-107 Rusinowo</span>
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

export default Home;