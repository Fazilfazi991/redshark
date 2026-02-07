import React from 'react';
import { ArrowRight, Search, BarChart, Mail, Globe, Award, TrendingUp, DollarSign, Star, AppWindow, Lightbulb } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import USP from '../components/USP';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import ScrollReveal from '../components/UI/ScrollReveal';
import './LandingPage.css';
import element1 from '../assets/element-1.png';
import element2 from '../assets/element-2.png';
import founder from '../assets/founder.jpg';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />

            {/* Hero Section */}
            <section className="landing-hero">
                {/* Floating Elements */}
                <div className="floating-element float-1">
                    <div style={{ background: 'white', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                        <img src={element2} alt="Element" style={{ width: '48px', height: 'auto' }} />
                    </div>
                </div>
                <div className="floating-element float-2">
                    <div style={{ background: 'white', padding: '12px', borderRadius: '50%', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                        <img src={element1} alt="Element" style={{ width: '48px', height: 'auto' }} />
                    </div>
                </div>
                <div className="floating-element float-3">
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #3b82f6', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
                        <img src={founder} alt="Reviewer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="floating-element float-4">
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #ff4d6d', boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)' }}>
                        <img src={founder} alt="Reviewer" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'hue-rotate(45deg) brightness(1.1)' }} />
                    </div>
                </div>

                <div className="container">
                    <div className="landing-hero-content">
                        <h1>
                            <span className="highlight-red-box">More Customers</span> For Your Business.
                        </h1>
                        <p>
                            Plug into our digital marketing agency and watch your sales pipeline fill. It’s the growth fuel you’ve been looking for.
                        </p>

                        <div className="landing-cta-group">
                            <a href="#contact" className="btn-landing-primary">Get Free Growth Plan</a>
                            <a href="#results" className="btn-landing-secondary">See Client Results</a>
                        </div>

                        <div className="hero-rating">
                            <span>Rated 4.8 stars from 100+ reviews 🎉</span>
                            <div className="stars" style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={24} fill="#f59e0b" stroke="#f59e0b" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SocialProof />

            {/* Services Grid */}
            <section className="landing-services">
                <div className="container">
                    <div className="landing-section-header">
                        <h2>Our Core Services</h2>
                        <p className="text-muted">Everything you need to dominate your market</p>
                    </div>

                    <div className="landing-services-grid">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="landing-service-card">
                                <div className="l-service-icon"><Search size={32} /></div>
                                <h3>SEO</h3>
                                <p>Rank higher, drive traffic, and dominate search results with our data-driven SEO strategies.</p>
                                <a href="/seo" className="landing-link">Learn More <ArrowRight size={16} /></a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="landing-service-card">
                                <div className="l-service-icon"><BarChart size={32} /></div>
                                <h3>Google Ads</h3>
                                <p>High-converting PPC campaigns that maximize your ROI and put you in front of ready-to-buy customers.</p>
                                <a href="/sem" className="landing-link">Learn More <ArrowRight size={16} /></a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="landing-service-card">
                                <div className="l-service-icon"><Globe size={32} /></div>
                                <h3>Facebook Ads</h3>
                                <p>Scale your brand with targeted social media advertising that turns scrolling into sales.</p>
                                <a href="/smm" className="landing-link">Learn More <ArrowRight size={16} /></a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="landing-service-card">
                                <div className="l-service-icon"><Mail size={32} /></div>
                                <h3>Email & Automation</h3>
                                <p>Nurture leads and retain customers with personalized email flows and automated marketing.</p>
                                <a href="/services" className="landing-link">Learn More <ArrowRight size={16} /></a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Local/RedShark */}
            <section className="landing-trust">
                <div className="container">
                    <h2>A Customer Generating approach so good, even our trophies have trophies.</h2>

                    <div className="awards-grid">
                        <ScrollReveal animation="zoom-in" delay={100}>
                            <div className="award-item">
                                <Award size={48} className="award-icon" />
                                <span className="award-text">Winner 2024</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="zoom-in" delay={200}>
                            <div className="award-item">
                                <TrendingUp size={48} className="award-icon" />
                                <span className="award-text">Top 1% Growth</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="zoom-in" delay={300}>
                            <div className="award-item">
                                <DollarSign size={48} className="award-icon" />
                                <span className="award-text">ROI Focused</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <USP />

            <section className="landing-faq">
                <div className="container">
                    <FAQ />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
