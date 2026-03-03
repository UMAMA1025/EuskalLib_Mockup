import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Book as BookIcon, Search, Filter, ArrowRight, ChevronDown, MapPin, Languages, Calendar, Eye } from 'lucide-react';
import { Book, MOCK_BOOKS, Screen } from '../types';

interface CatalogProps {
  onNavigate: (screen: Screen, bookId?: string) => void;
}

export default function Catalog({ onNavigate }: CatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-paper"
    >
      {/* Search Header - Editorial Style */}
      <section className="bg-white pt-32 pb-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-basque-red"></div>
                <span className="small-caps text-accent block">Exploración Unificada Institucional</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary leading-[0.85] tracking-tight mb-8">
                El <span className="italic font-medium text-basque-red">Catálogo.</span>
              </h1>
              <p className="text-muted text-lg font-light leading-relaxed">
                Acceda a más de 5 millones de registros bibliográficos de la Red de Lectura Pública de Euskadi. Patrimonio cultural a su alcance.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4">
              <div className="flex bg-slate-100/50 p-1 rounded-full border border-line shadow-sm">
                {['Todo', 'Libros', 'Digital'].map((tab, i) => (
                  <button 
                    key={tab}
                    className={`px-8 py-2.5 text-xs font-medium rounded-full transition-all ${
                      i === 0 ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-primary'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
              <Search className="text-muted group-focus-within:text-accent transition-colors size-6" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Título, autor, materia o ISBN..." 
              className="block w-full pl-20 pr-10 py-6 bg-paper border border-line rounded-2xl focus:ring-4 focus:ring-primary/5 focus:bg-white shadow-sm text-xl placeholder-slate-400 transition-all font-light text-primary"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters - Refined */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-10">
                <Filter className="size-4 text-accent" />
                <h2 className="small-caps text-primary">Refinar Resultados</h2>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest flex justify-between items-center">
                    Biblioteca
                    <ChevronDown className="size-3 text-muted" />
                  </h3>
                  <div className="space-y-4">
                    {['Todas', 'Bilbao', 'Donostia', 'Vitoria'].map((lib, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="lib" defaultChecked={i === 0} className="size-4 border-line text-accent focus:ring-accent/20" />
                        <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors">{lib}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest flex justify-between items-center">
                    Idioma
                    <ChevronDown className="size-3 text-muted" />
                  </h3>
                  <div className="space-y-4">
                    {['Euskera', 'Castellano', 'Inglés'].map((lang, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="size-4 rounded border-line text-accent focus:ring-accent/20" />
                        <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-line">
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-line shadow-sm group cursor-pointer hover:border-accent transition-colors">
                    <span className="text-xs font-bold text-muted group-hover:text-primary transition-colors">Solo en estantería</span>
                    <div className="size-4 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="size-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content: Book Grid - Professional */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-16">
              <p className="small-caps">
                Mostrando <span className="text-primary">{filteredBooks.length}</span> resultados
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Ordenar:</span>
                <select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0 cursor-pointer uppercase tracking-widest">
                  <option>Relevancia</option>
                  <option>Novedades</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20"
            >
              {filteredBooks.map((book) => (
                <motion.div 
                  key={book.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { 
                      y: 0, 
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98]
                      }
                    }
                  }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => onNavigate('detail', book.id)}
                >
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-3xl shadow-sm border border-line bg-white">
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="glass size-12 rounded-full flex items-center justify-center text-primary shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <Eye className="size-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-md border border-white/20 ${book.status === 'available' ? 'bg-accent/90 text-white' : 'bg-amber-500/90 text-white'}`}>
                        {book.status === 'available' ? 'Disponible' : 'En Préstamo'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{book.category}</span>
                      <div className="size-1 bg-slate-300 rounded-full"></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted">{book.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    
                    <p className="text-muted font-serif italic text-lg mb-6">{book.author}</p>
                    
                    <div className="mt-auto pt-6 border-t border-line flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                          <MapPin className="size-3 text-muted/40" />
                          {book.library.split(' ')[0]}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                          <Languages className="size-3 text-muted/40" />
                          {book.language}
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-muted group-hover:text-accent transition-colors group-hover:translate-x-1 duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination - Minimalist */}
            <div className="mt-32 flex justify-center items-center gap-12">
              <button className="small-caps hover:text-primary transition-colors">Anterior</button>
              <div className="flex gap-6">
                <span className="text-sm font-bold text-primary">01</span>
                <span className="text-sm font-bold text-muted/30">02</span>
                <span className="text-sm font-bold text-muted/30">03</span>
              </div>
              <button className="small-caps hover:text-primary transition-colors">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
