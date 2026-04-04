import { useScrollReveal } from '../hooks/useScrollReveal'

const chips = [
  'Bash', 'Internet Security', 'Cybersecurity',
  'Python', 'C#', 'Web3', 'Blockchain',
  'Data Analysis', 'Network Administration', 'Web development',
]

export default function About() {
  const left = useScrollReveal()
  const right = useScrollReveal()

  return (
    <section id="about" className="relative z-10 section-padding bg-bg-2">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div
          ref={left.ref}
          className={`flex justify-center transition-all duration-700 ${left.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-cyan/20 animate-spin-slow" />
            <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-purple/20 animate-spin-reverse" />

            <div className="relative h-64 w-64">
              <div className="relative h-full w-full overflow-hidden rounded-2xl
                bg-gradient-to-br from-bg-3 to-bg-base border border-[rgba(0,212,255,0.15)]
                shadow-[0_0_40px_rgba(0,212,255,0.08)]">
                <img
                  src="/profile.png"
                  alt="Eric Asante — graduation portrait at KNUST"
                  className="absolute inset-0 z-0 h-full w-full object-cover object-[center_15%]"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #00d4ff)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    animation: 'borderGlow 4s linear infinite',
                  }}
                />
              </div>

              <div className="absolute -top-4 -right-6 z-20 max-w-[220px] px-3 py-1.5 rounded-xl glass text-xs font-mono text-cyan
                border border-[rgba(0,212,255,0.3)] shadow-card leading-snug">
                Cybersecurity &amp; Network Admin
              </div>
              <div className="absolute -bottom-4 -left-6 z-20 px-3 py-1.5 rounded-xl glass text-xs font-mono text-purple-lt
                border border-purple/30 whitespace-nowrap shadow-card">
                Student @ KNUST
              </div>
            </div>
          </div>
        </div>

        <div
          ref={right.ref}
          className={`transition-all duration-700 delay-150 ${right.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
          <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// about me</p>
          <h2 className="text-4xl font-bold mb-2">
            Eric Asante
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-cyan/40 pl-4">
            Student @ KNUST · DTI Intern @ Volta River Authority · Cybersecurity &amp; Network Administration ·
            Data Analysis · Web3 &amp; Blockchain · Python &amp; C# Developer ·{' '}
            <span className="text-slate-500">Accra, Greater Accra Region, Ghana</span>
          </p>

          <h3 className="text-lg font-semibold text-slate-200 mb-3">Summary</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            I am a student at Kwame Nkrumah University of Science and Technology, passionate about technology and
            innovation. I have growing experience in software development, IT infrastructure, and cloud services.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            I enjoy combining creative ideas with practical solutions to build useful and efficient applications.
            I&apos;m detail-oriented, a strong team player, and capable of managing multiple projects effectively.
            I&apos;m especially interested in web development, blockchain, and cloud computing, and I&apos;m always
            eager to learn, grow, and take on new challenges.
          </p>

          <div className="flex flex-wrap gap-2">
            {chips.map(chip => (
              <span key={chip}
                className="px-3 py-1 rounded-full text-xs font-mono text-cyan
                  bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.18)]">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
