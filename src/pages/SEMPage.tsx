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
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: 'var(--text-main)' }}>
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
                                Instant Visibility.<br />
                                <span style={{ color: '#dc2626' }}>Measurable ROI.</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto 40px' }}>
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

                            {/* Trust Indicators */}
                            <div style={{ marginTop: '60px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                                SCALING REVENUE FOR
                                <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '20px', opacity: '0.6', flexWrap: 'wrap' }}>
                                    <span>RETAIL GIANTS</span>
                                    <span>B2B LEADERS</span>
                                    <span>STARTUPS</span>
                                    <span>LOCAL HEROES</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. PROBLEM / AGITATION */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                                        Is your ad budget disappearing into a black hole?
                                    </h2>
                                    <p className="text-body" style={{ color: '#94a3b8', marginBottom: '20px' }}>
                                        PPC looks easy, but 90% of accounts bleed money due to poor structure and intent matching.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Getting clicks but zero leads or sales.",
                                            "CPC costs rising while quality drops.",
                                            "Agencies that 'set it and forget it'."
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                                                <AlertTriangle size={20} color="#f87171" style={{ marginTop: '4px', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px' }}>The RedShark Difference</h3>
                                    <div style={{ display: 'flex', alignItems: 'end', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#16a34a' }}>3.8x</span>
                                        <span style={{ fontSize: '1rem', color: '#94a3b8', paddingBottom: '10px' }}>Average ROAS for Clients</span>
                                    </div>
                                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>We don't care about vanity metric like 'impressions'. We care about Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS).</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 3. PROCESS / FRAMEWORK */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '80px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>The ROI Protocol</h2>
                                <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Our 4-phase system to turn ad spend into profit.</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid-auto-fit">
                            {[
                                { icon: Target, title: "1. Strategy", desc: "We analyze your margins, competitors, and ideal customer profile to build a winning plan." },
                                { icon: Zap, title: "2. The Build", desc: "We create granular campaign structures and high-converting landing pages." },
                                { icon: Crosshair, title: "3. Optimization", desc: "Daily bid adjustments, negative keyword mining, and A/B testing of ad copy." },
                                { icon: DollarSign, title: "4. Scale", desc: "Once we hit your target CPA, we scale budget aggressively to maximize volume." }
                            ].map((step, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute', top: '-15px', left: '30px',
                                            background: '#dc2626', color: '#fff', width: '30px', height: '30px',
                                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <step.icon size={32} color="#0f172a" style={{ marginBottom: '20px', marginTop: '10px' }} />
                                        <h3 className="heading-md" style={{ marginBottom: '12px', color: '#0f172a' }}>{step.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CORE SERVICE PILLARS */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Where We Dominate</h2>
                        </ScrollReveal>

                        <div className="grid-2">
                            <ScrollReveal animation="fade-up">
                                <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                                    <div style={{ background: '#dbeafe', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                        <MousePointer size={28} color="#2563eb" />
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#0f172a' }}>Google Search Ads</h3>
                                    <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                        Capture customers when they are actively typing your service into Google. The highest intent traffic available.
                                    </p>
                                    <ul style={{ fontSize: '0.95rem', color: '#475569', padding: 0, listStyle: 'none' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> Competitor Conquesting</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> Single Keyword Ad Groups (SKAGs)</li>
                                        <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> High-Quality Score Focus</li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                                    <div style={{ background: '#f3e8ff', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                        <Users size={28} color="#9333ea" />
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#0f172a' }}>Retargeting & Display</h3>
                                    <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                        Most people don't buy on the first visit. We follow them across the web to bring them back to complete the purchase.
                                    </p>
                                    <ul style={{ fontSize: '0.95rem', color: '#475569', padding: 0, listStyle: 'none' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#9333ea" /> Dynamic Product Remarketing</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#9333ea" /> Cross-Platform Visibility</li>
                                        <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#9333ea" /> Brand Awareness Campaigns</li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 5. PROOF OF WORK */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                            <h2 className="heading-lg" style={{ color: '#0f172a', maxWidth: '500px' }}>Numbers Don't Lie.</h2>
                            <Link to="/case-studies" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: '600' }}>
                                View Full Case Study <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div style={{
                            background: '#0f172a',
                            borderRadius: '24px',
                            padding: '60px',
                            color: '#fff',
                        }}>
                            <div className="grid-2">
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f87171', marginBottom: '16px', letterSpacing: '1px' }}>CASE STUDY: E-COMMERCE</div>
                                    <h3 className="heading-lg" style={{ marginBottom: '20px' }}>Scaling Sustainable Fashion to $500k/Month</h3>
                                    <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '30px' }}>
                                        We took over a stagnant Google Ads account for an apparel brand. By restructuring the account into SKAGs and implementing smart bidding, we drastically lowered CPA while scaling spend.
                                    </p>
                                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                        <div>
                                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>6.5x</div>
                                            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>ROAS (Return on Ad Spend)</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>-42%</div>
                                            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Cost Per Acquisition</div>
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
                                    <PieChart size={80} color="#f87171" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Common Questions</h2>
                        </ScrollReveal>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
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

                {/* 7. FINAL CTA */}
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
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEMPage;
