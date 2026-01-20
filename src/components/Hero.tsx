import React from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-gradient"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="trust-badge">
                        <span className="badge-icon">✨</span>
                        <span>Trusted by 500+ High-Growth Companies</span>
                    </div>

                    <h1 className="hero-headline">
                        World-Class Digital Marketing Teams at <span className="text-gradient">Freelance Prices</span>
                    </h1>

                    <p className="hero-subheadline">
                        Access 150+ vetted specialists for design, development, SEO, ads, and automation without the agency markup.
                    </p>

                    <div className="hero-cta-group">
                        <button className="btn btn-primary btn-lg">
                            Start Your Project <ArrowRight size={20} className="icon-right" />
                        </button>
                        <button className="btn btn-outline btn-lg">
                            <Play size={20} className="icon-left" /> See Our Work
                        </button>
                    </div>

                    <div className="hero-trust-elements">
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>500+ Projects</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>Top 3% Talent</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>98% Satisfaction</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card-stack">
                        {/* Abstract visual representation of "Team" or "Results" */}
                        <div className="card card-1">
                            <div className="card-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="card-body">
                                <div className="graph-line"></div>
                                <div className="stat-row">
                                    <div className="stat-label">ROI</div>
                                    <div className="stat-value">+340%</div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="profile-row">
                                <div className="avatar"></div>
                                <div className="text-lines">
                                    <div className="line long"></div>
                                    <div className="line short"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
