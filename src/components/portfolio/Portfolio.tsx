import { useState } from "react";
import { ArrowUpRight, ExternalLink, Globe, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LiveShot from "./LiveShot";
import mushroomsMarketShot from "@/assets/portfolio/mushrooms-market.jpg";

type Project = {
  id: string;
  title: string;
  tagline: string;
  clientType: string;
  url: string;
  image?: string;
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
    id: "dioxa-skincare",
    title: "Dioxa Skincare",
    tagline: "A complete online beauty store for skincare, haircare, and body-care products.",
    clientType: "Beauty / Skincare e-commerce",
    url: "https://dioxaskincare.com/",
    badge: "WordPress · WooCommerce · E-commerce",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "Responsive Web Design", "SEO"],
    overview:
      "Dioxa Skincare is a Bangladesh-based online beauty retailer offering skincare, haircare, and body-care products from international brands. The storefront brings together a broad catalog with shopping paths by skin type and concern, detailed product pages, local pricing, and delivery information.",
    goals: [
      "Build a complete online storefront for beauty and personal-care products",
      "Make a large catalog easier to explore by product category, skin type, and concern",
      "Present product information, origin, pricing, and delivery terms clearly",
      "Create a smooth shopping experience for customers browsing on phones or computers",
      "Give the business a manageable platform for ongoing product and content updates",
    ],
    role: "I handled the website end to end, taking responsibility for the storefront planning, design and development, WooCommerce setup, product and category organization, responsive implementation, site configuration, and launch.",
    process: [
      "Mapped the store experience around product discovery, shopping categories, and customer needs",
      "Set up the WordPress and WooCommerce storefront and its core shopping structure",
      "Organized products and browsing paths around categories, skin types, and concerns",
      "Built product pages with clear descriptions, pricing, origin, and purchase actions",
      "Added customer-facing delivery, authenticity, and order-support information",
      "Refined and checked the shopping experience across desktop and mobile screens",
    ],
    features: [
      "Online catalog spanning skincare, haircare, and body-care products",
      "Browse-by-skin-type and browse-by-concern discovery sections",
      "Product categories, search, and detailed product pages",
      "Local currency pricing and WooCommerce cart and ordering flow",
      "Product origin and size information where available",
      "Cash-on-delivery information and free-delivery threshold messaging",
      "Order tracking, account, and wishlist access",
    ],
    challenges: [
      {
        challenge: "A wide product range can make it difficult for shoppers to find relevant items.",
        solution: "I structured discovery around familiar product categories, skin types, and skincare concerns, alongside product search.",
      },
      {
        challenge: "Customers need confidence in product details and delivery before ordering beauty products online.",
        solution: "I made product information, country of origin, authenticity messaging, local pricing, and delivery terms easy to find across the shopping journey.",
      },
      {
        challenge: "The store needed to keep product exploration and checkout practical on smaller screens.",
        solution: "I adapted the catalog, product details, and purchase flow for mobile browsing and touch-based use.",
      },
    ],
    responsive:
      "The store experience adapts across phones, tablets, and desktop screens, including product discovery, catalog browsing, product details, and purchase actions.",
    result:
      "A complete, responsive beauty e-commerce website that brings product discovery, detailed catalog pages, and online ordering together for Dioxa Skincare.",
  },
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
    id: "mushrooms-market",
    title: "Mushrooms Market",
    tagline: "A specialist online store for adaptogenic mushroom wellness products.",
    clientType: "Wellness / E-commerce",
    url: "https://mushrooms.market/",
    image: mushroomsMarketShot,
    badge: "E-commerce · Product UX · SEO",
    stack: ["E-commerce CMS", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Product Catalog", "Online Payments", "SEO"],
    overview:
      "Mushrooms Market is a specialist online retailer offering adaptogenic mushroom wellness products from established brands, including supplements, powders, drinks, gummies, tinctures, grow kits, and pet products.",
    goals: [
      "Create a trustworthy specialist destination for mushroom wellness products",
      "Make a broad product catalog easy to browse and understand",
      "Support discovery through categories, brands, benefits, and educational content",
      "Build a smooth path from product research to purchase",
      "Strengthen organic visibility with useful, search-friendly content",
    ],
    role: "I supported the e-commerce experience through storefront development, product and collection organization, responsive presentation, conversion-focused improvements, content structure, and website optimization.",
    process: [
      "Reviewed the product range, customer needs, and wellness categories",
      "Organized products into clear collections and shopping pathways",
      "Structured product information for quick comparison and confident decisions",
      "Refined merchandising, promotional, and trust-building sections",
      "Improved mobile shopping and checkout usability",
      "Optimized content and storefront performance for search and conversion",
    ],
    features: [
      "Large multi-brand wellness product catalog",
      "Product collections for capsules, powders, drinks, gummies, tinctures, and more",
      "Product pricing, promotions, and direct purchase actions",
      "Brand and benefit-focused product discovery",
      "Educational wellness content and customer resources",
      "Responsive storefront and streamlined checkout journey",
    ],
    challenges: [
      {
        challenge: "A large and varied catalog could make product discovery feel overwhelming.",
        solution: "Clear collections, product types, and consistent merchandising help shoppers narrow choices quickly.",
      },
      {
        challenge: "Wellness customers need enough information to compare unfamiliar products confidently.",
        solution: "Structured product details, benefit-led content, and educational resources make the range easier to understand.",
      },
      {
        challenge: "The storefront needed to balance educational content with a direct purchase journey.",
        solution: "Prominent product cards, prices, promotions, and purchase actions keep shopping accessible throughout the experience.",
      },
    ],
    responsive:
      "Product grids, category navigation, promotional content, and purchase actions were arranged for easy browsing and checkout across phones, tablets, and desktop screens.",
    result:
      "A focused wellness marketplace that combines a broad adaptogenic mushroom catalog with clear product discovery, educational content, and a convenient online shopping experience.",
  },
];

const rankedProjectIds = [
  "dioxa-skincare",
  "mushrooms-market",
  "planet-m",
  "vintage-tours",
  "bush-2-city-adventure",
  "modasource",
  "katie-austin",
  "voice7-news",
  "abdullah-shoe",
  "gema-designs",
] as const;

const rankedProjects = rankedProjectIds.flatMap((id) => {
  const project = projects.find((item) => item.id === id);
  return project ? [project] : [];
});

export const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [fullView, setFullView] = useState(false);

  const openCaseStudy = (project: Project) => {
    setFullView(false);
    setActive(project);
  };

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="mr-2 font-mono">03</span> Portfolio
          </div>
          <h2 className="mt-5 font-display text-5xl leading-none sm:text-7xl">
            Case <span className="italic font-light">studies.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Selected client work across e-commerce, travel, media, and digital services.
          </p>
        </div>

        <div className="space-y-7 sm:space-y-9">
          {rankedProjects.map((p, i) => (
            <article
              key={p.id}
              className="reveal group grid overflow-hidden rounded-3xl bg-foreground text-background md:grid-cols-2"
            >
              <button
                onClick={() => openCaseStudy(p)}
                className={`relative block aspect-[4/3] overflow-hidden bg-muted text-left md:aspect-auto md:min-h-[26rem] ${i % 2 === 1 ? "md:order-2" : ""}`}
                aria-label={`Open case study for ${p.title}`}
              >
                <LiveShot url={p.url} alt={`${p.title} website homepage`} image={p.image} />
              </button>

              <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-12">
                <div className="flex items-center justify-between gap-4 text-xs text-background/60">
                  <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-right uppercase tracking-[0.16em]">{p.clientType}</span>
                </div>
                <div className="mt-8 text-xs text-background/65">{p.badge}</div>
                <h3 className="mt-3 break-words font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{p.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/65 sm:text-base">{p.tagline}</p>

                <div className="mt-7 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold">Challenge</h4>
                    <p className="mt-1 leading-relaxed text-background/65">{p.challenges[0]?.challenge ?? p.overview}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What I did</h4>
                    <p className="mt-1 line-clamp-3 leading-relaxed text-background/65">{p.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Result</h4>
                    <p className="mt-1 line-clamp-2 leading-relaxed text-background/65">{p.result}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button asChild className="h-10 rounded-full bg-background px-5 text-foreground hover:bg-background/90">
                    <button onClick={() => openCaseStudy(p)}>
                      View case study <ArrowUpRight />
                    </button>
                  </Button>
                  <Button asChild variant="outline" className="h-10 rounded-full border-background/35 bg-transparent px-5 text-background hover:bg-background hover:text-foreground">
                    <a href={p.url} target="_blank" rel="noreferrer">
                      <Globe /> Visit website
                    </a>
                  </Button>
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
      <Dialog open={!!active} onOpenChange={(o) => { if (!o) { setActive(null); setFullView(false); } }}>
        <DialogContent className={fullView
          ? "fixed inset-2 left-2 top-2 h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-none max-h-none translate-x-0 translate-y-0 overflow-hidden rounded-lg p-0 gap-0"
          : "w-[calc(100vw-1.5rem)] max-w-3xl max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-2xl sm:rounded-3xl p-0 gap-0"}
        >
          {active && (
            fullView ? (
              <div className="relative h-full w-full overflow-hidden bg-background">
                <LiveShot url={active.url} alt={`${active.title} full website`} loading="eager" interactive native image={active.image} />
                <div className="absolute right-3 top-3 z-10 flex gap-2">
                  <Button asChild size="icon" variant="secondary" aria-label="Open original website" title="Open original website">
                    <a href={active.url} target="_blank" rel="noreferrer"><ExternalLink /></a>
                  </Button>
                  <Button size="icon" variant="secondary" onClick={() => setFullView(false)} aria-label="Back to case study" title="Back to case study">
                    <Minimize2 />
                  </Button>
                </div>
              </div>
            ) : (
            <div className="min-w-0">
              <div className="relative aspect-[16/9] min-h-72 w-full min-w-0 overflow-hidden bg-muted">
                <LiveShot
                  url={active.url}
                  alt={`${active.title} website preview`}
                  loading="eager"
                  image={active.image}
                />
                <Button size="icon" variant="secondary" className="absolute right-3 top-3 z-10" onClick={() => setFullView(true)} aria-label="View full website" title="View full website">
                  <Maximize2 />
                </Button>
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
            )
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
