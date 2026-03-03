import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col"
    >
      {/* Hero Section - Editorial Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-primary">
        {/* Left Pane - Content */}
        <div className="flex-1 relative z-10 flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-0 bg-primary">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 glass px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] mb-12">
              <span className="size-2 bg-basque-red rounded-full animate-pulse"></span>
              Patrimonio Digital de Euskadi
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              El Saber <br /> 
              <span className="text-accent italic font-serif font-normal lowercase tracking-normal">Unificado.</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-16 font-medium leading-relaxed">
              Explore la mayor red de conocimiento del País Vasco. Acceso universal a millones de documentos de la Red de Bibliotecas de Euskadi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-accent text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 group"
              >
                Explorar Catálogo
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="glass text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-sm">auto_stories</span>
                eLiburutegia
              </button>
            </div>
          </motion.div>

          {/* Rail Text */}
          <div className="absolute left-8 bottom-24 hidden xl:block">
            <div className="writing-mode-vertical-rl rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
              Eusko Jaurlaritza • Gobierno Vasco • 2024
            </div>
          </div>
        </div>

        {/* Right Pane - Visual */}
        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img 
              src="https://picsum.photos/seed/library-arch/1200/1600" 
              alt="Library Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden block"></div>
          </motion.div>

          {/* Floating Feature Bubble */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-12 right-12 glass p-8 rounded-[2rem] max-w-xs border border-white/20 shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-2xl bg-basque-red flex items-center justify-center text-white">
                <span className="material-symbols-outlined">history_edu</span>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nuevo Archivo</div>
                <div className="text-primary font-black">Manuscritos Históricos</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Acceda a la colección digitalizada de pergaminos del siglo XV recientemente incorporada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections - Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">Colecciones Destacadas</span>
            <h2 className="text-5xl font-black text-primary leading-tight tracking-tighter">
              Descubra el patrimonio <br /> <span className="font-serif italic font-normal text-basque-red">de nuestra tierra.</span>
            </h2>
          </div>
          <button onClick={() => onNavigate('catalog')} className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary">
            Ver todo el catálogo
            <span className="size-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
          <div className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200">
            <img src="https://picsum.photos/seed/basque-lit/1200/800" alt="Literatura Vasca" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-basque-red"></div>
                <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] block">Especial Institucional</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-4">Literatura Vasca Contemporánea</h3>
              <p className="text-white/80 max-w-md font-medium">Desde Atxaga hasta Kirmen Uribe, explore las voces que definen nuestra identidad actual.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200">
              <img src="https://picsum.photos/seed/digital-archive/600/600" alt="Archivo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-black text-white">Archivo Histórico</h3>
                <span className="text-accent font-black text-[9px] uppercase tracking-[0.2em] mt-2 block">Acceso Digitalizado</span>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-1 bg-basque-red"></div>
              <span className="material-symbols-outlined text-accent text-5xl">auto_awesome</span>
              <div>
                <h3 className="text-2xl font-black text-primary mb-2">Recomendaciones IA</h3>
                <p className="text-slate-600 text-sm font-bold">Descubra su próxima lectura basada en sus intereses culturales y académicos.</p>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all">Probar ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Minimalist */}
      <section className="bg-white py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { label: 'Bibliotecas', value: '250+' },
              { label: 'Documentos', value: '5.2M' },
              { label: 'Usuarios', value: '1.2M' },
              { label: 'Préstamos/Año', value: '3.8M' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black text-primary mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
