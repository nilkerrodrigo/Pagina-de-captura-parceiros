import React from 'react';
import { AlertTriangle, Lock, Clock, GitPullRequest } from 'lucide-react';

const challenges = [
  {
    icon: Lock,
    title: "Acesso Limitado",
    description: "Trabalhar com poucas instituições financeiras reduz as possibilidades de aprovação e limita o crescimento.",
    accent: "text-red-400",
    bg: "hover:bg-red-500/5",
    border: "group-hover:border-red-500/30"
  },
  {
    icon: Clock,
    title: "Processos Manuais",
    description: "Gestão fragmentada de propostas, documentação e acompanhamento consome tempo e gera ineficiência.",
    accent: "text-amber-400",
    bg: "hover:bg-amber-500/5",
    border: "group-hover:border-amber-500/30"
  },
  {
    icon: GitPullRequest,
    title: "Falta de Especialização",
    description: "Conhecer critérios específicos de cada instituição e otimizar aprovações exige expertise dedicada.",
    accent: "text-orange-400",
    bg: "hover:bg-orange-500/5",
    border: "group-hover:border-orange-500/30"
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="py-24 bg-azul-900/30 border-y border-white/5 relative">
       {/* Decorative noise/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-azul-500/5 via-azul-950/0 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Desafios do mercado de crédito
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Identificamos os principais obstáculos que impedem sua operação de escalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl bg-azul-800/40 border border-white/5 transition-all duration-300 ${challenge.bg} ${challenge.border}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-azul-950 flex items-center justify-center mb-6 border border-white/10`}>
                <challenge.icon className={`w-6 h-6 ${challenge.accent}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {challenge.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;