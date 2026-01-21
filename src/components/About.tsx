import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <h2 className="section-title text-center mb-5">About Us</h2>
                <div className="about-content">
                    <p className="lead-text">We are a collective of experts dedicated to your growth.</p>
                    <p>
                        RedShark was born from a desire to do things differently. We saw how traditional agencies often prioritized billable hours over client results, so we built a collective of top-tier talent focused solely on growth.
                    </p>
                    <p>
                        Our mission is simple: to empower businesses with the same high-level strategies used by Fortune 500 companies, but with the agility and personal touch of a dedicated partner. When you win, we win.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
