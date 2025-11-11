import React from 'react';
import { Link } from 'react-router-dom';
import './FAQTeaser.css'; // Corrected CSS import

const FAQTeaser = () => {
  return (
    <section className="faq-teaser-section">
      <div className="faq-teaser-content">
        <h2>Ainda tem dúvidas?</h2>
        <p>Preparamos uma seção com as perguntas mais frequentes para te ajudar a entender tudo sobre automação, IA e como podemos te ajudar.</p>
        <Link to="/faq" className="btn btn-secondary">
          Veja as Perguntas Frequentes
        </Link>
      </div>
    </section>
  );
};

export default FAQTeaser;
