import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Future from './components/Future';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  // Simple fade-in effect on load
  useEffect(() => {
    document.body.classList.add('opacity-100');
    document.body.classList.remove('opacity-0');
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Future />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;