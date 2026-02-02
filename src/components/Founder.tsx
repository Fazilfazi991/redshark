import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import founderImage from '../assets/founder.jpg';
import './Founder.css';

const Founder = () => {
    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-wrapper">
                    <div className="founder-content">
                        <h2 className="section-title text-left">Hi, I'm Sreyas, founder of RedShark.</h2>

                        <p className="founder-story">
                            Five years ago, I wasted <strong>$40,000</strong> and six months on agencies that delivered generic templates and freelancers who disappeared mid-project.
                        </p>
                        <p className="founder-story">
                            I thought: There has to be a better way. <br />
                            So I built one.
                        </p>

                        <p className="founder-text">
                            I handpicked <strong>150+ designers, developers, and marketers</strong> I've worked with over 12 years. People who actually deliver. People I'd trust with my own business.
                        </p>

                        <div className="founder-diff">
                            <h4>Here's how we're different:</h4>
                            <ul>
                                <li>Agency-level talent without the overhead</li>
                                <li>Every project reviewed by our senior team</li>
                                <li>You get my personal phone number</li>
                                <li>We only take projects we can nail</li>
                            </ul>
                        </div>

                        <p className="founder-closing">
                            Your success is how we measure ours.<br />
                            Let's talk.
                        </p>

                        <div className="founder-sig">
                            <div className="sig-name">Sreyas</div>
                            <div className="sig-role">Founder, RedShark</div>
                        </div>

                        <div className="founder-links">
                            <a href="#" className="founder-link"><Linkedin size={18} /> LinkedIn</a>
                            <span className="separator">•</span>
                            <a href="mailto:hello@redshark.com" className="founder-link"><Mail size={18} /> Email</a>
                            <span className="separator">•</span>
                            <a href="#contact" className="founder-link highlight">Book a call <ArrowRight size={16} /></a>
                        </div>
                    </div>

                    <div className="founder-image-col">
                        <div className="founder-image-box">
                            <img src={founderImage} alt="Sreyas, Founder of RedShark" className="founder-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
