import React from 'react';
import '../styles/Terms.css'; // Estilo dedicado para a página de Termos

const Terms = () => {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <h1>Termos de Uso e Política de Privacidade</h1>
        <p>Última atualização: 21 de Julho de 2024</p>
      </header>
      
      <main className="terms-content">
              <section id="parties">
                <h2>1. Das Partes</h2>
                <p>O presente documento regula o uso da Plataforma ServiPro — Soluções de IA, fornecida por:</p>
                <p><strong>Renato Tonelli de Souza</strong><br />
                   CNPJ: 24.819.669/0001-78<br />
                   Tipo: MEI – Microempreendedor Individual<br />
                   Contato: contato@servipro.app.br | +55 (11) 93717-8532</p>
                <p>O usuário poderá ser:</p>
                <ul>
                  <li>(a) <strong>Empresa Contratante:</strong> A pessoa jurídica que contrata os serviços da ServiPro.</li>
                  <li>(b) <strong>Usuário Administrador:</strong> O profissional ou colaborador autorizado pela Empresa Contratante para gerenciar a plataforma.</li>
                  <li>(c) <strong>Usuário Final:</strong> O cliente ou pessoa que interage com os recursos disponibilizados pela Empresa Contratante através da plataforma.</li>
                </ul>
              </section>

              <section id="acceptance">
                <h2>2. Aceite</h2>
                <p>Ao contratar ou utilizar os serviços, a Empresa Contratante e seus usuários declaram estar de acordo com estes termos. O uso contínuo da plataforma confirma a aceitação de quaisquer alterações futuras.</p>
              </section>

              <section id="services">
                <h2>3. Objeto</h2>
                <p>O ServiPro oferece soluções de software baseadas em Inteligência Artificial e automação para otimizar processos de negócios, incluindo, mas não se limitando a, atendimento, marketing e gestão de dados.</p>
              </section>

              <section id="responsibilities">
                <h2>4. Responsabilidades do ServiPro</h2>
                <p>Comprometemo-nos a: (a) manter a plataforma funcional e segura; (b) oferecer suporte técnico para problemas relacionados ao nosso software; (c) garantir a privacidade dos dados conforme a legislação.</p>
              </section>

              <section id="user-responsibilities">
                <h2>5. Responsabilidades do Usuário</h2>
                <p>O usuário deve: (a) utilizar a plataforma de forma ética e legal; (b) proteger suas credenciais de acesso; (c) garantir que o conteúdo inserido ou gerado não viola direitos de terceiros; (d) obter consentimento de seus clientes (Usuários Finais) para o tratamento de dados, quando necessário.</p>
              </section>

              <section id="data-processing">
                <h2>6. Tratamento de Dados (LGPD)</h2>
                <p>O ServiPro atua como <strong>Operador</strong> dos dados inseridos pela Empresa Contratante, que é a <strong>Controladora</strong>. Processamos os dados estritamente para executar os serviços contratados, seguindo as diretrizes da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
              </section>

              <section id="data-collected">
                <h2>7. Dados Coletados</h2>
                <p>Coletamos: (a) dados cadastrais da Empresa Contratante; (b) dados de uso da plataforma (logs, interações); (c) dados inseridos pela Contratante em suas automações, que podem incluir informações de seus próprios clientes (Usuários Finais).</p>
              </section>

              <section id="purpose">
                <h2>8. Finalidade do Uso de Dados</h2>
                <p>Os dados são usados para: (a) prestação e melhoria dos serviços; (b) comunicação e suporte; (c) faturamento; (d) segurança e prevenção a fraudes.</p>
              </section>

              <section id="sharing">
                <h2>9. Compartilhamento de Dados</h2>
                <p>Os dados serão compartilhados apenas com fornecedores essenciais, tais como: provedores de hospedagem; serviços de comunicação; integrações autorizadas pela Empresa Contratante. O ServiPro não vende dados pessoais sob nenhuma circunstância.</p>
              </section>
      
              <section id="retention">
                <h2>10. Retenção e Exclusão de Dados</h2>
                <p>Os dados serão armazenados enquanto o contrato de serviço estiver ativo. Após o término, serão mantidos apenas pelos prazos legais obrigatórios e depois descartados com segurança. O titular pode solicitar a exclusão de seus dados, respeitando as obrigações legais da Empresa Contratante.</p>
              </section>
      
              <section id="rights">
                <h2>11. Direitos do Titular (LGPD)</h2>
                <p>O usuário pode solicitar: (a) acesso e correção; (b) portabilidade; (c) anonimização e eliminação; (d) revogação do consentimento. Canal de atendimento: contato@servipro.app.br</p>
              </section>

              <section id="liability">
                <h2>12. Limitação de Responsabilidade</h2>
                <p>O ServiPro não é responsável por: (a) decisões de negócio tomadas com base no uso da plataforma; (b) falhas em serviços de terceiros (internet, provedores de API, etc.); (c) conteúdo e interações geradas pela Empresa Contratante com seus Usuários Finais.</p>
              </section>
     
              <section id="changes">
                <h2>13. Alterações</h2>
                <p>O ServiPro poderá alterar este documento a qualquer momento. Mudanças relevantes serão comunicadas às Empresas Contratantes ou publicadas no site oficial.</p>
              </section>
     
              <section id="jurisdiction">
                <h2>14. Foro</h2>
                <p>Fica eleito o foro da comarca de São Paulo, SP, para dirimir quaisquer controvérsias, com renúncia de qualquer outro, por mais privilegiado que seja.</p>
              </section>
     
              <div className="terms-footer">
                  <p>© 2024 ServiPro — Soluções de IA. Todos os direitos reservados.</p>
              </div>
     
            </main>
          </div>
        );
      };
     
      export default Terms;
