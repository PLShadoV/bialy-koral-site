import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate flex min-h-[32rem] items-end overflow-hidden bg-slate-900 md:min-h-[40rem]">
      <img
        src="/images/koral-hero-1200.webp"
        srcSet="/images/koral-hero-640.webp 640w, /images/koral-hero-1200.webp 1200w"
        sizes="100vw"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      <div className="container px-5 pb-10 pt-40 text-white md:pb-16">
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl">{t.hero.subtitle}</h1>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-100 md:text-lg">{t.hero.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="min-h-11 bg-white text-slate-950 hover:bg-slate-100">
            <Link reloadDocument to="/rezerwacja">{t.hero.bookNow}</Link>
          </Button>
          <Button asChild size="lg" className="min-h-11 border border-white/70 bg-slate-950/55 text-white hover:bg-slate-950">
            <Link reloadDocument to="/galeria">{t.nav.gallery}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
