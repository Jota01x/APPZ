import { motion, AnimatePresence } from "motion/react";
import { Zap, Target, Search, Layout, MessageSquareText, Plus, Minus, ShieldCheck, Globe, Server, Lock, Cpu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "COMO O PAGEVO AJUDA NA MINHA PRODUTIVIDADE?",
      a: "O PAGEVO automatiza as tarefas repetitivas de prospecção e criação, permitindo que você escale seus resultados sem precisar trabalhar mais horas por dia. É a inteligência artificial trabalhando para o seu crescimento exponencial."
    },
    {
      q: "NÃO TENHO EXPERIÊNCIA NA ÁREA, CONSIGO COMEÇAR?",
      a: "Sim, nossa plataforma foi desenvolvida para ser intuitiva. Removemos todas as complexidades técnicas para que você foque no que traz retorno real para o seu negócio, mesmo começando absolutamente do zero."
    },
    {
      q: "O BUSCADOR REALMENTE ENCONTRA OPORTUNIDADES QUALIFICADAS?",
      a: "Com certeza. Nossa ferramenta com radar neural identifica empresas locais e regionais que ainda não possuem site ou possuem plataformas obsoletas, gerando abordagens com altíssima taxa de resposta e conversão."
    },
    {
      q: "QUAL O DIFERENCIAL DA METODOLOGIA PAGEVO?",
      a: "Não entregamos apenas uma ferramenta, mas sim um ecossistema completo validado por centenas de membros. Você terá acesso a processos validados que transformam esforço em resultados previsíveis e contratos recorrentes."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle Crimson Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440a_1px,transparent_1px),linear-gradient(to_bottom,#ef44440a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            <span className="text-red-400 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.3em]">
              SUPORTE & DÚVIDAS FREQUENTES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            RESPOSTAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">DIRETAS.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Tudo o que você precisa saber para começar a operar a tecnologia da PAGEVO hoje mesmo.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {questions.map((item, i) => (
            <div 
              key={i} 
              className="border border-white/10 hover:border-red-500/40 rounded-2xl bg-zinc-950/70 backdrop-blur-md transition-all overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left p-6 gap-4 cursor-pointer"
              >
                <span className="font-black text-sm md:text-base text-zinc-100 uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center transition-all shrink-0 ${
                  openIndex === i ? "bg-red-600 border-red-600 rotate-180 shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "bg-zinc-900"
                }`}>
                  <Plus className={`w-4 h-4 text-white transition-transform ${openIndex === i ? "hidden" : "block"}`} />
                  <Minus className={`w-4 h-4 text-white transition-transform ${openIndex === i ? "block" : "hidden"}`} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed px-6 pb-6 pt-1 border-t border-red-500/10">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const ProcessSteps = () => {
  const steps = [
    {
      title: "Passo 01",
      label: "Encontra a Empresa",
      description: "Nosso radar neural localiza automaticamente estabelecimentos comerciais e serviços sem site ou com presença digital fraca na sua região.",
      icon: Search
    },
    {
      title: "Passo 02",
      label: "Gera o Site em 2 Minutos",
      description: "A inteligência artificial estrutura páginas profissionais, de alta conversão e 100% responsivas para celulares e computadores.",
      icon: Layout
    },
    {
      title: "Passo 03",
      label: "Pitch de Fechamento",
      description: "Gera automaticamente mensagens personalizadas de abordagem pelo WhatsApp com gatilhos de fechamento de alto impacto.",
      icon: MessageSquareText
    }
  ];

  return (
    <section id="method" className="relative py-32 bg-[#060606] border-y border-red-500/15 overflow-hidden">
      {/* Cyber Grid with Red Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440c_1px,transparent_1px),linear-gradient(to_bottom,#ef44440c_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[250px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            <span className="text-red-400 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.3em]">
              O QUE É A PAGEVO?
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
            UMA FERRAMENTA QUE FAZ <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              TODO O PROCESSO PRA VOCÊ
            </span>
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            A estrutura automatizada que você precisa para faturar com escala
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="bg-zinc-950/80 border border-red-500/20 hover:border-red-500/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 group relative overflow-hidden backdrop-blur-xl hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_35px_rgba(239,68,68,0.15)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity">
                <span className="text-8xl font-black tracking-tighter text-red-500">0{i+1}</span>
              </div>
              
              <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/30 group-hover:scale-110 group-hover:bg-red-600/20 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <step.icon className="w-7 h-7 text-red-400" />
              </div>
              
              <span className="text-red-400 text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-3 block">
                {step.title}
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {step.label}
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Infrastructure = () => {
  return (
    <section id="infra" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[250px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          <span className="text-red-400 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.3em]">
            INFRAESTRUTURA COMPLETA
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
          DOMÍNIO E HOSPEDAGEM <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            JÁ INCLUÍDOS.
          </span>
        </h2>
        <p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-16 px-4">
          Você não precisa se preocupar com custos extras ou configurações complexas. Toda a estrutura do site já está pronta para ficar <span className="text-white font-bold">ativa para sempre</span> sem mensalidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              title: "Domínio Próprio", 
              desc: "Sua identidade digital exclusiva inclusa e vinculada sem complicação técnica.", 
              icon: Globe,
              stat: "DNS AUTOMÁTICO"
            },
            { 
              title: "Hospedagem de Alta Velocidade", 
              desc: "Servidores em nuvem de alto desempenho com CDN global e uptime garantido.", 
              icon: Server,
              stat: "99.99% UPTIME"
            },
            { 
              title: "Segurança SSL Avançada", 
              desc: "Certificados criptográficos de segurança ativos automaticamente em todas as páginas.", 
              icon: Lock,
              stat: "CRIPTOGRAFIA 256-BIT"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-8 sm:p-10 bg-zinc-950/70 border border-red-500/20 hover:border-red-500/50 rounded-3xl transition-all duration-300 text-left group backdrop-blur-md shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-red-950/60 rounded text-red-300 border border-red-500/25">
                  {item.stat}
                </span>
              </div>
              
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3">
                {item.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-red-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-20">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white mb-6 inline-flex items-center">
              PAGE<span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">VO</span>
            </a>
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-sm mb-8">
              Aceleramos profissionais e agências a dominar a criação e venda de sites com tecnologia de ponta e processos validados.
            </p>
          </div>

          <div>
            <span className="text-white text-xs font-black uppercase tracking-[0.25em] mb-6 block font-mono">
              [NAVEGAÇÃO]
            </span>
            <ul className="space-y-3.5">
              {["Início", "Método", "Estrutura", "Planos", "FAQ"].map(item => (
                <li key={item}>
                  <a 
                    href={item === "Planos" ? "#planos" : item === "Estrutura" ? "#infra" : `#${item.toLowerCase()}`} 
                    className="text-zinc-400 hover:text-red-400 font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-white text-xs font-black uppercase tracking-[0.25em] mb-6 block font-mono">
              [LEGAL]
            </span>
            <ul className="space-y-3.5">
              {["Privacidade", "Termos de Uso"].map(item => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-zinc-400 hover:text-red-400 font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-mono font-bold uppercase tracking-wider text-center sm:text-left">
            © 2026 PAGEVO INC. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-3 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              AMBIENTE 100% SEGURO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
