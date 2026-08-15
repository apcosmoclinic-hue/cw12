import { Treatment } from "@/types";

export const TREATMENTS: Treatment[] = [
  {
  slug: "acne-treatment",
  name: "Acne Treatment",
  shortName: "Acne",
  category: "Medical Dermatology",
  tagline: "Advanced treatment for active acne and acne-prone skin",
  heroImage: "/images/treatments/acne.jpg",
  icon: "Sparkles",
  overview:
    "Comprehensive acne treatment focused on reducing active breakouts, preventing recurrence, and improving overall skin health.",

  symptoms: [
    "Pimples and breakouts",
    "Blackheads and whiteheads",
    "Oily skin",
    "Acne scars and marks"
  ],

  causes: [
    "Hormonal changes",
    "Excess oil production",
    "Blocked pores",
    "Bacterial growth"
  ],

  process: [
    {
      step: "01",
      title: "Skin Assessment",
      description: "Detailed examination of acne severity and skin type."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Personalized treatment plan based on acne condition."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Medications, peels, lasers, or acne therapies are performed."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Regular monitoring and skincare guidance."
    }
  ],

  benefits: [
    "Reduced acne breakouts",
    "Improved skin texture",
    "Prevention of acne scars",
    "Healthier-looking skin"
  ],

  faqs: [
    {
      question: "How many sessions are required?",
      answer: "The number of sessions depends on acne severity and response to treatment."
    },
    {
      question: "Can acne scars be treated?",
      answer: "Yes, acne scars can be improved using lasers, peels, and other procedures."
    }
  ],

  duration: "30-45 Minutes",
  sessions: "4-8 Sessions",
  downtime: "Minimal",
  featured: true,
},

  {
  slug: "pigmentation-treatment",
  name: "Pigmentation Treatment",
  shortName: "Pigmentation",
  category: "Cosmetic Dermatology",
  tagline: "Even skin tone and brighter complexion",
  heroImage: "/images/treatments/pigmentation.jpg",
  icon: "Sun",
  overview:
    "Treatment options designed to reduce pigmentation, dark spots, tanning, and uneven skin tone.",

  symptoms: [
    "Dark spots and patches on the skin",
    "Uneven skin tone",
    "Sun-induced tanning",
    "Post-acne pigmentation marks"
  ],

  causes: [
    "Excess sun exposure",
    "Hormonal changes",
    "Post-inflammatory pigmentation",
    "Age-related skin changes"
  ],

  process: [
    {
      step: "01",
      title: "Skin Assessment",
      description: "Detailed evaluation of pigmentation type and severity."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Customized treatment plan based on skin type and condition."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Chemical peels, laser therapy, or medical treatments are performed."
    },
    {
      step: "04",
      title: "Follow-up Care",
      description: "Sun protection and skincare guidance for long-lasting results."
    }
  ],

  benefits: [
    "Reduced pigmentation and dark spots",
    "More even skin tone",
    "Brighter complexion",
    "Improved skin texture"
  ],

  faqs: [
    {
      question: "How many sessions are required?",
      answer: "Most patients require 4-6 sessions depending on the severity of pigmentation."
    },
    {
      question: "Is there any downtime?",
      answer: "Most pigmentation treatments have little to no downtime."
    }
  ],

  duration: "20-30 Minutes",
  sessions: "4-6 Sessions",
  downtime: "None",
  featured: true,
},

  {
  slug: "chemical-peel",
  name: "Chemical Peel",
  shortName: "Chemical Peel",
  category: "Cosmetic Dermatology",
  tagline: "Reveal smoother and healthier skin",
  heroImage: "/images/treatments/chemical-peel.jpg",
  icon: "FlaskConical",
  overview:
    "Medical-grade chemical peels for acne, pigmentation, dullness, and skin rejuvenation.",

  symptoms: [
    "Dull and tired-looking skin",
    "Uneven skin tone",
    "Acne marks and pigmentation",
    "Rough skin texture"
  ],

  causes: [
    "Sun damage",
    "Acne and post-acne marks",
    "Dead skin buildup",
    "Age-related skin changes"
  ],

  process: [
    {
      step: "01",
      title: "Skin Analysis",
      description: "Assessment of skin type and concerns."
    },
    {
      step: "02",
      title: "Peel Selection",
      description: "Selection of the appropriate peel based on skin condition."
    },
    {
      step: "03",
      title: "Application",
      description: "Controlled application of the chemical peel."
    },
    {
      step: "04",
      title: "Recovery",
      description: "Post-treatment skincare and sun protection guidance."
    }
  ],

  benefits: [
    "Brighter complexion",
    "Reduced pigmentation",
    "Improved skin texture",
    "Healthier and rejuvenated skin"
  ],

  faqs: [
    {
      question: "Is chemical peeling painful?",
      answer: "Most patients experience only mild tingling or burning during the procedure."
    },
    {
      question: "How many sessions are required?",
      answer: "Usually 4-6 sessions are recommended for optimal results."
    }
  ],

  duration: "20-30 Minutes",
  sessions: "4-6 Sessions",
  downtime: "1-5 Days",
},

  {
  slug: "prp-therapy",
  name: "PRP Therapy",
  shortName: "PRP",
  category: "Hair Treatments",
  tagline: "Natural hair and skin rejuvenation therapy",
  heroImage: "/images/treatments/prp.jpg",
  icon: "Droplet",
  overview:
    "Platelet Rich Plasma therapy used for hair loss treatment and skin rejuvenation.",

  symptoms: [
    "Hair thinning",
    "Excessive hair fall",
    "Reduced hair density",
    "Dull and ageing skin"
  ],

  causes: [
    "Genetic hair loss",
    "Age-related changes",
    "Stress-related hair fall",
    "Reduced collagen production"
  ],

  process: [
    {
      step: "01",
      title: "Blood Collection",
      description: "A small amount of blood is collected from the patient."
    },
    {
      step: "02",
      title: "PRP Preparation",
      description: "The blood is processed to extract platelet-rich plasma."
    },
    {
      step: "03",
      title: "Injection",
      description: "PRP is injected into the scalp or treatment area."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Regular sessions are scheduled for optimal results."
    }
  ],

  benefits: [
    "Improved hair growth",
    "Increased hair density",
    "Natural treatment using patient's own blood",
    "Enhanced skin rejuvenation"
  ],

  faqs: [
    {
      question: "Is PRP safe?",
      answer: "Yes, PRP uses your own blood, making it a safe and well-tolerated procedure."
    },
    {
      question: "When will I see results?",
      answer: "Visible improvement is usually seen after a few sessions over several months."
    }
  ],

  duration: "45-60 Minutes",
  sessions: "4-6 Sessions",
  downtime: "1-2 Days",
  featured: true,
},
  {
  slug: "gfc-therapy",
  name: "GFC Therapy",
  shortName: "GFC",
  category: "Hair Treatments",
  tagline: "Advanced growth factor treatment for hair restoration",
  heroImage: "/images/treatments/gfc.jpg",
  icon: "Activity",
  overview:
    "Growth Factor Concentrate (GFC) Therapy is an advanced regenerative treatment that uses concentrated growth factors derived from the patient's blood to stimulate hair follicles, reduce hair fall, and improve hair density.",

  symptoms: [
    "Hair thinning",
    "Excessive hair fall",
    "Reduced hair density",
    "Early-stage baldness"
  ],

  causes: [
    "Genetic hair loss",
    "Hormonal imbalance",
    "Stress-related hair fall",
    "Poor scalp health"
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Assessment of hair loss pattern and scalp condition."
    },
    {
      step: "02",
      title: "Sample Collection",
      description: "A small blood sample is collected from the patient."
    },
    {
      step: "03",
      title: "GFC Preparation",
      description: "Growth factors are separated and concentrated using a specialized process."
    },
    {
      step: "04",
      title: "Application",
      description: "The prepared GFC is injected into the scalp to stimulate hair follicles."
    }
  ],

  benefits: [
    "Reduces hair fall",
    "Improves hair density",
    "Stimulates dormant hair follicles",
    "Safe and minimally invasive treatment"
  ],

  faqs: [
    {
      question: "How is GFC different from PRP?",
      answer: "GFC contains highly concentrated growth factors and may provide more targeted follicle stimulation."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most patients benefit from 3-6 sessions depending on the severity of hair loss."
    }
  ],

  duration: "45 Minutes",
  sessions: "3-6 Sessions",
  downtime: "Minimal",
},
  {
  slug: "mesotherapy",
  name: "Mesotherapy",
  shortName: "Mesotherapy",
  category: "Hair Treatments",
  tagline: "Nourish hair follicles and scalp health",
  heroImage: "/images/treatments/mesotherapy.jpg",
  icon: "Syringe",
  overview:
    "Mesotherapy is a scalp treatment that delivers vitamins, minerals, amino acids, and other nutrients directly into the scalp to strengthen hair roots, reduce hair fall, and promote healthier hair growth.",

  symptoms: [
    "Hair thinning",
    "Weak and brittle hair",
    "Excessive hair shedding",
    "Poor hair growth"
  ],

  causes: [
    "Nutritional deficiencies",
    "Stress",
    "Hormonal changes",
    "Poor scalp circulation"
  ],

  process: [
    {
      step: "01",
      title: "Hair Assessment",
      description: "Evaluation of hair and scalp condition."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of nutrients based on the patient's needs."
    },
    {
      step: "03",
      title: "Micro-Injections",
      description: "Nutrients are delivered directly into the scalp using fine injections."
    },
    {
      step: "04",
      title: "Follow-up Sessions",
      description: "Regular sessions help maintain and improve results."
    }
  ],

  benefits: [
    "Strengthens hair roots",
    "Reduces hair fall",
    "Improves scalp health",
    "Promotes healthier hair growth"
  ],

  faqs: [
    {
      question: "Is mesotherapy painful?",
      answer: "The procedure involves minimal discomfort and is generally well tolerated."
    },
    {
      question: "How soon can I see results?",
      answer: "Most patients notice improvement after a few sessions, with better results over time."
    }
  ],

  duration: "30 Minutes",
  sessions: "4-8 Sessions",
  downtime: "Minimal",
},

  {
  slug: "laser-hair-reduction",
  name: "Laser Hair Reduction",
  shortName: "Laser Hair",
  category: "Laser Treatments",
  tagline: "Long-term unwanted hair reduction",
  heroImage: "/images/treatments/laser-hair.jpg",
  icon: "Zap",
  overview:
    "Laser Hair Reduction is a safe and effective procedure that targets hair follicles to significantly reduce unwanted hair growth, leaving the skin smoother and reducing the need for frequent shaving or waxing.",

  symptoms: [
    "Excessive facial or body hair",
    "Frequent need for shaving or waxing",
    "Ingrown hairs",
    "Skin irritation after hair removal"
  ],

  causes: [
    "Genetic factors",
    "Hormonal imbalance",
    "PCOS-related hair growth",
    "Naturally dense hair growth"
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Assessment of skin type, hair type, and treatment area."
    },
    {
      step: "02",
      title: "Preparation",
      description: "The treatment area is cleaned and prepared."
    },
    {
      step: "03",
      title: "Laser Treatment",
      description: "Laser energy targets hair follicles to reduce future growth."
    },
    {
      step: "04",
      title: "Aftercare",
      description: "Post-treatment care instructions are provided."
    }
  ],

  benefits: [
    "Long-term hair reduction",
    "Smooth skin",
    "Reduced ingrown hairs",
    "Quick and safe procedure"
  ],

  faqs: [
    {
      question: "How many sessions are required?",
      answer: "Most patients require 6-8 sessions for optimal results."
    },
    {
      question: "Is laser hair reduction permanent?",
      answer: "It provides long-term hair reduction, though occasional maintenance sessions may be needed."
    }
  ],

  duration: "20-60 Minutes",
  sessions: "6-8 Sessions",
  downtime: "None",
  featured: true,
},

 {
  slug: "tattoo-removal",
  name: "Tattoo Removal",
  shortName: "Tattoo Removal",
  category: "Laser Treatments",
  tagline: "Advanced laser tattoo removal solutions",
  heroImage: "/images/treatments/tattoo-removal.jpg",
  icon: "Eraser",
  overview:
    "Advanced laser technology is used to gradually break down tattoo pigments, helping fade and remove unwanted tattoos safely and effectively.",

  symptoms: [
    "Unwanted tattoo",
    "Faded or distorted tattoo",
    "Regret over tattoo design",
    "Professional appearance concerns"
  ],

  causes: [
    "Change in personal preference",
    "Poor tattoo quality",
    "Lifestyle changes",
    "Career requirements"
  ],

  process: [
    {
      step: "01",
      title: "Evaluation",
      description: "Assessment of tattoo size, color, and depth."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "A customized laser treatment plan is created."
    },
    {
      step: "03",
      title: "Laser Session",
      description: "Laser energy breaks tattoo pigment into smaller particles."
    },
    {
      step: "04",
      title: "Healing",
      description: "The body naturally removes fragmented pigment over time."
    }
  ],

  benefits: [
    "Gradual tattoo fading",
    "Safe treatment",
    "Minimal scarring risk",
    "Improved skin appearance"
  ],

  faqs: [
    {
      question: "Can all tattoo colors be removed?",
      answer: "Most tattoo colors can be treated, though some may require additional sessions."
    },
    {
      question: "How many sessions are needed?",
      answer: "The number depends on tattoo size, depth, and colors used."
    }
  ],

  duration: "30 Minutes",
  sessions: "Multiple Sessions",
  downtime: "Minimal",
},

 {
  slug: "acne-scar-reduction",
  name: "Acne Scar Reduction",
  shortName: "Acne Scars",
  category: "Laser Treatments",
  tagline: "Improve skin texture and reduce acne scars",
  heroImage: "/images/treatments/acne-scar.jpg",
  icon: "ScanFace",
  overview:
    "Combination treatments including lasers, microneedling, and other advanced procedures help reduce acne scars and improve overall skin texture.",

  symptoms: [
    "Pitted acne scars",
    "Uneven skin texture",
    "Post-acne marks",
    "Visible facial scarring"
  ],

  causes: [
    "Severe acne",
    "Delayed acne treatment",
    "Inflammatory skin damage",
    "Improper acne picking"
  ],

  process: [
    {
      step: "01",
      title: "Scar Assessment",
      description: "Evaluation of scar type and severity."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of the most suitable scar reduction procedure."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Laser therapy, microneedling, or combination treatments are performed."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Progress is monitored through multiple sessions."
    }
  ],

  benefits: [
    "Reduced scar visibility",
    "Improved skin texture",
    "Smoother skin appearance",
    "Boosted confidence"
  ],

  faqs: [
    {
      question: "Can acne scars be completely removed?",
      answer: "Most scars can be significantly improved, though complete removal may not always be possible."
    },
    {
      question: "How many sessions are required?",
      answer: "Usually 4-8 sessions depending on scar severity."
    }
  ],

  duration: "30-60 Minutes",
  sessions: "4-8 Sessions",
  downtime: "Minimal",
},

 {
  slug: "hair-transplant",
  name: "Hair Transplant",
  shortName: "Hair Transplant",
  category: "Hair Treatments",
  tagline: "Permanent solution for hair loss",
  heroImage: "/images/treatments/hair-transplant.jpg",
  icon: "Scissors",
  overview:
    "Hair Transplant is an advanced hair restoration procedure that relocates healthy hair follicles to areas affected by hair loss, providing natural-looking and long-lasting results.",

  symptoms: [
    "Receding hairline",
    "Thinning hair",
    "Male pattern baldness",
    "Patchy hair loss"
  ],

  causes: [
    "Genetic hair loss",
    "Hormonal factors",
    "Age-related hair thinning",
    "Certain scalp conditions"
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Assessment of hair loss pattern and donor area."
    },
    {
      step: "02",
      title: "Planning",
      description: "Designing a natural hairline and transplant strategy."
    },
    {
      step: "03",
      title: "Transplant Procedure",
      description: "Hair follicles are extracted and implanted into affected areas."
    },
    {
      step: "04",
      title: "Recovery",
      description: "Post-procedure care and follow-up appointments."
    }
  ],

  benefits: [
    "Natural-looking results",
    "Permanent hair restoration",
    "Improved appearance",
    "Enhanced confidence"
  ],

  faqs: [
    {
      question: "When will new hair start growing?",
      answer: "New growth usually begins within 3-4 months, with full results developing over time."
    },
    {
      question: "Is hair transplant permanent?",
      answer: "Yes, transplanted hair follicles are generally permanent and continue to grow naturally."
    }
  ],

  duration: "4-8 Hours",
  sessions: "Single Procedure",
  downtime: "7-10 Days",
  featured: true,
},
  {
  slug: "vitiligo-surgery",
  name: "Vitiligo Surgery",
  shortName: "Vitiligo",
  category: "Procedures & Surgeries",
  tagline: "Surgical solutions for stable vitiligo patches",
  heroImage: "/images/treatments/vitiligo.jpg",
  icon: "CircleDashed",
  overview:
    "Advanced surgical procedures for selected patients with stable vitiligo to restore pigmentation and improve cosmetic appearance.",

  symptoms: [
    "Stable white patches on the skin",
    "Long-standing vitiligo patches",
    "Lack of response to medical treatment",
    "Cosmetic concerns due to depigmentation"
  ],

  causes: [
    "Autoimmune destruction of melanocytes",
    "Genetic predisposition",
    "Stable vitiligo resistant to medications",
    "Loss of skin pigmentation"
  ],

  process: [
    {
      step: "01",
      title: "Evaluation",
      description: "Assessment of vitiligo stability and suitability for surgery."
    },
    {
      step: "02",
      title: "Planning",
      description: "Selection of the most appropriate surgical technique."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Melanocyte transplantation or skin grafting is performed."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Monitoring and supportive therapy for repigmentation."
    }
  ],

  benefits: [
    "Improved pigmentation",
    "Better cosmetic appearance",
    "Long-term results in stable cases",
    "Enhanced confidence"
  ],

  faqs: [
    {
      question: "Who is suitable for vitiligo surgery?",
      answer: "Patients with stable vitiligo who have not responded adequately to medical treatment."
    },
    {
      question: "Is surgery a permanent solution?",
      answer: "Results are generally long-lasting when performed in appropriately selected patients."
    }
  ],

  duration: "Variable",
  sessions: "Case Dependent",
  downtime: "Minimal",
  featured: true,
},

 {
  slug: "warts-removal",
  name: "Warts Removal",
  shortName: "Warts",
  category: "Procedures & Surgeries",
  tagline: "Safe and effective wart removal",
  heroImage: "/images/treatments/warts.jpg",
  icon: "Target",
  overview:
    "Removal of common warts using modern dermatological procedures such as electrocautery, cryotherapy, or laser treatment.",

  symptoms: [
    "Raised skin growths",
    "Rough skin lesions",
    "Painful plantar warts",
    "Spreading warts"
  ],

  causes: [
    "Human Papillomavirus (HPV)",
    "Direct skin contact",
    "Weakened immunity",
    "Minor skin injuries"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of wart type and location."
    },
    {
      step: "02",
      title: "Treatment Selection",
      description: "Choosing cryotherapy, cautery, or laser removal."
    },
    {
      step: "03",
      title: "Removal",
      description: "The wart is safely removed using the selected technique."
    },
    {
      step: "04",
      title: "Aftercare",
      description: "Instructions are provided for proper healing."
    }
  ],

  benefits: [
    "Quick removal",
    "Reduced spread of infection",
    "Improved appearance",
    "Minimal discomfort"
  ],

  faqs: [
    {
      question: "Can warts come back?",
      answer: "Recurrence is possible, but proper treatment significantly reduces the risk."
    },
    {
      question: "Is wart removal painful?",
      answer: "Most procedures involve minimal discomfort and are well tolerated."
    }
  ],

  duration: "15-30 Minutes",
  sessions: "1-2 Sessions",
  downtime: "3-7 Days",
},

 {
  slug: "skin-tags-mole-removal",
  name: "Skin Tags & Mole Removal",
  shortName: "Mole Removal",
  category: "Procedures & Surgeries",
  tagline: "Quick removal of unwanted skin growths",
  heroImage: "/images/treatments/mole-removal.jpg",
  icon: "Circle",
  overview:
    "Safe removal of skin tags and moles using advanced dermatological procedures for cosmetic and medical indications.",

  symptoms: [
    "Skin tags",
    "Raised moles",
    "Changing skin lesions",
    "Cosmetic concerns"
  ],

  causes: [
    "Genetic factors",
    "Skin friction",
    "Age-related skin changes",
    "Benign skin growths"
  ],

  process: [
    {
      step: "01",
      title: "Examination",
      description: "Assessment of the skin lesion."
    },
    {
      step: "02",
      title: "Procedure Planning",
      description: "Selection of the safest removal method."
    },
    {
      step: "03",
      title: "Removal",
      description: "The mole or skin tag is removed under local anesthesia if required."
    },
    {
      step: "04",
      title: "Healing",
      description: "Post-procedure care instructions are provided."
    }
  ],

  benefits: [
    "Quick procedure",
    "Improved appearance",
    "Minimal scarring",
    "Safe removal"
  ],

  faqs: [
    {
      question: "Will there be a scar?",
      answer: "Most removals heal with minimal scarring when proper care is followed."
    },
    {
      question: "Can removed moles return?",
      answer: "Completely removed moles usually do not return."
    }
  ],

  duration: "15-30 Minutes",
  sessions: "Single Session",
  downtime: "Minimal",
},
  {
  slug: "nail-surgery",
  name: "Nail Surgery",
  shortName: "Nail Surgery",
  category: "Procedures & Surgeries",
  tagline: "Expert treatment for nail conditions",
  heroImage: "/images/treatments/nail-surgery.jpg",
  icon: "Shield",
  overview:
    "Minor nail surgical procedures performed for ingrown toenails, nail deformities, and other nail disorders.",

  symptoms: [
    "Painful ingrown nails",
    "Recurring nail infections",
    "Nail deformities",
    "Swelling around the nail"
  ],

  causes: [
    "Improper nail trimming",
    "Nail trauma",
    "Genetic predisposition",
    "Chronic nail disorders"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of the nail condition."
    },
    {
      step: "02",
      title: "Anesthesia",
      description: "Local anesthesia is administered."
    },
    {
      step: "03",
      title: "Procedure",
      description: "The affected nail portion is treated or removed."
    },
    {
      step: "04",
      title: "Recovery",
      description: "Dressing and follow-up care instructions are provided."
    }
  ],

  benefits: [
    "Pain relief",
    "Prevention of recurrence",
    "Improved nail health",
    "Quick recovery"
  ],

  faqs: [
    {
      question: "Is nail surgery painful?",
      answer: "Local anesthesia ensures minimal discomfort during the procedure."
    },
    {
      question: "How long is recovery?",
      answer: "Most patients recover within a few days to a couple of weeks."
    }
  ],

  duration: "30 Minutes",
  sessions: "Single Procedure",
  downtime: "Few Days",
},

  {
  slug: "birthmark-removal",
  name: "Birthmark Removal",
  shortName: "Birthmark",
  category: "Cosmetic Dermatology",
  tagline: "Advanced treatment for unwanted birthmarks",
  heroImage: "/images/treatments/birthmark.jpg",
  icon: "Star",
  overview:
    "Advanced treatment options including lasers and dermatological procedures to reduce the appearance of birthmarks.",

  symptoms: [
    "Visible birthmarks",
    "Pigmented skin patches",
    "Vascular birthmarks",
    "Cosmetic concerns"
  ],

  causes: [
    "Congenital skin changes",
    "Pigment cell abnormalities",
    "Vascular abnormalities",
    "Birth-related skin conditions"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of the birthmark type and depth."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of laser or procedural treatment."
    },
    {
      step: "03",
      title: "Procedure",
      description: "The birthmark is treated using the selected method."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Progress is monitored through follow-up visits."
    }
  ],

  benefits: [
    "Reduced visibility of birthmarks",
    "Improved skin appearance",
    "Safe treatment options",
    "Enhanced confidence"
  ],

  faqs: [
    {
      question: "Can all birthmarks be removed?",
      answer: "Treatment success depends on the type, size, and depth of the birthmark."
    },
    {
      question: "How many sessions are needed?",
      answer: "The number of sessions varies depending on the birthmark type."
    }
  ],

  duration: "30 Minutes",
  sessions: "Multiple Sessions",
  downtime: "Minimal",
},

  {
  slug: "skin-biopsy",
  name: "Skin Biopsy",
  shortName: "Skin Biopsy",
  category: "Medical Dermatology",
  tagline: "Accurate diagnosis of skin conditions",
  heroImage: "/images/treatments/skin-biopsy.jpg",
  icon: "Microscope",
  overview:
    "A diagnostic procedure used to obtain a small skin sample for laboratory examination and accurate diagnosis of skin disorders.",

  symptoms: [
    "Persistent skin rash",
    "Suspicious skin lesions",
    "Unexplained skin changes",
    "Chronic skin disorders"
  ],

  causes: [
    "Need for diagnostic confirmation",
    "Uncertain skin condition",
    "Abnormal skin growths",
    "Chronic inflammatory skin diseases"
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Assessment and selection of biopsy site."
    },
    {
      step: "02",
      title: "Anesthesia",
      description: "Local anesthesia is administered."
    },
    {
      step: "03",
      title: "Biopsy",
      description: "A small skin sample is collected for analysis."
    },
    {
      step: "04",
      title: "Laboratory Testing",
      description: "The sample is examined under a microscope."
    }
  ],

  benefits: [
    "Accurate diagnosis",
    "Guides treatment planning",
    "Quick outpatient procedure",
    "Reliable laboratory analysis"
  ],

  faqs: [
    {
      question: "Is a skin biopsy painful?",
      answer: "Local anesthesia is used, making the procedure comfortable."
    },
    {
      question: "When are results available?",
      answer: "Results are typically available within a few days to a couple of weeks."
    }
  ],

  duration: "20 Minutes",
  sessions: "Single Procedure",
  downtime: "Minimal",
},
{
  slug: "melasma-treatment",
  name: "Melasma Treatment",
  shortName: "Melasma",
  category: "Medical Dermatology",
  tagline: "Advanced solutions for stubborn facial pigmentation",
  heroImage: "/images/treatments/melasma.jpg",
  icon: "Sun",

  overview:
    "Comprehensive treatment for melasma using medical therapies, chemical peels, lasers, and customized skincare to reduce pigmentation and improve skin tone.",

  symptoms: [
    "Brown or gray facial patches",
    "Uneven skin tone",
    "Dark patches on cheeks",
    "Pigmentation on forehead and upper lip"
  ],

  causes: [
    "Sun exposure",
    "Hormonal changes",
    "Pregnancy",
    "Genetic predisposition"
  ],

  process: [
    {
      step: "01",
      title: "Skin Assessment",
      description: "Detailed evaluation of melasma severity and skin type."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Customized treatment plan based on pigmentation depth."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Medical treatment, peels, or laser therapy is performed."
    },
    {
      step: "04",
      title: "Maintenance",
      description: "Sun protection and skincare guidance are provided."
    }
  ],

  benefits: [
    "Reduced pigmentation",
    "Brighter complexion",
    "Improved skin tone",
    "Long-term management"
  ],

  faqs: [
    {
      question: "Can melasma be cured permanently?",
      answer: "Melasma can be effectively controlled, but maintenance is important."
    },
    {
      question: "Is sunscreen necessary?",
      answer: "Yes, strict sun protection is essential for treatment success."
    }
  ],

  duration: "30 Minutes",
  sessions: "4-8 Sessions",
  downtime: "Minimal"
},
{
  slug: "keloid-treatment",
  name: "Keloid Treatment",
  shortName: "Keloids",
  category: "Medical Dermatology",
  tagline: "Advanced treatment for raised scars and keloids",
  heroImage: "/images/treatments/keloid.jpg",
  icon: "Shield",

  overview:
    "Specialized treatments to flatten keloids, reduce discomfort, and improve appearance using injections, lasers, and surgical procedures.",

  symptoms: [
    "Raised scar tissue",
    "Itching or discomfort",
    "Thick scar formation",
    "Progressive scar enlargement"
  ],

  causes: [
    "Skin injury",
    "Surgery",
    "Acne scars",
    "Genetic tendency"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of scar type and severity."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of injections, laser, or surgery."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Targeted treatment is performed."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Monitoring and prevention of recurrence."
    }
  ],

  benefits: [
    "Reduced scar thickness",
    "Improved appearance",
    "Less discomfort",
    "Better skin texture"
  ],

  faqs: [
    {
      question: "Can keloids return?",
      answer: "Recurrence is possible, but treatment reduces the risk."
    },
    {
      question: "Are injections painful?",
      answer: "Most patients tolerate them well with minimal discomfort."
    }
  ],

  duration: "20-30 Minutes",
  sessions: "Multiple Sessions",
  downtime: "Minimal"
},
{
  slug: "carbon-peel",
  name: "Carbon Peel",
  shortName: "Carbon Peel",
  category: "Cosmetic Dermatology",
  tagline: "Instant skin rejuvenation and glow",
  heroImage: "/images/treatments/carbon-peel.jpg",
  icon: "Sparkles",

  overview:
    "Laser Carbon Peel is a non-invasive treatment that deeply cleanses pores, improves skin texture, and enhances skin radiance.",

  symptoms: [
    "Oily skin",
    "Open pores",
    "Acne-prone skin",
    "Dull complexion"
  ],

  causes: [
    "Excess oil production",
    "Environmental damage",
    "Dead skin buildup",
    "Acne-prone skin"
  ],

  process: [
    {
      step: "01",
      title: "Carbon Application",
      description: "Medical carbon lotion is applied."
    },
    {
      step: "02",
      title: "Laser Activation",
      description: "Laser targets the carbon particles."
    },
    {
      step: "03",
      title: "Deep Cleansing",
      description: "Dead skin and impurities are removed."
    },
    {
      step: "04",
      title: "Skin Refresh",
      description: "Skin appears smoother and brighter."
    }
  ],

  benefits: [
    "Instant glow",
    "Reduced oiliness",
    "Smaller pores",
    "Improved skin texture"
  ],

  faqs: [
    {
      question: "Is Carbon Peel painful?",
      answer: "No, it is generally comfortable and well tolerated."
    },
    {
      question: "When will results be visible?",
      answer: "Results are noticeable immediately after treatment."
    }
  ],

  duration: "30 Minutes",
  sessions: "3-6 Sessions",
  downtime: "None"
},
{
  slug: "hollywood-laser-facial",
  name: "Hollywood Laser Facial",
  shortName: "Hollywood Facial",
  category: "Cosmetic Dermatology",
  tagline: "Celebrity-inspired skin glow treatment",
  heroImage: "/images/treatments/hollywood-facial.jpg",
  icon: "Stars",

  overview:
    "A laser-based skin rejuvenation procedure that enhances glow, improves skin texture, and reduces minor imperfections.",

  symptoms: [
    "Dull skin",
    "Uneven skin tone",
    "Open pores",
    "Fine skin imperfections"
  ],

  causes: [
    "Sun exposure",
    "Ageing",
    "Pollution",
    "Skin fatigue"
  ],

  process: [
    {
      step: "01",
      title: "Skin Preparation",
      description: "The skin is cleansed and prepared."
    },
    {
      step: "02",
      title: "Laser Treatment",
      description: "Laser energy stimulates skin rejuvenation."
    },
    {
      step: "03",
      title: "Cooling",
      description: "Skin is soothed after treatment."
    },
    {
      step: "04",
      title: "Aftercare",
      description: "Guidance for maintaining results."
    }
  ],

  benefits: [
    "Instant glow",
    "Improved texture",
    "Reduced pores",
    "Brighter complexion"
  ],

  faqs: [
    {
      question: "Can I return to work immediately?",
      answer: "Yes, there is usually no downtime."
    },
    {
      question: "How long does the glow last?",
      answer: "Results vary but can last several weeks with proper care."
    }
  ],

  duration: "30 Minutes",
  sessions: "Monthly",
  downtime: "None"
},
{
  slug: "traumatic-scar-treatment",
  name: "Traumatic Scar Treatment",
  shortName: "Traumatic Scars",
  category: "Laser Treatments",
  tagline: "Improve the appearance of injury-related scars",
  heroImage: "/images/treatments/traumatic-scar.jpg",
  icon: "ScanFace",

  overview:
    "Advanced scar reduction treatments including lasers, microneedling, and combination therapies for traumatic scars.",

  symptoms: [
    "Visible scars",
    "Uneven skin texture",
    "Discolored scar tissue",
    "Raised or depressed scars"
  ],

  causes: [
    "Accidents",
    "Surgery",
    "Burns",
    "Skin injuries"
  ],

  process: [
    {
      step: "01",
      title: "Scar Assessment",
      description: "Evaluation of scar type and severity."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of suitable treatment modalities."
    },
    {
      step: "03",
      title: "Procedure",
      description: "Laser or resurfacing treatment is performed."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Monitoring and additional sessions if needed."
    }
  ],

  benefits: [
    "Reduced scar visibility",
    "Improved texture",
    "Better skin appearance",
    "Enhanced confidence"
  ],

  faqs: [
    {
      question: "Can old scars be treated?",
      answer: "Yes, even older scars can often be improved."
    },
    {
      question: "How many sessions are required?",
      answer: "The number varies depending on scar severity."
    }
  ],

  duration: "30-60 Minutes",
  sessions: "4-8 Sessions",
  downtime: "Minimal"
},
{
  slug: "skin-tags-removal",
  name: "Skin Tags Removal",
  shortName: "Skin Tags",
  category: "Procedures & Surgeries",
  tagline: "Quick and safe removal of unwanted skin tags",
  heroImage: "/images/treatments/skin-tags.jpg",
  icon: "Circle",

  overview:
    "Skin tag removal is a simple dermatological procedure used to safely remove benign skin growths that commonly develop on the neck, underarms, eyelids, and other friction-prone areas.",

  symptoms: [
    "Small hanging skin growths",
    "Skin irritation due to friction",
    "Cosmetic concerns",
    "Discomfort from clothing or jewelry"
  ],

  causes: [
    "Skin friction",
    "Genetic predisposition",
    "Weight gain",
    "Hormonal changes"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of skin tags and treatment suitability."
    },
    {
      step: "02",
      title: "Preparation",
      description: "Cleaning and preparation of the treatment area."
    },
    {
      step: "03",
      title: "Removal",
      description: "Skin tags are removed using cautery, radiofrequency, or minor surgical techniques."
    },
    {
      step: "04",
      title: "Aftercare",
      description: "Instructions are provided for proper healing."
    }
  ],

  benefits: [
    "Quick procedure",
    "Improved appearance",
    "Minimal discomfort",
    "Little to no scarring"
  ],

  faqs: [
    {
      question: "Do skin tags grow back?",
      answer: "Removed skin tags usually do not return, although new ones may develop elsewhere."
    },
    {
      question: "Is removal painful?",
      answer: "The procedure is generally comfortable with minimal discomfort."
    }
  ],

  duration: "15-20 Minutes",
  sessions: "Single Session",
  downtime: "Minimal"
},
{
  slug: "corn-removal",
  name: "Corn Removal",
  shortName: "Corn",
  category: "Procedures & Surgeries",
  tagline: "Relief from painful corns and pressure points",
  heroImage: "/images/treatments/corn-removal.jpg",
  icon: "Footprints",

  overview:
    "Corn removal treatments help eliminate thickened skin caused by repeated pressure or friction, providing pain relief and improved comfort while walking.",

  symptoms: [
    "Painful thickened skin",
    "Hard skin over pressure points",
    "Walking discomfort",
    "Tender skin lesions"
  ],

  causes: [
    "Tight footwear",
    "Repeated friction",
    "Abnormal foot pressure",
    "Foot deformities"
  ],

  process: [
    {
      step: "01",
      title: "Examination",
      description: "Assessment of the corn and underlying cause."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Selection of medical or procedural treatment."
    },
    {
      step: "03",
      title: "Removal",
      description: "The corn is carefully removed."
    },
    {
      step: "04",
      title: "Prevention",
      description: "Footwear and care recommendations are provided."
    }
  ],

  benefits: [
    "Pain relief",
    "Improved mobility",
    "Better foot comfort",
    "Reduced recurrence risk"
  ],

  faqs: [
    {
      question: "Can corns come back?",
      answer: "Recurrence can occur if the underlying pressure source is not corrected."
    },
    {
      question: "Is corn removal painful?",
      answer: "Most procedures involve minimal discomfort."
    }
  ],

  duration: "20 Minutes",
  sessions: "1-2 Sessions",
  downtime: "Minimal"
},
{
  slug: "electrocautery-treatment",
  name: "Electrocautery Treatment",
  shortName: "Electrocautery",
  category: "Procedures & Surgeries",
  tagline: "Precision removal of skin lesions using controlled heat",
  heroImage: "/images/treatments/electrocautery.jpg",
  icon: "Zap",

  overview:
    "Electrocautery uses controlled electrical energy to remove skin lesions such as warts, skin tags, moles, and other benign growths safely and effectively.",

  symptoms: [
    "Skin tags",
    "Warts",
    "Benign skin growths",
    "Cosmetic skin concerns"
  ],

  causes: [
    "Viral skin lesions",
    "Benign skin growths",
    "Skin aging",
    "Friction-related lesions"
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluation of the skin lesion."
    },
    {
      step: "02",
      title: "Anesthesia",
      description: "Local anesthesia may be used if necessary."
    },
    {
      step: "03",
      title: "Electrocautery",
      description: "The lesion is removed using controlled electrical heat."
    },
    {
      step: "04",
      title: "Healing",
      description: "Post-procedure care instructions are provided."
    }
  ],

  benefits: [
    "Quick treatment",
    "High precision",
    "Minimal bleeding",
    "Fast recovery"
  ],

  faqs: [
    {
      question: "Will there be a scar?",
      answer: "Most lesions heal with minimal scarring when proper care is followed."
    },
    {
      question: "Is electrocautery safe?",
      answer: "Yes, it is a commonly used and safe dermatological procedure."
    }
  ],

  duration: "15-30 Minutes",
  sessions: "Single Session",
  downtime: "3-7 Days"
},
{
  slug: "radio-frequency-treatment",
  name: "Radio Frequency Treatment",
  shortName: "RF Treatment",
  category: "Procedures & Surgeries",
  tagline: "Advanced skin tightening and lesion removal technology",
  heroImage: "/images/treatments/radio-frequency.jpg",
  icon: "Radio",

  overview:
    "Radio Frequency (RF) Treatment uses controlled energy to tighten skin, stimulate collagen production, and remove selected skin lesions with precision and minimal downtime.",

  symptoms: [
    "Loose skin",
    "Fine lines and wrinkles",
    "Benign skin lesions",
    "Skin texture concerns"
  ],

  causes: [
    "Age-related collagen loss",
    "Sun damage",
    "Skin laxity",
    "Benign skin growths"
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Assessment of treatment goals and skin condition."
    },
    {
      step: "02",
      title: "Preparation",
      description: "The treatment area is cleaned and prepared."
    },
    {
      step: "03",
      title: "RF Procedure",
      description: "Controlled radio frequency energy is delivered to the target area."
    },
    {
      step: "04",
      title: "Aftercare",
      description: "Post-treatment skincare instructions are provided."
    }
  ],

  benefits: [
    "Skin tightening",
    "Collagen stimulation",
    "Minimal downtime",
    "Improved skin texture"
  ],

  faqs: [
    {
      question: "Is RF treatment painful?",
      answer: "Most patients experience only mild warmth during treatment."
    },
    {
      question: "How many sessions are required?",
      answer: "The number of sessions depends on the condition being treated and desired results."
    }
  ],

  duration: "30-45 Minutes",
  sessions: "3-6 Sessions",
  downtime: "Minimal"
},
];

export const TREATMENT_CATEGORIES = [
  "Medical Dermatology",
  "Cosmetic Dermatology",
  "Hair Treatments",
  "Laser Treatments",
  "Procedures & Surgeries",
] as const;

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getFeaturedTreatments() {
  return TREATMENTS.filter((t) => t.featured);
}

export function getRelatedTreatments(slug: string, count = 3) {
  const current = getTreatmentBySlug(slug);

  if (!current) return TREATMENTS.slice(0, count);

  return TREATMENTS.filter(
    (t) => t.slug !== slug && t.category === current.category
  )
    .slice(0, count)
    .concat(
      TREATMENTS.filter(
        (t) => t.slug !== slug && t.category !== current.category
      )
    )
    .slice(0, count);
}