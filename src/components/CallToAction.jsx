import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-header">
        <h2>Sua transformação começa com uma escolha.</h2>
        <p>Qual caminho você quer seguir agora para impulsionar seus resultados?</p>
      </div>
      <div className="cta-cards">
        <div className="cta-card">
          <h3>Explore Nossas Soluções</h3>
          <p>Navegue por exemplos práticos de automações e descubra o potencial que podemos desbloquear no seu setor.</p>
          <Link to="/solutions" className="btn btn-secondary">Conheça as Soluções</Link>
        </div>
        <div className="cta-card cta-card-primary">
          <h3>Fale com um Especialista</h3>
          <p>Tem um desafio específico? Agende uma conversa estratégica gratuita e receba um diagnóstico sob medida para sua empresa.</p>
          <Link to="/contact" className="btn btn-primary">Agende uma Conversa</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
