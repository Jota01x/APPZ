import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Search, Layout, Database, ShieldCheck, Star } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <a href="#home" className="text-2xl font-black tracking-tighter font-brand">
              <motion.span 
                animate={{ 
                  color: ["#ffffff", "#facc15", "#eab308", "#facc15", "#ffffff"],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >APPZHUB</motion.span>
            </a>
          </div>
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#home" className="text-zinc-400 hover:text-white transition-colors">Início</a>
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Recursos</a>
            <a href="#comparison" className="text-zinc-400 hover:text-white transition-colors">Antes vs Depois</a>
            <a href="#method" className="text-zinc-400 hover:text-white transition-colors">Método</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</a>
          </nav>
          <div>
            <a href="#pricing" className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold hover:bg-zinc-800 transition-all text-white">
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 lg:pt-48 pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ 
             duration: 1, 
             ease: [0.16, 1, 0.3, 1]
           }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase max-w-[12ch] mx-auto sm:max-w-none">
            CRIE SITES EM <motion.span 
              animate={{ 
                color: ["#ffffff", "#facc15", "#eab308", "#facc15", "#ffffff"],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >2 MINUTOS</motion.span>{" "}
            <br className="hidden sm:block" />
            E VENDA PARA <span className="italic font-serif text-yellow-500 underline decoration-[6px] underline-offset-[10px] md:underline-offset-[16px]">NEGÓCIOS.</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-400 mb-12 font-medium leading-relaxed tracking-tight px-4 sm:px-0"
          >
            A estrutura completa para criar sites de elite e encontrar negócios qualificados em segundos. Pare de perder tempo e escale seu faturamento.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              href="#pricing" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 20px rgba(234,179,8,0.2)",
                  "0 0 50px rgba(234,179,8,0.6)",
                  "0 0 20px rgba(234,179,8,0.2)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full sm:w-auto bg-yellow-500 text-black px-8 py-5 sm:px-12 sm:py-6 rounded-2xl text-base sm:text-xl font-black uppercase tracking-tighter hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 whitespace-nowrap group"
            >
              GARANTIR ACESSO VITALÍCIO 
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[4] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
