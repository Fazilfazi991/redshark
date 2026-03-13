import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <SEO 
                title="Contact Us | Redsharc - Performance Marketing Agency" 
                description="Get in touch with Redsharc. Let's discuss your growth strategy, SEO, or social media marketing needs."
                canonical="https://www.redsharc.com/contact"
            />
            <Header />

            <section className="contact-hero">
                <div className="container">
                    <h1>Let's Start Your <span style={{ color: '#ff4d4d' }}>Growth Journey</span></h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto 0', color: '#e2e8f0' }}>
                        Ready to scale? Have questions? Our team is here to help you navigate the digital landscape and deliver real results.
                    </p>
                </div>
            </section>

            <section className="container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="contact-info-card">
                            <h2 style={{ marginBottom: '30px' }}>Contact Information</h2>
                            
                            <div className="contact-method">
                                <div className="method-icon"><Mail size={24} /></div>
                                <div className="method-details">
                                    <h3>Email Us</h3>
                                    <p>info@redsharc.com</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><Phone size={24} /></div>
                                <div className="method-details">
                                    <h3>Call Us</h3>
                                    <p>+91 75102 05123</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><MapPin size={24} /></div>
                                <div className="method-details">
                                    <h3>Our Location</h3>
                                    <p>Kerala, India</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><Clock size={24} /></div>
                                <div className="method-details">
                                    <h3>Working Hours</h3>
                                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '40px', padding: '20px', background: '#fff', borderRadius: '16px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ background: '#fef2f2', color: '#ce1111', padding: '10px', borderRadius: '50%' }}>
                                    <MessageSquare size={20} />
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                    Expect a response within <strong>24 hours</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h2 style={{ marginBottom: '10px' }}>Send us a Message</h2>
                        <p style={{ color: '#64748b', marginBottom: '30px' }}>Fill out the form below and we'll get back to you shortly.</p>
                        
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Interested Service</label>
                                <select id="service">
                                    <option value="growth">Growth Strategy</option>
                                    <option value="seo">SEO</option>
                                    <option value="smm">Social Media Marketing</option>
                                    <option value="ads">Google/Meta Ads</option>
                                    <option value="web">Web Development</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows={5} placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn flex-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
