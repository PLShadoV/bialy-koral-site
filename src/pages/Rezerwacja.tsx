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
import heroCoastal from "@/assets/hero-coastal.jpg";

const Rezerwacja = () => {
  console.log("Rezerwacja component rendered");
  useEffect(() => {
    console.log("Rezerwacja useEffect - scrolling to top");
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
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroCoastal})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Rezerwacja
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto drop-shadow-md">
              Zarezerwuj jeden z naszych domków już dziś i ciesz się niezapomnianym wypoczynkiem nad morzem!
            </p>
          </div>
        </section>
        
        {/* Reservation Form Section - Full Width */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Reservation Form */}
              <Card className="shadow-ocean mb-16">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Zarezerwuj jeden z domków już dziś!
                    </h2>
                    <p className="text-muted-foreground">
                      Sprawdź dostępność i zarezerwuj swój pobyt
                    </p>
                  </div>
                  
                  <div className="w-full">
                    <iframe 
                      id="ra-reservation-form-v2-619ed5b9c060e71f1bf804c9c96c29aa" 
                      className="w-full border-none p-0 rounded-lg" 
                      style={{ height: "800px", minHeight: "600px" }}
                      src="https://roomadmin.pl/widget/reservation-v2/start?fh=33de84fcfbeb2f4c83aeed9c8743b881b8814129&style=%7B%22color_accent%22%3A%22%231f8fe6%22%2C%22color_bg%22%3A%22%23FFFFFF%22%2C%22color_panel_header%22%3A%22%23ffffff%22%2C%22color_panel_body%22%3A%22%23FFFFFF%22%2C%22rounded_corners%22%3A%223%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Benefits and Info - Two Columns Below */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Benefits */}
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
                
                {/* Info Cards */}
                <div className="space-y-6">
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
                          • <strong>Check-out:</strong> do godziny 10:00
                        </p>
                        <p>
                          • <strong>Zwierzęta:</strong> akceptowane za dodatkową opłatą 15 zł za dobę
                        </p>
                        <p>
                          • <strong>Płatność:</strong> gotówka lub przelew
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

// Add the script for iframe communication
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.textContent = `
    try {
      (function () {
        var iframe = window.document.getElementById('ra-reservation-form-v2-619ed5b9c060e71f1bf804c9c96c29aa');
        function raMessageReceiver(event) {
          if (iframe) {
            if (!event.data.sender || "reservation-form-619ed5b9c060e71f1bf804c9c96c29aa" !== event.data.sender) {
              return;
            }
            if (event.data.height) {
              iframe.style.height = (event.data.height + 10) + "px";
            }
            if (event.data.event && event.data.event.name === "widget.scrollup.requested") {
              try {
                iframe.scrollIntoView({behavior: "smooth", block: "start"});
              } catch (e) { }
            }
            if (event.data.event && event.data.event.name === "reservation.submit.success") {
              console.log("reservation.submit.success", event.data.event.data.reservation);
              var moneyTotal = event.data.event.data.reservation.moneyTotal;
              var id = event.data.event.data.reservation.id;
              window.gtag||(console.log("no gtag -- trying fallback "),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},Array.from(document.scripts).forEach(function(a){if(a.src.startsWith("https://www.googletagmanager.com/gtag/js")||a.src.startsWith("http://www.googletagmanager.com/gtag/js")){var g=new URL(a.src).searchParams.get("id");console.log("gtag found: "+g),gtag("js",new Date),gtag("config",g)}}));
              gtag("event", "purchase", { transaction_id: id, value: moneyTotal / 100, currency: "PLN" });
              console.log("purchase event sent")
            }
            if (event.data.event && event.data.event.name === "reservation.variant-search.start") {
              
            }
            if (event.data.event && event.data.event.name) {
              console.log(event.data.event.name, event.data.event);
            }
          }
        }
        window.addEventListener("message", raMessageReceiver, false);
        function setup() {
          try {
            iframe.contentWindow.postMessage({
              location: window.location.toString(),
              setup: { autoHeight: true, senderName: "reservation-form-619ed5b9c060e71f1bf804c9c96c29aa" }
            }, "*");
          } catch (e) { }
        }
        setInterval(setup, 1000);
        iframe.addEventListener("load", setup);
      })();
    } catch (e) {
      console.error(e);
    }
  `;
  document.head.appendChild(script);
}

export default Rezerwacja;