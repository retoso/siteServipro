import React from 'react';
import { Link } from 'react-router-dom';
import './SecondaryCTA.css';
import { FaWrench, FaComments } from 'react-icons/fa';

const SecondaryCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-header">
        <h2>Está pronto para transformar sua operação?</h2>
        <p>Escolha o caminho que faz mais sentido para você agora.</p>
      </div>
      <div className="cta-container">
        <div className="cta-card">
          <FaWrench className="cta-icon" />
          <h3>Explore Nossas Soluções</h3>
          <p>Veja exemplos práticos de automações que implementamos e descubra o que podemos fazer pelo seu setor.</p>
          <Link to="/solutions" className="cta-button primary">
            Conheça as Soluções
          </Link>
        </div>
        <div className="cta-card">
          <FaComments className="cta-icon" />
          <h3>Fale com um Especialista</h3>
          <p>Tem um desafio específico em mente? Agende uma conversa gratuita e sem compromisso para um diagnóstico inicial.</p>
          <Link to="/contact" className="cta-button secondary">
            Agende uma Conversa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;
