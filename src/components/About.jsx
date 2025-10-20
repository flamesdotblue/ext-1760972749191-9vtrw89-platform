import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="font-audiowide text-3xl text-[#023462]">About</h2>
          <p className="mt-4 text-[#023462]/80">
            I’m Daan, an AI engineer focused on building reliable, production-grade machine learning systems. My work bridges research and engineering — from model design and optimization to deployment and monitoring. I value Dutch simplicity: clean solutions, clear metrics, and strong collaboration.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#023462]/80">
            <li className="rounded-md bg-white/70 px-3 py-2 shadow-sm">ML Systems</li>
            <li className="rounded-md bg-white/70 px-3 py-2 shadow-sm">MLOps & Observability</li>
            <li className="rounded-md bg-white/70 px-3 py-2 shadow-sm">LLMs & Retrieval</li>
            <li className="rounded-md bg-white/70 px-3 py-2 shadow-sm">Optimization & Inference</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#D6A52F] via-[#FDC487] to-[#FF9301] opacity-80 blur-md" />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl bg-[#EEECEA] shadow-lg md:h-64 md:w-64">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-[#023462]/10 bg-white text-[#023462]">
                <span className="font-audiowide text-3xl">DF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
