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
                title="Redsharc | Performance Marketing & SEO Agency in Kerala"
                description="Redsharc is a top-rated performance marketing agency in Kerala specializing in SEO, Google Ads, and Social Media Marketing to drive measurable growth."
                keywords="SEO Agency Kerala, Digital Marketing Kerala, Performance Marketing, Google Ads Agency, Social Media Marketing"
                canonical="https://redsharc.com/"
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
            />
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
                <ScrollReveal animation="fade-up"><FAQ /></ScrollReveal>
                <ScrollReveal animation="zoom-in"><FinalCTA /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Contact /></ScrollReveal>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home
