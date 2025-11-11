import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Seu Nome/Empresa. Todos os direitos reservados.</p>
      <div className="footer-links">
        <Link to="/termos-de-uso">Termos de Uso</Link>
        <Link to="/politica-de-privacidade">Política de Privacidade</Link>
      </div>
    </footer>
  );
};

export default Footer;
