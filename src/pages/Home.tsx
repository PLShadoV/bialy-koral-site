import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ContactSection from "@/components/sections/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, Bike, Trees, Tv, Wifi, AirVent, WashingMachine, ChefHat, MapPin, Utensils } from "lucide-react";
import dogBeachImage from "@/assets/dog-beach.jpg";
import bikeForestImage from "@/assets/bike-forest.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const amenityIcons = [Tv, Wifi, Utensils, AirVent, WashingMachine, Utensils, ChefHat, Wifi];

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.home.introTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.home.introText}
            </p>
          </div>
        </section>

        <Features />

        {/* Pet-Friendly and Cycling Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-soft">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img src={dogBeachImage} alt="Dog on beach" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ocean-gradient p-3 rounded-full">
                      <PawPrint className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{t.home.petsTitle}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.home.petsText}</p>
                  <p className="text-sm text-muted-foreground">{t.home.petsText2}</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img src={bikeForestImage} alt="Cycling" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ocean-gradient p-3 rounded-full">
                      <Bike className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{t.home.cyclingTitle}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.home.cyclingText}</p>
                  <p className="text-sm text-muted-foreground">{t.home.cyclingText2}</p>
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
                  <h3 className="text-2xl font-bold text-foreground">{t.home.areaTitle}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">{t.home.areaText}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.home.areaText2}</p>
                <Button asChild variant="default">
                  <Link to="/kontakt">{t.home.learnMore}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.home.equipmentTitle}</h2>
              <p className="text-lg text-muted-foreground mb-4">{t.home.equipmentSubtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.home.equipmentDescription}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {t.home.amenities.map((amenity, index) => {
                const Icon = amenityIcons[index] || Wifi;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-ocean transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-ocean-gradient p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{amenity}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button asChild variant="default" size="lg">
                <Link to="/galeria">{t.home.viewGallery}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.home.howToFindUs}</h2>
              <p className="text-lg text-muted-foreground">{t.home.howToFindUsSubtitle}</p>
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
                    title="Mapa - Biały Koral"
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
