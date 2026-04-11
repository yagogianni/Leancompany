import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: "Qual é o investimento necessário?", a: "O investimento varia de acordo com o escopo e tamanho real do problema. Temos uma premissa inegociável: focamos em projetos que se pagam sozinhos rapidamente através dos ganhos e das economias que nós mesmos ajudamos a gerar na sua operação." },
  { q: "E se eu já tenho um ERP, perco algo?", a: "Pelo contrário! Trabalhamos integrando metodologias Lean e de processos com exatamente as ferramentas e softwares que você já utiliza hoje, potencializando os dados que eles geram sem forçar migrações gigantes." },
  { q: "Vocês atendem empresas fora do Paraná?", a: "Com certeza. Atendemos empresas espalhadas em todo o Brasil e no exterior, implementando nosso modelo com consultoria híbrida ou 100% remota prezando pelo mesmíssimo nível de qualidade da presencial." },
  { q: "Como garantem que as melhorias serão permanentes?", a: "Nossa missão primária não é fazer o trabalho pela sua equipe, e sim treiná-los taticamente. Sua empresa ganhará autonomia vitalícia através de padronização inteligente e do acompanhamento diário rotineiro que deixamos documentado." },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Perguntas Frequentes</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-colors hover:border-primary/40 shadow-sm">
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-800 text-lg mr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-primary/10 text-primary' : 'text-slate-500'}`}>
                   <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
