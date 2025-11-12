import React from 'react';
import '../styles/Privacy.css'; // Usando o novo CSS dedicado

const Privacy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <h1>Política de Privacidade</h1>
        <p>Seu controle e segurança são nossa prioridade. Entenda como tratamos seus dados.</p>
      </header>

      <main className="privacy-content">
        <section id="overview">
          <h2>1. Visão Geral</h2>
          <p>A <strong>ServiPro</strong> ("nós", "nosso") está empenhada em proteger a privacidade e a segurança dos dados de nossos clientes e usuários. Esta política estabelece nosso compromisso com o tratamento de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e outras regulamentações aplicáveis.</p>
        </section>

        <section id="data-collection">
          <h2>2. Dados que Coletamos</h2>
          <p>Para fornecer nossos serviços de automação e consultoria, podemos coletar os seguintes tipos de informações:</p>
          <ul>
            <li><strong>Informações de Contato:</strong> Nome, e-mail, número de telefone e nome da empresa, fornecidos através de nossos formulários de contato ou comunicação direta.</li>
            <li><strong>Dados de Navegação (Cookies):</strong> Coletamos dados técnicos sobre seu dispositivo e navegação (endereço IP, tipo de navegador, páginas visitadas) para otimizar a experiência em nosso site e analisar tendências de uso.</li>
            <li><strong>Informações de Projetos:</strong> Dados e documentos compartilhados por você no escopo de um projeto de consultoria, estritamente para a finalidade da execução do serviço contratado.</li>
          </ul>
        </section>

        <section id="data-use">
          <h2>3. Como Usamos Seus Dados</h2>
          <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
          <ul>
            <li>Prestar, manter e melhorar nossos serviços.</li>
            <li>Responder às suas solicitações, dúvidas e fornecer suporte.</li>
            <li>Enviar comunicações sobre projetos, atualizações de serviços ou informações que acreditamos ser do seu interesse, sempre com a opção de cancelamento.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
            <li>Analisar o desempenho do nosso site para aprimorar a usabilidade e o conteúdo.</li>
          </ul>
        </section>

        <section id="data-sharing">
          <h2>4. Compartilhamento de Dados</h2>
          <p>A ServiPro <strong>não vende ou aluga seus dados pessoais</strong>. O compartilhamento de informações pode ocorrer apenas nas seguintes circunstâncias:</p>
          <ul>
            <li>Com o seu consentimento explícito.</li>
            <li>Com provedores de serviços e ferramentas de tecnologia (como plataformas de automação e serviços de nuvem) que nos auxiliam na operação, sob estritos acordos de confidencialidade.</li>
            <li>Para cumprir uma obrigação legal ou responder a um processo judicial.</li>
          </ul>
        </section>

        <section id="data-security">
          <h2>5. Segurança dos Seus Dados</h2>
          <p>Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controle de acesso e monitoramento contínuo de nossos sistemas.</p>
        </section>

        <section id="user-rights">
          <h2>6. Seus Direitos como Titular dos Dados</h2>
          <p>De acordo com a LGPD, você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar seus dados a qualquer momento.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato conosco através do e-mail: <strong>contato@servipro.app.br</strong>.</p>
        </section>

        <section id="cookies">
          <h2>7. Uso de Cookies</h2>
          <p>Nosso site utiliza cookies para melhorar a funcionalidade e a experiência de navegação. Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador. A desativação pode afetar a funcionalidade de certas partes do nosso site.</p>
        </section>

        <section id="policy-changes">
          <h2>8. Alterações a Esta Política</h2>
          <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo seus dados. A data da última atualização será sempre indicada no final desta página.</p>
        </section>
        
        <div className="last-updated">
          <p><em>Última atualização: 24 de julho de 2024</em></p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
