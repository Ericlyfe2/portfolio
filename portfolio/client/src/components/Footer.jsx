import { motion } from 'framer-motion'

const socials = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/eric-asante-abb1052a2/' },
  { icon: 'fab fa-github', href: 'https://github.com/Ericlyfe2' },
  { icon: 'fab fa-twitter', href: '#' },
]

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 bg-bg-2 border-t border-[rgba(0,212,255,0.1)] px-[10%] py-10
        flex flex-wrap justify-between items-center gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.a
        href="#hero"
        className="font-mono text-lg text-cyan hover:opacity-80 transition-opacity"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        whileHover={{ scale: 1.05 }}
      >
        eric<span className="text-purple-lt">.dev</span>
      </motion.a>

      <motion.p
        className="text-slate-500 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        © 2026 Eric Asante · Built with React &amp; Tailwind · Made in Ghana 🇬🇭
      </motion.p>

      <div className="flex gap-3">
        {socials.map(({ icon, href }) => (
          <motion.a
            key={icon}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 text-sm
              hover:text-cyan hover:border-cyan/40 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={icon} />
          </motion.a>
        ))}
      </div>
    </motion.footer>
  )
}
