import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    canonical?: string;
    jsonLd?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
    title = 'AI Search & GEO Specialist London | SEO + Generative Engine Optimisation | OmDev',
    description = 'OmDev gets your business cited by ChatGPT, Perplexity & Google AI — plus traditional SEO. AI-visibility audits & GEO for London businesses.',
    name = 'OmDev',
    type = 'website',
    canonical = 'https://omdev.xyz/',
    jsonLd,
}) => {
    const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='robots' content='index, follow' />
            <link rel='canonical' href={canonical} />

            {/* Open Graph */}
            <meta property='og:type' content={type} />
            <meta property='og:url' content={canonical} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content={name} />

            {/* Twitter Card */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />

            {/* Structured data for AI engines & search */}
            {blocks.map((block, i) => (
                <script key={i} type='application/ld+json'>
                    {JSON.stringify(block)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
