import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Vision Web Studio completely transformed our online presence. Our new website brought in 3x more inquiries within the first month. The design is stunning and our customers love it.",
    name: 'Sarah Mitchell',
    role: 'Owner',
    company: 'Nova Café',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Vision Web Studio was effortless. They understood our brand immediately and delivered a premium fitness landing page that converts like crazy. Highly professional team.",
    name: 'James Okonkwo',
    role: 'Founder',
    company: 'FitCore Gym',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The team at Vision Web Studio delivered beyond expectations. Our salon's website now feels luxury and modern. Bookings have increased significantly since launch. Outstanding work.",
    name: 'Priya Nair',
    role: 'Director',
    company: 'Bloom Beauty',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
    />
  </svg>
);

const Testimonials: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="testimonials"
      className="relative py-28 px-5 sm:px-8 overflow-hidden"
      style={{ backgroundColor: '#f7f7f7' }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="reveal max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6366f1', fontFamily: 'var(--font-body)' }}
          >
            Client Stories
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
            What Our Clients Say
          </h2>
          <p
            className="mt-4 text-[17px] max-w-[480px] mx-auto"
            style={{ color: '#666', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Real feedback from real businesses we've helped grow online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="group relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
              style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.06)',
                animationDelay: `${i * 0.12}s`,
              }}
            >
              {/* Top row: quote icon + stars */}
              <div className="flex items-start justify-between mb-5">
                <div style={{ color: 'rgba(99,102,241,0.2)' }}>
                  <QuoteIcon />
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <StarIcon key={si} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p
                className="text-[15px] leading-relaxed mb-6"
                style={{ color: '#444', fontFamily: 'var(--font-body)' }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div
                className="mb-5"
                style={{ height: '1px', background: 'rgba(0,0,0,0.06)' }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div
                    className="text-[14px] font-semibold"
                    style={{ color: '#111', fontFamily: 'var(--font-heading)' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[12px]"
                    style={{ color: '#999', fontFamily: 'var(--font-body)' }}
                  >
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, #6366f1, #0ea5e9)' }}
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {[
            { label: '4.1 Rating', sub: 'Average client score' },
            { label: '10 Projects', sub: 'Delivered on time' },
            { label: '100% Recommend', sub: 'Client referral rate' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-[22px] font-semibold"
                style={{ fontFamily: 'var(--font-heading)', color: '#111', letterSpacing: '-0.03em' }}
              >
                {item.label}
              </div>
              <div
                className="text-[13px] mt-0.5"
                style={{ color: '#999', fontFamily: 'var(--font-body)' }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
