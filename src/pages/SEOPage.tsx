import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import {
    Search, BarChart2, Globe, TrendingUp, AlertTriangle, CheckCircle,
    ChevronDown, ChevronUp, ArrowRight, ShieldCheck, MapPin,
    ShoppingCart, Layers, Smartphone, FileText, Zap, Target, Users, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does SEO take?",
            answer: "SEO usually takes 3–6 months to show measurable results. It's a long-term investment that builds sustainable organic growth."
        },
        {
            question: "Is SEO a one-time process?",
            answer: "No, SEO is ongoing. Search algorithms change, competitors react, and your content needs to stay fresh to maintain rankings."
        },
        {
            question: "Do you guarantee rankings?",
            answer: "We do not guarantee specific rankings (no ethical agency can), but we guarantee ethical strategies, transparent work, and measurable growth in organic traffic and leads."
        },
        {
            question: "Do you offer local SEO?",
            answer: "Yes, we specialize in Google Business Profile optimization and local SEO strategies to help you dominate your specific service area."
        },
        {
            question: "Is SEO better than paid ads?",
            answer: "SEO provides long-term, cost-effective growth, while ads give instant visibility. A balanced strategy often uses both, but SEO offers better ROI over time."
        }
    ];

    const services = [
        {
            title: "Website SEO Audit",
            items: ["Technical SEO analysis", "On-page SEO issues", "Competitor analysis", "Actionable SEO report"],
            icon: Search
        },
        {
            title: "Keyword Research & Strategy",
            items: ["High-intent keyword research", "Local and service-based keywords", "Search intent mapping", "Content planning"],
            icon: Target
        },
        {
            title: "On-Page SEO",
            items: ["Title and meta description optimization", "Header (H1–H3) optimization", "Internal linking", "Content optimization", "Image ALT tags"],
            icon: FileText
        },
        {
            title: "Technical SEO",
            items: ["Website speed optimization", "Mobile responsiveness", "Crawl and indexing fixes", "Sitemap and robots.txt setup"],
            icon: Settings
        },
        {
            title: "Local SEO",
            items: ["Google Business Profile optimization", "Local keyword targeting", "Location-based ranking improvements", "Local citations"],
            icon: MapPin
        },
        {
            title: "Content SEO",
            items: ["SEO blog planning", "Content optimization", "Topic clusters", "Ranking-focused content structure"],
            icon: Layers
        },
        {
            title: "Off-Page SEO",
            items: ["Quality backlink building", "Authority-based outreach", "Brand mentions"],
            icon: Globe
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#334155', overflowX: 'hidden' }}>
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
                            background: '#f0f9ff',
                            borderRadius: '50px',
                            color: '#0284c7',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '24px'
                        }}>
                            Top SEO Company
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: '24px',
                            color: '#0f172a',
                            letterSpacing: '-1px'
                        }}>
                            Turns Searches into <span style={{ color: '#dc2626' }}>Real Leads</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#64748b',
                            maxWidth: '800px',
                            margin: '0 auto 40px',
                            lineHeight: '1.6'
                        }}>
                            Tired of traffic that doesn’t convert? We help businesses improve Google rankings, attract high-intent organic traffic, and generate consistent leads with ethical, data-driven strategies.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px' }}>
                                Get a Free SEO Audit
                            </button>
                            <button className="btn btn-secondary" style={{
                                padding: '16px 32px',
                                fontSize: '1.1rem',
                                borderRadius: '12px',
                                background: '#fff',
                                color: '#0f172a',
                                border: '1px solid #e2e8f0'
                            }}>
                                Talk to an SEO Expert
                            </button>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 2. WHY RED SHARK STANDS OUT */}
                <section style={{ background: '#f8fafc', padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2', color: '#0f172a' }}>
                                        Why We Stand Out as a Leading SEO Service Provider
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>
                                        Most SEO agencies focus on rankings and traffic, but over 70% of website visits never convert because the strategy targets the wrong audience.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>
                                        Red Shark approaches SEO differently by building strategies around <strong>search intent, data, and conversion behavior</strong>. With nearly 80% of buying journeys starting on search engines, every SEO decision is designed to attract high-intent users rather than vanity traffic.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.7' }}>
                                        The result is higher-quality traffic, better engagement, and consistent lead generation that compounds month after month.
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
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: 'bold' }}>Barriers to Growth</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Lack of a proper SEO strategy",
                                            "Misalignment between keywords and intent",
                                            "Targeting traffic not ready to convert",
                                            "Poor content structure",
                                            "Technical SEO issues",
                                            "No focus on high-intent searches"
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
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal animation="fade-up">
                            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>Why Businesses Choose Red Shark</h2>
                                <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                                    We don’t just optimize for Google — we optimize for business growth.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {[
                                { title: "SEO-First Approach", desc: "Strategies built around search intent and business goals." },
                                { title: "Proven Results", desc: "Increased visibility, higher-quality traffic, and measurable leads." },
                                { title: "Technical Expertise", desc: "Strong foundation for sustainable rankings." },
                                { title: "Global Market Knowledge", desc: "Specialized strategies for your specific target market." },
                                { title: "Transparent Reporting", desc: "Clear analytics and performance tracking." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{ padding: '30px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', height: '100%' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px', color: '#0f172a' }}>{item.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. INDUSTRIES WE SERVE */}
                <section style={{ padding: '100px 20px', background: '#0f172a', color: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center' }}>Industries We Serve</h2>
                        </ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            {[
                                { title: "Education & Overseas Consultancy", desc: "Attract students and applicants globally with optimized content." },
                                { title: "Interior Design & Architecture", desc: "Increase visibility and attract clients actively searching for design." },
                                { title: "Local Service Businesses", desc: "Generate local leads for salons, plumbers, electricians, and more." },
                                { title: "E-commerce & Retail", desc: "Boost product visibility, organic traffic, and online sales with targeted SEO." },
                                { title: "Manufacturing & B2B", desc: "Reach high-value clients and improve lead quality through strategic SEO." },
                                { title: "Healthcare & Wellness", desc: "Get hospitals and clinics found exactly when patients are searching." }
                            ].map((industry, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', height: '100%' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px', color: '#38bdf8' }}>{industry.title}</h3>
                                        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{industry.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. WHAT IS SEO */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>What is SEO and Why It Matters</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8', marginBottom: '30px' }}>
                                Search Engine Optimization (SEO) is the process of improving a website’s visibility on search engines like Google, ensuring a business appears in front of potential customers exactly when they are searching for relevant products or services.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}>
                                Proper SEO helps attract high-intent organic traffic, improve search rankings, and build credibility and trust in the brand. It reduces dependency on paid ads while providing long-term, sustainable lead generation.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 6. OUR SEO SERVICES */}
                <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Our SEO Services</h2>
                        </ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {services.map((service, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                            <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
                                                <service.icon size={24} color="#2563eb" />
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>{service.title}</h3>
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
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>Our SEO Process</h2>
                                <p style={{ color: '#64748b' }}>A transparent, data-backed roadmap to success.</p>
                            </div>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                { step: "1. Audit", desc: "Understanding your website, competitors, and market" },
                                { step: "2. Strategy", desc: "Creating a customized SEO roadmap" },
                                { step: "3. Implementation", desc: "On-page, technical, and content execution" },
                                { step: "4. Optimization", desc: "Continuous improvements based on data" },
                                { step: "5. Growth", desc: "Transparent performance reports and scaling" }
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

                {/* 8. TOOLS & TECH (New Section) */}
                <section style={{ padding: '80px 20px', background: '#f8fafc', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '40px' }}>Our SEO Toolkit</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: '0.7' }}>
                            {['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Moz', 'Yoast', 'GTmetrix'].map((tool, i) => (
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
                <section style={{ padding: '100px 20px', background: '#0f172a', color: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <span style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SUCCESS STORY</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '16px 0' }}>Local Service Business Growth</h2>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up">
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>CHALLENGE</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Low visibility and zero organic leads from search engines.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>SOLUTION</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Comprehensive website optimization and Local SEO strategy.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>RESULT</h4>
                                        <p style={{ fontSize: '1.1rem', color: '#34d399', fontWeight: 'bold' }}>Improved rankings, +210% traffic increase, consistent daily enquiries.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 10. FAQ */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Frequently Asked Questions</h2>
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
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }}>
                                Get a Free SEO Audit Today
                            </h2>
                            <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Discover what’s stopping your website from ranking and how you can improve.
                            </p>
                            <button style={{
                                background: '#fff',
                                color: '#dc2626',
                                border: 'none',
                                padding: '18px 48px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                            }}>
                                Book Your Free SEO Consultation
                            </button>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 12. SEO FOOTER CONTENT */}
                <section style={{ padding: '60px 20px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>
                            Red Shark is a results-driven digital marketing agency offering SEO, social media marketing, paid advertising, and content marketing services. We help businesses grow through ethical, data-driven strategies.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEOPage;
