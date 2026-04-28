import { Code2, Database, Layout, Sparkles, Users, Wrench, FileCode2, Layers } from "lucide-react";

const hard = [
  "MVC Core", "C#", "MS SQL Server 2019", "Visual Studio 2022",
  "HTML", "CSS", "CMS Management", "Database Management",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-36 bg-background rounded-t-[2rem] md:rounded-t-[2.5rem] -mt-10 relative z-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono mr-2">03</span> Skills
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl tracking-tight leading-[1.05]">
              A toolkit for <span className="italic font-light">shipping</span>.
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-6 auto-rows-[minmax(120px,auto)] gap-3 sm:gap-4">
          {/* Big card - Hard skills */}
          <div className="reveal col-span-6 md:col-span-4 md:row-span-2 group rounded-3xl border hairline p-6 sm:p-8 bg-card hover:bg-foreground hover:text-background transition-colors duration-500">
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
                  className="px-3 sm:px-3.5 py-1.5 rounded-full border hairline text-xs sm:text-sm group-hover:border-background/30 transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-8 sm:mt-10 font-display text-xl sm:text-2xl md:text-3xl tracking-tight max-w-md leading-tight">
              Building reliable web systems on the
              <span className="italic"> .NET stack</span>.
            </p>
          </div>

          {/* Soft skills */}
          <div className="reveal col-span-6 md:col-span-2 rounded-3xl border hairline p-6 bg-card hover:bg-foreground hover:text-background transition-colors duration-500 group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              <Users className="h-4 w-4" /> Soft Skills
            </div>
            <ul className="mt-5 space-y-2 font-display text-lg sm:text-xl tracking-tight">
              <li>Problem-solving</li>
              <li className="italic">Teamwork</li>
              <li>Attention to detail</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="reveal col-span-6 md:col-span-2 rounded-3xl border hairline p-6 bg-card hover:bg-foreground hover:text-background transition-colors duration-500 group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              <Wrench className="h-4 w-4" /> Tools
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <div>CRM Software</div>
              <div>Microsoft Office</div>
              <div>Basic IT / Digital Literacy</div>
            </div>
          </div>

          {/* Status */}
          <div className="reveal col-span-6 md:col-span-4 rounded-3xl bg-foreground text-background p-6 sm:p-8 flex items-center justify-between gap-4 sm:gap-6 group overflow-hidden relative">
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.2em] text-background/50 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Current Status
              </div>
              <p className="mt-3 font-display text-xl sm:text-2xl md:text-3xl tracking-tight max-w-md">
                Currently coordinating international projects in
                <span className="italic"> Dhaka, Bangladesh</span>.
              </p>
            </div>
            <div className="font-display text-5xl sm:text-7xl md:text-8xl italic font-light text-background/10 select-none shrink-0">
              ’26
            </div>
          </div>

          {/* small icon tiles */}
          {[
            { icon: Database, label: "SQL" },
            { icon: FileCode2, label: "C#" },
            { icon: Layout, label: "HTML/CSS" },
            { icon: Layers, label: "MVC" },
          ].map((t, i) => (
            <div
              key={i}
              className="reveal col-span-3 md:col-span-1 aspect-square rounded-3xl border hairline bg-card hover:bg-foreground hover:text-background transition-colors duration-500 flex flex-col items-center justify-center gap-2"
            >
              <t.icon className="h-6 w-6" />
              <span className="text-xs font-mono">{t.label}</span>
            </div>
          ))}

          <div className="reveal col-span-6 md:col-span-2 rounded-3xl border hairline p-6 bg-card flex items-end min-h-[140px]">
            <p className="font-display italic text-xl sm:text-2xl tracking-tight text-muted-foreground">
              "Detail is not detail. <span className="text-foreground not-italic">It makes the design.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};