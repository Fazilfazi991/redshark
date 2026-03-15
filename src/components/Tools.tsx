import React from 'react';
import './Tools.css';

const tools = [
    { name: "Google Analytics", logo: "/brands/google-analytics.svg" },
    { name: "Google Ads", logo: "/brands/google-ads-logo.svg" },
    { name: "Meta Ads", logo: "/brands/meta-ads.svg" },
    { name: "Semrush", logo: "/brands/semrush.svg" },
    { name: "Ahrefs", logo: "/brands/ahrefs.svg" },
    { name: "HubSpot", logo: "/brands/hubspot.svg" },
    { name: "Mailchimp", logo: "/brands/mailchimp.svg" },
    { name: "Shopify", logo: "/brands/shopify.svg" },
    { name: "WordPress", logo: "/brands/wordpress.svg" },
    { name: "Canva", logo: "/brands/canva.svg" },
    { name: "Figma", logo: "/brands/figma.svg" },
    { name: "Adobe CC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Creative_Cloud.svg/1200px-Creative_Cloud.svg.png" }
];

const Tools = () => {
    return (
        <section className="tools-section">
            <div className="container">
                <h2 className="section-title text-center mb-2">Tools We Use</h2>
                <div className="text-center mb-4">
                    <p>Powered by the best technology in the industry to deliver exceptional results.</p>
                </div>

                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <div className="tool-icon-wrapper">
                                <img src={tool.logo} alt={tool.name} className="tool-icon" loading="lazy" />
                            </div>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
