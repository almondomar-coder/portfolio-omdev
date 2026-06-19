import type { FAQ } from './verticals';

export interface ArticleSection {
  heading?: string;
  body?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;        // ISO published date
  updated?: string;    // ISO updated date
  readingMins: number;
  category: string;
  answer: string;          // answer-first summary (key for AI citation)
  keyTakeaways: string[];
  sections: ArticleSection[];
  faqs: FAQ[];
}

export const articles: Article[] = [
  {
    slug: 'geo-vs-seo',
    title: 'GEO vs SEO: What’s the Difference (and Why You Need Both)',
    metaTitle: 'GEO vs SEO: The Difference & Why You Need Both | OmDev',
    metaDescription:
      'GEO optimises for AI answers (ChatGPT, Perplexity, Google AI Overviews); SEO optimises for ranked links. Here’s how they differ and why both matter in 2026.',
    excerpt:
      'SEO earns you a place in a list of links. GEO earns you a mention inside the AI-written answer. Here’s how they differ — and why modern businesses need both.',
    date: '2026-05-12',
    updated: '2026-06-18',
    readingMins: 6,
    category: 'Fundamentals',
    answer:
      'SEO (Search Engine Optimisation) is the practice of ranking your pages in a list of search results. GEO (Generative Engine Optimisation) is the practice of getting your business cited inside the answer that AI engines like ChatGPT, Perplexity and Google AI Overviews generate. They share foundations — quality content, structured data and trust signals — but the goal differs: SEO competes for a click, GEO competes for a citation. In 2026 most businesses need both, because customers move between ranked results and AI answers depending on the question.',
    keyTakeaways: [
      'SEO targets a ranked list of links; GEO targets the single AI-generated answer.',
      'AI answers often cite only one to three sources — visibility is winner-takes-most.',
      'Both rely on clear content, structured data (schema) and credible trust signals.',
      'There is no “page two” in an AI answer: you are cited, or you are invisible.',
      'The right strategy runs SEO and GEO together rather than choosing one.',
    ],
    sections: [
      {
        heading: 'What SEO actually optimises for',
        body: [
          'Search Engine Optimisation is about earning a high position in a list of blue links. When someone searches Google, they see ten or so results and the map pack, and your job is to be near the top. Success is measured in rankings, clicks and organic traffic.',
          'SEO is mature and still essential. People who know what they want often still scan a results page, click through and compare options themselves. The map pack remains the front door for local, high-intent searches like “pilates studio near me”.',
        ],
      },
      {
        heading: 'What GEO optimises for',
        body: [
          'Generative Engine Optimisation is about being the source an AI engine cites when it writes an answer. Instead of returning a list, tools like ChatGPT, Perplexity and Google’s AI Overviews synthesise a single response and name a handful of sources. GEO is the work of becoming one of those named sources.',
          'The crucial difference is concentration. A search results page has room for many businesses. An AI answer typically references only one to three. If a competitor is the cited answer, you are excluded from the shortlist before the customer even sees it — and unlike a low ranking, you often cannot even measure the miss.',
        ],
      },
      {
        heading: 'Where they overlap',
        body: [
          'GEO is not a replacement for SEO; it is built on much of the same ground. Both reward content that is clear, well-structured and genuinely useful. Both depend on structured data (schema) so machines can understand your business. Both weigh trust signals — reviews, credentials, consistent information across the web.',
          'The practical implication: good SEO foundations make GEO easier, and GEO work tends to improve classic search too. That is why treating them as one strategy beats running them in separate silos.',
        ],
      },
      {
        heading: 'How they differ in practice',
        bullets: [
          'Unit of success: SEO wins a ranking position; GEO wins a citation in the answer.',
          'Real estate: a results page lists many sites; an AI answer cites very few.',
          'Content shape: SEO tolerates long preambles; GEO rewards answer-first, quotable passages.',
          'Measurement: SEO has rank trackers; GEO visibility is newer and measured by appearance and citation across AI engines.',
          'Freshness: AI engines lean heavily on recent, frequently updated sources.',
        ],
      },
      {
        heading: 'Why you need both in 2026',
        body: [
          'Customer behaviour has split. The same person might Google a comparison one minute and ask an AI assistant for a recommendation the next. Optimising for only one channel leaves the other to your competitors.',
          'The good news is that the work compounds. A page written to be cited by AI — with a clear answer up top, verifiable facts, and clean schema — also tends to perform well in traditional search. Run them together and each makes the other stronger.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is GEO replacing SEO?',
        a: 'No. GEO is an additional layer, not a replacement. Traditional search still drives significant traffic, and the two share foundations. The right approach in 2026 is to run SEO and GEO together rather than choosing between them.',
      },
      {
        q: 'Can I do GEO without good SEO?',
        a: 'It is much harder. AI engines lean on the same signals search engines use — readable content, structured data and trust. Weak SEO foundations usually mean weak AI visibility, so the two are best addressed together.',
      },
      {
        q: 'How do I measure GEO success?',
        a: 'By whether AI engines mention and cite your business when users ask relevant questions, and how that compares to competitors. It is a newer discipline than rank tracking, which is why an AI-Visibility Audit is a useful starting baseline.',
      },
    ],
  },

  {
    slug: 'how-to-get-cited-by-ai-search',
    title: 'How to Get Your Business Cited by ChatGPT, Perplexity & Google AI',
    metaTitle: 'How to Get Cited by ChatGPT, Perplexity & Google AI | OmDev',
    metaDescription:
      'A practical guide to becoming a source AI engines cite: machine-readable pages, answer-first content, schema, trust signals and freshness. From OmDev, London.',
    excerpt:
      'AI engines cite sources they can read, understand and trust. Here are the practical levers that make your business one of them.',
    date: '2026-05-28',
    updated: '2026-06-18',
    readingMins: 7,
    category: 'How-to',
    answer:
      'To get cited by AI search engines, make your pages easy for machines to read, answer questions directly and early, add structured data (schema), back claims with verifiable facts, and build trust signals like reviews and clear authorship. AI engines such as ChatGPT, Perplexity and Google AI Overviews preferentially cite sources that are technically accessible, clearly written, factually grounded and credibly authored. Keep important content fresh, because these engines favour recently updated sources.',
    keyTakeaways: [
      'Make pages machine-readable — if an AI crawler cannot read it, it cannot cite it.',
      'Lead with the answer: put a clear, quotable response near the top of the page.',
      'Use JSON-LD schema so engines understand your business, services and FAQs.',
      'Ground claims in verifiable facts, statistics and named expertise.',
      'Maintain freshness and consistent business information across the web.',
    ],
    sections: [
      {
        heading: '1. Make sure AI engines can actually read your site',
        body: [
          'The most common reason a business is not cited is simple: the AI crawler cannot read the page. Content rendered only after heavy JavaScript, blocked crawlers, or thin HTML all reduce your chances.',
          'Allow the major AI crawlers in your robots.txt (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended), keep your important content in clean HTML, and publish a sitemap. An emerging convention, llms.txt, can also offer a concise machine-readable map of your most useful pages.',
        ],
      },
      {
        heading: '2. Lead with the answer',
        body: [
          'AI engines synthesise responses by lifting clear, self-contained passages. Pages that bury the answer under a long introduction are harder to quote. Put a direct, two-to-four sentence answer near the top, then expand below.',
          'Write in a way that a single paragraph could stand alone as a correct answer to a specific question. That is the passage an engine is most likely to cite.',
        ],
      },
      {
        heading: '3. Add structured data (schema)',
        bullets: [
          'Organisation or LocalBusiness/ProfessionalService schema so engines understand who you are.',
          'Service schema for what you offer.',
          'FAQPage schema for question-and-answer content — AI engines quote these directly.',
          'Article and author schema on insights and guides to signal expertise.',
          'BreadcrumbList so the structure of your site is explicit.',
        ],
      },
      {
        heading: '4. Back claims with verifiable facts',
        body: [
          'Generative engines favour content that is specific and checkable. Cite sources, include relevant statistics, and add named expert input where you can. Vague marketing language is rarely quoted; concrete, attributable statements are.',
          'This is also where trust is earned. The more your content reads like a reliable reference, the more often it is treated as one.',
        ],
      },
      {
        heading: '5. Build trust and expertise signals',
        body: [
          'AI models weigh credibility heavily. Reviews, consistent name-address-phone information across directories, clear authorship with real credentials, and being referenced by other reputable sites all raise the odds of citation.',
          'For local and professional businesses especially, consistency and reputation across the web matter as much as anything on your own pages.',
        ],
      },
      {
        heading: '6. Keep it fresh',
        body: [
          'Recency is a strong factor. Engines lean toward sources that have been updated recently, so revisit cornerstone pages, refresh facts and dates, and publish regularly rather than leaving content static for years.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does it take to get cited by AI engines?',
        a: 'It varies. Technical fixes that unblock crawlers can have an effect within weeks of the next crawl, while trust and authority signals build over months. Starting with an AI-Visibility Audit identifies the quickest wins first.',
      },
      {
        q: 'Do I need to block or allow AI crawlers?',
        a: 'If you want to be cited, you generally want to allow them. robots.txt is the practical lever that controls how AI systems treat your site today. Blocking crawlers removes you from the answers entirely.',
      },
      {
        q: 'Does schema really affect AI citation?',
        a: 'Structured data helps engines understand and trust your content, and FAQ schema in particular is often quoted directly. It is one of the higher-leverage technical steps for GEO.',
      },
    ],
  },

  {
    slug: 'geo-glossary',
    title: 'GEO Glossary: AI Search Terms in Plain English',
    metaTitle: 'GEO Glossary: AI Search Terms Explained | OmDev',
    metaDescription:
      'Plain-English definitions of GEO, AEO, AI Overviews, LLMs, llms.txt and the AI-search terms every business owner should know. A reference from OmDev.',
    excerpt:
      'A no-jargon reference to the terms behind AI search — GEO, AEO, AI Overviews, llms.txt and more.',
    date: '2026-06-05',
    updated: '2026-06-18',
    readingMins: 5,
    category: 'Reference',
    answer:
      'GEO (Generative Engine Optimisation) is optimising to be cited in AI-generated answers. AEO (Answer Engine Optimisation) is a closely related term for optimising to be the answer. AI Overviews are Google’s AI-generated summaries at the top of search. LLMs (large language models) are the systems behind tools like ChatGPT. This glossary defines these and other key AI-search terms in plain English.',
    keyTakeaways: [
      'GEO and AEO are closely related: both aim to make you the cited answer, not just a link.',
      'AI Overviews, ChatGPT, Perplexity and Claude are the main answer surfaces to optimise for.',
      'llms.txt and robots.txt are how you guide AI crawlers.',
      'Structured data and citations are the currency of AI visibility.',
    ],
    sections: [
      {
        heading: 'GEO — Generative Engine Optimisation',
        body: ['The practice of optimising your content and business so AI engines cite you in the answers they generate. The AI-era counterpart to SEO.'],
      },
      {
        heading: 'AEO — Answer Engine Optimisation',
        body: ['A closely related term focused on becoming the direct answer to a question in answer engines and AI assistants. In practice it overlaps heavily with GEO.'],
      },
      {
        heading: 'AI Overviews',
        body: ['Google’s AI-generated summaries that appear at the top of many search results, above the traditional links. Being cited here is a major GEO goal.'],
      },
      {
        heading: 'LLM — Large Language Model',
        body: ['The type of AI system behind tools like ChatGPT, Claude and Perplexity. LLMs generate answers by drawing on training data and, increasingly, live web sources.'],
      },
      {
        heading: 'Citation',
        body: ['When an AI engine names your website as a source in its answer. Citations are the core unit of success in GEO — the equivalent of a ranking in SEO.'],
      },
      {
        heading: 'llms.txt',
        body: ['An emerging plain-text file that gives AI systems a concise, machine-readable map of your most useful pages. It complements robots.txt rather than replacing it.'],
      },
      {
        heading: 'robots.txt',
        body: ['A long-standing file that tells crawlers — including AI crawlers like GPTBot and PerplexityBot — which parts of your site they may access. The practical lever for allowing or blocking AI bots.'],
      },
      {
        heading: 'Structured data (Schema)',
        body: ['Code (usually JSON-LD) that describes your business, services and content in a machine-readable way, helping both search and AI engines understand and trust your pages.'],
      },
      {
        heading: 'Answer-first content',
        body: ['Writing that places a clear, self-contained answer near the top of the page, making it easy for AI engines to quote. A core GEO content technique.'],
      },
      {
        heading: 'E-E-A-T',
        body: ['Experience, Expertise, Authoritativeness and Trust — the qualities search and AI systems use to judge credibility. Strong E-E-A-T signals raise your odds of being cited.'],
      },
    ],
    faqs: [
      {
        q: 'Is GEO the same as AEO?',
        a: 'They are closely related and often used interchangeably. GEO emphasises being cited within AI-generated answers; AEO emphasises being the answer in answer engines. In practice the work largely overlaps.',
      },
      {
        q: 'What is the difference between llms.txt and robots.txt?',
        a: 'robots.txt controls which crawlers can access your site and is widely respected by AI bots today. llms.txt is a newer, optional file that points AI systems to your most useful content. They work together.',
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
