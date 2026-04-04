import { useScrollReveal } from '../hooks/useScrollReveal'

const topSkills = ['Bash', 'Internet Security', 'Cybersecurity']

const skills = [
  {
    icon: 'fa-shield-halved',
    color: 'cyan',
    title: 'Cybersecurity & Network Administration',
    desc: 'Threat monitoring, security protocols, incident support, and reliable network operations.',
    tags: ['Cybersecurity', 'Internet Security', 'Bash', 'Firewalls', 'Routers & switches'],
  },
  {
    icon: 'fa-chart-bar',
    color: 'purple',
    title: 'Data Analysis',
    desc: 'Working with data integrity, diagnostics, and practical analytics in IT environments.',
    tags: ['Data Analysis', 'SQL', 'Database troubleshooting'],
  },
  {
    icon: 'fa-code',
    color: 'neon',
    title: 'Web & Development',
    desc: 'Web development and application building with Python, C#, and modern tooling.',
    tags: ['Python', 'C#', 'Web development', 'HTML & CSS'],
  },
  {
    icon: 'fa-cubes',
    color: 'orange',
    title: 'Web3 & Blockchain',
    desc: 'Exploring decentralized technology and blockchain ecosystems alongside core CS skills.',
    tags: ['Web3', 'Blockchain'],
  },
]

const languages = ['English', 'French', 'Twi', 'Spanish']

const colorMap = {
  cyan:   { icon: 'bg-cyan/10 text-cyan',      top: 'from-cyan to-cyan-dk' },
  purple: { icon: 'bg-purple/15 text-purple-lt', top: 'from-purple-lt to-purple' },
  neon:   { icon: 'bg-neon/10 text-neon',       top: 'from-neon to-emerald-600' },
  orange: { icon: 'bg-orange-500/10 text-orange-400', top: 'from-orange-400 to-orange-600' },
}

function SkillCard({ skill, delay }) {
  const { ref, visible } = useScrollReveal()
  const c = colorMap[skill.color]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative group glass rounded-2xl p-7 overflow-hidden
        transition-all duration-500 hover:-translate-y-2 hover:border-cyan/40 hover:shadow-card
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.top}
        scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />

      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${c.icon}`}>
        <i className={`fas ${skill.icon}`} />
      </div>

      <h4 className="text-base font-semibold mb-2">{skill.title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{skill.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono text-slate-400
            bg-white/[0.03] border border-white/[0.07]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const header = useScrollReveal()
  const topBlock = useScrollReveal()
  const langBlock = useScrollReveal()

  return (
    <section id="skills" className="relative z-10 section-padding bg-bg-base">
      <div
        ref={header.ref}
        className={`mb-14 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// expertise</p>
        <h2 className="text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Cybersecurity, networking, data, development, and Web3 — aligned with my experience at VRA, GRA, and KNUST.
        </p>
      </div>

      <div
        ref={topBlock.ref}
        className={`glass rounded-2xl p-8 mb-10 transition-all duration-700
          ${topBlock.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// top skills</p>
        <h3 className="text-xl font-semibold mb-4">Top skills</h3>
        <div className="flex flex-wrap gap-2">
          {topSkills.map(s => (
            <span
              key={s}
              className="px-4 py-2 rounded-xl text-sm font-semibold font-mono text-cyan
                bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.25)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} delay={i * 80} />
        ))}
      </div>

      <div
        ref={langBlock.ref}
        className={`glass rounded-2xl p-8 transition-all duration-700
          ${langBlock.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// languages</p>
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map(lang => (
            <span
              key={lang}
              className="px-3 py-1.5 rounded-full text-sm font-mono text-slate-300
                bg-white/[0.03] border border-[rgba(0,212,255,0.15)]"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
