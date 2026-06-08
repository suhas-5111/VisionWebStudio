import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  {
    id: 'website-design',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Website Design',
    description: 'Modern responsive UI/UX websites for businesses. Crafted with precision and performance in mind — every pixel purposeful.',
    tag: 'UI/UX Design',
    learnMoreLink: 'https://www.awwwards.com/websites/',
  },
  {
    id: 'business-branding',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: 'Business Branding',
    description: 'Clean digital identity and modern branding systems. We craft visual stories that resonate with your audience and elevate your presence.',
    tag: 'Brand Identity',
    learnMoreLink: 'https://www.behance.net/search/projects/branding',
  },
  {
    id: 'landing-pages',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Landing Pages',
    description: 'High-converting pages designed for campaigns and ads. Optimized for clarity, speed, and maximum conversion rate.',
    tag: 'Conversion Focused',
    learnMoreLink: 'https://unbounce.com/landing-page-examples/',
  },
];

const Services: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="services"
      className="relative py-28 px-5 sm:px-8"
      style={{ backgroundColor: 'rgba(247,247,247,0.98)' }}
    >
      {/* Section Header */}
      <div ref={ref} className="reveal max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6366f1', fontFamily: 'var(--font-body)' }}
          >
            What We Offer
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
            What We Do
          </h2>
          <p
            className="mt-4 text-[17px] max-w-[520px] mx-auto"
            style={{ color: '#666', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Everything your business needs to stand out online — from stunning websites to complete brand identities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <a
              key={service.id}
              id={`service-card-${service.id}`}
              href={service.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.1)]"
              style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.06)',
                animationDelay: `${i * 0.15}s`,
                textDecoration: 'none',
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #0ea5e9)',
                }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #f0f0ff, #e8f4ff)',
                  color: '#6366f1',
                }}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <span
                className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(99,102,241,0.08)',
                  color: '#6366f1',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3
                className="text-[22px] font-semibold mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', color: '#111', letterSpacing: '-0.02em' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: '#666', fontFamily: 'var(--font-body)' }}
              >
                {service.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium opacity-80 group-hover:opacity-100 transition-all duration-300"
                style={{ color: '#6366f1' }}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
