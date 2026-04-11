import React from 'react';

export function Navbar({ setStep, setDiagnosticStep1 }) {
  const MENU_ITEMS = [
    { label: 'Solução', href: '#problema' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Diagnóstico Gratuito', onClick: setDiagnosticStep1 },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2C41] border-b border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex flex-col items-start justify-center">
            <div className="flex items-start text-2xl font-semibold text-[#8C93A1] tracking-tighter">
              LeanC
              <div className="relative inline-flex items-start">
                o
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" className="absolute -top-1 -right-3 w-3 h-3"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                <span className="absolute top-0 -right-[1.4rem] text-[6px] border border-current rounded-full w-2.5 h-2.5 flex items-center justify-center font-bold">R</span>
              </div>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center space-x-6">
              {MENU_ITEMS.map((item) => (
                item.href ? (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="text-[13px] font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button 
                    key={item.label} 
                    onClick={item.onClick}
                    className="text-[13px] font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
          <div className="flex">
            <button 
              onClick={() => setStep(2)} 
              className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all text-sm whitespace-nowrap"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
