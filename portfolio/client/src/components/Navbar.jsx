import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Highlights', href: '#activities' },
]

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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
      ${scrolled ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-5'}
      px-8 md:px-16 bg-[rgba(5,8,16,0.88)] backdrop-blur-xl border-b border-[rgba(0,212,255,0.12)]`}>

      <a href="#hero" className="font-mono text-lg text-cyan hover:opacity-80 transition-opacity">
        eric<span className="text-purple-lt">.dev</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ label, href }) => {
          const id = href.slice(1)
          return (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors relative group
                  ${active === id ? 'text-cyan' : 'text-slate-400 hover:text-cyan'}`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan transition-all duration-300
                  ${active === id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            </li>
          )
        })}
      </ul>

      <button
        onClick={() => scrollTo('contact')}
        className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
          bg-gradient-to-r from-cyan-dk to-purple text-white transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-cyan"
      >
        <i className="fas fa-paper-plane text-xs" /> Contact
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-300 hover:text-cyan transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-2 border-b border-[rgba(0,212,255,0.12)] py-4 md:hidden">
          {[...links, { label: 'Contact', href: '#contact' }].map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href.slice(1))}
              className="block w-full text-left px-8 py-3 text-slate-300 hover:text-cyan hover:bg-[rgba(0,212,255,0.05)] transition-colors text-sm"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
