import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Target, DollarSign, MousePointer, PieChart } from 'lucide-react';

const SEMPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #ff4d4d, #f9cb28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                            Paid Advertising (SEM)
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#888', lineHeight: '1.6' }}>
                            Instant visibility. Targeted traffic. Measurable ROI. We build high-performance ad campaigns that turn clicks into customers.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Target size={40} color="#ff4d4d" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Google Ads</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Capture intent at the exact moment of search. We manage Search, Display, and Shopping campaigns to maximize your visibility.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <MousePointer size={40} color="#3b82f6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Retargeting</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Re-engage visitors who didn't convert the first time. Keep your brand top-of-mind with strategic remarketing ads.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <DollarSign size={40} color="#10b981" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Cost Efficiency</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>We meticulously optimize bids and quality scores to lower your Cost Per Click (CPC) and drive higher ROI.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <PieChart size={40} color="#8b5cf6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>A/B Testing</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Continuous testing of ad copy, visuals, and landing pages ensures your campaigns are always improving.</p>
                        </div>
                    </div>

                    <div style={{ background: '#111', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to scale your leads?</h2>
                        <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Start Your Campaign</button>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEMPage;
