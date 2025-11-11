import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Entre em Contato</h1>
      <form className="contact-form">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
