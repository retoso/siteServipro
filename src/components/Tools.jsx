import React from 'react';
import './Tools.css';
import n8nLogo from '../assets/n8n-logo.svg';
import whatsappLogo from '../assets/whatsapp-logo.svg';
import openAiLogo from '../assets/openai-logo.svg';
import anttLogo from '../assets/antt-logo.svg';

const Tools = () => {
  const tools = [
    {
      name: 'n8n',
      description: 'O coração da nossa automação, permitindo a conexão de centenas de sistemas de forma visual e poderosa.',
      logo: n8nLogo,
    },
    {
      name: 'WhatsApp',
      description: 'Automatizamos o atendimento e a comunicação, levando sua empresa para o canal de mensagens mais usado no mundo.',
      logo: whatsappLogo,
    },
    {
      name: 'OpenAI',
      description: 'Integramos modelos de linguagem para criar fluxos de trabalho inteligentes que analisam, interpretam e geram conteúdo.',
      logo: openAiLogo,
    },
    {
        name: 'ANTT',
        description: 'Integramos modelos de linguagem para criar fluxos de trabalho inteligentes que analisam, interpretam e geram conteúdo.',
        logo: anttLogo,
      },
  ];

  return (
    <section className="tools-section">
      <div className="tools-header">
        <h2>Nosso Arsenal Tecnológico para a Sua Automação</h2>
        <p>Utilizamos as ferramentas mais poderosas e flexíveis do mercado para construir soluções robustas e sob medida para o seu negócio.</p>
      </div>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.logo} alt={`${tool.name} logo`} className="tool-logo" />
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-description">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
