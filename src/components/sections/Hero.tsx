import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate grid overflow-hidden bg-primary text-primary-foreground lg:min-h-[min(730px,78svh)] lg:items-end">
      <img
        src="/images/koral-widok-1440.webp"
        srcSet="/images/koral-widok-720.webp 720w, /images/koral-widok-1440.webp 1440w, /images/koral-widok-1920.webp 1920w"
        sizes="100vw"
        alt=""
        className="h-[clamp(13rem,55vw,28rem)] w-full object-cover object-center lg:absolute lg:inset-0 lg:-z-20 lg:h-full"
      />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-primary via-primary/60 to-transparent lg:block" />
      <div className="container px-5 pb-10 pt-7 lg:pb-20 lg:pt-28">
        <h1 className="display-title max-w-3xl text-balance text-[clamp(2.65rem,6vw,6rem)] leading-[.99]">{t.hero.subtitle}</h1>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/90 lg:mt-6 lg:max-w-md lg:text-lg">{t.hero.description}</p>
        <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
          <Button asChild variant="secondary" size="lg" className="px-4 sm:px-6">
            <Link reloadDocument to="/rezerwacja">{t.hero.bookNow}<ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button asChild size="lg" className="border border-white/60 bg-primary/60 px-4 hover:bg-primary-hover sm:px-6">
            <Link reloadDocument to="/galeria">{t.home.viewGallery}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
