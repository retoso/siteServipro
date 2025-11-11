import React from 'react';
import { Link } from 'react-router-dom';
// Importing icons from react-icons
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About ServiPro and Social Links */}
        <div className="footer-column">
          <h4>ServiPro</h4>
          <p>Automatizando o sucesso do seu negócio com soluções inteligentes e integradas. Simplifique processos, economize tempo e impulsione o crescimento.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-column">
          <h4>Navegação</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Soluções</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-column">
          <h4>Suporte</h4>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ServiPro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
