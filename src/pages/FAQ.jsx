import React from 'react';
import '../styles/Page.css';

const FAQ = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Perguntas Frequentes (FAQ)</h1>
      </header>
      <main className="page-content">
        <p>
          Nesta seção, respondemos às perguntas mais comuns sobre nossos serviços e nossa plataforma. Se você não encontrar a resposta que procura, não hesite em entrar em contato conosco.
        </p>
        
        <h3>Como funciona a integração com meus sistemas atuais?</h3>
        <p>Nossa plataforma foi projetada para ser flexível e se integra a centenas de aplicativos populares através de APIs. Nossa equipe de especialistas ajudará você a configurar as integrações necessárias durante o processo de onboarding.</p>

        <h3>A ServiPro é segura?</h3>
        <p>Sim, a segurança é nossa principal prioridade. Utilizamos as práticas mais recentes de segurança de dados, incluindo criptografia de ponta a ponta e conformidade com os padrões globais de proteção de dados.</p>

      </main>
    </div>
  );
};

export default FAQ;
