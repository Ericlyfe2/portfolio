import { motion } from 'framer-motion'
import DotField from './DotField'

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
    date: 'Final-year group project · 2025/2026',
    title: 'GlobalBridge — All-in-One Platform for International Students',
    desc: 'Co-developed an all-in-one platform for international students and immigrants, unifying AI-guided visa support, a verified housing marketplace, scholarship & job matching, mentorship, and a settling-in toolkit into a single role-aware product.',
    bullets: [
      'Implemented real-time messaging over WebSockets and an AI toolkit (document checker, scholarship matcher, country comparison, essay scoring).',
      'Built an admin moderation console and internationalization across 14 languages with dark-mode support.',
    ],
    footer: [
      { icon: 'fa-plane-departure', label: 'Visa support' },
      { icon: 'fa-comments', label: 'Real-time chat' },
      { icon: 'fa-language', label: '14 languages' },
    ],
    emoji: '🌍',
    href: 'https://global-bridge-nu.vercel.app',
  },
  {
    tag: { label: 'Venture', cls: 'bg-orange-500/10 text-orange-400 border border-orange-500/25' },
    date: 'Software venture',
    title: 'Noventra Technologies',
    desc: 'Software development venture designing, building and maintaining modern web applications, mobile applications, cloud-based platforms and custom business software for individuals, startups and SMEs.',
    footer: [
      { icon: 'fa-rocket', label: 'Venture' },
      { icon: 'fa-cloud', label: 'Cloud platforms' },
      { icon: 'fa-mobile-screen', label: 'Web & mobile' },
    ],
    emoji: '🚀',
    href: 'https://noventra-rho.vercel.app',
  },
  {
    tag: { label: 'Project & Research', cls: 'bg-cyan/10 text-cyan border border-cyan/20' },
    date: 'Full-stack app',
    title: 'Crescendo – Full-Stack Music Streaming App',
    desc: 'Built a Spotify-inspired streaming platform end to end — responsive front-end UI, back-end services, authentication and dynamic content rendering.',
    footer: [
      { icon: 'fa-node', label: 'Node.js' },
      { icon: 'fa-leaf', label: 'MongoDB' },
      { icon: 'fa-fire', label: 'Firebase' },
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
  {
    tag: { label: 'Leadership', cls: 'bg-blue-500/10 text-blue-400 border border-blue-500/25' },
    date: '2024 – 2025',
    title: 'Public Relations Officer, Academic Board',
    desc: 'Managed board communications and publicity, serving as liaison between the Academic Board and the wider student body at KNUST.',
    footer: [
      { icon: 'fa-bullhorn', label: 'Communications' },
      { icon: 'fa-users', label: 'Academic Board' },
      { icon: 'fa-university', label: 'KNUST' },
    ],
    emoji: '📣',
  },
  {
    tag: { label: 'Leadership', cls: 'bg-blue-500/10 text-blue-400 border border-blue-500/25' },
    date: 'Jan 2023 – Present',
    title: 'Course Representative, Class of 2026',
    desc: 'Elected liaison for 500+ students; present course feedback to faculty and represent the class at departmental and academic board meetings.',
    footer: [
      { icon: 'fa-users', label: '500+ students' },
      { icon: 'fa-comment-dots', label: 'Course feedback' },
      { icon: 'fa-university', label: 'KNUST' },
    ],
    emoji: '🎓',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: i => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

function ActivityCard({ activity, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="relative group glass rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:shadow-card"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-purple"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="flex items-center justify-between mb-5">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.tag.cls}`}>
          {activity.tag.label}
        </span>
        <span className="font-mono text-xs text-slate-500">{activity.date}</span>
      </div>

      <motion.div
        className="text-3xl mb-3"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {activity.emoji}
      </motion.div>

      <h4 className="text-base font-semibold mb-2 leading-snug">
        {activity.href ? (
          <a
            href={activity.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan transition-colors inline-flex items-center gap-1.5"
          >
            {activity.title}
            <i className="fas fa-arrow-up-right-from-square text-xs opacity-60" />
          </a>
        ) : (
          activity.title
        )}
      </h4>
      <p className={`text-slate-400 text-sm leading-relaxed ${activity.bullets ? 'mb-3' : 'mb-5'}`}>{activity.desc}</p>

      {activity.bullets && (
        <ul className="text-slate-400 text-sm leading-relaxed space-y-1.5 mb-5 list-none pl-0">
          {activity.bullets.map(b => (
            <motion.li
              key={b}
              className="flex gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan shrink-0">•</span>
              {b}
            </motion.li>
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
    </motion.div>
  )
}

export default function Activities() {
  return (
    <section id="activities" className="relative z-10 section-padding bg-bg-2 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <DotField
          dotRadius={1.5}
          dotSpacing={22}
          bulgeStrength={50}
          glowRadius={140}
          gradientFrom="rgba(0, 212, 255, 0.12)"
          gradientTo="rgba(124, 58, 237, 0.1)"
          glowColor="#0a0f16"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// highlights</p>
        <h2 className="text-4xl font-bold mb-4">Achievements, <span className="gradient-text">Projects & Certifications</span></h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Certifications, awards, and projects that round out my profile beyond the classroom.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((a, i) => (
          <ActivityCard key={a.title} activity={a} index={i} />
        ))}
      </div>
    </section>
  )
}
