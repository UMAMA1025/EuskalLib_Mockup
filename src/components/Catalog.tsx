import React, { useState } from 'react';
import { motion } from 'motion/react';
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
      className="min-h-screen"
    >
      {/* Search Header - Editorial Style */}
      <section className="bg-white pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-basque-red"></div>
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] block">Exploración Unificada Institucional</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.85] tracking-tighter mb-8">
                EL <span className="font-serif italic font-normal text-basque-red">Catálogo.</span>
              </h1>
              <p className="text-slate-700 text-lg font-medium leading-relaxed">
                Acceda a más de 5 millones de registros bibliográficos de la Red de Lectura Pública de Euskadi. Patrimonio cultural a su alcance.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4">
              <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-sm">
                <button className="px-8 py-2.5 text-[10px] font-black rounded-full bg-primary shadow-lg text-white uppercase tracking-widest transition-all">Todo</button>
                <button className="px-8 py-2.5 text-[10px] font-black rounded-full text-slate-600 hover:text-primary uppercase tracking-widest transition-all">Libros</button>
                <button className="px-8 py-2.5 text-[10px] font-black rounded-full text-slate-600 hover:text-primary uppercase tracking-widest transition-all">Digital</button>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-500 group-focus-within:text-accent transition-colors text-2xl">search</span>
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Título, autor, materia o ISBN..." 
              className="block w-full pl-20 pr-10 py-6 bg-paper border border-slate-200 rounded-[1.5rem] focus:ring-4 focus:ring-primary/5 focus:bg-white shadow-inner text-xl placeholder-slate-500 transition-all font-medium text-primary"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters - Minimalist */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-12 flex items-center gap-3">
                <div className="w-4 h-0.5 bg-basque-red"></div>
                Refinar Resultados
              </h2>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-xs font-black text-primary mb-6 uppercase tracking-widest">Biblioteca</h3>
                  <div className="space-y-4">
                    {['Todas', 'Bilbao', 'Donostia', 'Vitoria'].map((lib, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="lib" defaultChecked={i === 0} className="size-4 border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{lib}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black text-primary mb-6 uppercase tracking-widest">Idioma</h3>
                  <div className="space-y-4">
                    {['Euskera', 'Castellano', 'Inglés'].map((lang, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="size-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black text-primary mb-6 uppercase tracking-widest">Disponibilidad</h3>
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-bold text-slate-700">Solo en estantería</span>
                    <div className="size-5 bg-accent rounded-full shadow-lg shadow-accent/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content: Book Grid - Professional */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-16">
              <p className="text-xs font-black text-slate-600 uppercase tracking-[0.2em]">
                Mostrando <span className="text-primary">{filteredBooks.length}</span> resultados
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ordenar:</span>
                <select className="bg-transparent border-none text-xs font-black text-primary focus:ring-0 cursor-pointer uppercase tracking-widest">
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
                    hidden: { y: 30, opacity: 0 },
                    visible: { 
                      y: 0, 
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98]
                      }
                    }
                  }}
                  whileHover={{ y: -12 }}
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => onNavigate('detail', book.id)}
                >
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200/50 bg-white">
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="glass size-12 rounded-full flex items-center justify-center text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="material-symbols-outlined">visibility</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md border border-white/20 ${book.status === 'available' ? 'bg-accent/90 text-white' : 'bg-amber-500/90 text-primary'}`}>
                        {book.status === 'available' ? 'Disponible' : 'En Préstamo'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent">{book.category}</span>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">{book.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-primary mb-2 leading-tight group-hover:text-accent transition-colors line-clamp-2 tracking-tighter">
                      {book.title}
                    </h3>
                    
                    <p className="text-slate-500 font-serif italic text-lg mb-6">{book.author}</p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm text-slate-300">location_on</span>
                          {book.library.split(' ')[0]}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm text-slate-300">translate</span>
                          {book.language}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-accent transition-colors group-hover:translate-x-1 duration-300">arrow_forward</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination - Minimalist */}
            <div className="mt-32 flex justify-center items-center gap-12">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-primary transition-colors">Anterior</button>
              <div className="flex gap-6">
                <span className="text-xs font-black text-primary">01</span>
                <span className="text-xs font-black text-slate-300">02</span>
                <span className="text-xs font-black text-slate-300">03</span>
              </div>
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-primary transition-colors">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
