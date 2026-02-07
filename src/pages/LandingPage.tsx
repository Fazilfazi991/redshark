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
                <div className="container">
                    <div className="landing-hero-content">
                        <h1>More Customers For Your Business.</h1>
                        <h2>This is Growth as a Service.</h2>
                        <p>We generate you more profit from online advertising. A customer generating approach so good, even our trophies have trophies.</p>

                        <div className="landing-cta-group">
                            <a href="#contact" className="btn-landing-primary">Get Free Growth Plan</a>
                            <a href="#results" className="btn-landing-secondary">See Client Results</a>
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
