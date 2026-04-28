import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    period: "Mar 2026 — Present",
    company: "FB International BD",
    role: "Foreign Client Relationship Executive",
    points: [
      "Communicate with international clients across multiple time zones",
      "Analyze client requirements and coordinate with the development team",
      "Ensure timely delivery of projects while maintaining strong relationships",
    ],
    current: true,
  },
  {
    period: "Jan 2024 — Feb 2026",
    company: "Voice7 News",
    role: "IT Consultant",
    points: [
      "Website updates, content management and CMS oversight",
      "Social media management and editorial coordination",
      "Ensuring website functionality, performance and maintenance",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-foreground text-background py-20 md:py-36 rounded-t-[2rem] md:rounded-t-[2.5rem]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-background/50">
              <span className="font-mono mr-2">02</span> Experience
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Roles that shaped <span className="italic font-light">the craft</span>.
            </h2>
          </div>
        </div>

        <ol className="relative md:pl-0">
          {roles.map((r, i) => (
            <li key={i} className="reveal grid md:grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 border-t border-background/15 group">
              <div className="md:col-span-3 text-xs sm:text-sm text-background/60 font-mono flex flex-wrap items-center gap-2">
                {r.period}
                {r.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-background/30 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Now
                  </span>
                )}
              </div>
              <div className="md:col-span-9">
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight break-words">
                      {r.role}
                    </h3>
                    <div className="mt-1 text-background/70 italic font-display text-base sm:text-lg">
                      {r.company}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-background/40 transition-all group-hover:text-background group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <ul className="mt-5 md:mt-6 space-y-2.5 text-sm sm:text-base text-background/75 max-w-2xl">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 bg-background/40 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};