import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './utils/ScrollToHash';
import ChatBot from './components/ChatBot';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SEOPage = lazy(() => import('./pages/SEOPage'));
const SEMPage = lazy(() => import('./pages/SEMPage'));
const SMMPage = lazy(() => import('./pages/SMMPage'));
const WebDevPage = lazy(() => import('./pages/WebDevPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Suspense fallback={<div className="loading-fallback" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/search-engine-optimization" element={<SEOPage />} />
          <Route path="/google-ads" element={<SEMPage />} />
          <Route path="/social-media-marketing" element={<SMMPage />} />
          <Route path="/web-development" element={<WebDevPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/growth" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <ChatBot />
    </Router>
  )
}

export default App
