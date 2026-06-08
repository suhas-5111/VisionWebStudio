import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];



const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: isScrolled
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(255,255,255,0.6)',
          borderBottom: isScrolled
            ? '1px solid rgba(0,0,0,0.06)'
            : '1px solid rgba(255,255,255,0.2)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
            aria-label="Vision Web Studio Home"
          >
            <img
              src={logo}
              alt="Vision Web Studio Logo"
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#111111',
              }}
            >
              Vision Web Studio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-[16px] font-medium tracking-tight text-[#111] hover:opacity-50 transition-opacity duration-300 relative group"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Hamburger (mobile only) */}
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              id="hamburger-menu-toggle"
              className="md:hidden flex flex-col gap-[5px] p-2 z-50 relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block w-6 h-[2px] bg-[#111] transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-[2px] bg-[#111] transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-[2px] bg-[#111] transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500"
        style={{
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col items-center gap-8" role="list">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
              }}
            >
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[36px] font-medium tracking-tight text-[#111] hover:opacity-40 transition-opacity duration-300"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
