import { motion } from "motion/react";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20 px-4">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            Investimento Inteligente
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tighter italic">
            ESCOLHA SEU <span className="text-yellow-500">PLANO.</span>
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-white font-black uppercase text-[12px] tracking-[0.4em] italic">
                Experimente sem risco
              </p>
              <p className="text-yellow-500 font-black uppercase text-[12px] tracking-[0.4em] italic">
                Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {/* Monthly Plan */}
          <div 
            className="group relative bg-zinc-900/50 border border-zinc-800 p-8 sm:p-10 lg:p-12 rounded-[40px] flex flex-col hover:border-zinc-700 transition-all"
          >
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4">Plano Trimestral</span>
            
            <div className="mb-10 flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-white">R$</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter">129,90</span>
              </div>
              <div className="mt-2">
                <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">3 meses de acesso</span>
              </div>
            </div>
            
            <ul className="space-y-4 sm:space-y-5 mb-12 flex-grow">
              {[
                "Crie sites/apps Ilimitados",
                "Buscador de Negócios Ilimitados",
                "Mensagens de Abordagem",
                "Hospedagem Inclusa",
                "Configuração de Domínio",
                "Suporte via WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-start sm:items-center gap-3 text-zinc-400 text-xs sm:text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 sm:mt-0 shrink-0" />
                  <span className="leading-tight sm:leading-normal">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://pay.cakto.com.br/dryi28r"
              className="w-full py-5 rounded-2xl bg-white text-black font-black text-sm uppercase text-center tracking-tighter hover:bg-zinc-200 transition-all inline-block"
            >
              Assinar Agora
            </a>
          </div>

          <div 
            className="relative bg-gradient-to-b from-yellow-400 to-amber-600 p-8 sm:p-10 lg:p-12 rounded-[40px] flex flex-col shadow-[0_0_40px_rgba(234,179,8,0.1)] md:shadow-[0_0_80px_rgba(234,179,8,0.15)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
              <div className="px-4 sm:px-6 py-2 bg-black text-yellow-400 text-[8px] sm:text-[10px] font-black uppercase rounded-full shadow-xl whitespace-nowrap">
                MELHOR CUSTO-BENEFÍCIO
              </div>
            </div>
            
            <span className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-4 opacity-80">Plano Vitalício</span>
            
            <div className="mb-10 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-4 h-6">
                <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20">
                  PAGAMENTO ÚNICO
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-white tracking-tighter">R$</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                  249,90
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-yellow-900/50 font-bold uppercase text-[10px] tracking-[0.2em] line-through italic">DE R$ 499,90</span>
                <span className="text-yellow-950 font-black uppercase text-xs tracking-widest">
                  ACESSO PARA SEMPRE
                </span>
                <span className="text-yellow-950 font-black uppercase text-[10px] tracking-widest">
                  50% DE DESCONTO
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 sm:space-y-5 mb-12 flex-grow">
              {[
                "Crie sites/apps Ilimitados",
                "Buscador de Negócios Ilimitados",
                "Mensagens de Abordagem",
                "Hospedagem Inclusa",
                "Configuração de Domínio",
                "Suporte VIP Prioritário",
                "Acesso Vitalício (Sem taxas)"
              ].map((item, i) => (
                <li key={i} className="flex items-start sm:items-center gap-3 text-yellow-950 text-xs sm:text-sm font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 sm:mt-0 shrink-0" />
                  <span className="leading-tight sm:leading-normal">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://pay.cakto.com.br/inicyma"
              className="w-full py-5 rounded-2xl bg-black text-white font-black text-sm uppercase text-center tracking-tighter hover:bg-zinc-900 transition-all shadow-xl inline-block"
            >
              Garantir Vitalício
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
