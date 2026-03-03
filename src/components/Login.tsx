import React, { useState } from 'react';
import { motion } from 'motion/react';

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
    <div className="min-h-screen flex">
      {/* Left: Visual Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-24">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/library/1080/1920?blur=10" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-xl">
          <div className="bg-accent size-16 rounded-2xl mb-12 flex items-center justify-center shadow-2xl shadow-accent/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-basque-red"></div>
            <span className="material-symbols-outlined text-white text-4xl font-black">menu_book</span>
          </div>
          <h1 className="text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            TU <span className="font-serif italic font-normal text-accent">Puerta</span> A LA CULTURA.
          </h1>
          <p className="text-white/80 text-xl font-medium leading-relaxed text-balance">
            Acceda a su cuenta personal de EuskalLib para gestionar sus préstamos, reservas y listas de lectura personalizadas de la Red de Bibliotecas de Euskadi.
          </p>
          
          <div className="mt-20 grid grid-cols-2 gap-12">
            <div>
              <p className="text-4xl font-black text-accent mb-2">5M+</p>
              <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Registros</p>
            </div>
            <div>
              <p className="text-4xl font-black text-accent mb-2">250+</p>
              <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Bibliotecas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form Side */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-primary p-2 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-basque-red"></div>
                <span className="material-symbols-outlined text-white text-2xl">menu_book</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary">EuskalLib</span>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-basque-red"></div>
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">Acceso Unificado</span>
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-4">Bienvenido de nuevo</h2>
            <p className="text-slate-700 font-bold">Introduzca sus credenciales para acceder a la red institucional.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">Correo Electrónico</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all font-bold text-primary placeholder-slate-500"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">Contraseña</label>
                <button type="button" className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">¿Olvidó su clave?</button>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all font-bold text-primary placeholder-slate-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" className="size-5 rounded-lg border-slate-300 text-primary focus:ring-primary" />
              <span className="text-sm font-bold text-slate-700">Mantener sesión iniciada</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl shadow-primary/20"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-16 pt-12 border-t border-slate-200 text-center">
            <p className="text-sm font-bold text-slate-600">
              ¿Aún no tiene carné de biblioteca?
            </p>
            <button className="mt-4 text-xs font-black text-primary uppercase tracking-widest hover:text-accent transition-colors">
              Solicitar Alta en la Red
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
