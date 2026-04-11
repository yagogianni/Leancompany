import React from 'react';
import { motion } from 'framer-motion';

const METRICS = [
  { value: "80%", label: "Aumento da produtividade" },
  { value: "40%", label: "Redução dos custos operacionais" },
  { value: "60%", label: "Redução dos prazos de entrega" },
  { value: "46%", label: "Redução dos estoques parados" },
];

export function ResultsSection({ scrollToForm }) {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden bg-background border-t border-white/20">
      {/* Background Decorators - Estilo 21st.dev Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Mega Glow Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Resultados que Entregamos</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">Métricas reais medidas em nossos +130 projetos de consultoria implementados.</p>
        </div>
        
        {/* KPI Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {METRICS.map((metric, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/80"
            >
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-200 mb-4 drop-shadow-md">
                {metric.value}
              </div>
              <p className="text-slate-300 font-medium text-lg leading-tight">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Milestones / Social Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border/50 text-center">
          <div>
            <p className="text-4xl font-bold text-foreground mb-1">130+</p>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Empresas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground mb-1">7 anos</p>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">De História</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground mb-1">98%</p>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Satisfação</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground mb-1">24</p>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Clientes Ativos</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToForm(2)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all w-full sm:w-auto"
          >
            Fazer Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
