export const TREATMENT_CATEGORIES = [
  "Medical Dermatology",
  "Cosmetic Dermatology",
  "Hair Treatments",
  "Laser Treatments",
  "Procedures & Surgeries",
] as const;

export type TreatmentCategory =
  (typeof TREATMENT_CATEGORIES)[number];

export interface Treatment {
  slug: string;
  name: string;
  shortName: string;
  category: TreatmentCategory;

  tagline: string;
  heroImage: string;
  icon: string;

  overview: string;

  symptoms: string[];
  causes: string[];

  process: {
    step: string;
    title: string;
    description: string;
  }[];

  benefits: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  duration: string;
  sessions: string;
  downtime: string;

  featured?: boolean;
}
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  date: string;
}

export interface TeamAchievement {
  year: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Clinic" | "Equipment" | "Before & After" | "Facility";
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
