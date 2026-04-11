import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, GitMerge, Settings, LineChart, Target, FileSpreadsheet } from 'lucide-react';

const SERVICES = [
  { icon: PieChart, title: "Gestão Financeira", desc: "Clareza nos números, gestão de fluxo de caixa e planejamento orçamentário rígido para aumentar margem." },
  { icon: GitMerge, title: "Gestão de Processos", desc: "Estruturação e padronização operacional para garantir que a empresa rode perfeitamente sem a sua presença." },
  { icon: Settings, title: "Gestão da Produção", desc: "Eliminação total de desperdícios e aumento de produtividade baseado na forte filosofia Lean." },
  { icon: LineChart, title: "Gestão Comercial", desc: "Estruturação de funil de vendas, sistemas de CRM e metodologias para um crescimento altamente previsível." },
  { icon: FileSpreadsheet, title: "Indicadores e Automação", desc: "Dashboards inteligentes atualizados em tempo real para tomada de decisões cirúrgicas baseadas em dados." },
  { icon: Target, title: "Planejamento Estratégico", desc: "Desenho da visão de longo prazo e desdobramento de metas cruciais para alinhamento tático do negócio." },
];

export function ServicesSection({ scrollToForm }) {
  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">O que fazemos na sua empresa</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(202,152,35,0.8)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl bg-secondary/30 backdrop-blur-md border border-primary/20 shadow-[0_4px_20px_rgba(202,152,35,0.15)] overflow-hidden hover:bg-secondary/40 hover:border-primary/80 hover:shadow-[0_0_35px_rgba(202,152,35,0.4)] hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              {/* Efeito de Vidro e Brilho no Card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
              
              <srv.icon className="w-14 h-14 text-primary mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{srv.title}</h3>
              <p className="text-slate-300 relative z-10 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => scrollToForm(2)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all w-full sm:w-auto"
          >
            Quero Organizar Minha Empresa
          </button>
        </div>
      </div>
    </section>
  );
}
