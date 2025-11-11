import React from 'react';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="solutions-header">
        <h1>Nossas Soluções de Automação Inteligente</h1>
        <p>Transformamos seus processos manuais em fluxos de trabalho eficientes, liberando sua equipe para focar no que realmente importa: o crescimento do seu negócio.</p>
      </div>

      <div className="solution-section">
        <h2><i className="fas fa-cogs"></i> Automação de Processos com n8n</h2>
        <p>Utilizamos o <strong>n8n</strong>, uma poderosa plataforma de automação visual, para conectar seus sistemas e orquestrar tarefas complexas sem a necessidade de código. Seja em nosso servidor seguro (nuvem) ou no seu, garantimos flexibilidade e controle total.</p>
        <div className="solution-details">
          <p><strong>Exemplos de automação:</strong></p>
          <ul>
            <li><strong>Gestão de Vendas:</strong> Organize seu funil, classifique leads e envie follow-ups automaticamente para não perder nenhuma oportunidade.</li>
            <li><strong>Processos Internos:</strong> Automatize o envio de relatórios, a organização de dados em planilhas e a notificação de equipes sobre tarefas importantes.</li>
            <li><strong>Financeiro e RH:</strong> Simplifique a cobrança, o onboarding de novos clientes ou colaboradores e a geração de documentos.</li>
          </ul>
        </div>
      </div>

      <div className="solution-section">
        <h2><i className="fab fa-whatsapp"></i> Atendimento Inteligente e Multicanal</h2>
        <p>Crie uma experiência de atendimento excepcional. Integramos o <strong>WhatsApp Business API</strong> e outros canais para oferecer respostas instantâneas, fazer a triagem de clientes e agendar serviços de forma autônoma.</p>
        <div className="solution-details">
          <p><strong>O que podemos fazer:</strong></p>
          <ul>
            <li><strong>Triagem e Agendamento:</strong> Um fluxo inteligente qualifica o cliente e agenda consultas ou serviços diretamente no seu calendário.</li>
            <li><strong>Atendimento 24/7:</strong> Responda às dúvidas mais comuns a qualquer hora do dia, com a opção de transferir para um atendente humano quando necessário.</li>
            <li><strong>Comunicação Unificada:</strong> Integre chat do site, telefone e WhatsApp em um único fluxo, garantindo que nenhuma conversa se perca.</li>
          </ul>
        </div>
      </div>

      <div className="solution-section">
        <h2><i className="fas fa-plug"></i> Integração de Sistemas e APIs</h2>
        <p>Conectamos todas as suas ferramentas para que elas trabalhem em perfeita harmonia. Eliminamos a necessidade de inserir dados manualmente, garantindo consistência e precisão em tempo real.</p>
        <div className="solution-details">
          <p><strong>Sistemas que integramos:</strong></p>
          <ul>
            <li><strong>CRMs e Ferramentas de Marketing:</strong> Pipedrive, RD Station, ActiveCampaign, etc.</li>
            <li><strong>Suítes de Produtividade:</strong> Google Workspace (Sheets, Calendar, Gmail) e Microsoft 365 (Excel, Outlook, Teams).</li>
            <li><strong>Bancos de Dados e ERPs:</strong> Conectamos sistemas internos, mesmo aqueles sem uma API documentada, através de bancos de dados ou webhooks.</li>
          </ul>
        </div>
      </div>
      
      <div className="solution-section">
        <h2><i className="fas fa-brain"></i> Inteligência Artificial na Sua Automação</h2>
        <p>Vamos além da automação baseada em regras. Integramos <strong>modelos de Inteligência Artificial</strong> para que seus fluxos de trabalho possam interpretar, analisar e tomar decisões inteligentes.</p>
        <div className="solution-details">
          <p><strong>Capacidades da IA:</strong></p>
          <ul>
            <li><strong>Análise de Sentimento:</strong> Entenda a intenção e o sentimento de um cliente para direcionar o atendimento.</li>
            <li><strong>Respostas Personalizadas:</strong> Gere textos e e-mails que se adaptam ao perfil de cada cliente, criando uma comunicação mais humana.</li>
            <li><strong>Extração de Dados:</strong> Analise documentos, e-mails ou relatórios para extrair informações importantes e alimentar seus sistemas automaticamente.</li>
          </ul>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Benefícios Diretos para o seu Negócio</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Economia de Tempo</h3>
            <p>Elimine horas de trabalho manual e repetitivo.</p>
          </div>
          <div className="benefit-card">
            <h3>Redução de Erros</h3>
            <p>Garanta precisão e consistência nos seus dados.</p>
          </div>
          <div className="benefit-card">
            <h3>Aumento da Produtividade</h3>
            <p>Libere sua equipe para focar em tarefas estratégicas.</p>
          </div>
          <div className="benefit-card">
            <h3>Melhor Experiência do Cliente</h3>
            <p>Ofereça um atendimento mais rápido e eficiente.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Solutions;
