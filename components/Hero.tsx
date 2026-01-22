
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-6 pb-20 lg:pt-20 lg:pb-32 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/ChatGPT-Image-22-de-jan.-de-2026-12_13_44.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-60 md:opacity-70"
        />
        {/* Lighter Gradient Overlay to show more image */}
        <div className="absolute inset-0 bg-gradient-to-b from-azul-950/80 via-azul-950/30 to-azul-950" />
      </div>

      {/* Moving Lights Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Orb */}
        <div className="absolute top-0 -left-20 w-72 h-72 md:w-96 md:h-96 bg-azul-500/30 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen opacity-70" />
        
        {/* Middle Right Orb */}
        <div className="absolute top-1/3 -right-20 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-azul-400/20 rounded-full blur-[80px] md:blur-[120px] animate-blob-reverse animation-delay-2000 mix-blend-screen opacity-60" />
        
        {/* Bottom Center Orb */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 md:w-[35rem] md:h-[35rem] bg-blue-600/30 rounded-full blur-[80px] md:blur-[120px] animate-blob-slow animation-delay-4000 mix-blend-screen opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Logo Section */}
        <div className="mb-12 flex justify-center">
           <img 
             src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/parceiros-scaled.png" 
             alt="Azul 360º Parceiros Logo" 
             className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]"
           />
        </div>

        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-azul-900/70 border border-azul-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-azul-400 animate-pulse" />
              <span className="text-azul-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                Plataforma Completa de Crédito
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-balance">
              A plataforma que <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-azul-400 to-azul-500 filter drop-shadow-none">
                profissionaliza
              </span>{' '}
              sua operação&nbsp;de&nbsp;crédito
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium text-balance">
              Mesa de crédito especializada, múltiplas instituições financeiras e serviços integrados em uma única&nbsp;plataforma.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
              <button
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-azul-950 transition-all duration-200 bg-azul-400 rounded-lg hover:bg-azul-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azul-400 focus:ring-offset-azul-950 w-full sm:w-auto shadow-xl"
              >
                Conhecer a Plataforma
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-slate-200 font-medium">
              <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-azul-400" />
                <span>Infraestrutura Profissional</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-azul-400" />
                <span>Tecnologia Integrada</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-azul-400" />
                <span>Suporte Especializado</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
