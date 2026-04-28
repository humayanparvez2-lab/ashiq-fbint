const items = [
  {
    period: "2017 — 2023",
    title: "B.Sc. in Computer Science & Engineering",
    org: "Bangladesh Institute of Science and Technology",
    score: "CGPA 2.92",
  },
  {
    period: "2014 — 2016",
    title: "Higher Secondary Certificate · Science",
    org: "Khilgaon Gov't High School · Dhaka Board",
    score: "GPA 3.83",
  },
  {
    period: "2012 — 2014",
    title: "Secondary School Certificate · Science",
    org: "Khilgaon Gov't High School · Dhaka Board",
    score: "GPA 4.19",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono mr-2">04</span> Education
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
              Academic <span className="italic font-light">foundation</span>.
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal group grid md:grid-cols-12 gap-6 items-baseline py-8 border-t hairline last:border-b"
            >
              <div className="md:col-span-2 font-mono text-sm text-muted-foreground">{it.period}</div>
              <div className="md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">{it.title}</h3>
                <div className="text-muted-foreground mt-1">{it.org}</div>
              </div>
              <div className="md:col-span-3 md:text-right font-display text-2xl tracking-tight">
                <span className="italic font-light">{it.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};