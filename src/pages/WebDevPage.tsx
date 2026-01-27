import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { Code, Smartphone, Zap, Lock, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Layout, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a website take to build?",
            answer: "A standard corporate website takes 4-6 weeks. Custom web applications or complex e-commerce platforms typically take 8-12 weeks. We provide a detailed timeline during discovery."
        },
        {
            question: "Will I be able to edit the website myself?",
            answer: "Yes. We build on user-friendly CMS platforms (like WordPress or headless CMS for React apps). We provide full training so your team can update text, images, and blogs without a developer."
        },
        {
            question: "Do you provide hosting and maintenance?",
            answer: "We offer premium managed hosting and maintenance packages. We handle security updates, backups, and speed optimizations so you never have to worry about downtime."
        },
        {
            question: "Is it mobile responsive?",
            answer: "100%. We design mobile-first. Your site will look and function flawlessly on every screen size, from the smallest iPhone to the largest desktop monitor."
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: 'var(--text-main)', overflowX: 'hidden' }}>
            <Header />

            <main style={{ paddingTop: '80px' }}>
                {/* 1. HERO SECTION */}
                <section className="section-responsive text-center" style={{ position: 'relative' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: '#eff6ff',
                                borderRadius: '50px',
                                color: '#2563eb',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Future-Proof Web Development
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Websites that Wow.<br />
                                <span style={{ color: '#dc2626' }}>Engineered to Convert.</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto 40px' }}>
                                Pretty isn't enough. We build lightning-fast, secure, and user-centric websites that turn visitors into loyal customers.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive">
                                    Start Your Project
                                </button>
                                <Link to="/case-studies" className="btn btn-secondary btn-responsive" style={{
                                    background: '#fff',
                                    color: '#0f172a',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    View Portfolio
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div style={{ marginTop: '60px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                                POWERING DIGITAL EXPERIENCES FOR
                                <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '20px', opacity: '0.6', flexWrap: 'wrap' }}>
                                    {/* Add logos later */}
                                    <span>SAAS PLATFORMS</span>
                                    <span>ECOMMERCE</span>
                                    <span>CORPORATE</span>
                                    <span>REAL ESTATE</span>
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
                                        Is your website costing you business?
                                    </h2>
                                    <p className="text-body" style={{ color: '#94a3b8', marginBottom: '20px' }}>
                                        Your website is your 24/7 salesperson. If it's slow, broken, or confusing, you're handing money to competitors.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Site takes more than 3 seconds to load.",
                                            "Looks terrible on mobile devices.",
                                            "Impossible for your team to update easily."
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
                                    <h3 className="heading-md" style={{ marginBottom: '20px' }}>The Speed Factor</h3>
                                    <div style={{ display: 'flex', alignItems: 'end', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#3b82f6' }}>53%</span>
                                        <span style={{ fontSize: '1rem', color: '#94a3b8', paddingBottom: '10px' }}>users leave if &gt;3s load</span>
                                    </div>
                                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>We optimize every line of code to ensure instant load times. Speed isn't just a feature; it's a requirement for ranking and conversion.</p>
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
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>The RedShark Digital Stack</h2>
                                <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>From idea to launch, our process ensures excellence.</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid-auto-fit">
                            {[
                                { icon: Layout, title: "1. Discovery & Design", desc: "We map out user journeys and wireframe a high-fidelity design that aligns with your brand goals." },
                                { icon: Code, title: "2. Development", desc: "Our engineers build using clean, modern code (React, Next.js, or WordPress) ensuring scalability." },
                                { icon: ShieldCheck, title: "3. QA & Security", desc: "Rigorous testing across devices, speed optimization, and security hardening before launch." },
                                { icon: Server, title: "4. Deploy & Scale", desc: "Seamless launch with zero downtime, followed by training and ongoing support." }
                            ].map((step, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div key={i} className="card-base" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
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
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Tech Capabilities</h2>
                        </ScrollReveal>

                        <div className="grid-2">
                            <ScrollReveal animation="fade-up">
                                <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                                    <div style={{ background: '#dbeafe', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                        <Code size={28} color="#2563eb" />
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#0f172a' }}>Custom Web Apps</h3>
                                    <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                        Need complexity? specific functionality? We build custom web applications using React, Node.js, and modern stacks.
                                    </p>
                                    <ul style={{ fontSize: '0.95rem', color: '#475569', padding: 0, listStyle: 'none' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> SaaS Dashboards</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> Customer Portals</li>
                                        <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#2563eb" /> API Integrations</li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                                    <div style={{ background: '#fef3c7', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                                        <Lock size={28} color="#d97706" />
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#0f172a' }}>E-Commerce & CMS</h3>
                                    <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                        Scalable online stores and content sites. Whether it's Shopify, WooCommerce, or a Headless global rollout.
                                    </p>
                                    <ul style={{ fontSize: '0.95rem', color: '#475569', padding: 0, listStyle: 'none' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#d97706" /> High-conversion Checkouts</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#d97706" /> Inventory Sync</li>
                                        <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="#d97706" /> Payment Gateway Setup</li>
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
                            <h2 className="heading-lg" style={{ color: '#0f172a', maxWidth: '500px' }}>We Build Assets.</h2>
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
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f87171', marginBottom: '16px', letterSpacing: '1px' }}>CASE STUDY: REAL ESTATE</div>
                                    <h3 className="heading-lg" style={{ marginBottom: '20px' }}>Rebuilding a Luxury PropTech Platform</h3>
                                    <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '30px' }}>
                                        A luxury real estate agency needed a high-speed, filterable property portal. We built a Next.js app with headless CMS that loads instantly.
                                    </p>
                                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                        <div>
                                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>0.4s</div>
                                            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Load Time</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>+150%</div>
                                            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Lead Form Submits</div>
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
                                    <Zap size={80} color="#f87171" strokeWidth={1} />
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
                                Ready to Upgrade Your Digital Presence?
                            </h2>
                            <p className="text-body-lg" style={{ opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Let's build a website that you're proud of and that your customers love.
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
                                    Start Your Project
                                </button>
                                <span style={{ fontSize: '0.9rem', opacity: '0.8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <ShieldCheck size={16} /> Fast turnaround. Pixel perfect.
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

export default WebDevPage;
