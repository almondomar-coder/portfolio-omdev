import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Offer from '../components/Offer';
import Verticals from '../components/Verticals';
import WhyChooseMe from '../components/WhyChooseMe';
import BuiltGeoFirst from '../components/BuiltGeoFirst';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';
import type { FAQ as FAQItem } from '../data/verticals';

const homeFaqs: FAQItem[] = [
  {
    q: 'What is GEO (Generative Engine Optimisation)?',
    a: 'GEO is the practice of optimising your business so that AI answer engines — ChatGPT, Perplexity, Google AI Overviews and others — cite you in the answers they generate. Where SEO targets a ranked list of links, GEO targets the single AI-written answer your customer actually reads.',
  },
  {
    q: 'How is GEO different from SEO?',
    a: 'SEO earns you a position in a list of search results. GEO earns you a mention inside an AI-generated answer where often only one or two sources are cited. They share foundations — quality content, structured data, trust signals — but the goal differs. Today you need both, which is why OmDev manages SEO and GEO as one strategy.',
  },
  {
    q: 'How do I get my business to show up in ChatGPT and Perplexity?',
    a: 'AI engines cite sources they can read, understand and trust. That means clear, well-structured content, accurate structured data (schema), consistent business information across the web, and credible expertise and review signals. An AI-Visibility Audit shows exactly where you stand and what to fix first.',
  },
  {
    q: 'What is an AI-Visibility Audit?',
    a: 'It is a focused snapshot of how visible your business is across AI search engines and traditional search — what they currently say about you, whether they can cite you, how you compare to competitors, and a prioritised action list. It is the starting point before any ongoing GEO and SEO work.',
  },
  {
    q: 'Do you work with London businesses specifically?',
    a: 'Yes. OmDev is based in Bermondsey, SE16, and works with London businesses and UK-wide clients on GEO and SEO — with particular focus on wellness and clinics, professional services, and multi-location local brands.',
  },
];

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OmDev',
  description:
    'AI Search & GEO specialist helping businesses get cited by ChatGPT, Perplexity and Google AI Overviews, alongside traditional SEO.',
  url: 'https://omdev.xyz',
  email: 'omar@omdev.xyz',
  founder: { '@type': 'Person', name: 'Omar' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bermondsey',
    addressRegion: 'London',
    postalCode: 'SE16',
    addressCountry: 'GB',
  },
  areaServed: ['London', 'United Kingdom'],
  knowsAbout: [
    'Generative Engine Optimisation',
    'GEO',
    'Answer Engine Optimisation',
    'AEO',
    'AI Search Optimisation',
    'ChatGPT visibility',
    'Perplexity',
    'Google AI Overviews',
    'SEO',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Visibility Audit' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative Engine Optimisation (GEO)' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar',
  jobTitle: 'AI Search & GEO Specialist',
  worksFor: { '@type': 'Organization', name: 'OmDev', url: 'https://omdev.xyz' },
  url: 'https://omdev.xyz',
  email: 'omar@omdev.xyz',
  knowsAbout: [
    'Generative Engine Optimisation',
    'Answer Engine Optimisation',
    'AI Search Optimisation',
    'Search Engine Optimisation',
    'Structured data',
  ],
  // Add your real profile URLs here to strengthen entity recognition:
  // sameAs: ['https://www.linkedin.com/in/...', 'https://twitter.com/...']
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const Home: React.FC = () => {
  return (
    <>
      <SEO jsonLd={[professionalServiceSchema, personSchema, faqSchema]} />
      <Hero />
      <About />
      <Services />
      <Offer />
      <Verticals />
      <WhyChooseMe />
      <BuiltGeoFirst />
      <Testimonials />
      <FAQ faqs={homeFaqs} />
      <ContactCTA />
    </>
  );
};

export default Home;
