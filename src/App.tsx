import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Team from './components/Team';

import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Guarantee from './components/Guarantee';
import Founder from './components/Founder';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollReveal from './components/UI/ScrollReveal';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ScrollReveal animation="fade-in"><SocialProof /></ScrollReveal>
        <ScrollReveal animation="fade-up"><Services /></ScrollReveal>
        <ScrollReveal animation="slide-left"><HowItWorks /></ScrollReveal>
        <ScrollReveal animation="fade-up"><WhyChooseUs /></ScrollReveal>
        <ScrollReveal animation="zoom-in" delay={200}><Stats /></ScrollReveal>
        <ScrollReveal animation="fade-up"><Portfolio /></ScrollReveal>
        <ScrollReveal animation="fade-up"><Team /></ScrollReveal>
        <ScrollReveal animation="fade-up"><Guarantee /></ScrollReveal>
        <ScrollReveal animation="fade-in" delay={200}><Founder /></ScrollReveal>
        <ScrollReveal animation="slide-right"><Testimonials /></ScrollReveal>
        <ScrollReveal animation="fade-up"><FAQ /></ScrollReveal>
        <ScrollReveal animation="zoom-in"><FinalCTA /></ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
