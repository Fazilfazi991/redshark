import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Share2, Users, Heart, MessageCircle, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Video, Radio, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SMMPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you post for us or just give strategy?",
            answer: "We do it all. Strategy, content creation (design & video), scheduling, posting, community engagement, and reporting. We become your internal social media team."
        },
        {
            question: "Which platforms should we be on?",
            answer: "You don't need to be everywhere. We find where your audience actually hangs out. B2B? LinkedIn. Gen Z? TikTok. Lifestyle? Instagram. We focus on the platforms that drive ROI."
        },
        {
            question: "How do you handle negative comments?",
            answer: "We have a strict reputation management protocol. We respond promptly and professionally to neutralize issues, or escalate to you if necessary. We turn critics into customers through great service."
        },
        {
            question: "Can you work with our existing brand guidelines?",
            answer: "Absolutely. We are experts at adopting brand voices. We'll ensure every post looks, feels, and sounds exactly like you—just better."
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
                        background: '#fdf2f8',
                        borderRadius: '50px',
                        color: '#db2777',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '24px'
                    }}>
                        Social Media Growth Agency
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        color: '#0f172a',
                        letterSpacing: '-1px'
                    }}>
                        Build a Brand People Love.<br />
                        <span style={{ color: '#dc2626' }}>Ignite Your Community.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#64748b',
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                        lineHeight: '1.6'
                    }}>
                        Stop shouting at your audience. We create scroll-stopping content and community-led strategies that turn followers into superfans and customers.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px' }}>
                            Book a Strategy Call
                        </button>
                        <Link to="/case-studies" className="btn btn-secondary" style={{
                            padding: '16px 32px',
                            fontSize: '1.1rem',
                            borderRadius: '12px',
                            background: '#fff',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0'
                        }}>
                            View Our Portfolio
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div style={{ marginTop: '60px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                        VIRAL CAMPAIGNS FOR
                        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '20px', opacity: '0.6', flexWrap: 'wrap' }}>
                            {/* Add logos later */}
                            <span>LIFESTYLE BRAND</span>
                            <span>TECH APP</span>
                            <span>FOOD CHAIN</span>
                            <span>EVENT SERIES</span>
                        </div>
                    </div>
                </section>

                {/* 2. PROBLEM / AGITATION */}
                <section style={{ background: '#0f172a', color: '#fff', padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
                                    Is your social media a ghost town?
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Posting "Happy Friday" isn't a strategy. Without a narrative and engagement plan, you're just noise.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "Inconsistent posting and low engagement.",
                                        "No clear brand voice or visual identity.",
                                        "Followers are not converting into buyers."
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                                            <AlertTriangle size={20} color="#f87171" style={{ marginTop: '4px', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>The Power of Community</h3>
                                <div style={{ display: 'flex', alignItems: 'end', gap: '10px', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#db2777' }}>73%</span>
                                    <span style={{ fontSize: '1rem', color: '#94a3b8', paddingBottom: '10px' }}>customers buy based on CX</span>
                                </div>
                                <p style={{ color: '#94a3b8' }}>People buy from brands they trust. We build that trust through authentic human connection and valuable content.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PROCESS / FRAMEWORK */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>The Viral Framework</h2>
                            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>How we turn strangers into loyal advocates.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                            {[
                                { icon: Radio, title: "1. Strategy", desc: "We define your content pillars, tone of voice, and visual aesthetic." },
                                { icon: Video, title: "2. Creation", desc: "Our studio produces high-end reels, graphics, and copy that demands attention." },
                                { icon: Share2, title: "3. Distribution", desc: "We post at optimal times and leverage platform-specific features (Stories, Polls)." },
                                { icon: Heart, title: "4. Community", desc: "We engage with every comment and DM to build genuine relationships." }
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
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Our Playbook</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ background: '#fce7f3', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                    <Users size={28} color="#db2777" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>Influencer Marketing</h3>
                                <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                    Borrow trust. We connect you with vetted niche influencers who can authentically promote your product to their loyal audience.
                                </p>
                                <ul style={{ fontSize: '0.95rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#db2777" /> Nano & Micro Influencers</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#db2777" /> Contract Negotiation</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#db2777" /> Campaign Tracking</li>
                                </ul>
                            </div>

                            <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ background: '#e0e7ff', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                    <ThumbsUp size={28} color="#4338ca" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>Paid Social (Meta/TikTok)</h3>
                                <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                    Amplify your best content. We use sophisticated targeting to put your engaging content in front of millions of potential customers.
                                </p>
                                <ul style={{ fontSize: '0.95rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#4338ca" /> UGC Ad Creatives</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#4338ca" /> Lookalike Audiences</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#4338ca" /> Pixel Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PROOF OF WORK */}
                <section style={{ padding: '100px 20px', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', maxWidth: '500px' }}>We Know Viral.</h2>
                            <Link to="/case-studies" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: '600' }}>
                                View Full Case Study <ArrowRight size={20} />
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
                                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f87171', marginBottom: '16px', letterSpacing: '1px' }}>CASE STUDY: FOOD & BEV</div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>1 Million Views in 30 Days Launching a New Burger Joint</h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '30px' }}>
                                    A new burger chain needed hype. We organized an influencer tasting event and produced 5 high-energy Reels. The campaign went viral locally, leading to lines around the block.
                                </p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>1.2M+</div>
                                        <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Video Views</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>+12k</div>
                                        <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>New Followers</div>
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
                                <Heart size={80} color="#f87171" strokeWidth={1} />
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
                            Ready to make some noise?
                        </h2>
                        <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                            Let's clarify your message and amplify it to the world. Book a free social strategy session.
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
                                Book Strategy Call
                            </button>
                            <span style={{ fontSize: '0.9rem', opacity: '0.8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ShieldCheck size={16} /> 30-min consultation. Valuable insights guaranteed.
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

export default SMMPage;
