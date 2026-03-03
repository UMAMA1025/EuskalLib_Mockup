import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isLoggedIn: boolean;
}

export default function Layout({ children, currentScreen, onNavigate, isLoggedIn }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-6 cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <div className="bg-primary size-14 rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-basque-red"></div>
                  <span className="material-symbols-outlined text-white text-3xl">menu_book</span>
                </div>
                <div className="absolute -bottom-1 -right-1 size-5 bg-accent rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black tracking-tighter text-primary leading-none uppercase">EuskalLib</span>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-basque-red rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-black mt-1.5">Red de Bibliotecas de Euskadi</span>
              </div>
            </div>

            {/* Navigation - Luxury Pill Style */}
            <nav className="hidden xl:flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'catalog', label: 'Catálogo' },
                { id: 'libraries', label: 'Bibliotecas' },
                ...(isLoggedIn ? [
                  { id: 'profile', label: 'Mi Cuenta' },
                  { id: 'dashboard', label: 'Gestión' }
                ] : [])
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => onNavigate(item.id as Screen)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                    currentScreen === item.id 
                      ? 'bg-white shadow-md text-primary' 
                      : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                {['ES', 'EU', 'EN'].map(lang => (
                  <button key={lang} className={`px-3 py-1 text-[9px] font-black rounded-full transition-all ${lang === 'ES' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-primary'}`}>
                    {lang}
                  </button>
                ))}
              </div>
              
              {!isLoggedIn ? (
                <button 
                  onClick={() => onNavigate('login')}
                  className="bg-primary text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                >
                  Acceso
                </button>
              ) : (
                <button 
                  onClick={() => onNavigate('profile')}
                  className="size-10 rounded-full border-2 border-accent p-0.5 overflow-hidden hover:scale-105 transition-transform"
                >
                  <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary p-2 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-basque-red"></div>
                  <span className="material-symbols-outlined text-white text-2xl">menu_book</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-primary">EuskalLib</span>
              </div>
              <p className="text-slate-700 text-lg font-medium leading-relaxed max-w-md">
                Uniendo el patrimonio bibliográfico de Euskadi en una sola red digital. Cultura libre, accesible y universal.
              </p>
              <div className="flex gap-4 mt-10">
                {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                  <button key={social} className="size-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-800 mb-8">Explorar</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-700">
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-accent transition-colors">Catálogo</button></li>
                <li><button className="hover:text-accent transition-colors">Bibliotecas</button></li>
                <li><button className="hover:text-accent transition-colors">Actividades</button></li>
                <li><button className="hover:text-accent transition-colors">Noticias</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-800 mb-8">Mi Cuenta</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-700">
                <li><button onClick={() => onNavigate('profile')} className="hover:text-accent transition-colors">Perfil de Usuario</button></li>
                <li><button onClick={() => onNavigate('dashboard')} className="hover:text-accent transition-colors">Panel de Gestión</button></li>
                <li><button onClick={() => onNavigate('login')} className="hover:text-accent transition-colors">Acceso / Registro</button></li>
                <li><button className="hover:text-accent transition-colors">Mis Préstamos</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Contacto</h4>
              <ul className="space-y-6 text-sm font-bold text-slate-600">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-accent">location_on</span>
                  <span>Donostia - San Sebastián<br /><span className="text-slate-400 font-medium">Plaza de la Constitución, 1</span></span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-accent">mail</span>
                  <span>contacto@euskallib.eus</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2024 EuskalLib - Eusko Jaurlaritza / Gobierno Vasco
            </p>
            <div className="flex gap-8">
              {['Aviso Legal', 'Privacidad', 'Cookies', 'Accesibilidad'].map(link => (
                <a key={link} href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
