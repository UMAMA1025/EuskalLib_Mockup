import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../types';
import { Book, Library, User, LayoutDashboard, LogIn, Search, Globe, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isLoggedIn: boolean;
}

export default function Layout({ children, currentScreen, onNavigate, isLoggedIn }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Globe },
    { id: 'catalog', label: 'Catálogo', icon: Book },
    { id: 'libraries', label: 'Bibliotecas', icon: Library },
    ...(isLoggedIn ? [
      { id: 'profile', label: 'Mi Cuenta', icon: User },
      { id: 'dashboard', label: 'Gestión', icon: LayoutDashboard }
    ] : [])
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-4 cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <div className="bg-primary size-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Book className="text-white size-6" />
                </div>
                <div className="absolute -bottom-1 -right-1 size-4 bg-accent rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-primary leading-none">EuskalLib</span>
                <span className="small-caps mt-1">Red de Bibliotecas</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => onNavigate(item.id as Screen)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all relative ${
                    currentScreen === item.id 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-muted hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-slate-100/50 rounded-full p-1 border border-line">
                {['ES', 'EU'].map(lang => (
                  <button key={lang} className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'ES' ? 'bg-white shadow-sm text-primary' : 'text-muted hover:text-primary'}`}>
                    {lang}
                  </button>
                ))}
              </div>
              
              <div className="h-6 w-px bg-line hidden lg:block"></div>

              {!isLoggedIn ? (
                <button 
                  onClick={() => onNavigate('login')}
                  className="btn-premium btn-primary"
                >
                  <LogIn className="size-4" />
                  <span className="hidden sm:inline">Acceso</span>
                </button>
              ) : (
                <button 
                  onClick={() => onNavigate('profile')}
                  className="size-10 rounded-full border border-line p-0.5 overflow-hidden hover:ring-2 hover:ring-accent/20 transition-all"
                >
                  <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                className="xl:hidden p-2 text-muted hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:hidden bg-white border-b border-line px-6 py-8"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id as Screen);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-sm font-medium transition-all ${
                    currentScreen === item.id 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-50 text-muted'
                  }`}
                >
                  <item.icon className="size-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-line pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary size-10 rounded-lg flex items-center justify-center">
                  <Book className="text-white size-5" />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight text-primary">EuskalLib</span>
              </div>
              <p className="text-muted text-lg font-serif italic leading-relaxed max-w-md">
                "Uniendo el patrimonio bibliográfico de Euskadi en una sola red digital. Cultura libre, accesible y universal."
              </p>
              <div className="flex gap-4 mt-10">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <button key={i} className="size-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all">
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="small-caps mb-8">Explorar</h4>
              <ul className="space-y-4 text-sm font-medium text-muted">
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-primary transition-colors">Catálogo</button></li>
                <li><button className="hover:text-primary transition-colors">Bibliotecas</button></li>
                <li><button className="hover:text-primary transition-colors">Actividades</button></li>
                <li><button className="hover:text-primary transition-colors">Noticias</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="small-caps mb-8">Mi Cuenta</h4>
              <ul className="space-y-4 text-sm font-medium text-muted">
                <li><button onClick={() => onNavigate('profile')} className="hover:text-primary transition-colors">Perfil</button></li>
                <li><button onClick={() => onNavigate('dashboard')} className="hover:text-primary transition-colors">Gestión</button></li>
                <li><button onClick={() => onNavigate('login')} className="hover:text-primary transition-colors">Acceso</button></li>
                <li><button className="hover:text-primary transition-colors">Préstamos</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="small-caps mb-8">Contacto</h4>
              <ul className="space-y-6 text-sm font-medium text-muted">
                <li className="flex gap-4">
                  <MapPin className="size-5 text-accent shrink-0" />
                  <span>Donostia - San Sebastián<br /><span className="text-muted/60 text-xs">Plaza de la Constitución, 1</span></span>
                </li>
                <li className="flex gap-4">
                  <Mail className="size-5 text-accent shrink-0" />
                  <span>contacto@euskallib.eus</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-line pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-semibold text-muted/60 uppercase tracking-widest">
              © 2024 EuskalLib - Eusko Jaurlaritza / Gobierno Vasco
            </p>
            <div className="flex gap-8">
              {['Aviso Legal', 'Privacidad', 'Cookies'].map(link => (
                <a key={link} href="#" className="text-[10px] font-semibold text-muted/60 uppercase tracking-widest hover:text-primary transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
