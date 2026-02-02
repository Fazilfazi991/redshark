import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title text-start mb-4">About Us</h2>
                        <p className="lead-text">We are a collective of experts dedicated to your growth.</p>
                        <p>
                            RedShark was born from a desire to do things differently. We saw how traditional agencies often prioritized billable hours over client results, so we built a collective of top-tier talent focused solely on growth.
                        </p>
                        <p>
                            Our mission is simple: to empower businesses with the same high-level strategies used by Fortune 500 companies, but with the agility and personal touch of a dedicated partner. When you win, we win.
                        </p>
                    </div>

                    <div className="about-visual">
                        <div className="stat-card">
                            <span className="stat-number">150+</span>
                            <span className="stat-label">Expert Talent</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Remote Network</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Global Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
