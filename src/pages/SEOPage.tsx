import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Search, BarChart2, Globe, TrendingUp } from 'lucide-react';

const SEOPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #fff, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                            SEO & Organic Growth
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#888', lineHeight: '1.6' }}>
                            Stop chasing algorithms. Start building authority. We engineer data-driven SEO strategies that put your brand in front of the right audience, exactly when they need you.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Search size={40} color="#3b82f6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Technical SEO</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>We optimize your site's architecture, speed, and mobile performance to ensure search engines can crawl and index your content effortlessly.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <TrendingUp size={40} color="#10b981" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>On-Page Strategy</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>From keyword research to content optimization, we align your pages with user intent to drive higher rankings and better engagement.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <Globe size={40} color="#8b5cf6" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Link Building</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>We secure high-quality backlinks from authoritative sources to boost your domain authority and credibility in your industry.</p>
                        </div>
                        <div className="feature-card" style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222' }}>
                            <BarChart2 size={40} color="#f59e0b" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Analytics & Reporting</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>Transparent reporting that connects traffic to revenue. See exactly how our SEO efforts are impacting your bottom line.</p>
                        </div>
                    </div>

                    <div style={{ background: '#111', borderRadius: '24px', padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to rank #1?</h2>
                        <p style={{ color: '#888', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                            Your customers are searching for you right now. Let's make sure they find you.
                        </p>
                        <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Get a Free Audit</button>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEOPage;
