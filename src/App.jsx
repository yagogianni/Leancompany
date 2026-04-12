import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { ResultsSection } from './components/ResultsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeamAndQualification } from './components/TeamAndQualification';
import { FaqSection } from './components/FaqSection';
import { DiagnosticModal } from './components/DiagnosticModal';

function App() {
  const [diagnosticStep, setDiagnosticStep] = React.useState(1);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalInitialStep, setModalInitialStep] = React.useState(2);

  const scrollToForm = (step = 2) => {
    setModalInitialStep(step);
    setModalOpen(true);
  };

  const handleOpenDiagnosticStep1 = () => {
    setModalInitialStep(1);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary leading-relaxed antialiased">
      <Navbar setStep={scrollToForm} setDiagnosticStep1={handleOpenDiagnosticStep1} />
      
      {/* Container Principal Hero + Wizard em cascata visual */}
      <div className="pt-20">
        <Hero scrollToForm={scrollToForm} />
      </div>

      <div id="diagnostico" className="relative z-30">
        <ContactForm step={diagnosticStep} setStep={setDiagnosticStep} />
      </div>

      <ProblemSection scrollToForm={scrollToForm} />
      <ServicesSection scrollToForm={scrollToForm} />
      <ResultsSection scrollToForm={scrollToForm} />
      <TestimonialsSection />
      <ProcessSection scrollToForm={scrollToForm} />
      <TeamAndQualification scrollToForm={scrollToForm} />
      <FaqSection />

      <DiagnosticModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        initialStep={modalInitialStep} 
      />

      {/* Footer Focado na Conversão */}
      <footer className="py-16 bg-secondary border-t border-primary/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-start text-4xl font-semibold text-[#8C93A1] tracking-tighter ml-4">
              LeanC
              <div className="relative inline-flex items-start">
                o
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" className="absolute -top-1 -right-5 w-5 h-5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                <span className="absolute top-0 -right-10 text-[8px] border-2 border-current rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">R</span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para assumir o controle total?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Deixe as tarefas operacionais com processos que rodam sozinhos e volte a ser o dono estratégico do seu negócio.
          </p>
          
          <button 
            onClick={() => scrollToForm(2)}
            className="relative group flex items-center justify-center gap-3 px-8 py-4 mx-auto bg-[#25D366] text-white font-bold rounded-lg shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
          >
            <span className="absolute inset-0 rounded-lg bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
            <span className="relative z-10 flex items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052.411C5.502.411.173 5.738.17 12.287c-.001 2.091.545 4.135 1.583 5.928L0 24l5.962-1.563a11.821 11.821 0 005.996 1.625h.005c6.549 0 11.877-5.327 11.879-11.877a11.81 11.81 0 00-3.377-8.38z"/></svg>
              Fazer Diagnóstico Gratuito
            </span>
          </button>
          
          <p className="mt-12 text-sm text-slate-500">
            © {new Date().getFullYear()} Lean Company. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
