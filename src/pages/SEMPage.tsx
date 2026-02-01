import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { Target, DollarSign, MousePointer, PieChart, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Zap, Crosshair, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEMPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How much budget do I need to start?",
            answer: "We recommend a minimum ad spend of $1,000 - $1,500/month to generate enough data for optimization. However, our strategies are scalable—we've managed budgets from startups to enterprise-level spending."
        },
        {
            question: "Google Ads vs. Facebook Ads - which is better?",
            answer: "It depends on intent. Google Ads captures high-intent demand (people searching for a solution). Facebook/Meta Ads generate demand (people browsing). We often recommend a mix: Google to capture, Meta to retarget."
        },
        {
            question: "Do I pay you or Google?",
            answer: "You pay Google directly for the ad spend, and you pay RedShark a management fee for the strategy, setup, and optimization. You always own your ad account and data."
        },
        {
            question: "How fast will I get leads?",
            answer: "Instantly. As soon as we launch the campaign, your ads appear. However, the 'sweet spot' for ROI usually happens in months 2-3 as we optimize bids, keywords, and landing pages."
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#334155' }}>
            <Header />

            <main style={{ paddingTop: '80px' }}>
                {/* 1. HERO SECTION */}
                <section className="section-responsive text-center" style={{ position: 'relative' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: '#f0fdf4',
                                borderRadius: '50px',
                                color: '#16a34a',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Performance Marketing Experts
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Instant Visibility. <span style={{ color: '#dc2626' }}>Measurable ROI.</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                Stop burning budget on clicks that don't convert. We build high-performance ad campaigns that turn strangers into customers from Day 1.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive">
                                    Start Your Campaign
                                </button>
                                <Link to="/case-studies" className="btn btn-secondary btn-responsive" style={{
                                    background: '#fff',
                                    color: '#0f172a',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    See Our Results
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. WHY RED SHARK STANDS OUT (Problem/Agitation) */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                        Why Most Ad Campaigns Fail
                                    </h2>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        PPC looks easy, but 90% of accounts bleed money due to poor structure, broad targeting, and weak intent matching.
                                    </p>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        Red Shark approaches SEM differently. We don't just "run ads"—we build <strong>profit engines</strong>. By focusing on conversion data and profit margins rather than just clicks, we ensure every dollar spent contributes to your bottom line.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{
                                    background: '#fff',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}>
                                    <h3 className="heading-md" style={{ marginBottom: '24px' }}>Common Pitfalls</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Getting clicks but zero leads",
                                            "CPC costs rising uncontrollably",
                                            "Agencies that 'set it and forget it'",
                                            "Poor landing page experience",
                                            "Broad keyword bleeding budget",
                                            "No conversion tracking setup"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem', color: '#475569' }}>
                                                <AlertTriangle size={20} color="#ef4444" style={{ flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 3. WHY BUSINESSES CHOOSE US */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>Why Businesses Choose Red Shark</h2>
                                <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                                    We manage your ad spend like it's our own money.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid-auto-fit">
                            {[
                                { title: "Profit-First Strategy", desc: "We focus on ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), not just vanity metrics." },
                                { title: "Landing Page Optimization", desc: "We don't just send traffic; we advise on page improvements to boost conversion rates." },
                                { title: "Granular Targeting", desc: "Single Keyword Ad Groups (SKAGs) and precise audience layers to reduce waste." },
                                { title: "Cross-Channel Synergy", desc: "Aligning Google intent with Meta retargeting for full-funnel dominance." },
                                { title: "Transparent Reporting", desc: "Live dashboards showing exactly where every penny goes and what it brings back." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <h3 className="heading-md" style={{ marginBottom: '10px', color: '#0f172a' }}>{item.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. INDUSTRIES WE SERVE */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px' }}>Industries We Scale</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "E-Commerce", desc: "Shopping ads and dynamic retargeting to drive sales." },
                                { title: "SaaS & B2B", desc: "Lead gen campaigns targeting decision-makers." },
                                { title: "Local Services", desc: "High-intent 'near me' campaigns for immediate bookings." },
                                { title: "Real Estate", desc: "Lead generation for agents and property developers." },
                                { title: "Healthcare", desc: "Patient acquisition with HIPAA-compliant strategies." },
                                { title: "Education", desc: "Student enrollment campaigns for universities and courses." }
                            ].map((industry, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <h3 className="heading-md" style={{ marginBottom: '10px', color: '#38bdf8' }}>{industry.title}</h3>
                                        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{industry.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. WHAT IS SEM */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive text-center" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '24px' }}>What is SEM and Why It Matters</h2>
                            <p className="text-body" style={{ color: '#64748b', marginBottom: '30px' }}>
                                Search Engine Marketing (SEM) involves using paid advertising to ensure your business's products or services are visible on search engine results pages (SERPs). Unlike SEO, which takes time, SEM offers <strong>instant visibility</strong>.
                            </p>
                            <p className="text-body" style={{ color: '#64748b' }}>
                                When a user actively searches for a solution, they are in the buying mindset. SEM allows you to place your offer directly in front of them at that critical moment, making it one of the most effective channels for immediate lead generation and sales.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 6. OUR SEM SERVICES */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Our SEM Services</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "Google Search Ads", items: ["Keyword research", "Ad copy writing", "Bid management", "Extension optimization"], icon: Target },
                                { title: "Display & Retargeting", items: ["Banner design", "Audience segmentation", "Dynamic product ads", "Brand awareness"], icon: PieChart },
                                { title: "Shopping Ads", items: ["Feed management", "Merchant Center setup", "Product optimization", "Smart Shopping"], icon: DollarSign },
                                { title: "YouTube Ads", items: ["Video ad strategy", "In-stream ads", "Discovery ads", "Video sequencing"], icon: MousePointer },
                                { title: "Landing Page CRO", items: ["A/B testing", "Heatmap analysis", "Copy optimization", "Form tracking"], icon: Zap },
                                { title: "Analytics & Tracking", items: ["GTM setup", "Conversion API", "Attribution modeling", "Data visualization"], icon: Crosshair }
                            ].map((service, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                            <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
                                                <service.icon size={24} color="#2563eb" />
                                            </div>
                                            <h3 className="heading-md" style={{ color: '#0f172a' }}>{service.title}</h3>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', color: '#64748b', lineHeight: '1.8' }}>
                                            {service.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. OUR PROCESS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>The ROI Protocol</h2>
                                <p style={{ color: '#64748b' }}>Our 4-phase system to turn ad spend into profit.</p>
                            </div>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                { step: "1. Strategy", desc: "Analyzing margins, competitors, and creating the media plan." },
                                { step: "2. The Build", desc: "Setting up granular campaigns, tracking, and creatives." },
                                { step: "3. Launch", desc: "Going live and monitoring initial data quality closely." },
                                { step: "4. Optimize", desc: "Daily bid adjustments, negative keyword mining, and testing." },
                                { step: "5. Scale", desc: "Increasing budget aggressively once target CPA is hit." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 150} style={{ flex: '1 1 200px' }}>
                                    <div style={{
                                        padding: '24px',
                                        background: '#f8fafc',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        height: '100%'
                                    }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0f172a', marginBottom: '8px' }}>{item.step}</div>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. TOOLS & TECH */}
                <section className="section-responsive text-center" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-md" style={{ color: '#0f172a', marginBottom: '40px' }}>Our Ad Tech Stack</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: '0.7' }}>
                            {['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Google Analytics 4', 'SpyFu', 'SEMrush', 'Looker Studio', 'Hotjar'].map((tool, i) => (
                                <ScrollReveal key={i} animation="zoom-in" delay={i * 50}>
                                    <span style={{
                                        padding: '10px 20px',
                                        background: '#fff',
                                        borderRadius: '30px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                        color: '#475569',
                                        display: 'inline-block'
                                    }}>
                                        {tool}
                                    </span>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. CASE STUDY */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <span style={{ color: '#f87171', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SUCCESS STORY</span>
                                <h2 className="heading-lg" style={{ margin: '16px 0' }}>Scaling Sustainable Fashion</h2>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up">
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="grid-auto-fit">
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>CHALLENGE</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Stagnant growth and high CPA with previous agency.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>SOLUTION</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Account restructure, Smart Shopping setup, and CRO.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>RESULT</h4>
                                        <p style={{ fontSize: '1.1rem', color: '#4ade80', fontWeight: 'bold' }}>6.5x ROAS and -42% in acquisition costs.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 10. FAQ */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Frequently Asked Questions</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                    <div style={{ background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            style={{
                                                width: '100%', textAlign: 'left', padding: '24px', background: 'none', border: 'none',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a' }}>{faq.question}</span>
                                            {openFaq === index ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                                        </button>
                                        {openFaq === index && (
                                            <div style={{ padding: '0 24px 24px', color: '#64748b', lineHeight: '1.6' }}>
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. CTA */}
                <section style={{ padding: '80px 20px', background: '#fff' }}>
                    <ScrollReveal animation="zoom-in">
                        <div style={{
                            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                            borderRadius: '32px',
                            padding: '80px 40px',
                            textAlign: 'center',
                            color: '#fff',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            <h2 className="heading-xl" style={{ marginBottom: '24px', letterSpacing: '-1px' }}>
                                Ready to Turn on the Tap?
                            </h2>
                            <p className="text-body-lg" style={{ opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Let's build a campaign that pays for itself. Get a free proposal and ROI forecast today.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <button className="btn-responsive" style={{
                                    background: '#fff',
                                    color: '#dc2626',
                                    border: 'none',
                                    padding: '18px 48px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                                }}>
                                    Start New Campaign
                                </button>
                                <span style={{ fontSize: '0.9rem', opacity: '0.8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <ShieldCheck size={16} /> Data-driven decision. No long-term lock-in.
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 12. FOOTER BLURB */}
                <section style={{ padding: '60px 20px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <p>
                            Red Shark maximizes your ad spend through precision targeting on Google and Social Media. We are your partner for scalable, high-ROI performance marketing.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEMPage;
