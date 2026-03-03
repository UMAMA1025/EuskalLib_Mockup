import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, BookOpen, Clock, TrendingUp, 
  ArrowUpRight, ArrowDownRight, Search, 
  Filter, Download, Calendar, Activity,
  Library, Globe, ShieldCheck, ChevronRight
} from 'lucide-react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
    >
      {/* Header - Professional Dashboard */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-basque-red"></div>
            <span className="small-caps text-accent">Panel de Control Institucional</span>
          </div>
          <h2 className="text-5xl font-serif font-bold text-primary tracking-tight leading-none">Análisis de <br /> <span className="italic font-medium text-basque-red">Actividad.</span></h2>
          <p className="text-muted mt-6 text-lg font-light leading-relaxed">Monitorización en tiempo real de los flujos culturales y bibliográficos de la Red de Euskadi.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="btn-premium btn-outline py-3 px-6">
            <Download className="size-4" />
            Exportar Reporte
          </button>
          <button className="btn-premium btn-primary py-3 px-6">
            <Calendar className="size-4" />
            Últimos 30 días
          </button>
        </div>
      </div>

      {/* Stats Grid - Hardware/Specialist Feel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { label: 'Usuarios Activos', value: '12,842', change: '+12%', trend: 'up', icon: Users },
          { label: 'Préstamos Totales', value: '45,201', change: '+5%', trend: 'up', icon: BookOpen },
          { label: 'Tiempo Medio', value: '18.5m', change: '-2%', trend: 'down', icon: Clock },
          { label: 'Tasa de Retorno', value: '94.2%', change: '+0.8%', trend: 'up', icon: TrendingUp }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-px bg-basque-red"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 group-hover:text-accent transition-colors">
                  <stat.icon className="size-6" />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${stat.trend === 'up' ? 'text-accent' : 'text-red-400'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="small-caps text-white/40 mb-2">{stat.label}</p>
              <h3 className="text-4xl font-serif font-bold tracking-tight">{stat.value}</h3>
            </div>
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid - Data Grid Aesthetic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Activity Table */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-basque-red"></div>
              <h3 className="small-caps text-primary">Actividad Reciente</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted" />
                <input 
                  type="text" 
                  placeholder="Filtrar actividad..." 
                  className="pl-10 pr-4 py-2 bg-slate-50 border border-line rounded-xl text-xs font-medium focus:ring-4 focus:ring-primary/5 transition-all w-64"
                />
              </div>
              <button className="p-2 bg-slate-50 border border-line rounded-xl text-muted hover:text-primary transition-colors">
                <Filter className="size-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-line shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-line">
                    <th className="px-8 py-6 small-caps text-[9px]">Usuario</th>
                    <th className="px-8 py-6 small-caps text-[9px]">Acción</th>
                    <th className="px-8 py-6 small-caps text-[9px]">Recurso</th>
                    <th className="px-8 py-6 small-caps text-[9px] text-right">Hora</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50">
                  {[
                    { user: 'Mikel Artetxe', action: 'Préstamo', book: 'Obabakoak', time: 'Hace 2m', status: 'success' },
                    { user: 'Ane Garmendia', action: 'Reserva', book: 'Patria', time: 'Hace 5m', status: 'warning' },
                    { user: 'Jon Rahm', action: 'Devolución', book: 'El hijo del acordeonista', time: 'Hace 12m', status: 'info' },
                    { user: 'Maite Zubiri', action: 'Préstamo', book: 'Martutene', time: 'Hace 15m', status: 'success' },
                    { user: 'Iker Casillas', action: 'Renovación', book: 'Cien años de soledad', time: 'Hace 22m', status: 'info' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-primary">
                            {row.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-bold text-primary">{row.user}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                          row.status === 'success' ? 'bg-accent/10 text-accent' : 
                          row.status === 'warning' ? 'bg-amber-50 text-amber-600' : 
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {row.action}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-muted italic font-serif">{row.book}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{row.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full py-6 bg-slate-50/50 border-t border-line text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group">
              Ver registro de auditoría completo
              <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          {/* Real-time Monitor */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-px bg-basque-red"></div>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="size-5 text-accent" />
              <h3 className="small-caps text-primary">Monitor de Red</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: 'KMK Donostia', load: 85, status: 'Alta' },
                { label: 'Bidebarrieta Bilbao', load: 62, status: 'Media' },
                { label: 'Aldecoa Vitoria', load: 44, status: 'Normal' }
              ].map((node, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-primary">{node.label}</span>
                    <span className="text-muted">{node.status}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${node.load}%` }}
                      className={`h-full ${node.load > 80 ? 'bg-basque-red' : node.load > 50 ? 'bg-amber-500' : 'bg-accent'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Integrity */}
          <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-px bg-basque-red"></div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="size-5 text-accent" />
              <span className="small-caps text-white/40">Integridad del Sistema</span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-8 text-white/80">
              Protocolos de seguridad activos. Sincronización con el repositorio central de Euskadi completada.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Globe className="size-4 text-white/40" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Nodos Globales</span>
                </div>
                <span className="text-accent font-mono text-xs">ONLINE</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Library className="size-4 text-white/40" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Bases de Datos</span>
                </div>
                <span className="text-accent font-mono text-xs">SYNCED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
