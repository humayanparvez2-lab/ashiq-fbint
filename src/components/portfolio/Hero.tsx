import { ArrowUpRight, MapPin } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 animate-fade-in">
          <span className="h-px w-8 bg-foreground/40" />
          Portfolio · 2026
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 animate-fade-in">
            <h1 className="font-display font-medium leading-[0.92] tracking-tighter text-[clamp(3rem,10vw,9.5rem)]">
              MD. Ashikur
              <br />
              <span className="italic font-light">Jaman.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-6 animate-fade-in" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-xs ml-auto shadow-2xl">
              <img
                src={headshot}
                alt="MD. Ashikur Jaman portrait"
                width={768}
                height={960}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-3xl" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end animate-fade-in" style={{ animationDelay: "240ms" }}>
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-display italic text-muted-foreground max-w-xl">
              Foreign Client Relationship Executive
              <span className="text-foreground"> & </span>
              IT Professional.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right space-y-3 text-sm">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>
            <div className="flex md:justify-end items-center gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Dhaka, Bangladesh
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "320ms" }}>
          <a
            href="https://www.facebook.com/ashiq.fb"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-all"
          >
            Let's Connect
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            View Experience
          </a>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-24 marquee-mask overflow-hidden border-y hairline py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-3xl md:text-5xl tracking-tight">
              {["Client Relations", "·", "MVC Core", "·", "MS SQL Server", "·", "C# / .NET", "·", "CMS Strategy", "·", "Web Development", "·"].map(
                (w, j) => (
                  <span key={j} className={w === "·" ? "text-muted-foreground" : "italic font-light"}>
                    {w}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};