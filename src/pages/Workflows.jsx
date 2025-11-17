
import React from 'react';
import { workflowData } from '../workflowData';
import './Workflows.css';

const Workflows = () => {
  return (
    <div className="workflows-container">
      <div className="workflows-header">
        <h1>Fluxos de Automação</h1>
        <p>Explore exemplos práticos de como nossas automações podem otimizar processos, economizar tempo e impulsionar a eficiência do seu negócio.</p>
      </div>
      <div className="workflows-grid">
        {workflowData.map(fluxo => (
          <div key={fluxo.id} className="workflow-card">
            <img src={fluxo.imagemUrl} alt={fluxo.nome} className="workflow-image" />
            <div className="workflow-content">
              <h2 className="workflow-title">{fluxo.nome}</h2>
              <p className="workflow-description">{fluxo.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
