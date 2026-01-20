import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        category: "SaaS Marketing",
        title: "ScaleUp CRM Growth",
        result: "+347% Organic Traffic",
        image: "linear-gradient(135deg, #1f2937, #111827)" // Placeholder for image
    },
    {
        category: "E-commerce",
        title: "UrbanBlend Coffee",
        result: "$2.1M Revenue Generated",
        image: "linear-gradient(135deg, #7f1d1d, #991b1b)"
    },
    {
        category: "B2B Lead Gen",
        title: "TechFlow Solutions",
        result: "63% Lower Cost Per Lead",
        image: "linear-gradient(135deg, #000000, #450a0a)"
    }
];

const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="header-row mb-4">
                    <div>
                        <h2 className="section-title">Recent Success Stories</h2>
                        <p className="section-subtitle">Real results for ambitious brands.</p>
                    </div>
                    <button className="btn btn-outline desktop-only">View All Case Studies</button>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-card">
                            <div className="portfolio-image" style={{ background: project.image }}>
                                <div className="overlay">
                                    <button className="btn btn-sm btn-white">View Case Study</button>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <div className="portfolio-cat">{project.category}</div>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <div className="portfolio-result">
                                    <ArrowRight size={16} className="text-primary" />
                                    <span>{project.result}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4 mobile-only">
                    <button className="btn btn-outline">View All Case Studies</button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
