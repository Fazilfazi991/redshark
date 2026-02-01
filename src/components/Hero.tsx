import React from 'react';
import { ArrowRight, CheckCircle, Play, Code, Palette, BarChart, Megaphone, Monitor, PenTool } from 'lucide-react';
import LeadForm from './LeadForm';
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
                    <div className="visual-orbit-container">
                        <div className="orbit-system">
                            <div className="orbit-center">
                                <span className="orbit-number">150+</span>
                                <span className="orbit-label">Specialists</span>
                            </div>

                            <div className="orbit-ring ring-1">
                                <div className="orbit-item item-1"><Code size={20} /></div>
                                <div className="orbit-item item-2"><Palette size={20} /></div>
                                <div className="orbit-item item-3"><BarChart size={20} /></div>
                            </div>

                            <div className="orbit-ring ring-2">
                                <div className="orbit-item item-4"><Megaphone size={24} /></div>
                                <div className="orbit-item item-5"><Monitor size={24} /></div>
                                <div className="orbit-item item-6"><PenTool size={24} /></div>
                            </div>

                            <div className="orbit-ring ring-3"></div>
                        </div>
                    </div>
                </div>

                <div className="hero-form-col">
                    <LeadForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;
