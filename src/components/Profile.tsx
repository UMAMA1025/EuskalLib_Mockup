import React from 'react';
import { motion } from 'motion/react';
import { MOCK_BOOKS, Screen } from '../types';

interface ProfileProps {
  onNavigate: (screen: Screen, bookId?: string) => void;
  onLogout: () => void;
}

export default function Profile({ onNavigate, onLogout }: ProfileProps) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row gap-20"
    >
      {/* Sidebar Navigation - Luxury Aesthetic */}
      <aside className="w-full lg:w-96 flex flex-col gap-10">
        <motion.div 
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: { x: 0, opacity: 1 }
          }}
          className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-basque-red"></div>
          
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative mb-8">
              <div className="size-40 rounded-full border-4 border-paper shadow-2xl overflow-hidden relative z-10">
                <img src="https://i.pravatar.cc/400?img=32" alt="Jon Doe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-2 -right-2 size-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white z-20">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
            </div>
            <h1 className="text-primary text-3xl font-black tracking-tighter uppercase">Jon Doe</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Miembro desde 2021</p>
          </div>
          
          <nav className="flex flex-col gap-3">
            {[
              { icon: 'person', label: 'Datos Personales', active: true },
              { icon: 'badge', label: 'Carné de Biblioteca' },
              { icon: 'book_2', label: 'Préstamos Activos' },
              { icon: 'history', label: 'Historial de Préstamos' },
              { icon: 'notifications', label: 'Notificaciones' }
            ].map((item, i) => (
              <button 
                key={i}
                className={`flex items-center gap-5 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  item.active 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12 pt-10 border-t border-slate-100">
            <button 
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-4 rounded-2xl h-16 bg-red-50 text-basque-red text-[10px] font-black uppercase tracking-widest hover:bg-red-100 transition-all border border-red-100"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              Cerrar Sesión
            </button>
          </div>
        </motion.div>

        {/* System Status Widget */}
        <motion.div 
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: { x: 0, opacity: 1 }
          }}
          className="bg-primary rounded-[2rem] p-10 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-1 bg-basque-red"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Estado del Servicio</span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-8">
              Todos los sistemas de la Red de Bibliotecas operan con normalidad.
            </p>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span>Sincronizado</span>
              <span className="font-mono text-accent">OK</span>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-20">
        {/* Header Info */}
        <motion.div 
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-basque-red"></div>
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] block">Perfil Institucional Unificado</span>
            </div>
            <h2 className="text-5xl font-black text-primary tracking-tighter uppercase leading-none">Datos <br /> <span className="font-serif italic font-normal text-basque-red lowercase tracking-normal">Personales.</span></h2>
            <p className="text-slate-600 mt-6 text-lg font-medium leading-relaxed">Gestione su identidad digital y preferencias de acceso a la Red de Bibliotecas de Euskadi.</p>
          </div>
          <button className="flex items-center gap-4 rounded-full h-16 px-10 bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:bg-slate-900 transition-all group">
            <span className="material-symbols-outlined text-lg">edit</span>
            Editar Perfil
          </button>
        </motion.div>

        {/* Profile Info Cards - Specialist Tool Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              title: 'Detalles de Contacto', 
              accent: 'bg-basque-red',
              items: [
                { icon: 'mail', label: 'Correo Electrónico', value: 'jon.doe@euskallib.eus' },
                { icon: 'phone', label: 'Número de Teléfono', value: '+34 944 123 456' }
              ]
            },
            { 
              title: 'Información Institucional', 
              accent: 'bg-accent',
              items: [
                { icon: 'fingerprint', label: 'ID de Miembro', value: 'EL-98321-BASQUE', mono: true },
                { icon: 'location_on', label: 'Biblioteca Principal', value: 'Bilbao Central Library' }
              ]
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:border-primary transition-colors"
            >
              <div className={`absolute top-0 right-0 w-24 h-1 ${card.accent}`}></div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">{card.title}</h3>
              <div className="space-y-10">
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-6">
                    <div className="size-14 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-primary group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                      <p className={`font-black text-primary text-lg ${item.mono ? 'font-mono uppercase' : ''}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Library Card Section - Premium Look */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-0.5 bg-basque-red"></div>
            <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em]">Carné Universal</h3>
          </div>
          
          <div className="relative w-full max-w-xl aspect-[1.6/1] bg-primary rounded-[3rem] p-12 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,51,102,0.4)] group">
            {/* Premium Textures */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_70%)]"></div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-basque-red/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-5">
                  <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20">
                    <span className="material-symbols-outlined text-white text-3xl">account_balance</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-black tracking-tighter text-2xl uppercase">EuskalLib</span>
                    <span className="text-[8px] text-white/50 font-black uppercase tracking-[0.3em]">Red de Bibliotecas</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="material-symbols-outlined text-white/20 text-5xl">contactless</span>
                  <div className="mt-2 flex gap-1">
                    <div className="size-1.5 bg-basque-red rounded-full"></div>
                    <div className="size-1.5 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-black">Titular del Carné</p>
                <h4 className="text-white text-4xl font-black tracking-tighter uppercase">JON DOE</h4>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-white/50">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=EL-98321-BASQUE" alt="QR" className="size-20 mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-black mb-2">Número de Identificación</p>
                  <p className="text-white font-mono text-2xl font-bold tracking-widest">EL 9832 1000</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Loans Table - Technical Dashboard Look */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-basque-red"></div>
              <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em]">Préstamos Activos</h3>
            </div>
            <button className="text-accent text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-2">
              Ver Historial Completo
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Título del Recurso</th>
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Vencimiento</th>
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Estado</th>
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {MOCK_BOOKS.slice(0, 2).map((book, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-8">
                          <div className="w-16 h-24 bg-white rounded-xl flex-shrink-0 overflow-hidden shadow-xl border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="font-black text-primary text-lg tracking-tight mb-1 group-hover:text-accent transition-colors">{book.title}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{book.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-slate-700">24 Oct, 2024</span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">14:00 GMT</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-3">
                          <span className={`size-2 rounded-full ${i === 0 ? 'bg-accent animate-pulse' : 'bg-amber-500'}`}></span>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-accent' : 'text-amber-600'}`}>
                            {i === 0 ? 'En Plazo' : 'Vencimiento Próximo'}
                          </span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <button className="px-6 py-3 rounded-xl border border-slate-200 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
                          Renovar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-slate-50/50 border-t border-slate-100 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Mostrando 2 de 12 préstamos activos en la Red de Euskadi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
