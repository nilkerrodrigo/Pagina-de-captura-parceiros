
import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const CaptureForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hasCNPJ: '',
    role: '',
    worksWithCredit: '',
    revenue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*Azul 360º Parceiros*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Tem CNPJ:* ${formData.hasCNPJ}
*Atuação:* ${formData.role}
*Trabalha com Crédito:* ${formData.worksWithCredit}
*Faturamento:* ${formData.revenue}`;

    const phoneNumber = "5579991483823";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Simulate API call/Wait slightly before redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-azul-900/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto p-12 bg-azul-800/30 rounded-3xl border border-azul-500/20 text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Solicitação Iniciada!</h2>
            <p className="text-slate-300 text-lg mb-8 text-balance">
              Você será redirecionado para o WhatsApp para finalizar seu atendimento com nossa equipe&nbsp;de&nbsp;especialistas.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-azul-400 hover:text-azul-300 font-semibold transition-colors"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-azul-950 to-azul-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Conheça a plataforma
            </h2>
            <p className="text-lg text-slate-400 text-balance">
              Preencha o formulário e nossa equipe entrará&nbsp;em&nbsp;contato
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-azul-800/20 p-6 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm shadow-2xl">
            <div className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-azul-950/50 border border-azul-900/50 focus:border-azul-400 focus:ring-1 focus:ring-azul-400 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">E-mail</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-azul-950/50 border border-azul-900/50 focus:border-azul-400 focus:ring-1 focus:ring-azul-400 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-azul-950/50 border border-azul-900/50 focus:border-azul-400 focus:ring-1 focus:ring-azul-400 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              {/* CNPJ Radios */}
              <div>
                <span className="block text-sm font-medium text-slate-300 mb-3">Tem CNPJ?</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="hasCNPJ"
                      value="Sim"
                      checked={formData.hasCNPJ === 'Sim'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-azul-400 peer-checked:bg-azul-400 relative"></div>
                    <span className="text-slate-400 group-hover:text-white transition-colors">Sim</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="hasCNPJ"
                      value="Não"
                      checked={formData.hasCNPJ === 'Não'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-azul-400 peer-checked:bg-azul-400 relative"></div>
                    <span className="text-slate-400 group-hover:text-white transition-colors">Não</span>
                  </label>
                </div>
              </div>

              {/* Atuação Dropdown */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">Atuação</label>
                <div className="relative">
                  <select
                    required
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-azul-950/50 border border-azul-900/50 focus:border-azul-400 focus:ring-1 focus:ring-azul-400 rounded-lg px-4 py-3 text-white outline-none appearance-none transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500">Selecione uma opção</option>
                    <option value="Correspondente Bancário">Correspondente Bancário</option>
                    <option value="Consultor de Crédito">Consultor de Crédito</option>
                    <option value="Contador / Escritório Contábil">Contador / Escritório Contábil</option>
                    <option value="Corretor de Imóveis">Corretor de Imóveis</option>
                    <option value="Corretor de Seguros">Corretor de Seguros</option>
                    <option value="Limpa Nome / Rating">Limpa Nome / Rating</option>
                    <option value="Outros Serviços Financeiros">Outros Serviços Financeiros</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Works With Credit Radios */}
              <div>
                <span className="block text-sm font-medium text-slate-300 mb-3">Você já trabalha com crédito?</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="worksWithCredit"
                      value="Sim"
                      checked={formData.worksWithCredit === 'Sim'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-azul-400 peer-checked:bg-azul-400 relative"></div>
                    <span className="text-slate-400 group-hover:text-white transition-colors">Sim</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="worksWithCredit"
                      value="Não"
                      checked={formData.worksWithCredit === 'Não'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-azul-400 peer-checked:bg-azul-400 relative"></div>
                    <span className="text-slate-400 group-hover:text-white transition-colors">Não</span>
                  </label>
                </div>
              </div>

               {/* Revenue */}
               <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-slate-300 mb-2">Faturamento mensal?</label>
                <input
                  required
                  type="text"
                  name="revenue"
                  id="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full bg-azul-950/50 border border-azul-900/50 focus:border-azul-400 focus:ring-1 focus:ring-azul-400 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition-all"
                  placeholder="R$ 0,00"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative flex items-center justify-center px-8 py-4 mt-8 text-lg font-bold text-azul-950 transition-all duration-200 bg-azul-400 rounded-lg hover:bg-azul-500 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Contato
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <div className="text-center mt-6">
                 <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                   <LockIcon className="w-3 h-3" />
                   Seus dados estão protegidos e serão utilizados apenas para contato comercial
                 </p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default CaptureForm;
