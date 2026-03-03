import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Edit2, Trash2, Search, Filter, 
  BookOpen, Calendar, Users, AlertCircle, 
  CheckCircle, Clock, MapPin, FileText,
  ChevronRight, MoreHorizontal, Download,
  Settings, Bell, Share2, PlusCircle
} from 'lucide-react';
import { Screen } from '../types';

interface LibrarianDashboardProps {
  onNavigate: (screen: Screen) => void;
}

type Tab = 'inventory' | 'loans' | 'events';

export default function LibrarianDashboard({ onNavigate }: LibrarianDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('inventory');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
    >
      {/* Header - Librarian Dashboard */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-basque-red"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Gestión Profesional de Biblioteca</span>
          </div>
          <h2 className="text-5xl font-serif font-bold text-primary tracking-tight leading-none">Panel del <br /> <span className="italic font-medium text-basque-red">Bibliotecario.</span></h2>
          <p className="text-muted mt-6 text-lg font-light leading-relaxed">Control centralizado de inventario, préstamos y agenda cultural de la Red de Euskadi.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="btn-premium btn-outline py-3 px-6">
            <Bell className="size-4" />
            <span className="relative">
              Alertas
              <span className="absolute -top-1 -right-2 size-2 bg-basque-red rounded-full"></span>
            </span>
          </button>
          <button className="btn-premium btn-primary py-3 px-6">
            <PlusCircle className="size-4" />
            Acción Rápida
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-line mb-12">
        {[
          { id: 'inventory', label: 'Gestión de Inventario', icon: BookOpen },
          { id: 'loans', label: 'Préstamos y Reservas', icon: Clock },
          { id: 'events', label: 'Eventos y Cultura', icon: Calendar }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
              activeTab === tab.id 
                ? 'text-primary' 
                : 'text-muted hover:text-primary'
            }`}
          >
            <tab.icon className={`size-4 ${activeTab === tab.id ? 'text-accent' : 'text-muted'}`} />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-basque-red"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'inventory' && (
          <motion.div
            key="inventory"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            {/* Inventory Controls */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted" />
                  <input 
                    type="text" 
                    placeholder="Buscar en el catálogo..." 
                    className="pl-10 pr-4 py-2.5 bg-white border border-line rounded-xl text-xs font-medium focus:ring-4 focus:ring-primary/5 transition-all w-80"
                  />
                </div>
                <button className="p-2.5 bg-white border border-line rounded-xl text-muted hover:text-primary transition-colors">
                  <Filter className="size-4" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-premium btn-outline py-2.5 px-5 text-[10px] uppercase tracking-widest">
                  <Download className="size-3" />
                  Exportar
                </button>
                <button className="btn-premium btn-primary py-2.5 px-5 text-[10px] uppercase tracking-widest">
                  <Plus className="size-3" />
                  Registrar Libro
                </button>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-3xl border border-line shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-line">
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Recurso</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Ubicación</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Estado</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50">
                  {[
                    { title: 'Obabakoak', author: 'Bernardo Atxaga', shelf: 'A-24', type: 'Físico', status: 'Disponible' },
                    { title: 'Patria', author: 'Fernando Aramburu', shelf: 'B-12', type: 'Físico', status: 'Prestado' },
                    { title: 'Martutene', author: 'Ramón Saizarbitoria', shelf: 'Digital', type: 'Digital', status: 'Activo' },
                    { title: 'Cien años de soledad', author: 'G. García Márquez', shelf: 'C-05', type: 'Físico', status: 'Mantenimiento' }
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center text-muted">
                            <BookOpen className="size-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-primary">{item.title}</p>
                            <p className="text-[10px] text-muted uppercase tracking-widest">{item.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-3 text-accent" />
                          <span className="text-xs font-medium text-primary">{item.shelf}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                          item.status === 'Disponible' || item.status === 'Activo' ? 'bg-accent/10 text-accent' : 
                          item.status === 'Prestado' ? 'bg-blue-50 text-blue-600' : 
                          'bg-amber-50 text-amber-600'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-slate-100 rounded-lg text-muted hover:text-primary transition-colors">
                            <Edit2 className="size-4" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg text-muted hover:text-basque-red transition-colors">
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'loans' && (
          <motion.div
            key="loans"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            {/* Loan Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Solicitudes Abiertas', value: '42', icon: Clock, color: 'text-blue-600' },
                { label: 'Retrasos Detectados', value: '08', icon: AlertCircle, color: 'text-basque-red' },
                { label: 'Lista de Espera', value: '156', icon: Users, color: 'text-accent' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-line shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-px bg-slate-100 group-hover:bg-primary transition-colors"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-2">{stat.label}</p>
                      <h3 className={`text-4xl font-serif font-bold tracking-tight ${stat.color}`}>{stat.value}</h3>
                    </div>
                    <div className="size-12 rounded-xl bg-slate-50 flex items-center justify-center text-muted">
                      <stat.icon className="size-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loan Management Table */}
            <div className="bg-white rounded-3xl border border-line shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-line flex justify-between items-center bg-slate-50/50">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Supervisión de Préstamos</h3>
                <button className="text-[10px] font-bold text-accent uppercase tracking-widest hover:underline">Registrar Devolución Manual</button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line">
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Usuario</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Recurso</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted">Vencimiento</th>
                    <th className="px-8 py-6 text-[9px] font-bold uppercase tracking-widest text-muted text-right">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50">
                  {[
                    { user: 'Iñigo Lopez', book: 'Obabakoak', due: 'Hoy', status: 'Retraso', alert: true },
                    { user: 'Ane Garmendia', book: 'Patria', due: '12 Mar', status: 'En Tiempo', alert: false },
                    { user: 'Mikel Artetxe', book: 'Martutene', due: '15 Mar', status: 'En Tiempo', alert: false }
                  ].map((loan, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-sm font-bold text-primary">{loan.user}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-muted italic font-serif">{loan.book}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${loan.alert ? 'text-basque-red' : 'text-muted'}`}>{loan.due}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {loan.alert && <AlertCircle className="size-3 text-basque-red" />}
                          <span className={`text-[9px] font-bold uppercase tracking-widest ${loan.alert ? 'text-basque-red' : 'text-accent'}`}>{loan.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'events' && (
          <motion.div
            key="events"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            {/* Event Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-basque-red"></div>
                <h3 className="small-caps text-primary">Agenda Cultural</h3>
              </div>
              <button className="btn-premium btn-primary py-2.5 px-5 text-[10px] uppercase tracking-widest">
                <Plus className="size-3" />
                Programar Evento
              </button>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Club de Lectura: Atxaga', date: '15 Mar, 18:00', participants: '18/20', status: 'Confirmado' },
                { title: 'Taller de Escritura Creativa', date: '22 Mar, 17:30', participants: '12/15', status: 'Pendiente' },
                { title: 'Presentación: Nueva Narrativa', date: '05 Abr, 19:00', participants: '45/100', status: 'Confirmado' }
              ].map((event, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-line shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-px bg-slate-100 group-hover:bg-primary transition-colors"></div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="size-12 rounded-xl bg-slate-50 flex items-center justify-center text-muted">
                      <Calendar className="size-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`size-1.5 rounded-full ${event.status === 'Confirmado' ? 'bg-accent' : 'bg-amber-500'}`}></span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted">{event.status}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">{event.title}</h4>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                      <Clock className="size-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                      <Users className="size-3" />
                      {event.participants}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-slate-50 rounded-xl text-[9px] font-bold uppercase tracking-widest text-primary hover:bg-slate-100 transition-colors">Editar</button>
                    <button className="flex-1 py-3 bg-slate-50 rounded-xl text-[9px] font-bold uppercase tracking-widest text-primary hover:bg-slate-100 transition-colors">Notificar</button>
                    <button className="p-3 bg-slate-50 rounded-xl text-muted hover:text-basque-red transition-colors">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
