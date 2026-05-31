import { createFileRoute } from "@tanstack/react-router";
import { DemoPage, type DemoConfig } from "@/components/site/DemoPage";
import salonImg from "@/assets/demo-salon.jpg";
import { CONTACT } from "@/lib/contact";

const cfg: DemoConfig = {
  brand: "GlowUp Salon",
  tagline: "Hair · Skin · Nails",
  heroTitle: "Your glow, perfected.",
  heroSubtitle:
    "A modern unisex salon in Pune offering hair, skin, and beauty services by experienced stylists in a calm, premium setting.",
  ctaLabel: "Book an Appointment",
  heroImg: salonImg,
  about: {
    title: "Where self-care feels like a treat",
    body:
      "From a quick blow-dry to a full bridal package, our team blends modern techniques with personal attention. Premium products, hygienic tools, and no rushed appointments — ever.",
    bullets: [
      "Senior stylists with 10+ years experience",
      "L'Oréal, Wella & O3+ professional products",
      "Single-use disposables for every service",
      "Bridal & pre-wedding packages",
    ],
  },
  servicesEyebrow: "Services",
  servicesTitle: "Salon Menu",
  services: [
    { name: "Haircut & Style", price: "₹599", desc: "Consultation, wash, cut, and blow-dry." },
    { name: "Hair Color (Global)", price: "₹2,499", desc: "Ammonia-free premium hair color." },
    { name: "Keratin Treatment", price: "₹4,999", desc: "Frizz-free, salon-smooth hair for 3 months." },
    { name: "Classic Facial", price: "₹1,299", desc: "Cleanse, scrub, massage, mask. Glowing skin." },
    { name: "Gel Manicure", price: "₹899", desc: "Long-lasting gel polish, chip-free for 2 weeks." },
    { name: "Bridal Package", price: "₹14,999", desc: "Hair, makeup, nails, drape — full day pampering." },
  ],
  gallery: [salonImg, salonImg, salonImg, salonImg, salonImg, salonImg],
  testimonials: [
    { quote: "Got my keratin done here — soft, shiny hair and the salon smells like a spa.", author: "Anjali M.", role: "Client" },
    { quote: "Booked their bridal package. Stress-free morning and stunning photos.", author: "Pooja R.", role: "Bride" },
    { quote: "Finally found a stylist who listens. Best haircut I've had in years.", author: "Vikram S.", role: "Client" },
  ],
  address: "Koregaon Park, Pune, Maharashtra 411001",
  hours: "Tue–Sun · 10:00 AM – 9:00 PM · Mon closed",
  email: "hello@glowupsalon.in",
  phone: CONTACT.phone,
  whatsappNumber: CONTACT.whatsappNumber,
  accent: "#db2777",
};

export const Route = createFileRoute("/demos/salon")({
  head: () => ({
    meta: [
      { title: "GlowUp Salon — Demo by Advait Patil" },
      { name: "description", content: "Demo salon website with services, gallery, testimonials, and contact." },
    ],
  }),
  component: () => <DemoPage cfg={cfg} />,
});
