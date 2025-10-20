import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 text-white/90">
        <a href="#home" className="font-audiowide tracking-wide text-white/90 hover:text-white transition-colors text-lg">
          Daan Ferdinandusse
        </a>
        <div className="hidden gap-8 md:flex">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="mb-6 h-1 w-24 bg-[#FF9301]" />
        <h1 className="font-audiowide text-4xl leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] sm:text-5xl md:text-6xl">
          Daan Ferdinandusse — AI Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Building intelligent systems with clarity and precision. I design, train, and deploy robust ML solutions — from research to production — with a sharp eye for performance and simplicity.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#FF9301] px-5 py-3 font-medium text-[#023462] shadow-sm transition hover:translate-y-[-1px] hover:bg-[#FDC487] hover:shadow-md"
          >
            Get in touch
          </a>
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:daan@example.com"
              className="rounded-full bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
