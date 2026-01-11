import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { Calendar, Users, CheckCircle, Clock } from "lucide-react";
import heroCoastal from "@/assets/hero-coastal.jpg";

const IFRAME_ID =
  "ra-reservation-form-v2-619ed5b9c060e71f1bf804c9c96c29aa";
const SENDER =
  "reservation-form-619ed5b9c060e71f1bf804c9c96c29aa";

const Rezerwacja = () => {
  /* scroll to top – TAK JAK WSZĘDZIE */
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

  /* iframe communication */
  useEffect(() => {
    const iframe = document.getElementById(
      IFRAME_ID
    ) as HTMLIFrameElement | null;

    if (!iframe) return;

    const receiver = (event: MessageEvent) => {
      if (!event.data?.sender || event.data.sender !== SENDER) return;

      if (event.data.height) {
        iframe.style.height = `${event.data.height + 10}px`;
      }

      if (event.data.event?.name === "widget.scrollup.requested") {
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.data.event?.name === "reservation.submit.success") {
        const reservation = event.data.event.data.reservation;
        const moneyTotal = reservation.moneyTotal;
        const id = reservation.id;

        window.gtag?.("event", "purchase", {
          transaction_id: id,
          value: moneyTotal / 100,
          currency: "PLN",
        });
      }
    };

    window.addEventListener("message", receiver);

    const setup = () => {
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
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroCoastal})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rezerwacja
            </h1>
            <p className="text-xl opacity-90">
              Zarezerwuj jeden z naszych domków już dziś
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="shadow-ocean mb-16">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Sprawdź dostępność
                  </h2>
                  <p className="text-muted-foreground">
                    Rezerwacja online w kilka minut
                  </p>
                </div>

                <iframe
                  id={IFRAME_ID}
                  className="w-full border-none rounded-lg"
                  style={{ minHeight: "600px" }}
                  src="https://roomadmin.pl/widget/reservation-v2/start?fh=33de84fcfbeb2f4c83aeed9c8743b881b8814129&style=%7B%22color_accent%22%3A%22%231f8fe6%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
                />
              </CardContent>
            </Card>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle className="text-primary" />
                    Co oferujemy
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="text-primary h-5 w-5" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex gap-3">
                      <Clock className="text-primary" />
                      Informacje
                    </h3>
                    <p>• Check-in: 15:00</p>
                    <p>• Check-out: 10:00</p>
                    <p>• Zwierzęta: 15 zł / doba</p>
                    <p>• Płatność: gotówka / przelew</p>
                  </CardContent>
                </Card>

                <Card className="bg-accent/20 text-center">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">
                      Potrzebujesz pomocy?
                    </h3>
                    <Button asChild variant="outline" size="lg">
                      <a href="tel:+48797392903">+48 797 392 903</a>
                    </Button>
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

export default Rezerwacja;
