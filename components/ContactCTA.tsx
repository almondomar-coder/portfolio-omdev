
import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6">
      <div className="max-w-4xl mx-auto bg-[#E5E1D8] rounded-[3rem] p-12 md:p-24 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-semibold text-[#1A1A1A] mb-8">
          Let’s Build Something <br />That Works For You
        </h2>
        <p className="text-xl text-[#555555] mb-12 max-w-xl mx-auto">
          No strings attached. Just a conversation about where you are now and how we can get you where you want to be.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:hello@omdev.co" className="w-full sm:w-auto px-10 py-5 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-[#1A1A1A]/20">
            Book a Free Call
          </a>
          <a href="mailto:hello@omdev.co" className="text-[#1A1A1A] font-semibold underline underline-offset-8 decoration-[#1A1A1A]/20 hover:decoration-[#1A1A1A] transition-all">
            hello@omdev.co
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
