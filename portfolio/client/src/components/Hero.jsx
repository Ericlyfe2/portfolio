import { useEffect, useState, useRef } from 'react'

const phrases = [
  'Student @ KNUST',
  'DTI Intern @ Volta River Authority',
  'Cybersecurity & Network Administration',
  'Data Analysis · Web3 & Blockchain',
  'Python & C# Developer',
]

function useTypewriter() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    const speed = deleting ? 45 : 80

    const id = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setText(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setPhraseIdx(i => (i + 1) % phrases.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(id)
  }, [charIdx, deleting, phraseIdx])

  return text
}

function useCounter(target, started) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) return
    const duration = 1500
    const step = target / (duration / 16)
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= target) { setVal(target); clearInterval(id) }
      else setVal(Math.floor(current))
    }, 16)
    return () => clearInterval(id)
  }, [target, started])
  return val
}

function StatItem({ target, label, suffix = '' }) {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const val = useCounter(target, started)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="text-3xl font-bold font-mono text-cyan">{val}{suffix}</div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center px-[10%]">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.2)]
          bg-[rgba(0,212,255,0.06)] text-cyan text-sm mb-7 animate-[fadeInUp_0.7s_ease_both]">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-slow" />
          Accra, Ghana · Open to opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-[fadeInUp_0.7s_ease_0.15s_both]">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Eric Asante</span>
        </h1>

        <div className="font-mono text-cyan text-base md:text-lg mb-6 min-h-[1.75rem] animate-[fadeInUp_0.7s_ease_0.3s_both]">
          {typed}
          <span className="inline-block w-0.5 h-5 bg-cyan ml-0.5 align-middle animate-blink" />
        </div>

        <p className="text-slate-400 leading-relaxed max-w-xl mb-9 text-base md:text-lg
          animate-[fadeInUp_0.7s_ease_0.45s_both]">
          Computer Science student at KNUST. Cybersecurity, network administration, data analysis,
          Web3 &amp; blockchain — building with Python &amp; C#. Recently Academic Head at KNUST;
          DTI intern at Volta River Authority.
        </p>

        <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.7s_ease_0.6s_both]">
          <a
            href="#experience"
            onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior:'smooth' }) }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold
              bg-gradient-to-r from-cyan-dk to-purple text-white transition-all duration-300
              hover:-translate-y-1 hover:shadow-cyan"
          >
            <i className="fas fa-briefcase text-sm" /> View Experience
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold
              border border-[rgba(0,212,255,0.25)] text-cyan transition-all duration-300
              hover:bg-[rgba(0,212,255,0.07)] hover:-translate-y-1"
          >
            <i className="fas fa-paper-plane text-sm" /> Get in Touch
          </a>
        </div>

        <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[rgba(0,212,255,0.1)]
          animate-[fadeInUp_0.7s_ease_0.75s_both]">
          <StatItem target={3} label="Top skills" />
          <StatItem target={2} label="Internships completed" />
          <StatItem target={4} label="Languages" />
          <StatItem target={3} label="Experience entries" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-slate-500 text-xs animate-[fadeInUp_0.7s_ease_1s_both]">
        <span>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
