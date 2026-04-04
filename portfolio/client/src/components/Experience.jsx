import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    role: 'Academic Head',
    company: 'Kwame Nkrumah University of Science and Technology',
    icon: 'fa-university',
    period: 'Jan 2026 – Present · 4 mos',
    location: 'Kumasi, Ashanti Region, Ghana · On-site',
    type: 'Full-time',
    badge: { label: '● Current', cls: 'bg-neon/10 text-neon border border-neon/30' },
    dot: 'bg-cyan shadow-cyan',
    bullets: [
      'Leading academic initiatives and supporting students within the CS department ecosystem.',
      'Coordinating learning-focused programs and fostering collaboration among peers.',
      'Helping bridge coursework with practical, industry-relevant skills.',
    ],
    tags: ['Leadership', 'Academics', 'KNUST'],
  },
  {
    role: 'Cyber Security Analyst',
    company: 'Volta River Authority (DTI)',
    icon: 'fa-bolt',
    period: 'Oct 2025 – Dec 2025 · 3 mos',
    location: 'Accra, Greater Accra Region, Ghana · On-site',
    type: 'Internship',
    badge: { label: 'Internship', cls: 'bg-cyan/10 text-cyan border border-cyan/20' },
    dot: 'bg-purple-lt shadow-purple',
    bullets: [
      'Monitoring network activity for potential threats and vulnerabilities.',
      'Assisting in implementing and testing security protocols.',
      'Learning and applying strategies to prevent cyber attacks.',
      'Supporting incident response and security documentation.',
      'Assisting in configuring and maintaining network devices (routers, switches, firewalls).',
      'Troubleshooting connectivity and performance issues.',
      'Supporting the management of internal communication systems.',
      'Ensuring network reliability and uptime.',
    ],
    tags: ['Bash', 'Internet Security', 'Cybersecurity', 'Network Admin'],
  },
  {
    role: 'Data Analyst',
    company: 'Ghana Revenue Authority',
    icon: 'fa-landmark',
    period: 'Sep 2024 – Dec 2024 · 4 mos',
    location: 'Accra, Greater Accra Region, Ghana · On-site',
    type: 'Internship',
    badge: { label: 'Internship', cls: 'bg-cyan/10 text-cyan border border-cyan/20' },
    dot: 'bg-neon shadow-neon',
    bullets: [
      'Hardware diagnostics and computer repairs.',
      'Ensuring smooth operation of network systems including routers, switches, firewalls, and servers.',
      'Implementing security measures to protect sensitive data and prevent unauthorized access.',
      'Identifying and fixing database errors and issues.',
    ],
    tags: ['Data Analysis', 'IT Support', 'Database', 'Networking'],
  },
]

function TimelineItem({ job, delay }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative pl-10 mb-12 last:mb-0 transition-all duration-700
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
    >
      <div className={`absolute left-[-5px] top-1 w-3.5 h-3.5 rounded-full border-2 border-bg-2 ${job.dot}`} />

      <div className="glass rounded-2xl p-7 hover:border-cyan/35 hover:translate-x-1.5 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
          <span className="text-lg font-semibold">{job.role}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.badge.cls}`}>
            {job.badge.label}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-cyan text-sm mb-1">
          <i className={`fas ${job.icon} text-xs`} />
          {job.company}
        </div>
        <div className="font-mono text-xs text-slate-400 mb-5">
          {job.period} · {job.type} · {job.location}
        </div>

        <ul className="space-y-2 mb-5">
          {job.bullets.map((b, i) => (
            <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
              <span className="text-cyan mt-0.5 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {job.tags.map(t => (
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

export default function Experience() {
  const header = useScrollReveal()

  return (
    <section id="experience" className="relative z-10 section-padding bg-bg-2">
      <div
        ref={header.ref}
        className={`mb-14 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// experience</p>
        <h2 className="text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Internships in cybersecurity and data, plus academic leadership at KNUST.
        </p>
      </div>

      <div className="relative pl-4 border-l-2"
        style={{ borderImage: 'linear-gradient(to bottom, #00d4ff, #7c3aed, transparent) 1' }}>
        {jobs.map((job, i) => (
          <TimelineItem key={`${job.role}-${job.company}`} job={job} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
