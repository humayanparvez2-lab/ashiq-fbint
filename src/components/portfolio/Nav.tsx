import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

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

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl mx-3 sm:mx-auto px-4 sm:px-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full border hairline px-4 sm:px-5 py-2.5"
            : ""
        }`}
        style={scrolled ? { maxWidth: "calc(100% - 1.5rem)" } : {}}
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
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border hairline hover:bg-accent transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
    {open && (
      <div
        className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-24 px-6"
        onClick={() => setOpen(false)}
      >
        <nav className="flex flex-col gap-6 text-2xl font-display tracking-tight">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b hairline pb-4 hover:italic transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/ashiq.fb"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
          >
            Let's Connect
          </a>
        </nav>
      </div>
    )}
    </>
  );
};