import React, { useEffect } from 'react';
import {
    ArrowRight,
    BarChart,
    Mail,
    Globe,
    Award,
    TrendingUp,
    DollarSign,
    Star,
    Zap,
    Target,
    Users,
    Smartphone,
    MonitorPlay,
    Linkedin,
    MapPin,
    ShoppingCart,
    MousePointerClick,
    Search
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import ScrollReveal from '../components/UI/ScrollReveal';
import './LandingPage.css';
import element1 from '../assets/element-1.png';
import element2 from '../assets/element-2.png';
import founder from '../assets/founder.jpg';
import SEO from '../components/SEO';

const LandingPage = () => {

    // Smooth scroll for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
                e.preventDefault();
                const element = document.querySelector(link.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);



    return (
        <div className="landing-page">
            <SEO
                title="Growth Strategy & Performance Marketing | Redsharc"
                description="Stop guessing and start scaling with Redsharc's data-driven growth strategies. We turn ad spend into profit."
                keywords="Growth Marketing, Performance Marketing, Revenue Growth, Digital Strategy"
                canonical="https://www.redsharc.com/growth"
            />
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="landing-hero">
                {/* Floating Elements (Background) */}
                <div className="floating-element float-1">
                    <div className="float-icon-box">
                        <TrendingUp size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-2">
                    <div className="float-icon-box">
                        <DollarSign size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-3">
                    <div className="float-icon-box">
                        <Zap size={24} color="#ef4444" />
                    </div>
                </div>
                <div className="floating-element float-4">
                    <div className="float-icon-box">
                        <Target size={24} color="#64748b" />
                    </div>
                </div>
                <div className="floating-element float-5">
                    <div className="float-icon-box">
                        <BarChart size={24} color="#000000" />
                    </div>
                </div>
                <div className="floating-element float-6">
                    <div className="float-icon-box">
                        <Mail size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-7">
                    <div className="float-icon-box">
                        <Search size={24} color="#64748b" />
                    </div>
                </div>
                <div className="floating-element float-8">
                    <div className="float-icon-box">
                        <Users size={24} color="#000000" />
                    </div>
                </div>

                <div className="container">
                    <div className="landing-hero-content">
                        <div className="hero-badge">
                            <span className="pulse-dot"></span>
                            Performance Marketing Agency
                        </div>
                        <h1>
                            One Online Store. <span className="highlight-red-box">$25,000</span> In 7 Days. Built From Nothing.
                        </h1>
                        <p>
                            No ads. No data. No history. Not a single campaign running. LillyBerry came to us with an online store and a 30-day revenue target. We built their entire performance system from scratch. By day 7 — their full first month target was done. That's not luck. That's a system.
                        </p>

                        <div className="landing-cta-group">
                            <a href="#contact" className="btn-landing-primary">Show Me How You Did It</a>
                            <a href="#contact" className="btn-landing-secondary">Get Your Free Growth Strategy</a>
                        </div>

                        <div className="hero-rating">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                                ))}
                            </div>
                            <span>Trusted by 50+ Growth-Focused Brands</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL PROOF --- */}
            <div className="section-divider-proof">
                <SocialProof />
            </div>

            {/* --- THE PROBLEM (AGITATION) --- */}
            <section className="problem-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="section-title-dark">Most Marketing Agencies <br /><span className="text-red">Burn Your Money.</span></h2>
                        <p className="section-subtitle-dark">Does this sound familiar?</p>
                    </ScrollReveal>

                    <div className="problem-grid">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="problem-card">
                                <div className="problem-icon"><Target size={32} /></div>
                                <h3>We Test Everything. We Scale Only What Wins.</h3>
                                <p>We run every creative variation until one proves itself. Highest CTR found — then we engineer that exact creative to sell. No guessing. No gut feeling. Just the data telling us what your customer actually stops for.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="problem-card">
                                <div className="problem-icon"><Users size={32} /></div>
                                <h3>Your Failed Campaigns Are Our Starting Point.</h3>
                                <p>Most clients come to us after campaigns that went nowhere. We don't start over blindly — we dig into what failed, find out exactly why, and build the system that should have been there from day one.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="problem-card">
                                <div className="problem-icon"><Zap size={32} /></div>
                                <h3>They Clicked The Ad. They Opened The Page. They Left.</h3>
                                <p>You're paying for traffic that lands and leaves. Abandoned carts. Dead checkout pages. Weak landing pages that lose buyers in the final 10 seconds. We fix the leak before we scale the traffic — because sending more people to a broken funnel just burns more money faster.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- THE SOLUTION (GROWTH ENGINE) --- */}
            <section id="growth-engine" className="growth-service-section">
                <div className="container">
                    <div className="growth-service-grid">
                        <ScrollReveal animation="slide-left" delay={100}>
                            <div className="growth-service-left">
                                <h2>
                                    From Zero To Revenue Machine In 4 Steps
                                </h2>

                                <div className="visual-orbit-container">
                                    <div className="orbit-system">
                                        <div className="orbit-center-circle">
                                            <img src="/logo-02.png" alt="Redsharc" className="center-logo" />
                                        </div>

                                        {/* Inner Ring */}
                                        <div className="orbit-ring ring-1">
                                            <div className="orbit-item item-mail"><Mail size={18} /></div>
                                            <div className="orbit-item item-edit"><Target size={18} /></div>
                                            <div className="orbit-item item-gem"><DollarSign size={18} /></div>
                                        </div>

                                        {/* Outer Ring */}
                                        <div className="orbit-ring ring-2">
                                            <div className="orbit-item item-video"><MonitorPlay size={20} /></div>
                                            <div className="orbit-item item-search"><Search size={20} /></div>
                                            <div className="orbit-item item-map"><MapPin size={20} /></div>
                                            <div className="orbit-item item-mega"><ShoppingCart size={20} /></div>
                                            <div className="orbit-item item-chart"><BarChart size={20} /></div>
                                            <div className="orbit-item item-image"><Users size={20} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="slide-right" delay={200}>
                            <div className="growth-service-right">
                                <p className="growth-intro">
                                    We don't guess. We engineer growth. Our ecosystem covers every touchpoint of your customer's journey.
                                </p>

                                <ul className="growth-checklist">
                                    <li>
                                        <span className="check-icon">01</span>
                                        <div>
                                            <strong>Manufactured Authority</strong>
                                            <p>We didn't just launch ads; we elevated the brand's perceived value. By aggressively targeting high-engagement platforms with hyper-premium video and image creatives, we instantly positioned Lillyberry as a top-tier brand in the eyes of the consumer.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="check-icon">02</span>
                                        <div>
                                            <strong>Full-Funnel Ad Architecture</strong>
                                            <p>Most agencies show the same ad to everyone. We built a dynamic ecosystem. We deployed distinct, hyper-targeted creatives for cold traffic (Top), nurturing (Middle), and aggressive direct-response (Bottom). We rapidly tested angles, killed the losers, and poured budget directly into the winning creatives to force scale.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="check-icon">03</span>
                                        <div>
                                            <strong>High-Friction Conversion Optimization</strong>
                                            <p>Driving traffic is easy; getting prepaid orders is hard. Because Lillyberry did not offer Cash-on-Delivery, the landing page had to do the heavy lifting. We engineered a frictionless, highly-trusted landing page environment that eliminated buyer hesitation and convinced cold traffic to confidently pull out their credit cards.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="check-icon">04</span>
                                        <div>
                                            <strong>The Post-Purchase Retention Loop</strong>
                                            <p>Our job doesn't end at the checkout. We set up professional, automated outreach via messaging platforms to keep buyers updated and build a relationship. Exactly one week later, we triggered a strategic review-request sequence. This flooded the brand with powerful social proof, driving down ad costs for the next wave of buyers.</p>
                                        </div>
                                    </li>
                                </ul>

                                <a href="#contact" className="link-arrow">
                                    See How It Works For You <ArrowRight size={18} />
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- PERFORMANCE MARKETING AREAS (NEW GRID) --- */}
            <section className="marketing-areas-section">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Performance Marketing Capabilities</h2>
                        <p>We cover every channel that matters to your bottom line.</p>
                    </div>

                    <div className="areas-grid-4">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="area-card">
                                <ShoppingCart className="area-icon" />
                                <h3>E-commerce Sales</h3>
                                <p>Scaling Shopify & WooCommerce stores with high-ROAS Meta & Google Shopping campaigns.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={150}>
                            <div className="area-card">
                                <MousePointerClick className="area-icon" />
                                <h3>CRO</h3>
                                <p>Optimizing landing pages and user flows to squeeze every drop of revenue from your traffic.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="area-card">
                                <Search className="area-icon" />
                                <h3>Google Ads</h3>
                                <p>Dominate search intent. We manage Search, Shopping, and PMax campaigns that convert.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={250}>
                            <div className="area-card">
                                <Users className="area-icon" />
                                <h3>B2B & B2C Lead Gen</h3>
                                <p>Filling your CRM with qualified leads using targeted funnels and lead magnets.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS SECTION --- */}
            <section className="landing-testimonials">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <div className="section-header-center">
                            <h2>What Clients Say After Seeing Results</h2>
                        </div>
                    </ScrollReveal>

                    <div className="testimonials-grid-3">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="testimonial-card-v2">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />)}
                                </div>
                                <div className="result-tag">$12K ROAS in Month 1</div>
                                <p>"We'd been through two agencies before RedSharc. Both promised the world and delivered excuses. RedSharc built a system in the first month that finally made our ad spend feel like an investment, not a gamble."</p>
                                <div className="testimonial-footer">
                                    <strong>James H.</strong>
                                    <span>Founder, E-commerce Brand</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="testimonial-card-v2 featured">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />)}
                                </div>
                                <div className="result-tag">$25,000 Revenue — Week 1</div>
                                <p>"Within the first 7 days, we had results that beat everything we'd done in the previous 3 months combined. The team is sharp, fast, and genuinely obsessed with performance. There's nobody else I'd trust with our ad budget."</p>
                                <div className="testimonial-footer">
                                    <strong>LillyBerry</strong>
                                    <span>CEO, Brand Founder</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="testimonial-card-v2">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />)}
                                </div>
                                <div className="result-tag">CPA Reduced to 50%</div>
                                <p>"What sets RedSharc apart is that they think in revenue, not impressions. Every conversation starts with 'what does this need to generate?' That mindset change alone was worth more than what we paid."</p>
                                <div className="testimonial-footer">
                                    <strong>Sarah K.</strong>
                                    <span>CEO, SaaS Company</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>We're Not An Agency. We're Your Revenue Partner.</h2>
                        <p className="cta-intro">There are thousands of agencies. Most of them sell you retainers, traffic, and reports. RedSharc sells you one thing: results. Here's what makes us different.</p>
                        
                        <div className="diff-grid">
                            <div className="diff-item">
                                <h3>We Only Win When You Win</h3>
                                <p>Our model is built around your growth. We don't hide behind vanity metrics — every strategy we run is tied to measurable revenue outcomes.</p>
                            </div>
                            <div className="diff-item">
                                <h3>Speed Is A Strategy</h3>
                                <p>Most agencies take 90 days to show results. We move in 7. LillyBerry's $25K in week one wasn't an accident — it was a system built for speed.</p>
                            </div>
                            <div className="diff-item">
                                <h3>Full-Funnel, Not Just Ads</h3>
                                <p>We fix the leak before we scale the traffic. From landing pages to post-purchase retention, we own the entire funnel.</p>
                            </div>
                        </div>

                        <div className="stat-callout">
                            <div className="stat-main">$0 Wasted On Vanity Metrics</div>
                            <p>Every campaign we run has one job: make you more money than you spent. If we're not delivering measurable ROI, we don't rest until we do. That's not a tagline — it's how we operate every single day.</p>
                        </div>

                        <div className="cta-buttons">
                            <a href="#contact" className="btn-landing-primary">Claim Your Free Strategy Call</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing-faq">
                <div className="container">
                    <FAQ />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
