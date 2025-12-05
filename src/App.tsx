import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Waitlist from './components/Waitlist';
import Trending from './components/Trending';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-accent selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trending />
        <Ecosystem />
        <Waitlist />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
