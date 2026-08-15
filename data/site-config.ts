export const SITE_CONFIG = {
  name: "Dr. Anand Patil Skin & Cosmetic Laser Clinic",
  shortName: "Dr. Anand Patil Skin Clinic",
  tagline: "Healthy Skin, Confident You",
  description:
    "Latur's trusted dermatology and cosmetic laser clinic, led by Dr. Anand Patil. 24+ years of experience in medical dermatology, cosmetic treatments, laser therapy, hair restoration and dermatosurgery.",
  url: "https://www.dranandpatilskinclinic.in",
  ogImage: "/images/og-cover.jpg",

  doctor: {
    name: "Dr. Anand Patil",
    credentials: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    title: "Consultant Dermatologist & Cosmetic Laser Surgeon",
    experience: "24+ Years",
    consultationFee: "₹400",
  },

  contact: {
    phonePrimary: "+91 8275373964",
    phonePrimaryRaw: "+918275373964",
    phoneLandline: "02382 251227",
    phoneLandlineRaw: "+912382251227",
    phoneSecondary: "+91 90497 79611",
    phoneSecondaryRaw: "+919049779611",
    whatsapp: "919766996651",
    email: "care@dranandpatilskinclinic.in",
  },

  address: {
    line1: "Opp. Bus Stand, Latur Main Road",
    line2: "Ganj Golai",
    city: "Latur",
    state: "Maharashtra",
    pincode: "413512",
    country: "India",
    full: "Opp. Bus Stand, Latur Main Road, Ganj Golai, Latur - 413512, Maharashtra, India",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Dr+Anand+Patil+Skin+Clinic+Ganj+Golai+Latur&output=embed",
    mapLinkUrl: "https://maps.app.goo.gl/Kx7q4v2yQ9wS8sVc9",
    latitude: 18.3995,
    longitude: 76.5795,
  },

  hours: [
    { day: "Monday", time: "10:00 AM – 9:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 9:00 PM" },
    { day: "Thursday", time: "10:00 AM – 9:00 PM" },
    { day: "Friday", time: "10:00 AM – 9:00 PM" },
    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    facebook: "https://facebook.com/dranandpatilskinclinic",
    instagram: "https://instagram.com/dranandpatilskinclinic",
    youtube: "https://youtube.com/@dranandpatilskinclinic",
    whatsapp: "https://wa.me/919766996651",
  },

  stats: [
    { value: 24, suffix: "+", label: "Years of Experience" },
    { value: 50000, suffix: "+", label: "Patients Treated" },
    { value: 20, suffix: "+", label: "Skin & Hair Treatments" },
    { value: 4.3, suffix: "/5", label: "Patient Rating", isDecimal: true },
  ],

  trustLogos: [
    "Indian Association of Dermatologists",
    "IADVL Maharashtra",
    "Association of Cutaneous Surgeons",
    "MUHS Affiliated",
    "ISHRS Member",
  ],
} as const;
