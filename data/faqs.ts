import { FAQ, NavLink } from "@/types";
import { TREATMENTS } from "./treatments";

export const GENERAL_FAQS: FAQ[] = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "Walk-ins are welcome, but we recommend booking an appointment via call or WhatsApp so you're seen with minimal waiting time, especially for procedures.",
  },
  {
    question: "What are the clinic's consultation fees?",
    answer:
      "The standard consultation fee is ₹400. Procedure costs are quoted separately after Dr. Patil evaluates your specific concern.",
  },
  {
    question: "Which areas do patients usually travel from?",
    answer:
      "Alongside Latur city, we regularly see patients from Nilanga, Udgir, Ausa, Ahmedpur and surrounding towns in the Latur district.",
  },
  {
    question: "Is the clinic hygienic and safe for procedures?",
    answer:
      "Yes. All procedure rooms follow strict sterilisation protocols, and single-use disposables are used wherever applicable for patient safety.",
  },
  {
    question: "Do you treat children for skin conditions?",
    answer:
      "Yes, paediatric dermatology concerns such as eczema, fungal infections and allergies are treated with age-appropriate care.",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-clinic",
    children: [
      { label: "About the Clinic", href: "/about-clinic", description: "Our story, values and facility" },
      { label: "About Dr. Anand Patil", href: "/doctor", description: "Qualifications & experience" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: TREATMENTS.slice(0, 8).map((t) => ({ label: t.shortName, href: `/treatments/${t.slug}` })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_TREATMENT_LINKS = TREATMENTS.slice(0, 6);
