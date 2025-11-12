import React, { useState } from 'react';
import { faqData } from '../faqData'; // Importa os dados do FAQ
import '../styles/FAQ.css'; // Importa os novos estilos
import '../styles/Page.css'; // Estilos gerais da página

// Componente para um único item do FAQ (pergunta e resposta)
const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        {item.pergunta}
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">
        <p>{item.resposta}</p>
      </div>
    </div>
  );
};

// Componente principal da página de FAQ
function FAQ() {
  // Estado para controlar qual pergunta está aberta (índice)
  const [openIndex, setOpenIndex] = useState(null);

  // Função para lidar com o clique em uma pergunta
  const handleClick = (index) => {
    // Se a pergunta clicada já estiver aberta, fecha; senão, abre.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-container faq-page-container">
      <h1>Perguntas Frequentes</h1>

      {faqData.map((category, catIndex) => (
        <section key={catIndex} className="faq-category">
          <h2>{category.categoria}</h2>
          {category.perguntas.map((item, itemIndex) => {
            // Cria um índice único para cada pergunta para o estado
            const globalIndex = catIndex * 1000 + itemIndex;
            return (
              <FAQItem 
                key={globalIndex}
                item={item}
                isOpen={openIndex === globalIndex}
                onClick={() => handleClick(globalIndex)}
              />
            );
          })}
        </section>
      ))}
    </div>
  );
}

export default FAQ;
