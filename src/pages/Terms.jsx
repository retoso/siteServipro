import React from 'react';
import "../styles/Terms.css";

// Nova versão ampliada para atender todos os mercados e requisitos da Meta
// Ajustado para linguagem ampla, neutra e compatível com políticas de anúncios
// Evita alegações proibidas e termos sensíveis

export default function Terms() {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <h1>Termos de Uso e Política de Privacidade</h1>
        <p>Última atualização: 21 de Julho de 2024</p>
      </header>

      <main className="terms-content">
        {/* 1. PARTES */}
        <section id="parties">
          <h2>1. Das Partes</h2>
          <p>
            Este documento regula o uso da plataforma ServiPro — Soluções de
            Automação e Inteligência Artificial, fornecida por:
          </p>
          <p>
            <strong>Renato Tonelli de Souza</strong>
            <br />
            CNPJ: 24.819.669/0001-78
            <br />
            Tipo: MEI – Microempreendedor Individual
            <br />
            Contato: contato@servipro.app.br | +55 (11) 93717-8532
          </p>
          <p>O usuário poderá ser:</p>
          <ul>
            <li>
              (a) <strong>Empresa Contratante:</strong> Pessoa jurídica de
              qualquer segmento que utilize soluções de automação e IA.
            </li>
            <li>
              (b) <strong>Usuário Administrador:</strong> Profissional
              autorizado pela Empresa Contratante.
            </li>
            <li>
              (c) <strong>Usuário Final:</strong> Pessoa que interage com
              fluxos, sistemas, ferramentas ou canais integrados pela Empresa
              Contratante, incluindo WhatsApp, websites, formulários e APIs.
            </li>
          </ul>
        </section>

        {/* 2. ACEITE */}
        <section id="acceptance">
          <h2>2. Aceite</h2>
          <p>
            Ao utilizar qualquer recurso da plataforma, a Empresa Contratante e
            os Usuários confirmam estar de acordo com estes Termos. O uso
            contínuo implica aceite automático de futuras atualizações.
          </p>
        </section>

        {/* 3. OBJETO */}
        <section id="services">
          <h2>3. Objeto</h2>
          <p>
            O ServiPro oferece soluções de automação, integração de sistemas,
            fluxos inteligentes e ferramentas de Inteligência Artificial
            aplicáveis a diversos mercados, incluindo — mas não limitado a —
            saúde, varejo, turismo, serviços, educação, indústria, finanças,
            logística e atendimento ao cliente.
          </p>
          <p>
            A plataforma pode incluir recursos como: integrações via API,
            automações de comunicação, assistentes virtuais, análise de dados,
            fluxos de atendimento, disparos condicionais, conectores externos e
            módulos de produtividade.
          </p>
        </section>

        {/* 4. RESPONSABILIDADES SERVIPRO */}
        <section id="responsibilities">
          <h2>4. Responsabilidades do ServiPro</h2>
          <p>O ServiPro compromete-se a:</p>
          <ul>
            <li>Manter a plataforma estável, segura e atualizada.</li>
            <li>
              Fornecer suporte técnico relativo ao funcionamento do software.
            </li>
            <li>
              Cumprir legislação aplicável, incluindo normas de privacidade e
              proteção de dados.
            </li>
          </ul>
        </section>

        {/* 5. RESPONSABILIDADES DO USUÁRIO */}
        <section id="user-responsibilities">
          <h2>5. Responsabilidades do Usuário</h2>
          <p>O Usuário deve:</p>
          <ul>
            <li>
              Usar a plataforma de forma ética, legal e compatível com a
              finalidade contratada.
            </li>
            <li>Garantir veracidade das informações fornecidas.</li>
            <li>
              Proteger credenciais e acessos de administradores e operadores.
            </li>
            <li>
              Obter consentimento de seus clientes quando inserir ou tratar
              dados pessoais.
            </li>
            <li>
              Configurar suas automações de modo a evitar práticas proibidas
              pelas plataformas integradas (Meta, WhatsApp, Google etc.).
            </li>
          </ul>
        </section>

        {/* 6. LGPD */}
        <section id="data-processing">
          <h2>6. Tratamento de Dados (LGPD)</h2>
          <p>
            O ServiPro atua como <strong>Operador</strong> no tratamento de
            dados inseridos pela Empresa Contratante, que permanece como{" "}
            <strong>Controladora</strong>. O processamento ocorre exclusivamente
            para execução dos serviços contratados.
          </p>
        </section>

        {/* 7. DADOS COLETADOS */}
        <section id="data-collected">
          <h2>7. Dados Coletados</h2>
          <p>Podem ser coletados:</p>
          <ul>
            <li>Dados cadastrais da Empresa Contratante.</li>
            <li>Logs e informações de uso da plataforma.</li>
            <li>
              Dados inseridos nas automações pela Contratante, incluindo
              contatos, mensagens e integrações externas.
            </li>
          </ul>
        </section>

        {/* 8. FINALIDADE */}
        <section id="purpose">
          <h2>8. Finalidade do Uso de Dados</h2>
          <p>Os dados poderão ser utilizados para:</p>
          <ul>
            <li>Execução dos serviços contratados.</li>
            <li>Melhorias técnicas da plataforma.</li>
            <li>Comunicação operacional e suporte.</li>
            <li>Faturamento, auditoria e métricas internas.</li>
            <li>Segurança, prevenção de abusos e conformidade legal.</li>
          </ul>
        </section>

        {/* 9. COMPARTILHAMENTO */}
        <section id="sharing">
          <h2>9. Compartilhamento de Dados</h2>
          <p>
            O ServiPro compartilha dados apenas com provedores essenciais, tais
            como hospedagem, APIs externas, serviços de mensageria e integrações
            autorizadas pela Empresa Contratante. Não ocorre venda ou negociação
            de dados pessoais.
          </p>
        </section>

        {/* 10. RETENÇÃO */}
        <section id="retention">
          <h2>10. Retenção e Exclusão de Dados</h2>
          <p>
            Dados serão armazenados enquanto a conta estiver ativa. Após o
            encerramento contratual, serão mantidos apenas pelos prazos legais e
            posteriormente eliminados com segurança.
          </p>
        </section>

        {/* 11. DIREITOS */}
        <section id="rights">
          <h2>11. Direitos do Titular (LGPD)</h2>
          <p>
            O titular pode solicitar acesso, correção, portabilidade,
            anonimização ou exclusão de seus dados, conforme legislação
            aplicável. Canal de contato: contato@servipro.app.br
          </p>
        </section>

        {/* 12. LIMITAÇÃO */}
        <section id="liability">
          <h2>12. Limitação de Responsabilidade</h2>
          <p>
            O ServiPro não se responsabiliza por decisões tomadas pela Empresa
            Contratante com base em dados processados, por falhas de serviços de
            terceiros, nem por conteúdos configurados pela Contratante em seus
            fluxos e automações.
          </p>
          <p>
            É responsabilidade da Contratante obedecer às regras de uso de cada
            plataforma integrada (ex.: Meta, WhatsApp Business, Instagram,
            Telegram, e-mail, entre outras).
          </p>
        </section>

        {/* 13. ALTERAÇÕES */}
        <section id="changes">
          <h2>13. Alterações</h2>
          <p>
            Este documento pode ser atualizado a qualquer momento. Mudanças
            relevantes serão comunicadas por e-mail ou publicadas no site.
          </p>
        </section>

        {/* 14. FORO */}
        <section id="jurisdiction">
          <h2>14. Foro</h2>
          <p>
            Fica eleito o foro de São Paulo/SP para resolução de conflitos,
            salvo disposições legais em contrário.
          </p>
        </section>

        <div className="terms-footer">
          <p>
            © 2024 ServiPro — Soluções de Automação e IA. Todos os direitos
            reservados.
          </p>
        </div>
      </main>
    </div>
  );
}
