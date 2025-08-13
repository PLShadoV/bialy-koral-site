import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroForest from "@/assets/hero-forest.jpg";
import domekfront from "@/assets/domekfront.jpg";

const Galeria = () => {
  console.log("Galeria component rendered");
  useEffect(() => {
    console.log("Galeria useEffect - scrolling to top");
    window.scrollTo(0, 0);
  }, []);
  // Placeholder images - replace these URLs with actual cottage photos
  const galleryImages = [
  {
    id: 1,
    src: "@/assets/domekfront.jpg",
    alt: "Opis zdjęcia 1"
  },
  {
    id: 2,
    src: "/assets/domekfront.jpg", 
    alt: "Opis zdjęcia 2"
  },
  // ... dodaj więcej zdjęć
];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroForest})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Galeria
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto drop-shadow-md">
              Zobacz nasze komfortowe domki letniskowe i piękne otoczenie w Rusinowie
            </p>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Zdjęcia domków
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {galleryImages.map((image) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-ocean transition-all duration-300 aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        
        {/* Video Sections */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Filmy promocyjne
              </h2>
              
              {/* Main Polish Video - Featured */}
              <div className="mb-16">
                <div className="bg-card rounded-lg p-8 shadow-soft text-center max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-4">Zobacz nasze domki w akcji</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Odkryj piękno Rusinowa i komfort naszych domków letniskowych. 
                    Przekonaj się, dlaczego to idealne miejsce na Twój wypoczynek nad morzem.
                  </p>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/JNhcOOIwQmg"
                      title="Domki letniskowe Rusinowo - Film promocyjny"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              
              {/* International Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-center">Film po niemiecku</h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/iRxygzYHm_M"
                      title="Ferienhäuser Rusinowo - Promotional Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-center">Film po angielsku</h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/xCoTAp1nI1Y"
                      title="Holiday Cottages Rusinowo - Promotional Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-center">Film po ukraińsku</h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/YDQLjr58luk"
                      title="Літні будинки Русинів - Рекламне відео"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-center">Film po czesku</h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/LC-KVI_A7GA"
                      title="Rekreační domky Rusinowo - Propagační video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Przekonałeś się? Zarezerwuj już dziś!
            </h2>
            <Button asChild variant="reserve" size="lg">
              <Link to="/rezerwacja">
                Zarezerwuj domek
              </Link>
            </Button>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Galeria;
