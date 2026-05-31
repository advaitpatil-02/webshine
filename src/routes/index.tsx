import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase, Coffee, Dumbbell, User, LayoutTemplate,
  RefreshCw, MapPin, Search, MessageCircle, ArrowRight, Check,
  Zap, Smartphone, Wallet, Sparkles, Phone, Mail,
} from "lucide-react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero-portrait.jpg";
import cafeImg from "@/assets/demo-cafe.jpg";
import gymImg from "@/assets/demo-gym.jpg";
import salonImg from "@/assets/demo-salon.jpg";
import { CONTACT, WHATSAPP_URL, WHATSAPP_LINK_ATTRS, telHref, mailHref } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advait Patil — Websites for Local Businesses" },
      { name: "description", content: "Modern, mobile-friendly websites for cafés, salons, gyms, clinics, and shops. WhatsApp, Google Maps & contact forms included." },
      { property: "og:title", content: "Advait Patil — Websites for Local Businesses" },
      { property: "og:description", content: "Get a professional website with WhatsApp, Google Maps, contact forms, and mobile-friendly design." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <Services />
      <Demos />
      <Pricing />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            Freelance Web Developer
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] text-foreground md:text-6xl">
            I Build{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Modern Websites
            </span>{" "}
            for Local Businesses
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Get a professional website with WhatsApp, Google Maps, contact forms,
            and mobile-friendly design — built fast, priced fairly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
            >
              View Demo Websites <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              {...WHATSAPP_LINK_ATTRS}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <Stat n="20+" label="Websites delivered" />
            <Stat n="15 days" label="Avg. turnaround" />
            <Stat n="5★" label="Client rating" />
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <img
            src={heroImg}
            alt="Advait Patil, freelance web developer"
            width={1024}
            height={1024}
            className="relative rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-foreground">{n}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Briefcase, title: "Business Website", desc: "Multi-page site that builds trust and brings in calls." },
  { icon: Coffee, title: "Café / Menu Website", desc: "Showcase your menu, photos, and reservations beautifully." },
  { icon: Dumbbell, title: "Salon / Gym Website", desc: "Memberships, classes, and bookings done right." },
  { icon: User, title: "Portfolio Website", desc: "A polished personal site to stand out from the crowd." },
  { icon: LayoutTemplate, title: "Landing Page", desc: "High-converting single page for offers and campaigns." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Refresh an old site into a modern, fast experience." },
  { icon: MapPin, title: "Maps + WhatsApp", desc: "Google Maps and WhatsApp chat integrated cleanly." },
  { icon: Search, title: "Basic SEO Setup", desc: "Meta tags, sitemaps, and on-page SEO essentials." },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Everything your local business needs online">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary-glow/40 hover:shadow-[var(--shadow-elegant)]"
          >
            <div
              className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- DEMOS ---------- */
const demos = [
  { name: "BrewNest Café", desc: "Cozy café site with menu, gallery, and reservation form.", img: cafeImg, tag: "Café", to: "/demos/cafe" as const },
  { name: "IronPulse Gym", desc: "Membership plans, class schedule, and trainer profiles.", img: gymImg, tag: "Gym", to: "/demos/gym" as const },
  { name: "GlowUp Salon", desc: "Service list, booking, and WhatsApp inquiries on one page.", img: salonImg, tag: "Salon", to: "/demos/salon" as const },
];

function Demos() {
  return (
    <Section
      id="demos"
      eyebrow="Demo Projects"
      title="Real-world website examples"
      muted
    >
      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((d) => (
          <article
            key={d.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary">
                {d.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-foreground">{d.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              <Link
                to={d.to}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-glow hover:gap-2 transition-all"
              >
                View Demo Website <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PRICING ---------- */
const plans = [
  {
    name: "Basic", price: "₹3,999", desc: "Perfect for getting online fast.",
    features: ["1–3 pages", "Mobile responsive", "WhatsApp button", "Contact form", "Delivery in 5 days"],
  },
  {
    name: "Standard", price: "₹7,999", desc: "Most popular for local businesses.", featured: true,
    features: ["Up to 6 pages", "Google Maps + WhatsApp", "Gallery / Menu section", "Basic SEO setup", "Delivery in 7 days"],
  },
  {
    name: "Premium", price: "₹14,999", desc: "Everything you need to grow.",
    features: ["8+ pages, fully custom", "Bookings / inquiries", "Advanced SEO", "Speed optimization", "30 days support"],
  },
];

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, transparent packages">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
              p.featured
                ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] md:-translate-y-2"
                : "border-border bg-card shadow-[var(--shadow-soft)] hover:-translate-y-1"
            }`}
            style={p.featured ? { background: "var(--gradient-primary)" } : undefined}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary shadow">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {p.desc}
            </p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">{p.price}</span>
              <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ project</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-primary-foreground" : "text-primary-glow"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                p.featured
                  ? "bg-background text-primary"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        * Domain and hosting charges are separate if needed (approx ₹1,500/year).
      </p>
    </Section>
  );
}

/* ---------- WHY ME ---------- */
const reasons = [
  { icon: Zap, title: "Fast delivery", desc: "Most sites live in 5–7 days." },
  { icon: Smartphone, title: "Mobile-friendly", desc: "Looks great on every device." },
  { icon: Wallet, title: "Affordable pricing", desc: "Built for small businesses." },
  { icon: MapPin, title: "Maps + WhatsApp", desc: "Built-in customer channels." },
  { icon: Sparkles, title: "Clean modern look", desc: "Designs that build trust." },
];

function WhyMe() {
  return (
    <Section id="why" eyebrow="Why Choose Me" title="A developer who gets local businesses" muted>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
            <div
              className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <r.icon className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build your website">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-muted-foreground">
            Tell me about your business and what you need. I'll get back to you within
            a few hours with ideas and a quote.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href={WHATSAPP_URL}
              {...WHATSAPP_LINK_ATTRS}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-whatsapp"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-foreground">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Fastest way to reach me</div>
              </div>
            </a>
            <a href={telHref} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary-glow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-foreground">{CONTACT.phone}</div>
                <div className="text-xs text-muted-foreground">Mon–Sat, 10am–8pm</div>
              </div>
            </a>
            <a href={mailHref} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary-glow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-foreground">{CONTACT.email}</div>
                <div className="text-xs text-muted-foreground">For detailed briefs</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-foreground">{CONTACT.location}</div>
                <div className="text-xs text-muted-foreground">Available across India, remote</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Advait Patil. Websites for local businesses.</p>
        <div className="flex gap-5">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- shared ---------- */
function Section({
  id, eyebrow, title, children, muted,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={muted ? "bg-secondary/40" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
