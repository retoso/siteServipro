
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const ServiProLogo = () => (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontSize="24" fontWeight="bold">ServiPro</text>
    </svg>
);

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="navbar-header">
            <nav className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <ServiProLogo />
                </Link>

                <button
                    className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </button>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>Home</NavLink></li>
                    <li><NavLink to="/solutions" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>Soluções</NavLink></li>
                    <li><NavLink to="/fluxos" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>Fluxos</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>Blog</NavLink></li>
                    <li><NavLink to="/sobre" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>Sobre</NavLink></li>
                    <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>FAQ</NavLink></li>
                    <li className="contact-button-li">
                        <NavLink
                            to="/contato"
                            className="btn btn-accent contact-button"
                            onClick={closeMobileMenu}
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
