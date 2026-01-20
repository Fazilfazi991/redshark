import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="REDSHARK" style={{ height: '40px', width: 'auto' }} />
                </Link>

                <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

                    <div className="nav-item-dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}>
                        <Link to="/services" className="dropdown-trigger" onClick={(e) => { if (window.innerWidth > 768) e.preventDefault(); }}>
                            Services <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'rotate' : ''}`} />
                        </Link>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/services/seo">SEO & Organic Growth</Link>
                            <Link to="/services/sem">Paid Advertising (SEM)</Link>
                            <Link to="/services/smm">Social Media (SMM)</Link>
                            <Link to="/services/web-development">Web Development</Link>
                        </div>
                    </div>

                    <Link to="/about">About</Link>
                    <Link to="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Work</Link>
                    <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <button className="btn btn-primary mobile-only" onClick={() => setMobileMenuOpen(false)}>Get Started</button>
                </nav>

                <div className="header-actions">
                    <button className="btn btn-primary desktop-only">Get Started</button>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
