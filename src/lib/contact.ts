export const CONTACT = {
  name: "Advait Patil",
  email: "patiladvait630@gmail.com",
  phone: "+91 70281 47019",
  phoneRaw: "7028147019",
  whatsappNumber: "917028147019",
  location: "Pune, Maharashtra",
};

export const WHATSAPP_URL =
  "https://wa.me/917028147019?text=Hi%20Advait%2C%20I%20want%20a%20website%20for%20my%20business";

export const WHATSAPP_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const telHref = `tel:+91${CONTACT.phoneRaw}`;
export const mailHref = `mailto:${CONTACT.email}`;
