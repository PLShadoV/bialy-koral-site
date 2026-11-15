const PageIntro = ({ title, description }: { title: string; description: string }) => (
  <section className="border-b border-border bg-secondary">
    <div className="container px-5 py-9 md:py-14">
      <h1 className="display-title text-balance text-5xl leading-none md:text-7xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-pretty text-muted-foreground md:text-lg">{description}</p>
    </div>
  </section>
);

export default PageIntro;
