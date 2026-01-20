import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Search, BarChart2, Globe, TrendingUp, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, MapPin, ShoppingCart, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long until we see #1 rankings?",
            answer: "SEO is compound growth. While technical fixes often yield 'quick wins' in the first 30 days, substantial authority building typically takes 3-6 months. We focus on sustainable, long-term dominance that survives algorithm updates."
        },
        {
            question: "Do you use AI content or write it manually?",
            answer: "We believe in a hybrid approach but prioritize human expertise. AI helps us research and outline, but experienced copywriters craft the final narrative to ensure it resonates with humans and satisfies search intent."
        },
        {
            question: "What's the difference between SEO and SEM?",
            answer: "SEM (Paid Search) buys visits; SEO (Organic Search) earns them. SEM turns off when you stop paying. SEO is an asset that continues to drive traffic long after the initial investment."
        },
        {
            question: "Do you handle Local SEO for physical stores?",
            answer: "Yes. We specialize in Google Business Profile optimization, local citation building, and 'near me' search dominance for brick-and-mortar businesses."
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: 'var(--text-main)', overflowX: 'hidden' }}>
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
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: '#f1f5f9',
                        borderRadius: '50px',
                        color: '#64748b',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '24px'
                    }}>
                        Result-Driven SEO Agency
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        color: '#0f172a',
                        letterSpacing: '-1px'
                    }}>
                        Dominate Search Results.<br />
                        <span style={{ color: '#dc2626' }}>Capture High-Intent Traffic.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#64748b',
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                        lineHeight: '1.6'
                    }}>
                        Stop chasing algorithms. We engineer data-driven SEO strategies that build authority and put your brand in front of customers exactly when they're ready to buy.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px' }}>
                            Get Your Free SEO Audit
                        </button>
                        <Link to="/case-studies" className="btn btn-secondary" style={{
                            padding: '16px 32px',
                            fontSize: '1.1rem',
                            borderRadius: '12px',
                            background: '#fff',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0'
                        }}>
                            View Case Studies
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div style={{ marginTop: '60px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                        TRUSTED BY INNOVATIVE BRANDS
                        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '20px', opacity: '0.6', flexWrap: 'wrap' }}>
                            {/* Add logos later */}
                            <span>FINTECH CORP</span>
                            <span>HEALTH+</span>
                            <span>ECOMM GLOBAL</span>
                            <span>SAASify</span>
                        </div>
                    </div>
                </section>

                {/* 2. PROBLEM / AGITATION */}
                <section style={{ background: '#0f172a', color: '#fff', padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
                                    Is your website invisible to the people who matter?
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                                    You have a great product and a beautiful website. But if you're not on Page 1, you don't exist.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "Losing market share to competitors with inferior products.",
                                        "Burning budget on ads because organic traffic is flat.",
                                        "Getting traffic that bounces and never converts."
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                                            <AlertTriangle size={20} color="#f87171" style={{ marginTop: '4px', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>The Cost of Invisibility</h3>
                                <div style={{ display: 'flex', alignItems: 'end', gap: '10px', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#f87171' }}>91%</span>
                                    <span style={{ fontSize: '1rem', color: '#94a3b8', paddingBottom: '10px' }}>of pages get zero traffic</span>
                                </div>
                                <p style={{ color: '#94a3b8' }}>Don't let your business be a statistic. Search intent is the highest quality traffic you can get. We help you capture it.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PROCESS / FRAMEWORK */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>The RedShark SEO Protocol</h2>
                            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>A scientific, 4-step approach to climbing the rankings and staying there.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                            {[
                                { icon: Search, title: "1. The Audit", desc: "We scan 200+ ranking factors to identify technical errors and missed opportunities." },
                                { icon: Layers, title: "2. The Foundation", desc: "We fix site speed, mobile usability, and architecture to ensure Google loves your code." },
                                { icon: TrendingUp, title: "3. The Content", desc: "We deploy high-authority content clusters that answer user questions better than anyone else." },
                                { icon: Globe, title: "4. The Authority", desc: "We secure high-quality, relevant backlinks that signal trust and power to search engines." }
                            ].map((step, i) => (
                                <div key={i} style={{ padding: '30px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute', top: '-15px', left: '30px',
                                        background: '#dc2626', color: '#fff', width: '30px', height: '30px',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                                    }}>
                                        {i + 1}
                                    </div>
                                    <step.icon size={32} color="#0f172a" style={{ marginBottom: '20px', marginTop: '10px' }} />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px', color: '#0f172a' }}>{step.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CORE SERVICE PILLARS */}
                <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Specialized SEO Capabilities</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ background: '#fee2e2', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                    <ShoppingCart size={28} color="#dc2626" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>E-Commerce SEO</h3>
                                <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                    Drive ready-to-buy shoppers straight to your product pages. We optimize for high-intent keywords, fix category structures, and implement schema markup for rich snippets.
                                </p>
                                <ul style={{ fontSize: '0.95rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#dc2626" /> Product Schema Implementation</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#dc2626" /> Category Page Strategy</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#dc2626" /> Conversion Rate Optimization</li>
                                </ul>
                            </div>

                            <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ background: '#dcfce7', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                    <MapPin size={28} color="#16a34a" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>Local SEO</h3>
                                <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                    Dominate your neighborhood. We help physical businesses rank in the "Local Pack" and on Maps, ensuring customers find you first when searching nearby.
                                </p>
                                <ul style={{ fontSize: '0.95rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#16a34a" /> Google Business Profile Optimization</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#16a34a" /> Local Citations & Directory Mgmt</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#16a34a" /> Reputation Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PROOF OF WORK */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', maxWidth: '500px' }}>Real Results. No Fluff.</h2>
                            <Link to="/case-studies" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: '600' }}>
                                View All Success Stories <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div style={{
                            background: '#0f172a',
                            borderRadius: '24px',
                            padding: '60px',
                            color: '#fff',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '60px',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f87171', marginBottom: '16px', letterSpacing: '1px' }}>CASE STUDY: FINTECH</div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>From 2k to 85k Monthly Organic Visitors in 12 Months</h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '30px' }}>
                                    A Dubai-based fintech startup was struggling to acquire users through paid ads due to high CPCs. We implemented a content-led SEO strategy that targeted high-volume informational queries.
                                </p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>+4,150%</div>
                                        <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Modern Traffic</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>-60%</div>
                                        <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>User Acquisition Cost</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                height: '300px',
                                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <TrendingUp size={80} color="#f87171" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ */}
                <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Common Questions</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, index) => (
                                <div key={index} style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
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
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section style={{ padding: '80px 20px', background: '#fff' }}>
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
                            Stop Losing Traffic to Competitors.
                        </h2>
                        <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                            Get a complimentary 15-minute video audit of your website. We'll show you exactly why you aren't ranking and how to fix it.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
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
                                Claim Your Free Audit
                            </button>
                            <span style={{ fontSize: '0.9rem', opacity: '0.8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ShieldCheck size={16} /> No obligation. delivered to your inbox in 24 hours.
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEOPage;
