import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, EyeOff, BrainCircuit, Users, Settings2 } from 'lucide-react';

const DORES = [
  { icon: TrendingDown, title: "A empresa até vende bem", desc: "Mas a margem de lucro não reflete o volume. Custos altos engolem os ganhos." },
  { icon: AlertCircle, title: "Custos sempre altos", desc: "Despesas e estrutura que incham e sobem de forma desgovernada ao longo do mês." },
  { icon: EyeOff, title: "Falta de clareza", desc: "Você não tem certeza para onde o dinheiro está indo. Falta de indicadores." },
  { icon: BrainCircuit, title: "Decisões por intuição", desc: "Gerenciamento sem dados concretos, guiado apenas pelo 'feeling' do momento." },
  { icon: Users, title: "Equipe dependente", desc: "Nada funciona ou avança sem que você esteja ativamente aprovando ou instruindo." },
  { icon: Settings2, title: "Processos bagunçados", desc: "Retrabalho constante. Fazer a mesma tarefa duas vezes destrói a produtividade." }
];

export function ProblemSection({ scrollToForm }) {
  return (
    <section id="problema" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Decorativo Grid (Estilo Referência) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1F2C41] mb-6 leading-tight tracking-tight">Sua empresa está travada por falta de clareza?</h2>
          <p className="text-[#1F2C41]/70 text-lg">Se você trabalha demais, apaga incêndios todos os dias e mesmo assim a margem não cresce, o problema não está nas vendas — <strong className="text-[#1F2C41]">está na operação</strong>.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DORES.map((dor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_-10px_rgba(31,44,65,0.1)] hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(31,44,65,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-primary/5 transition-colors"></div>
              
              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1F2C41] flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <dor.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2C41] leading-tight">{dor.title}</h3>
              </div>
              <p className="text-[#1F2C41]/70 text-sm leading-relaxed relative z-10">{dor.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToForm(2)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all w-full sm:w-auto"
          >
            Realizar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
