import type { FAQ } from './verticals';

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  location: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;            // answer-first summary
  headlineStat: CaseStudyStat;
  stats: CaseStudyStat[];
  challenge: string[];
  approach: { heading: string; body: string }[];
  result: string[];
  quote?: { text: string; attribution: string };
  faqs: FAQ[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'plum-pilates',
    client: 'Plum Pilates',
    sector: 'Wellness — Pilates Studio',
    location: 'London',
    title: 'How OmDev grew Plum Pilates’ visibility by 50%',
    metaTitle: 'Plum Pilates Case Study: +50% Visibility with GEO + SEO | OmDev',
    metaDescription:
      'How OmDev combined Generative Engine Optimisation and SEO to grow a London pilates studio’s visibility by 50% across AI search and traditional search.',
    summary:
      'OmDev grew Plum Pilates’ visibility by 50% by combining Generative Engine Optimisation (GEO) and SEO — making the studio more discoverable both in AI-generated answers and in traditional local search. The work focused on machine-readable content, structured data, local trust signals and answer-first pages.',
    headlineStat: { value: '+50%', label: 'increase in visibility' },
    stats: [
      { value: '+50%', label: 'Visibility growth' },
      { value: 'GEO + SEO', label: 'Combined strategy' },
      { value: 'Local', label: 'High-intent focus' },
    ],
    challenge: [
      'Pilates is an intensely local, high-intent market. When nearby customers search — increasingly by asking an AI assistant for a recommendation — only a handful of studios get named, and Plum Pilates risked being left out of those answers entirely.',
      'The studio needed to be discoverable not just in Google’s results, but inside the AI-generated answers that more and more prospective clients now rely on.',
    ],
    approach: [
      {
        heading: 'Made the site machine-readable',
        body: 'Cleaned up how the site presented its core information so search and AI crawlers could reliably read, understand and quote the studio’s services and location.',
      },
      {
        heading: 'Added structured data',
        body: 'Implemented schema describing the business, its services and common questions, so engines could confidently understand and cite the studio.',
      },
      {
        heading: 'Strengthened local trust signals',
        body: 'Aligned business information and reputation signals across the web — the consistency and credibility that both local SEO and AI engines reward.',
      },
      {
        heading: 'Wrote answer-first content',
        body: 'Reshaped key pages to answer the questions real customers ask, clearly and early — the kind of passages AI engines lift directly into their answers.',
      },
    ],
    result: [
      'The combined GEO and SEO work grew Plum Pilates’ visibility by 50%, improving discoverability across both AI answers and traditional local search.',
      'The studio became far more likely to be surfaced when local, high-intent customers search for pilates — including through AI assistants.',
    ],
    quote: {
      text: 'Omar grew our visibility by 50%. When people search for pilates near us — including through AI — we actually show up now.',
      attribution: 'Plum Pilates',
    },
    faqs: [
      {
        q: 'What does “+50% visibility” mean here?',
        a: 'It refers to a measured increase in how discoverable Plum Pilates became across search and AI answers after the combined GEO and SEO work — being surfaced and cited more often for relevant, local, high-intent searches.',
      },
      {
        q: 'Can the same approach work for my business?',
        a: 'If your customers are local and high-intent — wellness, clinics, professional services or multi-location brands — the same GEO + SEO foundations apply. An AI-Visibility Audit is the starting point to see where you stand.',
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
