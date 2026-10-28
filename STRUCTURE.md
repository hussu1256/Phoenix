# Phoenix Global Wellness — Project Structure

```
phoenix-global-wellness/
├── app/
│   ├── [locale]/                      # next-intl locale wrapper
│   │   ├── layout.tsx                 # Per-locale layout (fonts, providers)
│   │   ├── page.tsx                   # Home page
│   │   ├── book-appointment/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── visionary/
│   │   │       └── page.tsx
│   │   ├── network/
│   │   │   └── team/
│   │   │       └── page.tsx
│   │   ├── treatments/
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Dynamic treatment page
│   │   ├── hospitals/
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Dynamic hospital page
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   └── book-appointment/
│   │       └── route.ts               # Nodemailer API route
│   ├── layout.tsx                     # Root layout
│   ├── globals.css                    # Global styles
│   ├── sitemap.ts                     # Dynamic sitemap
│   └── robots.ts                      # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── HospitalsSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── TreatmentsSection.tsx
│   │   ├── TeamPreview.tsx
│   │   └── BookingCTA.tsx
│   ├── shared/
│   │   ├── AnimatedSection.tsx        # Scroll reveal wrapper
│   │   ├── HospitalCard.tsx
│   │   ├── TreatmentCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── BookingForm.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── Button.tsx
│   │   └── LottiePlayer.tsx
│   └── providers/
│       ├── LenisProvider.tsx          # Smooth scroll
│       └── GSAPProvider.tsx
│
├── data/
│   ├── treatments.ts                  # All 20 treatment slugs + data
│   ├── hospitals.ts                   # All 10 hospital data
│   └── team.ts                        # Team members
│
├── lib/
│   ├── i18n/
│   │   ├── request.ts                 # next-intl server config
│   │   └── routing.ts                 # Locale routing config
│   ├── gsap/
│   │   └── animations.ts             # Reusable GSAP helpers
│   └── mailer.ts                      # Nodemailer config
│
├── messages/                          # i18n translation files
│   ├── en.json
│   ├── ar.json
│   ├── fr.json
│   ├── id.json
│   ├── ms.json
│   ├── pt.json
│   └── sw.json
│
├── public/
│   ├── lottie/
│   │   └── medical-pulse.json        # Lottie animation
│   └── images/
│       └── (static assets)
│
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```
