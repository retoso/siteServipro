import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Sua empresa, só que 10x mais eficiente.</h1>
      <p>Integramos suas ferramentas, automatizamos o trabalho manual e transformamos o caos operacional em um fluxo de trabalho inteligente.</p>
      <Link to="/contato" className="btn btn-primary">Fale com um Especialista</Link>
    </section>
  );
};

export default Hero;
