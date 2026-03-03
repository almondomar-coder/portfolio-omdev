import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = 'Custom Web Development & SEO Services | OmDev',
    description = 'OmDev provides high-performance web solutions and SEO strategies to scale your business. Get a beast-mode website today.',
    name = 'OmDev',
    type = 'website',
    canonical = 'https://omdev.xyz/',
}) => {
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
        </Helmet>
    );
};

export default SEO;
