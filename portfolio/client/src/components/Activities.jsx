import { useScrollReveal } from '../hooks/useScrollReveal'

const activities = [
  {
    tag: { label: 'Certification', cls: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' },
    date: 'Training program',
    title: 'JOHVIC FIBERTECH SOLUTIONS',
    desc: 'Industry certification through JOHVIC Fibertech Solutions, complementing my cybersecurity and network administration learning path.',
    footer: [
      { icon: 'fa-certificate', label: 'Certified' },
      { icon: 'fa-network-wired', label: 'Fibertech' },
      { icon: 'fa-graduation-cap', label: 'Professional dev.' },
    ],
    emoji: '📡',
  },
  {
    tag: { label: 'Achievement & Award', cls: 'bg-neon/10 text-neon border border-neon/30' },
    date: '25 Aug 2024',
    title: 'Best Course Representative',
    desc: 'Recognized at Kwame Nkrumah University of Science and Technology for outstanding service and leadership as course representative.',
    footer: [
      { icon: 'fa-trophy', label: 'Award' },
      { icon: 'fa-university', label: 'KNUST' },
      { icon: 'fa-star', label: 'Leadership' },
    ],
    emoji: '🏆',
  },
  {
    tag: { label: 'Project & Research', cls: 'bg-cyan/10 text-cyan border border-cyan/20' },
    date: 'Full-stack mobile',
    title: 'Crescendo – Full-Stack Mobile Application',
    desc: 'A functional music streaming platform inspired by Spotify.',
    bullets: [
      'Developed front-end and back-end systems.',
      'Implemented responsive design and dynamic content rendering.',
      'Showcased proficiency in full-stack development and UI/UX.',
    ],
    footer: [
      { icon: 'fa-mobile-screen', label: 'Mobile' },
      { icon: 'fa-layer-group', label: 'Full-stack' },
      { icon: 'fa-music', label: 'Streaming' },
    ],
    emoji: '🎵',
  },
  {
    tag: { label: 'Certification', cls: 'bg-purple/15 text-purple-lt border border-purple/30' },
    date: '2 Aug 2024',
    title: 'Code App Fair Quest 1.0',
    desc: 'Certified by Prof. J.B. Acquah (Head of Department) for participation and achievement in the Code App Fair Quest 1.0.',
    footer: [
      { icon: 'fa-certificate', label: 'Certified' },
      { icon: 'fa-user-tie', label: 'Prof. J.B. Acquah' },
      { icon: 'fa-code', label: 'Code Fair' },
    ],
    emoji: '📜',
  },
]

function ActivityCard({ activity, delay }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative group glass rounded-2xl p-7 overflow-hidden
        transition-all duration-500 hover:-translate-y-2 hover:shadow-card
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-purple
        scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

      <div className="flex items-center justify-between mb-5">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.tag.cls}`}>
          {activity.tag.label}
        </span>
        <span className="font-mono text-xs text-slate-500">{activity.date}</span>
      </div>

      <div className="text-3xl mb-3">{activity.emoji}</div>
      <h4 className="text-base font-semibold mb-2 leading-snug">{activity.title}</h4>
      <p className={`text-slate-400 text-sm leading-relaxed ${activity.bullets ? 'mb-3' : 'mb-5'}`}>{activity.desc}</p>
      {activity.bullets && (
        <ul className="text-slate-400 text-sm leading-relaxed space-y-1.5 mb-5 list-none pl-0">
          {activity.bullets.map(b => (
            <li key={b} className="flex gap-2">
              <span className="text-cyan shrink-0">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[rgba(0,212,255,0.1)]">
        {activity.footer.map(({ icon, label }) => (
          <span key={label} className="flex items-center gap-1.5 text-xs text-slate-400">
            <i className={`fas ${icon} text-cyan`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Activities() {
  const header = useScrollReveal()

  return (
    <section id="activities" className="relative z-10 section-padding bg-bg-2">
      <div
        ref={header.ref}
        className={`mb-14 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// highlights</p>
        <h2 className="text-4xl font-bold mb-4">Achievements, <span className="gradient-text">Projects & Certifications</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Certifications, awards, and projects that round out my profile beyond the classroom.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((a, i) => (
          <ActivityCard key={a.title} activity={a} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
