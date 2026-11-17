import { ArrowUpRight, MapPin } from "lucide-react";
import headshot from "@/assets/headshot.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-40">
        <div className="animate-fade-in lg:col-span-8">
          <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-background/20 px-4 py-2 text-xs text-background/70 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-background" />
            <span>FB International BD · Foreign Client Relationship Executive</span>
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[0.98] sm:text-7xl lg:text-8xl">
            I connect
            <br />
            global clients
            <br />
            <span className="font-light italic">with technology.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-background/65 sm:text-lg">
            I’m MD. Ashikur Jaman. I build clear client relationships and bring practical experience in web development, databases, and content platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-background px-7 text-foreground hover:bg-background/90">
              <a href="#portfolio">
                View case studies <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-background/40 bg-transparent px-7 text-background hover:bg-background hover:text-foreground">
              <a href="https://www.facebook.com/ashiq.fb" target="_blank" rel="noreferrer">Let’s talk</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in lg:col-span-4 lg:max-w-none" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto aspect-square max-w-[19rem] overflow-hidden rounded-full border border-background/25 p-3 sm:max-w-[22rem]">
            <img
              src={headshot}
              alt="MD. Ashikur Jaman portrait"
              width={768}
              height={960}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-background/60">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
              </span>
              Available for new opportunities
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-background/15 py-4">
        <div className="flex w-max animate-marquee-fast whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 px-4 font-display text-xl sm:gap-10 sm:px-8 sm:text-3xl">
              {["Client Relations", "✦", "WordPress", "✦", "WooCommerce", "✦", "Web Development", "✦"].map((item, j) => (
                <span key={j} className={item === "✦" ? "text-background/40" : "italic"}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};