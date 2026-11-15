type Props = { title: string; description: string; image?: "cennik" | "galeria" | "kontakt"; alt?: string };

// Round 3 (2026-11-15): subpages open with a wide photo of the resort under the title (navy shade keeps the text readable).
const PageIntro = ({ title, description, image, alt = "" }: Props) =>
  image ? (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <img
        src={`/images/naglowki/${image}-1280.webp`}
        srcSet={`/images/naglowki/${image}-640.webp 640w, /images/naglowki/${image}-1280.webp 1280w, /images/naglowki/${image}-1448.webp 1448w`}
        sizes="100vw"
        alt={alt}
        width={1280}
        height={582}
        {...{ fetchpriority: "high" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/55 to-primary/10 md:bg-gradient-to-r md:from-primary/90 md:via-primary/45 md:to-transparent" />
      <div className="container flex min-h-[17rem] flex-col justify-end px-5 pb-9 pt-24 md:min-h-[26rem] md:pb-14">
        <h1 className="display-title text-balance text-5xl leading-none md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-pretty text-white/90 md:text-lg">{description}</p>
      </div>
    </section>
  ) : (
    <section className="border-b border-border bg-secondary">
      <div className="container px-5 py-9 md:py-14">
        <h1 className="display-title text-balance text-5xl leading-none md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );

export default PageIntro;
