import { ArrowUpRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-foreground text-background rounded-t-[2rem] sm:rounded-t-[2.5rem] py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="reveal">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-background/50 mb-6 sm:mb-8">
            <span className="font-mono mr-2">05</span> Contact
          </div>
          <h2 className="font-display tracking-tighter leading-[0.92] text-[clamp(2.25rem,11vw,10rem)]">
            Let's
            <br />
            <span className="italic font-light">work together.</span>
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-7 reveal">
            <a
              href="mailto:ashikshuvo25@gmail.com"
              className="group inline-flex items-start gap-2 sm:gap-3 font-display text-2xl sm:text-3xl md:text-5xl tracking-tight hover:italic transition-all break-all"
            >
              <span className="break-all">ashikshuvo25@gmail.com</span>
              <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base text-background/60">
              Open to international client projects, IT consultancy, and roles that
              bridge people and technology.
            </p>
          </div>

          <div className="md:col-span-5 reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Mail, label: "Email", value: "ashikshuvo25@gmail.com", href: "mailto:ashikshuvo25@gmail.com" },
              { icon: Phone, label: "Phone", value: "+880 1515 259123", href: "tel:+8801515259123" },
              { icon: MapPin, label: "Location", value: "Rampura, Dhaka-1219" },
              { icon: Linkedin, label: "LinkedIn", value: "in/talktoashiq", href: "https://bd.linkedin.com/in/talktoashiq" },
            ].map((c) => {
              const Tag: any = c.href ? "a" : "div";
              return (
                <Tag
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-background/20 bg-background/5 p-4 sm:p-5 hover:bg-background hover:text-foreground transition-colors block min-w-0"
                >
                  <c.icon className="h-5 w-5 mb-3 opacity-90" />
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">{c.label}</div>
                  <div className="mt-1 font-medium text-sm sm:text-base break-words text-background group-hover:text-foreground">
                    {c.value}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>

        <footer className="mt-16 sm:mt-24 pt-8 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-background/50 font-mono text-center sm:text-left">
          <div>© 2026 MD. Ashikur Jaman</div>
          <div>Designed & built with care · Dhaka 🇧🇩</div>
        </footer>
      </div>
    </section>
  );
};