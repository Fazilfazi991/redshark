import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import USP from '../components/USP';
import SocialProof from '../components/SocialProof';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Tools from '../components/Tools';
import Industries from '../components/Industries';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import SEO from '../components/SEO';

function Home() {
    return (
        <div className="home-page">
            <SEO
                title="Best Digital Marketing Agency in Kerala | ROI-Driven Digital Marketing Agency in Kochi"
                description="Looking for the best digital marketing agency in Kerala? Our ROI-driven digital marketing agency in Kochi offers SEO, social media marketing, PPC, and web development to grow your business."
                ogTitle="ROI-Driven Digital Marketing Agency in Kochi | Grow Your Business Online"
                ogDescription="We help businesses grow with ROI-focused SEO, social media marketing, PPC, and web development services in Kerala."
                keywords="SEO Agency Kerala, Digital Marketing Kerala, Performance Marketing, Google Ads Agency, Social Media Marketing"
                canonical="https://www.redsharc.com/"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Redsharc",
                    "url": "https://redsharc.com",
                    "logo": "https://redsharc.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-7510205123",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/redsharc",
                        "https://www.instagram.com/redshark.studio",
                        "https://www.linkedin.com/company/redsharc"
                    ]
                }}
            >
                <meta name="google-site-verification" content="gIbHiYyU2G1gNWRxg5h10uKcQDYEDDpX3XjH2NCFKcE" />
                <meta name="msvalidate.01" content="B77ADC993FDE67730715A98A925AA133" />
            </SEO>
            <Header />
            <main>
                <Hero />
                <ScrollReveal animation="fade-in"><USP /></ScrollReveal>
                <ScrollReveal animation="fade-in"><SocialProof /></ScrollReveal>
                <ScrollReveal animation="fade-up"><About /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Services /></ScrollReveal>
                <ScrollReveal animation="fade-up"><WhyChooseUs /></ScrollReveal>
                <ScrollReveal animation="slide-left"><HowItWorks /></ScrollReveal>

                <ScrollReveal animation="fade-up"><Tools /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Industries /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Blog /></ScrollReveal>
                <ScrollReveal animation="slide-right"><Testimonials /></ScrollReveal>
                
                <section className="closing-seo-section" style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                            If you're looking for a trusted SEO agency in Kerala, our team is here to help. From result-driven SEO strategies to professional website development in Kerala, we provide comprehensive digital marketing solutions that boost your online presence, generate qualified leads, and grow your business. <Link to="/contact">Contact us today</Link> to discover how we can take your brand to the next level.
                        </p>
                    </div>
                </section>

                <ScrollReveal animation="fade-up">
                    <FAQ 
                        title="Have questions about our digital marketing services in Kerala? Check out our FAQs."
                        items={[
                            {
                                question: "What services does a digital marketing agency in Kerala provide?",
                                answer: "A digital marketing agency in Kerala typically offers SEO, social media marketing, Google Ads/PPC, content marketing, email marketing, web development, and online brand management to help businesses grow online."
                            },
                            {
                                question: "How can a digital marketing agency in Kochi help my business?",
                                answer: "Agencies in Kochi can increase your website traffic, improve search engine rankings, generate leads, and manage social media campaigns, helping your business reach more potential customers in Kerala and beyond."
                            },
                            {
                                question: "Why should I hire a digital marketing agency in Kerala instead of doing it myself?",
                                answer: "A professional agency brings expertise, experience, and tools that save time and deliver measurable results, such as higher ROI, better brand visibility, and consistent online growth."
                            },
                            {
                                question: "How much does a digital marketing agency in Kerala charge?",
                                answer: "Costs vary depending on services, campaign scale, and business needs. Agencies typically offer monthly retainers, project-based pricing, or performance-based plans. You can get a customized quote after consultation."
                            },
                            {
                                question: "How long does it take to see results from digital marketing?",
                                answer: "Results depend on the service: SEO usually takes 3–6 months, while Google Ads or social media campaigns can deliver leads immediately. A consistent strategy maximizes long-term growth."
                            },
                            {
                                question: "Can a digital marketing agency help small businesses in Kerala?",
                                answer: "Yes! Many agencies specialize in helping small and medium businesses in Kerala with affordable digital marketing solutions to grow their online presence and reach local customers."
                            },
                            {
                                question: "How do I choose the best digital marketing agency in Kerala?",
                                answer: "Look for agencies with experience in SEO, social media marketing, and Google Ads agency services in Kerala, proven client results, transparent reporting, and customized strategies for your business."
                            },
                            {
                                question: "How can social media marketing in Kerala help my business?",
                                answer: "Social media marketing in Kerala helps businesses increase brand awareness, engage with customers, generate leads, and boost conversions on platforms like Facebook, Instagram, LinkedIn, and Twitter."
                            }
                        ]}
                    />
                </ScrollReveal>
                <ScrollReveal animation="zoom-in"><FinalCTA /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Contact /></ScrollReveal>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home
