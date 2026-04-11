import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Building, Calculator, Layers, ArrowLeft } from 'lucide-react';

const CHALLENGES = [
  { id: 'finance', icon: Calculator, label: 'Descontrole Financeiro' },
  { id: 'process', icon: Layers, label: 'Processos Bagunçados' },
  { id: 'production', icon: Building, label: 'Baixa Produtividade' },
];

export function ContactForm({ step, setStep }) {
  const [formData, setFormData] = useState({ challenge: '', name: '', email: '', company: '', revenue: '', state_city: '', phone: '', message: '' });

  const handleChallengeSelect = (challengeId) => {
    setFormData({ ...formData, challenge: challengeId });
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <section className="relative z-20 -mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="relative rounded-2xl bg-secondary/30 backdrop-blur-xl border border-primary/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Glow Effects interno */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="p-8 md:p-12 relative z-10 w-full min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
                  Diagnóstico Gratuito
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Qual seu maior desafio hoje?</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
                  Entender o momento da sua empresa é o primeiro passo para estancar a perda de dinheiro. Selecione a área mais crítica.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CHALLENGES.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleChallengeSelect(item.id)}
                      className="group relative flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-left overflow-hidden"
                    >
                      <div className="absolute inset-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors top-0" />
                      <item.icon className="w-10 h-10 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-slate-200 text-lg text-center">{item.label}</span>
                      <div className="mt-2 w-full py-2.5 px-4 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Preencher Formulário <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl mx-auto"
                onSubmit={handleSubmit}
              >
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="mb-8 flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                >
                   <ArrowLeft className="w-4 h-4" /> Voltar
                </button>

                <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">Para onde enviamos sua análise?</h2>
                          <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">Nome Completo *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">E-mail Profissional *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                      placeholder="joao@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">Empresa *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                     <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">Faturamento Mensal</label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white transition-all font-semibold appearance-none"
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
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">Cidade / Estado</label>
                    <input 
                      type="text" 
                      value={formData.state_city}
                      onChange={(e) => setFormData({...formData, state_city: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold"
                      placeholder="Ex: Maringá-PR"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] opacity-80">Dificuldade Atual (Opcional)</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/5 focus:border-primary outline-none text-white placeholder-slate-600 transition-all font-semibold resize-none"
                      placeholder="Conte brevemente sobre sua operação..."
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-black text-lg rounded-xl border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all shadow-xl group active:scale-[0.98]">
                  Receber Diagnóstico Gratuito <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center flex flex-col items-center justify-center py-10"
              >
                <CheckCircle2 className="w-24 h-24 text-green-500 mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                <h2 className="text-4xl font-bold text-foreground mb-4">Informações Recebidas!</h2>
                <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
                  Nossa equipe de especialistas já está processando seu pedido. Entraremos em contato pelo WhatsApp em alguns minutos.
                </p>
                <button 
                  onClick={() => { setStep(1); setFormData({ challenge: '', name: '', email: '', company: '', revenue: '', state_city: '', phone: '', message: '' }); }}
                  className="px-6 py-3 border border-border text-slate-300 font-medium rounded-lg hover:border-primary/30 hover:text-primary transition-colors"
                >
                  Fazer nova solicitação
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
