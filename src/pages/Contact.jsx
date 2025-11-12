import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// Ícones que já tínhamos
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.75 13.96c.25.25.25.66 0 .91l-1.5 1.5c-.25.25-.66.25-.91 0s-.25-.66 0-.91l1.04-1.04-1.54-1.54c-.25-.25-.25-.66 0-.91l1.5-1.5c.25-.25.66-.25.91 0s.25.66 0 .91l-1.04 1.04 1.54 1.54zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.79-1.21l3.52 1.17-1.17-3.52C21.56 15.36 22 13.73 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs
      .sendForm(
        'service_evfz284', // Seu Service ID
        'template_k8b2gi7', // Seu Template ID
        form.current,
        'y8wVxb2DAXiY88KPm' // Sua Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setFormStatus('success');
          e.target.reset(); // Limpa o formulário
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus('error');
        }
      );
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Fale Conosco</h1>
        <p>Estamos prontos para transformar suas ideias em realidade. Escolha o melhor canal para você.</p>
      </header>
      
      <div className="contact-container">
        <div className="contact-form-card">
          <h3>Envie uma Mensagem Direta</h3>
          <p>Para dúvidas, propostas ou um simples olá.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Seu Nome</label>
              <input type="text" id="name" name="name" required disabled={formStatus === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Seu E-mail</label>
              <input type="email" id="email" name="email" required disabled={formStatus === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Sua Mensagem</label>
              <textarea id="message" name="message" rows="6" required disabled={formStatus === 'sending'}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {formStatus === 'success' && <p className="form-feedback success">Mensagem enviada com sucesso! Obrigado.</p>}
            {formStatus === 'error' && <p className="form-feedback error">Ocorreu um erro. Tente novamente mais tarde.</p>}
          </form>
        </div>

        <div className="contact-options">
           <h3>Ou, se preferir...</h3>
          <p>Use um dos nossos canais diretos de atendimento.</p>
          
          <a href="https://wa.me/5511952135023" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card">
            <div className="contact-card-icon"><WhatsAppIcon /></div>
            <div className="contact-card-content">
              <h4>WhatsApp</h4>
              <p>Clique para iniciar uma conversa agora mesmo.</p>
            </div>
          </a>

          <div className="contact-card email-card">
            <div className="contact-card-icon"><EmailIcon /></div>
            <div className="contact-card-content">
              <h4>E-mail</h4>
              <p>Envie sua solicitação para nosso time.</p>
              <a href="mailto:contato@servipro.app.br" className="email-link">contato@servipro.app.br</a>
              <a href="mailto:serviprocontato@gmail.com" className="email-link">serviprocontato@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
