import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Building, Calculator, Layers, ArrowLeft } from 'lucide-react';

const CHALLENGES = [
  { id: 'finance', icon: Calculator, label: 'Descontrole Financeiro' },
  { id: 'process', icon: Layers, label: 'Processos Bagunçados' },
  { id: 'production', icon: Building, label: 'Baixa Produtividade' },
];

export function DiagnosticModal({ isOpen, onClose, initialStep = 2 }) {
  const [step, setStep] = useState(initialStep);
  const [formData, setFormData] = useState({ 
    challenge: '', 
    name: '', 
    email: '', 
    company: '', 
    revenue: '', 
    state_city: '', 
    phone: '', 
    message: '' 
  });

  // Reset step when modal opens
  useEffect(() => {
    if (isOpen) setStep(initialStep);
  }, [isOpen, initialStep]);

  const handleChallengeSelect = (challengeId) => {
    setFormData({ ...formData, challenge: challengeId });
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const springTransition = { type: 'spring', stiffness: 300, damping: 30 };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          {/* Backdrop - Otimizado para Mobile (Menos Blur) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm sm:backdrop-blur-md"
          />

          {/* Modal Content - Sombras suavizadas para GPU Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={springTransition}
            className="relative w-full max-w-2xl bg-secondary border border-primary/10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden max-h-[95vh] flex flex-col"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={springTransition}
                className="h-full bg-primary shadow-[0_0_8px_rgba(202,152,35,0.6)]"
              />
            </div>

            {/* Close Button - Maior para Toque no Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-50"
            >
              <X className="w-5 h-5 sm:w-6 h-6" />
            </button>

            <div className="p-6 sm:p-14 overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div
                    key="m-step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={springTransition}
                    className="text-center py-4 sm:py-0"
                  >
                    <div className="inline-block mb-4 sm:mb-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                      Diagnóstico Gratuito
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">Qual seu desafio?</h2>
                    
                    <div className="grid grid-cols-1 gap-3 sm:gap-5 mt-4 sm:mt-10">
                      {CHALLENGES.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleChallengeSelect(item.id)}
                          className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all text-left transform active:scale-95 sm:hover:-translate-y-1"
                        >
                          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                             <item.icon className="w-5 h-5 sm:w-8 sm:h-8" />
                          </div>
                          <span className="font-bold text-slate-200 text-lg sm:text-xl flex-grow">{item.label}</span>
                          <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.form
                    key="m-step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={springTransition}
                    className="w-full text-left"
                    onSubmit={handleSubmit}
                  >
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="mb-4 sm:mb-8 flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                    >
                       <ArrowLeft className="w-4 h-4" /> Voltar
                    </button>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight">Dados para sua Análise</h2>
                    
                    <div className="space-y-4 sm:space-y-6 mb-6">
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80 decoration-0 leading-none">Seu Nome Completo *</label>
                        <input 
                          type="text" 
                          required
                          autoFocus
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                          placeholder="Ex: João Silva"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">E-mail Profissional *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                          placeholder="joao@empresa.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">Empresa *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                          placeholder="Nome do seu negócio"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">WhatsApp / Telefone</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">Faturamento Mensal</label>
                        <select
                          value={formData.revenue}
                          onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white transition-all font-semibold appearance-none"
                        >
                          <option value="" className="bg-secondary text-slate-500">Selecione uma opção</option>
                          <option value="Até 100 mil" className="bg-secondary text-white">Até 100 mil por mês</option>
                          <option value="101 a 300 mil" className="bg-secondary text-white">101 a 300 mil por mês</option>
                          <option value="301 a 700 mil" className="bg-secondary text-white">301 a 700 mil por mês</option>
                          <option value="701 mil a 2mi" className="bg-secondary text-white">701 mil a 2mi por mês</option>
                          <option value="Acima de 2mi" className="bg-secondary text-white">Acima de 2mi por mês</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">Cidade / Estado</label>
                        <input 
                          type="text" 
                          value={formData.state_city}
                          onChange={(e) => setFormData({...formData, state_city: e.target.value})}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                          placeholder="Ex: Maringá-PR"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-[8px] sm:text-[10px] font-black text-primary uppercase mb-2 sm:mb-3 tracking-[0.2em] opacity-80">Qual sua maior dificuldade hoje? (Opcional)</label>
                      <textarea 
                        rows="2"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold resize-none"
                        placeholder="Conte brevemente sobre sua operação..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-primary text-primary-foreground font-black text-base sm:text-lg rounded-xl border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all shadow-xl group active:scale-[0.98]">
                      Receber Diagnóstico <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div
                    key="m-step3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springTransition}
                    className="text-center py-8 sm:py-16"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-green-500/20">
                       <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6">Processando sua Análise</h2>
                    <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg max-w-sm mx-auto">Em menos de 15 minutos nossa equipe entrará em contato pelo WhatsApp fornecido.</p>
                    <button 
                      onClick={onClose}
                      className="px-10 sm:px-12 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:border-primary hover:text-primary transition-all uppercase tracking-widest text-xs sm:text-sm"
                    >
                      Fechar
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
