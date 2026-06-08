import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const PROJECTS = [
  {
    id: 1,
    name: 'Nova Café',
    category: 'Restaurant Website',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=280&fit=crop&auto=format',
    color: '#f5e6d3',
    rotate: '-3deg',
    animClass: 'animate-[float1_8s_ease-in-out_infinite]',
    style: { top: '8%', left: '5%', zIndex: 3 },
  },
  {
    id: 2,
    name: 'UrbanWear',
    category: 'Fashion Store',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=280&fit=crop&auto=format',
    color: '#f0e8fe',
    rotate: '2deg',
    animClass: 'animate-[float3_12s_ease-in-out_infinite]',
    style: { top: '5%', right: '2%', zIndex: 2 },
  },
  {
    id: 3,
    name: 'LivSpace Interiors',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=280&fit=crop&auto=format',
    color: '#e8f4ee',
    rotate: '-1.5deg',
    animClass: 'animate-[float5_11s_ease-in-out_infinite]',
    style: { bottom: '8%', left: '15%', zIndex: 1 },
  },
];

const FloatingCard: React.FC<typeof PROJECTS[0]> = ({
  name, category, image, color, rotate, animClass, style,
}) => (
  <div
    className={`absolute w-[200px] sm:w-[220px] lg:w-[240px] ${animClass} hover:scale-105 transition-transform duration-300 cursor-pointer`}
    style={{ ...style, transform: `rotate(${rotate})` }}
  >
    <div
      className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.25)] transition-shadow duration-300"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.5)',
      }}
    >
      <div className="relative overflow-hidden" style={{ height: '130px' }}>
        <img
          src={image}
          alt={`${name} website preview`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 50%, ${color}88 100%)`,
          }}
        />
      </div>
      <div className="px-3 py-2.5" style={{ backgroundColor: color }}>
        <p
          className="text-[13px] font-semibold text-[#111] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </p>
        <p
          className="text-[11px] text-[#666] mt-0.5"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {category}
        </p>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const typewriterText = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex items-center justify-between min-h-screen overflow-hidden"
      style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '100px' }}
    >
      {/* Left Content */}
      <div className="relative z-10 flex-1 max-w-[620px] py-16">
        {/* Intro Label */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-[13px] tracking-widest uppercase"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.12em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"
          />
          Creative Websites for Growing Businesses
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: 'clamp(42px, 6vw, 90px)',
            lineHeight: 0.95,
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            maxWidth: '900px',
            color: '#ffffff',
          }}
        >
          We Build{' '}
          <span className="gradient-text">Modern</span>{' '}
          Websites That Help Businesses{' '}
          <span className="gradient-text">Grow</span>{' '}
          Online.
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 text-[17px] leading-relaxed"
          style={{
            maxWidth: '560px',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Vision Web Studio creates premium websites for startups, local brands, and
          growing businesses — helping them stand out, attract customers, and scale online.
        </p>

        {/* Typewriter */}
        <div
          className="mt-5 flex items-center gap-2 text-[18px] font-medium"
          style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}
        >
          <span className="text-indigo-400">We specialize in</span>
          <span>
            {typewriterText}
            <span className="cursor-blink" style={{ background: 'rgba(255,255,255,0.8)' }} />
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#contact"
            id="hero-cta-start-project"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#111] text-[16px] font-semibold rounded-full tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#portfolio"
            id="hero-cta-view-portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-7 py-4 text-white text-[16px] font-medium rounded-full tracking-tight transition-all duration-300 hover:bg-white hover:text-[#111]"
            style={{
              border: '1.5px solid rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-body)',
            }}
          >
            View Portfolio
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-12">
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '1+', label: 'Years of Excellence' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[26px] font-semibold text-white"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </div>
              <div
                className="text-[12px] mt-0.5"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Floating Cards */}
      <div
        className="hidden lg:block relative flex-1"
        style={{ height: '700px', minWidth: '480px' }}
        aria-label="Portfolio mockup showcase"
      >
        {PROJECTS.map((project) => (
          <FloatingCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
