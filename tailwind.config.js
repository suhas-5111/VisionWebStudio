/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['HelveticaNowDisplay-Medium', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['HelveticaNowDisplayW01-Rg', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a0e1a',
          800: '#0d1226',
          700: '#111829',
        },
      },
      animation: {
        float1: 'float1 8s ease-in-out infinite',
        float2: 'float2 10s ease-in-out infinite',
        float3: 'float3 12s ease-in-out infinite',
        float4: 'float4 9s ease-in-out infinite',
        float5: 'float5 11s ease-in-out infinite',
        float6: 'float6 7s ease-in-out infinite',
        orb1: 'orb1 20s ease-in-out infinite',
        orb2: 'orb2 25s ease-in-out infinite',
        orb3: 'orb3 18s ease-in-out infinite',
        gradientShift: 'gradientShift 12s ease infinite',
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-1deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(2deg)' },
          '50%': { transform: 'translateY(-28px) rotate(4deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '50%': { transform: 'translateY(10px) rotate(1deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translateY(-5px) rotate(-2deg)' },
          '50%': { transform: 'translateY(15px) rotate(0deg)' },
        },
        float6: {
          '0%, 100%': { transform: 'translateY(0px) rotate(1deg)' },
          '50%': { transform: 'translateY(-22px) rotate(-1deg)' },
        },
        orb1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(80px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 80px) scale(0.95)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-100px, 60px) scale(1.05)' },
          '66%': { transform: 'translate(60px, -40px) scale(1.1)' },
        },
        orb3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, 50px) scale(1.08)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
