import { useScrollReveal } from '../hooks/useScrollReveal'

const links = [
  {
    icon: 'fas fa-phone',
    iconCls: 'bg-neon/10 text-neon',
    label: 'Phone (Home)',
    sub: '0596651140',
    href: 'tel:+233596651140',
  },
  {
    icon: 'fas fa-envelope',
    iconCls: 'bg-cyan/10 text-cyan',
    label: 'Email',
    sub: 'nicklaus4lyfe30@gmail.com',
    href: 'mailto:nicklaus4lyfe30@gmail.com',
  },
  {
    icon: 'fab fa-linkedin-in',
    iconCls: 'bg-[rgba(10,102,194,0.2)] text-[#0a66c2]',
    label: 'LinkedIn',
    sub: 'linkedin.com/in/eric-asante-abb1052a2',
    href: 'https://www.linkedin.com/in/eric-asante-abb1052a2/',
  },
  {
    icon: 'fab fa-github',
    iconCls: 'bg-white/5 text-white',
    label: 'GitHub',
    sub: 'github.com/Ericlyfe2',
    href: 'https://github.com/Ericlyfe2',
  },
]

export default function Contact() {
  const header = useScrollReveal()
  const left = useScrollReveal()
  const right = useScrollReveal()

  return (
    <section id="contact" className="relative z-10 section-padding bg-bg-base">
      <div
        ref={header.ref}
        className={`mb-14 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// get in touch</p>
        <h2 className="text-4xl font-bold">Let&apos;s <span className="gradient-text">Connect</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div
          ref={left.ref}
          className={`transition-all duration-700 ${left.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            Based in Accra, Greater Accra Region, Ghana. Always happy to connect about cybersecurity,
            network administration, data analysis, web development, and Web3.
          </p>

          <div className="flex flex-col gap-4">
            {links.map(({ icon, iconCls, label, sub, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-4 glass rounded-xl
                  hover:border-cyan/35 hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-base ${iconCls}`}>
                  <i className={icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{label}</div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">{sub}</div>
                </div>
                <i className="fas fa-arrow-right text-slate-500 text-xs group-hover:text-cyan transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div
          ref={right.ref}
          className={`glass rounded-2xl p-8 transition-all duration-700 delay-150
            ${right.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

          <form action="https://api.staticforms.dev/submit" method="POST" className="space-y-5">
            <input type="hidden" name="accessKey" value="sf_270df540c066ca3aef7eb827" />
            <input type="hidden" name="redirectTo" value="https://portfolio-ten-jade-55.vercel.app/#contact" />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" name="name" placeholder="John Doe" required />
              <Field label="Email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="Collaboration opportunity..." />
            <div>
              <label className="block text-xs text-slate-400 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
                className="w-full bg-white/[0.02] border border-[rgba(0,212,255,0.15)] rounded-xl
                  px-4 py-3 text-sm text-slate-200 placeholder-slate-600 resize-none
                  focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/20 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300
                flex items-center justify-center gap-2
                bg-gradient-to-r from-cyan-dk to-purple text-white hover:-translate-y-0.5 hover:shadow-cyan"
            >
              <i className="fas fa-paper-plane text-xs" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-xs text-slate-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.02] border border-[rgba(0,212,255,0.15)] rounded-xl
          px-4 py-3 text-sm text-slate-200 placeholder-slate-600
          focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/20 transition-colors"
      />
    </div>
  )
}
