import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;