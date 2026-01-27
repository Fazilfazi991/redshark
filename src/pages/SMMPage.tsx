import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import {
    Share2, Users, Heart, MessageCircle, AlertTriangle, CheckCircle,
    ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Video, Radio,
    ThumbsUp, Globe, BarChart2, Zap, Target, Layers, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SMMPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "Social media growth is progressive. Engagement improvements are typically visible within the first few weeks, with compounding results over time."
        },
        {
            question: "Do you create content?",
            answer: "Yes. Content planning and creation (both design and copy) are included in our SMM services."
        },
        {
            question: "Is paid advertising included?",
            answer: "Paid advertising strategies can be included based on your specific business goals and requirements."
        }
    ];

    const platforms = [
        { name: "Instagram", desc: "Brand visibility, reels, stories, and engagement growth", icon: Smartphone },
        { name: "Facebook", desc: "Community building, reach expansion, and lead-driven campaigns", icon: ThumbsUp },
        { name: "LinkedIn", desc: "B2B branding, authority building, and professional engagement", icon: Users },
        { name: "YouTube", desc: "Video visibility, storytelling, and long-form content strategy", icon: Video },
        { name: "X (Twitter)", desc: "Real-time updates, brand conversations, and industry presence", icon: MessageCircle }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#0f172a', overflowX: 'hidden' }}>
            <Header />

            <main style={{ paddingTop: '80px' }}>
                {/* 1. HERO SECTION */}
                <section style={{
                    padding: '120px 20px 80px',
                    textAlign: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    <ScrollReveal animation="fade-up">
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: '#fdf2f8',
                            borderRadius: '50px',
                            color: '#db2777',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '24px'
                        }}>
                            Social Media Marketing Services
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: '24px',
                            color: '#0f172a',
                            letterSpacing: '-1px'
                        }}>
                            We Prove Conversions Through <span style={{ color: '#db2777' }}>Strategic Marketing</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#64748b',
                            maxWidth: '800px',
                            margin: '0 auto 40px',
                            lineHeight: '1.6'
                        }}>
                            Red Shark delivers professional social media marketing services built on clear strategy, data intelligence, and performance insights. We don’t just claim results; we prove them.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px', background: '#db2777', borderColor: '#db2777' }}>
                                Get a Free Strategy Call
                            </button>
                            <Link to="/case-studies" className="btn btn-secondary" style={{
                                padding: '16px 32px',
                                fontSize: '1.1rem',
                                borderRadius: '12px',
                                background: '#fff',
                                color: '#0f172a',
                                border: '1px solid #e2e8f0'
                            }}>
                                View Our Work
                            </Link>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 2. INTRO: WHAT IS SMM */}
                <section style={{ background: '#fff', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>What Is Social Media Marketing?</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8', marginBottom: '30px' }}>
                                Social Media Marketing (SMM) is the strategic use of social platforms to build brand awareness, connect with audiences, and support measurable business growth. When executed with the right strategy, SMM goes beyond posting content — it aligns messaging, audience behavior, and analytics to create meaningful engagement that supports long-term digital success.
                            </p>
                            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', display: 'inline-block' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Why It Matters Today</h3>
                                <p style={{ color: '#64748b' }}>
                                    In today’s competitive digital environment, social media is no longer optional. Customers discover brands, evaluate credibility, and make decisions based on social presence.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 3. CHALLENGES & STRATEGY */}
                <section style={{ background: '#0f172a', color: '#fff', padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
                                        Challenges Businesses Face
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                                        Many businesses struggle with social media due to inconsistent posting, unclear messaging, and strict management without results.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Inconsistent posting and unclear messaging",
                                            "Low reach and weak engagement",
                                            "Growth without measurable impact",
                                            "Lack of performance tracking",
                                            "Time-consuming management without results"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                                                <AlertTriangle size={20} color="#f472b6" style={{ flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold', color: '#fbcfe8' }}>Our Strategy-First Approach</h3>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>
                                        At Red Shark, every campaign begins with understanding business goals, audience intent, and platform relevance.
                                    </p>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                        We don’t rely on assumptions. Content planning, publishing, and engagement are all aligned to ensure clarity and consistency. Every decision is guided by data and refined through performance insights.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 4. PLATFORMS WE MANAGE */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Platforms We Manage</h2>
                        </ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {platforms.map((platform, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{ padding: '30px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', height: '100%' }}>
                                        <div style={{ background: '#fce7f3', width: 'fit-content', padding: '10px', borderRadius: '10px', marginBottom: '16px' }}>
                                            <platform.icon size={24} color="#db2777" />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px', color: '#0f172a' }}>{platform.name}</h3>
                                        <p style={{ color: '#64748b', lineHeight: '1.6' }}>{platform.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. SERVICES & PROCESS */}
                <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Our Services Breakdown</h2>
                        </ScrollReveal>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '100px' }}>
                            {[
                                "Social Media Strategy & Planning",
                                "Content Creation & Calendar Management",
                                "Organic Social Media Management",
                                "Paid Social Media Advertising",
                                "Community Engagement & Response Handling",
                                "Performance Tracking & Reporting"
                            ].map((service, i) => (
                                <ScrollReveal key={i} animation="zoom-in" delay={i * 50}>
                                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontWeight: '600', color: '#0f172a' }}>{service}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '40px', textAlign: 'center' }}>How We Work</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            {[
                                "1. Discovery & Goal Alignment",
                                "2. Strategy Development",
                                "3. Content Creation & Publishing",
                                "4. Monitoring & Optimization",
                                "5. Performance Reporting"
                            ].map((step, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{
                                        padding: '16px 24px',
                                        background: '#db2777',
                                        color: '#fff',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '0.95rem'
                                    }}>
                                        {step}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. INDUSTRIES & TOOLS */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px' }}>
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '40px', color: '#0f172a' }}>Industries We Serve</h2>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                                        {[
                                            "Education & Overseas Consultancies",
                                            "Interior Design & Architecture",
                                            "Local Service Businesses",
                                            "E-commerce & Retail Brands",
                                            "Manufacturing & B2B Companies",
                                            "Healthcare & Wellness Businesses"
                                        ].map((ind, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#db2777' }}></div>
                                                <span style={{ fontSize: '1.1rem', color: '#475569' }}>{ind}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="slide-left">
                                <div style={{ background: '#f0f9ff', padding: '40px', borderRadius: '24px' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: '#0369a1' }}>Tools We Use</h2>
                                    <p style={{ marginBottom: '30px', color: '#334155' }}>
                                        We use industry-leading tools to ensure precision and performance:
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                        {['Google Analytics', 'Meta Business Suite', 'Canva', 'Scheduling Tools', 'Reporting Tools'].map((tool, i) => (
                                            <span key={i} style={{
                                                background: '#fff',
                                                padding: '10px 20px',
                                                borderRadius: '8px',
                                                fontWeight: '600',
                                                color: '#0284c7',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}>
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 7. RESULTS & CTA */}
                <section style={{ padding: '100px 20px', background: '#0f172a', color: '#fff', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}>Results That Matter</h2>
                            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.8', marginBottom: '40px' }}>
                                Our focus is not on vanity metrics. We track reach quality, engagement behavior, audience growth, and campaign performance to support data-driven decisions and long-term brand growth.
                            </p>
                            <div style={{ fontStyle: 'italic', marginBottom: '60px', opacity: '0.8' }}>
                                "Businesses choose Red Shark for our structured approach, transparent communication, and performance-focused strategies."
                            </div>
                        </ScrollReveal>

                        {/* FAQ SUB-SECTION */}
                        <div style={{ textAlign: 'left', marginBottom: '80px' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Frequently Asked Questions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {faqs.map((faq, index) => (
                                    <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                                            <button
                                                onClick={() => toggleFaq(index)}
                                                style={{
                                                    width: '100%', textAlign: 'left', padding: '24px', background: 'none', border: 'none',
                                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#fff'
                                                }}
                                            >
                                                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{faq.question}</span>
                                                {openFaq === index ? <ChevronUp size={20} color="#94a3b8" /> : <ChevronDown size={20} color="#94a3b8" />}
                                            </button>
                                            {openFaq === index && (
                                                <div style={{ padding: '0 24px 24px', color: '#cbd5e1', lineHeight: '1.6' }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>

                        <ScrollReveal animation="zoom-in">
                            <div style={{ background: '#db2777', padding: '60px 40px', borderRadius: '32px' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>
                                    Ready to Strengthen Your Social Media Presence?
                                </h2>
                                <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
                                    Let’s build a social media strategy that aligns with your brand and business objectives.
                                </p>
                                <button style={{
                                    background: '#fff',
                                    color: '#db2777',
                                    border: 'none',
                                    padding: '16px 40px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    borderRadius: '12px',
                                    cursor: 'pointer'
                                }}>
                                    Get a Free Social Media Strategy Call
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SMMPage;
