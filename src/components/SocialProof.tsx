import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
    const brands = [
        "TechGlobal", "InnovateX", "FutureFinance", "EcoSolutions", "HealthPlus", "EduLearn"
    ];

    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof-label">Trusted by leading brands worldwide</p>
                <div className="logo-strip">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-logo">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
