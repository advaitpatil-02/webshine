import { Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Star, Mail, Clock } from "lucide-react";
import { CONTACT, WHATSAPP_LINK_ATTRS } from "@/lib/contact";

export type DemoConfig = {
  brand: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  heroImg: string;
  about: { title: string; body: string; bullets: string[] };
  servicesTitle: string;
  servicesEyebrow: string;
  services: { name: string; price: string; desc: string }[];
  gallery: string[];
  testimonials: { quote: string; author: string; role: string }[];
  address: string;
  hours: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  accent: string; // CSS color string
};

export function DemoPage({ cfg }: { cfg: DemoConfig }) {
  const wa = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(`Hi ${cfg.brand}, I'd like to make a booking.`)}`;
  const tel = `tel:${cfg.phone.replace(/\s+/g, "")}`;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(cfg.address)}&output=embed`;

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ ["--demo-accent" as any]: cfg.accent }}>
      {/* Top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <span className="font-display text-lg font-bold" style={{ color: cfg.accent }}>
            {cfg.brand}
          </span>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#services" className="hover:text-foreground">{cfg.servicesTitle}</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <Link
            to="/"
            hash="demos"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={cfg.heroImg} alt={cfg.brand} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-24 text-white md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: cfg.accent }} />
            {cfg.tagline}
          </div>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            {cfg.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">{cfg.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              style={{ background: cfg.accent }}
            >
              {cfg.ctaLabel}
            </a>
            <a
              href={wa}
              {...WHATSAPP_LINK_ATTRS}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accent }}>
              About Us
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{cfg.about.title}</h2>
            <p className="mt-4 text-muted-foreground">{cfg.about.body}</p>
            <ul className="mt-6 grid gap-2 text-sm">
              {cfg.about.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: cfg.accent }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl" style={{ background: cfg.accent }} />
            <img
              src={cfg.gallery[0]}
              alt="About"
              className="relative aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accent }}>
              {cfg.servicesEyebrow}
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{cfg.servicesTitle}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.services.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <span className="font-display text-lg font-bold" style={{ color: cfg.accent }}>
                    {s.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accent }}>
            Gallery
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">A look inside</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {cfg.gallery.map((g, i) => (
            <img
              key={i}
              src={g}
              alt={`${cfg.brand} ${i + 1}`}
              loading="lazy"
              className={`w-full rounded-2xl border border-border object-cover ${
                i % 5 === 0 ? "aspect-[4/5] md:row-span-2 md:aspect-[4/5]" : "aspect-square"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accent }}>
              Testimonials
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">What our customers say</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cfg.testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex gap-0.5" style={{ color: cfg.accent }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-xs">
                  <span className="font-semibold text-foreground">{t.author}</span>
                  <span className="text-muted-foreground"> · {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: cfg.accent }}>
              Visit Us
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Come say hi</h2>
            <div className="mt-6 space-y-3 text-sm">
              <InfoRow icon={<MapPin className="h-5 w-5" />} accent={cfg.accent} title="Address" value={cfg.address} />
              <InfoRow icon={<Clock className="h-5 w-5" />} accent={cfg.accent} title="Hours" value={cfg.hours} />
              <a href={tel}>
                <InfoRow icon={<Phone className="h-5 w-5" />} accent={cfg.accent} title="Call" value={cfg.phone} />
              </a>
              <a href={`mailto:${cfg.email}`}>
                <InfoRow icon={<Mail className="h-5 w-5" />} accent={cfg.accent} title="Email" value={cfg.email} />
              </a>
              <a href={wa} {...WHATSAPP_LINK_ATTRS}>
                <InfoRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  accent="var(--whatsapp)"
                  title="WhatsApp"
                  value="Chat on WhatsApp"
                />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title={`${cfg.brand} location`}
              src={mapsEmbed}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © 2026 {cfg.brand}. Demo site built by{" "}
            <Link to="/" className="font-semibold text-primary hover:underline">
              {CONTACT.name}
            </Link>
            .
          </p>
          <Link
            to="/"
            hash="demos"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}

function InfoRow({
  icon, accent, title, value,
}: { icon: React.ReactNode; accent: string; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
        style={{ background: accent }}
      >
        {icon}
      </span>
      <div>
        <div className="font-semibold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{title}</div>
      </div>
    </div>
  );
}
