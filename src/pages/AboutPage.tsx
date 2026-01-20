import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Target, Users, Zap, Award } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                            We Are <span style={{ color: 'var(--primary-color)' }}>RedShark</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#888', lineHeight: '1.6' }}>
                            A collective of digital natives, creative strategists, and technical wizards. We don't just build websites; we build engines for growth.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>Our Mission</h2>
                            <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                To empower ambitious businesses with the digital tools and strategies they need to dominate their market. We believe in transparency, speed, and results that you can measure.
                            </p>
                            <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                Founded in 2024, RedShark was born out of frustration with traditional agencies that over-promise and under-deliver. We set out to change that with a lean, performance-driven approach.
                            </p>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #222, #111)', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <Target size={32} color="#fff" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Result Oriented</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>We focus on KPIs that actually matter to your bottom line.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <Users size={32} color="#fff" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Client Partnership</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>We work with you, not just for you. Your success is our success.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <Zap size={32} color="#fff" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Agile Execution</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>We move fast, iterate quickly, and stay ahead of the curve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default AboutPage;
