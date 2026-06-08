import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const Contact: React.FC = () => {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    console.log('Attempting to send email with:', {
      serviceId: SERVICE_ID,
      templateId: TEMPLATE_ID,
      publicKey: PUBLIC_KEY ? 'EXISTS' : 'MISSING',
      publicKeyVal: PUBLIC_KEY,
    });
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to:  formData.email,
          message:   formData.message,
        },
        PUBLIC_KEY
      );
      console.log('EmailJS Success Response:', response);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error Object:', err);
      setError('Oops! Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-5 sm:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0e1a 0%, #111827 60%, #0f172a 100%)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="reveal max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6366f1', fontFamily: 'var(--font-body)' }}
          >
            Get In Touch
          </span>
          <h2
            className="text-[clamp(36px,5vw,72px)] leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              color: '#ffffff',
            }}
          >
            Let's Build Something{' '}
            <span className="gradient-text">Great</span>{' '}
            Together.
          </h2>
          <p
            className="mt-5 text-[17px] max-w-[520px] mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Ready to elevate your business online? We'd love to hear from you. Let's create something remarkable together.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-14">
            <a
              href="mailto:officialvisionweb@gmail.com"
              id="contact-cta-email"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#111] text-[16px] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Vision Web Studio
            </a>
          </div>
        </div>

        {/* Main Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div
            className="lg:col-span-3 rounded-3xl p-8"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h3
              className="text-[20px] font-semibold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '-0.02em' }}
            >
              Send a Message
            </h3>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="text-4xl mb-4">✅</div>
                <h4
                  className="text-[22px] font-semibold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Message Sent!
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[13px] font-medium mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-all duration-300 placeholder:text-white/20 focus:border-indigo-500/60"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] font-medium mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="hello@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-all duration-300 placeholder:text-white/20 focus:border-indigo-500/60"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[13px] font-medium mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="I need a website for my business..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-all duration-300 placeholder:text-white/20 focus:border-indigo-500/60 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-white text-[#111] text-[16px] font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {sending ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending…
                    </span>
                  ) : 'Send Message →'}
                </button>
                {error && (
                  <p
                    className="text-[13px] text-center mt-2"
                    style={{ color: '#f87171', fontFamily: 'var(--font-body)' }}
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Email */}
            <a
              href="mailto:officialvisionweb@gmail.com"
              className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(99,102,241,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-medium uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>Email</div>
                <div className="text-[15px] font-medium" style={{ color: '#fff', fontFamily: 'var(--font-body)' }}>officialvisionweb@gmail.com</div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vision_web.studio?igsh=YzduNG43N3BoZGo2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(236,72,153,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-medium uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>Instagram</div>
                <div className="text-[15px] font-medium" style={{ color: '#fff', fontFamily: 'var(--font-body)' }}>@vision_web.studio</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918970172989"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(34,197,94,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-medium uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>WhatsApp</div>
                <div className="text-[15px] font-medium" style={{ color: '#fff', fontFamily: 'var(--font-body)' }}>+91 89701 72989</div>
              </div>
            </a>

            {/* Response time note */}
            <div
              className="p-5 rounded-2xl mt-auto"
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>
                  Available for new projects
                </span>
              </div>
              <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
