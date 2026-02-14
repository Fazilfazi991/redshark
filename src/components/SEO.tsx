import React from 'react';
import { Helmet } from 'react-helmet-async';

// ... (previous imports)

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    name?: string;
    type?: string;
    image?: string;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, name = 'Redsharc', type = 'website', image, schema }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            {keywords && <meta name='keywords' content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {canonical && <meta property="og:url" content={canonical} />}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}

export default SEO;


