import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SEOPage from './pages/SEOPage';
import SEMPage from './pages/SEMPage';
import SMMPage from './pages/SMMPage';
import WebDevPage from './pages/WebDevPage';
import './components/UI/ScrollReveal'; // Import global styles if needed or ensuring context

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/sem" element={<SEMPage />} />
        <Route path="/services/smm" element={<SMMPage />} />
        <Route path="/services/web-development" element={<WebDevPage />} />
      </Routes>
    </Router>
  )
}

export default App
