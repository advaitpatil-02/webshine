import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_URL, WHATSAPP_LINK_ATTRS } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_inquiries").insert({
      name: parsed.data.name,
      business: parsed.data.business || null,
      phone: parsed.data.phone,
      message: parsed.data.message,
    });
    if (error) {
      console.error(error);
      toast.error("Couldn't save your inquiry. Use Chat on WhatsApp below instead.");
    } else {
      toast.success("Thanks! Your inquiry has been received. I'll be in touch soon.");
      form.reset();
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Your name" maxLength={100} required
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow" />
        <input name="business" placeholder="Business name" maxLength={100}
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow" />
      </div>
      <input name="phone" placeholder="Phone number" maxLength={20} required
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow" />
      <textarea name="message" placeholder="What kind of website do you need?" rows={5} maxLength={1000} required
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow" />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
      <a
        href={WHATSAPP_URL}
        {...WHATSAPP_LINK_ATTRS}
        className="inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
      >
        Chat on WhatsApp
      </a>
    </form>
  );
}
