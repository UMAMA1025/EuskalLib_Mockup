import React, { useState } from 'react';
import { Screen } from './types';
import Layout from './components/Layout';
import Home from './components/Home';
import Catalog from './components/Catalog';
import BookDetail from './components/BookDetail';
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedBookId, setSelectedBookId] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (screen: Screen, bookId?: string) => {
    setCurrentScreen(screen);
    if (bookId) {
      setSelectedBookId(bookId);
    }
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleNavigate('profile');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleNavigate('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'catalog':
        return <Catalog onNavigate={handleNavigate} />;
      case 'detail':
        return selectedBookId ? (
          <BookDetail bookId={selectedBookId} onNavigate={handleNavigate} />
        ) : (
          <Catalog onNavigate={handleNavigate} />
        );
      case 'login':
        return <Login onNavigate={handleLogin} />;
      case 'profile':
        return <Profile onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentScreen={currentScreen} onNavigate={handleNavigate} isLoggedIn={isLoggedIn}>
      {renderScreen()}
    </Layout>
  );
}
