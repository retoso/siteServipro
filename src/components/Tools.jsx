import React from 'react';
import './Tools.css';
import n8nLogo from '../assets/n8n-logo.svg';
import whatsappLogo from '../assets/whatsapp-logo.svg';
import aiLogo from '../assets/ai-logo.svg'; // Alterado de openAiLogo para aiLogo
import googleLogo from '../assets/google-logo.svg';
import gmailLogo from '../assets/gmail-logo.svg';
import slackLogo from '../assets/slack-logo.svg';
import telegramLogo from '../assets/telegram-logo.svg';

const Tools = () => {
  const tools = [
    {
      name: 'n8n',
      description: 'Sua empresa conectada de ponta a ponta. Criamos um fluxo de trabalho unificado que quebra os silos de informação e automatiza processos entre todos os seus sistemas.',
      logo: n8nLogo,
    },
    {
      name: 'WhatsApp',
      description: 'Transforme seu atendimento com conversas automáticas e personalizadas. Ofereça suporte, vendas e notificações 24/7, diretamente no app de mensagens preferido do seu cliente.',
      logo: whatsappLogo,
    },
    {
      name: 'IA Generativa',
      description: 'Inteligência artificial que resolve tarefas complexas. Automatizamos análises, triagens e a geração de conteúdo com a capacidade de um especialista, usando os melhores modelos para cada desafio.',
      logo: aiLogo, // Usando o novo ícone
    },
    {
      name: 'Google Suite',
      description: 'Integre e automatize todo o ecossistema Google. Conectamos Planilhas, Documentos, Agenda e mais para criar um fluxo de trabalho contínuo e inteligente.',
      logo: googleLogo,
    },
    {
      name: 'Gmail',
      description: 'Automatize a gestão dos seus e-mails. Classifique, responda e encaminhe mensagens de forma inteligente, garantindo que nada importante seja perdido.',
      logo: gmailLogo,
    },
    {
      name: 'Slack',
      description: 'Centralize a comunicação da sua equipe e automatize notificações. Crie alertas, envie relatórios e conecte seus apps diretamente nos canais de conversa.',
      logo: slackLogo,
    },
    {
      name: 'Telegram',
      description: 'Crie bots e notificações automáticas para interagir com clientes ou equipes. Uma ferramenta versátil para comunicação e automação em tempo real.',
      logo: telegramLogo,
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
