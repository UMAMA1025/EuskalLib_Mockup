import React from 'react';
import { motion } from 'motion/react';
import { Book as BookIcon, ArrowLeft, Share2, Bookmark, MapPin, Info, Globe, Calendar, Languages, Hash, FileText, Layout as LayoutIcon } from 'lucide-react';
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
      className="min-h-screen bg-paper"
    >
      {/* Magazine Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover opacity-20 blur-2xl scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <motion.div 
                layoutId={`book-cover-${book.id}`}
                className="aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden border-8 border-white/10"
              >
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button 
                  onClick={() => onNavigate('catalog')}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 small-caps"
                >
                  <ArrowLeft className="size-4" />
                  Volver al catálogo
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-basque-red"></div>
                  <span className="small-caps text-accent">Ficha Bibliográfica Institucional</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[0.9] tracking-tight mb-6 text-balance">
                  {book.title}
                </h1>
                <p className="text-white/80 text-2xl font-serif italic mb-10">por {book.author}</p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn-premium btn-primary py-4 px-10">
                    <Bookmark className="size-4" />
                    Reservar ahora
                  </button>
                  <button className="btn-premium btn-outline border-white/20 text-white hover:bg-white/10 py-4 px-10">
                    <Share2 className="size-4" />
                    Compartir
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
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-basque-red"></div>
              <h2 className="small-caps text-primary">Sinopsis</h2>
            </div>
            <div className="prose prose-lg text-muted font-light leading-relaxed max-w-none">
              <p className="mb-8 text-xl font-serif italic text-primary/80">
                {book.description || 'Esta obra representa uno de los pilares fundamentales de la colección actual de la Red de Bibliotecas de Euskadi. A través de sus páginas, el autor nos sumerge en una narrativa que trasciende lo cotidiano para explorar temas universales con una sensibilidad única.'}
              </p>
              <p>
                Disponible para préstamo interbibliotecario en toda la red de Euskadi. Consulte las condiciones de acceso y plazos de devolución en su biblioteca de referencia. Patrimonio cultural accesible para toda la ciudadanía.
              </p>
            </div>

            {/* Technical Grid - Professional */}
            <div className="mt-24 pt-24 border-t border-line">
              <h2 className="small-caps text-primary mb-12">Detalles Técnicos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {[
                  { label: 'ISBN', value: book.isbn || '978-84-204-7183-9', icon: Hash },
                  { label: 'Idioma', value: book.language, icon: Languages },
                  { label: 'Categoría', value: book.category, icon: LayoutIcon },
                  { label: 'Año', value: book.year || '2022', icon: Calendar },
                  { label: 'Páginas', value: '432', icon: FileText },
                  { label: 'Formato', value: 'Tapa Dura', icon: BookIcon }
                ].map((detail, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <detail.icon className="size-3 text-muted/40" />
                      <p className="small-caps text-[9px]">{detail.label}</p>
                    </div>
                    <p className="text-sm font-bold text-primary">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl p-10 border border-line shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-px bg-basque-red"></div>
                <h3 className="text-xl font-serif font-bold text-primary mb-10">Disponibilidad en Red</h3>
                <div className="space-y-6">
                  {[
                    { name: 'Koldo Mitxelena (KMK)', status: 'Disponible', color: 'text-accent', bg: 'bg-accent/10' },
                    { name: 'Bilbao (Bidebarrieta)', status: 'Prestado', color: 'text-amber-600', bg: 'bg-amber-50' },
                    { name: 'Vitoria (Aldecoa)', status: 'Disponible', color: 'text-accent', bg: 'bg-accent/10' }
                  ].map((lib, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-2xl border border-line/50 hover:border-line transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-muted">
                          <MapPin className="size-4" />
                        </div>
                        <div>
                          <p className="font-bold text-primary text-sm">{lib.name}</p>
                          <p className="text-[10px] font-medium text-muted uppercase tracking-widest mt-0.5">Sección General</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${lib.bg} ${lib.color}`}>
                        {lib.status}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 bg-paper rounded-2xl border border-line flex items-start gap-4">
                  <Info className="size-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-muted leading-relaxed">
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
