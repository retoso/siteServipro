import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Nós não apenas criamos automações. Nós construímos eficiência.</h1>
        <p>Nossa missão é liberar o potencial humano da sua equipe, eliminando tarefas repetitivas para que todos possam focar na estratégia, na criatividade e no relacionamento com o cliente.</p>
      </div>

      <div className="about-section">
        <h2>Nossa Filosofia: Automação para Empoderar Pessoas</h2>
        <p>Acreditamos que a tecnologia deve servir às pessoas, e não o contrário. A automação não veio para substituir equipes, mas para torná-las mais fortes. Removemos os gargalos e as tarefas manuais que geram retrabalho e frustração, permitindo que o talento do seu time brilhe em atividades de alto valor.</p>
      </div>

      <div className="about-section tech-stack">
        <h2>Nosso Arsenal Tecnológico</h2>
        <p>Para entregar resultados de alto nível, combinamos as melhores ferramentas do mercado, com foco em flexibilidade, segurança e poder de integração.</p>
        <div className="tech-cards">
          <div className="tech-card">
            <h3>n8n: O Coração da Automação</h3>
            <p>Usamos o n8n como nossa principal ferramenta por sua flexibilidade incomparável. Ele nos permite criar desde fluxos simples até orquestrações complexas, conectando centenas de serviços de forma visual e segura.</p>
          </div>
          <div className="tech-card">
            <h3>Inteligência Artificial Integrada</h3>
            <p>Vamos além do básico, integrando IA para que seus fluxos possam tomar decisões, personalizar a comunicação e analisar dados, trazendo um novo nível de inteligência para seus processos.</p>
          </div>
          <div className="tech-card">
            <h3>APIs e Conectividade Total</h3>
            <p>Nossa expertise em integrações nos permite conectar qualquer sistema, de CRMs a ERPs e bancos de dados, garantindo que seus dados fluam sem interrupções e sem a necessidade de intervenção manual.</p>
          </div>
        </div>
      </div>

      <div className="about-section approach">
        <h2>Nossa Abordagem: Parceria e Transparência</h2>
        <p>Cada empresa é única. Por isso, nosso processo é colaborativo e focado nas suas necessidades.</p>
        <ul>
          <li><strong>Análise:</strong> Mergulhamos nos seus processos para entender seus desafios e oportunidades.</li>
          <li><strong>Desenho da Solução:</strong> Criamos um plano de automação sob medida, explicando cada passo.</li>
          <li><strong>Implementação Ágil:</strong> Implementamos os fluxos em paralelo, sem interromper sua operação.</li>
          <li><strong>Suporte Contínuo:</strong> Oferecemos acompanhamento técnico, ajustes e treinamento para garantir o sucesso a longo prazo.</li>
        </ul>
      </div>

      <div className="about-section cta-section">
        <h2>Pronto para transformar sua operação?</h2>
        <p>Vamos conversar sobre como a automação pode levar seu negócio para o próximo nível.</p>
        <a href="/contact" className="cta-button">Fale com um Especialista</a>
      </div>
    </div>
  );
};

export default About;
