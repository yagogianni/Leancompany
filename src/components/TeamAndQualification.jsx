import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function TeamAndQualification({ scrollToForm }) {
  return (
    <section id="equipe" className="py-24 bg-[#F8FBFE] border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Equipe e Missão */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2C41] mb-8 tracking-tight">Para quem é a<br/> Lean Company?</h2>
            <p className="text-[#1F2C41]/80 text-lg leading-relaxed mb-8 border-l-4 border-primary pl-6">
              <strong className="text-[#1F2C41]">Nossa Missão:</strong> Desenvolver pessoas e empresas de uma forma sustentável com base na filosofia lean. Apontar e resolver as necessidades cruciais de cada cliente de forma rápida, eficiente e definitiva.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-[#1F2C41] text-xl mb-4">A transformação entrega:</h4>
              {[
                'Clareza financeira para decidir com segurança.',
                'Processos organizados que rodam de forma autônoma.',
                'Indicadores automatizados em tempo real.',
                'Previsibilidade de faturamento livre de "achismos".'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#1F2C41]/80">
                  <div className="w-2 h-2 rounded-full bg-primary/80" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Espaço Mockup Embutido Fotografia */}
            <div className="aspect-[4/3] rounded-3xl bg-white/60 border border-[#1F2C41]/10 shadow-xl flex items-center justify-center p-8 overflow-hidden relative">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
               <div className="text-[#1F2C41]/60 text-center font-medium z-10 flex flex-col items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-white border border-[#1F2C41]/20 shadow-sm flex items-center justify-center">📷</div>
                 <span>Sua Foto Profissional da Equipe aqui</span>
               </div>
            </div>
          </div>
        </div>

        {/* Qualificação do Cliente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl border border-emerald-600/20 bg-emerald-50 shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-700 mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600"/>
              </div>
              Para quem é
            </h3>
            <ul className="space-y-5">
              {[
                "Empresas que faturam acima de R$ 1 milhão/ano",
                "Donos que sentem que a empresa depende demais deles",
                "Gestores frustrados com retrabalho e desperdício",
                "Quem quer crescer, mas falta clareza no próximo passo",
                "Empresas que querem se preparar para o futuro",
                "Quem já tentou outras soluções e não funcionou"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-950/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl border border-rose-600/20 bg-rose-50 shadow-sm">
            <h3 className="text-2xl font-bold text-rose-700 mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-rose-600"/>
              </div>
              Para quem não é
            </h3>
            <ul className="space-y-5">
              {[
                "Quem busca soluções mágicas e instantâneas",
                "Empresas que não querem mudar processos",
                "Gestores que não aceitam olhar os problemas de frente",
                "Quem espera resultados sem esforço",
                "Empresas sem disposição para envolver a equipe"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-rose-950/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToForm(2)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all w-full sm:w-auto"
          >
            Falar com os Especialistas
          </button>
        </div>
      </div>
    </section>
  );
}
