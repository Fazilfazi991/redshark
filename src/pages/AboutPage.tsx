import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Target, Users, Zap } from 'lucide-react';
import FAQ from '../components/FAQ';
import Founder from '../components/Founder';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <SEO
                title="About Redsharc | The Performance Marketing Collective"
                description="Redsharc is a team of digital natives, creative strategists, and technical experts dedicated to growing businesses through performance marketing."
                keywords="About Redsharc, Digital Marketing Agency, Performance Marketing Team, Marketing Strategy"
                canonical="https://www.redsharc.com/about"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Redsharc",
                        "description": "Redsharc is a team of digital natives, creative strategists, and technical experts dedicated to growing businesses through performance marketing.",
                        "url": "https://redsharc.com/about"
                    }
                }}
            />
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#fff', color: 'var(--text-main)', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
                            We Are <span style={{ color: 'var(--primary)' }}>Redsharc</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            A collective of digital natives, creative strategists, and technical wizards. We don't just build websites; we build engines for growth.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                To empower ambitious businesses with the digital tools and strategies they need to dominate their market. As the <Link to="/">Best digital marketing agency in Kerala</Link>, we believe in transparency, speed, and results that you can measure.
                            </p>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000', marginTop: '40px' }}>Our Vision</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                To be the leading force in digital transformation, redefining how businesses interact with their audience through innovative technology and creative excellence.
                            </p>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000', marginTop: '40px' }}>Our Story</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                Redsharc began in 2024 with a clear purpose: to disrupt the traditional agency model. We saw a gap between technical execution and creative strategy, and we set out to bridge it. From being a top <Link to="/search-engine-optimization">SEO agency in Kerala</Link> to handling complex <Link to="/web-development">website development in Kerala</Link> and data-driven <Link to="/google-ads">Google Ads campaigns in Kerala</Link>, what started as a small team of passionate experts has grown into a full-service digital powerhouse, driven by the success of our partners.
                            </p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Target size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Result Oriented</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We focus on KPIs that actually matter to your bottom line.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Users size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Client Partnership</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We work with you, not just for you. Your success is our success.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Zap size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Agile Execution</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We move fast, iterate quickly, and stay ahead of the curve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Founder />
                
                <FAQ 
                    title="Frequently Asked Questions"
                    items={[
                        {
                            question: "Who are we?",
                            answer: "We are a best digital marketing agency in Kerala specializing in SEO, social media marketing, Google Ads, and website development. Our mission is to help businesses grow online with measurable results."
                        },
                        {
                            question: "Where are we located?",
                            answer: "Our headquarters are in Kochi, Kerala, and we serve clients across the state and beyond with tailored digital marketing solutions."
                        },
                        {
                            question: "What makes our agency different from others?",
                            answer: "We focus on ROI-driven strategies, transparent reporting, and personalized solutions. As a trusted SEO agency in Kerala, we combine creativity with data to deliver the best results for our clients."
                        },
                        {
                            question: "Do we offer website development services in Kerala?",
                            answer: "Yes! We provide professional website development in Kerala, including responsive web design, e-commerce websites, and custom web solutions that enhance your brand and drive conversions."
                        },
                        {
                            question: "What services do we specialize in?",
                            answer: "Our expertise includes SEO services in Kerala, social media marketing in Kerala, Google Ads campaigns in Kerala, website development and web design, and content marketing and online branding."
                        },
                        {
                            question: "Who can benefit from our services?",
                            answer: "We work with small, medium, and large businesses in Kerala across various industries. Whether you need SEO, social media marketing, Google Ads, or website development, we have solutions tailored to your goals."
                        },
                        {
                            question: "How can I get in touch with your team?",
                            answer: "You can contact us via our website form, email, or phone. Our experts will schedule a consultation to understand your needs and create a customized digital marketing plan."
                        }
                    ]}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </div >
    );
};

export default AboutPage;
