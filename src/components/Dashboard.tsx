import React from 'react';
import { motion } from 'motion/react';
import { MOCK_BOOKS, Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-paper"
    >
      {/* Dashboard Header - Technical */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="size-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Sistema de Gestión Centralizado</span>
              </div>
              <h1 className="text-5xl font-black text-primary tracking-tighter">
                PANEL <span className="font-serif italic font-normal">Administrativo.</span>
              </h1>
            </div>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-100 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-200 transition-all">
                Configuración
              </button>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Nuevo Registro
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Stats Grid - Technical/Mono with Hardware feel */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { label: 'Préstamos Activos', value: '12,482', trend: '+12.4%', icon: 'book_2' },
            { label: 'Usuarios Registrados', value: '84,201', trend: '+5.2%', icon: 'group' },
            { label: 'Títulos en Red', value: '5.2M', trend: '+0.8%', icon: 'database' },
            { label: 'Nodos Activos', value: '254', trend: 'Estable', icon: 'lan' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm group hover:border-accent transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="size-12 rounded-full border border-dashed border-slate-200 flex items-center justify-center group-hover:border-accent transition-colors">
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-accent transition-colors text-xl">{stat.icon}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-emerald-600 font-bold mb-6 flex items-center gap-2">
                  <span className="size-1 bg-emerald-500 rounded-full"></span>
                  {stat.trend}
                </span>
                <p className="text-5xl font-black text-primary tracking-tighter mb-2 font-mono">{stat.value}</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Table - Professional Data Grid */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-1 bg-basque-red"></div>
                <h3 className="text-xs font-black text-primary uppercase tracking-widest">Actividad de Red en Tiempo Real</h3>
                <div className="flex gap-4">
                  <div className="size-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="size-2 bg-slate-200 rounded-full"></div>
                  <div className="size-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">ID Transacción</th>
                      <th className="px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Usuario</th>
                      <th className="px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Acción</th>
                      <th className="px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Estado</th>
                    </tr>
                  </thead>
                  <motion.tbody 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                    className="divide-y divide-slate-50"
                  >
                    {[
                      { id: 'TX-9402', user: 'Mikel Arregi', action: 'Préstamo Digital', status: 'Completado' },
                      { id: 'TX-9401', user: 'Ane Garmendia', action: 'Reserva Física', status: 'Pendiente' },
                      { id: 'TX-9400', user: 'Iñigo Lopez', action: 'Renovación', status: 'Completado' },
                      { id: 'TX-9399', user: 'Maite Ortiz', action: 'Alta Usuario', status: 'Verificando' },
                      { id: 'TX-9398', user: 'Xabier Etxeberria', action: 'Devolución', status: 'Completado' }
                    ].map((row, i) => (
                      <motion.tr 
                        key={i} 
                        variants={{
                          hidden: { x: -10, opacity: 0 },
                          visible: { x: 0, opacity: 1 }
                        }}
                        className="hover:bg-slate-50 transition-colors group"
                      >
                        <td className="px-10 py-6 font-mono text-[10px] text-slate-500">{row.id}</td>
                        <td className="px-10 py-6">
                          <span className="text-sm font-bold text-primary">{row.user}</span>
                        </td>
                        <td className="px-10 py-6">
                          <span className="text-xs font-medium text-slate-700">{row.action}</span>
                        </td>
                        <td className="px-10 py-6">
                          <div className="flex items-center gap-3">
                            <span className={`size-1.5 rounded-full ${row.status === 'Completado' ? 'bg-accent' : row.status === 'Pendiente' ? 'bg-amber-500' : 'bg-slate-300'}`}></span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{row.status}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
              
              <div className="p-8 bg-slate-50/50 border-t border-slate-100 text-center">
                <button className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">Descargar Reporte Completo (CSV)</button>
              </div>
            </div>
          </div>

          {/* Sidebar - System Health */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-8">Estado de Nodos</h3>
              <div className="space-y-6">
                {[
                  { name: 'Nodo Bilbao (Bidebarrieta)', load: 42, status: 'Óptimo' },
                  { name: 'Nodo Donostia (KMK)', load: 78, status: 'Carga Alta' },
                  { name: 'Nodo Vitoria (Aldecoa)', load: 15, status: 'Óptimo' }
                ].map((node, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-1 bg-slate-100 group-hover:bg-primary transition-colors"></div>
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-xs font-black text-primary">{node.name}</p>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${node.status === 'Óptimo' ? 'text-accent' : 'text-amber-500'}`}>{node.status}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${node.load > 70 ? 'bg-amber-500' : 'bg-accent'}`}
                        style={{ width: `${node.load}%` }}
                      ></div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Carga de Servidor</p>
                      <p className="font-mono text-[10px] font-bold text-slate-600">{node.load}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-[2.5rem] p-10 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-1 bg-basque-red"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h4 className="text-xl font-black mb-4 relative z-10">Alertas Críticas</h4>
              <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed">
                No se han detectado anomalías en las últimas 24 horas. El sistema opera bajo parámetros normales de la Red de Euskadi.
              </p>
              <button className="w-full py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all relative z-10">
                Ver Log de Seguridad
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
