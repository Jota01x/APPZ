import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Layout, Search, Zap, ShieldCheck, Database, Star, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Performance Extrema",
      description: "Sites que carregam instantaneamente com tecnologia de ponta para máxima conversão."
    },
    {
      icon: ShieldCheck,
      title: "Segurança Total",
      description: "Proteção avançada e certificados SSL automáticos inclusos em todos os seus projetos."
    },
    {
      icon: Layout,
      title: "Criações Profissionais",
      description: "Desenvolva sites profissionais e landing pages sem precisar de uma única linha de código."
    },
    {
      icon: Search,
      title: "Buscador de Negócios",
      description: "Localize leads qualificados em qualquer nicho ou região com apenas alguns cliques."
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-yellow-500 font-black text-[10px] tracking-[0.3em] uppercase">Recursos Premium</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-6 mb-8 uppercase tracking-tighter leading-none italic">
            TUDO QUE VOCÊ PRECISA PARA <span className="text-yellow-500">DOMINAR O MERCADO.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-[40px] bg-zinc-900/40 border border-zinc-800 hover:border-yellow-500/40 transition-all relative overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[60px] -z-10 group-hover:bg-yellow-500/10 transition-all" />
              <div className="w-16 h-16 bg-yellow-500 rounded-[24px] flex items-center justify-center text-black mb-8 shadow-[0_0_30px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] transition-all">
                <f.icon className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic leading-none">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium tracking-tight text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  const [couponsUsed, setCouponsUsed] = useState(47);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    setCouponApplied(true);
    setCouponsUsed(48);
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="text-center mb-16 lg:mb-20 px-4"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            Investimento Inteligente
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">ESCOLHA SEU PLANO.</h2>
          
          {!couponApplied && (
            <motion.button 
              onClick={handleApplyCoupon}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                boxShadow: [
                  "0 0 0px rgba(234,179,8,0)",
                  "0 0 30px rgba(234,179,8,0.4)",
                  "0 0 0px rgba(234,179,8,0)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="mt-4 mx-auto px-8 py-4 bg-yellow-500 text-black text-[12px] font-black uppercase rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 border-2 border-yellow-400"
            >
              <Zap className="w-5 h-5 fill-black" />
              Aplicar Cupom HEXA2026
            </motion.button>
          )}

          {/* Coupon Progress Bar */}
          <div className="mt-8 max-w-md mx-auto bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800">
            <div className="flex justify-between items-end mb-3">
              <div className="text-left">
                <span className="block text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-1">PROMOÇÃO COPA DO MUNDO 🏆</span>
                <span className="text-sm font-bold text-white uppercase tracking-tighter">CUPONS HEXA2026 DISPONÍVEIS</span>
              </div>
              <span className="text-xs font-black text-zinc-400 italic">{couponsUsed}/50</span>
            </div>
            <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
              <motion.div 
                initial={{ width: "92%" }}
                animate={{ width: `${(couponsUsed / 50) * 100}%` }}
                className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              />
            </div>
            <p className="mt-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              RESTAM APENAS <span className="text-yellow-500">{50 - couponsUsed} CUPONS</span> COM 51% DE DESCONTO
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {/* Monthly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              type: "spring", 
              stiffness: 40, 
              damping: 10 
            }}
            className="group relative bg-zinc-900/50 border border-zinc-800 p-8 sm:p-10 lg:p-12 rounded-[40px] flex flex-col hover:border-zinc-700 transition-all"
          >
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4">Plano Mensal</span>
            
            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-xl font-black text-white">R$</span>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter">129,90</span>
              <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">/ mês</span>
            </div>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {[
                "Sites Ilimitados",
                "Buscador de Negócios Ilimitados",
                "Mensagens de Abordagem",
                "Hospedagem Inclusa",
                "Configuração de Domínio",
                "Suporte via WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
            
            <a 
              href="https://pay.cakto.com.br/vxn878k"
              className="w-full py-5 rounded-2xl bg-white text-black font-black text-sm uppercase text-center tracking-tighter hover:bg-zinc-200 transition-all inline-block"
            >
              Assinar Agora
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.4, 
              type: "spring", 
              stiffness: 40, 
              damping: 10 
            }}
            className="relative bg-gradient-to-b from-yellow-400 to-amber-600 p-8 sm:p-10 lg:p-12 rounded-[40px] flex flex-col shadow-[0_0_80px_rgba(234,179,8,0.15)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
              <div className="px-4 sm:px-6 py-2 bg-black text-yellow-400 text-[8px] sm:text-[10px] font-black uppercase rounded-full shadow-xl whitespace-nowrap">
                MELHOR CUSTO-BENEFÍCIO
              </div>
            </div>
            
            <span className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-4 opacity-80">Plano Vitalício</span>
            
            <div className="mb-10 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-4 h-6">
                <AnimatePresence mode="wait">
                  {couponApplied ? (
                    <motion.div
                      key="badge-applied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2"
                    >
                      <span className="bg-black text-yellow-400 text-[10px] font-black px-3 py-1 rounded-full italic shadow-lg">CUPOM APLICADO</span>
                      <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">51% OFF</span>
                      <span className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase">PAGAMENTO ÚNICO</span>
                    </motion.div>
                  ) : (
                    <motion.span 
                      key="badge-single"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20"
                    >
                      PAGAMENTO ÚNICO
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-white tracking-tighter">R$</span>
                <motion.span 
                  key={couponApplied ? "applied" : "default"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none"
                >
                  {couponApplied ? "219,90" : "449,90"}
                </motion.span>
              </div>
              {couponApplied && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-yellow-950 font-black text-xl uppercase italic tracking-tighter mt-1"
                >
                  12x de 22,72
                </motion.div>
              )}
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-yellow-950 font-black uppercase text-xs tracking-widest">
                  {couponApplied ? "VALOR PROMOCIONAL" : "PREÇO REGULAR"}
                </span>
                {couponApplied && (
                  <span className="text-yellow-900/50 font-bold uppercase text-[10px] tracking-[0.2em] line-through italic">DE R$ 449,90</span>
                )}
              </div>
            </div>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {[
                "Sites Ilimitados",
                "Buscador de Negócios Ilimitados",
                "Mensagens de Abordagem",
                "Hospedagem Inclusa",
                "Configuração de Domínio",
                "Suporte VIP prioritário",
                "Acesso Vitalício (Sem taxas)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-yellow-950 text-sm font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  {item}
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="https://pay.cakto.com.br/3bufr2q_932226"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 10px 20px rgba(0,0,0,0.2)",
                  "0 20px 40px rgba(0,0,0,0.4)",
                  "0 10px 20px rgba(0,0,0,0.2)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full py-5 rounded-2xl bg-black text-white font-black text-sm uppercase text-center tracking-tighter hover:bg-zinc-900 transition-all shadow-2xl inline-block"
            >
              Garantir Vitalício
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
