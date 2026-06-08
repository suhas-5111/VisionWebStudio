import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0a0e1a 0%, #0d1530 25%, #111827 50%, #1a1a2e 75%, #0f0f23 100%)',
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.10) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Floating orb 1 — large blue */}
      <div
        className="absolute rounded-full animate-[orb1_20s_ease-in-out_infinite]"
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '-100px',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating orb 2 — indigo */}
      <div
        className="absolute rounded-full animate-[orb2_25s_ease-in-out_infinite]"
        style={{
          width: '500px',
          height: '500px',
          top: '30%',
          right: '-80px',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Floating orb 3 — cyan */}
      <div
        className="absolute rounded-full animate-[orb3_18s_ease-in-out_infinite]"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          left: '30%',
          background:
            'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top highlight glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '800px',
          height: '2px',
          background:
            'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.5), transparent)',
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '400px',
          height: '120px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
