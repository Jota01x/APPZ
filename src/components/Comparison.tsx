import { motion } from "motion/react";
import { X, Check, ArrowRight, Clock, Search, Layout, Target } from "lucide-react";

export const Comparison = () => {
  const beforeAfter = [
    {
      title: "Encontrar Clientes",
      before: "Passar o dia inteiro procurando quem quer comprar e só receber 'não'.",
      after: "Tenha uma lista pronta de empresas que precisam do seu serviço com um clique.",
      icon: Search
    },
    {
      title: "Seu Site no Ar",
      before: "Ficar travado por meses por não saber programar ou não ter dinheiro para agências.",
      after: "Tenha seu site profissional pronto em 2 minutos, sem digitar uma única linha de código.",
      icon: Layout
    },
    {
      title: "Fechar Negócios",
      before: "Falar com muita gente e não vender nada porque sua oferta parece amadora.",
      after: "Passe confiança imediata com um design de elite que faz o cliente querer fechar na hora.",
      icon: Target
    }
  ];

  return (
    <section id="comparison" className="py-20 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-yellow-500 font-black text-[10px] tracking-[0.3em] uppercase">O Jogo Mudou</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mt-6 mb-8 uppercase tracking-tighter leading-none italic">
            ANTES VS DEPOIS
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Veja como a APPZHUB transforma o seu fluxo de trabalho de prospecção e vendas, saindo do manual para o automático.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {beforeAfter.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/30 border border-zinc-800 rounded-[32px] overflow-hidden hover:border-yellow-500/30 transition-all"
            >
              <div className="p-8 border-b border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h3>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="relative pl-8 border-l border-red-500/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
                    <X className="w-2 h-2 text-red-500" />
                  </div>
                  <span className="block text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">Sem APPZHUB</span>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.before}</p>
                </div>

                <div className="relative pl-8 border-l border-yellow-500/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-2 h-2 text-yellow-500" />
                  </div>
                  <span className="block text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-2">Com APPZHUB</span>
                  <p className="text-zinc-200 text-sm font-medium leading-relaxed">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-yellow-500/20 via-zinc-800 to-amber-600/20 rounded-[40px]"
        >
          <div className="bg-zinc-950 p-8 sm:p-12 lg:p-16 rounded-[39px] flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic">
                A LIBERDADE QUE VOCÊ <br className="hidden sm:block" /> SEMPRE BUSCOU.
              </h3>
              <p className="text-zinc-500 text-base sm:text-lg font-medium leading-relaxed mb-8">
                Não é apenas sobre uma ferramenta, é sobre escalar seu negócio de prospecção e vendas sem depender de processos lentos e manuais.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white font-black text-lg">+90%</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Mais Rapidez</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white font-black text-lg">+3x</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Conversão</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.a 
              href="#pricing" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(234,179,8,0.2)",
                  "0 0 50px rgba(234,179,8,0.4)",
                  "0 0 20px rgba(234,179,8,0.2)"
                ]
              }}
              transition={{ 
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="w-full sm:w-auto bg-yellow-500 text-black px-10 py-5 rounded-2xl text-base font-black uppercase tracking-tighter hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 whitespace-nowrap group"
            >
              QUERO ESCALAR AGORA <ArrowRight className="w-5 h-5 stroke-[4] group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
