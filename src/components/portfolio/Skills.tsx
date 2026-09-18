import { Code2, Database, Layout, Sparkles, Users, Wrench, FileCode2, Layers, Globe, ShoppingCart, Braces, Server } from "lucide-react";

const hard = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "PHP",
  "HTML5",
  "CSS3",
  "JavaScript",
  "MySQL",
  "C#",
  "SQL",
  "ASP.NET MVC",
  "API Integration",
  "cPanel & Web Hosting",
  "Website Migration",
  "SEO",
  "Database Management",
  "Website Development & Maintenance",
];

const soft = [
  "Communication",
  "Client Relationship Management",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Time Management",
  "Requirement Analysis",
  "Attention to Detail",
  "Adaptability",
  "Task Management",
  "Critical Thinking",
  "Client Support",
  "Project Coordination",
  "Quick Learning",
  "Decision Making",
];

const tiles = [
  { icon: Globe, label: "WordPress" },
  { icon: Layout, label: "Elementor" },
  { icon: ShoppingCart, label: "WooCommerce" },
  { icon: FileCode2, label: "PHP" },
  { icon: Layout, label: "HTML/CSS" },
  { icon: Braces, label: "JavaScript" },
  { icon: Database, label: "MySQL" },
  { icon: Server, label: "ASP.NET MVC" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-36 bg-background rounded-t-[2.5rem] -mt-10 relative z-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono mr-2">04</span> Skills
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
              A toolkit for <span className="italic font-light">shipping</span>.
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-6 gap-4">
          {/* Big card - Hard skills */}
          <div className="reveal col-span-6 md:col-span-4 group rounded-3xl border hairline p-6 sm:p-8 bg-card hover:bg-foreground hover:text-background transition-colors duration-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                <Code2 className="h-4 w-4" /> Hard Skills
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{hard.length}</span>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5">
              {hard.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border hairline text-xs sm:text-sm group-hover:border-background/30 transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-8 sm:mt-10 font-display text-xl sm:text-2xl md:text-3xl tracking-tight max-w-md leading-tight">
              Building, customizing, and maintaining
              <span className="italic"> WordPress</span> & web solutions.
            </p>
          </div>

          {/* Soft skills */}
          <div className="reveal col-span-6 md:col-span-2 rounded-3xl border hairline p-6 bg-card hover:bg-foreground hover:text-background transition-colors duration-500 group flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                <Users className="h-4 w-4" /> Soft Skills
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{soft.length}</span>
            </div>
            <ul className="mt-5 grid gap-x-4 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1 text-sm font-display tracking-tight">
              {soft.map((s, i) => (
                <li key={s} className={i % 4 === 1 ? "italic" : undefined}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* WordPress */}
          <div className="reveal col-span-6 sm:col-span-3 md:col-span-2 rounded-3xl border hairline p-6 bg-card hover:bg-foreground hover:text-background transition-colors duration-500 group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              <Globe className="h-4 w-4" /> WordPress
            </div>
            <ul className="mt-5 space-y-2 font-display text-xl tracking-tight">
              <li>Elementor</li>
              <li className="italic">WooCommerce</li>
              <li>Theme & Plugin</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="reveal col-span-6 sm:col-span-3 md:col-span-2 rounded-3xl border hairline p-6 bg-card hover:bg-foreground hover:text-background transition-colors duration-500 group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              <Wrench className="h-4 w-4" /> Tools
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <div>CRM Software</div>
              <div>Microsoft Office</div>
              <div>Basic IT / Digital Literacy</div>
            </div>
          </div>

          {/* Quote */}
          <div className="reveal col-span-6 md:col-span-2 rounded-3xl border hairline p-6 bg-card flex items-end">
            <p className="font-display italic text-xl sm:text-2xl tracking-tight text-muted-foreground">
              "Detail is not detail. <span className="text-foreground not-italic">It makes the design.</span>"
            </p>
          </div>

          {/* small icon tiles */}
          <div className="reveal col-span-6 overflow-x-auto pb-2">
            <div className="grid min-w-[960px] grid-cols-8 gap-4">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="aspect-square rounded-3xl border hairline bg-card hover:bg-foreground hover:text-background transition-colors duration-500 flex flex-col items-center justify-center gap-2"
              >
                <t.icon className="h-6 w-6" />
                <span className="px-2 text-center text-xs font-mono">{t.label}</span>
              </div>
            ))}
            </div>
          </div>

          {/* Status */}
          <div className="reveal col-span-6 rounded-3xl bg-foreground text-background p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group overflow-hidden relative">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-background/50 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Current Status
              </div>
              <p className="mt-3 font-display text-2xl md:text-3xl tracking-tight max-w-md">
                Currently coordinating international projects in
                <span className="italic"> Dhaka, Bangladesh</span>.
              </p>
            </div>
            <div className="font-display text-6xl sm:text-7xl md:text-8xl italic font-light text-background/10 select-none self-end sm:self-auto">
              ’26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
