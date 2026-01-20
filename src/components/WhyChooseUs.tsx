import React from 'react';
import { Check } from 'lucide-react';
import './WhyChooseUs.css';

const benefits = [
    "Access to pre-vetted top 3% experts",
    "60% cheaper than traditional agencies",
    "Flexible team scaling (up or down)",
    "Fast turnaround times (avg. 2 weeks)",
    "Dedicated project manager included",
    "No long-term lock-in contracts",
    "Transparent, fixed pricing"
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="container why-content">
                <div className="why-text">
                    <h2 className="section-title">Why Top Companies Choose Our Collective</h2>
                    <p className="mb-4 text-muted">We bridge the gap between expensive agencies and unreliable freelancers.</p>

                    <ul className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="benefit-item">
                                <div className="check-icon">
                                    <Check size={20} />
                                </div>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="why-visual">
                    <div className="visual-box">
                        {/* Simple comparison visual */}
                        <div className="comparison-card">
                            <div className="comp-header">Traditional Agency</div>
                            <div className="comp-bar agency"></div>
                            <div className="comp-price">$$$$</div>
                        </div>
                        <div className="comparison-card highlight">
                            <div className="comp-header">Our Collective</div>
                            <div className="comp-bar collective"></div>
                            <div className="comp-price">$</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
