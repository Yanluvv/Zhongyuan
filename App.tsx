import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Cases from './components/Cases';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Cases />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;