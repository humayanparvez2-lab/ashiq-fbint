import { useState } from "react";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LiveShot from "./LiveShot";

type Project = {
  id: string;
  title: string;
  tagline: string;
  clientType: string;
  url: string;
  badge: string;
  stack: string[];
  overview: string;
  goals: string[];
  role: string;
  process: string[];
  features: string[];
  challenges: { challenge: string; solution: string }[];
  responsive: string;
  result: string;
};

const projects: Project[] = [
  {
    id: "abdullah-shoe",
    title: "Abdullah Shoe",
    tagline: "A full WooCommerce storefront for a Bangladeshi footwear brand.",
    clientType: "Retail / Footwear e-commerce",
    url: "https://abdullahshoe.com",
    badge: "WordPress · Elementor · WooCommerce",
    stack: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL", "cPanel"],
    overview:
      "Abdullah Shoe is a retail footwear brand in Bangladesh that needed a professional online storefront to showcase its collection and accept orders directly from customers across the country.",
    goals: [
      "Launch a complete online shoe store with product catalog and ordering",
      "Present the brand professionally to compete with larger retailers",
      "Keep the site easy for a non-technical team to update",
    ],
    role: "I designed and developed the entire website end to end — hosting setup, WordPress installation, store configuration, design, and launch.",
    process: [
      "Configured hosting and cPanel, installed WordPress and WooCommerce",
      "Built custom layouts in Elementor with full theme customization",
      "Set up product categories, pricing, and ordering workflows",
      "Optimized page speed and on-page SEO before launch",
    ],
    features: [
      "Complete product catalog with categories and filters",
      "WooCommerce cart and checkout flow",
      "Custom homepage and landing sections built in Elementor",
      "Contact and inquiry integration for customer questions",
    ],
    challenges: [
      {
        challenge: "Large product photography slowed initial page loads.",
        solution:
          "Optimized and compressed images, configured caching, and removed unused plugins to bring load times down.",
      },
      {
        challenge: "The client needed an ordering flow simple enough for first-time online shoppers.",
        solution:
          "Streamlined the checkout steps and tested the full purchase journey on mobile before launch.",
      },
    ],
    responsive:
      "The store was built mobile-first: every product page, category grid, and the full checkout flow was tested on phones, tablets, and desktop breakpoints.",
    result:
      "A fast, fully responsive e-commerce store that presents the brand professionally and lets customers browse and order shoes from any device.",
  },
  {
    id: "vintage-tours",
    title: "Vintage Tours & Travel",
    tagline: "A tour showcase and booking site for a travel agency.",
    clientType: "Travel agency / Tourism",
    url: "https://vintagetoursandtravel.org/",
    badge: "WordPress · Elementor · SEO",
    stack: ["WordPress", "Elementor", "PHP", "SEO", "MySQL", "cPanel"],
    overview:
      "Vintage Tours & Travel is a tourism agency that needed a website to present its tour packages, build trust with international travelers, and generate booking inquiries.",
    goals: [
      "Showcase tour packages with strong photography and clear itineraries",
      "Make it easy for visitors to send booking inquiries",
      "Rank better in search for travel-related queries",
    ],
    role: "I handled the full build — planning, design, content structure, speed optimization, and search engine optimization.",
    process: [
      "Planned the site structure around tour packages and destinations",
      "Designed immersive layouts in Elementor with large imagery",
      "Built inquiry forms connected to the agency's email",
      "Applied on-page SEO and performance optimization",
    ],
    features: [
      "Tour package pages with itineraries and pricing",
      "Booking inquiry forms",
      "Gallery-driven destination showcases",
      "SEO-optimized page structure and metadata",
    ],
    challenges: [
      {
        challenge: "Image-heavy tour pages risked slow loading on mobile data connections.",
        solution:
          "Implemented image optimization, lazy loading, and caching so galleries stay fast on slower networks.",
      },
      {
        challenge: "Package content needed regular updates by the agency team.",
        solution:
          "Built reusable Elementor templates so staff can duplicate and edit tour pages without touching code.",
      },
    ],
    responsive:
      "Layouts adapt from wide desktop galleries to single-column mobile views, with tap-friendly inquiry buttons and forms tested across device sizes.",
    result:
      "A polished, search-optimized travel site that showcases packages beautifully and converts visitors into booking inquiries.",
  },
  {
    id: "voice7-news",
    title: "Voice7 News",
    tagline: "A high-traffic online news portal with organized editorial content.",
    clientType: "News / Online media",
    url: "https://www.voice7news.tv/",
    badge: "WordPress · Plugin Management · Speed",
    stack: ["WordPress", "PHP", "MySQL", "cPanel", "SEO", "Speed Optimization"],
    overview:
      "Voice7 News is an online news portal publishing stories across many categories every day. It needed a fast, organized platform that editors could update constantly without technical help.",
    goals: [
      "Publish news across many categories with a clean editorial layout",
      "Handle frequent daily updates without slowing down",
      "Stay fast and stable under growing traffic",
    ],
    role: "I built and configured the news portal, structured the category system, managed plugins, and optimized the site for speed and search visibility.",
    process: [
      "Set up WordPress with a news-focused theme and customized it heavily",
      "Structured categories, tags, and homepage sections for editorial flow",
      "Configured and managed plugins for publishing, security, and caching",
      "Optimized database queries, caching, and SEO settings",
    ],
    features: [
      "Multi-category news publishing system",
      "Breaking news and featured story sections",
      "Organized archive and search for readers",
      "Ad and widget areas managed without code",
    ],
    challenges: [
      {
        challenge: "High publishing volume made the site slow over time.",
        solution:
          "Tuned caching, cleaned the database, and optimized queries to keep pages fast as the archive grew.",
      },
      {
        challenge: "Too many plugins created conflicts and security risk.",
        solution:
          "Audited the plugin stack, removed redundancies, and standardized on a secure, maintainable set.",
      },
    ],
    responsive:
      "The reading experience is fully responsive — headlines, article pages, and category grids reflow cleanly from desktop to phone screens.",
    result:
      "A stable, fast news portal that the editorial team updates daily, with organized categories and strong search visibility.",
  },
];

export const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-3 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono mr-2">03</span> Portfolio
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
              Selected <span className="italic font-light">WordPress</span> projects.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground text-sm md:text-base">
              Real client websites I designed, built, and launched — from
              e-commerce to travel and online news.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="reveal group grid md:grid-cols-12 gap-6 rounded-3xl border hairline bg-card p-5 md:p-6 hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <button
                onClick={() => setActive(p)}
                className="md:col-span-5 relative block overflow-hidden rounded-2xl border hairline aspect-[4/3] text-left bg-muted"
                aria-label={`Open case study for ${p.title}`}
              >
                <LiveShot
                  url={p.url}
                  alt={`${p.title} website homepage`}
                  className="absolute left-0 top-0 h-[900px] w-[1280px] origin-top-left scale-[0.23] sm:scale-[0.32] md:scale-[0.33] pointer-events-none bg-background"
                />
              </button>

              <div className="md:col-span-7 flex flex-col justify-between py-1 min-w-0">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                      {p.clientType}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground group-hover:text-background/70 max-w-lg">
                    {p.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center rounded-full border hairline px-3 py-1 text-xs group-hover:border-background/30">
                    {p.badge}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground text-background group-hover:bg-background group-hover:text-foreground px-5 text-sm font-medium transition-colors"
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border hairline px-5 text-sm font-medium group-hover:border-background/40 hover:opacity-80 transition"
                  >
                    <Globe className="h-4 w-4" /> Visit Website
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 rounded-3xl bg-foreground text-background p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight">
              Have a WordPress project <span className="italic font-light">in mind?</span>
            </h3>
            <p className="mt-2 text-sm md:text-base text-background/60 max-w-md">
              From stores to news portals — let's build something fast,
              responsive, and easy to manage.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-background text-foreground px-7 text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Case study modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-0 gap-0">
          {active && (
            <div>
              <div className="relative aspect-[16/9] min-h-72 overflow-hidden bg-muted">
                <LiveShot
                  url={active.url}
                  alt={`${active.title} website preview`}
                  loading="eager"
                  className="absolute left-0 top-0 h-[900px] w-[1280px] origin-top-left scale-[0.24] sm:scale-[0.48] md:scale-[0.59] bg-background"
                />
              </div>
              <div className="p-6 md:p-10">
                <DialogHeader>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {active.clientType}
                  </div>
                  <DialogTitle className="font-display text-3xl md:text-4xl tracking-tight">
                    {active.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-6 space-y-8 text-sm md:text-base">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Overview</h4>
                    <p className="leading-relaxed">{active.overview}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Project Goals</h4>
                      <ul className="space-y-2 list-disc pl-4 leading-relaxed">
                        {active.goals.map((g) => <li key={g}>{g}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">My Role</h4>
                      <p className="leading-relaxed">{active.role}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {active.stack.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-full border hairline text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Development Process</h4>
                      <ul className="space-y-2 list-disc pl-4 leading-relaxed">
                        {active.process.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Key Features</h4>
                      <ul className="space-y-2 list-disc pl-4 leading-relaxed">
                        {active.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Challenges & Solutions</h4>
                    <div className="space-y-4">
                      {active.challenges.map((c) => (
                        <div key={c.challenge} className="rounded-2xl border hairline p-4">
                          <p className="font-medium">{c.challenge}</p>
                          <p className="mt-1 text-muted-foreground leading-relaxed">{c.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Responsive Design</h4>
                      <p className="leading-relaxed">{active.responsive}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Final Result</h4>
                      <p className="leading-relaxed">{active.result}</p>
                    </div>
                  </div>

                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground text-background px-7 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Visit Live Website <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
