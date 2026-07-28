import { motion } from 'framer-motion'

const shots = [
  {
    src: '/gallery-community-event.png',
    alt: 'Eric Asante with a colleague in front of a Future Ready and Our Supporting Community event backdrop.',
    title: 'Community & partners',
    subtitle: 'Industry collaborators and supporting organizations at a tech community event.',
  },
  {
    src: '/gallery-devfest-accra.png',
    alt: 'Eric Asante at DevFest Accra in front of the sponsor step-and-repeat backdrop.',
    title: 'DevFest Accra',
    subtitle: 'Google Developer Groups — celebrating Accra’s developer community.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: i => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

function GalleryCard({ item, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl glass border border-[rgba(0,212,255,0.12)] p-2 sm:p-3
          shadow-card transition-all duration-500"
        whileHover={{
          y: -8,
          boxShadow: '0 28px 56px rgba(0,0,0,0.45)',
          borderColor: 'rgba(0,212,255,0.25)',
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-purple"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="relative overflow-hidden rounded-xl bg-bg-base/70 aspect-[3/4] sm:aspect-[4/5]">
          <motion.img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-90"
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(5,8,16,0.85) 100%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
            <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-sm mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md">
              {item.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default function EventGallery() {
  return (
    <section id="gallery" className="relative z-10 section-padding bg-bg-3 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '56px 56px'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14 max-w-2xl"
        >
          <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// moments</p>
          <h2 className="text-4xl font-bold mb-4">
            Out in the <span className="gradient-text">community</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Conferences, meetups, and the sponsors and peers that make Ghana&apos;s tech scene thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {shots.map((item, i) => (
            <GalleryCard key={item.src} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
