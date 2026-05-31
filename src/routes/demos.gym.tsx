import { createFileRoute } from "@tanstack/react-router";
import { DemoPage, type DemoConfig } from "@/components/site/DemoPage";
import gymImg from "@/assets/demo-gym.jpg";
import { CONTACT } from "@/lib/contact";

const cfg: DemoConfig = {
  brand: "IronPulse Gym",
  tagline: "Train hard · Live strong",
  heroTitle: "Build the body. Earn the mindset.",
  heroSubtitle:
    "Premium strength & conditioning gym in Pune with certified coaches, group classes, and 24/7 access for members.",
  ctaLabel: "Start a Free Trial",
  heroImg: gymImg,
  about: {
    title: "More than a gym — it's a community",
    body:
      "IronPulse is built around progress you can measure. Whether you're chasing your first pull-up or your next PR, our coaches design plans that get you there safely.",
    bullets: [
      "5,000 sq ft of strength & cardio equipment",
      "Certified personal trainers & nutritionists",
      "Group classes: HIIT, CrossFit, Yoga, Zumba",
      "24/7 member access with secure entry",
    ],
  },
  servicesEyebrow: "Memberships",
  servicesTitle: "Plans & Classes",
  services: [
    { name: "Monthly Membership", price: "₹2,499", desc: "Full gym access, all group classes." },
    { name: "Quarterly", price: "₹6,499", desc: "3 months unlimited + 1 free PT session." },
    { name: "Annual", price: "₹19,999", desc: "12 months + nutrition plan + 5 PT sessions." },
    { name: "Personal Training", price: "₹999/hr", desc: "One-on-one programming with a certified coach." },
    { name: "Group HIIT", price: "Included", desc: "45-min high intensity classes, 4x daily." },
    { name: "Yoga & Recovery", price: "Included", desc: "Daily morning & evening recovery sessions." },
  ],
  gallery: [gymImg, gymImg, gymImg, gymImg, gymImg, gymImg],
  testimonials: [
    { quote: "Lost 12 kg in 5 months. The coaches actually care about your form and progress.", author: "Rahul T.", role: "Member · 1 year" },
    { quote: "The HIIT classes are addictive. Clean equipment, great energy.", author: "Sneha P.", role: "Member · 8 months" },
    { quote: "Best gym I've trained in. 24/7 access is a game-changer.", author: "Kunal D.", role: "Member · 2 years" },
  ],
  address: "Baner Road, Baner, Pune, Maharashtra 411045",
  hours: "Open 24/7 for members · Walk-ins 6 AM – 10 PM",
  email: "hello@ironpulse.fit",
  phone: CONTACT.phone,
  whatsappNumber: CONTACT.whatsappNumber,
  accent: "#dc2626",
};

export const Route = createFileRoute("/demos/gym")({
  head: () => ({
    meta: [
      { title: "IronPulse Gym — Demo by Advait Patil" },
      { name: "description", content: "Demo gym website with memberships, classes, gallery, and contact." },
    ],
  }),
  component: () => <DemoPage cfg={cfg} />,
});
