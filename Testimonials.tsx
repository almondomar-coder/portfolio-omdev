
import React from 'react';

const reviews = [
  {
    name: "Peckham Soul",
    tagline: "Record Shop",
    quote: "OMDEV helped us rank locally and redesigned our site. We’ve seen a clear increase in foot traffic and online interest."
  },
  {
    name: "Soul",
    tagline: "Yoga & Meditation Retreat",
    quote: "Clean, calming website that truly reflects our brand. Omar was professional, fast, and genuinely cared about our vision."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1A1A1A] text-center mb-20">
          Trusted by Local Brands
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="p-12 border border-[#E5E1D8] rounded-[2.5rem] bg-[#FCFBF7] flex flex-col justify-between">
              <div>
                <div className="flex mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-serif text-[#1A1A1A] italic leading-relaxed mb-8">
                  “{review.quote}”
                </p>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">{review.name}</p>
                <p className="text-sm text-[#555555]">{review.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
