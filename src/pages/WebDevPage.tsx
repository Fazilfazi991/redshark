import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Code, Smartphone, Zap, Lock } from 'lucide-react';

const WebDevPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #3b82f6, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                            Web Development
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#888', lineHeight: '1.6' }}>
                            More than just code. We build digital experiences that are fast, secure, and designed to convert. From simple landing pages to complex web applications.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Code size={40} color="#3b82f6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Custom Development</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Tailor-made solutions using React, Next.js, and modern frameworks. We build exactly what you need, with no bloat.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Smartphone size={40} color="#ec4899" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Responsive Design</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Your site will look and function flawlessly on every device, from pixel-perfect desktop layouts to seamless mobile experiences.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Zap size={40} color="#f9cb28" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Performance First</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Speed matters. We optimize every line of code to ensure instant load times and top-tier Core Web Vitals scores.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Lock size={40} color="#10b981" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Security & Scalability</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Built with best practices in mind to keep your data safe and your infrastructure ready to grow with your business.</p>
                        </div>
                    </div>

                    <div style={{ background: '#111', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Need a new website?</h2>
                        <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Start Your Project</button>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default WebDevPage;
