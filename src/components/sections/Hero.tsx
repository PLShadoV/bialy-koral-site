import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/herodron.jpg";
import heroImage2 from "@/assets/gorapan.jpg";
import heroImage3 from "@/assets/dalekowidok.jpg";
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
      setProgress(0);
    }, 4000);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (4000 / 50); // Update every 50ms
      });
    }, 50);
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length]);
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`} style={{
      backgroundImage: `url(${image})`
    }} />)}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Biały Koral
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
            Domki wczasowe nad morzem
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto drop-shadow-md">
            Odkryj idealne miejsce na wakacje w Rusinowie. Komfortowe domki w otoczeniu lasu, 
            zaledwie 600 metrów od plaży Bałtyku. Ciesz się spokojem natury i bliskością morza.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
            <Link to="/rezerwacja">
              Zarezerwuj teraz
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-white transition-all duration-75 ease-linear" style={{
        width: `${progress}%`
      }} />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;
