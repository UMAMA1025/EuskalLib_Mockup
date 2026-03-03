import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../types';
import { ArrowRight, BookOpen, Sparkles, History, Globe, ShieldCheck, Library } from 'lucide-react';

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
      {/* Hero Section - Cinematic Editorial */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://picsum.photos/seed/library-grand/1920/1080" 
            alt="Grand Library" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-basque-red"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Eusko Jaurlaritzaren Liburutegi Sarea</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7vw] font-serif italic text-white mb-8 leading-[0.9] tracking-tight">
              Kultura <br /> 
              <span className="text-accent not-italic font-sans font-bold uppercase tracking-tighter">Guztientzat.</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
              Explore la mayor red de conocimiento del País Vasco. Acceso universal y gratuito a millones de documentos de la Red de Bibliotecas de Euskadi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="btn-premium btn-primary py-4 px-10 text-base"
              >
                Explorar Catálogo
                <ArrowRight className="size-5" />
              </button>
              <button className="btn-premium btn-outline border-white/20 text-white hover:bg-white/10 py-4 px-10 text-base">
                <BookOpen className="size-5" />
                eLiburutegia
              </button>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-12 bottom-24 hidden xl:block">
          <div className="writing-mode-vertical-rl rotate-180 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/20">
            Eusko Jaurlaritza • Gobierno Vasco • 2024
          </div>
        </div>
      </section>

      {/* Featured Collections - Bento Grid Redesign */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4 block">Erakusketa Digitala</span>
            <h2 className="text-5xl font-serif font-bold text-primary leading-tight">
              Descubra el patrimonio <br /> <span className="italic font-medium text-basque-red">de nuestra tierra.</span>
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('catalog')} 
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary"
          >
            Ver catálogo completo
            <div className="size-12 rounded-full border border-line flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <ArrowRight className="size-5" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[700px]">
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-8 relative group overflow-hidden rounded-3xl shadow-sm border border-line bg-white"
          >
            <img src="https://picsum.photos/seed/basque-culture/1200/800" alt="Cultura Vasca" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-basque-red"></div>
                <span className="small-caps text-accent">Especial Institucional</span>
              </div>
              <h3 className="text-4xl font-serif font-bold text-white mb-4">Literatura Vasca Contemporánea</h3>
              <p className="text-white/70 max-w-md font-light text-lg">Desde Atxaga hasta Kirmen Uribe, explore las voces que definen nuestra identidad actual.</p>
            </div>
          </motion.div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-3xl shadow-sm border border-line bg-white"
            >
              <img src="https://picsum.photos/seed/archive-old/600/600" alt="Archivo" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif font-bold text-white">Archivo Histórico</h3>
                <span className="small-caps text-accent mt-2 block">Acceso Digitalizado</span>
              </div>
            </motion.div>
            
            <div className="bg-white rounded-3xl p-10 flex flex-col justify-between border border-line shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-px bg-basque-red"></div>
              <div className="bg-accent/10 size-14 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Recomendaciones IA</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">Descubra su próxima lectura basada en sus intereses culturales y académicos mediante nuestro motor inteligente.</p>
                <button className="btn-premium btn-primary w-full py-4">Probar ahora</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalist Cards */}
      <section className="bg-slate-50 py-32 border-y border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="small-caps text-accent mb-4 block">Servicios al Ciudadano</span>
            <h2 className="text-4xl font-serif font-bold text-primary">Excelencia en la gestión cultural</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Préstamo en Red', desc: 'Solicite libros de cualquier biblioteca de Euskadi y recíbalos en su centro más cercano.', icon: Globe },
              { title: 'Acceso Universal', desc: 'Carné único para toda la red de lectura pública, sin costes ni barreras geográficas.', icon: ShieldCheck },
              { title: 'Patrimonio Vivo', desc: 'Digitalización constante de obras históricas para asegurar su preservación y difusión.', icon: History }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="size-16 rounded-full border border-line flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 mb-8">
                  <service.icon className="size-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Refined Minimalist */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { label: 'Bibliotecas', value: '250+', icon: Library },
              { label: 'Documentos', value: '5.2M', icon: BookOpen },
              { label: 'Usuarios', value: '1.2M', icon: Globe },
              { label: 'Préstamos/Año', value: '3.8M', icon: History }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-5xl font-serif font-bold text-primary mb-4 tracking-tight">{stat.value}</div>
                <div className="small-caps">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
