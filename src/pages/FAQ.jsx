import React, { useState } from 'react';
import './FAQ.css';

const faqData = {
  "automacao_servipro_faq": [
    {
      "categoria": "Conceitos Gerais de Automação",
      "perguntas": [
        {
          "pergunta": "O que é automação de processos?",
          "resposta": "Automação é o uso de tecnologia para executar tarefas repetitivas de forma automática, reduzindo erros humanos e aumentando a eficiência das operações. No contexto empresarial, ela conecta sistemas e serviços — por exemplo, coletar dados de um formulário online e enviá-los automaticamente para um CRM ou planilha."
        },
        {
          "pergunta": "Automação é o mesmo que Inteligência Artificial?",
          "resposta": "Não. Automação segue regras predefinidas (como um 'se acontecer X, faça Y'), enquanto a IA interpreta padrões e aprende com os dados. Juntas, tornam os processos autônomos e inteligentes — por exemplo, a automação envia uma resposta, e a IA decide o melhor tom ou prioridade."
        },
        {
          "pergunta": "Preciso ser programador para usar automação?",
          "resposta": "Não. Plataformas como o n8n e Microsoft Power Automate permitem criar fluxos por meio de blocos visuais, conectando ferramentas com arrastar e soltar. A ServiPro adapta esses fluxos para empresas sem equipe técnica, oferecendo manutenção simplificada."
        },
        {
          "pergunta": "Quais áreas de uma empresa podem ser automatizadas?",
          "resposta": "Praticamente todas: atendimento, vendas, marketing, cobrança, financeiro, RH, suporte técnico, logística e pós-venda. Qualquer rotina repetitiva pode ser otimizada com automação."
        },
        {
          "pergunta": "Automação substitui pessoas?",
          "resposta": "Não. Ela aumenta a capacidade da equipe. O objetivo é liberar os profissionais de tarefas manuais para que foquem em atividades estratégicas, criativas e de relacionamento com o cliente."
        }
      ]
    },
    {
      "categoria": "WhatsApp e Comunicação",
      "perguntas": [
        {
          "pergunta": "Posso automatizar o atendimento no WhatsApp?",
          "resposta": "Sim. É possível criar fluxos que fazem triagem, agendam serviços, enviam respostas automáticas e até integram com IA para responder dúvidas em linguagem natural."
        },
        {
          "pergunta": "A automação responde sozinha os clientes?",
          "resposta": "Sim, mas de forma controlada. Você define as regras e o tom das respostas. A IA pode auxiliar quando o cliente faz perguntas fora do padrão."
        },
        {
          "pergunta": "Posso integrar o WhatsApp com outros sistemas?",
          "resposta": "Sim. A automação conecta o WhatsApp a sistemas como Google Sheets, Pipedrive, RD Station ou até plataformas internas. Por exemplo: quando um cliente envia 'agendar consulta', o sistema reserva automaticamente no calendário e envia a confirmação."
        },
        {
          "pergunta": "A automação funciona em número pessoal?",
          "resposta": "Não é recomendável. O ideal é usar o WhatsApp Business API, que permite múltiplos atendentes e fluxos automatizados de forma segura."
        },
        {
          "pergunta": "É possível ter múltiplos atendentes usando automação?",
          "resposta": "Sim, utilizando o WhatsApp Business API, que permite filas de atendimento, distribuição automática de conversas e acompanhamento em tempo real."
        },
        {
          "pergunta": "A automação funciona com voz e chat?",
          "resposta": "Sim. Além de texto, pode-se integrar com assistentes de voz ou chatbots em sites, unificando todos os canais de comunicação em um só fluxo automatizado."
        }
      ]
    },
    {
      "categoria": "Processos Internos",
      "perguntas": [
        {
          "pergunta": "Como a automação melhora a rotina da equipe?",
          "resposta": "Ela elimina tarefas repetitivas, como lançar dados, enviar e-mails ou lembrar compromissos. Isso reduz retrabalho e aumenta a precisão."
        },
        {
          "pergunta": "A automação pode ajudar no controle de leads e clientes?",
          "resposta": "Sim. Ela organiza o funil de vendas automaticamente, classifica contatos, envia mensagens no momento certo e atualiza o CRM."
        },
        {
          "pergunta": "Posso automatizar o envio de relatórios?",
          "resposta": "Sim. É possível configurar para que relatórios sejam gerados e enviados automaticamente em intervalos definidos."
        },
        {
          "pergunta": "Dá para criar fluxos personalizados por departamento?",
          "resposta": "Sim. Cada área pode ter automações específicas — vendas, financeiro, RH, atendimento, suporte etc."
        }
      ]
    },
    {
      "categoria": "Integrações e Sistemas",
      "perguntas": [
        {
          "pergunta": "Quais sistemas posso integrar?",
          "resposta": "Qualquer sistema com API, como Google Sheets, RD Station, Pipedrive, plataformas de e-mail, ERPs e sistemas próprios."
        },
        {
          "pergunta": "O que é o n8n e por que a ServiPro usa ele?",
          "resposta": "O n8n é uma plataforma de automação visual, sem código, que permite criar fluxos complexos conectando dezenas de ferramentas de forma segura."
        },
        {
          "pergunta": "A automação pode usar dados do meu sistema interno?",
          "resposta": "Sim, desde que haja acesso via API, banco de dados ou planilhas. A ServiPro monta a integração conforme o ambiente da sua empresa."
        },
        {
          "pergunta": "Dá para conectar o site da empresa?",
          "resposta": "Sim. É possível capturar dados de formulários, registrar leads e iniciar fluxos automáticos a partir do site."
        },
        {
            "pergunta": "Quais sistemas posso integrar com o n8n?",
            "resposta": "Mais de 500 conectores nativos, incluindo Google Workspace, Microsoft 365, Slack, Trello, Notion, ERPs, CRMs e qualquer serviço com API. Também é possível criar integrações personalizadas com bancos de dados SQL, planilhas ou webhooks."
        },
        {
            "pergunta": "É possível combinar n8n com ferramentas da Microsoft?",
            "resposta": "Sim. O n8n integra com Outlook, Teams, SharePoint, Power BI e Power Automate. Assim, é possível, por exemplo, criar um fluxo que analisa e-mails no Outlook e alimenta automaticamente uma planilha no Excel Online ou relatório no Power BI."
        },
        {
            "pergunta": "Posso conectar sistemas que não têm API?",
            "resposta": "Em muitos casos, sim. É possível usar automação por leitura de planilhas, integração via e-mail, scraping controlado ou conexão direta a bancos de dados. A ServiPro analisa caso a caso para definir a melhor abordagem."
        }
      ]
    },
    {
      "categoria": "Resultados e Benefícios",
      "perguntas": [
        {
          "pergunta": "Quais os principais benefícios da automação?",
          "resposta": "Economia de tempo, redução de erros, aumento de produtividade e melhor experiência do cliente."
        },
        {
          "pergunta": "A automação ajuda a vender mais?",
          "resposta": "Sim. Ela mantém o contato constante com leads e clientes, envia lembretes automáticos e garante que nenhuma oportunidade se perca."
        },
        {
          "pergunta": "Dá para medir os resultados?",
          "resposta": "Sim. Cada automação pode gerar relatórios automáticos de desempenho, mensagens enviadas e tarefas concluídas."
        },
        {
          "pergunta": "Em quanto tempo vejo resultados?",
          "resposta": "Depende do fluxo implementado. Em geral, os ganhos de produtividade aparecem nas primeiras semanas."
        }
      ]
    },
    {
      "categoria": "Inteligência Artificial na Automação",
      "perguntas": [
        {
          "pergunta": "Como a IA participa da automação?",
          "resposta": "Ela entende o contexto das mensagens, responde com naturalidade e aprende com interações anteriores."
        },
        {
          "pergunta": "A IA pode redigir mensagens personalizadas?",
          "resposta": "Sim. Ela adapta o texto conforme o perfil do cliente, mantendo coerência e empatia."
        },
        {
          "pergunta": "É possível usar IA para analisar dados internos?",
          "resposta": "Sim. A IA pode interpretar informações de planilhas, históricos de clientes e indicadores de performance."
        },
        {
          "pergunta": "A IA substitui a automação tradicional?",
          "resposta": "Não. Ela é complementar — enquanto a automação executa tarefas, a IA toma decisões inteligentes dentro do fluxo."
        }
      ]
    },
    {
      "categoria": "Segurança e Confiabilidade",
      "perguntas": [
        {
          "pergunta": "A automação é segura?",
          "resposta": "Sim. Quando configurada corretamente, os dados são criptografados e protegidos por autenticação segura."
        },
        {
          "pergunta": "Os dados dos clientes ficam expostos?",
          "resposta": "Não. Toda a comunicação é feita em canais oficiais e com controle de acesso restrito."
        },
        {
          "pergunta": "É preciso autorização para integrar sistemas externos?",
          "resposta": "Sim. Toda integração deve seguir as políticas de privacidade e conformidade com a LGPD."
        }
      ]
    },
    {
      "categoria": "Implantação e Suporte",
      "perguntas": [
        {
          "pergunta": "Quanto tempo leva para implantar uma automação?",
          "resposta": "De algumas horas a poucos dias, dependendo da complexidade do fluxo e das integrações necessárias."
        },
        {
          "pergunta": "Preciso parar a operação para implantar?",
          "resposta": "Não. As automações são implementadas em paralelo, sem impacto direto nas atividades diárias."
        },
        {
          "pergunta": "A ServiPro dá suporte após a implantação?",
          "resposta": "Sim. Há acompanhamento técnico, ajustes de performance e treinamento da equipe."
        },
        {
          "pergunta": "Posso ampliar os fluxos no futuro?",
          "resposta": "Sim. A automação é modular — pode começar simples e crescer conforme a demanda."
        }
      ]
    },
    {
      "categoria": "Casos e Exemplos",
      "perguntas": [
        {
          "pergunta": "Quais automações são mais comuns hoje?",
          "resposta": "Respostas automáticas no WhatsApp, agendamento inteligente, follow-up de vendas, envio de lembretes, atualização de planilhas e relatórios automáticos."
        },
        {
          "pergunta": "A automação funciona para pequenas empresas?",
          "resposta": "Sim. É justamente onde ela traz maior impacto, pois reduz a carga de tarefas manuais e aumenta a capacidade de atendimento."
        },
        {
          "pergunta": "E para grandes empresas?",
          "resposta": "Também. A automação se adapta a fluxos complexos e múltiplos departamentos."
        }
      ]
    },
     {
      "categoria": "Marketing e Relacionamento",
      "perguntas": [
        {
          "pergunta": "Como a automação ajuda no marketing?",
          "resposta": "Ela centraliza dados de clientes, programa disparos personalizados, faz nutrição automática de leads e conecta formulários a campanhas de e-mail, WhatsApp e redes sociais."
        },
        {
          "pergunta": "Posso criar funis de vendas automáticos?",
          "resposta": "Sim. O n8n pode criar funis completos, desde a captura do lead até o follow-up, integrando ferramentas como RD Station, ActiveCampaign e planilhas de controle."
        },
        {
          "pergunta": "Dá para personalizar mensagens conforme o comportamento do cliente?",
          "resposta": "Sim. A automação pode identificar o estágio de cada cliente e enviar mensagens diferentes conforme o histórico de interações, horários preferidos ou produtos de interesse."
        }
      ]
    },
    {
      "categoria": "Formas de Uso e Hospedagem do n8n",
      "perguntas": [
        {
          "pergunta": "Quais são as formas de usar o n8n?",
          "resposta": "Existem três formas principais: 1) Instalar na própria máquina, 2) Hospedar em um servidor como AWS ou VPS, e 3) Usar a versão oficial hospedada pelo n8n.cloud com plano mensal ou anual."
        },
        {
          "pergunta": "Como funciona o n8n instalado na minha máquina?",
          "resposta": "Você instala o n8n localmente (em Windows, Linux ou Mac). Ele roda enquanto o computador estiver ligado e com internet. Ideal para testes e desenvolvimento."
        },
        {
          "pergunta": "Quais as vantagens e desvantagens de rodar o n8n localmente?",
          "resposta": "Vantagens: custo zero e total controle. Desvantagens: precisa manter o computador online o tempo todo e não é indicado para fluxos em produção."
        },
        {
          "pergunta": "Posso hospedar o n8n na AWS, Google Cloud ou outro servidor?",
          "resposta": "Sim. Essa é a forma mais flexível e profissional. Você cria um servidor virtual (VPS ou EC2, por exemplo), instala o n8n e configura domínios, SSL e backups."
        },
        {
          "pergunta": "Quais as vantagens de hospedar o n8n na AWS ou servidor próprio?",
          "resposta": "Permite rodar 24h, ter mais performance e customizar integrações. O custo depende do tamanho do servidor, mas geralmente é acessível."
        },
        {
          "pergunta": "O que é o n8n.cloud?",
          "resposta": "É a versão oficial hospedada pela própria equipe do n8n. Você cria uma conta e paga uma assinatura mensal ou anual conforme o volume de execuções e usuários."
        },
        {
          "pergunta": "Quais as vantagens do n8n.cloud?",
          "resposta": "Dispensa instalação, manutenção e atualizações. É seguro, escalável e conta com suporte técnico oficial. Ideal para empresas que querem foco total nos fluxos."
        },
        {
          "pergunta": "Qual opção é mais indicada para começar?",
          "resposta": "Para testes: instalação local. Para uso profissional e integração com clientes: hospedagem própria (AWS, VPS). Para operação estável e suporte: n8n.cloud."
        },
        {
          "pergunta": "É possível migrar entre as versões?",
          "resposta": "Sim. Os fluxos criados podem ser exportados e importados facilmente entre o ambiente local, servidor próprio e n8n.cloud."
        },
        {
          "pergunta": "Existem outras formas de usar o n8n?",
          "resposta": "Sim. Pode ser instalado via Docker, usado em containers Kubernetes ou integrado dentro de sistemas internos com autenticação e logs centralizados."
        }
      ]
    }
  ]
};

// Component to render a single FAQ item
const FaqItem = ({ pergunta, resposta, isOpen, onClick }) => {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="faq-question">
        <h3>{pergunta}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to remove duplicate questions from a category
  const getUniqueQuestions = (questions) => {
    const unique = [];
    const questionSet = new Set();
    for (const q of questions) {
      if (!questionSet.has(q.pergunta)) {
        questionSet.add(q.pergunta);
        unique.push(q);
      }
    }
    return unique;
  };

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="faq-container">
      <h1 className="faq-title">Perguntas Frequentes sobre Automação</h1>
      {faqData.automacao_servipro_faq.map((categoria, catIndex) => (
        <div key={catIndex} className="faq-category">
          <h2>{categoria.categoria}</h2>
          {getUniqueQuestions(categoria.perguntas).map((item) => {
            const currentIndex = globalIndex;
            const isOpen = openIndex === currentIndex;
            globalIndex++;
            return (
              <FaqItem
                key={currentIndex}
                pergunta={item.pergunta}
                resposta={item.resposta}
                isOpen={isOpen}
                onClick={() => handleItemClick(currentIndex)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
