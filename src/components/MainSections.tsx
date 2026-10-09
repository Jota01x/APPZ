import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Search, Layout, Database, ShieldCheck, Menu, X, Terminal, Cpu, Sparkles, ArrowRight, Activity } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Método", href: "#method" },
    { label: "Estrutura", href: "#infra" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-black/90 backdrop-blur-xl border-b border-red-500/20 shadow-[0_4px_30px_rgba(239,68,68,0.1)]" 
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter uppercase flex items-center group">
            <span className="text-white">
              PAGE<span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">VO</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-red-400 transition-all duration-200 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden p-2 text-white hover:text-red-400 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl p-8 flex flex-col border-l border-red-500/20"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-white uppercase tracking-tighter">
                PAGE<span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">VO</span>
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                aria-label="Fechar menu"
                className="p-2 text-white hover:text-red-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 my-auto">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-white uppercase tracking-tighter hover:text-red-400 transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-red-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
                    [ENTRAR]
                  </span>
                </a>
              ))}
              
              <a 
                href="#planos"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 py-5 bg-red-600 text-white text-center font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.5)] border border-red-400/30"
              >
                Ativar Acesso
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Hero = () => {
  const [activeSim, setActiveSim] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const mockLeads = [
    {
      company: "Clínica Odonto Prime",
      niche: "Saúde & Estética",
      status: "Sem Site Detectado",
      estValue: "R$ 1.000,00"
    },
    {
      company: "Auto Mecânica Velocity",
      niche: "Automotivo",
      status: "Site Antigo (Não Responsivo)",
      estValue: "R$ 1.000,00"
    },
    {
      company: "Studio Bella Arquitetura",
      niche: "Arquitetura & Design",
      status: "Sem Presença Digital",
      estValue: "R$ 1.000,00"
    }
  ];

  const handleSimulate = () => {
    setIsScanning(true);
    setTimeout(() => {
      setActiveSim((prev) => (prev + 1) % mockLeads.length);
      setIsScanning(false);
    }, 600);
  };

  return (
    <section id="home" className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-black">
      {/* Futuristic Cyber Matrix & Laser Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyber Grid with Red Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444412_1px,transparent_1px),linear-gradient(to_bottom,#ef444412_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_65%,transparent_100%)]" />
        
        {/* Radial Red Ambient Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-rose-700/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-red-800/8 rounded-full blur-3xl pointer-events-none" />

        {/* Laser Sweep Scanner Effect */}
        <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-[scanline_8s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Futuristic Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shadow-[0_0_10px_#ef4444]" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-red-400">
              SISTEMA ATIVO
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tighter uppercase mb-8 max-w-5xl mx-auto">
            CRIE A ESTRUTURA COMPLETA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_35px_rgba(239,68,68,0.5)] font-black">
              PARA VENDER SITES EM 2 MINUTOS
            </span>
          </h1>

          <div className="flex flex-col items-center max-w-3xl mx-auto border-t border-red-500/15 pt-8">
            <p className="text-base md:text-xl text-zinc-300 font-medium leading-relaxed tracking-tight mb-10 px-4">
              A estrutura definitiva com inteligência artificial para criar sites de elite e encontrar empresas qualificadas em segundos. <span className="text-white font-semibold">Foco total em escala e faturamento.</span>
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center w-full max-w-md px-4"
            >
              <motion.a 
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
                href="#planos"
                className="w-full group relative flex items-center justify-center bg-red-600 hover:bg-red-500 text-white py-5 px-8 rounded-xl transition-all duration-300 overflow-hidden border border-red-400/40"
              >
                {/* Cyber Laser Sweep Effect */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    x: ["-100%", "250%"]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] pointer-events-none"
                />
                <span className="text-lg md:text-2xl font-black uppercase tracking-tighter relative z-10 whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                  Ativar Acesso
                </span>
              </motion.a>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-[0.2em]">IA Exclusiva</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Templates Elite</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Futuristic Interactive Live Simulator HUD Card */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="w-full max-w-4xl mt-16 text-left relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-rose-500/20 to-red-600/30 rounded-3xl blur-xl opacity-75 pointer-events-none" />
            
            <div className="relative bg-zinc-950/90 border border-red-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                    RADAR DE PROSPECÇÃO IA · v2.4
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest bg-red-950/60 px-2.5 py-1 rounded border border-red-500/30">
                    {isScanning ? "ESCANEANDO REDE..." : "SISTEMA OPERACIONAL"}
                  </span>
                  <button
                    onClick={handleSimulate}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-red-600/20 hover:bg-red-600/40 text-red-300 hover:text-white rounded border border-red-500/40 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Activity className={`w-3.5 h-3.5 text-red-400 ${isScanning ? "animate-spin" : ""}`} />
                    Simular Busca
                  </button>
                </div>
              </div>

              {/* Simulated Detection Body */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">EMPRESA LOCALIZADA:</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-red-500 shrink-0" />
                      {mockLeads[activeSim].company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                      <span>Nicho: <strong className="text-zinc-200">{mockLeads[activeSim].niche}</strong></span>
                      <span>·</span>
                      <span>Status: <strong className="text-red-400">{mockLeads[activeSim].status}</strong></span>
                    </div>
                  </div>

                  {/* High Tech Steps in Terminal */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-zinc-900/40 border border-red-500/15">
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1">01. PROSPECTOR</span>
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500" /> Lead Capturado
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/40 border border-red-500/15">
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1">02. BUILDER</span>
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500" /> Site Pronto em 2m
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/40 border border-red-500/15">
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1">03. FECHAMENTO</span>
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500" /> Pitch Personalizado
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Ticket & Value */}
                <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
                      VALOR SUGERIDO DE VENDA
                    </span>
                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      {mockLeads[activeSim].estValue}
                    </div>
                    <span className="text-[11px] text-zinc-400 block mt-1">
                      Retorno médio por cliente fechado com a metodologia.
                    </span>
                  </div>

                  <a 
                    href="#planos"
                    className="mt-6 w-full py-3 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest text-center rounded-lg transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2"
                  >
                    Começar Agora
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
