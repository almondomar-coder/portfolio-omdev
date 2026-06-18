import { HeartPulse, Scale, MapPin, LucideIcon } from 'lucide-react';

export interface FAQ {
  q: string;
  a: string;
}

export interface Vertical {
  slug: 'wellness' | 'professional-services' | 'multi-location';
  path: string;
  icon: LucideIcon;
  name: string;            // short name for cards/nav
  title: string;           // H1 on landing page
  metaTitle: string;
  metaDescription: string;
  cardLine: string;        // one-liner on homepage card
  intro: string;           // lead paragraph on landing page
  examples: string;        // who this is for
  fear: string;            // the disappearing fear
  outcomes: string[];      // what GEO + SEO delivers
  faqs: FAQ[];
}

export const verticals: Vertical[] = [
  {
    slug: 'wellness',
    path: '/ai-visibility-wellness',
    icon: HeartPulse,
    name: 'Wellness & Clinics',
    title: 'AI Search & GEO for Wellness Studios & Clinics',
    metaTitle: 'GEO & AI Search for Wellness Clinics London | OmDev',
    metaDescription: 'Get your pilates studio, clinic or wellness brand cited by ChatGPT, Perplexity & Google AI. GEO + SEO for London health & wellness businesses.',
    cardLine: 'Pilates, physio, dental, aesthetics & wellness studios.',
    intro: 'When someone asks an AI assistant for the best pilates studio, physio or clinic near them, one answer comes back. I make sure it is yours — across ChatGPT, Perplexity and Google AI Overviews, as well as classic Google search.',
    examples: 'Pilates & yoga studios, physiotherapy, dental & orthodontics, aesthetics & skin clinics, private GPs and therapists.',
    fear: 'Health and wellness searches are deeply local and high-intent. If AI engines recommend the studio down the road instead of you, you never even get the enquiry — and you will never see it happen.',
    outcomes: [
      'Be the studio or clinic AI assistants name when locals ask for recommendations',
      'Structured data so engines understand your services, location and hours',
      'Trust signals (reviews, credentials, expertise) AI models weigh heavily',
      'Local SEO so you still win the map pack and classic search',
    ],
    faqs: [
      { q: 'How do I get my clinic recommended by ChatGPT?', a: 'AI assistants pull from sources they can read and trust. That means clear, structured content about your services, consistent business information across the web, strong reviews and credible expertise signals. GEO is the practice of optimising all of this so engines like ChatGPT and Perplexity cite you when locals ask for a recommendation.' },
      { q: 'Is GEO different from local SEO for a wellness business?', a: 'They overlap but are not the same. Local SEO targets Google rankings and the map pack. GEO targets the generated AI answer itself. A wellness business today needs both, which is why I manage them together.' },
      { q: 'Can you prove this works?', a: 'Yes. I grew Plum Pilates’ visibility by 50% by combining GEO and SEO — making the studio more discoverable in both AI answers and traditional search.' },
    ],
  },
  {
    slug: 'professional-services',
    path: '/ai-visibility-professional-services',
    icon: Scale,
    name: 'Professional Services',
    title: 'AI Search & GEO for Law, Accountancy & Dental Firms',
    metaTitle: 'GEO & AI Search for Law, Accountancy & Dental Firms | OmDev',
    metaDescription: 'Get your law firm, accountancy practice or dental practice cited by ChatGPT, Perplexity & Google AI. GEO + SEO for UK professional services.',
    cardLine: 'Solicitors, accountants, dentists & advisory firms.',
    intro: 'Prospective clients now ask AI assistants who they should trust with their legal, financial or dental needs. I make sure your firm is the name that comes back — with the authority and structured content AI engines reward.',
    examples: 'Solicitors & law firms, accountants & bookkeepers, dental & orthodontic practices, financial advisers, consultancies and B2B advisory firms.',
    fear: 'Your next client may ask ChatGPT “who is the best accountant for a small business in London?” before they ever Google you. If a competitor is the cited answer, you are excluded from the shortlist before it even forms.',
    outcomes: [
      'Be cited as a trusted authority in AI answers for your practice area',
      'Expertise, authority and trust (E-E-A-T) signals built into your content',
      'Service and FAQ schema so engines can quote you accurately',
      'SEO for high-value commercial keywords alongside AI visibility',
    ],
    faqs: [
      { q: 'Why does AI visibility matter for a law or accountancy firm?', a: 'Professional services are trust-led and high-value. Clients increasingly start with an AI assistant to build a shortlist. If your firm is not part of the generated answer, you lose the opportunity silently — there is no page two and no impression to measure.' },
      { q: 'How do you make a firm more authoritative to AI engines?', a: 'AI models favour clear expertise and consistent, well-structured information. I strengthen your service pages, add structured data, surface credentials and case results where appropriate, and align everything with the questions clients actually ask.' },
      { q: 'Do you also do traditional SEO?', a: 'Yes. GEO and SEO are managed together. You still need to rank for commercial searches while also being cited in AI answers — I cover both under one strategy.' },
    ],
  },
  {
    slug: 'multi-location',
    path: '/ai-visibility-multi-location',
    icon: MapPin,
    name: 'Multi-Location Brands',
    title: 'AI Search & GEO for Multi-Location Local Brands',
    metaTitle: 'GEO & AI Search for Multi-Location Local Brands | OmDev',
    metaDescription: 'Make every location of your brand visible in ChatGPT, Perplexity & Google AI. GEO + local SEO for multi-site and franchise businesses.',
    cardLine: 'Franchises, chains & multi-site local businesses.',
    intro: 'Every location is a separate AI search battle. When someone asks an assistant for the nearest branch of your kind of business, the answer depends on signals that vary site by site. I make sure each location is found, trusted and cited.',
    examples: 'Franchises, gym & studio chains, clinic and salon groups, hospitality groups, retail with multiple branches and regional service businesses.',
    fear: 'A single weak location can vanish from AI answers entirely while head office assumes everything is fine. Multiply that across a network and you are losing local demand you cannot even see on a dashboard.',
    outcomes: [
      'Consistent, structured location data AI engines can trust at scale',
      'Per-location visibility in AI answers and the local map pack',
      'A repeatable GEO + SEO playbook across every site',
      'Reporting that surfaces which locations are winning or slipping',
    ],
    faqs: [
      { q: 'How does AI search treat a multi-location business?', a: 'AI assistants answer location by location, drawing on the signals tied to each branch — listings, reviews, structured data and local content. A brand can be strong nationally yet invisible in specific areas, so GEO has to be applied per location, not just at the brand level.' },
      { q: 'Can you handle dozens of locations?', a: 'Yes. I build a repeatable playbook — templated structured data, consistent business information and per-location content — so visibility scales across the whole network rather than being fixed one site at a time.' },
      { q: 'Is this just local SEO with a new name?', a: 'No. Local SEO gets you into Google’s map and rankings. GEO gets each location named in the AI-generated answer. Multi-location brands need both, coordinated centrally.' },
    ],
  },
];

export const getVertical = (slug: string) => verticals.find((v) => v.slug === slug);
