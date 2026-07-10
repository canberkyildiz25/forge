/* ── FORGE Athletic — typed content model ── */

export interface ProgramMeta {
  frequency: string;
  suitability: string;
  duration: string;
}

export interface Program {
  tag: string;
  title: string;
  desc: string;
  img: string;
  meta: ProgramMeta;
}

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  img: string;
  specs: string[];
}

export interface TierFeature {
  label: string;
  included: boolean;
}

export interface Tier {
  name: string;
  price: number;
  featured?: boolean;
  badge?: string;
  cta: string;
  features: TierFeature[];
}

export interface CompareRow {
  feature: string;
  challenger: string;
  elite: string;
  apex: string;
}

export interface Voice {
  quote: string;
  name: string;
  meta: string;
  avatar: string;
}

export interface GalleryItem {
  label: string;
  span: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  img?: string;
  video?: string;
  poster?: string;
}

const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export const programs: Program[] = [
  {
    tag: 'Foundation',
    title: 'Strength & Power',
    desc: 'Progressive overload programming built around the compound movements. Squat, hinge, press, pull — trained with intent, tracked with precision.',
    img: u('1526506118085-60ce8714f8c5', 700),
    meta: { frequency: '5 days/week', suitability: 'All levels', duration: '60 min' },
  },
  {
    tag: 'Performance',
    title: 'HIIT & Conditioning',
    desc: 'High-intensity interval training engineered around heart rate zones. Burn fat, build work capacity, and sharpen your athletic edge in 45 minutes.',
    img: u('1518611012118-696072aa579a', 700),
    meta: { frequency: '6 days/week', suitability: 'Intermediate', duration: '45 min' },
  },
  {
    tag: 'Recovery',
    title: 'Recovery & Mobility',
    desc: 'Structured protocols covering active recovery, fascial release, and joint mobility. The programme serious athletes take seriously.',
    img: u('1544367567-0f2fcb009e0b', 700),
    meta: { frequency: 'Daily', suitability: 'All levels', duration: '30–60 min' },
  },
  {
    tag: 'Combat',
    title: 'Combat Conditioning',
    desc: 'Boxing technique fused with sport conditioning. Pad work, bag rounds, and footwork drills — no contact, all cardio and coordination.',
    img: u('1549719386-74dfcbf7dbed', 700),
    meta: { frequency: '4 days/week', suitability: 'Beginner+', duration: '50 min' },
  },
  {
    tag: 'Technical',
    title: 'Olympic Lifting',
    desc: 'Clean, snatch, and jerk technique coached by certified weightlifting specialists. Available in small group and one-to-one formats.',
    img: u('1605296867304-46d5465a13f1', 700),
    meta: { frequency: '3 days/week', suitability: 'Intermediate+', duration: '75 min' },
  },
  {
    tag: 'Elite',
    title: 'Athletic Performance',
    desc: 'Sport-specific training for competitive athletes. Speed, agility, power, and periodised programming built around your competition calendar.',
    img: u('1593079831268-3381b0db4a77', 700),
    meta: { frequency: 'Custom', suitability: 'Athletes only', duration: 'Custom' },
  },
];

export const trainers: Trainer[] = [
  {
    name: 'James Calloway',
    role: 'Founder · Strength & Conditioning',
    bio: 'Former GB athletics squad member with 12 years of coaching experience across professional football, rugby, and track. James built FORGE around the training principles he wished he’d had access to earlier in his career.',
    img: u('1549476464-37392f717541', 600) + '&crop=faces',
    specs: ['CSCS Certified', 'Olympic Lifting', 'Sports Rehab'],
  },
  {
    name: 'Sofia Reyes',
    role: 'Head of Performance',
    bio: 'Spanish national team track cyclist and sports science MSc graduate. Sofia leads our periodisation and athlete performance programmes, specialising in power development and metabolic conditioning.',
    img: u('1550259979-ed79b48d2a30', 600) + '&crop=faces',
    specs: ['Olympic Athlete', 'Cycling Coach L3', 'Sports Science MSc'],
  },
  {
    name: 'Marcus Reid',
    role: 'HIIT & Combat Conditioning',
    bio: 'Professional boxer turned conditioning coach. Marcus brings eight years of elite boxing experience into his group conditioning classes — expect precision, pace, and the kind of sessions people come back for.',
    img: u('1567013127542-490d757e51fc', 600) + '&crop=faces',
    specs: ['Pro Boxing', 'Level 4 PT', 'Nutrition Coach'],
  },
  {
    name: 'Kenji Tanaka',
    role: 'Olympic Weightlifting',
    bio: 'Competitive weightlifter and certified USA Weightlifting coach. Kenji runs FORGE’s technical lifting programme and is the coach of choice for members serious about clean, snatch, and jerk.',
    img: u('1583864697784-a0efc8379f70', 600) + '&crop=faces',
    specs: ['USAW Certified', 'Competition Coach', 'Powerlifting'],
  },
  {
    name: 'Amara Osei',
    role: 'Mobility & Recovery Specialist',
    bio: 'Physiotherapist and movement specialist with a background in professional dance. Amara designs and leads FORGE’s recovery protocols and is the reason our members train consistently without breakdown.',
    img: u('1548690312-e3b507d8c110', 600) + '&crop=faces',
    specs: ['Physiotherapist', 'FRC Certified', 'Sports Massage'],
  },
  {
    name: 'Leo Marchetti',
    role: 'Athletic Performance',
    bio: 'Former Serie A academy conditioner, now working with professional footballers, tennis players, and triathletes at FORGE. Leo’s programmes are built around competition calendars and peak performance timing.',
    img: u('1517466787929-bc90951d0974', 600) + '&crop=faces',
    specs: ['Elite Sport', 'Speed & Agility', 'Sports Nutrition'],
  },
];

export const tiers: Tier[] = [
  {
    name: 'Challenger',
    price: 79,
    cta: 'Start Free Trial',
    features: [
      { label: 'Full gym floor access', included: true },
      { label: 'Group classes — 8 per week', included: true },
      { label: 'FORGE app & progress tracking', included: true },
      { label: 'Locker room & showers', included: true },
      { label: 'Personal training sessions', included: false },
      { label: 'Recovery suite', included: false },
      { label: 'Nutrition consultations', included: false },
      { label: 'Guest passes', included: false },
    ],
  },
  {
    name: 'Elite',
    price: 149,
    featured: true,
    badge: 'Most Popular',
    cta: 'Join Elite — Free Trial',
    features: [
      { label: 'Full gym floor access', included: true },
      { label: 'Unlimited group classes', included: true },
      { label: 'FORGE app & progress tracking', included: true },
      { label: 'Locker room & showers', included: true },
      { label: '2× PT sessions per month', included: true },
      { label: 'Recovery suite access', included: true },
      { label: 'Nutrition consultations', included: false },
      { label: '2 guest passes per month', included: true },
    ],
  },
  {
    name: 'Apex',
    price: 249,
    cta: 'Go Apex — Free Trial',
    features: [
      { label: 'Full gym floor access', included: true },
      { label: 'Unlimited group classes', included: true },
      { label: 'FORGE app & progress tracking', included: true },
      { label: 'Locker room & showers', included: true },
      { label: 'Weekly PT sessions', included: true },
      { label: 'Recovery suite — unlimited', included: true },
      { label: 'Monthly nutrition consultation', included: true },
      { label: 'Unlimited guest passes', included: true },
    ],
  },
];

export const compareRows: CompareRow[] = [
  { feature: 'Gym floor access', challenger: '✓', elite: '✓', apex: '✓' },
  { feature: 'Group classes per week', challenger: '8 sessions', elite: 'Unlimited', apex: 'Unlimited' },
  { feature: 'FORGE app & tracking', challenger: '✓', elite: '✓', apex: '✓' },
  { feature: 'Personal training sessions', challenger: '—', elite: '2 × /month', apex: 'Weekly' },
  { feature: 'Recovery suite', challenger: '—', elite: '✓', apex: 'Unlimited' },
  { feature: 'Nutrition consultations', challenger: '—', elite: '—', apex: 'Monthly' },
  { feature: 'Guest passes', challenger: '—', elite: '2 × /month', apex: 'Unlimited' },
  { feature: 'Priority class booking', challenger: '—', elite: '✓', apex: '✓' },
  { feature: 'Free trial', challenger: '2 weeks', elite: '2 weeks', apex: '2 weeks' },
];

export const voices: Voice[] = [
  {
    quote: 'Ten years in commercial gyms got me nowhere. Eight months here and I’ve put 40kg on my deadlift. The difference is the coaching — someone is always watching.',
    name: 'Daniel Okafor',
    meta: 'Elite member — 2 years',
    avatar: u('1566753323558-f4e0952af115', 100) + '&crop=faces',
  },
  {
    quote: 'A coach noticed my squat breaking down before I felt it, and rebuilt it in one session. That’s what you’re paying for. Everything else is just equipment.',
    name: 'Priya Sharma',
    meta: 'Apex member — 3 years',
    avatar: u('1581122584612-713f89daa8eb', 100) + '&crop=faces',
  },
];

export const gallery: GalleryItem[] = [
  { label: 'The Main Floor', span: 'a', img: u('1571902943202-507ec2618e8f', 1400) },
  { label: 'Free Weights', span: 'b', img: u('1517836357463-d25dfeac3438', 800) },
  { label: 'Recovery Suite', span: 'c', img: u('1558017487-06bf9f82613a', 800) },
  {
    label: 'Conditioning Studio',
    span: 'd',
    video: 'https://assets.mixkit.co/videos/52106/52106-720.mp4',
    poster: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
  },
  { label: 'The Rig', span: 'e', img: u('1584735935682-2f2b69dff9d2', 800) },
  { label: 'Lifting Platforms', span: 'f', img: u('1605296867304-46d5465a13f1', 800) },
];
