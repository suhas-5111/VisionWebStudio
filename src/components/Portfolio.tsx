import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  {
    id: 1,
    name: 'Nova Café',
    industry: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&h=500&fit=crop&auto=format',
    tag: 'Restaurant Website',
    year: '2024',
    projectLink: 'https://www.openhousecafe.in/',
  },
  {
    id: 2,
    name: 'UrbanWear',
    industry: 'Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&h=500&fit=crop&auto=format',
    tag: 'Fashion Store',
    year: '2024',
    projectLink: 'https://www.only.in/collections/on-all-product',
  },
  {
    id: 3,
    name: 'LivSpace Interiors',
    industry: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&h=500&fit=crop&auto=format',
    tag: 'Interior Designer',
    year: '2024',
    projectLink: 'https://www.livspace.com/in',
  },
];

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section
      id="portfolio"
      className="relative py-28 px-5 sm:px-8"
      style={{
        background: 'linear-gradient(180deg, #f7f7f7 0%, #f0f0f5 100%)',
      }}
    >
      <div ref={ref} className="reveal max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6366f1', fontFamily: 'var(--font-body)' }}
          >
            Our Work
          </span>
          <h2
            className="text-[clamp(36px,5vw,64px)] leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              color: '#111',
            }}
          >
            Selected Work
          </h2>
          <p
            className="mt-4 text-[17px] max-w-[480px] mx-auto"
            style={{ color: '#666', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            A curated selection of projects we've built for growing businesses across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(project.projectLink, '_blank', 'noopener,noreferrer')}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <img
                  src={project.image}
                  alt={`${project.name} website`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                    opacity: hoveredId === project.id ? 1 : 0.4,
                  }}
                />

                {/* View Project Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-400"
                  style={{ opacity: hoveredId === project.id ? 1 : 0 }}
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#111] text-[14px] font-semibold rounded-full transform transition-transform duration-400 hover:bg-indigo-50"
                    style={{
                      fontFamily: 'var(--font-body)',
                      transform: hoveredId === project.id ? 'translateY(0)' : 'translateY(10px)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Info */}
              <div
                className="px-5 py-4"
                style={{ background: '#fff' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-[18px] font-semibold leading-tight"
                      style={{ fontFamily: 'var(--font-heading)', color: '#111', letterSpacing: '-0.02em' }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-[13px] mt-0.5"
                      style={{ color: '#888', fontFamily: 'var(--font-body)' }}
                    >
                      {project.industry}
                    </p>
                  </div>
                  <span
                    className="text-[11px] px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      color: '#6366f1',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            id="portfolio-cta-start-project"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#111] text-white text-[16px] font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
