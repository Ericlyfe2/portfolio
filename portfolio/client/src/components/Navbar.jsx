import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Highlights', href: '#activities' },
]

const containerVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const linkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: i => ({ y: 0, opacity: 1, transition: { delay: 0.1 + i * 0.05, duration: 0.4 } }),
}

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about','skills','experience','education','gallery','activities','contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
        ${scrolled ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-5'}
        px-8 md:px-16 bg-[rgba(5,8,16,0.88)] backdrop-blur-xl border-b border-[rgba(0,212,255,0.12)]`}
    >
      <motion.a
        href="#hero"
        className="font-mono text-lg text-cyan hover:opacity-80 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        eric<span className="text-purple-lt">.dev</span>
      </motion.a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ label, href }, i) => {
          const id = href.slice(1)
          return (
            <motion.li
              key={id}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors relative group
                  ${active === id ? 'text-cyan' : 'text-slate-400 hover:text-cyan'}`}
              >
                {label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: active === id ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.li>
          )
        })}
      </ul>

      <motion.button
        onClick={() => scrollTo('contact')}
        className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
          bg-gradient-to-r from-cyan-dk to-purple text-white transition-all duration-300"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-paper-plane text-xs" /> Contact
      </motion.button>

      <button
        className="md:hidden text-slate-300 hover:text-cyan transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 bg-bg-2 border-b border-[rgba(0,212,255,0.12)] py-4 md:hidden"
          >
            {[...links, { label: 'Contact', href: '#contact' }].map(({ label, href }, i) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href.slice(1))}
                className="block w-full text-left px-8 py-3 text-slate-300 hover:text-cyan hover:bg-[rgba(0,212,255,0.05)] transition-colors text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                whileHover={{ x: 8 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
