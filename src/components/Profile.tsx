import React from 'react';
import { motion } from 'motion/react';
import { User, BadgeCheck, BookOpen, History, Bell, LogOut, Shield, Mail, Phone, Fingerprint, MapPin, QrCode, RefreshCw, ChevronRight, Edit3, Library } from 'lucide-react';
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
          className="bg-white rounded-3xl p-10 shadow-sm border border-line relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-basque-red"></div>
          
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative mb-8">
              <div className="size-32 rounded-full border-4 border-paper shadow-md overflow-hidden relative z-10">
                <img src="https://i.pravatar.cc/400?img=32" alt="Jon Doe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-1 -right-1 size-10 bg-accent rounded-full border-4 border-white shadow-sm flex items-center justify-center text-white z-20">
                <BadgeCheck className="size-5" />
              </div>
            </div>
            <h1 className="text-primary text-3xl font-serif font-bold tracking-tight">Jon Doe</h1>
            <p className="small-caps text-muted mt-2">Miembro desde 2021</p>
          </div>
          
          <nav className="flex flex-col gap-2">
            {[
              { icon: User, label: 'Datos Personales', active: true },
              { icon: BookOpen, label: 'Préstamos Activos' },
              { icon: History, label: 'Historial' },
              { icon: Bell, label: 'Notificaciones' }
            ].map((item, i) => (
              <button 
                key={i}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                  item.active 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-muted hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-10 pt-8 border-t border-line">
            <button 
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-3 rounded-xl py-4 bg-red-50 text-basque-red text-xs font-bold uppercase tracking-widest hover:bg-red-100 transition-all border border-red-100"
            >
              <LogOut className="size-4" />
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
          className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-px bg-basque-red"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-2 bg-accent rounded-full animate-pulse"></div>
              <span className="small-caps text-white/40">Estado del Servicio</span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-8 text-white/80">
              Todos los sistemas de la Red de Bibliotecas operan con normalidad institucional.
            </p>
            <div className="flex justify-between items-center small-caps text-[10px]">
              <span className="text-white/40">Sincronizado</span>
              <span className="text-accent">OK</span>
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
              <div className="h-px w-8 bg-basque-red"></div>
              <span className="small-caps text-accent">Perfil Institucional Unificado</span>
            </div>
            <h2 className="text-5xl font-serif font-bold text-primary tracking-tight leading-none">Datos <br /> <span className="italic font-medium text-basque-red">Personales.</span></h2>
            <p className="text-muted mt-6 text-lg font-light leading-relaxed">Gestione su identidad digital y preferencias de acceso a la Red de Bibliotecas de Euskadi.</p>
          </div>
          <button className="btn-premium btn-primary py-4 px-10">
            <Edit3 className="size-4" />
            Editar Perfil
          </button>
        </motion.div>

        {/* Profile Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Detalles de Contacto', 
              accent: 'bg-basque-red',
              items: [
                { icon: Mail, label: 'Correo Electrónico', value: 'jon.doe@euskallib.eus' },
                { icon: Phone, label: 'Número de Teléfono', value: '+34 944 123 456' }
              ]
            },
            { 
              title: 'Información Institucional', 
              accent: 'bg-accent',
              items: [
                { icon: Fingerprint, label: 'ID de Miembro', value: 'EL-98321-BASQUE', mono: true },
                { icon: MapPin, label: 'Biblioteca Principal', value: 'Bilbao Central Library' }
              ]
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="bg-white p-10 rounded-3xl border border-line shadow-sm relative overflow-hidden group hover:border-accent transition-colors"
            >
              <div className={`absolute top-0 right-0 w-24 h-px ${card.accent}`}></div>
              <h3 className="small-caps text-muted mb-10">{card.title}</h3>
              <div className="space-y-8">
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-6">
                    <div className="size-12 rounded-xl border border-line flex items-center justify-center text-muted group-hover:bg-slate-50 transition-colors">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="small-caps text-[9px] mb-1">{item.label}</p>
                      <p className={`font-bold text-primary text-lg ${item.mono ? 'font-mono' : 'font-serif'}`}>{item.value}</p>
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
            <div className="h-px w-6 bg-basque-red"></div>
            <h3 className="small-caps text-primary">Carné Universal</h3>
          </div>
          
          <div className="relative w-full max-w-xl aspect-[1.6/1] bg-primary rounded-[2.5rem] p-10 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_70%)]"></div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-basque-red"></div>
            
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <Library className="text-white size-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-serif font-bold text-xl">EuskalLib</span>
                    <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest">Eusko Jaurlaritza • Gobierno Vasco</span>
                  </div>
                </div>
                <Shield className="text-white/10 size-12" />
              </div>
              
              <div className="space-y-1">
                <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Titular del Carné / Titularra</p>
                <h4 className="text-white text-3xl font-serif font-bold tracking-tight uppercase">JON DOE</h4>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <QrCode className="size-16 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-1">ID Unificado / Identifikazioa</p>
                  <p className="text-white font-mono text-xl font-bold tracking-widest">EL 9832 1000</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Loans Table */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-basque-red"></div>
              <h3 className="small-caps text-primary">Préstamos Activos</h3>
            </div>
            <button className="text-accent text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group">
              Ver historial completo
              <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="bg-white rounded-3xl border border-line shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-line">
                    <th className="px-10 py-6 small-caps text-[9px]">Recurso</th>
                    <th className="px-10 py-6 small-caps text-[9px]">Vencimiento</th>
                    <th className="px-10 py-6 small-caps text-[9px]">Estado</th>
                    <th className="px-10 py-6 small-caps text-[9px] text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50">
                  {MOCK_BOOKS.slice(0, 2).map((book, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-20 rounded-lg overflow-hidden shadow-md border border-line shrink-0 group-hover:scale-105 transition-transform duration-500">
                            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="font-serif font-bold text-primary text-lg leading-tight mb-1 group-hover:text-accent transition-colors">{book.title}</p>
                            <p className="text-[10px] font-medium text-muted uppercase tracking-widest">{book.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary">24 Oct, 2024</span>
                          <span className="text-[9px] font-medium text-muted uppercase tracking-widest mt-0.5">14:00 GMT</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-2">
                          <div className={`size-1.5 rounded-full ${i === 0 ? 'bg-accent animate-pulse' : 'bg-amber-500'}`}></div>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-accent' : 'text-amber-600'}`}>
                            {i === 0 ? 'En Plazo' : 'Vencimiento Próximo'}
                          </span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <button className="px-5 py-2.5 rounded-xl border border-line text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
                          <RefreshCw className="size-3 inline-block mr-2" />
                          Renovar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50/50 border-t border-line text-center">
              <p className="small-caps text-[9px]">
                Mostrando 2 de 12 préstamos activos en la Red de Euskadi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
