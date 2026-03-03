import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Library, ArrowRight, ShieldCheck, Globe, BookOpen } from 'lucide-react';

interface LoginProps {
  onNavigate: () => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate();
  };

  return (
    <div className="min-h-screen flex bg-paper">
      {/* Left: Visual Side - Cinematic */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-24">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            src="https://picsum.photos/seed/library-hall/1080/1920" 
            alt="Library Hall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-xl">
          <div className="bg-accent size-16 rounded-2xl mb-12 flex items-center justify-center shadow-2xl shadow-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-basque-red"></div>
            <Library className="text-white size-8 group-hover:scale-110 transition-transform" />
          </div>
          <h1 className="text-7xl font-serif font-bold text-white leading-[0.9] tracking-tight mb-8">
            Tu <span className="italic font-medium text-accent">puerta</span> a la cultura.
          </h1>
          <p className="text-white/70 text-xl font-light leading-relaxed text-balance mb-16">
            Acceda a su cuenta personal de EuskalLib para gestionar sus préstamos, reservas y listas de lectura personalizadas de la Red de Bibliotecas de Euskadi.
          </p>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-serif font-bold text-accent">5M+</p>
              <p className="small-caps text-white/40">Registros Digitales</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-serif font-bold text-accent">250+</p>
              <p className="small-caps text-white/40">Bibliotecas en Red</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form Side - Clean & Secure */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2.5 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-basque-red"></div>
                <Library className="text-white size-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-primary">EuskalLib</span>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-basque-red"></div>
              <span className="small-caps text-accent">Acceso Unificado</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Bienvenido de nuevo</h2>
            <p className="text-muted font-light">Introduzca sus credenciales institucionales para acceder a la red.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="small-caps text-[10px] text-primary">Correo Electrónico</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail className="size-4 text-muted group-focus-within:text-accent transition-colors" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-5 py-4 bg-white border border-line rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-medium text-primary placeholder-slate-400"
                  placeholder="ejemplo@correo.eus"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="small-caps text-[10px] text-primary">Contraseña</label>
                <button type="button" className="text-[10px] font-bold text-accent uppercase tracking-widest hover:underline">¿Olvidó su clave?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Lock className="size-4 text-muted group-focus-within:text-accent transition-colors" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-5 py-4 bg-white border border-line rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-medium text-primary placeholder-slate-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="size-4 rounded border-line text-accent focus:ring-accent/20" />
              <span className="text-sm font-medium text-muted">Mantener sesión iniciada</span>
            </div>

            <button 
              type="submit"
              className="btn-premium btn-primary w-full py-5 text-sm"
            >
              Iniciar Sesión
              <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-line">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-line mb-8">
              <ShieldCheck className="size-5 text-accent shrink-0" />
              <p className="text-[10px] font-medium text-muted leading-relaxed">
                Su conexión está protegida mediante encriptación de grado institucional de la Red de Euskadi.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium text-muted mb-4">
                ¿Aún no tiene carné de biblioteca?
              </p>
              <button className="small-caps text-primary hover:text-accent transition-colors">
                Solicitar Alta en la Red
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
