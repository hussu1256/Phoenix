export interface Treatment {
  slug: string;
  name: string;
  subtitle: string;
  icon: string;
  heroImage: string;
  description: string;
  longDescription: string;
  benefits: string[];
  conditions: string[];
  whyIndia: string;
  relatedHospitalSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const treatments: Treatment[] = [
  {
    slug: 'orthopaedic',
    name: 'Orthopaedic Surgery',
    subtitle: 'Advanced bone, joint & spine treatments',
    icon: '🦴',
    heroImage: 'https://images.unsplash.com/photo-1559757175-7cb036c8b9e7?w=1400&q=80',
    description:
      'Our orthopaedic program covers joint replacement, spinal surgeries, trauma, and sports injuries — led by fellowship-trained surgeons with international expertise.',
    longDescription: `Orthopaedic surgery encompasses the treatment of conditions affecting the musculoskeletal system — bones, joints, ligaments, tendons, muscles, and nerves. Phoenix Global Medical connects patients with India's and Singapore's finest orthopaedic centres, where minimally invasive techniques and robotic-assisted surgery deliver faster recovery and superior outcomes.

`,
    benefits: [
      'Minimally invasive surgical options',
      'Robotic-assisted joint replacement',
      'World-class rehabilitation programs',
      'Cost-effective packages vs. Western countries',
      'Short waiting times — procedures within days',
      'International-standard implants & hardware',
    ],
    conditions: [
      'Total Hip Replacement',
      'Total Knee Replacement',
      'Spine Surgery (TLIF, PLIF, ALIF)',
      'Arthroscopy (Shoulder, Knee)',
      'Sports Injury Treatment',
      'Fracture & Trauma Care',
      'Scoliosis Correction',
    ],
    whyIndia:
      'India offers orthopaedic procedures at 60–80% lower cost than the UK or USA, with no compromise on quality.',
    relatedHospitalSlugs: ['mount-elizabeth', 'kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Orthopaedic Surgery in India & Singapore | Phoenix Global Medical',
    metaDescription:
      'Expert hip, knee, spine surgery at top hospitals in India and Singapore. Fellowship-trained surgeons, robotic assistance, 60% cost savings.',
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    subtitle: 'Advanced heart & vascular care',
    icon: '❤️',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80',
    description:
      'Comprehensive cardiac care including open heart surgery, angioplasty, valve repair, and complex arrhythmia management at internationally accredited centres.',
    longDescription: `Cardiovascular disease remains a leading global health challenge. Our partner hospitals — including Saifee Hospital and Bhatia Hospital in Mumbai — are equipped with state-of-the-art cath labs, hybrid ORs, and ECMO support for complex cardiac cases.

From coronary artery bypass grafting (CABG) to transcatheter aortic valve replacement (TAVR), our network surgeons bring decades of expertise to every procedure.`,
    benefits: [
      'Advanced cath labs & hybrid ORs',
      'Minimally invasive heart surgery',
      'TAVR & structural heart procedures',
      '24/7 cardiac ICU support',
      'Comprehensive pre-op cardiac evaluation',
      'Post-operative cardiac rehabilitation',
    ],
    conditions: [
      'Coronary Artery Disease (CABG)',
      'Heart Valve Repair & Replacement',
      'Angioplasty & Stenting',
      'Atrial Fibrillation (Ablation)',
      'Congenital Heart Disease',
      'Heart Failure Management',
      'Peripheral Vascular Disease',
    ],
    whyIndia:
      'Cardiac surgery in India costs 70–80% less than in Western countries. Mumbai hospitals have some of the best cardiac surgery outcomes in Asia, with JCI accreditation and internationally trained surgeons.',
    relatedHospitalSlugs: ['saifee', 'bhatia', 'hinduja', 'mount-elizabeth'],
    metaTitle: 'Heart Surgery & Cardiology in India | Phoenix Global Medical',
    metaDescription:
      'World-class cardiac care including bypass surgery, angioplasty, and valve replacement in Mumbai and Singapore.',
  },
  {
    slug: 'oncology',
    name: 'Oncology',
    subtitle: 'Comprehensive cancer diagnosis & treatment',
    icon: '🎗️',
    heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80',
    description:
      'Multi-disciplinary cancer care including chemotherapy, targeted therapy, immunotherapy, robotic surgery, and radiation oncology at India\'s top cancer hospitals.',
    longDescription: `Phoenix Global Medical partners with India's premier oncology centres — Global Hospitals, Kokilaben, Wockhardt, Breach Candy, and Hinduja — offering comprehensive cancer treatment for solid tumours, haematological malignancies, and rare cancers.

Our oncology network uses the latest technologies including CyberKnife radiosurgery, PET-CT guided biopsy, CAR-T cell therapy, and robotic-assisted tumour resection.`,
    benefits: [
      'Multi-disciplinary tumour board review',
      'Latest targeted therapy & immunotherapy',
      'Robotic & laparoscopic cancer surgery',
      'CyberKnife & IMRT radiation',
      'Clinical trial access',
      'Dedicated oncology patient navigators',
    ],
    conditions: [
      'Breast Cancer',
      'Lung Cancer',
      'Colorectal Cancer',
      'Prostate Cancer',
      'Liver & Pancreatic Cancer',
      'Cervical & Ovarian Cancer',
      'Blood Cancers (Lymphoma, Leukaemia)',
    ],
    whyIndia:
      'India\'s top cancer hospitals offer treatment at a fraction of US or UK costs, with equivalent clinical outcomes. Mumbai\'s oncology centres have internationally trained oncologists and cutting-edge radiation technology.',
    relatedHospitalSlugs: ['global-hospitals', 'kokilaben', 'wockhardt', 'breach-candy', 'hinduja'],
    metaTitle: 'Cancer Treatment in India | Oncology | Phoenix Global Medical',
    metaDescription:
      'Comprehensive cancer care at India\'s top hospitals. Chemotherapy, immunotherapy, robotic surgery, CyberKnife radiation.',
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    subtitle: 'Brain, spine & nervous system care',
    icon: '🧠',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80',
    description:
      'Advanced neurological and neurosurgical treatments including deep brain stimulation, epilepsy surgery, stroke management, and complex spinal cord procedures.',
    longDescription: `Neurological conditions demand the highest level of precision and expertise. Our partner hospitals feature advanced intraoperative MRI, neuronavigation systems, awake craniotomy capability, and comprehensive stroke units.

Whether you require treatment for a brain tumour, Parkinson's disease, epilepsy, or a complex spinal cord condition, our neurology network provides access to world-class neurologists and neurosurgeons.`,
    benefits: [
      'Advanced intraoperative MRI & neuronavigation',
      'Awake craniotomy for eloquent cortex tumours',
      'Deep Brain Stimulation (DBS) for Parkinson\'s',
      'Gamma Knife radiosurgery',
      'Comprehensive stroke centre (24/7)',
      'Multidisciplinary neurorehabilitation',
    ],
    conditions: [
      'Brain Tumours',
      'Parkinson\'s Disease',
      'Epilepsy Surgery',
      'Stroke Treatment & Rehabilitation',
      'Spinal Cord Tumours',
      'Cerebrovascular Disease',
      'Multiple Sclerosis',
    ],
    whyIndia:
      'India\'s neurosurgery centres have invested heavily in the latest neuronavigation and robotic systems. Treatment costs are 65–75% lower than comparable Western institutions.',
    relatedHospitalSlugs: ['hinduja', 'kokilaben', 'mount-elizabeth'],
    metaTitle: 'Neurology & Neurosurgery in India | Phoenix Global Medical',
    metaDescription:
      'World-class brain and spine surgery, stroke care, and deep brain stimulation in India and Singapore.',
  },
  {
    slug: 'rhinology',
    name: 'Rhinology',
    subtitle: 'Nose, sinus & skull base treatment',
    icon: '👃',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffbb7d455d3?w=1400&q=80',
    description:
      'Specialised endoscopic sinus surgery, septoplasty, rhinoplasty, and skull base procedures by ENT subspecialists with advanced endoscopic training.',
    longDescription: `Rhinology focuses on the diagnosis and treatment of nasal and sinus disorders. Our partner hospitals offer functional endoscopic sinus surgery (FESS), balloon sinuplasty, endoscopic skull base surgery, and complex nasal reconstruction.

Chronic sinusitis, nasal polyps, deviated septum, anosmia, and anterior skull base tumours are among the conditions treated with minimally invasive techniques.`,
    benefits: [
      'Minimally invasive endoscopic techniques',
      'Image-guided sinus surgery (navigation)',
      'Same-day/outpatient procedures available',
      'Expert rhinoplasty & reconstruction',
      'High success rates for chronic sinusitis',
      'Combined skull base surgery capability',
    ],
    conditions: [
      'Chronic Sinusitis',
      'Nasal Polyps',
      'Deviated Nasal Septum',
      'Skull Base Tumours',
      'Anosmia (Loss of Smell)',
      'Allergic Rhinitis',
      'Functional & Cosmetic Rhinoplasty',
    ],
    whyIndia:
      'India\'s ENT subspecialists have extensive training in advanced endoscopic techniques. Procedures cost 50–70% less than in the UK or USA.',
    relatedHospitalSlugs: ['hinduja', 'saifee', 'kokilaben'],
    metaTitle: 'Rhinology & Sinus Surgery in India | Phoenix Global Medical',
    metaDescription:
      'Expert endoscopic sinus surgery, septoplasty, and skull base procedures in India.',
  },
  {
    slug: 'obstetrics',
    name: 'Obstetrics',
    subtitle: 'Maternity & newborn care',
    icon: '🤱',
    heroImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&q=80',
    description:
      'Comprehensive maternity services from prenatal care to high-risk pregnancy management, IVF, and neonatal intensive care at accredited women\'s hospitals.',
    longDescription: `From routine antenatal care to complex high-risk pregnancies, our partner hospitals provide a full continuum of obstetric care. Facilities include level-3 NICUs, fetal medicine units, obstetric anaesthesia teams, and 24/7 maternal-fetal medicine specialists.

IVF, surrogacy guidance, prenatal genetic screening, and foetal interventions are also available through our specialist network.`,
    benefits: [
      'High-risk pregnancy specialist teams',
      'Level-3 NICU for premature newborns',
      'Advanced foetal medicine & MFM unit',
      'IVF & assisted reproductive technology',
      'Minimally invasive gynaecological surgery',
      'Postpartum support & lactation counseling',
    ],
    conditions: [
      'High-Risk Pregnancy',
      'Preterm Labour Management',
      'Placenta Praevia & Accreta',
      'Foetal Growth Restriction',
      'IVF & Fertility Treatment',
      'Prenatal Genetic Diagnosis',
      'Gestational Diabetes Management',
    ],
    whyIndia:
      'India offers world-class maternity care at a fraction of the cost of Singapore or Western countries, with internationally trained maternal-fetal medicine specialists.',
    relatedHospitalSlugs: ['saifee', 'kokilaben', 'hinduja'],
    metaTitle: 'Obstetrics & Maternity Care in India | Phoenix Global Medical',
    metaDescription:
      'High-risk pregnancy management, IVF, and NICU care at top hospitals in India.',
  },
  {
    slug: 'dental',
    name: 'Dental',
    subtitle: 'Complete oral health & cosmetic dentistry',
    icon: '🦷',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80',
    description:
      'Full-spectrum dental care including implants, orthodontics, cosmetic dentistry, full mouth rehabilitation, and oral maxillofacial surgery.',
    longDescription: `India has rapidly emerged as a premier dental tourism destination, offering international-standard dental care at 60–70% lower costs. Our dental partners use the same implant brands (Straumann, Nobel Biocare, Zimmer) and equipment as top clinics in Europe and North America.

From single-tooth implants to full-arch rehabilitation (All-on-4/All-on-6), complex jaw surgeries, and smile makeovers — our network covers every aspect of dental care.`,
    benefits: [
      'International-brand implants (Straumann, Nobel)',
      'Same-day teeth procedures available',
      'Digital smile design & mock-ups',
      'Full-mouth rehabilitation packages',
      'Invisible braces (Invisalign)',
      'Combined dental & holiday packages',
    ],
    conditions: [
      'Dental Implants',
      'All-on-4 / All-on-6 Rehabilitation',
      'Orthodontics & Invisalign',
      'Veneers & Smile Makeover',
      'Root Canal Treatment',
      'Jaw Surgery (Orthognathic)',
      'Gum Disease Treatment',
    ],
    whyIndia:
      'A full mouth rehabilitation in India costs $3,000–8,000 vs $25,000–50,000 in the UK. Quality is identical — the same materials, same brands, internationally trained dentists.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Dental Tourism India — Implants & Cosmetic Dentistry | Phoenix Global Medical',
    metaDescription:
      'Premium dental implants, smile makeovers, and full mouth rehabilitation in India at 60% lower cost.',
  },
  {
    slug: 'gynaecology',
    name: 'Gynaecology',
    subtitle: "Women's health & reproductive care",
    icon: '👩‍⚕️',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1400&q=80',
    description:
      "Comprehensive gynaecological care including laparoscopic surgery, fertility treatments, menopause management, and gynaecological oncology.",
    longDescription: `Our gynaecology network covers the full spectrum of women's health — from routine gynaecological care to complex laparoscopic and robotic procedures. Partner hospitals have dedicated women's health centres with subspecialist gynaecologists in reproductive medicine, urogynecology, and gynaecological oncology.

Minimally invasive hysterectomy, endometriosis excision, fibroid removal (myomectomy), and pelvic floor reconstruction are among the procedures performed at our partner centres.`,
    benefits: [
      'Robotic & laparoscopic procedures',
      'Dedicated women\'s health centres',
      'Fertility preservation services',
      'Minimally invasive hysterectomy',
      'Expert endometriosis surgeons',
      'Comprehensive menopause management',
    ],
    conditions: [
      'Endometriosis',
      'Uterine Fibroids',
      'Ovarian Cysts & PCOS',
      'Pelvic Floor Disorders',
      'Hysterectomy',
      'Infertility & IUI',
      'Gynaecological Cancers',
    ],
    whyIndia:
      'India\'s gynaecology specialists perform thousands of complex minimally invasive procedures annually. Costs are 60–75% lower than Western countries with equivalent outcomes.',
    relatedHospitalSlugs: ['saifee', 'kokilaben', 'hinduja'],
    metaTitle: "Gynaecology & Women's Health in India | Phoenix Global Medical",
    metaDescription:
      "Expert gynaecological care including laparoscopic surgery, fertility treatment, and menopause management.",
  },
  {
    slug: 'diabetology',
    name: 'Diabetology',
    subtitle: 'Diabetes management & prevention',
    icon: '💉',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80',
    description:
      'Holistic diabetes care including advanced medical management, lifestyle counseling, diabetic complication treatment, and metabolic surgery for severe cases.',
    longDescription: `Phoenix Global Medical connects patients with specialist diabetologists who take a comprehensive approach to diabetes management. This includes insulin pump therapy (CSII), continuous glucose monitoring (CGM), diabetic foot care, and metabolic/bariatric surgery for type-2 diabetes reversal.

Our partner hospitals have dedicated diabetes centres with endocrinologists, dietitians, diabetic educators, and wound care specialists working together.`,
    benefits: [
      'Advanced CGM & insulin pump management',
      'Metabolic surgery for T2DM reversal',
      'Diabetic foot & wound care clinic',
      'Retinopathy & nephropathy screening',
      'Structured diabetes education programs',
      'Personalised nutrition & lifestyle plans',
    ],
    conditions: [
      'Type 1 & Type 2 Diabetes',
      'Gestational Diabetes',
      'Diabetic Foot Ulcers',
      'Diabetic Retinopathy',
      'Diabetic Nephropathy',
      'Metabolic Syndrome',
      'Pre-Diabetes',
    ],
    whyIndia:
      'India has world-class diabetologists and comprehensive diabetes programmes at a fraction of Western costs. Metabolic surgery packages are particularly cost-effective.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Diabetes Treatment in India | Diabetology | Phoenix Global Medical',
    metaDescription:
      'Comprehensive diabetes management, CGM, metabolic surgery, and diabetic complication care in India.',
  },
  {
    slug: 'pediatric',
    name: 'Pediatric Care',
    subtitle: "Children's health & wellbeing",
    icon: '👶',
    heroImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80',
    description:
      "Specialised care for children from neonates to adolescents, covering all medical and surgical subspecialties including paediatric cardiology, oncology, and neurology.",
    longDescription: `Our paediatric network includes dedicated children's hospitals and paediatric units within our partner hospitals. Subspecialties include paediatric cardiology (including congenital heart surgery), paediatric oncology, paediatric neurology, neonatology, and paediatric orthopaedics.

PICU and NICU facilities at our partner hospitals are equipped to manage the most critically ill children, with paediatric intensivists available around the clock.`,
    benefits: [
      'Dedicated paediatric & NICU units',
      'Paediatric cardiac surgery (CHD)',
      'Child-friendly hospital environments',
      'Subspecialist paediatric teams',
      'Family accommodation support',
      'Paediatric rehabilitation services',
    ],
    conditions: [
      'Congenital Heart Disease',
      'Paediatric Cancers',
      'Neonatal Conditions',
      'Paediatric Neurological Disorders',
      'Paediatric Orthopaedics',
      'Childhood Metabolic Diseases',
      'Developmental Disorders',
    ],
    whyIndia:
      'Paediatric super-specialty care in India rivals the best children\'s hospitals globally, at 60–70% lower cost. Particularly strong for complex congenital heart surgery.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'mount-elizabeth'],
    metaTitle: "Paediatric Care in India | Children's Hospital | Phoenix Global Medical",
    metaDescription:
      "Specialist children's healthcare including cardiac surgery, oncology, and NICU care in India.",
  },
  {
    slug: 'homeopathy',
    name: 'Homeopathy',
    subtitle: 'Classical homeopathic healing',
    icon: '💊',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80',
    description:
      'Classical and contemporary homeopathy by experienced practitioners, addressing chronic conditions, autoimmune disorders, and overall Medical.',
    longDescription: `Jaslok Hospital in Mumbai houses one of India's most respected homeopathy departments, offering classical constitutional homeopathy alongside modern diagnostic tools. Homeopathic treatment is particularly sought for chronic conditions that have not responded well to conventional medicine.

Conditions including chronic skin disorders, autoimmune diseases, recurrent infections, and allergic conditions are addressed through individualised constitutional prescribing.`,
    benefits: [
      'Classical constitutional prescribing',
      'Integrated with modern diagnostics',
      'Safe for children & elderly',
      'No side effects',
      'Effective for chronic conditions',
      'Holistic mind-body approach',
    ],
    conditions: [
      'Chronic Skin Disorders (Psoriasis, Eczema)',
      'Autoimmune Conditions',
      'Recurrent Respiratory Infections',
      'Allergies & Asthma',
      'Anxiety & Depression',
      'Irritable Bowel Syndrome',
      'Paediatric Conditions',
    ],
    whyIndia:
      'India has the world\'s largest and most experienced homeopathic medical community. Jaslok Hospital offers homeopathy integrated with conventional diagnostic capabilities.',
    relatedHospitalSlugs: ['jaslok'],
    metaTitle: 'Homeopathy Treatment in India | Jaslok Hospital | Phoenix Global Medical',
    metaDescription:
      'Classical homeopathic treatment at Jaslok Hospital, Mumbai. Effective for chronic conditions with no side effects.',
  },
  {
    slug: 'endocrinology',
    name: 'Endocrinology',
    subtitle: 'Hormone & metabolic disorder treatment',
    icon: '⚗️',
    heroImage: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1400&q=80',
    description:
      'Expert management of thyroid disorders, pituitary tumours, adrenal disorders, reproductive endocrinology, and metabolic bone diseases.',
    longDescription: `Our endocrinology partners specialise in the full spectrum of hormonal and metabolic disorders. This includes thyroid cancer surgery, pituitary and adrenal tumour management, hypoparathyroidism, and complex reproductive endocrinology including PCOS and male hypogonadism.

Our centres use the latest molecular diagnostics, nuclear medicine (radioiodine therapy), and minimally invasive endocrine surgery techniques.`,
    benefits: [
      'Expert thyroid & parathyroid surgery',
      'Radioiodine therapy on-site',
      'Pituitary tumour multidisciplinary team',
      'Advanced adrenal surgery',
      'Reproductive endocrinology subspecialists',
      'Metabolic bone disease management',
    ],
    conditions: [
      'Thyroid Disorders (Hypothyroid, Hyperthyroid)',
      'Thyroid Cancer',
      'Pituitary Tumours',
      'Cushing\'s & Addison\'s Disease',
      'PCOS',
      'Osteoporosis & Metabolic Bone Disease',
      'Male & Female Hypogonadism',
    ],
    whyIndia:
      'India\'s endocrine surgery centres perform high volumes of thyroid and adrenal procedures with excellent outcomes and significantly lower costs.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Endocrinology Treatment in India | Phoenix Global Medical',
    metaDescription:
      'Thyroid, pituitary, and adrenal disorder treatment in India. Expert endocrinologists and minimally invasive surgery.',
  },
  {
    slug: 'ent',
    name: 'ENT',
    subtitle: 'Ear, nose & throat care',
    icon: '👂',
    heroImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=80',
    description:
      'Comprehensive ENT treatments including cochlear implants, hearing restoration, voice disorders, sleep surgery, and head & neck cancer management.',
    longDescription: `Our ENT network covers all sub-specialties including otology (ear), rhinology (nose/sinus), laryngology (voice), and head & neck oncology. Cochlear implant programmes, advanced endoscopic skull base surgery, and robotic-assisted head and neck procedures are available at our partner centres.

Paediatric ENT, hearing aids, and tinnitus management clinics are also part of the comprehensive ENT offering.`,
    benefits: [
      'Cochlear implant programme',
      'Advanced endoscopic ENT surgery',
      'Robotic head & neck surgery',
      'Voice & swallowing rehabilitation',
      'Paediatric ENT specialists',
      'Hearing aid & audiological services',
    ],
    conditions: [
      'Hearing Loss & Cochlear Implants',
      'Chronic Ear Infections',
      'Tonsil & Adenoid Problems',
      'Voice Disorders & Vocal Cord Surgery',
      'Sleep Apnoea Surgery',
      'Head & Neck Cancer',
      'Salivary Gland Disorders',
    ],
    whyIndia:
      'Cochlear implants in India cost $15,000–25,000 vs $60,000–80,000 in the West. ENT surgical outcomes are comparable with high-volume experience.',
    relatedHospitalSlugs: ['hinduja', 'saifee', 'kokilaben'],
    metaTitle: 'ENT Treatment & Cochlear Implants in India | Phoenix Global Medical',
    metaDescription:
      'Expert ear, nose, and throat care including cochlear implants and head & neck surgery in India.',
  },
  {
    slug: 'ayurveda',
    name: 'Ayurveda',
    subtitle: 'Ancient healing, modern approach',
    icon: '🌿',
    heroImage: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1400&q=80',
    description:
      'Authentic Ayurvedic treatments including Panchakarma, herbal therapies, Shirodhara, and comprehensive lifestyle medicine for holistic wellbeing.',
    longDescription: `Ayurveda — India's 5,000-year-old system of medicine — offers powerful tools for prevention, rejuvenation, and the treatment of chronic disease. Phoenix connects patients with authentic Ayurvedic centres that combine classical treatments with modern clinical assessment.

Panchakarma (the five purification procedures), Abhyanga (oil massage), Shirodhara (oil forehead treatment), Nasya, and Basti are administered by trained Ayurvedic physicians (Vaidyas) in clinical settings.`,
    benefits: [
      'Authentic Panchakarma programmes',
      'Qualified Vaidyas (Ayurvedic physicians)',
      'Integrated modern health assessment',
      'Personalised herbal medicine',
      'Stress & mental Medical programmes',
      'Detox & rejuvenation packages',
    ],
    conditions: [
      'Chronic Back Pain & Arthritis',
      'Stress & Burnout',
      'Skin Disorders',
      'Digestive Disorders',
      'Neurological Conditions',
      'Fertility Support',
      'Weight Management',
    ],
    whyIndia:
      'India is the birthplace of Ayurveda. Authentic clinical-grade Ayurvedic treatment is available here that cannot be replicated elsewhere — at very affordable prices.',
    relatedHospitalSlugs: ['jaslok'],
    metaTitle: 'Ayurveda Treatment in India — Panchakarma & Medical | Phoenix Global Medical',
    metaDescription:
      'Authentic Ayurvedic treatment including Panchakarma, Shirodhara, and personalised Medical programmes in India.',
  },
  {
    slug: 'psychiatry',
    name: 'Psychiatry',
    subtitle: 'Mental health & wellbeing',
    icon: '🧘',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80',
    description:
      'Comprehensive mental healthcare including mood disorders, anxiety, addiction treatment, neuropsychiatric conditions, and residential rehabilitation.',
    longDescription: `Mental health is an integral part of holistic wellbeing. Our psychiatric partners offer inpatient and outpatient mental health services, addiction medicine, psychotherapy, TMS (transcranial magnetic stimulation), ECT, and neuropsychological assessment.

Specialised programmes for depression, bipolar disorder, schizophrenia, PTSD, OCD, eating disorders, and substance use disorders are available in confidential, supportive environments.`,
    benefits: [
      'Confidential & compassionate care',
      'TMS & ECT where appropriate',
      'Evidence-based psychotherapy',
      'Addiction medicine & detox',
      'Family therapy programmes',
      'Residential rehabilitation options',
    ],
    conditions: [
      'Depression & Bipolar Disorder',
      'Anxiety & Panic Disorders',
      'Schizophrenia & Psychosis',
      'OCD & PTSD',
      'Addiction & Substance Use',
      'Eating Disorders',
      'Neuropsychiatric Conditions',
    ],
    whyIndia:
      'India offers high-quality psychiatric care at a fraction of Western costs, with English-speaking psychiatrists trained at top international institutions.',
    relatedHospitalSlugs: ['hinduja', 'kokilaben', 'saifee'],
    metaTitle: 'Psychiatry & Mental Health Treatment in India | Phoenix Global Medical',
    metaDescription:
      'Comprehensive mental health care, addiction treatment, and psychiatric rehabilitation in India.',
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    subtitle: 'Advanced eye care & surgery',
    icon: '👁️',
    heroImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=80',
    description:
      'Full-spectrum eye care including LASIK, cataract surgery, retinal treatments, corneal transplants, and management of complex eye diseases.',
    longDescription: `Our ophthalmology network uses the latest technology including femtosecond LASIK, SMILE surgery, micro-incision cataract surgery (MICS), anti-VEGF injections for macular degeneration, and advanced vitreoretinal surgery.

Paediatric ophthalmology, neuro-ophthalmology, oculoplastics, and glaucoma subspecialty services are available at our partner centres.`,
    benefits: [
      'Bladeless femtosecond LASIK & SMILE',
      'Premium IOL cataract surgery',
      'Advanced vitreoretinal surgery',
      'Anti-VEGF & photodynamic therapy',
      'Corneal transplant & crosslinking',
      'Paediatric eye surgery',
    ],
    conditions: [
      'Cataract',
      'Refractive Error (LASIK)',
      'Glaucoma',
      'Diabetic Retinopathy',
      'Macular Degeneration',
      'Corneal Disease',
      'Squint (Strabismus)',
    ],
    whyIndia:
      'LASIK in India costs $300–600 per eye vs $2,000–3,000 in the UK. Cataract surgery with premium lenses costs 70% less, performed by highly experienced surgeons.',
    relatedHospitalSlugs: ['hinduja', 'kokilaben', 'saifee'],
    metaTitle: 'Eye Surgery & LASIK in India | Ophthalmology | Phoenix Global Medical',
    metaDescription:
      'Advanced eye care including LASIK, cataract surgery, and retinal treatment in India at affordable prices.',
  },
  {
    slug: 'pulmonology',
    name: 'Pulmonology',
    subtitle: 'Lung & respiratory care',
    icon: '🫁',
    heroImage: 'https://images.unsplash.com/photo-1559757175-7cb036c8b9e7?w=1400&q=80',
    description:
      'Expert management of asthma, COPD, sleep apnoea, interstitial lung disease, lung cancer, and complex respiratory conditions requiring advanced interventional bronchoscopy.',
    longDescription: `Our pulmonology partners offer comprehensive respiratory care including advanced bronchoscopy (EBUS, cryobiopsy, electromagnetic navigational bronchoscopy), sleep laboratory studies, high-dependency respiratory units, and pulmonary rehabilitation programmes.

Lung cancer diagnosis and staging, COPD management, pulmonary hypertension, and rare interstitial lung diseases are treated by a multidisciplinary team.`,
    benefits: [
      'Advanced interventional bronchoscopy',
      'Full-service sleep laboratory',
      'Pulmonary hypertension centre',
      'COPD structured management programme',
      'Multidisciplinary lung cancer team',
      'Pulmonary rehabilitation',
    ],
    conditions: [
      'Asthma',
      'COPD & Emphysema',
      'Sleep Apnoea',
      'Interstitial Lung Disease',
      'Lung Cancer',
      'Pulmonary Hypertension',
      'Pneumonia & Respiratory Infections',
    ],
    whyIndia:
      'India\'s pulmonology centres offer advanced bronchoscopic procedures and comprehensive respiratory care at significantly lower costs than Western counterparts.',
    relatedHospitalSlugs: ['hinduja', 'kokilaben', 'wockhardt'],
    metaTitle: 'Pulmonology & Lung Treatment in India | Phoenix Global Medical',
    metaDescription:
      'Expert respiratory care, bronchoscopy, sleep apnoea treatment, and lung cancer management in India.',
  },
  {
    slug: 'urology',
    name: 'Urology',
    subtitle: 'Urinary tract & male reproductive health',
    icon: '🔬',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80',
    description:
      'Advanced urological care including robotic prostatectomy, kidney stone treatment (RIRS, PCNL), bladder cancer surgery, and male reproductive procedures.',
    longDescription: `Phoenix connects patients with expert urologists performing high volumes of complex procedures. Robotic-assisted radical prostatectomy (da Vinci system), laparoscopic nephrectomy, flexible ureteroscopy (RIRS) for kidney stones, and cystoscopic bladder procedures are all available.

Andrology (male infertility, erectile dysfunction) and urodynamics studies for incontinence are also part of the comprehensive urology offering.`,
    benefits: [
      'Da Vinci robotic prostatectomy',
      'Laser kidney stone treatment (RIRS)',
      'Laparoscopic kidney surgery',
      'Bladder cancer (TURBT & cystectomy)',
      'Andrology & male fertility',
      'Incontinence & urodynamics',
    ],
    conditions: [
      'Prostate Cancer (Robotic Surgery)',
      'Kidney Stones',
      'Bladder Cancer',
      'Kidney Cancer (Nephrectomy)',
      'BPH (Enlarged Prostate)',
      'Male Infertility',
      'Urinary Incontinence',
    ],
    whyIndia:
      'Robotic prostatectomy in India costs 70% less than in the US. High-volume urology centres achieve excellent oncological and functional outcomes.',
    relatedHospitalSlugs: ['hinduja', 'kokilaben', 'saifee'],
    metaTitle: 'Urology & Robotic Surgery in India | Phoenix Global Medical',
    metaDescription:
      'Robotic prostatectomy, kidney stone treatment, and urological cancer surgery in India at affordable prices.',
  },
  {
    slug: 'dietitian',
    name: 'Dietitian & Nutrition',
    subtitle: 'Personalised nutrition & Medical',
    icon: '🥗',
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&q=80',
    description:
      'Evidence-based nutrition counseling for weight management, chronic disease management, sports performance, and pre/post-operative nutritional support.',
    longDescription: `Nutrition is the foundation of health. Our dietitian network offers personalised medical nutrition therapy (MNT) for chronic diseases including diabetes, cardiovascular disease, cancer, kidney disease, and gastrointestinal conditions.

Weight management programmes using behavioural therapy combined with medical nutrition, pre-surgical optimisation, and sports nutrition for elite athletes are also available.`,
    benefits: [
      'Registered clinical dietitians',
      'Medical nutrition therapy (MNT)',
      'Weight management programmes',
      'Pre & post-surgery nutrition',
      'Sports performance nutrition',
      'Paediatric nutrition specialists',
    ],
    conditions: [
      'Obesity & Weight Management',
      'Diabetes Nutrition',
      'Cardiovascular Nutrition',
      'Cancer Nutrition Support',
      'Kidney Disease Nutrition',
      'Eating Disorders',
      'Sports & Athletic Nutrition',
    ],
    whyIndia:
      'India\'s registered dietitians are trained to international standards (AND/BDA-equivalent) and provide comprehensive nutrition support as part of hospital treatment packages.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Clinical Dietitian & Nutrition Therapy in India | Phoenix Global Medical',
    metaDescription:
      'Personalised nutrition counseling, weight management, and medical nutrition therapy in India.',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    subtitle: 'Skin, hair & nail care',
    icon: '✨',
    heroImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&q=80',
    description:
      'Comprehensive dermatological care including cosmetic treatments, skin cancer management, hair restoration, and advanced aesthetic procedures.',
    longDescription: `Our dermatology partners offer medical dermatology (skin diseases, immunobullous disorders, phototherapy) alongside cosmetic dermatology (laser resurfacing, PRP hair treatment, fillers, Botox, chemical peels) and dermatological surgery (Mohs surgery for skin cancer, scar revision).

Hair loss (androgenetic alopecia, alopecia areata) is treated with a combination of medical, procedural (PRP, LLLT), and surgical approaches (FUE hair transplant) by dedicated trichologists.`,
    benefits: [
      'Advanced laser & light therapy',
      'FUE hair transplant (DHI)',
      'Mohs surgery for skin cancer',
      'PRP therapy for hair & skin',
      'Phototherapy (UVB, PUVA)',
      'Aesthetic dermatology packages',
    ],
    conditions: [
      'Psoriasis & Eczema',
      'Acne & Rosacea',
      'Hair Loss & Alopecia',
      'Skin Cancer (BCC, SCC, Melanoma)',
      'Vitiligo',
      'Pigmentation Disorders',
      'Anti-Ageing & Rejuvenation',
    ],
    whyIndia:
      'India offers world-class dermatological and aesthetic procedures at 60–70% of Western prices. FUE hair transplants and laser treatments are particularly popular for medical tourists.',
    relatedHospitalSlugs: ['kokilaben', 'hinduja', 'saifee'],
    metaTitle: 'Dermatology & Skin Treatment in India | Phoenix Global Medical',
    metaDescription:
      'Expert skin, hair, and nail care including FUE hair transplant, laser therapy, and skin cancer management in India.',
  },
];

// Helper to get treatment by slug
export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

// Helper to get all slugs (for generateStaticParams)
export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.slug);
}
