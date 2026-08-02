import { motion } from 'framer-motion'

const entries = [
  {
    emoji: '🎓',
    title: "Bachelor's degree — Computer Science",
    institution: 'Kwame Nkrumah University of Science and Technology',
    location: 'Kumasi, Ghana',
    period: 'Sep 2022 – Sep 2026',
    status: '● In Progress',
    tags: ['Computer Science', 'BSc', 'KNUST'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

function EducationCard({ entry, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center
        hover:border-cyan/40 transition-all duration-500 hover:shadow-card"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-4xl
          bg-gradient-to-br from-cyan/15 to-purple/15 border border-[rgba(0,212,255,0.15)]"
        whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
      >
        {entry.emoji}
      </motion.div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>

        <div className="flex items-center gap-1.5 text-cyan text-sm mb-1">
          <i className="fas fa-university text-xs" />
          {entry.institution}
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-2">
          <i className="fas fa-map-marker-alt text-xs text-cyan" />
          {entry.location}
        </div>

        <div className="font-mono text-xs text-slate-400 flex flex-wrap items-center gap-3 mb-4">
          <motion.span
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fas fa-calendar text-cyan" />
            {entry.period}
          </motion.span>
          {entry.status && (
            <motion.span
              className="text-neon font-medium"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {entry.status}
            </motion.span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {entry.tags.map((t, i) => (
            <motion.span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-mono text-slate-400
                bg-white/[0.03] border border-white/[0.07] cursor-default"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,212,255,0.08)' }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative z-10 section-padding bg-bg-base">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// academic background</p>
        <h2 className="text-4xl font-bold mb-4"><span className="gradient-text">Education</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Undergraduate degree in Computer Science at KNUST.
        </p>
      </motion.div>

      <div className="max-w-2xl flex flex-col gap-6">
        {entries.map((entry, i) => (
          <EducationCard key={entry.institution} entry={entry} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
