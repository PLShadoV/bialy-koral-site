import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState, useCallback } from "react";

import heroForest from "@/assets/hero-forest.jpg";

// ✅ Automatyczne wczytanie wszystkich obrazów z katalogu src/assets/gallery
//   (Vite + TS/JS). Dopuszczalne rozszerzenia: jpg, jpeg, png, webp.
const modules = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

type ImgEntry = { id: number; src: string; alt: string };

// Zamieniamy mapę modułów na tablicę {id, src, alt}
const galleryImages: ImgEntry[] = Object.entries(modules).map(
  ([path, mod], idx) => {
    // @ts-ignore - Vite zwraca moduł z default URL
    const url = (mod as { default?: string }).default ?? (mod as unknown as string);
    const filename = path.split("/").pop() || `photo-${idx + 1}`;
    const name = filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");

    return {
      id: idx + 1,
      src: url,
      alt: `Zdjęcie: ${name}`,
    };
  }
);

const Galeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---- Lightbox state/logic ----
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const total = galleryImages.length;
  const current = useMemo(() => galleryImages[index], [index]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
    setScale(1);
    document.body.style.overflow = "hidden"; // blokuje scroll tła
  };

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  // Klawiatura: ESC, strzałki
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Zoom kółkiem
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.min(3, Math.max(0.5, s + delta)));
  };

  // Prosty swipe na mobile
  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchX(e.touches[0].clientX);
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prev();
    if (dx < -50) next();
    setTouchX(null);
  };

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

            {total === 0 ? (
              <p className="text-center text-muted-foreground">
                Dodaj zdjęcia do <code>src/assets/gallery/</code> (jpg/png/webp), aby wyświetlić galerię.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                {galleryImages.map((image, i) => (
                  <button
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-ocean transition-all duration-300 aspect-square"
                    onClick={() => openAt(i)}
                    aria-label={`Otwórz podgląd: ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <Features />

        {/* Video Sections — (bez zmian) */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Filmy promocyjne
              </h2>

              <div className="mb-16">
                <div className="bg-card rounded-lg p-8 shadow-soft text-center max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-4">Zobacz nasze domki w akcji</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Odkryj piękno Rusinowa i komfort naszych domków letniskowych.
                    Przekonaj się, dlaczego to idealne miejsce na Twój wypoczynek nad morzem.
                  </p>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-center">Film po niemiecku</h3>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
              <Link to="/rezerwacja">Zarezerwuj domek</Link>
            </Button>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* ---- LIGHTBOX ---- */}
      {open && total > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          {/* Strzałka lewa */}
          <button
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 focus:outline-none focus:ring"
            aria-label="Poprzednie zdjęcie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Obraz */}
          <div className="max-w-[90vw] max-h-[90vh] relative">
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain select-none"
              style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
              draggable={false}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-sm text-white/90 px-3 py-1 rounded-full bg-black/40">
              {current.alt} • {index + 1}/{total}
            </div>
          </div>

          {/* Strzałka prawa */}
          <button
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 focus:outline-none focus:ring"
            aria-label="Następne zdjęcie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Zamknij */}
          <button
            onClick={close}
            className="absolute top-3 right-3 md:top-6 md:right-6 rounded-full bg-white/10 hover:bg-white/20 p-3 focus:outline-none focus:ring"
            aria-label="Zamknij podgląd"
            title="Zamknij (Esc)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.41 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Galeria;
