/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base':  '#050810',
        'bg-2':     '#0b0f1e',
        'bg-3':     '#0f1528',
        'cyan':     '#00d4ff',
        'cyan-dk':  '#0099cc',
        'purple':   '#7c3aed',
        'purple-lt':'#a855f7',
        'neon':     '#00ff88',
        'border-glow': 'rgba(0,212,255,0.18)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':  'spin 20s linear infinite',
        'spin-reverse': 'spin 30s linear infinite reverse',
        'border-glow': 'borderGlow 3s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'progress': 'progressFill 1.5s ease forwards',
        'fadeInUp': 'fadeInUp 0.7s ease both',
      },
      keyframes: {
        borderGlow: { '0%,100%': { filter: 'hue-rotate(0deg)' }, '50%': { filter: 'hue-rotate(180deg)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scrollLine: { '0%,100%': { transform: 'scaleY(1)', opacity: '1' }, '50%': { transform: 'scaleY(0.4)', opacity: '0.4' } },
        progressFill: { from: { width: '0%' }, to: { width: '75%' } },
        fadeInUp: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      backdropBlur: { '2xl': '40px' },
      boxShadow: {
        'cyan': '0 0 20px rgba(0,212,255,0.4)',
        'purple': '0 0 20px rgba(124,58,237,0.4)',
        'neon': '0 0 12px rgba(0,255,136,0.5)',
        'card': '0 20px 40px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
