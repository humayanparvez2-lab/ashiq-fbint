import { useEffect, useState } from "react";

const locations = [
  { city: "Dhaka", timezone: "Asia/Dhaka", note: "My time" },
  { city: "London", timezone: "Europe/London" },
  { city: "New York", timezone: "America/New_York" },
  { city: "Dubai", timezone: "Asia/Dubai" },
];

export const About = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="mr-2 font-mono">01</span> About
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.02] sm:text-6xl">
              Your link between business and <span className="italic font-light">technology.</span>
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Client relationships", "International communication", "MVC Core", "C#", "MS SQL Server", "CMS"].map((item) => (
                <span key={item} className="rounded-full border hairline px-3.5 py-2 text-xs sm:text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              Foreign clients need someone who answers quickly, explains things plainly, and understands how the product is built.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              At FB International BD, I’m a point of contact for clients overseas. My IT background helps me turn requests into clear requirements and keep projects moving.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {locations.map((location) => (
                <div key={location.timezone} className="rounded-lg border hairline p-4 sm:p-5">
                  <time
                    className="font-display text-3xl font-medium tabular-nums sm:text-4xl"
                    dateTime={now.toISOString()}
                  >
                    {new Intl.DateTimeFormat("en-GB", {
                      timeZone: location.timezone,
                      hour: "2-digit",
                      minute: "2-digit",
                      hourCycle: "h23",
                    }).format(now)}
                  </time>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {location.city}{location.note ? `, ${location.note}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};