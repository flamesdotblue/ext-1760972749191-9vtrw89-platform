import React from 'react';
import { Cpu, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Inference Service',
    desc: 'Low-latency model serving with autoscaling, tracing, and canary rollouts.',
    tags: ['Go', 'gRPC', 'CUDA', 'Grafana'],
    link: '#',
  },
  {
    title: 'LLM Retrieval Pipeline',
    desc: 'Hybrid retrieval with distillation, reranking, and evaluation harness.',
    tags: ['Python', 'Faiss', 'RAG', 'Weights & Biases'],
    link: '#',
  },
  {
    title: 'Vision Quality System',
    desc: 'Robust CV pipeline with synthetic data and active learning loops.',
    tags: ['PyTorch', 'Albumentations', 'Airflow'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-6 w-1 rounded-sm bg-[#FF9301]" />
        <h2 className="font-audiowide text-3xl text-[#023462]">Selected Work</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group relative rounded-xl border border-[#023462]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#023462]/0 via-[#D6A52F]/0 to-[#D6A52F]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#023462]">
                  <div className="rounded-md bg-[#023462]/10 p-2 text-[#023462]">
                    <Cpu size={18} />
                  </div>
                  <h3 className="font-audiowide text-lg">{p.title}</h3>
                </div>
                <Github className="text-[#023462]/50 transition group-hover:text-[#023462]" size={18} />
              </div>
              <p className="text-sm text-[#023462]/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-[#EEECEA] px-2.5 py-1 text-xs text-[#023462]/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
