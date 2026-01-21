import React from 'react';
import './USP.css';

const USP = () => {
    return (
        <section className="usp-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">What makes us different from the rest.</h2>
                <div className="usp-grid">
                    <div className="usp-card">
                        <h3>Direct Access to Experts</h3>
                        <p>No layers of management. You speak directly to the specialists working on your account.</p>
                    </div>
                    <div className="usp-card">
                        <h3>Focus on ROI</h3>
                        <p>We obsess over your bottom line. Every strategy is crafted to maximize your return on investment.</p>
                    </div>
                    <div className="usp-card">
                        <h3>Agile & Adaptive</h3>
                        <p>The digital landscape changes fast. We pivot quickly to keep you ahead of the curve.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USP;
