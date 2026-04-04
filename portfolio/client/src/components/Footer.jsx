export default function Footer() {
  const socials = [
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/eric-asante-abb1052a2/' },
    { icon: 'fab fa-github', href: 'https://github.com/Ericlyfe2' },
    { icon: 'fab fa-twitter', href: '#' },
  ]

  return (
    <footer className="relative z-10 bg-bg-2 border-t border-[rgba(0,212,255,0.1)] px-[10%] py-10
      flex flex-wrap justify-between items-center gap-6">

      <a href="#hero" className="font-mono text-lg text-cyan hover:opacity-80 transition-opacity"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        eric<span className="text-purple-lt">.dev</span>
      </a>

      <p className="text-slate-500 text-xs">
        © 2026 Eric Asante · Built with React & Tailwind · Made in Ghana 🇬🇭
      </p>

      <div className="flex gap-3">
        {socials.map(({ icon, href }) => (
          <a
            key={icon}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 text-sm
              hover:text-cyan hover:border-cyan/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className={icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}
