import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardList, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: "Diagnóstico Profundo",
    time: "1-2 semanas",
    desc: "Analisamos sua operação, finanças e processos para identificar gargalos e oportunidades."
  },
  {
    icon: ClipboardList,
    title: "Plano de Ação",
    time: "2-3 semanas",
    desc: "Criamos um plano estratégico com prioridades claras, metas e indicadores automatizados."
  },
  {
    icon: Zap,
    title: "Implementação",
    time: "Contínua",
    desc: "Trabalhamos lado a lado com sua equipe, treinando e acompanhando a execução."
  }
];

export function ProcessSection({ scrollToForm }) {
  return (
    <section id="processo" className="py-24 bg-background relative overflow-hidden border-t border-white/20">
      {/* Background Decorativo Grid (Estilo Hero/Engenharia) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner de Garantia (Refinado para Fundo Escuro) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 p-8 rounded-[2rem] bg-secondary/50 border border-primary/20 flex items-center gap-6 shadow-2xl backdrop-blur-sm group cursor-default hover:border-primary/60 hover:shadow-[0_0_40px_-10px_rgba(202,152,35,0.15)] hover:scale-[1.01] transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-primary/30 transition-colors duration-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="#CA9823" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-500">Garantia de Flexibilidade</h3>
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Cancelamento de contrato a qualquer momento, com aviso prévio de 30 dias</span>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Como Funciona</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Um processo simples e orientado a resultado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Linha conectora (Desktop) com Efeito de Luz */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-12 z-0 overflow-hidden rounded-full">
            <motion.div 
              animate={{ 
                x: ['-100%', '200%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            />
          </div>

          {STEPS.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.2 
              }}
              className="relative z-10 text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-secondary border border-primary/30 mx-auto mb-8 flex items-center justify-center shadow-2xl group-hover:bg-primary transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                <step.icon className="w-8 h-8 text-white group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <div className="bg-secondary/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/5 shadow-2xl hover:border-primary/40 hover:bg-secondary/50 transition-all duration-500 h-full transform group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/20">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 z-20">
                  <ArrowRight className="w-8 h-8 text-white/5 transition-colors group-hover:text-primary/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Adcional */}
        <div className="mt-48 text-center relative z-20">
            <button 
                onClick={() => scrollToForm(2)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all w-full sm:w-auto"
            >
                Entender como aplicar na minha empresa
            </button>
        </div>
      </div>
    </section>
  );
}
