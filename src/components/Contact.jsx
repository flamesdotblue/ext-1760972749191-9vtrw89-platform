import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — I\'ll get back to you shortly.');
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-6 w-1 rounded-sm bg-[#FF9301]" />
        <h2 className="font-audiowide text-3xl text-[#023462]">Contact</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-[#023462]/80">
            Prefer email? Reach me directly at
            <a href="mailto:daan@example.com" className="ml-2 underline decoration-[#FDC487] underline-offset-4 hover:text-[#023462]">
              daan@example.com
            </a>
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#023462]/15 bg-white px-3 py-2 text-sm text-[#023462]/80 transition hover:bg-[#FDC487]/40"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#023462]/15 bg-white px-3 py-2 text-sm text-[#023462]/80 transition hover:bg-[#FDC487]/40"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-[#023462]/10 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm text-[#023462]/70">Name</label>
              <input
                required
                type="text"
                className="mt-1 w-full rounded-md border border-[#023462]/15 bg-[#EEECEA] px-3 py-2 text-[#023462] outline-none ring-[#FDC487] focus:ring"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-[#023462]/70">Email</label>
              <input
                required
                type="email"
                className="mt-1 w-full rounded-md border border-[#023462]/15 bg-[#EEECEA] px-3 py-2 text-[#023462] outline-none ring-[#FDC487] focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-[#023462]/70">Message</label>
              <textarea
                required
                rows="4"
                className="mt-1 w-full rounded-md border border-[#023462]/15 bg-[#EEECEA] px-3 py-2 text-[#023462] outline-none ring-[#FDC487] focus:ring"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#FF9301] px-5 py-3 font-medium text-[#023462] shadow-sm transition hover:bg-[#FDC487]"
          >
            <Mail size={18} /> Send
          </button>
          {status && <p className="mt-3 text-sm text-[#023462]/80">{status}</p>}
        </form>
      </div>
    </section>
  );
}
