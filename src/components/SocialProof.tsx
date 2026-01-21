import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
    const brands = [
        { name: "BridgeWater", file: "BRIDGEWATER-LAST-400x150.png" },
        { name: "Logo", file: "logo.png" },
        { name: "NeoNights", file: "neonights-Logo__a-scaled-300x192.png" },
        { name: "ZapMart", file: "zapmart_logo_600x@2x.webp" }
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
