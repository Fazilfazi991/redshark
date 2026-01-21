import React from 'react';
import { ShoppingBag, Server, Activity, Home, BadgeDollarSign, GraduationCap } from 'lucide-react';
import './Industries.css';

const Industries = () => {
    return (
        <section className="industries-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">Industries We Serve</h2>
                <div className="text-center mb-5">
                    <p className="section-subtitle">Specialized expertise across multiple verticals.</p>
                </div>

                <div className="industries-grid">
                    <div className="industry-card">
                        <ShoppingBag className="industry-icon" />
                        <h3>E-Commerce</h3>
                        <p>Scaling DTC brands with high-converting funnels.</p>
                    </div>
                    <div className="industry-card">
                        <Server className="industry-icon" />
                        <h3>SaaS</h3>
                        <p>Driving qualified leads and reducing churn.</p>
                    </div>
                    <div className="industry-card">
                        <Activity className="industry-icon" />
                        <h3>Healthcare</h3>
                        <p>Patient acquisition with HIPAA-compliant strategies.</p>
                    </div>
                    <div className="industry-card">
                        <Home className="industry-icon" />
                        <h3>Real Estate</h3>
                        <p>Generating high-quality leads for agents and developers.</p>
                    </div>
                    <div className="industry-card">
                        <BadgeDollarSign className="industry-icon" />
                        <h3>FinTech</h3>
                        <p>Building trust and authority in financial services.</p>
                    </div>
                    <div className="industry-card">
                        <GraduationCap className="industry-icon" />
                        <h3>Education</h3>
                        <p>Attracting students for courses and institutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
