import React from 'react';
import { motion } from 'motion/react';
import { Book, MOCK_BOOKS, Screen } from '../types';

interface BookDetailProps {
  bookId: string;
  onNavigate: (screen: Screen, bookId?: string) => void;
}

export default function BookDetail({ bookId, onNavigate }: BookDetailProps) {
  const book = MOCK_BOOKS.find(b => b.id === bookId) || MOCK_BOOKS[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      {/* Magazine Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover opacity-30 blur-xl scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <motion.div 
                layoutId={`book-cover-${book.id}`}
                className="aspect-[3/4] rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border-[12px] border-white/10"
              >
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-basque-red"></div>
                  <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] block">Ficha Bibliográfica Institucional</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 text-balance">
                  {book.title}
                </h1>
                <p className="text-white/90 text-2xl font-serif italic mb-12">por {book.author}</p>
                
                <div className="flex flex-wrap gap-6">
                  <button className="bg-accent text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-accent/20">
                    Reservar
                  </button>
                  <button className="glass text-primary px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all border border-white/20">
                    Añadir a Lista
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-12 flex items-center gap-3">
              <div className="w-4 h-0.5 bg-basque-red"></div>
              Sinopsis
            </h2>
            <div className="prose prose-xl text-slate-700 font-medium leading-relaxed">
              <p className="mb-8">
                {book.description || 'Esta obra representa uno de los pilares fundamentales de la colección actual de la Red de Bibliotecas de Euskadi. A través de sus páginas, el autor nos sumerge en una narrativa que trasciende lo cotidiano para explorar temas universales con una sensibilidad única.'}
              </p>
              <p>
                Disponible para préstamo interbibliotecario en toda la red de Euskadi. Consulte las condiciones de acceso y plazos de devolución en su biblioteca de referencia. Patrimonio cultural accesible para toda la ciudadanía.
              </p>
            </div>

            {/* Technical Grid - Professional */}
            <div className="mt-24 pt-24 border-t border-slate-200">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-12">Detalles Técnicos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {[
                  { label: 'ISBN', value: book.isbn || '978-84-204-7183-9' },
                  { label: 'Idioma', value: book.language },
                  { label: 'Categoría', value: book.category },
                  { label: 'Año', value: book.year || '2022' },
                  { label: 'Páginas', value: '432' },
                  { label: 'Formato', value: 'Tapa Dura' }
                ].map((detail, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">{detail.label}</p>
                    <p className="text-sm font-bold text-primary">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-1 bg-basque-red"></div>
                <h3 className="text-xl font-black text-primary mb-10">Disponibilidad en Red</h3>
                <div className="space-y-8">
                  {[
                    { name: 'Koldo Mitxelena (KMK)', status: 'Disponible', color: 'text-accent' },
                    { name: 'Bilbao (Bidebarrieta)', status: 'Prestado', color: 'text-amber-500' },
                    { name: 'Vitoria (Aldecoa)', status: 'Disponible', color: 'text-accent' }
                  ].map((lib, i) => (
                    <div key={i} className="flex justify-between items-center pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                      <div>
                        <p className="font-bold text-primary text-sm">{lib.name}</p>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Sección General</p>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${lib.color}`}>{lib.status}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">info</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-700 leading-tight">
                    Puede solicitar el envío a su biblioteca más cercana a través del préstamo interbibliotecario de la Red de Euskadi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
