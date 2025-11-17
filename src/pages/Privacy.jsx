import React from 'react';
import "../styles/Privacy.css";

// Política de Privacidade revisada para conformidade jurídica, LGPD e requisitos das plataformas Meta
// Linguagem neutra, não sensível e alinhada a práticas de privacidade modernas

export default function Privacy() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <h1>Política de Privacidade</h1>
        <p>Transparência e segurança no tratamento das informações.</p>
      </header>

      <main className="privacy-content">
        {/* 1. Visão Geral */}
        <section id="overview">
          <h2>1. Visão Geral</h2>
          <p>
            A <strong>ServiPro</strong> (“nós”, “nosso”) está comprometida em
            proteger a privacidade e a segurança dos dados pessoais tratados
            durante o uso de nossos serviços de automação, integrações e
            soluções inteligentes. Esta Política de Privacidade segue a Lei
            Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e boas
            práticas adotadas por plataformas globais, incluindo requisitos da
            Meta (WhatsApp, Instagram e Facebook).
          </p>
        </section>

        {/* 2. Dados Coletados */}
        <section id="data-collection">
          <h2>2. Dados que Coletamos</h2>
          <p>
            Dependendo de como você interage com nossos serviços, podemos
            coletar:
          </p>
          <ul>
            <li>
              <strong>Informações de Contato:</strong> nome, e-mail, telefone,
              cargo e empresa.
            </li>
            <li>
              <strong>Dados Operacionais:</strong> informações inseridas pela
              Empresa Contratante nas automações, incluindo contatos, mensagens,
              formulários e parâmetros técnicos.
            </li>
            <li>
              <strong>Dados de Navegação:</strong> endereço IP, tipo de
              navegador, páginas visitadas e padrões de interação — coletados
              através de cookies e ferramentas analíticas.
            </li>
            <li>
              <strong>Dados de Integrações:</strong> informações provenientes de
              APIs externas (como WhatsApp Business API, Meta, Google e cloud
              providers), sempre conforme permissões definidas pela própria
              Empresa Contratante.
            </li>
          </ul>
        </section>

        {/* 3. Finalidade do Uso dos Dados */}
        <section id="data-use">
          <h2>3. Como Usamos Seus Dados</h2>
          <p>Os dados podem ser utilizados para:</p>
          <ul>
            <li>
              Operar, personalizar e aprimorar nossos serviços de automação e
              integração.
            </li>
            <li>Fornecer suporte técnico e respostas a solicitações.</li>
            <li>
              Gerenciar comunicações operacionais, administrativas ou
              relacionadas à conta.
            </li>
            <li>
              Conectar e manter integrações técnicas solicitadas pela Empresa
              Contratante.
            </li>
            <li>
              Cumprir requisitos legais, auditorias, segurança e prevenção de
              fraudes.
            </li>
            <li>
              Analisar desempenho e uso dos sistemas para melhorar eficiência e
              estabilidade.
            </li>
          </ul>
          <p>
            Não utilizamos dados para segmentação proibida, práticas invasivas,
            discriminação ou coleta sensível, em conformidade com as Políticas
            da Meta.
          </p>
        </section>

        {/* 4. Compartilhamento */}
        <section id="data-sharing">
          <h2>4. Compartilhamento de Dados</h2>
          <p>
            A ServiPro{" "}
            <strong>
              não vende, negocia nem compartilha dados pessoais para fins
              comerciais
            </strong>
            . O compartilhamento ocorre somente quando necessário para a
            operação dos serviços:
          </p>
          <ul>
            <li>
              <strong>Ferramentas e Provedores Técnicos:</strong> hospedagem,
              serviços de nuvem, APIs e integrações configuradas pela Empresa
              Contratante.
            </li>
            <li>
              <strong>Plataformas Parceiras:</strong> WhatsApp Business API,
              Meta, Google, serviços de e-mail e automação.
            </li>
            <li>
              <strong>Exigências Legais:</strong> quando necessário para cumprir
              obrigações legais, regulatórias ou solicitações de autoridades.
            </li>
          </ul>
          <p>
            Todos os terceiros envolvidos seguem padrões de confidencialidade,
            segurança e privacidade.
          </p>
        </section>

        {/* 5. Segurança */}
        <section id="data-security">
          <h2>5. Segurança dos Dados</h2>
          <p>Aplicamos medidas técnicas e organizacionais como:</p>
          <ul>
            <li>Criptografia em trânsito e repouso.</li>
            <li>Controle de acesso baseado em níveis e funções.</li>
            <li>Monitoramento de integridade e prevenção de incidentes.</li>
            <li>Ambientes segregados e backups seguros.</li>
          </ul>
          <p>
            Embora adotemos boas práticas de segurança, nenhum ambiente digital
            é totalmente imune. Assim, incentivamos os usuários a manterem boas
            práticas internas.
          </p>
        </section>

        {/* 6. Direitos do Titular */}
        <section id="user-rights">
          <h2>6. Direitos do Titular dos Dados</h2>
          <p>De acordo com a LGPD, você pode solicitar:</p>
          <ul>
            <li>Acesso aos dados tratados.</li>
            <li>Correção ou atualização.</li>
            <li>Portabilidade.</li>
            <li>Anonimização ou exclusão, nos casos aplicáveis.</li>
            <li>Informações sobre compartilhamentos.</li>
            <li>Revogação de consentimento.</li>
          </ul>
          <p>
            Contato oficial para solicitações:{" "}
            <strong>contato@servipro.app.br</strong>.
          </p>
        </section>

        {/* 7. Cookies */}
        <section id="cookies">
          <h2>7. Uso de Cookies</h2>
          <p>
            Utilizamos cookies para melhorar desempenho, segurança e experiência
            de navegação. O usuário pode ajustar preferências diretamente no
            navegador. Alguns recursos podem ser limitados caso cookies sejam
            desabilitados.
          </p>
        </section>

        {/* 8. Bases Legais */}
        <section id="legal-bases">
          <h2>8. Bases Legais para Tratamento</h2>
          <p>
            O tratamento de dados pode ocorrer conforme as bases legais
            previstas na LGPD:
          </p>
          <ul>
            <li>Execução de contrato ou procedimentos preliminares.</li>
            <li>Legítimo interesse, respeitando direitos e liberdades.</li>
            <li>Consentimento (quando aplicável).</li>
            <li>Cumprimento de obrigação legal ou regulatória.</li>
          </ul>
        </section>

        {/* 9. Alterações */}
        <section id="policy-changes">
          <h2>9. Alterações desta Política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente para
            refletir melhorias, mudanças legais ou atualizações de plataforma. A
            data da última versão será sempre indicada abaixo.
          </p>
        </section>

        <div className="last-updated">
          <p>
            <em>Última atualização: 21 de Julho de 2024</em>
          </p>
        </div>
      </main>
    </div>
  );
}