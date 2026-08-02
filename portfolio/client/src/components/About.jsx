import { motion } from 'framer-motion'
import DecryptedText from './DecryptedText'
import ProfileCard from './ProfileCard'
import ElectricBorder from './ElectricBorder'

const chips = [
  'Bash', 'Internet Security', 'Cybersecurity',
  'Python', 'C#', 'JavaScript', '.NET', 'Node.js',
  'MySQL', 'MongoDB', 'Firebase', 'Web3', 'Blockchain',
  'Data Analysis', 'Network Administration', 'Web development',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="relative z-10 section-padding bg-bg-2">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ElectricBorder color="#00d4ff" speed={1} chaos={0.1} borderRadius={30} style={{ maxWidth: '340px' }}>
            <ProfileCard
              name="Eric Asante"
              title="Software Engineering & Cybersecurity Intern"
              handle="Ericlyfe2"
              status="Open to opportunities"
              contactText="Contact Me"
              avatarUrl="/profile.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </ElectricBorder>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p variants={itemVariants} className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// about me</motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-2">
            <DecryptedText
              text="Eric Asante"
              animateOn="view"
              sequential
              revealDirection="center"
              speed={30}
              useOriginalCharsOnly
              encryptedClassName="text-slate-500"
            />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-cyan/40 pl-4">
            Software Engineering &amp; Cybersecurity Intern @ Volta River Authority (DTI) · Final-year BSc Computer
            Science @ KNUST · Full-Stack Developer (Python, C#/.NET, Node.js, MySQL, MongoDB) ·{' '}
            <span className="text-slate-500">Accra, Greater Accra Region, Ghana</span>
          </motion.p>

          <motion.h3 variants={itemVariants} className="text-lg font-semibold text-slate-200 mb-3">Summary</motion.h3>
          <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed mb-4">
            Software engineering and cybersecurity intern at the Volta River Authority (DTI Office), building and
            securing applications inside a national critical-infrastructure environment, with prior hands-on
            experience administering networks, servers and firewalls at the Ghana Revenue Authority.
          </motion.p>
          <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed mb-6">
            Full-stack developer in Python, C#/.NET, Node.js, MySQL and MongoDB, with working knowledge of cloud
            platforms, network infrastructure and information security. Final-year BSc Computer Science candidate at
            KNUST (2026) and elected leader representing 500+ students, seeking to grow within Huawei Ghana&apos;s
            ICT and technology ecosystem.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                className="px-3 py-1 rounded-full text-xs font-mono text-cyan
                  bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.18)] cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,212,255,0.15)' }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
