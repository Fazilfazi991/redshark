import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Share2, Users, Heart, MessageCircle } from 'lucide-react';

const SMMPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                            Social Media Marketing
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#888', lineHeight: '1.6' }}>
                            Build a brand that people love. We create scroll-stopping content and community-led strategies that turn followers into brand advocates.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Share2 size={40} color="#ec4899" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Content Strategy</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>We craft a unique voice and visual identity for your brand across Instagram, TikTok, LinkedIn, and more.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Users size={40} color="#8b5cf6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Community Management</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>We don't just post; we engage. We nurture relationships with your audience to foster loyalty and trust.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Heart size={40} color="#ef4444" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Influencer Marketing</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Leverage the credibility of industry leaders. We manage end-to-end influencer campaigns that deliver authentic reach.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <MessageCircle size={40} color="#3b82f6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Paid Social</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Laser-focused ad targeting on Meta, LinkedIn, and TikTok to drive traffic and conversions at scale.</p>
                        </div>
                    </div>

                    <div style={{ background: '#111', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's get social.</h2>
                        <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Book a Strategy Call</button>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SMMPage;
