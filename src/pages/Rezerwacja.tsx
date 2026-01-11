import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useEffect } from "react";
import { Users, Phone, Mail, CheckCircle, Clock } from "lucide-react";
import heroCoastal from "@/assets/hero-coastal.jpg";

const IFRAME_ID = "ra-reservation-form-v2-619ed5b9c060e71f1bf804c9c96c29aa";
const SENDER = "reservation-form-619ed5b9c060e71f1bf804c9c96c29aa";

const Rezerwacja = () => {
  // Scroll to top
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
    "Możliwość pobytu z psami",
  ];

  // Iframe communication
  useEffect(() => {
    const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
    if (!iframe) return;

    const receiver = (event: MessageEvent) => {
      if (!event.data?.sender || event.data.sender !== SENDER) return;

      if (event.data.height && iframe) {
        iframe.style.height = `${event.data.height + 10}px`;
      }

      if (event.data.event?.name === "widget.scrollup.requested") {
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.data.event?.name === "reservation.submit.success") {
        const r = event.data.event.data.reservation;
        if (window.gtag) {
          gtag("event", "purchase", {
            transaction_id: r.id,
            value: r.moneyTotal / 100,
            currency: "PLN",
          });
        }
      }
    };

    window.addEventListener("message", receiver);

    const setup = () => {
      try {
        iframe.contentWindow?.postMessage(
          {
            location: window.location.toString(),
            setup: {
              autoHeight: true,
              senderName: SENDER,
            },
          },
          "*"
        );
      } catch {}
    };

    const interval = setInterval(setup, 1000);
    iframe.addEventListener("load", setup);

    return () => {
      window.removeEventListener("message", receiver);
      iframe.removeEventListener("load", setup);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen page-enter font-quicksand bg-background">
      <Header />

      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCoastal})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rezerwacja</h1>
          <p className="text-xl opacity-90">Zarezerwuj jeden z naszych domków już dziś</p>
        </div>
      </section>

      {/* MAIN */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">

          {/* SYSTEM REZERWACJI */}
          <div className="bg-white rounded-xl border border-primary/20 p-4 md:p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">
              System rezerwacji online
            </h2>
            <p className="text-center text-muted-foreground mb-6">
              Sprawdź dostępność i zarezerwuj swój pobyt w kilku krokach
            </p>

            <iframe
              id={IFRAME_ID}
              title="Rezerwacja – widget RoomAdmin"
              src="https://roomadmin.pl/widget/reservation-v2/start?fh=33de84fcfbeb2f4c83aeed9c8743b881b8814129&style=%7B%22color_accent%22%3A%22%231f8fe6%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
              style={{ width: "100%", minHeight: "320px", border: "none" }}
              scrolling="no"
            />
          </div>

          {/* BENEFITS + INFORMACJE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* BENEFITS */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CheckCircle className="text-primary" />
                  Co oferujemy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* INFORMACJE + KONTAKT */}
            <div className="space-y-6">

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="text-primary" />
                    Informacje o pobycie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Check-in: 15:00</p>
                  <p>• Check-out: 10:00</p>
                  <p>• Zwierzęta: 15 zł / doba</p>
                  <p>• Płatność: gotówka / przelew</p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-xl">
                    <Phone className="text-primary h-6 w-6" />
                    Kontakt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href="tel:+48797392903">+48 797 392 903</a>
                  </Button>
                  <p className="text-muted-foreground">
                    lub napisz: <a href="mailto:info@szafirrusinowo.pl" className="text-primary">info@szafirrusinowo.pl</a>
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rezerwacja;
