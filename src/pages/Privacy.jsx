import React from 'react';
import '../styles/Page.css'; // Usando o CSS unificado

const Privacy = () => {
  const lastUpdated = "15 de Julho de 2024";

  return (
    <div>
      <header className="page-header">
        <h1>Política de Privacidade</h1>
      </header>
      <main className="page-content">
        <p className="meta">
          <strong>Empresa:</strong> ServiPro Automação Inteligente<br />
          <strong>Última atualização:</strong> {lastUpdated}
        </p>
        <p>
          Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você contrata nossos serviços ou interage com nossas plataformas.
        </p>

        <h2>1. Visão Geral</h2>
        <p>
          A ServiPro ("nós", "nosso") está empenhada em proteger a privacidade e a segurança dos dados de nossos clientes e usuários. Esta política estabelece nosso compromisso com o tratamento de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e outras regulamentações aplicáveis.
        </p>

        <h2>2. Dados Pessoais que Coletamos</h2>
        <p>Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>
        <ul>
          <li>
            <strong>Dados de Clientes e Contatos Comerciais:</strong> Nome, e-mail, telefone, cargo, e nome da empresa.
          </li>
          <li>
            <strong>Dados para a Prestação de Serviços:</strong> Informações estritamente necessárias para a automação, conforme o escopo do projeto.
          </li>
          <li>
            <strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas em nosso site.
          </li>
        </ul>

        <h2>3. Como Usamos Seus Dados</h2>
        <p>Utilizamos os dados para:</p>
        <ul>
          <li>Prestação e Gestão dos Serviços Contratados.</li>
          <li>Comunicação sobre o serviço, suporte e atualizações.</li>
          <li>Melhoria contínua de nossas soluções.</li>
          <li>Obrigações Legais e Fiscais.</li>
        </ul>
        
        <h2>4. Seus Direitos como Titular dos Dados (LGPD)</h2>
        <p>Você tem o direito de acessar, corrigir, anonimizar, ou eliminar seus dados. Para exercer seus direitos, entre em contato conosco pelo e-mail: <a href="mailto:contato@servipro.app.br">contato@servipro.app.br</a>.</p>

        <h2>5. Segurança e Retenção de Dados</h2>
        <p>
          Adotamos medidas de segurança técnicas e administrativas para proteger seus dados e os retemos apenas pelo tempo necessário.
        </p>

        <h2>6. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível em nosso site.
        </p>

        <h2>7. Contato</h2>
        <p>
          Se tiver dúvidas, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail:
          <a href="mailto:contato@servipro.app.br">contato@servipro.app.br</a>.
        </p>
      </main>
    </div>
  );
};

export default Privacy;
