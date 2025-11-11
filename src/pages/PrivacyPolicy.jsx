import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <main>
        <h1>🔒 Política de Privacidade</h1>
        <p className="meta">
          <strong>ServiPro — Solução de IA para Clínicas</strong>
        </p>
        <p className="meta">Versão 1.4 — Vigente desde: 01/10/2025</p>
        <p className="meta">Local de Operação: São Paulo — SP — Brasil</p>

        <h2>1. Finalidade</h2>
        <p>
          A ServiPro valoriza a privacidade e a proteção de dados pessoais de
          clínicas, consultórios, laboratórios e pacientes. Esta Política
          explica como coletamos, utilizamos e protegemos informações tratadas
          em nossa plataforma.
        </p>

        <h2>2. Dados Coletados</h2>
        <ul>
          <li>
            Dados de identificação: nome, CPF/CNPJ, telefone, e-mail e
            endereço;
          </li>
          <li>
            Dados profissionais: especialidade, cargo e registro profissional;
          </li>
          <li>
            Dados de pacientes: nome, telefone, data de nascimento, histórico
            básico e informações de agendamento;
          </li>
          <li>
            Dados técnicos: endereço IP, navegador, dispositivo e cookies para
            análise de uso.
          </li>
        </ul>

        <h2>3. Base Legal (LGPD)</h2>
        <p>
          O tratamento dos dados é realizado com base nas hipóteses previstas
          na Lei nº 13.709/2018 (LGPD), incluindo:
        </p>
        <ul>
          <li>(a) consentimento do titular;</li>
          <li>(b) execução de contrato ou de procedimentos preliminares;</li>
          <li>(c) cumprimento de obrigação legal;</li>
          <li>(d) proteção da saúde e atendimento médico;</li>
          <li>(e) legítimo interesse do controlador.</li>
        </ul>

        <h2>4. Uso das Informações</h2>
        <p>Os dados são utilizados exclusivamente para:</p>
        <ul>
          <li>
            (a) operacionalizar agendamentos e comunicações entre clínica e
            paciente;
          </li>
          <li>
            (b) enviar lembretes e confirmações de consulta via WhatsApp
            Business API;
          </li>
          <li>
            (c) oferecer relatórios, métricas e análises de atendimento;
          </li>
          <li>(d) personalizar a experiência dos usuários da plataforma.</li>
        </ul>

        <h2>5. Armazenamento e Segurança</h2>
        <p>
          Os dados são armazenados em servidores seguros, localizados no
          Brasil e no exterior (como AWS e Google Cloud Platform), com
          criptografia, controle de acesso e auditoria constante.
        </p>
        <p>
          A ServiPro adota medidas técnicas e administrativas adequadas para
          proteger os dados contra perda, acesso indevido, destruição ou
          alteração não autorizada.
        </p>

        <h2>6. Compartilhamento de Dados</h2>
        <p>
          O compartilhamento ocorre apenas quando necessário à operação da
          plataforma ou por obrigação legal, incluindo:
        </p>
        <ul>
          <li>(a) provedores de hospedagem e backup;</li>
          <li>
            (b) integrações com ferramentas de comunicação (ex.: Meta,
            Twilio);
          </li>
          <li>
            (c) clínicas ou profissionais de saúde autorizados pelo titular;
          </li>
          <li>(d) órgãos públicos, mediante requisição formal.</li>
        </ul>

        <h2>7. Retenção e Eliminação</h2>
        <p>
          Os dados serão mantidos pelo prazo necessário à prestação dos
          serviços e obrigações legais, respeitando o período de 10 anos
          previsto para registros de saúde. Após esse prazo, serão eliminados
          ou anonimizados.
        </p>

        <h2>8. Direitos do Titular</h2>
        <p>O titular dos dados pode, a qualquer momento, solicitar:</p>
        <ul>
          <li>(a) acesso, correção ou atualização de informações;</li>
          <li>(b) portabilidade para outro fornecedor de serviços;</li>
          <li>(c) anonimização ou eliminação dos dados;</li>
          <li>(d) revogação do consentimento;</li>
          <li>(e) informações sobre o compartilhamento de seus dados.</li>
        </ul>
        <p>
          Solicitações devem ser enviadas para:
          <a href="mailto:contato@servipro.app.br">contato@servipro.app.br</a>
          .
        </p>

        <h2>9. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Utilizamos cookies essenciais para o funcionamento do site e cookies
          analíticos para entender o uso e melhorar a experiência. Você pode
          gerenciar suas preferências no navegador.
        </p>

        <h2>10. Transferência Internacional</h2>
        <p>
          Quando houver transferência internacional de dados, garantimos que
          os países receptores ofereçam níveis adequados de proteção, conforme
          exigido pela LGPD.
        </p>

        <h2>11. Atualizações desta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade a qualquer momento. A
          versão mais recente estará sempre disponível em
          <strong>https://servipro.app.br/html/privacidade.html</strong>.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
