import { motion } from "motion/react";
import { Check, ShieldCheck, Zap, Lock, Sparkles, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const benefits = [
    { title: "Crie sites Ilimitados", desc: "Sem travas ou limites de criação para você e seus clientes" },
    { title: "Buscador de Empresas Ilimitados", desc: "Encontre oportunidades qualificadas em qualquer cidade" },
    { title: "Mensagens de Abordagem", desc: "Copys prontas de alta conversão para fechar via WhatsApp" },
    { title: "Hospedagem Inclusa", desc: "Servidores rápidos de alta performance sem mensalidades" },
    { title: "Domínio Incluso", desc: "Estrutura completa pronta para publicação imediata" },
    { title: "Suporte VIP Prioritário", desc: "Atendimento dedicado para tirar dúvidas operacionais" },
    { title: "Sem Taxas de Renovação", desc: "Acesso contínuo sem surpresas ou cobranças futuras" }
  ];

  return (
    <section id="planos" className="relative py-32 bg-black overflow-hidden">
      {/* Futuristic Background Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440f_1px,transparent_1px),linear-gradient(to_bottom,#ef44440f_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
            <span className="text-red-400 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.3em]">
              OFERTA EXCLUSIVA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            INVISTA EM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">VOCÊ.</span>
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            EXPERIMENTE SEM RISCO · GARANTIA TOTAL DE 7 DIAS
          </p>
        </div>

        {/* New Futuristic Split-Terminal Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative group"
        >
          {/* Subtle Ambient Crimson Halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-rose-600/10 to-red-600/20 rounded-[36px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative bg-zinc-950/90 border border-red-500/25 rounded-[32px] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Plan Details & Structured Benefits Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/40 inline-flex items-center gap-1.5">
                      <Zap className="w-3 h-3 fill-white" />
                      Acesso Vitalício
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                      [PACOTE COMPLETO]
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                    Plano Elite
                  </h3>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                    Tudo o que você precisa em uma única plataforma para criar, prospectar e escalar vendas de sites sem custos adicionais.
                  </p>
                </div>

                {/* Structured Benefits List */}
                <div className="space-y-3.5 mb-8">
                  {benefits.map((item, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-all flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-red-600/15 border border-red-500/40 flex items-center justify-center mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.25)] group-hover/item:scale-110 transition-transform">
                        <Check className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-zinc-200 font-bold text-xs sm:text-sm uppercase tracking-wider block">
                          {item.title}
                        </span>
                        <span className="text-zinc-500 text-xs mt-0.5 block">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guarantee Banner */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-200 font-bold uppercase tracking-wider">
                    Garantia Incondicional de 7 Dias
                  </p>
                </div>
              </div>

              {/* Right Column: High-Impact Investment & Checkout Card */}
              <div className="lg:col-span-5">
                <div className="relative bg-zinc-900/80 border-2 border-red-500/35 rounded-2xl p-6 sm:p-8 md:p-10 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col justify-between overflow-hidden">
                  
                  {/* Decorative Scanline Beam */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-[laserSweep_3s_linear_infinite]" />

                  {/* Header in Card */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-red-400 block mb-2">
                      VALOR PROMOCIONAL DE LANÇAMENTO
                    </span>
                    <span className="text-zinc-500 font-bold uppercase text-xs md:text-sm tracking-[0.25em] line-through block">
                      De R$ 397,00 por
                    </span>
                  </div>

                  {/* Pricing Hero */}
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-xl sm:text-2xl font-black text-white">R$</span>
                      <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                        197
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white">,00</span>
                    </div>
                    <span className="text-red-400 font-black uppercase text-xs sm:text-sm tracking-widest">
                      Ou 12x de R$ 20,99
                    </span>
                  </div>

                  {/* Primary CTA Button */}
                  <motion.a 
                    href="https://checkout.applyfy.com.br/checkout/cmr0ylc3d1mc301oi7r5y5slw?code=4wemx24&offer=2ZALM8Y"
                    animate={{ 
                      scale: [1, 1.015, 1],
                      boxShadow: [
                        "0 0 10px rgba(239,68,68,0.3)", 
                        "0 0 35px rgba(239,68,68,0.6)", 
                        "0 0 10px rgba(239,68,68,0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 2.8, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="group relative w-full py-5 px-6 bg-red-600 text-white font-black uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] rounded-xl transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] active:scale-[0.98] block mb-6 overflow-hidden text-center border border-red-400/40"
                  >
                    {/* Laser Sweep Shimmer */}
                    <motion.div 
                      initial={false}
                      animate={{ 
                        x: ["-100%", "200%"]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] pointer-events-none"
                    />
                    <span className="relative z-10 whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2">
                      Ativar Acesso
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>

                  {/* Proof & Security Badges */}
                  <div className="space-y-3 pt-2 border-t border-white/5">
                    <div className="flex items-center justify-center gap-2 text-zinc-300">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shadow-[0_0_8px_#ef4444]" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                        +1000 Membros Ativos
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-zinc-500 text-[10px] font-mono uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-red-400" /> Compra Segura
                      </span>
                      <span>·</span>
                      <span>Acesso Imediato</span>
                      <span>·</span>
                      <span>Garantia de 7 Dias</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
