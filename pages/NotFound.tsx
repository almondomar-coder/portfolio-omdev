import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page not found | OmDev" canonical="https://omdev.xyz/" />
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-7xl font-bold text-white mb-4">404</p>
          <p className="text-xl text-secondary mb-10">That page has gone invisible. Let&rsquo;s get you back.</p>
          <Link to="/" className="btn-primary px-8 py-4 inline-flex">Back to home</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
