import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Camila Fagá",
    company: "GVR Indústria de Plásticos e Metais",
    text: "Capacidade e determinação definem o trabalho da Lean Company. Sempre atentos às reais necessidades da empresa, realizam o trabalho de forma impecável, apresentando soluções de crescimento.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=camila"
  },
  {
    name: "Miro Capdeboscq",
    company: "MTK Indústria e Comércio de Peças",
    text: "Posso dizer com certeza que estou admirado com o nível de qualidade dos serviços prestados. Trata-se de uma equipe competente, de alto nível profissional e ético.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=miro"
  }
];

const LOGOS = [
  "Amifec", "Eletroluz", "FX Distribuidora", "Kimesa", "Harmony", 
  "Master", "Tata Martello", "Graf", "Perfect Way", "Lopes"
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorativo Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-28">
          {TESTIMONIALS.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative group hover:-translate-y-2 transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky-400 text-sky-400" />
                ))}
              </div>

              <p className="text-[#1F2C41]/80 text-lg leading-relaxed mb-8 italic">
                "{test.text}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                <img src={test.avatar} alt={test.name} className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover" />
                <div>
                  <h4 className="text-xl font-bold text-[#1F2C41]">{test.name}</h4>
                  <p className="text-sm text-sky-600 font-medium uppercase tracking-wider">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos das Empresas (Estilo Referência) */}
        <div className="pt-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Empresas que confiam no nosso trabalho</h5>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Amifec", style: "font-black tracking-tighter italic text-2xl" },
              { name: "Eletroluz", style: "font-bold tracking-widest uppercase text-lg border-y border-[#1F2C41]/20 px-2" },
              { name: "FX DISTRIBUIDORA", style: "font-black tracking-tighter text-xl italic" },
              { name: "Kimesa", style: "font-serif font-bold italic text-2xl" },
              { name: "harmony", style: "font-light tracking-[0.2em] lowercase text-xl" },
              { name: "Master", style: "font-black uppercase tracking-tight text-xl" },
              { name: "TATA MARTELLO", style: "font-medium tracking-[0.3em] uppercase text-sm border-t border-[#1F2C41]/40 pt-1" },
              { name: "graf", style: "font-black tracking-tighter text-3xl lowercase" },
              { name: "Perfect Way", style: "font-serif italic text-xl" },
              { name: "LOPES", style: "font-black tracking-widest uppercase text-xl bg-[#1F2C41] text-white px-3 py-1" }
            ].map((logo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-center h-24 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
              >
                <span className={`${logo.style} text-[#1F2C41]/40 group-hover:text-[#1F2C41] transition-colors duration-500`}>
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
