
import React from 'react';
import { Landmark, Activity, Layers, Monitor, GraduationCap, Headphones } from 'lucide-react';

const solutions = [
  {
    icon: Landmark,
    title: "Mesa de Crédito Especializada",
    description: "Acesso a múltiplas instituições financeiras com análise estratégica de cada proposta por especialistas do mercado."
  },
  {
    icon: Activity,
    title: "Diagnóstico Inteligente",
    description: "Análise completa de perfil, restrições e capacidade creditícia com tecnologia Credit IA."
  },
  {
    icon: Layers,
    title: "Serviços Integrados",
    description: "Solução completa incluindo limpa nome, rating bancário, seguros, contabilidade e regularização documental."
  },
  {
    icon: Monitor,
    title: "Plataforma Digital",
    description: "Gestão centralizada com CRM, acompanhamento em tempo real e automação de processos."
  },
  {
    icon: GraduationCap,
    title: "Capacitação Contínua",
    description: "Universidade completa com treinamentos sobre produtos, técnicas de vendas e marketing digital."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe especializada disponível para suporte técnico, operacional e estratégico."
  }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-azul-950 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-azul-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-azul-400 font-semibold tracking-wide uppercase text-sm mb-4 block">
            Introdução
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            A solução completa para sua operação
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed text-balance">
            A <span className="text-white font-medium">Azul 360º Parceiros</span> oferece infraestrutura profissional, expertise especializada e tecnologia integrada para otimizar resultados no mercado&nbsp;de&nbsp;crédito.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-gradient-to-b from-azul-800/50 to-azul-900/50 border border-azul-500/10 hover:border-azul-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-azul-500/10 flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-azul-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-balance">
                {solution.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
