import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Services from '../components/Services'; // Re-use the grid list

const ServicesPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px' }}>
                <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>Our Services</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', margin: '0 auto' }}>
                        Comprehensive digital solutions tailored to scale your business.
                    </p>
                </div>
                {/* Re-using the component but maybe without the big title? Or keep it. */}
                <Services />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default ServicesPage;
