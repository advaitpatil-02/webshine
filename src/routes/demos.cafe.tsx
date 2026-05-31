import { createFileRoute } from "@tanstack/react-router";
import { DemoPage, type DemoConfig } from "@/components/site/DemoPage";
import cafeImg from "@/assets/demo-cafe.jpg";
import { CONTACT } from "@/lib/contact";

const cfg: DemoConfig = {
  brand: "BrewNest Café",
  tagline: "Specialty coffee · Pune",
  heroTitle: "Slow mornings, great coffee.",
  heroSubtitle:
    "A cozy neighborhood café serving single-origin espresso, fresh bakes, and all-day breakfast in the heart of Pune.",
  ctaLabel: "Reserve a Table",
  heroImg: cafeImg,
  about: {
    title: "Roasted in-house, served with care",
    body:
      "BrewNest started as a tiny corner roastery and grew into a warm space loved by students, freelancers, and weekend brunchers. Every cup is brewed from beans roasted just down the street.",
    bullets: [
      "Single-origin coffees rotated weekly",
      "Vegetarian & vegan menu, made fresh daily",
      "Free Wi-Fi and plenty of plug points",
      "Pet-friendly outdoor seating",
    ],
  },
  servicesEyebrow: "Menu",
  servicesTitle: "Menu Highlights",
  services: [
    { name: "Cappuccino", price: "₹180", desc: "Double-shot espresso with silky steamed milk." },
    { name: "Cold Brew", price: "₹210", desc: "Slow-steeped 18 hours. Smooth, low-acid, refreshing." },
    { name: "Avocado Toast", price: "₹320", desc: "Sourdough, smashed avocado, chilli flakes, lime." },
    { name: "Mushroom Croissant", price: "₹260", desc: "Buttery croissant with truffle mushrooms." },
    { name: "Banoffee Pie", price: "₹240", desc: "Banana, toffee, whipped cream, biscuit base." },
    { name: "Masala Chai", price: "₹120", desc: "Hand-pulled, cardamom & ginger spiced." },
  ],
  gallery: [cafeImg, cafeImg, cafeImg, cafeImg, cafeImg, cafeImg],
  testimonials: [
    { quote: "Best flat white in Pune, hands down. The staff remember your order.", author: "Riya S.", role: "Regular" },
    { quote: "Love working from here on weekends — quiet, comfy, perfect coffee.", author: "Aman K.", role: "Designer" },
    { quote: "Their banoffee pie ruined every other dessert for me.", author: "Meera J.", role: "Foodie" },
  ],
  address: "FC Road, Shivajinagar, Pune, Maharashtra 411005",
  hours: "Mon–Sun · 8:00 AM – 11:00 PM",
  email: "hello@brewnest.cafe",
  phone: CONTACT.phone,
  whatsappNumber: CONTACT.whatsappNumber,
  accent: "#b45309",
};

export const Route = createFileRoute("/demos/cafe")({
  head: () => ({
    meta: [
      { title: "BrewNest Café — Demo by Advait Patil" },
      { name: "description", content: "Demo café website with menu, gallery, testimonials, and contact." },
    ],
  }),
  component: () => <DemoPage cfg={cfg} />,
});
