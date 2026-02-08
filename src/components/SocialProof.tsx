import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
    const brands = [
        { name: "Vihara", file: "vihara.png" },
        { name: "Cap", file: "cap.png" },
        { name: "Simble", file: "simble.png" },
        { name: "99 Studioz", file: "99studioz.png" },
        { name: "Partner", file: "new-logo.png" }
    ];

    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof-label">Trusted by leading brands worldwide</p>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <div key={`original-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {brands.map((brand, index) => (
                            <div key={`dup-1-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Extra duplicate set for wide screens */}
                        {brands.map((brand, index) => (
                            <div key={`dup-2-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Extra duplicate set for wide screens */}
                        {brands.map((brand, index) => (
                            <div key={`dup-3-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
