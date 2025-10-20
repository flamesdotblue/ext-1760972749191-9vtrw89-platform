import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './fonts.css';

export default function App() {
  return (
    <div className="bg-[#EEECEA] text-[#023462] font-lexend selection:bg-[#FDC487] selection:text-[#023462]">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Daan Ferdinandusse — Crafted with clarity in the Netherlands
      </footer>
    </div>
  );
}
