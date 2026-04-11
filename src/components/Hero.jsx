import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decorators - Estilo 21st.dev Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16 md:pb-40">
        
        {/* Logo Recreated from User request */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start text-5xl md:text-6xl font-semibold text-[#8C93A1] tracking-tighter ml-6">
            LeanC
            <div className="relative inline-flex items-start">
              o
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" className="absolute -top-1 -right-6 w-6 h-6"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              <span className="absolute top-0 -right-12 text-[10px] border-2 border-current rounded-full w-4 h-4 flex items-center justify-center font-bold">R</span>
            </div>
          </div>
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.35em] text-[#6A7382] mt-2 ml-4 relative -left-1">Soluções em Gestão</span>
        </motion.div>
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide">PMEs: Aumente sua Lucratividade</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sua empresa fatura,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
            mas o dinheiro some na operação?
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Consultoria especializada em Gestão Financeira, Processos e Produção. 
          Aplicamos metodologias Lean para mais de 130 empresas que hoje multiplicam seus lucros estruturalmente.
        </motion.p>



      </div>
    </section>
  );
}
