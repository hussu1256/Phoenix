export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  initials: string;
  avatarGradient: string;
  bio: string;
  shortBio: string;
  credentials: string[];
  languages: string[];
  email?: string;
  linkedin?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tasnim-tahir-ali",
    name: "Tasnim Tahir Ali",
    role: "Entrepreneur & CEO",
    department: "Leadership",
    initials: "T",
    avatarGradient: "from-teal-700 to-navy-900",
    bio: `Tasnim Tahir Ali is the visionary behind our creative endeavors. With a wealth of experience and a passion for storytelling, she brings a unique perspective to every project. As a leader, Tasnim fosters a collaborative and innovative environment, inspiring our team to reach new heights. With a keen eye for detail, she ensures that every patient is brought to life with precision and authenticity.`,
    shortBio:
      "Visionary entrepreneur and CEO focused on transforming medical travel experiences worldwide.",
    credentials: ["Entrepreneur", "CEO", "Medical Tourism Consultant"],
    languages: ["English", "Hindi", "Urdu"],
  },

  {
    id: "dr-shabbir-suterwala",
    name: "Dr Shabbir Suterwala",
    role: "Orthopedic (Joints & Complex Trauma)",
    department: "Medical",
    initials: "SS",
    avatarGradient: "from-teal-600 to-blue-900",
    image: "/images/Dr-Shabbir.jpg",
    bio: `Dr Shabbir Suterwala specializes in joint replacement surgery and complex trauma care. With extensive expertise in orthopedic procedures, he is committed to delivering advanced surgical solutions with patient-focused treatment.`,
    shortBio: "Orthopedic specialist in joint replacement and complex trauma.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-manoj-mishra",
    name: "Dr Manoj Mishra",
    role: "Orthopedic (Joints & Complex Trauma)",
    department: "Medical",
    initials: "MM",
    avatarGradient: "from-gold-DEFAULT to-navy-900",
    image: "/images/Dr-Manoj-Mishra.jpg",
    bio: `Dr Manoj Mishra is an experienced orthopedic specialist focusing on joint-related issues and complex trauma cases. He is dedicated to providing effective treatment and recovery solutions for patients.`,
    shortBio: "Orthopedic doctor specializing in joints and trauma.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-divesh-dholakia",
    name: "Dr Divesh Dholakia",
    role: "Ortho (Spine Surgeon)",
    department: "Medical",
    initials: "DD",
    avatarGradient: "from-blue-700 to-teal-700",
    image: "/images/Dr-Divesh-Dholkia.jpg",
    bio: `Dr Divesh Dholakia is a spine surgeon with expertise in diagnosing and treating spinal disorders. He focuses on modern surgical and non-surgical spine treatment approaches for long-term patient recovery.`,
    shortBio: "Spine surgeon with expertise in orthopedic spine care.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-iqbal-bagasrawala",
    name: "Dr Iqbal Bagasrawala",
    role: "MD Physician",
    department: "Medical",
    initials: "IB",
    avatarGradient: "from-teal-500 to-navy-800",
    image: "/images/Dr-Iqbal-Bagasrawala.jpg",
    bio: `Dr Iqbal Bagasrawala is a skilled MD physician with broad experience in internal medicine. He focuses on accurate diagnosis, patient well-being, and long-term healthcare management.`,
    shortBio: "MD physician specializing in internal medicine.",
    credentials: ["MD"],
    languages: [],
  },

  {
    id: "dr-samir-bagasrawala",
    name: "Dr Samir Bagasrawala",
    role: "Laparoscopic Surgeon",
    department: "Medical",
    initials: "SB",
    avatarGradient: "from-gold-DEFAULT to-teal-700",
    image: "/images/Dr-Samir-Bagasrawala.jpg",
    bio: `Dr Samir Bagasrawala is a laparoscopic surgeon known for minimally invasive surgical procedures. His focus is on faster recovery, reduced pain, and safe surgical outcomes.`,
    shortBio: "Expert in minimally invasive laparoscopic surgery.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-abizer-manked",
    name: "Dr Abizer Manked",
    role: "Consultant Physician & Diabetes Specialist",
    department: "Medical",
    initials: "AM",
    avatarGradient: "from-blue-800 to-navy-900",
    image: "/images/Dr-Abizer-Manked.jpg",
    bio: `Dr Abizer Manked is a consultant physician and diabetes specialist, offering advanced care for metabolic and lifestyle-related disorders. He emphasizes preventive healthcare and long-term disease management.`,
    shortBio: "Consultant physician and diabetes specialist.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-murtuza-rangwala",
    name: "Dr Murtuza Rangwala",
    role: "Plastic Surgeon",
    department: "Medical",
    initials: "MR",
    avatarGradient: "from-teal-700 to-blue-900",
    image: "/images/Dr-Murtuza.jpg",
    bio: `Dr Murtuza Rangwala is a plastic surgeon specializing in aesthetic and reconstructive procedures. He is committed to delivering safe outcomes with a focus on patient satisfaction.`,
    shortBio: "Plastic surgeon specializing in cosmetic and reconstructive care.",
    credentials: [],
    languages: [],
  },

  {
    id: "tripti-gupta",
    name: "Tripti Gupta",
    role: "Clinical Nutritionist",
    department: "Wellness",
    initials: "TG",
    avatarGradient: "from-gold-DEFAULT to-teal-800",
    image: "/images/Tripti-Gupta.jpg",
    bio: `Tripti Gupta is a clinical nutritionist who provides personalized dietary guidance for better health outcomes. She focuses on nutrition planning for recovery, lifestyle improvement, and long-term wellness.`,
    shortBio: "Clinical nutritionist focused on patient wellness and recovery.",
    credentials: ["Clinical Nutritionist"],
    languages: [],
  },

  {
    id: "dr-aparna-govil-bhasker",
    name: "Dr Aparna Govil Bhasker, MS",
    role: "Laparoscopic & Bariatric Surgeon",
    department: "Medical",
    initials: "AG",
    avatarGradient: "from-blue-700 to-teal-900",
    image: "/images/Dr.-Aparna.jpg",
    bio: `Dr Aparna Govil Bhasker is a laparoscopic and bariatric surgeon with expertise in advanced minimally invasive surgical procedures. She focuses on obesity treatment and surgical weight-loss solutions.`,
    shortBio: "Specialist in laparoscopic and bariatric surgery.",
    credentials: ["MS"],
    languages: [],
  },

  {
    id: "dr-sandiip-jain",
    name: "Dr Sandiip Jain",
    role: "Consultant Plastic Surgeon",
    department: "Medical",
    initials: "SJ",
    avatarGradient: "from-teal-600 to-navy-900",
    image: "/images/Sandip-Jain.jpg",
    bio: `Dr Sandiip Jain is a consultant plastic surgeon providing both reconstructive and aesthetic surgical solutions. He is dedicated to achieving natural and safe outcomes.`,
    shortBio: "Consultant plastic surgeon for reconstructive and cosmetic procedures.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-ibrahim-kothwala",
    name: "Dr Ibrahim Kothwala",
    role: "Urologist",
    department: "Medical",
    initials: "IK",
    avatarGradient: "from-blue-900 to-teal-700",
    image: "/images/Dr-Ibrahim-kothwala.jpg",
    bio: `Dr Ibrahim Kothwala is a urologist with strong expertise in surgical and clinical urology. He provides advanced treatment for urinary tract and kidney-related conditions.`,
    shortBio: "Urologist specializing in surgical and clinical urology.",
    credentials: ["MBBS", "MS", "DNB"],
    languages: [],
  },

  {
    id: "dr-prasad-bhagunde",
    name: "Dr Prasad Bhagunde",
    role: "Arthroscopic Surgeon",
    department: "Medical",
    initials: "PB",
    avatarGradient: "from-teal-700 to-blue-800",
    image: "/images/Dr-Prasad-Bhagunde.jpg",
    bio: `Dr Prasad Bhagunde is an arthroscopic surgeon specializing in minimally invasive joint surgeries. His focus includes sports injuries, ligament reconstruction, and joint repair.`,
    shortBio: "Arthroscopic surgeon focused on sports injury treatment.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-abbas-asgharali-mistry",
    name: "Dr Abbas Asgharali Mistry",
    role: "Reconstructive Plastic Surgeon",
    department: "Medical",
    initials: "AM",
    avatarGradient: "from-blue-700 to-navy-900",
    image: "/images/Dr-Abbas.jpg",
    bio: `Dr Abbas Asgharali Mistry is a reconstructive plastic surgeon with extensive expertise in advanced reconstructive procedures. He is dedicated to restoring function and improving quality of life for patients.`,
    shortBio: "Reconstructive plastic surgeon specializing in complex procedures.",
    credentials: ["MBBS", "MS", "MCh"],
    languages: [],
  },

  {
    id: "dr-pravin-banodkar",
    name: "Dr Pravin Banodkar",
    role: "Skin Specialist, Dermatologist & Cosmetologist",
    department: "Medical",
    initials: "PB",
    avatarGradient: "from-teal-500 to-blue-900",
    image: "/images/Dr-Pravin.jpg",
    bio: `Dr Pravin Banodkar is a dermatologist and cosmetologist specializing in skin care, cosmetic treatments, and advanced dermatology procedures. He provides personalized treatment for healthy and radiant skin.`,
    shortBio: "Dermatologist and cosmetologist specializing in skin treatments.",
    credentials: [],
    languages: [],
  },

  {
    id: "dr-husain-gheewala",
    name: "Dr Husain Gheewala",
    role: "Consultant Laparoscopic & Robotic Colorectal Surgeon",
    department: "Medical",
    initials: "HG",
    avatarGradient: "from-blue-900 to-teal-800",
    image: "/images/Dr.-HUSAIN-GHEEWALA.jpg",
    bio: `Dr Husain Gheewala is a highly experienced colorectal surgeon specializing in laparoscopic and robotic colorectal surgery. With international training exposure, he focuses on advanced surgical outcomes and patient recovery.`,
    shortBio: "Laparoscopic & robotic colorectal surgeon with international fellowship experience.",
    credentials: ["MBBS", "DNB (Surgery)", "MRCS (ED)", "MNAMS"],
    languages: [],
  },

  {
    id: "dr-amit-karad",
    name: "Dr Amit Karad",
    role: "Cardiothoracic Surgeon (Heart Transplant Pioneer)",
    department: "Medical",
    initials: "AK",
    avatarGradient: "from-teal-700 to-navy-900",
    image: "/images/Dr.-Amit-karad.jpg",
    bio: `Dr Amit Karad is a cardiothoracic surgeon known for advanced cardiac procedures and pioneering work in heart transplant surgery. He focuses on life-saving surgical innovation and long-term patient care.`,
    shortBio: "Leading cardiothoracic surgeon and pioneer in heart transplant surgery.",
    credentials: [],
    languages: [],
  },
];

// Get team member by ID
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((m) => m.id === id);
}