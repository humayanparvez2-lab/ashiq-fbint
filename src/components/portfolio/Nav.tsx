import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full border hairline px-4 sm:px-5 py-2.5"
            : ""
        }`}
        style={scrolled ? { width: "calc(100% - 1.5rem)" } : {}}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground animate-blink" />
          <span>Ashikur<span className="text-muted-foreground">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="h-9 w-9 grid place-items-center rounded-full border hairline hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://www.facebook.com/ashiq.fb"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex h-9 items-center rounded-full bg-foreground text-background px-4 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Let's Connect
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border hairline hover:bg-accent transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 pt-20 px-4 z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass rounded-3xl border hairline p-6 mx-auto max-w-md">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-lg font-display tracking-tight border-b hairline last:border-b-0 hover:text-muted-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/ashiq.fb"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-foreground text-background px-5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Let's Connect
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};