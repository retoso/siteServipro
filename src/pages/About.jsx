import React from 'react';
import '../styles/About.css'; // Usaremos um novo CSS dedicado

// Ícones para ilustrar as seções
const MissionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const VisionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const ValuesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);


const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-header-content">
          <h1>A Essência da ServiPro</h1>
          <p className="subtitle">Nossa jornada, nossa paixão e nosso compromisso com a excelência em automação.</p>
        </div>
      </header>

      <main className="about-main-content">
        <section className="about-section history-section">
          <h2>Nossa História</h2>
          <div className="history-content">
            <p>A ServiPro nasceu da visão de um futuro onde a tecnologia trabalha para as pessoas, e não o contrário. Fundada por especialistas em automação e inteligência artificial, nossa jornada começou com um objetivo claro: <strong>eliminar a complexidade e o trabalho repetitivo que freiam o crescimento das empresas.</strong></p>
            <p>Percebemos que, ao integrar sistemas e automatizar processos com ferramentas de ponta como n8n e IA, poderíamos liberar o verdadeiro potencial humano para focar naquilo que realmente importa: a inovação, a estratégia e a criatividade.</p>
          </div>
        </section>

        <div className="values-container">
          <div className="value-card">
            <div className="value-card-icon"><MissionIcon /></div>
            <h3>Missão</h3>
            <p>Empoderar empresas de todos os tamanhos com soluções de automação inteligentes e personalizadas, transformando desafios operacionais em oportunidades de crescimento e eficiência.</p>
          </div>
          <div className="value-card">
            <div className="value-card-icon"><VisionIcon /></div>
            <h3>Visão</h3>
            <p>Ser a principal referência em consultoria de automação e IA, reconhecida por nossa capacidade de inovar, simplificar e gerar valor real e mensurável para nossos clientes.</p>
          </div>
          <div className="value-card">
            <div className="value-card-icon"><ValuesIcon /></div>
            <h3>Valores</h3>
            <ul>
              <li><strong>Parceria:</strong> O seu sucesso é o nosso sucesso.</li>
              <li><strong>Inovação:</strong> Buscamos constantemente a melhor solução.</li>
              <li><strong>Transparência:</strong> Comunicação clara e honesta sempre.</li>
              <li><strong>Excelência:</strong> Comprometidos com a mais alta qualidade.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
