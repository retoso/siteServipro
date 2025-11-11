import React from 'react';
import './ProblemSolution.css';

const ProblemSolution = () => {
  return (
    <section className="problem-solution">
      <div className="problem-solution-header">
        <h2>O Problema e a Solução</h2>
        <p>Veja como a automação pode transformar radicalmente a eficiência do seu negócio, eliminando gargalos e abrindo portas para o crescimento.</p>
      </div>
      <div className="problem-solution-content">
        <div className="column">
          <div className="column-icon">❌</div>
          <h3>Antes: O Caos Manual</h3>
          <p>Processos lentos e repetitivos, atendimento demorado, falta de visão consolidada dos dados e clientes esperando por respostas. Cada tarefa drena um tempo valioso que poderia ser usado para inovar.</p>
        </div>
        <div className="column">
          <div className="column-icon">✅</div>
          <h3>Depois: A Eficiência Automatizada</h3>
          <p>Fluxos de trabalho inteligentes que operam 24/7, atendimento instantâneo via WhatsApp, dados centralizados e uma equipe focada no que realmente importa: a estratégia e o cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
