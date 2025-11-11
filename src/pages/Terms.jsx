import React from 'react';
import '../styles/Page.css'; // Usando o CSS unificado

const Terms = () => {
  const lastUpdated = "15 de Julho de 2024";

  return (
    <div>
      <header className="page-header">
        <h1>Termos e Condições de Uso</h1>
      </header>
      <main className="page-content">
        <p className="meta">
          <strong>Empresa:</strong> ServiPro Automação Inteligente<br />
          <strong>Última atualização:</strong> {lastUpdated}
        </p>
        <p>
          Bem-vindo à ServiPro. Ao contratar nossos serviços, você concorda com os seguintes Termos e Condições.
        </p>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar os serviços de automação, integração e inteligência artificial da ServiPro ("Serviços"), você firma um acordo vinculativo conosco e declara ter lido e concordado com estes Termos.
        </p>

        <h2>2. Descrição dos Serviços</h2>
        <p>
          A ServiPro oferece soluções personalizadas para automatizar processos de negócios. O escopo e os custos de cada projeto serão definidos em uma Proposta Comercial específica.
        </p>

        <h2>3. Obrigações do Cliente</h2>
        <p>Para a correta prestação dos Serviços, o Cliente concorda em:</p>
        <ul>
          <li>Fornecer informações precisas e completas sobre seus processos.</li>
          <li>Disponibilizar acesso seguro (chaves de API, credenciais) às ferramentas a serem integradas.</li>
          <li>Utilizar os Serviços de forma lícita.</li>
        </ul>

        <h2>4. Propriedade Intelectual</h2>
        <p>
          O código-fonte e as metodologias desenvolvidas pela ServiPro são de nossa propriedade intelectual. O Cliente recebe uma licença de uso da solução implementada enquanto o contrato estiver ativo.
        </p>

        <h2>5. Confidencialidade</h2>
        <p>
          Ambas as partes se comprometem a tratar como confidenciais todas as informações obtidas durante o projeto. 
        </p>

        <h2>6. Limitação de Responsabilidade</h2>
        <p>
          A ServiPro não se responsabiliza por falhas decorrentes de serviços de terceiros (APIs, provedores de internet, etc.). Nossa responsabilidade limita-se ao funcionamento das automações que desenvolvemos.
        </p>

        <h2>7. Contato</h2>
        <p>
          Para dúvidas ou esclarecimentos sobre estes Termos, entre em contato pelo e-mail: 
          <a href="mailto:contato@servipro.app.br">contato@servipro.app.br</a>.
        </p>
      </main>
    </div>
  );
};

export default Terms;
