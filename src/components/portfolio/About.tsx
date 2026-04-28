export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono mr-2">01</span> About
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
              Dedicated IT professional with a strong foundation in
              <span className="italic text-muted-foreground"> computer science </span>
              and practical experience in
              <span className="italic text-muted-foreground"> database management</span>,
              <span className="italic text-muted-foreground"> web development</span>, and
              <span className="italic text-muted-foreground"> IT consultancy</span>.
            </p>
            <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
              Currently coordinating international projects in Dhaka — bridging clients,
              developers, and timelines to deliver work that ships on time and reads well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};