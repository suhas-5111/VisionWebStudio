import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-28 px-5 sm:px-8 overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Floating background shapes */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10 animate-[orb1_20s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-10 animate-[orb2_25s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={ref} className="reveal">
            <span
              className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: '#6366f1', fontFamily: 'var(--font-body)' }}
            >
              About Us
            </span>
            <h2
              className="text-[clamp(36px,5vw,68px)] leading-none mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                color: '#ffffff',
              }}
            >
              Small Team.{' '}
              <br />
              <span className="gradient-text">Big Vision.</span>
            </h2>
            <p
              className="text-[17px] leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
            >
              Vision Web Studio is a boutique digital design studio focused on helping small and mid-sized businesses create powerful online presences that actually convert.
            </p>
            <p
              className="text-[17px] leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
            >
              We believe every business — no matter the size — deserves a world-class digital experience. We craft modern websites, brand identities, and landing pages that elevate credibility, build trust with customers, and drive real growth online.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✦', label: 'Pixel Perfect Design' },
                { icon: '⚡', label: 'Fast Delivery' },
                { icon: '♻', label: 'Reusable Systems' },
                { icon: '🤝', label: 'Client-First Approach' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="text-[18px]">{item.icon}</span>
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Stats Panel */}
          <div ref={ref2} className="reveal">
            <div
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: '10+', label: 'Projects Completed', color: '#6366f1' },
                  { value: '5+', label: 'Happy Clients', color: '#0ea5e9' },
                  { value: '1+', label: 'Years Experience', color: '#10b981' },
                  { value: '100%', label: 'On-Time Delivery', color: '#f59e0b' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-5 px-4 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <div
                      className="text-[40px] font-bold leading-none"
                      style={{ fontFamily: 'var(--font-heading)', color: stat.color, letterSpacing: '-0.04em' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[13px] mt-2"
                      style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div>
                <h4
                  className="text-[15px] font-semibold mb-4"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}
                >
                  Our Process
                </h4>
                {[
                  { step: '01', title: 'Discovery & Strategy', desc: 'We understand your brand and goals.' },
                  { step: '02', title: 'Design & Build', desc: 'We craft your site with precision.' },
                  { step: '03', title: 'Launch & Grow', desc: 'We deliver and support your growth.' },
                ].map((item, i) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 mb-4"
                  >
                    <span
                      className="text-[12px] font-bold mt-0.5"
                      style={{ color: '#6366f1', fontFamily: 'var(--font-body)', minWidth: '24px' }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <div
                        className="text-[15px] font-semibold"
                        style={{ color: '#fff', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-[13px]"
                        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
                      >
                        {item.desc}
                      </div>
                    </div>
                    {i < 2 && (
                      <div
                        className="absolute left-[32px] mt-[24px]"
                        style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
