
import React from 'react';

const services = [
  {
    title: "Web Design & Development",
    description: "Modern, fast, and mobile-friendly websites built with the latest technology.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "SEO Optimisation",
    description: "Rank higher on Google and get found by the customers who are looking for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Social Media Setup",
    description: "Consistent branding and basic setup to support your long-term growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Website Maintenance",
    description: "Ongoing technical support and updates so you can focus on your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1A1A1A] mb-6">
            Comprehensive Web Solutions
          </h2>
          <p className="text-lg text-[#555555] max-w-xl">
            Everything you need to establish a premium online presence and convert visitors into loyal customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-[#FCFBF7] border border-[#E5E1D8] rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-[#1A1A1A]/5 transition-all duration-500">
              <div className="w-12 h-12 bg-[#E5E1D8]/30 rounded-2xl flex items-center justify-center text-[#1A1A1A] mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">{service.title}</h3>
              <p className="text-[#555555] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
