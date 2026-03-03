import React from 'react';
import { Star } from 'lucide-react';

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
    <section className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
          Trusted by Local Brands
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="p-12 glass-card flex flex-col justify-between hover:bg-white/5 transition-colors duration-300">
              <div>
                <div className="flex mb-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cta fill-cta" />
                  ))}
                </div>
                <p className="text-2xl font-medium text-white italic leading-relaxed mb-8">
                  “{review.quote}”
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-zinc-500">{review.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
