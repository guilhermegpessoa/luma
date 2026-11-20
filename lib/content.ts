import type { Avatar } from '@/components/ui/AvatarStack';

export type NavItem = { label: string; href: string };
export type Category = {
  id: string;
  title: string;
  description: string;
  href: string;
};
export type Step = {
  id: string;
  title: string;
  description: string;
  icon: 'focus' | 'learn' | 'practice';
};
export type Stat = { value: string; label: string };
export type FooterColumn = { title: string; links: NavItem[] };

export const navItems: NavItem[] = [
  { label: 'Courses', href: '#courses' },
  { label: 'For Teams', href: '#featured' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#how-it-works' },
];

export const categories: Category[] = [
  {
    id: 'product',
    title: 'Product Design',
    description: 'Turn complex problems into clear, useful experiences.',
    href: '#featured',
  },
  {
    id: 'tech',
    title: 'Technology',
    description:
      'Build a stronger understanding of the tools shaping digital products.',
    href: '#featured',
  },
  {
    id: 'business',
    title: 'Business',
    description:
      'Develop practical skills for better decisions and stronger teams.',
    href: '#featured',
  },
  {
    id: 'creative',
    title: 'Creative',
    description: 'Explore new ways to communicate, create and tell stories.',
    href: '#featured',
  },
];

export const steps: Step[] = [
  {
    id: 'focus',
    icon: 'focus',
    title: 'Choose your focus',
    description:
      'Find courses based on the skill you want to build, not endless content categories.',
  },
  {
    id: 'learn',
    icon: 'learn',
    title: 'Learn from experience',
    description:
      'Follow concise lessons created by professionals who use these skills.',
  },
  {
    id: 'practice',
    icon: 'practice',
    title: 'Put it into practice',
    description:
      'Every course includes practical exercises designed to turn knowledge into action.',
  },
];

export const stats: Stat[] = [
  { value: '24K+', label: 'active learners' },
  { value: '120+', label: 'expert-led courses' },
  { value: '92%', label: 'complete their first course' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Courses', href: '#courses' },
      { label: 'Categories', href: '#courses' },
      { label: 'Instructors', href: '#community' },
      { label: 'For Teams', href: '#featured' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#how-it-works' },
      { label: 'Careers', href: '#' },
      { label: 'Journal', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#contact' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
];

export const learnerAvatars: Avatar[] = [
  { src: '/images/avatar-1.webp' },
  { src: '/images/avatar-2.webp' },
  { src: '/images/avatar-3.webp' },
];

export const ctaAvatars: Avatar[] = [
  ...learnerAvatars,
  { src: '/images/avatar-4.webp' },
];

export type CollageImage = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const collageFrame = { width: 727, height: 692 };
export const collageCircle = { x: 63, y: 20, size: 594 };

export const peopleCollage: CollageImage[] = [
  // column 1
  {
    src: '/images/people-1.webp',
    alt: 'Girl raising her hand in a classroom next to an open notebook',
    x: 87,
    y: 133,
    w: 122,
    h: 182,
  },
  {
    src: '/images/people-2.webp',
    alt: 'Man standing behind two women studying at a table',
    x: 45,
    y: 331,
    w: 164,
    h: 246,
  },
  // column 2
  {
    src: '/images/people-3.webp',
    alt: 'Young woman reading an open book in a library',
    x: 228,
    y: 37,
    w: 122,
    h: 203,
  },
  {
    src: '/images/people-4.webp',
    alt: 'Two students talking by a large window next to a music stand',
    x: 228,
    y: 254,
    w: 122,
    h: 205,
  },
  {
    src: '/images/people-5.webp',
    alt: 'Man reading a book at a desk with a cup of coffee',
    x: 228,
    y: 475,
    w: 122,
    h: 152,
  },
  // column 3
  {
    src: '/images/people-6.webp',
    alt: 'Graduate in cap and gown holding a red folder',
    x: 370,
    y: 47,
    w: 121,
    h: 162,
  },
  {
    src: '/images/people-7.webp',
    alt: 'Woman studying at a desk with a laptop',
    x: 370,
    y: 225,
    w: 121,
    h: 164,
  },
  {
    src: '/images/people-8.webp',
    alt: 'Teacher giving a lesson on a video call',
    x: 370,
    y: 404,
    w: 121,
    h: 183,
  },
  // column 4
  {
    src: '/images/people-9.webp',
    alt: 'Smiling woman with curly hair holding red notebooks outdoors',
    x: 511,
    y: 109,
    w: 152,
    h: 242,
  },
  {
    src: '/images/people-10.webp',
    alt: 'Woman in a headscarf holding a notebook',
    x: 511,
    y: 368,
    w: 121,
    h: 157,
  },
];
