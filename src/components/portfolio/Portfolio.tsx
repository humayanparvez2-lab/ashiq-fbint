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
  {
    id: "katie-austin",
    title: "Katie Austin",
    tagline: "A high-energy fitness and wellness platform built to turn content discovery into membership growth.",
    clientType: "Fitness / Wellness platform",
    url: "https://katieaustin.tv/",
    badge: "WordPress · Elementor · Conversion UX",
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Marketing Integrations", "SEO"],
    overview:
      "Katie Austin is a fitness and wellness platform built around at-home workouts, healthy recipes, guided programs, and a digital fitness community. The website is the primary marketing and conversion platform for the Katie Austin App, presenting 500+ workouts, weekly schedules, programs, 300+ recipes, memberships, testimonials, and access across mobile, desktop, and streaming devices.",
    goals: [
      "Create a modern and energetic fitness-focused website",
      "Make workout categories, programs, recipes, and lifestyle content easy to discover",
      "Present membership benefits clearly and encourage visitors to start a free trial",
      "Build trust through testimonials and media recognition",
      "Deliver strong mobile and tablet experiences",
    ],
    role: "I handled UI/UX implementation, WordPress development, responsive frontend work, page and content structure, workout and recipe organization, membership landing pages, conversion flows, mobile optimization, cross-browser testing, and performance refinement.",
    process: [
      "Reviewed the fitness brand, audience, and existing content",
      "Planned the information architecture around workouts, recipes, programs, and membership",
      "Created an image-led visual hierarchy with clear calls to action",
      "Built responsive layouts and structured content for easier navigation",
      "Implemented free-trial, membership, testimonial, and social-proof sections",
      "Tested across devices and browsers before final usability refinements",
    ],
    features: [
      "Fitness-focused homepage and workout category navigation",
      "Pilates, strength, cardio, and low-impact workout sections",
      "Guided programs and weekly workout schedules",
      "Recipe content and categories",
      "Membership pricing and free-trial calls to action",
      "Testimonials, media recognition, and app promotion",
    ],
    challenges: [
      {
        challenge: "The platform combines workouts, programs, recipes, testimonials, and membership information.",
        solution: "I created a clear hierarchy with dedicated sections that guide visitors from brand discovery to content exploration and membership conversion.",
      },
      {
        challenge: "Fitness content needed to feel visually engaging without complicating navigation.",
        solution: "Strong imagery, concise content blocks, category navigation, and strategically repeated calls to action keep the journey focused.",
      },
    ],
    responsive:
      "Workout discovery, recipes, membership content, and calls to action were optimized for phones, tablets, desktops, and the platform's broader multi-device audience.",
    result:
      "A polished fitness and wellness website combining brand storytelling, content discovery, social proof, and membership conversion in one cohesive experience.",
  },
  {
    id: "bush-2-city-adventure",
    title: "Bush 2 City Adventure",
    tagline: "A scalable safari travel platform for private, luxury, family, and tailor-made African journeys.",
    clientType: "Travel / African safaris",
    url: "https://bush2cityadventure.com/",
    badge: "WordPress · Elementor · Tour Architecture",
    stack: ["WordPress", "Elementor", "Custom CSS", "JavaScript", "PHP", "Responsive Web Design", "Tour Management", "Quote Forms", "SEO"],
    overview:
      "Bush 2 City Adventure is a travel platform focused on private African safaris, Tanzania and Kenya tours, luxury experiences, family safaris, honeymoon packages, wildlife migration trips, and customized itineraries. Its extensive catalog covers destinations, accommodations, activities, transportation, daily itineraries, pricing, and quote requests.",
    goals: [
      "Build a premium travel website for African safari experiences",
      "Organize a large catalog of tours and destinations",
      "Present detailed itineraries professionally without overwhelming visitors",
      "Support customized trip and quotation requests",
      "Build trust with international travelers across devices",
    ],
    role: "I led the website architecture, WordPress development, interface implementation, tour listing and detail pages, mega-menu navigation, responsive development, quote forms, content organization, and performance and usability optimization.",
    process: [
      "Analyzed the travel content and organized destinations into logical categories",
      "Created a scalable architecture and reusable tour layouts",
      "Built detailed itinerary sections for accommodation, meals, transport, and activities",
      "Added quote-request calls to action and customizable trip options",
      "Optimized navigation for the large destination catalog",
      "Tested responsive layouts and refined content presentation",
    ],
    features: [
      "Destination mega menu with Kenya and Tanzania sections",
      "Private, luxury, family, honeymoon, and migration safari packages",
      "Detailed day-by-day itineraries",
      "Accommodation, activity, meal, and transportation information",
      "Request-a-quote functionality and customizable trips",
      "Responsive tour listing and detail pages",
    ],
    challenges: [
      {
        challenge: "The site contains extensive travel information and many tour variations.",
        solution: "A structured navigation system and reusable content architecture make destinations and tours easier to browse and maintain.",
      },
      {
        challenge: "Tour pages must communicate substantial detail without overwhelming visitors.",
        solution: "Content was divided into overview, itinerary, rates, inclusions, transport, accommodation, and activity sections.",
      },
      {
        challenge: "International travelers need confidence before requesting a trip.",
        solution: "Detailed itineraries, accommodation details, customization options, and prominent quote calls to action build trust throughout the journey.",
      },
    ],
    responsive:
      "Large menus, tour listings, itinerary details, and quote forms adapt into focused, touch-friendly layouts for international travelers on any device.",
    result:
      "A scalable travel platform that presents complex safari packages clearly while maintaining a direct booking and inquiry journey.",
  },
  {
    id: "planet-m",
    title: "Planet-M",
    tagline: "A conversion-focused marketplace consultancy presence spanning Amazon, eBay, Otto, and TikTok Shop.",
    clientType: "eCommerce / Marketplace consulting",
    url: "https://planet-m.net/",
    badge: "WordPress · Elementor · Lead Generation",
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Contact Forms", "SEO"],
    overview:
      "Planet-M is a German marketplace consulting website for Amazon, eBay, Otto, TikTok Shop, and social commerce. It positions the business as an eCommerce marketplace specialist through Amazon Seller and Vendor services, account management, previous marketplace projects, and consultation opportunities.",
    goals: [
      "Create a professional personal-brand website",
      "Position the business as a marketplace expert",
      "Communicate Amazon and eCommerce services clearly",
      "Showcase credible marketplace projects",
      "Generate consultation inquiries through a focused landing experience",
    ],
    role: "I handled the website design and development, WordPress implementation, UI/UX, service-page structure, project showcases, responsive frontend, contact forms, conversion optimization, and content organization.",
    process: [
      "Reviewed the marketplace consultancy positioning",
      "Structured the website around services, expertise, and conversion",
      "Created a strong opening section with a clear value proposition",
      "Developed Amazon, TikTok Shop, and social commerce service sections",
      "Added marketplace project stories and lead-generation forms",
      "Optimized mobile layouts and tested navigation and contact functionality",
    ],
    features: [
      "Marketplace consulting homepage",
      "Amazon Seller and Vendor services",
      "TikTok Shop and social commerce services",
      "Project showcases for brands including air up®, Maxxi Clean, and Hubelino",
      "Consultation calls to action and lead-generation forms",
      "Responsive personal-brand presentation",
    ],
    challenges: [
      {
        challenge: "Marketplace consulting includes many distinct services.",
        solution: "Services were divided into clear categories so visitors can quickly understand the consultant's expertise.",
      },
      {
        challenge: "The website needed to establish expertise without relying on excessive text.",
        solution: "Project showcases, concise service descriptions, and a strong visual hierarchy communicate experience efficiently.",
      },
    ],
    responsive:
      "Service content, project evidence, and inquiry forms were simplified into clear mobile layouts while retaining the desktop site's authority and conversion path.",
    result:
      "A professional marketplace consultancy website combining personal branding, service positioning, project credibility, and lead generation.",
  },
  {
    id: "gema-designs",
    title: "Gema Designs",
    tagline: "A visual-first digital presence for a specialized creative design business.",
    clientType: "Creative business / Design services",
    url: "https://gemadesigns.com/",
    badge: "WordPress · Elementor · Creative UI",
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Contact Forms"],
    overview:
      "Gema Designs is a specialized design business. The project focused on creating a visually polished digital presence capable of presenting creative services and portfolio work in a professional, approachable way.",
    goals: [
      "Establish a strong creative brand presence",
      "Present design services and portfolio work clearly",
      "Make project discovery simple",
      "Provide clear contact opportunities",
      "Maintain visual consistency across devices and content sections",
    ],
    role: "I handled UI/UX implementation, WordPress development, responsive layouts, portfolio and content structure, service presentation, contact functionality, mobile optimization, and frontend refinement.",
    process: [
      "Reviewed the brand and creative-service requirements",
      "Planned a visual-first information architecture",
      "Developed the core page, service, and portfolio layouts",
      "Refined typography, spacing, imagery, and call-to-action placement",
      "Tested desktop, tablet, and mobile experiences",
      "Completed final interface refinements",
    ],
    features: [
      "Creative business homepage",
      "Service and portfolio presentation",
      "Visual storytelling",
      "Responsive layouts and mobile-friendly navigation",
      "Contact functionality",
      "Strong visual hierarchy",
    ],
    challenges: [
      {
        challenge: "The website itself needed to demonstrate the quality of a creative business.",
        solution: "The design emphasizes spacing, imagery, typography, hierarchy, and clean content presentation.",
      },
      {
        challenge: "Portfolio content can easily become visually overwhelming.",
        solution: "Work and services were organized into structured sections that remain easy to explore.",
      },
    ],
    responsive:
      "Portfolio imagery, service sections, navigation, and contact actions were adapted to preserve visual rhythm and clarity from phones through desktop screens.",
    result:
      "A clean, visually focused website that functions as both a business presentation platform and a digital portfolio.",
  },
  {
    id: "modasource",
    title: "ModaSource",
    tagline: "A polished B2B platform connecting international buyers with premium and custom textile sourcing.",
    clientType: "B2B / Global fabric sourcing",
    url: "https://modasource.com/",
    badge: "WordPress · Elementor · B2B UX",
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Quote Forms", "SEO"],
    overview:
      "ModaSource is a global fabric sourcing business offering premium textiles, customized fabrics, sourcing services, and international support. The website communicates its fabric expertise, sourcing process, quality standards, sustainability focus, product categories, and quotation journey.",
    goals: [
      "Create a professional B2B textile website",
      "Present fabric sourcing capabilities and products clearly",
      "Build trust with international buyers",
      "Explain quality, sustainability, sourcing, and fulfillment",
      "Generate qualified quotation requests",
    ],
    role: "I delivered the WordPress development, UI/UX implementation, B2B website structure, product and service presentation, quotation forms, responsive frontend, content organization, performance optimization, and cross-device testing.",
    process: [
      "Analyzed the textile sourcing business model",
      "Organized content around services, products, advantages, and process",
      "Created a professional international B2B visual direction",
      "Built product, quality, innovation, and sustainability sections",
      "Implemented quotation, contact, FAQ, and newsletter areas",
      "Optimized layouts and tested forms and navigation",
    ],
    features: [
      "B2B textile sourcing homepage",
      "Premium fabric and custom sourcing presentation",
      "Quality, innovation, and sustainability sections",
      "Global sourcing and fulfillment positioning",
      "Working-process and FAQ sections",
      "Quote, contact, and newsletter forms",
    ],
    challenges: [
      {
        challenge: "Textile sourcing is a technical B2B service that can be difficult to explain simply.",
        solution: "Content was divided into clear sections covering value, process, products, quality, sustainability, and support.",
      },
      {
        challenge: "International buyers need confidence before making an inquiry.",
        solution: "Experience, product details, process explanations, FAQs, and clear contact options create trust throughout the site.",
      },
    ],
    responsive:
      "Product information, sourcing steps, FAQs, and quotation forms were designed to remain readable and easy to use across international buyers' devices.",
    result:
      "A professional B2B textile website presenting fabric expertise, sustainability, global sourcing, and lead-generation opportunities with clarity.",
  },
  {
    id: "select-the-best",
    title: "Select The Best",
    tagline: "An authority-led resource platform for stronger candidate selection and behavioral interviewing.",
    clientType: "Professional services / Recruitment",
    url: "https://selectthebest.com/",
    badge: "WordPress · Elementor · Resource UX",
    stack: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Lead Forms", "SEO"],
    overview:
      "Select The Best is a professional platform helping HR professionals, leaders, and recruiters improve candidate selection and behavioral interviewing through practical, research-backed strategies and resources.",
    goals: [
      "Create a professional authority-focused website",
      "Communicate the platform's purpose and expertise clearly",
      "Present recruitment resources effectively",
      "Build credibility with HR professionals",
      "Generate leads through content and resource access",
      "Create a simple, responsive navigation experience",
    ],
    role: "I handled WordPress development, UI/UX implementation, responsive frontend work, content architecture, resources and lead generation, calls to action, form integration, and website optimization.",
    process: [
      "Reviewed the HR and recruitment business positioning",
      "Structured the website around expertise, resources, and conversion",
      "Created a professional visual hierarchy",
      "Developed content, resource, and lead-generation sections",
      "Optimized call-to-action placement and responsive layouts",
      "Tested across major devices and browsers",
    ],
    features: [
      "Professional HR-focused homepage",
      "Recruitment and behavioral-interviewing content",
      "Resource-focused sections",
      "Lead-generation forms and calls to action",
      "Structured professional branding",
      "Responsive and mobile-optimized presentation",
    ],
    challenges: [
      {
        challenge: "Recruitment and interviewing content can be information-heavy.",
        solution: "Content was divided into digestible sections with clear headings, supporting visuals, and focused calls to action.",
      },
      {
        challenge: "The website needed to establish authority quickly.",
        solution: "Professional presentation, clear messaging, accessible resources, and credibility-focused content reinforce expertise from the first visit.",
      },
    ],
    responsive:
      "Educational content, resource access, and lead forms were arranged for comfortable reading and efficient action on phones, tablets, and desktop screens.",
    result:
      "A professional HR-focused website that communicates expertise and creates a clear path from educational content to resource engagement and lead generation.",
  },
  {
    id: "centica",
    title: "Centica",
    tagline: "A structured corporate platform for business transformation, ERP, staffing, and systems integration.",
    clientType: "Consulting / ERP services",
    url: "https://centica.com/",
    badge: "WordPress · Corporate UX · Content Architecture",
    stack: ["WordPress", "Page Builder", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Contact Forms", "Blog", "SEO"],
    overview:
      "Centica is a consulting and professional-services company focused on business transformation, transition, ERP and IT services, project management, advisory services, staffing, and systems integration. The website serves clients, partners, and potential employees through dedicated service, company, career, news, and contact content.",
    goals: [
      "Create a professional consulting-company website",
      "Communicate complex services through a clear corporate structure",
      "Establish a strong identity and present company values",
      "Support recruitment and partnership opportunities",
      "Generate business inquiries with a scalable content system",
    ],
    role: "I delivered the WordPress development, corporate UI/UX, information architecture, responsive frontend, service sections, blog and news structure, career content, contact forms, and website optimization.",
    process: [
      "Analyzed the company's consulting service portfolio",
      "Created a clear corporate information architecture",
      "Structured services, company information, careers, news, and contact pathways",
      "Developed pages for each consulting discipline",
      "Implemented blog, news, career, and inquiry functionality",
      "Optimized responsive behavior and refined usability",
    ],
    features: [
      "Corporate consulting website",
      "Business transformation, ERP, IT, and advisory services",
      "Project management, staffing, and integration services",
      "Career and partner content",
      "Blog and news sections",
      "Contact forms and responsive layouts",
    ],
    challenges: [
      {
        challenge: "Several complex consulting disciplines serve different business needs.",
        solution: "Clearly defined service categories help visitors understand the company's capabilities without navigating a confusing structure.",
      },
      {
        challenge: "The corporate site needed to feel professional without becoming visually generic.",
        solution: "Modern sections, clear typography, concise content, and strong call-to-action placement balance authority with personality.",
      },
      {
        challenge: "The website serves clients, partners, and potential employees.",
        solution: "Separate pathways were created for services, company information, careers, news, partnerships, and contact.",
      },
    ],
    responsive:
      "Service navigation, corporate content, careers, news, and inquiry paths were optimized to remain clear and distinct across all common screen sizes.",
    result:
      "A structured corporate consulting website bringing together business transformation, ERP expertise, staffing, integration, company information, careers, and lead generation.",
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
