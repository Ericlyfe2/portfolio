import { motion } from 'framer-motion'
import TrueFocus from './TrueFocus'
import ElectricBorder from './ElectricBorder'

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
    title: 'Data Analysis & Databases',
    desc: 'Working with data integrity, diagnostics, and practical analytics in IT environments.',
    tags: ['Data Analysis', 'SQL', 'MySQL', 'MongoDB', 'Database troubleshooting'],
  },
  {
    icon: 'fa-code',
    color: 'neon',
    title: 'Web & Development',
    desc: 'Full-stack web development and application building with Python, C#, JavaScript, and modern tooling.',
    tags: ['Python', 'C#', 'JavaScript', 'HTML', 'CSS', 'Web development'],
  },
  {
    icon: 'fa-layer-group',
    color: 'orange',
    title: 'Frameworks & Platforms',
    desc: 'Building on modern frameworks and platforms, with working knowledge of cloud computing and Web3 fundamentals.',
    tags: ['.NET', 'Node.js', 'Firebase', 'Web3 / Blockchain', 'Cloud computing'],
  },
]

const languages = ['English', 'French', 'Twi']

const colorMap = {
  cyan:   { icon: 'bg-cyan/10 text-cyan',      top: 'from-cyan to-cyan-dk',      hex: '#00d4ff' },
  purple: { icon: 'bg-purple/15 text-purple-lt', top: 'from-purple-lt to-purple', hex: '#7c3aed' },
  neon:   { icon: 'bg-neon/10 text-neon',       top: 'from-neon to-emerald-600', hex: '#00ff88' },
  orange: { icon: 'bg-orange-500/10 text-orange-400', top: 'from-orange-400 to-orange-600', hex: '#fb923c' },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: i => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function SkillCard({ skill, index }) {
  const c = colorMap[skill.color]

  return (
    <ElectricBorder color={c.hex} speed={0.7} chaos={0.06} borderRadius={16}>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative group glass rounded-2xl p-7 overflow-hidden
          transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
      >
        <motion.div
          className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.top}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${c.icon}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <i className={`fas ${skill.icon}`} />
        </motion.div>

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
      </motion.div>
    </ElectricBorder>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 section-padding bg-bg-base">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// expertise</p>
        <h2 className="text-4xl font-bold mb-4">
          <TrueFocus
            sentence="Technical Skills"
            manualMode={false}
            blurAmount={4}
            borderColor="#00d4ff"
            glowColor="rgba(0, 212, 255, 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
          />
        </h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Cybersecurity, networking, data, development, and Web3 — aligned with my experience at VRA, GRA, and KNUST.
        </p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass rounded-2xl p-8 mb-10"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// top skills</p>
        <h3 className="text-xl font-semibold mb-4">Top skills</h3>
        <div className="flex flex-wrap gap-2">
          {topSkills.map((s, i) => (
            <motion.span
              key={s}
              className="px-4 py-2 rounded-xl text-sm font-semibold font-mono text-cyan
                bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.25)] cursor-default"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,212,255,0.15)' }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass rounded-2xl p-8"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// languages</p>
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, i) => (
            <motion.span
              key={lang}
              className="px-3 py-1.5 rounded-full text-sm font-mono text-slate-300
                bg-white/[0.03] border border-[rgba(0,212,255,0.15)] cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.08, borderColor: 'rgba(0,212,255,0.4)' }}
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
