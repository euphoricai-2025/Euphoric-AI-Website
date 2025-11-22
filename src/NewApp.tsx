import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BannerProvider } from './contexts/BannerContext';
import BlackFridayBanner from './components/BlackFridayBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Book from './pages/domains/Book';

function NewApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BannerProvider>
          <Router>
            <ScrollToTop />
            <NewAppContent />
          </Router>
        </BannerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function NewAppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-euphoric-surface">
      {!isDashboard && <BlackFridayBanner />}
      {!isDashboard && <Header />}
      <main>
        <Routes>
          <Route path="/domain/book" element={<Book />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default NewApp;
