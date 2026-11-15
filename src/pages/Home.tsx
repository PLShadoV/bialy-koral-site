import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, Bike, Tv, Navigation, Star, Wifi, AirVent, WashingMachine, ChefHat, MapPin, Utensils } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { credits, extra, googleProfile, googleRating, reviews, reviewsText } from "@/i18n/extra";

const amenityIcons = [Tv, Wifi, Utensils, AirVent, WashingMachine, Utensils, ChefHat, Wifi];

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { t, language } = useLanguage();
  const x = extra[language];
  const Credit = ({ c }: { c: { author: string; license: string; href: string } }) => (
    <a href={c.href} target="_blank" rel="noopener" className="absolute bottom-1.5 right-2 rounded bg-black/45 px-1.5 py-0.5 text-[10px] leading-tight text-white/85 hover:text-white">
      {x.photo} {c.author}, Wikimedia Commons, {c.license}
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <section className="container grid items-center gap-8 px-5 py-12 md:grid-cols-2 md:gap-12 md:py-20">
          <Link reloadDocument to="/galeria" className="group relative block overflow-hidden rounded-lg bg-muted">
            <img
              src="/images/koral-domki-1000.webp"
              srcSet="/images/koral-domki-600.webp 600w, /images/koral-domki-1000.webp 1000w"
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={x.alt.cottages}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-md bg-primary px-4 py-3 text-sm font-medium text-white group-hover:bg-primary-hover">
              {t.home.viewGallery}
            </span>
          </Link>
          <div className="md:order-first">
            <h2 className="display-title text-balance text-4xl md:text-5xl">{t.features.title}</h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">{t.home.introText}</p>
            <ul className="mt-6 divide-y divide-border border-y border-border text-sm font-medium md:text-base">
              {[t.features.capacityTitle, t.features.kitchenTitle, t.features.wifiTitle].map(item => (
                <li key={item} className="py-3">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Interiors (round 2): real photos of the rooms */}
        <section className="container px-5 pb-12 md:pb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="display-title text-balance text-3xl md:text-4xl">{x.interiors.title}</h2>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">{x.interiors.text}</p>
            </div>
            <Link reloadDocument to="/galeria" className="inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-medium text-primary hover:bg-primary hover:text-white">
              {x.interiors.cta}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {(["kuchnia", "sypialnia", "salon", "lazienka"] as const).map((name, i) => (
              <Link reloadDocument to="/galeria" key={name} className="group relative block overflow-hidden rounded-lg bg-muted">
                <img
                  src={`/images/wnetrza/${name}-480.webp`}
                  srcSet={`/images/wnetrza/${name}-480.webp 480w, /images/wnetrza/${name}-800.webp 800w`}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  alt={x.interiors.items[i]}
                  width={480}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-3 pb-3 pt-8 text-sm font-medium text-white">
                  {x.interiors.items[i]}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Guest reviews (round 2): verbatim 5-star Google reviews */}
        <section className="bg-accent/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-8 flex max-w-6xl flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="display-title text-balance text-3xl md:text-4xl">{reviewsText[language].title}</h2>
                <p className="mt-3 flex flex-wrap items-center gap-2 text-muted-foreground">
                  <span className="flex text-amber-500" aria-hidden="true">{[0, 1, 2, 3, 4].map(i => <Star key={i} className="size-5 fill-current" />)}</span>
                  <span><strong className="text-foreground">{googleRating.value}</strong> / 5 · {googleRating.count} {reviewsText[language].rating}</span>
                  {reviewsText[language].original && <span className="text-sm">· {reviewsText[language].original}</span>}
                </p>
              </div>
              <a href={googleProfile} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-medium text-primary hover:bg-primary hover:text-white">
                {reviewsText[language].all}
              </a>
            </div>
            <div className="mx-auto max-w-6xl columns-1 gap-6 md:columns-2 lg:columns-3">
              {reviews.map((review, i) => (
                <figure key={review.name} lang="pl" className={`${i >= 3 ? "hidden md:block " : ""}mb-6 break-inside-avoid rounded-lg border border-border bg-card p-6 shadow-soft`}>
                  <div className="flex text-amber-500" aria-label="5/5">{[0, 1, 2, 3, 4].map(i => <Star key={i} aria-hidden="true" className="size-4 fill-current" />)}</div>
                  <blockquote className="mt-3 text-pretty leading-relaxed text-foreground/90">„{review.text}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-primary">{review.name} · Google</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pet-Friendly and Cycling Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-soft">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img src="/images/okolica/plaza-rusinowo-480.webp" srcSet="/images/okolica/plaza-rusinowo-480.webp 480w, /images/okolica/plaza-rusinowo-800.webp 800w"
                    sizes="(min-width: 1024px) 560px, 100vw" alt={x.alt.beach} width={480} height={270} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <Credit c={credits.beach} />
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
                  <img src="/images/okolica/las-do-morza-480.webp" srcSet="/images/okolica/las-do-morza-480.webp 480w, /images/okolica/las-do-morza-800.webp 800w"
                    sizes="(min-width: 1024px) 560px, 100vw" alt={x.alt.forest} width={480} height={270} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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

        {/* Area around Rusinowo (round 2): real distances + photos, replaces the text card and the empty map card */}
        <section className="py-16 bg-sky-gradient">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-8 flex max-w-6xl flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="display-title text-balance text-3xl md:text-4xl">{x.area.title}</h2>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{t.home.areaText} {x.area.text}</p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Sosnowa%209%2C%2076-107%20Rusinowo"
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 font-medium text-white hover:bg-primary-hover"
              >
                <Navigation aria-hidden="true" className="size-4" />
                {x.area.directions}
              </a>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {x.area.places.map(place => (
                <Card key={place.key} className="overflow-hidden shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={`/images/okolica/${place.key}-480.webp`}
                      srcSet={`/images/okolica/${place.key}-480.webp 480w, /images/okolica/${place.key}-800.webp 800w`}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      alt={place.name}
                      width={480}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">{place.distance}</span>
                    <Credit c={credits[place.key]} />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-foreground">{place.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{place.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-6 flex max-w-6xl items-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 shrink-0" /> Sosnowa 9, 76-107 Rusinowo · {t.home.areaText2}
            </p>
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
                <Link reloadDocument to="/galeria">{t.home.viewGallery}</Link>
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
