export interface Hospital {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  city: string;
  country: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  specialties: string[];
  primarySpecialtySlug: string;
  accreditations: string[];
  stats: { label: string; value: string }[];
  address: string;
  mapEmbed?: string;
  metaTitle: string;
  metaDescription: string;
}

export const hospitals: Hospital[] = [
  {
    slug: 'mount-elizabeth',
    name: 'Mount Elizabeth Hospital',
    shortName: 'Mount Elizabeth',
    location: 'Singapore',
    city: 'Singapore',
    country: 'Singapore',
    tagline: "Asia's Premier Private Hospital",
    heroImage: '/images/mounteli.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
    ],
    description:
      'One of Asia\'s premier private hospitals, renowned for advanced medical technology, internationally trained specialists, and outstanding patient outcomes.',
    longDescription: `Mount Elizabeth Hospital, part of IHH Healthcare (Parkway Health), is consistently ranked among Asia's best hospitals. With a 345-bed capacity and over 400 resident specialists covering 40+ medical disciplines, it serves patients from more than 100 countries annually.

The hospital is equipped with the latest diagnostic and therapeutic technology including PET-CT, 3T MRI, CyberKnife radiosurgery, and robotic-assisted surgery suites. Its orthopaedic, cardiology, oncology, and neurology departments are internationally acclaimed.

Mount Elizabeth is Phoenix Global Wellness's premier Singapore partner, particularly recommended for complex orthopaedic, cardiac, and neurosurgical procedures.`,
    specialties: [
      '🦴 Orthopaedics',
      '❤️ Cardiology',
      '🧠 Neurology',
      '🎗️ Oncology',
      '👶 Paediatrics',
      '👁️ Ophthalmology',
    ],
    primarySpecialtySlug: 'orthopaedic',
    accreditations: ['JCI Accredited', 'ISO 9001:2015', 'HIMSS Stage 6'],
    stats: [
      { label: 'Beds', value: '345+' },
      { label: 'Specialists', value: '400+' },
      { label: 'Specialties', value: '40+' },
      { label: 'Countries Served', value: '100+' },
    ],
    address: '3 Mount Elizabeth, Singapore 228510',
    metaTitle: 'Mount Elizabeth Hospital Singapore | Phoenix Global Wellness',
    metaDescription:
      "Asia's premier private hospital in Singapore. Orthopaedic, cardiac, and oncology excellence. Book through Phoenix Global Wellness.",
  },
  {
    slug: 'jaslok',
    name: 'Jaslok Hospital & Research Centre',
    shortName: 'Jaslok Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Pioneer in Integrative & Homeopathic Medicine',
    heroImage: '/images/jaslok.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80',
    ],
    description:
      'A pioneer in integrative medicine in Mumbai, renowned for its homeopathy department alongside multi-specialty surgical and medical care.',
    longDescription: `Jaslok Hospital & Research Centre has been a landmark in Mumbai's medical landscape since 1974. It is renowned for its pioneering work in homeopathy, integrated with modern diagnostic capabilities — a unique combination that attracts patients from across the globe seeking holistic care.

Beyond homeopathy, Jaslok offers comprehensive multi-specialty services including cardiac surgery, neurosurgery, oncology, and organ transplantation. Its research wing continuously contributes to medical innovation.

Phoenix Global Wellness particularly recommends Jaslok for patients seeking homeopathic treatment, especially for chronic and autoimmune conditions that have not responded to conventional therapy.`,
    specialties: [
      '💊 Homeopathy',
      '❤️ Cardiology',
      '🧠 Neurology',
      '🎗️ Oncology',
      '🦴 Orthopaedics',
      '🔬 Research',
    ],
    primarySpecialtySlug: 'homeopathy',
    accreditations: ['NABH Accredited', 'ISO 9001:2015'],
    stats: [
      { label: 'Beds', value: '354' },
      { label: 'Years Est.', value: '50+' },
      { label: 'Specialties', value: '30+' },
      { label: 'Annual Patients', value: '100k+' },
    ],
    address: '15 Dr G Deshmukh Marg, Pedder Road, Mumbai, Maharashtra 400026',
    metaTitle: 'Jaslok Hospital Mumbai — Homeopathy & Multi-Specialty | Phoenix Global Wellness',
    metaDescription:
      'Jaslok Hospital Mumbai offers pioneering homeopathic treatment integrated with modern medicine. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'saifee',
    name: 'Saifee Hospital',
    shortName: 'Saifee Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Centre of Excellence in Cardiac & Multi-Specialty Care',
    heroImage: '/images/saifee.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    ],
    description:
      'Premier multi-specialty hospital in Mumbai with a renowned cardiac programme, advanced cath labs, and comprehensive surgical services.',
    longDescription: `Saifee Hospital is one of Mumbai's premier multi-specialty hospitals, particularly renowned for its cardiology and cardiac surgery programmes. The hospital features state-of-the-art cath labs, a hybrid OR for complex cardiovascular procedures, and a cardiac ICU staffed by dedicated intensivists.

Its comprehensive approach to patient care, combined with internationally trained specialists and modern infrastructure, makes Saifee Hospital a trusted destination for patients from the Gulf, Africa, and Southeast Asia seeking quality cardiac care.`,
    specialties: [
      '❤️ Cardiology',
      '🦴 Orthopaedics',
      '🧠 Neurology',
      '👩‍⚕️ Gynaecology',
      '🎗️ Oncology',
      '👶 Paediatrics',
    ],
    primarySpecialtySlug: 'cardiology',
    accreditations: ['NABH Accredited', 'ISO 9001:2015'],
    stats: [
      { label: 'Beds', value: '250+' },
      { label: 'Cath Labs', value: '3' },
      { label: 'ICU Beds', value: '60+' },
      { label: 'Surgeries/Year', value: '15k+' },
    ],
    address: '15/17 Maharshi Karve Road, Charni Road, Mumbai, Maharashtra 400004',
    metaTitle: 'Saifee Hospital Mumbai — Cardiology & Surgery | Phoenix Global Wellness',
    metaDescription:
      'Saifee Hospital Mumbai offers world-class cardiac surgery and multi-specialty care. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'noor',
    name: 'Noor Hospital',
    shortName: 'Noor Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Compassionate Orthopaedic & Surgical Care',
    heroImage: '/images/noor.png',
    galleryImages: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
    ],
    description:
      'A compassionate multi-specialty hospital in Mumbai known for its orthopaedic programme and patient-centred approach to care.',
    longDescription: `Noor Hospital offers a personalised approach to medical care, combining clinical excellence with a warm, family-centered environment. The hospital's orthopaedic department is equipped for joint replacement surgery, trauma, and sports medicine.

Its smaller, boutique-style model means patients receive focused attention from their surgical team, with consultants personally overseeing each case. This approach is particularly valued by international patients who appreciate direct access to their treating specialist.`,
    specialties: [
      '🦴 Orthopaedics',
      '❤️ General Surgery',
      '👩‍⚕️ Gynaecology',
      '👶 Paediatrics',
      '🔬 Internal Medicine',
    ],
    primarySpecialtySlug: 'orthopaedic',
    accreditations: ['NABH Accredited'],
    stats: [
      { label: 'Beds', value: '100+' },
      { label: 'Specialists', value: '50+' },
      { label: 'Years Active', value: '15+' },
    ],
    address: 'Mumbai, Maharashtra, India',
    metaTitle: 'Noor Hospital Mumbai — Orthopaedics | Phoenix Global Wellness',
    metaDescription:
      'Noor Hospital Mumbai provides personalised orthopaedic and surgical care. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'bhatia',
    name: 'Bhatia Hospital',
    shortName: 'Bhatia Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Advanced Cardiac & General Medical Care',
    heroImage: '/images/bhatia.jpeg',
    galleryImages: [
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    ],
    description:
      'A well-established multi-specialty hospital in South Mumbai, offering advanced cardiac care, general surgery, and a comprehensive range of medical services.',
    longDescription: `Bhatia Hospital has served Mumbai's healthcare needs for decades. Located in the heart of the city, it provides convenient access to specialist care across cardiology, general and laparoscopic surgery, orthopaedics, and internal medicine.

The hospital is particularly noted for its cardiac programme and its ability to handle complex multi-system disease in elderly patients. Its experienced medical team and supportive nursing staff create an environment conducive to optimal recovery.`,
    specialties: [
      '❤️ Cardiology',
      '🔬 Internal Medicine',
      '🦴 Orthopaedics',
      '🧠 Neurology',
      '👩‍⚕️ Gynaecology',
    ],
    primarySpecialtySlug: 'cardiology',
    accreditations: ['NABH Accredited'],
    stats: [
      { label: 'Beds', value: '183' },
      { label: 'Years Est.', value: '45+' },
      { label: 'Specialties', value: '20+' },
    ],
    address: 'Grant Road, Mumbai, Maharashtra 400007',
    metaTitle: 'Bhatia Hospital Mumbai — Cardiology | Phoenix Global Wellness',
    metaDescription:
      'Bhatia Hospital Mumbai offers advanced cardiology and multi-specialty care. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'global-hospitals',
    name: 'Global Hospitals',
    shortName: 'Global Hospitals',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'India\'s Leading Cancer & Multi-Organ Transplant Centre',
    heroImage: '/images/global.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    ],
    description:
      "India's leading cancer care and multi-organ transplant network, with comprehensive oncology services including robotic surgery and advanced radiation.",
    longDescription: `Global Hospitals Group is one of India's premier tertiary care hospital networks, with a particular reputation for oncology, organ transplantation, and complex surgical procedures.

The Mumbai facility offers comprehensive cancer care including a tumour board, robotic-assisted cancer surgery, IMRT/IGRT radiation, targeted therapies, and a dedicated bone marrow transplant unit. Multi-disciplinary teams ensure every patient's case is evaluated by specialists across oncology, radiology, pathology, and supportive care.`,
    specialties: [
      '🎗️ Oncology',
      '🫀 Organ Transplant',
      '❤️ Cardiology',
      '🧠 Neurology',
      '🦴 Orthopaedics',
      '🔬 Haematology',
    ],
    primarySpecialtySlug: 'oncology',
    accreditations: ['JCI Accredited', 'NABH Accredited'],
    stats: [
      { label: 'Beds', value: '300+' },
      { label: 'Transplants/Year', value: '500+' },
      { label: 'Cancer Cases/Year', value: '3000+' },
      { label: 'Specialists', value: '200+' },
    ],
    address: 'Mumbai, Maharashtra, India',
    metaTitle: 'Global Hospitals Mumbai — Cancer & Transplant | Phoenix Global Wellness',
    metaDescription:
      "India's leading cancer and transplant centre. Book oncology treatment through Phoenix Global Wellness.",
  },
  {
    slug: 'wockhardt',
    name: 'Wockhardt Hospitals',
    shortName: 'Wockhardt',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Super-Specialty Care with International Standards',
    heroImage: '/images/wock.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80',
    ],
    description:
      'A leading super-specialty hospital chain with internationally trained specialists and advanced technology for cancer, cardiac, and neurological care.',
    longDescription: `Wockhardt Hospitals is one of India's prominent hospital chains, known for bringing international healthcare standards to Indian patients. Its cancer programme — featuring robotic surgery, advanced radiation oncology, and a dedicated tumour board — is particularly strong.

The hospital group has been instrumental in bringing robotic surgery to Mumbai, with da Vinci surgical systems used for prostate, colorectal, and gynaecological oncology procedures.`,
    specialties: [
      '🎗️ Cancer Care',
      '❤️ Cardiology',
      '🧠 Neurosurgery',
      '🔬 Robotic Surgery',
      '🦴 Orthopaedics',
    ],
    primarySpecialtySlug: 'oncology',
    accreditations: ['JCI Accredited', 'NABH Accredited'],
    stats: [
      { label: 'Beds', value: '450+' },
      { label: 'Robotic Surgeries', value: '1000+/yr' },
      { label: 'Specialists', value: '300+' },
    ],
    address: 'Mumbai, Maharashtra, India',
    metaTitle: 'Wockhardt Hospitals Mumbai — Cancer & Robotic Surgery | Phoenix Global Wellness',
    metaDescription:
      'Wockhardt Hospitals offers cancer treatment and robotic surgery in Mumbai. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'breach-candy',
    name: 'Breach Candy Hospital',
    shortName: 'Breach Candy',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Heritage Excellence in Cancer & Surgical Care',
    heroImage: '/images/breach.jpeg',
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    ],
    description:
      "One of Mumbai's most prestigious hospitals with a long heritage of excellence in cancer care, general surgery, and specialist medicine.",
    longDescription: `Breach Candy Hospital has been a cornerstone of Mumbai's elite medical landscape since 1950. Located on the scenic Warden Road, it attracts patients seeking a combination of clinical excellence, personalised service, and a distinguished medical lineage.

The hospital's cancer centre offers comprehensive oncological services with experienced senior oncologists who have trained at top international institutions. Its surgical traditions and patient-centred approach make it a preferred destination for discerning international patients.`,
    specialties: [
      '🎗️ Oncology',
      '❤️ Cardiology',
      '🧠 Neurology',
      '🦴 Orthopaedics',
      '🔬 General Surgery',
    ],
    primarySpecialtySlug: 'oncology',
    accreditations: ['NABH Accredited'],
    stats: [
      { label: 'Beds', value: '240' },
      { label: 'Est.', value: '1950' },
      { label: 'Specialists', value: '150+' },
    ],
    address: '60A, Bhulabhai Desai Road, Breach Candy, Mumbai 400026',
    metaTitle: 'Breach Candy Hospital Mumbai — Cancer Care | Phoenix Global Wellness',
    metaDescription:
      "Mumbai's prestigious Breach Candy Hospital for cancer care and specialist surgery. Book through Phoenix Global Wellness.",
  },
  {
    slug: 'kokilaben',
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    shortName: 'Kokilaben Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: "Mumbai's Most Advanced Super-Specialty Hospital",
    heroImage: '/images/kokilaben.jpeg',
    galleryImages: [
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80',
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    ],
    description:
      "Mumbai's most advanced super-specialty hospital, featuring CyberKnife, da Vinci robotic surgery, 3T MRI, and internationally trained specialists across all disciplines.",
    longDescription: `Kokilaben Dhirubhai Ambani Hospital is widely regarded as Mumbai's most technologically advanced hospital. Opened in 2009, it was purpose-built to international standards and equipped with the very latest medical technology.

The hospital features CyberKnife radiosurgery (for cancer and neurological conditions), da Vinci robotic surgical systems (used across multiple specialties), 3T MRI and PET-CT imaging, and a comprehensive cancer centre with a multidisciplinary tumour board.

Phoenix Global Wellness recommends Kokilaben for patients requiring the most advanced diagnostics and treatments, particularly in oncology, neurosurgery, and complex cardiac surgery.`,
    specialties: [
      '🎗️ Oncology & CyberKnife',
      '❤️ Cardiac Surgery',
      '🧠 Neurosurgery',
      '🦴 Orthopaedics',
      '🔬 Robotic Surgery',
      '💉 Transplant',
    ],
    primarySpecialtySlug: 'oncology',
    accreditations: ['JCI Accredited', 'NABH Accredited', 'HIMSS Stage 6'],
    stats: [
      { label: 'Beds', value: '750+' },
      { label: 'Specialists', value: '700+' },
      { label: 'Specialties', value: '55+' },
      { label: 'Robotic Surgeries', value: '2000+/yr' },
    ],
    address: 'Four Bungalows, Andheri West, Mumbai, Maharashtra 400053',
    metaTitle: 'Kokilaben Hospital Mumbai — Advanced Cancer & Surgery | Phoenix Global Wellness',
    metaDescription:
      'Kokilaben Dhirubhai Ambani Hospital — CyberKnife, da Vinci robotics, advanced oncology in Mumbai. Book through Phoenix Global Wellness.',
  },
  {
    slug: 'hinduja',
    name: 'P.D. Hinduja National Hospital',
    shortName: 'Hinduja Hospital',
    location: 'Mumbai, India',
    city: 'Mumbai',
    country: 'India',
    tagline: 'Centre for Complex Medicine & Organ Transplantation',
    heroImage: '/images/hinduja.jpeg',
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80',
    ],
    description:
      'One of India\'s most respected tertiary care hospitals, acclaimed for oncology, organ transplantation, complex cardiac surgery, and neurosciences.',
    longDescription: `P.D. Hinduja National Hospital & Medical Research Centre is one of India's most respected and trusted hospitals. For over 75 years, it has pioneered medical advances in India, including some of the country's first organ transplants.

Today, Hinduja is particularly recognised for its cancer centre (covering all solid tumours, haematological malignancies, and bone marrow transplant), its cardiac surgery programme, neurosciences, and its liver and kidney transplant programme.

The hospital's team of over 400 senior consultants includes many who have trained at institutions like Johns Hopkins, Mayo Clinic, and Harvard Medical School.`,
    specialties: [
      '🎗️ Cancer Centre',
      '🫀 Organ Transplant',
      '❤️ Cardiac Surgery',
      '🧠 Neurosciences',
      '🦴 Orthopaedics',
      '🔬 Haematology',
    ],
    primarySpecialtySlug: 'oncology',
    accreditations: ['JCI Accredited', 'NABH Accredited', 'ISO 9001:2015'],
    stats: [
      { label: 'Beds', value: '351' },
      { label: 'Years Est.', value: '75+' },
      { label: 'Senior Consultants', value: '400+' },
      { label: 'Transplants', value: '200+/yr' },
    ],
    address: 'Veer Savarkar Marg, Mahim, Mumbai, Maharashtra 400016',
    metaTitle: 'Hinduja Hospital Mumbai — Cancer, Transplant & Surgery | Phoenix Global Wellness',
    metaDescription:
      "P.D. Hinduja Hospital Mumbai — India's trusted centre for cancer, transplant, and complex surgery. Book through Phoenix Global Wellness.",
  },
];

// Helper to get hospital by slug
export function getHospitalBySlug(slug: string): Hospital | undefined {
  return hospitals.find((h) => h.slug === slug);
}

// Helper to get all slugs
export function getAllHospitalSlugs(): string[] {
  return hospitals.map((h) => h.slug);
}

// Helper to get hospitals for a treatment
export function getHospitalsForTreatment(slugs: string[]): Hospital[] {
  return hospitals.filter((h) => slugs.includes(h.slug));
}
