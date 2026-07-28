import { motion } from 'framer-motion'

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

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: i => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

function TimelineItem({ job, index }) {
  return (
    <motion.div
      custom={index}
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative pl-10 mb-12 last:mb-0"
    >
      <motion.div
        className={`absolute left-[-5px] top-1 w-3.5 h-3.5 rounded-full border-2 border-bg-2 ${job.dot}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
      />

      <motion.div
        className="glass rounded-2xl p-7 hover:border-cyan/35 transition-all duration-300"
        whileHover={{ x: 6, transition: { duration: 0.2 } }}
      >
        <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
          <span className="text-lg font-semibold">{job.role}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.badge.cls}`}>
            {job.badge.label}
          </span>
        </div>

        <motion.div
          className="flex items-center gap-1.5 text-cyan text-sm mb-1"
          whileHover={{ x: 3 }}
        >
          <i className={`fas ${job.icon} text-xs`} />
          {job.company}
        </motion.div>
        <div className="font-mono text-xs text-slate-400 mb-5">
          {job.period} · {job.type} · {job.location}
        </div>

        <ul className="space-y-2 mb-5">
          {job.bullets.map((b, i) => (
            <motion.li
              key={i}
              className="text-slate-400 text-sm leading-relaxed flex gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            >
              <span className="text-cyan mt-0.5 shrink-0">▸</span>
              {b}
            </motion.li>
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
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 section-padding bg-bg-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// experience</p>
        <h2 className="text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Internships in cybersecurity and data, plus academic leadership at KNUST.
        </p>
      </motion.div>

      <div className="relative pl-4 border-l-2"
        style={{ borderImage: 'linear-gradient(to bottom, #00d4ff, #7c3aed, transparent) 1' }}>
        {jobs.map((job, i) => (
          <TimelineItem key={`${job.role}-${job.company}`} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
