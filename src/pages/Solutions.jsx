import React, { useEffect } from 'react';
import '../styles/Solutions.css';

// Importando os ícones que já temos
import n8nLogo from '../assets/n8n-logo.svg';
import whatsappLogo from '../assets/whatsapp-logo.svg';
import aiLogo from '../assets/ai-logo.svg';
import googleLogo from '../assets/google-logo.svg';

const solutions = [
  {
    title: 'Automação de Processos com n8n',
    description: 'Conectamos seus sistemas e APIs para criar fluxos de trabalho totalmente automatizados. Eliminamos tarefas manuais repetitivas, reduzimos erros e liberamos sua equipe para focar no que realmente importa: a estratégia do negócio.',
    icon: n8nLogo,
  },
  {
    title: 'Comunicação Inteligente',
    description: 'Desenvolvemos chatbots e sistemas de notificação para WhatsApp e Telegram. Automatize o atendimento ao cliente, envie alertas importantes e crie canais de comunicação direta, tudo de forma personalizada e escalável.',
    icon: whatsappLogo,
  },
  {
    title: 'Soluções com IA Generativa',
    description: 'Aplicamos os mais avançados modelos de inteligência artificial para resolver problemas complexos. Desde a análise de sentimentos e a classificação de documentos até a geração de conteúdo e a automação de relatórios, a IA trabalha para você.',
    icon: aiLogo,
  },
  {
    title: 'Integração com Ecossistema Google',
    description: 'Otimize seu uso do Google Workspace. Criamos automações que integram Gmail, Planilhas, Documentos e Agenda para criar um ambiente de trabalho unificado, onde a informação flui sem atritos e a produtividade atinge novos patamares.',
    icon: googleLogo,
  },
];

const Solutions = () => {
  // Efeito para adicionar e remover a classe de override do tema
  useEffect(() => {
    // Adiciona a classe ao body quando o componente é montado
    document.body.classList.add('light-theme-override');

    // Função de limpeza que remove a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove('light-theme-override');
    };
  }, []); // Array vazio garante que o efeito rode apenas ao entrar/sair da página

  return (
    <div className="solutions-page">
      <header className="solutions-header">
        <h1>Soluções de Automação Sob Medida</h1>
        <p>
          Transformamos desafios complexos em processos eficientes e inteligentes. Explore nossas principais áreas de atuação e descubra como podemos impulsionar o seu negócio com tecnologia de ponta.
        </p>
      </header>
      <main>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Solutions;
