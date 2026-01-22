
import React, { useState } from 'react';
import { X } from 'lucide-react';

const TERMS_OF_USE = `Termos de Uso

Estes Termos de Uso regulam o acesso e a utilização de nosso site e serviços. Ao acessar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado a estes termos.

1. Aceitação dos Termos

Ao utilizar nossos serviços de vendas, você concorda com os Termos de Uso e nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não utilize nossos serviços.

2. Alterações nos Termos

Podemos atualizar ou modificar estes Termos de Uso a qualquer momento, com ou sem aviso prévio. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações. O uso contínuo de nossos serviços após a publicação de modificações constitui sua aceitação das mudanças.

3. Uso do Serviço

Você concorda em usar nossos serviços de forma legal e conforme as leis e regulamentos aplicáveis. Ao acessar ou utilizar nossa plataforma, você concorda em não:

Utilizar nossos serviços para fins ilegais, fraudulentos ou prejudiciais.

Interferir no funcionamento do site ou na experiência de outros usuários.

Violar os direitos de propriedade intelectual, incluindo copyrights, marcas registradas e patentes.

Usar robôs, spiders ou outras tecnologias automáticas para acessar ou coletar dados do site.

4. Cadastro de Usuário

Para utilizar nossos serviços, você pode ser solicitado a criar uma conta. Você concorda em fornecer informações precisas, completas e atualizadas durante o processo de cadastro. É sua responsabilidade manter a confidencialidade das suas credenciais de acesso e de sua conta.

5. Produtos e Preços

Os preços de nossos produtos são informados no site e podem ser alterados sem aviso prévio. Reservamo-nos o direito de corrigir erros de preço, descrição ou disponibilidade dos produtos, a qualquer momento.

6. Pagamento

Ao realizar uma compra, você se compromete a pagar o valor total pelos produtos ou serviços adquiridos, incluindo impostos e taxas aplicáveis. Os pagamentos são processados por meio de terceiros, como gateways de pagamento, e a segurança das transações é uma prioridade.

7. Propriedade Intelectual

Todos os conteúdos, incluindo textos, imagens, gráficos, logos e software disponíveis em nosso site são de nossa propriedade ou licenciados. Você concorda em não copiar, modificar, distribuir ou de qualquer outra forma infringir nossos direitos de propriedade intelectual.

8. Limitação de Responsabilidade

Não nos responsabilizamos por qualquer dano indireto, acidental, especial ou consequente resultante do uso de nossos serviços ou da impossibilidade de usar nossos produtos. Em nenhum caso nossa responsabilidade ultrapassará o valor pago pelo cliente pela compra de um produto ou serviço.

9. Política de Cancelamento e Reembolso

A política de cancelamento e reembolso de produtos ou serviços adquiridos será detalhada separadamente e deve ser consultada antes de qualquer compra. Em caso de dúvida, entre em contato conosco para obter informações claras sobre como proceder.

10. Privacidade

A coleta e uso de seus dados pessoais estão sujeitos à nossa Política de Privacidade, que descreve como protegemos suas informações e como elas são usadas.

11. Força Maior

Não seremos responsáveis por qualquer falha no cumprimento das obrigações estabelecidas neste contrato em caso de eventos de força maior, como desastres naturais, pandemias, ou outros eventos fora do nosso controle.

12. Legislação Aplicável

Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa será resolvida no foro da cidade de [insira a cidade], estado de [insira o estado].

13. Contato

Se você tiver qualquer dúvida sobre nossos Termos de Uso, entre em contato conosco através do e-mail: contato@azul360parceiros.com.br
`;

const PRIVACY_POLICY = `Política de Privacidade

A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, protegemos e compartilhamos suas informações pessoais ao acessar ou utilizar nossos serviços de vendas.

1. Coleta de Informações

Coletamos informações pessoais quando você faz uma compra, se cadastra em nossa plataforma ou interage com nossos serviços. Essas informações podem incluir:

Nome

Endereço de e-mail

Número de telefone

Endereço de cobrança

Dados de pagamento (como informações de cartão de crédito)

Histórico de compras

Além disso, podemos coletar informações automaticamente quando você utiliza nossos serviços, como seu endereço IP, dados de navegação, e interações com nossa página.

2. Uso das Informações

Utilizamos as informações coletadas para:

Processar suas compras e pagamentos

Oferecer suporte ao cliente

Personalizar sua experiência de compra

Enviar informações sobre promoções, ofertas e atualizações de produtos (caso tenha consentido)

Melhorar nosso serviço e site com base nas suas preferências

3. Proteção de Dados

Empregamos medidas de segurança técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados e controles de acesso restritos.

4. Compartilhamento de Informações

Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar suas informações com prestadores de serviços que nos ajudam a processar pagamentos, enviar produtos ou fornecer suporte. Esses prestadores de serviços têm acesso apenas às informações necessárias para realizar suas funções e estão obrigados a manter a confidencialidade.

5. Cookies e Tecnologias de Rastreamento

Nosso site usa cookies e outras tecnologias de rastreamento para melhorar a navegação e a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.

6. Seus Direitos

Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Se deseja, você também pode solicitar que deixemos de enviar comunicações de marketing, clicando no link de descadastro nos e-mails que enviamos ou entrando em contato conosco diretamente.

7. Alterações nesta Política

Podemos atualizar nossa Política de Privacidade periodicamente. Qualquer alteração será publicada nesta página, com a data de atualização.

8. Contato

Se você tiver alguma dúvida sobre nossa Política de Privacidade ou como tratamos suas informações pessoais, entre em contato conosco através do e-mail: contato@azul360parceiros.com.br
`;

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{title: string, text: string} | null>(null);

  const openModal = (title: string, text: string) => {
    setModalContent({ title, text });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <footer className="py-8 bg-black border-t border-white/5 text-center text-slate-600 text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} Azul 360º. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
              <button 
                onClick={() => openModal('Termos de Uso', TERMS_OF_USE)}
                className="hover:text-azul-400 transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => openModal('Políticas de Privacidade', PRIVACY_POLICY)}
                className="hover:text-azul-400 transition-colors"
              >
                Políticas de Privacidade
              </button>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={closeModal} 
          />
          
          <div className="relative bg-azul-900 border border-azul-500/20 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 className="text-xl font-bold text-white">{modalContent.title}</h3>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <pre className="whitespace-pre-wrap font-sans text-slate-300 text-sm leading-relaxed">
                {modalContent.text}
              </pre>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex justify-end">
               <button 
                onClick={closeModal}
                className="px-6 py-2 bg-azul-500 hover:bg-azul-600 text-white font-semibold rounded-lg transition-colors"
               >
                 Fechar
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
