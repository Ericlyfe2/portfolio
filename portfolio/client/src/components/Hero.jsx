import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Aurora from './Aurora'
import Hero3DObject from './Hero3DObject'
import DecryptedText from './DecryptedText'

const phrases = [
  'Software Engineering & Cybersecurity Intern @ VRA',
  'Final-Year BSc Computer Science @ KNUST',
  'Full-Stack Developer · Python, C#/.NET, Node.js',
  'Cybersecurity & Network Administration',
  'MySQL · MongoDB · Cloud & Web3',
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-3xl font-bold font-mono text-cyan"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        {val}{suffix}
      </motion.div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function MagneticButton({ children, className, onClick, href }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.2, y: y * 0.2 })
  }

  const handleLeave = () => setPosition({ x: 0, y: 0 })

  const handleClick = (e) => {
    e.preventDefault()
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.a
      ref={ref}
      href={`#${href}`}
      onClick={handleClick}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 8, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center px-[10%] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Aurora
          colorStops={['#00d4ff', '#7c3aed', '#050810']}
          amplitude={0.8}
          blend={0.3}
          speed={0.5}
        />
      </div>
      <Hero3DObject />

      <motion.div
        className="max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.2)]
            bg-[rgba(0,212,255,0.06)] text-cyan text-sm mb-7"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-neon"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          Accra, Ghana · Open to opportunities
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <DecryptedText
            text="Eric Asante"
            animateOn="hover"
            sequential
            revealDirection="start"
            speed={35}
            maxIterations={8}
            useOriginalCharsOnly
            className="gradient-text"
            encryptedClassName="text-slate-500"
          />
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="font-mono text-cyan text-base md:text-lg mb-6 min-h-[1.75rem]"
        >
          {typed}
          <motion.span
            className="inline-block w-0.5 h-5 bg-cyan ml-0.5 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5, ease: 'stepEnd' }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 leading-relaxed max-w-xl mb-9 text-base md:text-lg"
        >
          Software engineering &amp; cybersecurity intern at the Volta River Authority (DTI Office), building and
          securing applications inside a national critical-infrastructure environment. Full-stack developer in
          Python, C#/.NET, Node.js, MySQL &amp; MongoDB — final-year BSc Computer Science candidate at KNUST (2026)
          and elected leader representing 500+ students.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <MagneticButton
            href="experience"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold
              bg-gradient-to-r from-cyan-dk to-purple text-white cursor-pointer"
          >
            <i className="fas fa-briefcase text-sm" /> View Experience
          </MagneticButton>
          <MagneticButton
            href="contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold
              border border-[rgba(0,212,255,0.25)] text-cyan cursor-pointer"
          >
            <i className="fas fa-paper-plane text-sm" /> Get in Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[rgba(0,212,255,0.1)]"
        >
          <StatItem target={3} label="Top skills" />
          <StatItem target={2} label="Internships completed" />
          <StatItem target={3} label="Languages" />
          <StatItem target={3} label="Featured projects" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <span>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  )
}
