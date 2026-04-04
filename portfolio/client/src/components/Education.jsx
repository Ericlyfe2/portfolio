import { useScrollReveal } from '../hooks/useScrollReveal'

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

function EducationCard({ entry, delay }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center
        hover:border-cyan/40 hover:-translate-y-1 transition-all duration-500 hover:shadow-card
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-4xl
        bg-gradient-to-br from-cyan/15 to-purple/15 border border-[rgba(0,212,255,0.15)]">
        {entry.emoji}
      </div>

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
          <span className="flex items-center gap-1.5">
            <i className="fas fa-calendar text-cyan" />
            {entry.period}
          </span>
          {entry.status && (
            <span className="text-neon font-medium">{entry.status}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {entry.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-mono text-slate-400
              bg-white/[0.03] border border-white/[0.07]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const header = useScrollReveal()

  return (
    <section id="education" className="relative z-10 section-padding bg-bg-base">
      <div
        ref={header.ref}
        className={`mb-14 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// academic background</p>
        <h2 className="text-4xl font-bold mb-4"><span className="gradient-text">Education</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Undergraduate degree in Computer Science at KNUST.
        </p>
      </div>

      <div className="max-w-2xl flex flex-col gap-6">
        {entries.map((entry, i) => (
          <EducationCard key={entry.institution} entry={entry} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
