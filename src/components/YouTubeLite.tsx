import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { extra } from "@/i18n/extra";

// Round 2 (2026-11-15): the gallery loaded 5 YouTube players at once (~3 MB of scripts on a phone).
// Now only a thumbnail is shown; the player loads after a click.
const YouTubeLite = ({ src, title }: { src: string; title: string }) => {
  const [on, setOn] = useState(false);
  const { language } = useLanguage();
  const id = src.split("/embed/")[1]?.split(/[?&]/)[0] ?? "";
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-muted" style={{ paddingBottom: "56.25%" }}>
      {on ? (
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="group absolute inset-0 h-full w-full" aria-label={`${extra[language].video}: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform group-hover:scale-105">
              <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeLite;
